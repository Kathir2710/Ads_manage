import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../utils/auth";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) return;

    // mock register + auto login
    loginUser();
    navigate("/dashboard");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card register-anim">
        {/* LEFT */}
        <div className="auth-left alt">
          <h1>
            Start Advertising <br />
            Smarter Today
          </h1>
          <p>
            One account. All platforms. Full control.
          </p>
        </div>

        {/* RIGHT */}
        <div className="auth-right">
          <h2>Create Account</h2>

          <form onSubmit={handleRegister}>
            <input
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <button type="submit">Register</button>
          </form>

          <p className="switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
