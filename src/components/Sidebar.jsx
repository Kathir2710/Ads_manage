import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="dash-sidebar">
      <div className="brand">AdsPanel</div>

      <nav className="dash-nav">
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/facebook">Facebook</NavLink>
        <NavLink to="/instagram">Instagram</NavLink>
        <NavLink to="/youtube">YouTube</NavLink>
        <NavLink to="/snapchat">Snapchat</NavLink>
      </nav>

      <button className="upgrade">Upgrade Now</button>
    </aside>
  );
}
