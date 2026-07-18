export const gamesDatabase = [
  // LOW-END GAMES (Tiers 1-2)
  {
    id: 413150,
    title: "Stardew Valley",
    genre: ["RPG", "Simulation", "Indie"],
    description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 98,
    price: "$14.99",
    tags: ["Single-player", "Co-op", "Farming", "Relaxing"],
    minSpecs: {
      cpu: "Intel Core 2 Duo E8400 / AMD Athlon 64 X2",
      gpu: "DirectX 10 capable graphics card with 256MB VRAM",
      ram: "2 GB",
      storage: "500 MB",
      os: "Windows 7 or greater"
    },
    recSpecs: {
      cpu: "Intel Core i3-6100 / AMD Ryzen 3 1200",
      gpu: "NVIDIA GeForce GTX 750 Ti / AMD Radeon RX 560",
      ram: "4 GB",
      storage: "1 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 2, vram: 0.25 },
    recSpecsTier: { cpu: 2, gpu: 2, ram: 4, vram: 2 }
  },
  {
    id: 105600,
    title: "Terraria",
    genre: ["Action", "Adventure", "Indie"],
    description: "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. The world is your canvas and the ground itself is your paint.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 97,
    price: "$9.99",
    tags: ["Single-player", "Multiplayer", "Survival", "Crafting"],
    minSpecs: {
      cpu: "Dual Core 2.0 GHz",
      gpu: "Graphics Card with 128MB VRAM & Shader Model 2.0+",
      ram: "2.5 GB",
      storage: "200 MB",
      os: "Windows XP, Vista, 7, 8/8.1, 10"
    },
    recSpecs: {
      cpu: "Dual Core 3.0 GHz",
      gpu: "Intel HD Graphics 620 or better",
      ram: "4 GB",
      storage: "200 MB",
      os: "Windows 7, 8/8.1, 10 64-bit"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 3, vram: 0.12 },
    recSpecsTier: { cpu: 2, gpu: 1, ram: 4, vram: 1 }
  },
  {
    id: 620,
    title: "Portal 2",
    genre: ["Action", "Adventure", "Puzzle"],
    description: "The Portal 2 Co-Op mode features a unique campaign, brand new test chambers, and two new player characters.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 99,
    price: "$9.99",
    tags: ["Single-player", "Co-op", "Puzzle", "Comedy"],
    minSpecs: {
      cpu: "Intel Pentium 4 3.0 GHz / AMD Athlon 64",
      gpu: "DirectX 9 compatible video card with 128 MB VRAM",
      ram: "2 GB",
      storage: "8 GB",
      os: "Windows 7 / Vista / XP"
    },
    recSpecs: {
      cpu: "Intel Core i3 / AMD Phenom II",
      gpu: "NVIDIA GeForce GTX 750 / AMD Radeon RX 550",
      ram: "4 GB",
      storage: "8 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 2, vram: 0.12 },
    recSpecsTier: { cpu: 2, gpu: 2, ram: 4, vram: 2 }
  },
  {
    id: 367520,
    title: "Hollow Knight",
    genre: ["Action", "Adventure", "Indie"],
    description: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 97,
    price: "$14.99",
    tags: ["Single-player", "Metroidvania", "Souls-like", "Atmospheric"],
    minSpecs: {
      cpu: "Intel Core 2 Duo E8400 / AMD Athlon 64 X2",
      gpu: "NVIDIA GeForce 9800 GTX / AMD Radeon HD 4870",
      ram: "4 GB",
      storage: "9 GB",
      os: "Windows 7"
    },
    recSpecs: {
      cpu: "Intel Core i3 / AMD Ryzen 3",
      gpu: "NVIDIA GeForce GTX 560 / AMD Radeon HD 7850",
      ram: "8 GB",
      storage: "9 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 4, vram: 0.5 },
    recSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 1 }
  },
  {
    id: 504230,
    title: "Celeste",
    genre: ["Action", "Adventure", "Indie", "Platformer"],
    description: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight, hand-crafted platformer.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 97,
    price: "$19.99",
    tags: ["Single-player", "Difficult", "Pixel Art", "Story Rich"],
    minSpecs: {
      cpu: "Intel Core i3 M380",
      gpu: "Intel HD 4000",
      ram: "2 GB",
      storage: "1.2 GB",
      os: "Windows 7 or newer"
    },
    recSpecs: {
      cpu: "Intel Core i3-6100",
      gpu: "Intel Iris Xe Graphics",
      ram: "4 GB",
      storage: "2 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 2, vram: 0.5 },
    recSpecsTier: { cpu: 2, gpu: 2, ram: 4, vram: 1 }
  },
  {
    id: 1794680,
    title: "Vampire Survivors",
    genre: ["Action", "Casual", "Indie", "RPG"],
    description: "Mow down thousands of night creatures and survive until dawn! Vampire Survivors is a gothic horror casual game with rogue-lite elements.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 98,
    price: "$4.99",
    tags: ["Single-player", "Rogue-lite", "Bullet Hell", "Casual"],
    minSpecs: {
      cpu: "Dual Core 2.0 GHz",
      gpu: "Intel HD Graphics 620",
      ram: "4 GB",
      storage: "600 MB",
      os: "Windows 7 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i3 / AMD Ryzen 3",
      gpu: "GTX 750 Ti / RX 560",
      ram: "8 GB",
      storage: "1 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 4, vram: 0.5 },
    recSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 2 }
  },
  {
    id: 646570,
    title: "Slay the Spire",
    genre: ["Indie", "Strategy", "Card Game"],
    description: "We fused card games and roguelikes together to make the best single player deckbuilder we could. Craft a unique deck, encounter bizarre creatures, and discover relics.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 97,
    price: "$24.99",
    tags: ["Single-player", "Rogue-like", "Deckbuilder", "Strategy"],
    minSpecs: {
      cpu: "2.0 GHz Processor",
      gpu: "Graphics Card with 256MB VRAM",
      ram: "2 GB",
      storage: "1 GB",
      os: "Windows XP, Vista, 7, 8/8.1, 10"
    },
    recSpecs: {
      cpu: "2.5 GHz Processor",
      gpu: "Graphics Card with 1GB VRAM",
      ram: "4 GB",
      storage: "1 GB",
      os: "Windows 10"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 2, vram: 0.25 },
    recSpecsTier: { cpu: 2, gpu: 1, ram: 4, vram: 1 }
  },
  {
    id: 945360,
    title: "Among Us",
    genre: ["Casual", "Party Game"],
    description: "An online and local party game of teamwork and betrayal for 4-15 players...in space!",
    steamRating: "Very Positive",
    ratingPercent: 92,
    price: "$4.99",
    tags: ["Multiplayer", "Social Deduction", "Co-op", "Funny"],
    minSpecs: {
      cpu: "Intel Pentium 4",
      gpu: "Intel HD Graphics 620",
      ram: "2 GB",
      storage: "250 MB",
      os: "Windows 7 SP1+"
    },
    recSpecs: {
      cpu: "Intel Core i3",
      gpu: "GTX 750 Ti",
      ram: "4 GB",
      storage: "500 MB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 2, vram: 0.25 },
    recSpecsTier: { cpu: 2, gpu: 2, ram: 4, vram: 2 }
  },
  {
    id: 239030,
    title: "Papers, Please",
    genre: ["Indie", "Simulation"],
    description: "A dystopian document thriller. The award-winning border inspector game. Your job is to control the flow of people entering the Arstotzkan side of Grestin.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 97,
    price: "$9.99",
    tags: ["Single-player", "Dystopian", "Political", "Story Rich"],
    minSpecs: {
      cpu: "1.5 GHz Core 2 Duo",
      gpu: "OpenGL 1.4 or better",
      ram: "2 GB",
      storage: "100 MB",
      os: "Windows XP or later"
    },
    recSpecs: {
      cpu: "2.0 GHz Dual Core",
      gpu: "Intel HD Graphics 620",
      ram: "4 GB",
      storage: "100 MB",
      os: "Windows 10"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 2, vram: 0.12 },
    recSpecsTier: { cpu: 2, gpu: 1, ram: 4, vram: 1 }
  },
  {
    id: 219150,
    title: "Hotline Miami",
    genre: ["Action", "Indie"],
    description: "Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull-crushing close combat.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 97,
    price: "$9.99",
    tags: ["Single-player", "Violent", "Great Soundtrack", "Retro"],
    minSpecs: {
      cpu: "1.2 GHz Processor",
      gpu: "DirectX 8 compatible graphics card with 32MB VRAM",
      ram: "512 MB",
      storage: "250 MB",
      os: "Windows XP / Vista / 7"
    },
    recSpecs: {
      cpu: "1.8 GHz Dual Core",
      gpu: "DirectX 9 compatible graphics card with 512MB VRAM",
      ram: "1 GB",
      storage: "250 MB",
      os: "Windows 10"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 1, vram: 0.03 },
    recSpecsTier: { cpu: 2, gpu: 1, ram: 2, vram: 0.5 }
  },

  // MID-RANGE GAMES (Tiers 3-4)
  {
    id: 271590,
    title: "Grand Theft Auto V",
    genre: ["Action", "Adventure"],
    description: "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the underworld...",
    steamRating: "Very Positive",
    ratingPercent: 88,
    price: "$29.99",
    tags: ["Single-player", "Multiplayer", "Open World", "Crime"],
    minSpecs: {
      cpu: "Intel Core 2 Quad Q6600 2.40GHz / AMD Phenom 9850 Quad-Core 2.5GHz",
      gpu: "NVIDIA 9800 GT 1GB / AMD HD 4870 1GB",
      ram: "4 GB",
      storage: "110 GB (SSD recommended)",
      os: "Windows 10 64-Bit"
    },
    recSpecs: {
      cpu: "Intel Core i5 3470 3.2GHz / AMD X8 FX-8350 4GHz",
      gpu: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
      ram: "8 GB",
      storage: "110 GB (SSD)",
      os: "Windows 10 64-Bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 4, vram: 1 },
    recSpecsTier: { cpu: 3, gpu: 2, ram: 8, vram: 2 }
  },
  {
    id: 292030,
    title: "The Witcher 3: Wild Hunt",
    genre: ["RPG", "Adventure"],
    description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 96,
    price: "$39.99",
    tags: ["Single-player", "RPG", "Open World", "Story Rich"],
    minSpecs: {
      cpu: "Intel Core i5-2500K 3.3GHz / AMD Phenom II X4 940",
      gpu: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870",
      ram: "6 GB",
      storage: "50 GB",
      os: "Windows 7 64-bit / Windows 8 (8.1) 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i7-3770 3.4 GHz / AMD FX-8350 4 GHz",
      gpu: "NVIDIA GeForce GTX 770 / AMD Radeon R9 290",
      ram: "8 GB",
      storage: "50 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 6, vram: 2 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 8, vram: 4 }
  },
  {
    id: 730,
    title: "Counter-Strike 2",
    genre: ["Action", "Free to Play"],
    description: "For over two decades, Counter-Strike has delivered an elite competitive experience, one shaped by millions of players from across the globe.",
    steamRating: "Very Positive",
    ratingPercent: 87,
    price: "Free to Play",
    tags: ["FPS", "Multiplayer", "Tactical", "Competitive"],
    minSpecs: {
      cpu: "Intel Core i5 750 or better (4 physical cores)",
      gpu: "Hardware support for Shader Model 5.0 with 1GB+ VRAM",
      ram: "8 GB",
      storage: "85 GB",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i5-10400 / AMD Ryzen 5 3600",
      gpu: "NVIDIA GTX 1060 / AMD Radeon RX 580 (6GB VRAM)",
      ram: "16 GB",
      storage: "85 GB (SSD)",
      os: "Windows 10/11 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 1 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 16, vram: 6 }
  },
  {
    id: 1145360,
    title: "Hades",
    genre: ["Action", "RPG", "Indie"],
    description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 98,
    price: "$24.99",
    tags: ["Single-player", "Rogue-like", "Action RPG", "Hack and Slash"],
    minSpecs: {
      cpu: "Dual Core 2.4 GHz",
      gpu: "Graphics card with 1GB VRAM (DirectX 10+ support)",
      ram: "4 GB",
      storage: "15 GB",
      os: "Windows 7 SP1"
    },
    recSpecs: {
      cpu: "Intel Core i3 / AMD Ryzen 3",
      gpu: "NVIDIA GTX 560 / AMD Radeon HD 7850 (2GB VRAM)",
      ram: "8 GB",
      storage: "15 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 4, vram: 1 },
    recSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 2 }
  },
  {
    id: 1172470,
    title: "Apex Legends",
    genre: ["Action", "Free to Play"],
    description: "Apex Legends is the award-winning, free-to-play Hero shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters.",
    steamRating: "Very Positive",
    ratingPercent: 80,
    price: "Free to Play",
    tags: ["Battle Royale", "FPS", "Multiplayer", "Hero Shooter"],
    minSpecs: {
      cpu: "Intel Core i3-6300 3.8GHz / AMD FX-4350 4.2GHz Quad-Core",
      gpu: "NVIDIA GeForce GT 640 / AMD Radeon HD 7730 (1GB VRAM)",
      ram: "6 GB",
      storage: "75 GB",
      os: "Windows 7 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i5 3570K or equivalent",
      gpu: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290 (8GB VRAM)",
      ram: "8 GB",
      storage: "75 GB (SSD)",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 6, vram: 1 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 8, vram: 4 }
  },
  {
    id: 489830,
    title: "The Elder Scrolls V: Skyrim Special Edition",
    genre: ["RPG"],
    description: "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail.",
    steamRating: "Very Positive",
    ratingPercent: 94,
    price: "$39.99",
    tags: ["Single-player", "Open World", "RPG", "Moddable"],
    minSpecs: {
      cpu: "Intel i5-750 / AMD Phenom II X4-945",
      gpu: "NVIDIA GTX 470 1GB / AMD HD 7870 2GB",
      ram: "8 GB",
      storage: "12 GB",
      os: "Windows 7/8.1/10 (64-bit Version)"
    },
    recSpecs: {
      cpu: "Intel i5-2400 / AMD FX-8320",
      gpu: "NVIDIA GTX 780 3GB / AMD R9 290 4GB",
      ram: "8 GB",
      storage: "12 GB",
      os: "Windows 7/8.1/10 (64-bit Version)"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 1 },
    recSpecsTier: { cpu: 3, gpu: 2, ram: 8, vram: 3 }
  },
  {
    id: 252490,
    title: "Rust",
    genre: ["Action", "Adventure", "RPG", "Indie", "Massively Multiplayer"],
    description: "The only goal in Rust is to survive. Overcome struggles such as hunger, thirst and cold. Build a fire. Build a shelter. Kill animals. Protect yourself.",
    steamRating: "Very Positive",
    ratingPercent: 87,
    price: "$39.99",
    tags: ["Survival", "Crafting", "Open World", "PVP"],
    minSpecs: {
      cpu: "Intel Core i7-3770 / AMD FX-9590 or better",
      gpu: "NVIDIA GTX 670 2GB / AMD R9 280 or better",
      ram: "10 GB",
      storage: "25 GB (SSD Required)",
      os: "Windows 10 64bit"
    },
    recSpecs: {
      cpu: "Intel Core i7-4790K / AMD Ryzen 5 1600",
      gpu: "NVIDIA GTX 980 / AMD R9 Fury or better",
      ram: "16 GB",
      storage: "25 GB (SSD)",
      os: "Windows 11 64bit"
    },
    minSpecsTier: { cpu: 3, gpu: 2, ram: 10, vram: 2 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 16, vram: 4 }
  },
  {
    id: 264710,
    title: "Subnautica",
    genre: ["Adventure", "Indie"],
    description: "Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 96,
    price: "$29.99",
    tags: ["Survival", "Open World", "Underwater", "Crafting"],
    minSpecs: {
      cpu: "Intel Haswell 4 cores @ 2.5Ghz or equivalent",
      gpu: "Intel HD 4600 or equivalent (GTX 550 Ti class)",
      ram: "4 GB",
      storage: "20 GB",
      os: "Windows Vista SP2 or newer (64-bit)"
    },
    recSpecs: {
      cpu: "Intel Haswell 4 cores @ 3.2Ghz or equivalent",
      gpu: "NVIDIA GTX 770 / AMD Radeon R9 290 or equivalent",
      ram: "8 GB",
      storage: "20 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 1, ram: 4, vram: 1 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 8, vram: 4 }
  },
  {
    id: 1868140,
    title: "Dave the Diver",
    genre: ["Casual", "RPG", "Simulation", "Indie"],
    description: "DAVE THE DIVER is a casual, singleplayer adventure RPG featuring deep-sea exploration and fishing during the day and sushi restaurant management at night.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 97,
    price: "$19.99",
    tags: ["Pixel Art", "Fishing", "Management", "Single-player"],
    minSpecs: {
      cpu: "Intel Core i3 Dual Core",
      gpu: "NVIDIA GeForce GTS 450 / AMD Radeon HD 5570",
      ram: "8 GB",
      storage: "10 GB",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i5 / AMD Ryzen 5",
      gpu: "NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 360",
      ram: "16 GB",
      storage: "10 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 1 },
    recSpecsTier: { cpu: 3, gpu: 2, ram: 16, vram: 2 }
  },
  {
    id: 588650,
    title: "Dead Cells",
    genre: ["Action", "Indie"],
    description: "Dead Cells is a rogue-lite, metroidvania action platformer. You'll explore a sprawling, ever-changing castle... assuming you're able to fight your way past its keepers.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 97,
    price: "$24.99",
    tags: ["Rogue-lite", "Metroidvania", "Difficult", "Pixel Art"],
    minSpecs: {
      cpu: "Intel i5 or equivalent",
      gpu: "NVIDIA GeForce GTX 460 / AMD Radeon HD 5770",
      ram: "2 GB",
      storage: "500 MB",
      os: "Windows 7+"
    },
    recSpecs: {
      cpu: "Intel i5 / AMD Ryzen 3 or higher",
      gpu: "NVIDIA GeForce GTX 750 Ti / AMD Radeon RX 560",
      ram: "4 GB",
      storage: "500 MB",
      os: "Windows 10"
    },
    minSpecsTier: { cpu: 2, gpu: 1, ram: 2, vram: 1 },
    recSpecsTier: { cpu: 2, gpu: 2, ram: 4, vram: 2 }
  },
  {
    id: 548430,
    title: "Deep Rock Galactic",
    genre: ["Action", "Indie"],
    description: "Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 97,
    price: "$29.99",
    tags: ["Co-op", "FPS", "Multiplayer", "Mining"],
    minSpecs: {
      cpu: "Intel Core i3 3rd Gen / AMD A8-5600K",
      gpu: "NVIDIA GeForce GTX 460 / AMD Radeon HD 5770",
      ram: "6 GB",
      storage: "3 GB",
      os: "Windows 7 64bit"
    },
    recSpecs: {
      cpu: "Intel Core i5 4th Gen / AMD Ryzen 3 1200",
      gpu: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290",
      ram: "8 GB",
      storage: "3 GB",
      os: "Windows 10 64bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 6, vram: 1 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 8, vram: 4 }
  },
  {
    id: 582010,
    title: "Monster Hunter: World",
    genre: ["Action", "RPG"],
    description: "Welcome to a new world! In Monster Hunter: World, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world.",
    steamRating: "Very Positive",
    ratingPercent: 90,
    price: "$29.99",
    tags: ["Multiplayer", "Co-op", "Action RPG", "Third Person"],
    minSpecs: {
      cpu: "Intel Core i5-4460 3.20GHz / AMD FX-6300",
      gpu: "NVIDIA GeForce GTX 760 / AMD Radeon R7 260x (2GB VRAM)",
      ram: "8 GB",
      storage: "52 GB",
      os: "Windows 7, 8, 8.1, 10 (64-bit)"
    },
    recSpecs: {
      cpu: "Intel Core i7 3770 3.4GHz / AMD Ryzen 5 1500X",
      gpu: "NVIDIA GeForce GTX 1060 (3GB VRAM) / AMD Radeon RX 570 (4GB VRAM)",
      ram: "8 GB",
      storage: "52 GB",
      os: "Windows 10 (64-bit)"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 2 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 8, vram: 3 }
  },
  {
    id: 381210,
    title: "Dead by Daylight",
    genre: ["Action", "RPG", "Indie"],
    description: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors.",
    steamRating: "Very Positive",
    ratingPercent: 80,
    price: "$19.99",
    tags: ["Survival Horror", "Multiplayer", "PVP", "Co-op"],
    minSpecs: {
      cpu: "Intel Core i3-4170 / AMD FX-8300 or equivalent",
      gpu: "DX11 compatible GeForce GTX 460 1GB / AMD HD 6850 1GB",
      ram: "8 GB",
      storage: "50 GB",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i3-4170 / AMD FX-8300 or equivalent",
      gpu: "DX11 compatible GeForce GTX 880 / AMD Radeon R9 290 (4GB VRAM)",
      ram: "8 GB",
      storage: "50 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 1 },
    recSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 4 }
  },
  {
    id: 427520,
    title: "Factorio",
    genre: ["Casual", "Indie", "Simulation", "Strategy"],
    description: "Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 98,
    price: "$35.00",
    tags: ["Automation", "Base Building", "Resource Management", "Co-op"],
    minSpecs: {
      cpu: "Dual Core 3.0GHz",
      gpu: "DirectX 10.1 capable GPU with 512MB VRAM (GeForce GTX 260)",
      ram: "4 GB",
      storage: "3 GB",
      os: "Windows 7, 8, 10 64-bit"
    },
    recSpecs: {
      cpu: "Quad Core 3.0GHz",
      gpu: "DirectX 11 capable GPU with 2GB VRAM (GeForce GTX 750 Ti)",
      ram: "8 GB",
      storage: "3 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 1, ram: 4, vram: 0.5 },
    recSpecsTier: { cpu: 3, gpu: 2, ram: 8, vram: 2 }
  },
  {
    id: 294100,
    title: "RimWorld",
    genre: ["Indie", "Simulation", "Strategy"],
    description: "A sci-fi colony sim driven by an intelligent AI storyteller. Generates stories by simulating psychology, ecology, gunplay, melee combat, climate, biomes, diplomacy, interpersonal relationships, art, medicine, trade, and more.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 98,
    price: "$34.99",
    tags: ["Colony Sim", "Survival", "Story Rich", "Management"],
    minSpecs: {
      cpu: "Core 2 Duo",
      gpu: "Intel HD Graphics 4000 or better",
      ram: "4 GB",
      storage: "1 GB",
      os: "Windows 7"
    },
    recSpecs: {
      cpu: "Intel Core i3 / AMD Ryzen 3",
      gpu: "GTX 750 Ti / RX 560",
      ram: "8 GB",
      storage: "1 GB",
      os: "Windows 10"
    },
    minSpecsTier: { cpu: 1, gpu: 1, ram: 4, vram: 0.5 },
    recSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 2 }
  },
  {
    id: 1966720,
    title: "Lethal Company",
    genre: ["Action", "Indie"],
    description: "A co-op horror about scavenging at abandoned moons to meet the Company's profit quota.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 97,
    price: "$9.99",
    tags: ["Co-op", "Survival Horror", "Procedural", "Funny"],
    minSpecs: {
      cpu: "Intel Core i5-7400 @ 3.00GHz / AMD Ryzen 5 1400",
      gpu: "NVIDIA GeForce GTX 1050 / AMD Radeon RX 560",
      ram: "8 GB",
      storage: "1 GB",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i5-9400 / AMD Ryzen 5 2600",
      gpu: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
      ram: "8 GB",
      storage: "1 GB",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 3, gpu: 2, ram: 8, vram: 2 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 8, vram: 6 }
  },

  // HIGH-END GAMES (Tier 4-5)
  {
    id: 1245620,
    title: "Elden Ring",
    genre: ["Action", "RPG"],
    description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    steamRating: "Very Positive",
    ratingPercent: 92,
    price: "$59.99",
    tags: ["Single-player", "Open World", "Souls-like", "Dark Fantasy"],
    minSpecs: {
      cpu: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
      gpu: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB",
      ram: "12 GB",
      storage: "60 GB (SSD Recommended)",
      os: "Windows 10"
    },
    recSpecs: {
      cpu: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
      gpu: "NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56 8GB",
      ram: "16 GB",
      storage: "60 GB (SSD)",
      os: "Windows 10/11"
    },
    minSpecsTier: { cpu: 3, gpu: 3, ram: 12, vram: 3 },
    recSpecsTier: { cpu: 4, gpu: 4, ram: 16, vram: 8 }
  },
  {
    id: 1086940,
    title: "Baldur's Gate 3",
    genre: ["RPG", "Adventure", "Strategy"],
    description: "Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 96,
    price: "$59.99",
    tags: ["Single-player", "Co-op", "Turn-Based", "Choices Matter"],
    minSpecs: {
      cpu: "Intel I5 4690 / AMD FX 8350",
      gpu: "NVIDIA GTX 970 / AMD RX 480 (4GB+ VRAM)",
      ram: "8 GB",
      storage: "150 GB (SSD Required)",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel i7 8700K / AMD r5 3600",
      gpu: "NVIDIA RTX 2060 Super / AMD RX 5700 XT (8GB+ VRAM)",
      ram: "16 GB",
      storage: "150 GB (SSD)",
      os: "Windows 10/11 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 3, ram: 8, vram: 4 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 16, vram: 8 }
  },
  {
    id: 1091500,
    title: "Cyberpunk 2077",
    genre: ["Action", "RPG", "Adventure"],
    description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped in a do-or-die fight for survival.",
    steamRating: "Very Positive",
    ratingPercent: 83,
    price: "$59.99",
    tags: ["Single-player", "Sci-fi", "Open World", "Cyberpunk"],
    minSpecs: {
      cpu: "Intel Core i7-6700 / AMD Ryzen 5 1600",
      gpu: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB / Intel Arc A380",
      ram: "12 GB",
      storage: "70 GB (SSD Required)",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i7-12700 / AMD Ryzen 7 7800X3D",
      gpu: "NVIDIA GeForce RTX 2060 Super / AMD Radeon RX 5700 XT / Intel Arc A770",
      ram: "16 GB",
      storage: "70 GB (SSD)",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 3, gpu: 3, ram: 12, vram: 6 },
    recSpecsTier: { cpu: 4, gpu: 4, ram: 16, vram: 8 }
  },
  {
    id: 1174180,
    title: "Red Dead Redemption 2",
    genre: ["Action", "Adventure"],
    description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age.",
    steamRating: "Very Positive",
    ratingPercent: 91,
    price: "$59.99",
    tags: ["Single-player", "Multiplayer", "Open World", "Atmospheric"],
    minSpecs: {
      cpu: "Intel Core i5-2500K / AMD FX-6300",
      gpu: "NVIDIA GeForce GTX 770 2GB / AMD Radeon R9 280 3GB",
      ram: "8 GB",
      storage: "150 GB",
      os: "Windows 10 - April 2018 Update"
    },
    recSpecs: {
      cpu: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
      gpu: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
      ram: "12 GB",
      storage: "150 GB (SSD Recommended)",
      os: "Windows 10 - April 2018 Update"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 2 },
    recSpecsTier: { cpu: 2, gpu: 3, ram: 12, vram: 4 }
  },
  {
    id: 553850,
    title: "Helldivers 2",
    genre: ["Action", "Shooter"],
    description: "The Galaxy's Last Line of Offensive. Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.",
    steamRating: "Very Positive",
    ratingPercent: 84,
    price: "$39.99",
    tags: ["Co-op", "Multiplayer", "FPS", "PvE"],
    minSpecs: {
      cpu: "Intel Core i7-4790K / AMD Ryzen 5 1500X",
      gpu: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 470 (4GB VRAM)",
      ram: "8 GB",
      storage: "100 GB (SSD Recommended)",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i7-9700K / AMD Ryzen 7 3700X",
      gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600 XT (8GB VRAM)",
      ram: "16 GB",
      storage: "100 GB (SSD)",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 3, gpu: 2, ram: 8, vram: 4 },
    recSpecsTier: { cpu: 4, gpu: 4, ram: 16, vram: 6 }
  },
  {
    id: 990080,
    title: "Hogwarts Legacy",
    genre: ["Action", "RPG", "Adventure"],
    description: "Hogwarts Legacy is an open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations...",
    steamRating: "Very Positive",
    ratingPercent: 91,
    price: "$59.99",
    tags: ["Open World", "Magic", "RPG", "Fantasy"],
    minSpecs: {
      cpu: "Intel Core i5-6600 (3.3 GHz) / AMD Ryzen 5 1400 (3.2 GHz)",
      gpu: "NVIDIA GeForce GTX 960 4GB / AMD Radeon RX 470 4GB",
      ram: "16 GB",
      storage: "85 GB (SSD Preferred)",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i7-8700 (3.2 GHz) / AMD Ryzen 5 3600 (3.6 GHz)",
      gpu: "NVIDIA GeForce GTX 1080 Ti / AMD Radeon RX 5700 XT / Intel Arc A770",
      ram: "16 GB",
      storage: "85 GB (SSD)",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 16, vram: 4 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 16, vram: 8 }
  },
  {
    id: 1551360,
    title: "Forza Horizon 5",
    genre: ["Racing", "Simulation", "Sports"],
    description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars.",
    steamRating: "Very Positive",
    ratingPercent: 88,
    price: "$59.99",
    tags: ["Racing", "Open World", "Multiplayer", "Driving"],
    minSpecs: {
      cpu: "Intel i5-4460 / AMD Ryzen 3 1200",
      gpu: "NVIDIA GTX 970 / AMD RX 470 (4GB VRAM)",
      ram: "8 GB",
      storage: "110 GB",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel i7-10700K / AMD Ryzen 5 3600X",
      gpu: "NVIDIA RTX 3060 / AMD RX 6700 XT (12GB VRAM)",
      ram: "16 GB",
      storage: "110 GB (SSD)",
      os: "Windows 10/11 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 4 },
    recSpecsTier: { cpu: 4, gpu: 4, ram: 16, vram: 12 }
  },
  {
    id: 1817070,
    title: "Marvel's Spider-Man Remastered",
    genre: ["Action", "Adventure"],
    description: "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime...",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 96,
    price: "$59.99",
    tags: ["Open World", "Action", "Superheroes", "Single-player"],
    minSpecs: {
      cpu: "Intel Core i3-4160 @ 3.60GHz / AMD equivalent",
      gpu: "NVIDIA GeForce GTX 950 / AMD Radeon RX 470",
      ram: "8 GB",
      storage: "75 GB",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i5-4670 @ 3.40GHz / AMD Ryzen 5 1600 @ 3.20GHz",
      gpu: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
      ram: "16 GB",
      storage: "75 GB (SSD)",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 2 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 16, vram: 6 }
  },
  {
    id: 782330,
    title: "Doom Eternal",
    genre: ["Action"],
    description: "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.",
    steamRating: "Very Positive",
    ratingPercent: 91,
    price: "$39.99",
    tags: ["FPS", "Gore", "Action", "Great Soundtrack"],
    minSpecs: {
      cpu: "Intel Core i5 @ 3.3 GHz / AMD Ryzen 3 @ 3.1 GHz",
      gpu: "NVIDIA GeForce GTX 1050 Ti 4GB / AMD Radeon RX 470 4GB",
      ram: "8 GB",
      storage: "80 GB",
      os: "Windows 7 / 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i7-6700K / AMD Ryzen 7 1800X",
      gpu: "NVIDIA GeForce GTX 1080 8GB / AMD Radeon RX Vega 56 8GB",
      ram: "8 GB",
      storage: "80 GB (SSD)",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 4 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 8, vram: 8 }
  },
  {
    id: 1326470,
    title: "Sons of the Forest",
    genre: ["Action", "Adventure", "Simulation"],
    description: "Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends...",
    steamRating: "Very Positive",
    ratingPercent: 86,
    price: "$29.99",
    tags: ["Survival", "Co-op", "Open World", "Crafting"],
    minSpecs: {
      cpu: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
      gpu: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 570 4GB",
      ram: "12 GB",
      storage: "20 GB (SSD Preferred)",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
      gpu: "NVIDIA GeForce GTX 1080 Ti / AMD Radeon RX 5700 XT",
      ram: "16 GB",
      storage: "20 GB (SSD)",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 3, gpu: 3, ram: 12, vram: 3 },
    recSpecsTier: { cpu: 4, gpu: 3, ram: 16, vram: 8 }
  },

  // ULTRA/ENTHUSIAST GAMES (Tiers 5-6)
  {
    id: 2358720,
    title: "Black Myth: Wukong",
    genre: ["Action", "RPG", "Adventure"],
    description: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges ahead, to uncover the obscured truth...",
    steamRating: "Overwhelmingly Positive",
    ratingPercent: 96,
    price: "$59.99",
    tags: ["Single-player", "Action RPG", "Souls-like", "Mythology"],
    minSpecs: {
      cpu: "Intel Core i5-8400 / AMD Ryzen 5 1600",
      gpu: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
      ram: "16 GB",
      storage: "130 GB (SSD Required)",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i7-9700 / AMD Ryzen 5 5500",
      gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT / Intel Arc A750",
      ram: "16 GB",
      storage: "130 GB (SSD)",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 3, gpu: 3, ram: 16, vram: 6 },
    recSpecsTier: { cpu: 4, gpu: 4, ram: 16, vram: 8 }
  },
  {
    id: 2215430,
    title: "Ghost of Tsushima DIRECTOR'S CUT",
    genre: ["Action", "Adventure"],
    description: "A storm is coming. Venture into feudal Japan in this PC edition of Ghost of Tsushima Director's Cut; forge your own path in this open world adventure.",
    steamRating: "Very Positive",
    ratingPercent: 91,
    price: "$59.99",
    tags: ["Single-player", "Open World", "Swordplay", "Atmospheric"],
    minSpecs: {
      cpu: "Intel Core i3-7100 / AMD Ryzen 3 1200",
      gpu: "NVIDIA GeForce GTX 960 4GB / AMD Radeon RX 5500 XT",
      ram: "8 GB",
      storage: "75 GB (SSD Recommended)",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i5-8600 / AMD Ryzen 5 3600",
      gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5600 XT",
      ram: "16 GB",
      storage: "75 GB (SSD)",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 4 },
    recSpecsTier: { cpu: 3, gpu: 4, ram: 16, vram: 6 }
  },
  {
    id: 2420110,
    title: "Horizon Forbidden West Complete Edition",
    genre: ["Action", "RPG", "Adventure"],
    description: "Experience the epic Horizon Forbidden West in its entirety with bonus content and the Burning Shores expansion included. The Burning Shores add-on contains additional content...",
    steamRating: "Very Positive",
    ratingPercent: 90,
    price: "$59.99",
    tags: ["Open World", "Post-apocalyptic", "Female Protagonist", "Sci-fi"],
    minSpecs: {
      cpu: "Intel Core i3-8100 / AMD Ryzen 3 1300X",
      gpu: "NVIDIA GeForce GTX 1650 4GB / AMD Radeon RX 5500 XT 4GB",
      ram: "16 GB",
      storage: "150 GB (SSD Required)",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i5-8600 / AMD Ryzen 5 3600",
      gpu: "NVIDIA GeForce RTX 3060 / AMD Radeon RX 5700",
      ram: "16 GB",
      storage: "150 GB (SSD)",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 3, gpu: 2, ram: 16, vram: 4 },
    recSpecsTier: { cpu: 3, gpu: 4, ram: 16, vram: 8 }
  },
  {
    id: 1716740,
    title: "Starfield",
    genre: ["RPG"],
    description: "Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4.",
    steamRating: "Mixed",
    ratingPercent: 59,
    price: "$69.99",
    tags: ["Space", "Open World", "RPG", "Sci-fi"],
    minSpecs: {
      cpu: "Intel Core i7-6800K / AMD Ryzen 5 2600X",
      gpu: "NVIDIA GeForce GTX 1070 Ti / AMD Radeon RX 5700",
      ram: "16 GB",
      storage: "125 GB (SSD Required)",
      os: "Windows 10 Version 2004 (10.0.19041)"
    },
    recSpecs: {
      cpu: "Intel Core i5-10600K / AMD Ryzen 5 3600X",
      gpu: "NVIDIA GeForce RTX 2080 / AMD Radeon RX 6800 XT",
      ram: "16 GB",
      storage: "125 GB (SSD)",
      os: "Windows 10/11 64-bit"
    },
    minSpecsTier: { cpu: 3, gpu: 3, ram: 16, vram: 8 },
    recSpecsTier: { cpu: 3, gpu: 4, ram: 16, vram: 8 }
  },
  {
    id: 1250410,
    title: "Microsoft Flight Simulator",
    genre: ["Simulation"],
    description: "From light planes to wide-body jets, fly highly detailed and accurate aircraft in the next generation of Microsoft Flight Simulator. Test your piloting skills against challenges...",
    steamRating: "Very Positive",
    ratingPercent: 90,
    price: "$59.99",
    tags: ["Simulation", "Flight", "Open World", "Realistic"],
    minSpecs: {
      cpu: "Intel i5-4460 / AMD Ryzen 3 1200",
      gpu: "NVIDIA GTX 770 / AMD Radeon RX 570 (2GB VRAM)",
      ram: "8 GB",
      storage: "150 GB",
      os: "Windows 10"
    },
    recSpecs: {
      cpu: "Intel i5-8400 / AMD Ryzen 5 1500X",
      gpu: "NVIDIA GTX 970 / AMD Radeon RX 590 (4GB VRAM)",
      ram: "16 GB",
      storage: "150 GB",
      os: "Windows 10"
    },
    minSpecsTier: { cpu: 2, gpu: 2, ram: 8, vram: 2 },
    recSpecsTier: { cpu: 3, gpu: 3, ram: 16, vram: 4 }
  },
  {
    id: 1774580,
    title: "STAR WARS Jedi: Survivor",
    genre: ["Action", "Adventure"],
    description: "The story of Cal Kestis continues in STAR WARS Jedi: Survivor™, a galaxy-spanning, third-person, action-adventure game from Respawn Entertainment...",
    steamRating: "Mixed",
    ratingPercent: 66,
    price: "$69.99",
    tags: ["Sci-fi", "Souls-like", "Adventure", "Single-player"],
    minSpecs: {
      cpu: "Intel Core i7-7700 / AMD Ryzen 5 1400 (4 cores, 8 threads)",
      gpu: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 580 (8GB VRAM)",
      ram: "8 GB",
      storage: "155 GB (SSD Required)",
      os: "Windows 10 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i5-11600K / AMD Ryzen 5 5600X (6 cores, 12 threads)",
      gpu: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 6700 XT (8GB VRAM)",
      ram: "16 GB",
      storage: "155 GB (SSD)",
      os: "Windows 10 64-bit"
    },
    minSpecsTier: { cpu: 3, gpu: 3, ram: 8, vram: 8 },
    recSpecsTier: { cpu: 4, gpu: 4, ram: 16, vram: 8 }
  },
  {
    id: 949230,
    title: "Cities: Skylines II",
    genre: ["Simulation", "Strategy"],
    description: "Raise a city from the ground up and transform it into a thriving metropolis with the most realistic city builder ever. Push your creativity and problem-solving...",
    steamRating: "Mixed",
    ratingPercent: 54,
    price: "$49.99",
    tags: ["City Builder", "Simulation", "Strategy", "Resource Management"],
    minSpecs: {
      cpu: "Intel Core i7-6700K / AMD Ryzen 5 2600X",
      gpu: "NVIDIA GeForce GTX 970 4GB / AMD Radeon RX 480 8GB",
      ram: "8 GB",
      storage: "60 GB (SSD Required)",
      os: "Windows 10 Home 64-bit"
    },
    recSpecs: {
      cpu: "Intel Core i5-12600K / AMD Ryzen 7 5800X",
      gpu: "NVIDIA GeForce RTX 3080 10GB / AMD Radeon RX 6800 XT",
      ram: "16 GB",
      storage: "60 GB (SSD)",
      os: "Windows 10 Home 64-bit / Windows 11 64-bit"
    },
    minSpecsTier: { cpu: 3, gpu: 2, ram: 8, vram: 4 },
    recSpecsTier: { cpu: 5, gpu: 5, ram: 16, vram: 10 }
  }
];
