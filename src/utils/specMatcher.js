// GPU Tier Database
export const GPU_DATABASE = [
  // Tier 6: Enthusiast (4K Ultra, RT High)
  { name: "NVIDIA GeForce RTX 4090", tier: 6, vram: 24, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4080 Super", tier: 6, vram: 16, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4080", tier: 6, vram: 16, brand: "NVIDIA" },
  { name: "AMD Radeon RX 7900 XTX", tier: 6, vram: 24, brand: "AMD" },
  { name: "AMD Radeon RX 7900 XT", tier: 6, vram: 20, brand: "AMD" },

  // Tier 5: High-End (1440p Ultra / 4K Mid, RT Low)
  { name: "NVIDIA GeForce RTX 4070 Ti Super", tier: 5, vram: 16, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4070 Ti", tier: 5, vram: 12, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4070 Super", tier: 5, vram: 12, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4070", tier: 5, vram: 12, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 3090 Ti", tier: 5, vram: 24, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 3090", tier: 5, vram: 24, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 3080 Ti", tier: 5, vram: 12, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 3080", tier: 5, vram: 10, brand: "NVIDIA" },
  { name: "AMD Radeon RX 7800 XT", tier: 5, vram: 16, brand: "AMD" },
  { name: "AMD Radeon RX 6950 XT", tier: 5, vram: 16, brand: "AMD" },
  { name: "AMD Radeon RX 6800 XT", tier: 5, vram: 16, brand: "AMD" },
  { name: "Apple M3 Max", tier: 5, vram: 36, brand: "Apple" },
  { name: "Apple M2 Max", tier: 5, vram: 32, brand: "Apple" },

  // Tier 4: Mid-High (1080p Ultra / 1440p High)
  { name: "NVIDIA GeForce RTX 4060 Ti", tier: 4, vram: 8, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4060", tier: 4, vram: 8, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 3070 Ti", tier: 4, vram: 8, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 3070", tier: 4, vram: 8, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 3060 Ti", tier: 4, vram: 8, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 3060", tier: 4, vram: 12, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 2080 Ti", tier: 4, vram: 11, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 2080", tier: 4, vram: 8, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1080 Ti", tier: 4, vram: 11, brand: "NVIDIA" },
  { name: "AMD Radeon RX 7700 XT", tier: 4, vram: 12, brand: "AMD" },
  { name: "AMD Radeon RX 6700 XT", tier: 4, vram: 12, brand: "AMD" },
  { name: "AMD Radeon RX 6600 XT", tier: 4, vram: 8, brand: "AMD" },
  { name: "AMD Radeon RX 6600", tier: 4, vram: 8, brand: "AMD" },
  { name: "Intel Arc A770", tier: 4, vram: 16, brand: "Intel" },
  { name: "Intel Arc A750", tier: 4, vram: 8, brand: "Intel" },
  { name: "Apple M3 Pro", tier: 4, vram: 18, brand: "Apple" },
  { name: "Apple M2 Pro", tier: 4, vram: 16, brand: "Apple" },
  { name: "Apple M1 Pro", tier: 4, vram: 16, brand: "Apple" },

  // Tier 3: Mid-Range (1080p Medium/High)
  { name: "NVIDIA GeForce RTX 3050", tier: 3, vram: 8, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 2060 Super", tier: 3, vram: 8, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 2060", tier: 3, vram: 6, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1660 Super", tier: 3, vram: 6, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1660 Ti", tier: 3, vram: 6, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1660", tier: 3, vram: 6, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1070 Ti", tier: 3, vram: 8, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1070", tier: 3, vram: 8, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1060 6GB", tier: 3, vram: 6, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1060 3GB", tier: 3, vram: 3, brand: "NVIDIA" },
  { name: "AMD Radeon RX 580", tier: 3, vram: 8, brand: "AMD" },
  { name: "AMD Radeon RX 570", tier: 3, vram: 4, brand: "AMD" },
  { name: "AMD Radeon RX 5500 XT", tier: 3, vram: 4, brand: "AMD" },
  { name: "Intel Arc A580", tier: 3, vram: 8, brand: "Intel" },
  { name: "Intel Arc A380", tier: 3, vram: 6, brand: "Intel" },
  { name: "Apple M3", tier: 3, vram: 8, brand: "Apple" },
  { name: "Apple M2", tier: 3, vram: 8, brand: "Apple" },
  { name: "Apple M1", tier: 3, vram: 8, brand: "Apple" },

  // Tier 2: Entry-Level (1080p Low, Older E-Sports)
  { name: "NVIDIA GeForce GTX 1650 Super", tier: 2, vram: 4, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1650", tier: 2, vram: 4, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1050 Ti", tier: 2, vram: 4, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1050", tier: 2, vram: 2, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 970", tier: 2, vram: 4, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 960", tier: 2, vram: 2, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 750 Ti", tier: 2, vram: 2, brand: "NVIDIA" },
  { name: "AMD Radeon RX 560", tier: 2, vram: 4, brand: "AMD" },
  { name: "AMD Radeon RX 460", tier: 2, vram: 2, brand: "AMD" },
  { name: "AMD Radeon HD 7870", tier: 2, vram: 2, brand: "AMD" },
  { name: "Intel Iris Xe Graphics", tier: 2, vram: 1.5, brand: "Intel" },
  { name: "Steam Deck Custom GPU", tier: 2, vram: 4, brand: "AMD" },

  // Tier 1: Very Low (Integrated, Retro, Indie)
  { name: "Intel HD Graphics 620", tier: 1, vram: 0.5, brand: "Intel" },
  { name: "Intel HD Graphics 4000", tier: 1, vram: 0.5, brand: "Intel" },
  { name: "Intel UHD Graphics 630", tier: 1, vram: 0.5, brand: "Intel" },
  { name: "AMD Radeon Vega 8", tier: 1, vram: 1, brand: "AMD" },
  { name: "AMD Radeon Vega 3", tier: 1, vram: 0.5, brand: "AMD" }
];

// CPU Tier Database
export const CPU_DATABASE = [
  // Tier 5: Enthusiast (Heavy Gaming & Streaming)
  { name: "Intel Core i9-14900K", tier: 5, cores: 24, brand: "Intel" },
  { name: "Intel Core i7-14700K", tier: 5, cores: 20, brand: "Intel" },
  { name: "Intel Core i9-13900K", tier: 5, cores: 24, brand: "Intel" },
  { name: "Intel Core i7-13700K", tier: 5, cores: 16, brand: "Intel" },
  { name: "AMD Ryzen 7 7800X3D", tier: 5, cores: 8, brand: "AMD" },
  { name: "AMD Ryzen 9 7900X", tier: 5, cores: 12, brand: "AMD" },
  { name: "AMD Ryzen 7 5800X3D", tier: 5, cores: 8, brand: "AMD" },
  { name: "Apple M3 Max", tier: 5, cores: 16, brand: "Apple" },
  { name: "Apple M2 Max", tier: 5, cores: 12, brand: "Apple" },

  // Tier 4: Mid-High (Perfect Gaming CPU)
  { name: "Intel Core i5-14600K", tier: 4, cores: 14, brand: "Intel" },
  { name: "Intel Core i5-13600K", tier: 4, cores: 14, brand: "Intel" },
  { name: "Intel Core i7-12700K", tier: 4, cores: 12, brand: "Intel" },
  { name: "Intel Core i5-12400F", tier: 4, cores: 6, brand: "Intel" },
  { name: "Intel Core i7-10700K", tier: 4, cores: 8, brand: "Intel" },
  { name: "AMD Ryzen 5 7600X", tier: 4, cores: 6, brand: "AMD" },
  { name: "AMD Ryzen 7 5700X", tier: 4, cores: 8, brand: "AMD" },
  { name: "AMD Ryzen 5 5600X", tier: 4, cores: 6, brand: "AMD" },
  { name: "AMD Ryzen 7 3700X", tier: 4, cores: 8, brand: "AMD" },
  { name: "Apple M3 Pro", tier: 4, cores: 12, brand: "Apple" },
  { name: "Apple M2 Pro", tier: 4, cores: 10, brand: "Apple" },
  { name: "Apple M1 Pro", tier: 4, cores: 10, brand: "Apple" },

  // Tier 3: Mid-Range (Budget King)
  { name: "Intel Core i5-10400F", tier: 3, cores: 6, brand: "Intel" },
  { name: "Intel Core i5-10400", tier: 3, cores: 6, brand: "Intel" },
  { name: "Intel Core i7-8700K", tier: 3, cores: 6, brand: "Intel" },
  { name: "Intel Core i5-9400F", tier: 3, cores: 6, brand: "Intel" },
  { name: "Intel Core i7-7700K", tier: 3, cores: 4, brand: "Intel" },
  { name: "AMD Ryzen 5 3600", tier: 3, cores: 6, brand: "AMD" },
  { name: "AMD Ryzen 5 2600", tier: 3, cores: 6, brand: "AMD" },
  { name: "AMD Ryzen 7 1700X", tier: 3, cores: 8, brand: "AMD" },
  { name: "Apple M3", tier: 3, cores: 8, brand: "Apple" },
  { name: "Apple M2", tier: 3, cores: 8, brand: "Apple" },
  { name: "Apple M1", tier: 3, cores: 8, brand: "Apple" },

  // Tier 2: Entry-Level (Older Gaming Core)
  { name: "Intel Core i5-4460", tier: 2, cores: 4, brand: "Intel" },
  { name: "Intel Core i7-4770", tier: 2, cores: 4, brand: "Intel" },
  { name: "Intel Core i3-10100", tier: 2, cores: 4, brand: "Intel" },
  { name: "Intel Core i3-8100", tier: 2, cores: 4, brand: "Intel" },
  { name: "AMD Ryzen 3 3100", tier: 2, cores: 4, brand: "AMD" },
  { name: "AMD Ryzen 3 1200", tier: 2, cores: 4, brand: "AMD" },
  { name: "AMD FX-8350", tier: 2, cores: 8, brand: "AMD" },
  { name: "AMD FX-6300", tier: 2, cores: 6, brand: "AMD" },

  // Tier 1: Very Low (Office CPU, Retro)
  { name: "Intel Core 2 Duo E8400", tier: 1, cores: 2, brand: "Intel" },
  { name: "Intel Pentium G4560", tier: 1, cores: 2, brand: "Intel" },
  { name: "AMD Athlon 200GE", tier: 1, cores: 2, brand: "AMD" }
];

// Resolves model string to a matching item from the database, or maps a fallback tier.
export function parseGPU(modelString) {
  if (!modelString) return { name: "Custom GPU", tier: 2, vram: 4, brand: "Generic" };
  const query = modelString.toLowerCase();

  // Try exact or substring match in DB
  const matched = GPU_DATABASE.find(gpu => query.includes(gpu.name.toLowerCase()) || gpu.name.toLowerCase().includes(query));
  if (matched) return matched;

  // Key word heuristics
  let brand = "NVIDIA";
  if (query.includes("amd") || query.includes("radeon") || query.includes("rx")) brand = "AMD";
  else if (query.includes("intel") || query.includes("arc") || query.includes("graphics")) brand = "Intel";
  else if (query.includes("apple") || query.includes("m1") || query.includes("m2") || query.includes("m3")) brand = "Apple";

  let tier = 2; // Default fallback
  let vram = 4;

  // NVIDIA tiers
  if (brand === "NVIDIA") {
    if (query.includes("4090") || query.includes("4080")) { tier = 6; vram = 16; }
    else if (query.includes("4070") || query.includes("3080") || query.includes("3090")) { tier = 5; vram = 12; }
    else if (query.includes("4060") || query.includes("3070") || query.includes("3060") || query.includes("2080") || query.includes("1080 ti")) { tier = 4; vram = 8; }
    else if (query.includes("3050") || query.includes("2060") || query.includes("1660") || query.includes("1070") || query.includes("1060")) { tier = 3; vram = 6; }
    else if (query.includes("1650") || query.includes("1050") || query.includes("970") || query.includes("960") || query.includes("750")) { tier = 2; vram = 4; }
  } 
  // AMD tiers
  else if (brand === "AMD") {
    if (query.includes("7900")) { tier = 6; vram = 20; }
    else if (query.includes("7800") || query.includes("6900") || query.includes("6800")) { tier = 5; vram = 16; }
    else if (query.includes("7700") || query.includes("6700") || query.includes("6600")) { tier = 4; vram = 8; }
    else if (query.includes("580") || query.includes("570") || query.includes("5500") || query.includes("590")) { tier = 3; vram = 8; }
    else if (query.includes("560") || query.includes("460") || query.includes("7870") || query.includes("deck")) { tier = 2; vram = 4; }
  }
  // Apple silicon tiers
  else if (brand === "Apple") {
    if (query.includes("max")) { tier = 5; vram = 32; }
    else if (query.includes("pro")) { tier = 4; vram = 16; }
    else { tier = 3; vram = 8; }
  }
  // Intel tiers
  else if (brand === "Intel") {
    if (query.includes("a770") || query.includes("a750")) { tier = 4; vram = 8; }
    else if (query.includes("a580") || query.includes("a380")) { tier = 3; vram = 6; }
    else if (query.includes("iris")) { tier = 2; vram = 1.5; }
    else { tier = 1; vram = 0.5; }
  }

  return { name: modelString, tier, vram, brand };
}

export function parseCPU(modelString) {
  if (!modelString) return { name: "Custom CPU", tier: 2, cores: 4, brand: "Generic" };
  const query = modelString.toLowerCase();

  const matched = CPU_DATABASE.find(cpu => query.includes(cpu.name.toLowerCase()) || cpu.name.toLowerCase().includes(query));
  if (matched) return matched;

  let brand = "Intel";
  if (query.includes("amd") || query.includes("ryzen") || query.includes("threadripper")) brand = "AMD";
  else if (query.includes("apple") || query.includes("m1") || query.includes("m2") || query.includes("m3")) brand = "Apple";

  let tier = 2;
  let cores = 4;

  if (brand === "Intel") {
    if (query.includes("i9") || query.includes("14900") || query.includes("13900")) { tier = 5; cores = 16; }
    else if (query.includes("i7-13") || query.includes("i7-14") || query.includes("i7-12") || query.includes("i5-13600") || query.includes("i5-14600")) { tier = 4; cores = 12; }
    else if (query.includes("i5-12") || query.includes("i5-10") || query.includes("i7-10") || query.includes("i7-8") || query.includes("i7-7") || query.includes("i5-9")) { tier = 3; cores = 6; }
    else if (query.includes("i3") || query.includes("i5-4") || query.includes("i7-4") || query.includes("i5-6")) { tier = 2; cores = 4; }
    else { tier = 1; cores = 2; }
  } else if (brand === "AMD") {
    if (query.includes("9 7") || query.includes("7800x3d") || query.includes("5800x3d")) { tier = 5; cores = 8; }
    else if (query.includes("ryzen 7 7") || query.includes("ryzen 7 5") || query.includes("ryzen 5 7600") || query.includes("5600x")) { tier = 4; cores = 6; }
    else if (query.includes("ryzen 5 3") || query.includes("ryzen 5 2") || query.includes("ryzen 5 1") || query.includes("ryzen 7 1")) { tier = 3; cores = 6; }
    else if (query.includes("ryzen 3") || query.includes("fx-")) { tier = 2; cores = 4; }
    else { tier = 1; cores = 2; }
  } else if (brand === "Apple") {
    if (query.includes("max")) { tier = 5; cores = 12; }
    else if (query.includes("pro")) { tier = 4; cores = 10; }
    else { tier = 3; cores = 8; }
  }

  return { name: modelString, tier, cores, brand };
}

// Evaluation Engine
export function checkCompatibility(userSpecs, game) {
  const userGpu = parseGPU(userSpecs.gpu);
  const userCpu = parseCPU(userSpecs.cpu);
  const userRam = parseInt(userSpecs.ram) || 8;
  const userStorageType = userSpecs.storageType || "SSD"; // "SSD" or "HDD"

  const minGpu = game.minSpecsTier.gpu;
  const recGpu = game.recSpecsTier.gpu;
  const minCpu = game.minSpecsTier.cpu;
  const recCpu = game.recSpecsTier.cpu;
  const minRam = game.minSpecsTier.ram;
  const recRam = game.recSpecsTier.ram;

  // Assess components
  const gpuStatus = userGpu.tier >= recGpu ? "excellent" : userGpu.tier >= minGpu ? "sufficient" : "insufficient";
  const cpuStatus = userCpu.tier >= recCpu ? "excellent" : userCpu.tier >= minCpu ? "sufficient" : "insufficient";
  const ramStatus = userRam >= recRam ? "excellent" : userRam >= minRam ? "sufficient" : "insufficient";

  // Determine overall status
  let status = "perfect"; // User meets or exceeds recommended in all core specs
  if (gpuStatus === "insufficient" || cpuStatus === "insufficient" || ramStatus === "insufficient") {
    status = "below";
  } else if (gpuStatus === "sufficient" || cpuStatus === "sufficient" || ramStatus === "sufficient") {
    // Meets minimum but not all recommended
    status = "good";
    // Check if they only just barely hit minimum on the primary gaming component (GPU)
    if (gpuStatus === "sufficient" && userGpu.tier === minGpu) {
      status = "minimum";
    }
  }

  // Diagnostics and Bottleneck alerts
  const diagnostics = [];
  
  if (gpuStatus === "insufficient") {
    diagnostics.push(`Your graphics card is below the minimum required. The game requires a tier ${minGpu} GPU (like ${game.minSpecs.gpu}), but your ${userGpu.name} matches tier ${userGpu.tier}.`);
  } else if (gpuStatus === "excellent") {
    diagnostics.push(`Your GPU (${userGpu.name}) is fully optimized for this game and exceeds recommended requirements.`);
  } else {
    diagnostics.push(`Your GPU (${userGpu.name}) meets minimum requirements but might struggle at high settings. For a better experience, a recommended GPU is ${game.recSpecs.gpu}.`);
  }

  if (cpuStatus === "insufficient") {
    diagnostics.push(`Your processor (${userCpu.name}) is below minimum requirements. This could cause severe micro-stuttering.`);
  } else if (cpuStatus === "excellent") {
    diagnostics.push(`Your CPU has plenty of headroom.`);
  } else {
    diagnostics.push(`Your CPU meets basic requirements but might bottleneck your graphics card in busy areas.`);
  }

  if (ramStatus === "insufficient") {
    diagnostics.push(`Insufficient RAM! The game needs at least ${minRam}GB RAM, but you have ${userRam}GB.`);
  } else if (ramStatus === "excellent") {
    diagnostics.push(`Your memory capacity (${userRam}GB) is fully sufficient.`);
  } else {
    diagnostics.push(`You have ${userRam}GB RAM which is fine for minimum play, but the recommended ${recRam}GB would prevent background loading hiccups.`);
  }

  if (userStorageType === "HDD" && game.minSpecs.storage.toLowerCase().includes("ssd")) {
    diagnostics.push("Critical Warning: This game specifically recommends or requires an SSD. Installing on a slow HDD will cause severe loading screen delays, assets loading pop-ins, or audio sync issues.");
  }

  // Predicted Performance Metrics (FPS & Resolution)
  let fpsEstimate = "60+ FPS";
  let resolutionEstimate = "1080p";
  let settingsEstimate = "High";

  if (status === "perfect") {
    if (userGpu.tier >= recGpu + 1 && userCpu.tier >= recCpu + 1 && userRam >= recRam + 8) {
      fpsEstimate = "90-120+ FPS";
      resolutionEstimate = userGpu.tier >= 5 ? "1440p / 4K" : "1080p";
      settingsEstimate = "Ultra / Max";
    } else {
      fpsEstimate = "60-80 FPS";
      resolutionEstimate = "1080p";
      settingsEstimate = "High";
    }
  } else if (status === "good") {
    fpsEstimate = "45-60 FPS";
    resolutionEstimate = "1080p";
    settingsEstimate = "Medium";
  } else if (status === "minimum") {
    fpsEstimate = "30-40 FPS";
    resolutionEstimate = "720p / 1080p Low";
    settingsEstimate = "Low";
  } else {
    fpsEstimate = "<20 FPS (Unplayable)";
    resolutionEstimate = "None";
    settingsEstimate = "Unsupported";
  }

  // Calculate generic compatibility score (0 to 100)
  // Weights: GPU 50%, CPU 30%, RAM 20%
  const gpuPercent = Math.min(100, (userGpu.tier / recGpu) * 50);
  const cpuPercent = Math.min(100, (userCpu.tier / recCpu) * 30);
  const ramPercent = Math.min(100, (userRam / recRam) * 20);
  const score = Math.round(gpuPercent + cpuPercent + ramPercent);

  return {
    status,
    score,
    fpsEstimate,
    resolutionEstimate,
    settingsEstimate,
    diagnostics,
    components: {
      gpu: { status: gpuStatus, userTier: userGpu.tier, reqTier: minGpu, recTier: recGpu },
      cpu: { status: cpuStatus, userTier: userCpu.tier, reqTier: minCpu, recTier: recCpu },
      ram: { status: ramStatus, userVal: userRam, reqVal: minRam, recVal: recRam }
    }
  };
}
