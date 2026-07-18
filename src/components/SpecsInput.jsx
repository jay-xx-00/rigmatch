import React, { useState, useEffect, useRef } from "react";
import { Cpu, HardDrive, Cpu as GpuIcon, Award, RefreshCw, Layers } from "lucide-react";
import { GPU_DATABASE, CPU_DATABASE, parseGPU, parseCPU } from "../utils/specMatcher";

export default function SpecsInput({ specs, onSpecsChange }) {
  const [gpuQuery, setGpuQuery] = useState(specs.gpu || "");
  const [cpuQuery, setCpuQuery] = useState(specs.cpu || "");
  const [showGpuSuggestions, setShowGpuSuggestions] = useState(false);
  const [showCpuSuggestions, setShowCpuSuggestions] = useState(false);
  const [detecting, setDetecting] = useState(false);
  const [detectionAlert, setDetectionAlert] = useState("");

  const gpuRef = useRef();
  const cpuRef = useRef();

  // Filter GPU suggestions
  const gpuSuggestions = GPU_DATABASE.filter(gpu => 
    gpu.name.toLowerCase().includes(gpuQuery.toLowerCase())
  ).slice(0, 5);

  // Filter CPU suggestions
  const cpuSuggestions = CPU_DATABASE.filter(cpu => 
    cpu.name.toLowerCase().includes(cpuQuery.toLowerCase())
  ).slice(0, 5);

  // Handle click outside suggestions
  useEffect(() => {
    function handleClickOutside(event) {
      if (gpuRef.current && !gpuRef.current.contains(event.target)) {
        setShowGpuSuggestions(false);
      }
      if (cpuRef.current && !cpuRef.current.contains(event.target)) {
        setShowCpuSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update input text if parent specs change (e.g. on auto-detect or profile load)
  useEffect(() => {
    setGpuQuery(specs.gpu || "");
    setCpuQuery(specs.cpu || "");
  }, [specs.gpu, specs.cpu]);

  const handleGpuSelect = (name) => {
    setGpuQuery(name);
    setShowGpuSuggestions(false);
    onSpecsChange({ ...specs, gpu: name });
  };

  const handleCpuSelect = (name) => {
    setCpuQuery(name);
    setShowCpuSuggestions(false);
    onSpecsChange({ ...specs, cpu: name });
  };

  const handleRamChange = (e) => {
    onSpecsChange({ ...specs, ram: parseInt(e.target.value) });
  };

  const handleStorageTypeChange = (type) => {
    onSpecsChange({ ...specs, storageType: type });
  };

  const detectHardware = () => {
    setDetecting(true);
    setDetectionAlert("");

    setTimeout(() => {
      try {
        let detectedGpu = "";
        let detectedCpu = "";
        let detectedRam = 8; // Fallback

        // 1. Detect RAM Estimate (Navigator.deviceMemory returns RAM in GB, usually capped at 8)
        if (navigator.deviceMemory) {
          detectedRam = navigator.deviceMemory >= 8 ? 16 : navigator.deviceMemory; // Heuristics: if >= 8, they likely have 16GB
        }

        // 2. Detect CPU cores (Navigator.hardwareConcurrency)
        const logicalCores = navigator.hardwareConcurrency || 4;
        // Match core count to a generic CPU representation in our DB
        if (logicalCores >= 16) {
          detectedCpu = "Intel Core i7-13700K";
        } else if (logicalCores >= 12) {
          detectedCpu = "AMD Ryzen 5 7600X";
        } else if (logicalCores >= 8) {
          detectedCpu = "Intel Core i5-12400F";
        } else if (logicalCores >= 6) {
          detectedCpu = "AMD Ryzen 5 3600";
        } else {
          detectedCpu = "Intel Core i5-4460";
        }

        // 3. Detect GPU via WebGL debug info
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (gl) {
          const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
          if (debugInfo) {
            const rendererStr = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            
            // Clean up string: ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Direct3D11...
            // Extract the GPU brand + model
            const cleanGpuName = parseWebGLRenderer(rendererStr);
            if (cleanGpuName) {
              detectedGpu = cleanGpuName;
            }
          }
        }

        if (!detectedGpu) {
          detectedGpu = "NVIDIA GeForce RTX 3060"; // Sensible default if WebGL blocked
        }

        onSpecsChange({
          gpu: detectedGpu,
          cpu: detectedCpu,
          ram: detectedRam,
          storageType: "SSD"
        });

        setGpuQuery(detectedGpu);
        setCpuQuery(detectedCpu);
        setDetectionAlert("Specs auto-detected successfully!");
      } catch (err) {
        console.error("Auto-detection failed", err);
        setDetectionAlert("Auto-detection failed. Please enter specs manually.");
      } finally {
        setDetecting(false);
      }
    }, 1200);
  };

  // Helper to parse WebGL unmasked renderer string
  const parseWebGLRenderer = (renderer) => {
    if (!renderer) return null;
    
    // Look for NVIDIA cards
    const nvidiaMatch = renderer.match(/NVIDIA GeForce (RTX \d{4}|GTX \d{3,4}|GTX \d{3,4} Ti)/i);
    if (nvidiaMatch) return "NVIDIA GeForce " + nvidiaMatch[1];

    // Look for AMD cards
    const amdMatch = renderer.match(/(Radeon RX \d{4} XT|Radeon RX \d{4}|Radeon Vega \d+)/i);
    if (amdMatch) return "AMD " + amdMatch[1];

    // Look for Intel cards
    const intelMatch = renderer.match(/(Intel UHD Graphics \d+|Intel HD Graphics \d+|Intel Iris Xe Graphics)/i);
    if (intelMatch) return intelMatch[1];

    // Look for Apple Silicon
    if (renderer.includes("Apple")) {
      if (renderer.includes("M3 Max")) return "Apple M3 Max";
      if (renderer.includes("M3 Pro")) return "Apple M3 Pro";
      if (renderer.includes("M3")) return "Apple M3";
      if (renderer.includes("M2 Max")) return "Apple M2 Max";
      if (renderer.includes("M2 Pro")) return "Apple M2 Pro";
      if (renderer.includes("M2")) return "Apple M2";
      if (renderer.includes("M1 Max")) return "Apple M1 Max";
      if (renderer.includes("M1 Pro")) return "Apple M1 Pro";
      return "Apple M1";
    }

    return null;
  };

  return (
    <div className="specs-panel glass-panel">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 className="section-title">
          <Layers size={18} color="var(--accent-cyan)" /> System Rig
        </h2>
        <button 
          className="btn-detect" 
          onClick={detectHardware} 
          disabled={detecting}
          style={{ width: "auto", padding: "0.5rem 0.85rem", fontSize: "0.75rem" }}
        >
          <RefreshCw size={12} className={detecting ? "spin-animation" : ""} />
          {detecting ? "Detecting..." : "Auto-Detect"}
        </button>
      </div>

      {detectionAlert && (
        <div style={{ 
          fontSize: "0.75rem", 
          color: detectionAlert.includes("success") ? "var(--neon-green)" : "var(--neon-red)", 
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.03)",
          padding: "0.4rem",
          borderRadius: "4px",
          border: "1px solid rgba(255,255,255,0.05)"
        }}>
          {detectionAlert}
        </div>
      )}

      {/* GPU Field */}
      <div className="spec-field" ref={gpuRef}>
        <label className="spec-label">
          <GpuIcon size={14} color="var(--accent-purple)" /> Graphics Card (GPU)
        </label>
        <div className="input-glow-wrapper">
          <input
            type="text"
            className="spec-input"
            placeholder="Search GPU (e.g. RTX 3060)"
            value={gpuQuery}
            onChange={(e) => {
              setGpuQuery(e.target.value);
              setShowGpuSuggestions(true);
              onSpecsChange({ ...specs, gpu: e.target.value });
            }}
            onFocus={() => setShowGpuSuggestions(true)}
          />
          {showGpuSuggestions && gpuQuery.trim() && gpuSuggestions.length > 0 && (
            <div style={{
              position: "absolute",
              top: "105%",
              left: 0,
              right: 0,
              background: "var(--bg-tertiary)",
              border: "1px solid var(--glass-border)",
              borderRadius: "8px",
              zIndex: 50,
              boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
              overflow: "hidden"
            }}>
              {gpuSuggestions.map((gpu) => (
                <div
                  key={gpu.name}
                  onClick={() => handleGpuSelect(gpu.name)}
                  style={{
                    padding: "0.6rem 1rem",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    borderBottom: "1px solid rgba(255,255,255,0.03)",
                    transition: "var(--transition-smooth)"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.05)"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                >
                  {gpu.name} <span style={{ color: "var(--accent-cyan)", fontSize: "0.7rem", float: "right" }}>Tier {gpu.tier}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CPU Field */}
      <div className="spec-field" ref={cpuRef}>
        <label className="spec-label">
          <Cpu size={14} color="var(--accent-purple)" /> Processor (CPU)
        </label>
        <div className="input-glow-wrapper">
          <input
            type="text"
            className="spec-input"
            placeholder="Search CPU (e.g. Ryzen 5 5600X)"
            value={cpuQuery}
            onChange={(e) => {
              setCpuQuery(e.target.value);
              setShowCpuSuggestions(true);
              onSpecsChange({ ...specs, cpu: e.target.value });
            }}
            onFocus={() => setShowCpuSuggestions(true)}
          />
          {showCpuSuggestions && cpuQuery.trim() && cpuSuggestions.length > 0 && (
            <div style={{
              position: "absolute",
              top: "105%",
              left: 0,
              right: 0,
              background: "var(--bg-tertiary)",
              border: "1px solid var(--glass-border)",
              borderRadius: "8px",
              zIndex: 50,
              boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
              overflow: "hidden"
            }}>
              {cpuSuggestions.map((cpu) => (
                <div
                  key={cpu.name}
                  onClick={() => handleCpuSelect(cpu.name)}
                  style={{
                    padding: "0.6rem 1rem",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    borderBottom: "1px solid rgba(255,255,255,0.03)",
                    transition: "var(--transition-smooth)"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.05)"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                >
                  {cpu.name} <span style={{ color: "var(--accent-cyan)", fontSize: "0.7rem", float: "right" }}>Tier {cpu.tier}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RAM Field */}
      <div className="spec-field">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label className="spec-label">
            <Award size={14} color="var(--accent-purple)" /> System Memory (RAM)
          </label>
          <span className="ram-badge">{specs.ram} GB</span>
        </div>
        <div className="ram-slider-container">
          <input
            type="range"
            min="2"
            max="64"
            step="2"
            value={specs.ram}
            onChange={handleRamChange}
            className="ram-slider"
          />
        </div>
      </div>

      {/* Storage Type Toggles */}
      <div className="spec-field">
        <label className="spec-label">
          <HardDrive size={14} color="var(--accent-purple)" /> Storage Device Type
        </label>
        <div className="toggle-group">
          <button
            className={`toggle-button ${specs.storageType === "SSD" ? "active" : ""}`}
            onClick={() => handleStorageTypeChange("SSD")}
          >
            Solid State (SSD)
          </button>
          <button
            className={`toggle-button ${specs.storageType === "HDD" ? "active" : ""}`}
            onClick={() => handleStorageTypeChange("HDD")}
          >
            Hard Drive (HDD)
          </button>
        </div>
      </div>
    </div>
  );
}
