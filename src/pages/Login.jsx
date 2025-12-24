import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser, isAuth } from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* 🔐 Redirect if already logged in */
  useEffect(() => {
    if (isAuth()) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    // MOCK AUTH (backend later)
    loginUser();

    // Redirect to dashboard
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card login-anim">
        {/* LEFT PANEL */}
        <div className="auth-left">
          <h1>
            The Social Ad AI <br />
            You Can Hire Today
          </h1>
          <p>
            Launch, optimize, and scale ads across Facebook, Instagram,
            Snapchat & WhatsApp from one dashboard.
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="auth-right">
          <h2>Sign In</h2>
          <p className="muted">
            Access your advertising dashboard
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
          </form>

          <p className="switch">
            Don’t have an account?{" "}
            <Link to="/register">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
