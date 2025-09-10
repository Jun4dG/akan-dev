import { NavLink } from "react-router-dom";
import "../assets/styles/sidebar.css";
import logo from "../assets/images/sidebar_logo.png"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src={logo} alt="Main Logo" className="logo" />
        <h1 className="brandIcon">MSU-AKAN Student</h1>
      </div>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Dashboard
        </NavLink>
        <NavLink to="/grades" className={({ isActive }) => (isActive ? "active" : "")}>
          Grades
        </NavLink>
        <NavLink to="/evaluation" className={({ isActive }) => (isActive ? "active" : "")}>
          Evaluation
        </NavLink>
        <NavLink to="/schedule" className={({ isActive }) => (isActive ? "active" : "")}>
          Schedule
        </NavLink>
        <NavLink to="/billing" className={({ isActive }) => (isActive ? "active" : "")}>
          Billing
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
          Profile
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
