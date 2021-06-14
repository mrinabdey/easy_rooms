import { useState } from "react";
import "./SideBar.css";

const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <div>
      <div className="navbar" onClick={showSideBar}>
        <i class="fas fa-bars"></i>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <i class="fas fa-user-circle"></i>
          </li>
          <div className="user-details">UserName</div>
          <div className="navbar-items">
            <li className="navbar-item">Profile</li>
            <li className="navbar-item">About</li>
            <li className="navbar-item">Logout</li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
