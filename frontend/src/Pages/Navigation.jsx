import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li className="nav-item">
          <NavLink
            to="/kezdolap"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Ingatlanok
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
