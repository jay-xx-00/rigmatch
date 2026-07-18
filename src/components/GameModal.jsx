import React from "react";
import { X, ExternalLink, ShieldAlert, CheckCircle2, AlertTriangle, Info, Disc } from "lucide-react";
import { checkCompatibility, parseGPU, parseCPU } from "../utils/specMatcher";

export default function GameModal({ game, userSpecs, onClose }) {
  if (!game) return null;

  const comp = checkCompatibility(userSpecs, game);
  const userGpu = parseGPU(userSpecs.gpu);
  const userCpu = parseCPU(userSpecs.cpu);

  // SVG circle calculations
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (comp.score / 100) * circumference;

  const getStatusColorClass = (status) => {
    switch (status) {
      case "excellent": return "text-excellent";
      case "sufficient": return "text-sufficient";
      case "insufficient": return "text-insufficient";
      default: return "";
    }
  };

  const getStatusBgClass = (status) => {
    switch (status) {
      case "excellent": return "bg-excellent";
      case "sufficient": return "bg-sufficient";
      case "insufficient": return "bg-insufficient";
      default: return "";
    }
  };

  const getSpecFitIndicator = (status) => {
    switch (status) {
      case "excellent":
        return <span className="spec-fit-indicator text-excellent" style={{ background: "rgba(16, 185, 129, 0.08)" }}><CheckCircle2 size={12} /> EXCEEDS REC</span>;
      case "sufficient":
        return <span className="spec-fit-indicator text-sufficient" style={{ background: "rgba(34, 211, 238, 0.08)" }}><CheckCircle2 size={12} /> FITS MIN</span>;
      case "insufficient":
        return <span className="spec-fit-indicator text-insufficient" style={{ background: "rgba(236, 72, 153, 0.08)" }}><X size={12} /> BOTTLENECK</span>;
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={16} />
        </button>

        {/* Top Banner Cover */}
        <div className="modal-header-banner">
          <img 
            src={`https://shared.akamai.steamstatic.com/store_images/steam/apps/${game.id}/header.jpg`} 
            alt={game.title} 
            className="modal-banner-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=900&auto=format&fit=crop";
            }}
          />
          <div className="modal-banner-overlay" />
          <div className="modal-header-info">
            <h2 className="modal-game-title">{game.title}</h2>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
              {game.genre.map(g => (
                <span key={g} className="genre-tag" style={{ background: "rgba(139, 92, 246, 0.2)", color: "#e9d5ff" }}>{g}</span>
              ))}
              <span className="genre-tag" style={{ background: "rgba(255,255,255,0.08)" }}>{game.price}</span>
            </div>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="modal-body">
          <div className="modal-grid-two-col">
            {/* Left side: Description & Specs comparison */}
            <div style={{ display: "flex", flex: "1", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h4 className="modal-section-title">Overview</h4>
                <p className="game-desc">{game.description}</p>
              </div>

              {/* Specs Comparison Table */}
              <div>
                <h4 className="modal-section-title">RIG MATCHMAKER</h4>
                <div className="comparison-table-wrapper">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th className="col-hardware">Hardware</th>
                        <th className="col-user-spec col-user-spec-header">Your Setup</th>
                        <th className="col-min-spec">Minimum Required</th>
                        <th className="col-rec-spec">Recommended</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* GPU Row */}
                      <tr>
                        <td className="col-hardware">GPU</td>
                        <td className="col-user-spec col-user-spec-cell">
                          <span style={{ fontSize: "0.85rem", fontWeight: "600" }}>{userSpecs.gpu}</span>
                          <br />
                          {getSpecFitIndicator(comp.components.gpu.status)}
                        </td>
                        <td className="col-min-spec">{game.minSpecs.gpu}</td>
                        <td className="col-rec-spec">{game.recSpecs.gpu}</td>
                      </tr>
                      {/* CPU Row */}
                      <tr>
                        <td className="col-hardware">CPU</td>
                        <td className="col-user-spec col-user-spec-cell">
                          <span style={{ fontSize: "0.85rem", fontWeight: "600" }}>{userSpecs.cpu}</span>
                          <br />
                          {getSpecFitIndicator(comp.components.cpu.status)}
                        </td>
                        <td className="col-min-spec">{game.minSpecs.cpu}</td>
                        <td className="col-rec-spec">{game.recSpecs.cpu}</td>
                      </tr>
                      {/* RAM Row */}
                      <tr>
                        <td className="col-hardware">RAM</td>
                        <td className="col-user-spec col-user-spec-cell">
                          <span style={{ fontSize: "0.85rem", fontWeight: "600" }}>{userSpecs.ram} GB</span>
                          <br />
                          {getSpecFitIndicator(comp.components.ram.status)}
                        </td>
                        <td className="col-min-spec">{game.minSpecs.ram}</td>
                        <td className="col-rec-spec">{game.recSpecs.ram}</td>
                      </tr>
                      {/* Storage Row */}
                      <tr>
                        <td className="col-hardware">Storage</td>
                        <td className="col-user-spec col-user-spec-cell">
                          <span style={{ fontSize: "0.85rem", fontWeight: "600" }}>{userSpecs.storageType}</span>
                          <br />
                          {userSpecs.storageType === "HDD" && game.minSpecs.storage.toLowerCase().includes("ssd") ? (
                            <span className="spec-fit-indicator text-insufficient" style={{ background: "rgba(239,68,68,0.08)" }}>
                              <Disc size={12} /> HDD WARNING
                            </span>
                          ) : (
                            <span className="spec-fit-indicator text-excellent" style={{ background: "rgba(16,185,129,0.08)" }}>
                              <CheckCircle2 size={12} /> COMPATIBLE
                            </span>
                          )}
                        </td>
                        <td className="col-min-spec">{game.minSpecs.storage}</td>
                        <td className="col-rec-spec">{game.recSpecs.storage}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right side: Performance dials & diagnostics */}
            <div className="analyzer-panel">
              {/* Compatibility Score widget */}
              <div className="score-widget">
                <div className="radial-score-container">
                  <div className="radial-score-ring">
                    <svg width="88" height="88">
                      <circle
                        stroke="rgba(255, 255, 255, 0.05)"
                        fill="transparent"
                        strokeWidth="6"
                        r={radius}
                        cx="44"
                        cy="44"
                      />
                      <circle
                        className="score-circle"
                        stroke="var(--secondary)"
                        fill="transparent"
                        strokeWidth="6"
                        strokeDasharray={circumference + " " + circumference}
                        style={{ strokeDashoffset }}
                        r={radius}
                        cx="44"
                        cy="44"
                      />
                    </svg>
                    <span className="score-value-text" style={{
                      color: comp.status === "below" ? "var(--danger)" : comp.status === "minimum" ? "var(--tertiary)" : "var(--secondary)"
                    }}>
                      {comp.score}%
                    </span>
                  </div>
                  <div className="score-lbl">
                    <h5 className="score-title">Telemetry Rating</h5>
                    <span className="score-desc">
                      Rig performance output margin calculated against recommended gaming thresholds.
                    </span>
                  </div>
                </div>

                <hr className="hud-divider" />

                {/* Segmented Component Bars */}
                <div className="comp-bars-container">
                  <div className="comp-bar-row">
                    <div className="comp-bar-label">
                      <span>GRAPHICS LOAD</span>
                      <span className={getStatusColorClass(comp.components.gpu.status)}>Tier {userGpu.tier} / {comp.components.gpu.recTier}</span>
                    </div>
                    <div className="comp-bar-bg">
                      <div 
                        className={`comp-bar-fill ${getStatusBgClass(comp.components.gpu.status)}`}
                        style={{ width: `${Math.min(100, (userGpu.tier / comp.components.gpu.recTier) * 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="comp-bar-row">
                    <div className="comp-bar-label">
                      <span>PROCESSOR LOAD</span>
                      <span className={getStatusColorClass(comp.components.cpu.status)}>Tier {userCpu.tier} / {comp.components.cpu.recTier}</span>
                    </div>
                    <div className="comp-bar-bg">
                      <div 
                        className={`comp-bar-fill ${getStatusBgClass(comp.components.cpu.status)}`}
                        style={{ width: `${Math.min(100, (userCpu.tier / comp.components.cpu.recTier) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Predictor Cards */}
              <div className="est-perf-grid">
                <div className="est-perf-card">
                  <span className="est-perf-val">{comp.fpsEstimate}</span>
                  <span className="est-perf-lbl">FPS TARGET</span>
                </div>
                <div className="est-perf-card">
                  <span className="est-perf-val">{comp.resolutionEstimate}</span>
                  <span className="est-perf-lbl">RESOLUTION</span>
                </div>
                <div className="est-perf-card">
                  <span className="est-perf-val">{comp.settingsEstimate}</span>
                  <span className="est-perf-lbl">SETTINGS PRESET</span>
                </div>
              </div>

              {/* Optimization advice */}
              <div className="diagnostic-card">
                <h5 className="score-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", fontSize: "0.85rem" }}>
                  <ShieldAlert size={14} color="var(--primary)" /> Telemetry Diagnostics
                </h5>
                <ul className="diagnostic-list">
                  {comp.diagnostics.map((diag, index) => (
                    <li key={index} className="diagnostic-item">
                      {comp.status === "below" ? (
                        <AlertTriangle size={12} color="var(--danger)" style={{ marginTop: "2px" }} />
                      ) : (
                        <Info size={12} color="var(--secondary)" style={{ marginTop: "2px" }} />
                      )}
                      <span>{diag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="modal-actions">
            <button className="btn-ghost" onClick={onClose}>
              Close Monitor
            </button>
            <a 
              href={`https://store.steampowered.com/app/${game.id}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-steam"
              style={{ textDecoration: "none" }}
            >
              <ExternalLink size={12} /> Open Steam Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
