import { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

export default function AuthForm({ type }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isLogin = type === "login";

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = isLogin ? "/api/login" : "/api/signup";

      const response = await axios.post(endpoint, { email, password });

      login(response.data, remember);
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="auth-form fade-in" onSubmit={handleSubmit}>
      <h2>{isLogin ? "Welcome Back 👋" : "Create Account 🚀"}</h2>

      {error && <p className="error">{error}</p>}

      <div className="input-group">
        <input
          type="email"
          required
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Email</label>
      </div>

      <div className="input-group">
        <input
          type="password"
          required
          placeholder=" "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password</label>
      </div>

      {isLogin && (
        <div className="remember">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          <span>Remember me</span>
        </div>
      )}

      <button type="submit" disabled={loading}>
        {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
      </button>
    </form>
  );
}