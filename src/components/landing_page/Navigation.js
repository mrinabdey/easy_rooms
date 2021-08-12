import { Link } from "react-router-dom";
import "./Navigation.css";
import "../../fontawesome-free-5.15.3-web/js/all";
import "../../fontawesome-free-5.15.3-web/css/all.css";

function Navigation() {
  return (
    <div className="navbar_container_container">
      <div className="room-navbar_icon navbar_container">
        <Link to="/" style={{ all: "unset" }}>
          <i className="fas fa-home navbar_icon" />
        </Link>
      </div>
      <div className="food-navbar_icon navbar_container">
        <Link to="/food" style={{ all: "unset" }}>
          <i className="fas fa-utensils navbar_icon" />
        </Link>
      </div>
      <div className="market-navbar_icon navbar_container">
        <Link to="/market" style={{ all: "unset" }}>
          <i className="fas fa-map-marker-alt navbar_icon" />
        </Link>
      </div>
      <div className="notes-navbar_icon navbar_container">
        <Link to="/notes" style={{ all: "unset" }}>
          <i className="fas fa-book-open navbar_icon" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
