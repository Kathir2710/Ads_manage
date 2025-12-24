import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/dashboard.css";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔴 CHANGE THIS KEY IF NEEDED
    localStorage.removeItem("token");

    setOpen(false);
    navigate("/"); // go to Home page
  };

  return (
    <div className={`dash-root ${open ? "sidebar-open" : ""}`}>

      {/* MOBILE MENU BUTTON */}
      <button className="menu-btn" onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* SIDEBAR */}
      <aside className={`dash-sidebar ${open ? "open" : ""}`}>
        
        {/* BRAND */}
        <div className="brand">
          <span className="brand-logo">🌀</span>
          AdsPanel
        </div>

        {/* NAV */}
        <nav className="dash-nav" onClick={() => setOpen(false)}>
          <NavLink to="/dashboard" end>
            🏠 Dashboard
          </NavLink>

          <NavLink to="/dashboard/facebook">
            📘 Facebook
          </NavLink>

          <NavLink to="/dashboard/instagram">
            📸 Instagram
          </NavLink>

          <NavLink to="/dashboard/youtube">
            ▶️ YouTube
          </NavLink>

          <NavLink to="/dashboard/snapchat">
            👻 Snapchat
          </NavLink>

          <NavLink to="/dashboard/campaigns">
            📊 Campaigns
          </NavLink>

          <NavLink to="/dashboard/reports">
            📈 Reports
          </NavLink>

          <NavLink to="/dashboard/billing">
            💳 Billing
          </NavLink>

          <NavLink to="/dashboard/support">
            🛟 Support
          </NavLink>
        </nav>

        {/* FOOTER ACTIONS */}
        <div className="sidebar-footer">
          <button className="upgrade">
            🚀 Upgrade Now
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            🔓 Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="dash-main">
        <Outlet />
      </main>
    </div>
  );
}
