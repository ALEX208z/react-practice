import { useState } from "react"
import "./AuthPage.css"

export default function AuthPage() {
  const [mode, setMode] = useState("login")
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [focused, setFocused] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const isLogin = mode === "login"

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function switchMode(newMode) {
    setMode(newMode)
    setForm({ name: "", email: "", password: "" })
    setShowPassword(false)
    setSubmitted(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div className="auth-root">

      {/* ── Left panel ── */}
      <div className="auth-left">
        <div className="auth-left-content">
          <div className="auth-brand">
            <span className="auth-brand-dot" />
            <span className="auth-brand-name">Lumina</span>
          </div>
          <div className="auth-left-body">
            <h2 className="auth-tagline">
              Where ideas <br />
              <em>come alive.</em>
            </h2>
            <p className="auth-sub">
              A workspace built for makers, thinkers, and builders.
              Join thousands of creators who ship faster.
            </p>
            <div className="auth-avatars">
              <div className="avatar a1" />
              <div className="avatar a2" />
              <div className="avatar a3" />
              <div className="avatar a4" />
              <span className="avatar-count">+2,400 creators</span>
            </div>
          </div>
          <div className="auth-orb orb1" />
          <div className="auth-orb orb2" />
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="auth-right">
        <div className="auth-card">

          <div className="auth-card-header">
            <h1 className="auth-title">
              {isLogin ? "Welcome back" : "Create account"}
            </h1>
            <p className="auth-desc">
              {isLogin
                ? "Sign in to continue your journey."
                : "Start building something great today."}
            </p>
          </div>

          {/* ── Tabs ── */}
          <div className="auth-tabs">
            <button
              type="button"
              className={`auth-tab ${mode === "login" ? "active" : ""}`}
              onClick={() => switchMode("login")}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`auth-tab ${mode === "signup" ? "active" : ""}`}
              onClick={() => switchMode("signup")}
            >
              Sign Up
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>

            {/* Name — only for signup */}
            {!isLogin && (
              <div className={`auth-field ${focused === "name" ? "focused" : ""}`}>
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  required
                  autoComplete="name"
                />
                <span className="field-line" />
              </div>
            )}

            {/* Email */}
            <div className={`auth-field ${focused === "email" ? "focused" : ""}`}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                required
                autoComplete="email"
              />
              <span className="field-line" />
            </div>

            {/* Password */}
            <div className={`auth-field ${focused === "password" ? "focused" : ""}`}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused("")}
                required
                autoComplete={isLogin ? "current-password" : "new-password"}
              />
              <button
                type="button"
                className="toggle-pw"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              <span className="field-line" />
            </div>

            {/* Forgot — login only */}
            {isLogin && (
              <div className="auth-forgot">
                <button type="button" className="forgot-btn">Forgot password?</button>
              </div>
            )}

            <button type="submit" className={`auth-submit ${submitted ? "success" : ""}`}>
              {submitted ? "✓ Done!" : isLogin ? "Sign In →" : "Create Account →"}
            </button>
          </form>

          <div className="auth-divider"><span>or continue with</span></div>

          <div className="auth-socials">
            <button type="button" className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button type="button" className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>

          <p className="auth-switch">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              className="switch-btn"
              onClick={() => switchMode(isLogin ? "signup" : "login")}
            >
              {isLogin ? " Sign Up" : " Sign In"}
            </button>
          </p>

        </div>
      </div>
    </div>
  )
}