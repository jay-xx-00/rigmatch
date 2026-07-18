import React, { useState, useEffect } from "react";
import { 
  Gamepad2, 
  Search, 
  SlidersHorizontal, 
  LogOut, 
  User, 
  Gamepad, 
  Sparkles
} from "lucide-react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { gamesDatabase } from "./data/gamesDatabase";
import { checkCompatibility } from "./utils/specMatcher";
import SpecsInput from "./components/SpecsInput";
import GameCard from "./components/GameCard";
import GameModal from "./components/GameModal";
import AuthModal from "./components/AuthModal";

function AppContent() {
  const { currentUser, logout, isMock, saveUserSpecs, loadUserSpecs } = useAuth();
  
  // Default specs state
  const [specs, setSpecs] = useState({
    gpu: "NVIDIA GeForce RTX 3060",
    cpu: "Intel Core i5-12400F",
    ram: 16,
    storageType: "SSD"
  });

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedCompatibility, setSelectedCompatibility] = useState("All");
  const [selectedSort, setSelectedSort] = useState("relevancy");

  // Modal states
  const [activeGame, setActiveGame] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Sync Specs on Login
  useEffect(() => {
    async function syncSpecs() {
      if (currentUser) {
        const cloudSpecs = await loadUserSpecs();
        if (cloudSpecs) {
          setSpecs(cloudSpecs);
        } else {
          // If no cloud specs found, upload current specs as starting point
          saveUserSpecs(specs);
        }
      }
    }
    syncSpecs();
  }, [currentUser]);

  // Handle specs update from input component
  const handleSpecsChange = (newSpecs) => {
    setSpecs(newSpecs);
    if (currentUser) {
      saveUserSpecs(newSpecs);
    }
  };

  // Helper to extract numeric value from price
  const getNumericPrice = (priceStr) => {
    if (priceStr.toLowerCase().includes("free")) return 0;
    const num = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 999 : num;
  };

  // Filter and sort the games list
  const filteredGames = gamesDatabase
    .filter((game) => {
      // 1. Search Query
      const matchesSearch = 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // 2. Genre filter
      const matchesGenre = selectedGenre === "All" || game.genre.includes(selectedGenre);

      // 3. Compatibility filter
      const comp = checkCompatibility(specs, game);
      const matchesCompatibility = 
        selectedCompatibility === "All" || 
        comp.status === selectedCompatibility;

      return matchesSearch && matchesGenre && matchesCompatibility;
    })
    .sort((a, b) => {
      // Sort logic
      if (selectedSort === "alphabetical") {
        return a.title.localeCompare(b.title);
      }
      
      if (selectedSort === "rating") {
        return b.ratingPercent - a.ratingPercent;
      }
      
      if (selectedSort === "price") {
        return getNumericPrice(a.price) - getNumericPrice(b.price);
      }

      if (selectedSort === "fps") {
        // Sort by approximate estimated FPS tier
        const compA = checkCompatibility(specs, a);
        const compB = checkCompatibility(specs, b);
        return compB.score - compA.score;
      }

      // Relevancy (Default): Score (Fit Quality) desc, then Rating desc
      const compA = checkCompatibility(specs, a);
      const compB = checkCompatibility(specs, b);
      if (compB.score !== compA.score) {
        return compB.score - compA.score;
      }
      return b.ratingPercent - a.ratingPercent;
    });

  // Extract unique genres for filter dropdown
  const allGenres = ["All", ...new Set(gamesDatabase.flatMap(g => g.genre))];

  return (
    <div className="app-container">
      {/* Top Banner Navigation Header */}
      <header className="main-header">
        <div className="header-logo">
          <Gamepad2 className="logo-icon" size={32} />
          <div>
            <h1 className="display-title" style={{ fontSize: "1.8rem" }}>RIGMatch</h1>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "1px", textTransform: "uppercase" }}>
              Steam Games Specs Matcher
            </span>
          </div>
        </div>

        {/* User Account Bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {currentUser ? (
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "#fff", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <User size={12} color="var(--accent-cyan)" /> {currentUser.email.split("@")[0]}
                </span>
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                  {isMock ? "Cloud Sync (Demo)" : "Cloud Sync (Active)"}
                </span>
              </div>
              <button 
                className="filter-select" 
                onClick={logout}
                style={{ display: "flex", alignItems: "center", gap: "0.35rem", padding: "0.5rem 0.85rem" }}
              >
                <LogOut size={14} /> Log Out
              </button>
            </div>
          ) : (
            <button 
              className="btn-detect" 
              onClick={() => setShowAuthModal(true)}
              style={{ width: "auto", padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}
            >
              Sign In / Sync Specs
            </button>
          )}
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <main className="dashboard-grid">
        {/* Left column: Hardware input panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <SpecsInput specs={specs} onSpecsChange={handleSpecsChange} />
          
          <div className="glass-panel" style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
            <h4 style={{ color: "#fff", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <Sparkles size={14} color="var(--accent-cyan)" /> Cloud Profiling
            </h4>
            {currentUser ? (
              <span>Your Rig setup is actively linked to your profile <strong>{currentUser.email}</strong>. Changing specs updates your profile database automatically.</span>
            ) : (
              <span>You are playing as a Guest. Sign in to save your hardware configurations and retrieve them instantly.</span>
            )}
          </div>
        </div>

        {/* Right column: Recommendation search catalog */}
        <div className="results-container">
          <div className="filter-bar glass-panel">
            {/* Search inputs */}
            <div className="search-input-wrapper">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search games, tags, publishers..."
                className="search-field"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Selection filters */}
            <div className="filter-selectors">
              {/* Genre filter */}
              <select 
                className="filter-select"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                {allGenres.map(genre => (
                  <option key={genre} value={genre}>{genre} Genre</option>
                ))}
              </select>

              {/* Compatibility filter */}
              <select 
                className="filter-select"
                value={selectedCompatibility}
                onChange={(e) => setSelectedCompatibility(e.target.value)}
              >
                <option value="All">All Matches</option>
                <option value="perfect">Perfect Matches</option>
                <option value="good">Good Matches</option>
                <option value="minimum">Playable (Min Specs)</option>
                <option value="below">Below Specs</option>
              </select>

              {/* Sort filter */}
              <select 
                className="filter-select"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="relevancy">Recommended</option>
                <option value="fps">Estimated FPS</option>
                <option value="rating">Steam Rating</option>
                <option value="price">Price (Low to High)</option>
                <option value="alphabetical">Name A-Z</option>
              </select>
            </div>
          </div>

          {/* Games catalog display grid */}
          {filteredGames.length > 0 ? (
            <div className="games-grid">
              {filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  userSpecs={specs}
                  onClick={() => setActiveGame(game)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state glass-panel">
              <Gamepad size={48} />
              <h3>No Gaming Matches Found</h3>
              <p>Try reducing your specifications filter criteria or clearing your search term.</p>
              <button 
                className="filter-select" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedGenre("All");
                  setSelectedCompatibility("All");
                }}
                style={{ marginTop: "0.5rem" }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer Branding */}
      <footer style={{
        marginTop: "4rem",
        padding: "1.5rem 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        textAlign: "center",
        fontSize: "0.8rem",
        color: "var(--text-muted)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <span>&copy; {new Date().getFullYear()} RIGMatch. Powered by Steam Static Capsule API.</span>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <span>Vanilla CSS Glassmorphism Design System</span>
        </div>
      </footer>

      {/* Overlays / Dialog Modals */}
      {activeGame && (
        <GameModal
          game={activeGame}
          userSpecs={specs}
          onClose={() => setActiveGame(null)}
        />
      )}

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
