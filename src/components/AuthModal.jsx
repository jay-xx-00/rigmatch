import React, { useState } from "react";
import { X, Mail, Lock, ShieldAlert, LogIn, UserPlus } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function AuthModal({ onClose }) {
  const { login, signup, isMock } = useAuth();
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (!isLoginTab && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);

    try {
      if (isLoginTab) {
        await login(email, password);
        setSuccess("Logged in successfully!");
        setTimeout(() => onClose(), 800);
      } else {
        await signup(email, password);
        setSuccess("Account created successfully!");
        setTimeout(() => onClose(), 800);
      }
    } catch (err) {
      console.error(err);
      if (err.message === "auth/email-already-in-use" || err.code === "auth/email-already-in-use") {
        setError("This email is already in use.");
      } else if (err.message === "auth/invalid-credential" || err.code === "auth/invalid-credential" || err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
        setError("Invalid email or password.");
      } else {
        setError("Authentication failed. Please check your credentials.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "420px" }}>
        <button className="modal-close" onClick={onClose}>
          <X size={18} />
        </button>

        {/* Tab Headers */}
        <div style={{
          display: "flex",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "var(--bg-tertiary)",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          overflow: "hidden"
        }}>
          <button
            onClick={() => { setIsLoginTab(true); setError(""); }}
            style={{
              flex: 1,
              padding: "1.25rem",
              background: isLoginTab ? "var(--bg-secondary)" : "transparent",
              border: "none",
              color: isLoginTab ? "var(--accent-cyan)" : "var(--text-secondary)",
              fontFamily: "var(--font-display)",
              fontSize: "0.9rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              transition: "var(--transition-smooth)",
              borderBottom: isLoginTab ? "2px solid var(--accent-cyan)" : "none"
            }}
          >
            <LogIn size={14} /> Log In
          </button>
          <button
            onClick={() => { setIsLoginTab(false); setError(""); }}
            style={{
              flex: 1,
              padding: "1.25rem",
              background: !isLoginTab ? "var(--bg-secondary)" : "transparent",
              border: "none",
              color: !isLoginTab ? "var(--accent-cyan)" : "var(--text-secondary)",
              fontFamily: "var(--font-display)",
              fontSize: "0.9rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              transition: "var(--transition-smooth)",
              borderBottom: !isLoginTab ? "2px solid var(--accent-cyan)" : "none"
            }}
          >
            <UserPlus size={14} /> Sign Up
          </button>
        </div>

        {/* Form Body */}
        <div style={{ padding: "2rem" }}>
          {isMock && (
            <div style={{
              background: "rgba(168, 85, 247, 0.08)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
              borderRadius: "8px",
              padding: "0.6rem 0.85rem",
              marginBottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.75rem",
              color: "#e9d5ff"
            }}>
              <ShieldAlert size={14} color="var(--accent-purple)" />
              <span>Demo Mode active. Create/use any fake account.</span>
            </div>
          )}

          {error && (
            <div style={{
              background: "rgba(239, 68, 68, 0.08)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              borderRadius: "8px",
              padding: "0.6rem 0.85rem",
              marginBottom: "1.25rem",
              color: "var(--neon-red)",
              fontSize: "0.8rem",
              textAlign: "center"
            }}>
              {error}
            </div>
          )}

          {success && (
            <div style={{
              background: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              borderRadius: "8px",
              padding: "0.6rem 0.85rem",
              marginBottom: "1.25rem",
              color: "var(--neon-green)",
              fontSize: "0.8rem",
              textAlign: "center"
            }}>
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Email field */}
            <div className="spec-field">
              <label className="spec-label" style={{ fontSize: "0.75rem" }}>
                <Mail size={12} /> Email Address
              </label>
              <div className="input-glow-wrapper">
                <input
                  type="email"
                  className="spec-input"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div className="spec-field">
              <label className="spec-label" style={{ fontSize: "0.75rem" }}>
                <Lock size={12} /> Password
              </label>
              <div className="input-glow-wrapper">
                <input
                  type="password"
                  className="spec-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Confirm Password field (Sign up only) */}
            {!isLoginTab && (
              <div className="spec-field">
                <label className="spec-label" style={{ fontSize: "0.75rem" }}>
                  <Lock size={12} /> Confirm Password
                </label>
                <div className="input-glow-wrapper">
                  <input
                    type="password"
                    className="spec-input"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {/* Action button */}
            <button
              type="submit"
              className="btn-detect"
              disabled={submitting}
              style={{ marginTop: "1rem", width: "100%" }}
            >
              {submitting ? (
                <span>Loading...</span>
              ) : isLoginTab ? (
                <span>Access Dashboard</span>
              ) : (
                <span>Create Game Profile</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
