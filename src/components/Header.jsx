import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logoutUser, isAuth } from "../utils/auth";
import logo from "../images/Apaign Logo.jpg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(isAuth());

  useEffect(() => {
    setAuthenticated(isAuth());
    setOpen(false); // close menu on route change
  }, [location.pathname]);

  const handleLogout = () => {
    logoutUser();
    setAuthenticated(false);
    navigate("/");
  };

  return (
    <header className="navbar">
      {/* LEFT: LOGO */}
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Apaign Logo" className="logo-img" />
        </Link>
      </div>

      {/* CENTER: DESKTOP NAV */}
      <nav className="nav-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>        
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
      </nav>

      {/* RIGHT: AUTH + HAMBURGER */}
      <div className="nav-right">
        {!authenticated ? (
          <Link to="/login" className="login-btn">Login</Link>
        ) : (
          <button className="login-btn" onClick={handleLogout}>Logout</button>
        )}

        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          {!authenticated ? (
            <Link to="/login">Login</Link>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      )}
    </header>
  );
}
