import { Link, useNavigate } from "react-router-dom";

import cities from "../data/cities";

import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="top-nav">
      <Link to="/" className="nav-logo">
        ShowTime
      </Link>

      <select
        id="citySelect"
        className="nav-location"
        defaultValue="Mumbai"
        aria-label="Select city"
      >
        {cities.map((city) => (
          <option key={city.cityId} value={city.cityName}>
            {city.cityName}
          </option>
        ))}
      </select>

      <div className="nav-search" aria-hidden="true">
        <span className="nav-search-icon" />
      </div>

      <button className="nav-login" type="button" onClick={() => navigate("/login")}>
        <div className="nav-avatar">U</div>
        <span>Login</span>
      </button>
    </nav>
  );
}

export default Navbar;