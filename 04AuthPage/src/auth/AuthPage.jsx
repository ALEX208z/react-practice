import { useState } from "react";
import AuthForm from "./AuthForm";
import "./auth.css";

export default function AuthPage() {
  const [mode, setMode] = useState("login");

  return (
    <div className="auth-container">
      <div className="auth-card slide-up">
        <AuthForm type={mode} />

        <p className="switch">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span
            onClick={() =>
              setMode(mode === "login" ? "signup" : "login")
            }
          >
            {mode === "login" ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}