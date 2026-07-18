import React from "react";
import { CheckCircle2, AlertTriangle, AlertOctagon, Flame } from "lucide-react";
import { checkCompatibility } from "../utils/specMatcher";

const STATUS_CONFIG = {
  perfect:  { label: "Perfect Match",  dotClass: "perfect",  textColor: "var(--secondary)" },
  good:     { label: "Good Match",     dotClass: "good",     textColor: "var(--secondary)" },
  minimum:  { label: "Minimum Specs",  dotClass: "minimum",  textColor: "var(--tertiary)" },
  below:    { label: "Below Specs",    dotClass: "below",    textColor: "var(--danger)" },
};

export default function GameCard({ game, userSpecs, onClick }) {
  const comp = checkCompatibility(userSpecs, game);
  const config = STATUS_CONFIG[comp.status] || STATUS_CONFIG.below;

  return (
    <div className="game-card" onClick={onClick}>
      {/* Cover Image */}
      <div className="game-capsule-wrapper">
        <img
          src={`https://shared.akamai.steamstatic.com/store_images/steam/apps/${game.id}/header.jpg`}
          alt={game.title}
          className="game-capsule"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop";
          }}
        />
        {/* Compatibility badge — clipped HUD style */}
        <div className={`badge-compat badge-${comp.status}`}>
          <span className={`status-dot ${config.dotClass}`} />
          {config.label}
        </div>
      </div>

      {/* Card body */}
      <div className="game-info">
        <h3 className="game-title" title={game.title}>{game.title}</h3>

        <div className="game-genres">
          {game.genre.slice(0, 3).map((g) => (
            <span key={g} className="genre-tag">{g}</span>
          ))}
        </div>

        <div className="game-rating">
          <Flame size={11} className={game.ratingPercent >= 90 ? "rating-high" : "rating-mixed"} />
          <span>{game.ratingPercent}% — {game.steamRating}</span>
        </div>

        <div className="game-footer">
          <span className="game-price">{game.price}</span>
          <span
            className="perf-summary-pill"
            style={{ color: config.textColor }}
          >
            {comp.fpsEstimate}
          </span>
        </div>
      </div>
    </div>
  );
}
