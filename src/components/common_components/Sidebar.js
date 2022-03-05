import { useContext, useState, useEffect } from "react";
import mode from "../../mode.js";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import "./SideBar.css";

const SideBar = (props) => {
  const [sideBar, setSideBar] = useState(false);

  const [user, setUser] = useState({});
  const email = localStorage.getItem("email");
  let url;
  if (mode) {
    url = `https://easyrooms.herokuapp.com/user/${email}`;
  } else {
    url = `http://localhost:4000/user/${email}`;
  }

  const fetchUser = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);

  const showSideBar = () => setSideBar(!sideBar);
  const username = user.name;

  return (
    <div className="navbar-icon-container">
      <div className="navbar" onClick={showSideBar}>
        <i class="fas fa-bars"></i>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <div className="nav-menu-cross" onClick={showSideBar}>
            <MdCancel />
          </div>
          <li className="navbar-toggle">
            <i class="fas fa-user-circle"></i>
          </li>
          <div className="user-details">{username}</div>
          <div className="navbar-items">
            <div className="show-mob">
              <Link to="/bookmarks">
                <li className="navbar-item">Bookmarks</li>
              </Link>
              <Link to="/chat">
                <li className="navbar-item">Chats</li>
              </Link>
            </div>
            <Link to="/profile">
              <li className="navbar-item">Profile</li>
            </Link>
            <Link to="/about">
              <li className="navbar-item">About</li>
            </Link>
            <Link to="/contact">
              <li className="navbar-item">Contact Us</li>
            </Link>

            <li className="navbar-item" onClick={props.logoutHandler}>
              Logout
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
