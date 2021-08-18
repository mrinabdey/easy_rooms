import { useContext, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../../context/authcontext";
import "./Header.css";
import SideBar from "../common_components/Sidebar";
import logo from "../../images/Easy_Rooms.png";
import { BiSearchAlt } from "react-icons/bi";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";
import { GrTextAlignCenter } from "react-icons/gr";

const Header = (props) => {
  const searchValue = useRef();
  const ctx = useContext(AuthContext);

  function keyDownHandler(event) {
    if (event.keyCode === 13) {
      let search_input = document.getElementById("search").value;
      console.log(`${search_input}`);
      document.getElementById("search").value = "";
      props.send_address(search_input);
    }
  }
  const searchClickHandler = () => {
    let search_input = document.getElementById("search").value;
    console.log(`${search_input}`);
    document.getElementById("search").value = "";
    props.send_address(search_input);
  };
  const logoutHandler = () => props.logoutHandler(false);

  return (
    <div className="header_container_container">
      <div className="header_container">
        <div className="logo_container">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
        </div>
        <div className="search_bar_container">
          <div className="search_bar">
            <div className="search_bar_icon_container">
              <BiSearchAlt
                style={{ fontSize: "18px", cursor: "pointer" }}
                onClick={searchClickHandler}
              />
            </div>
            <input
              id="search"
              type="text"
              placeholder="Enter your location...."
              ref={searchValue}
              onKeyDown={keyDownHandler}
            />
          </div>
        </div>
        <div className="auth_text_container">
          {ctx.isLoggedIn ? (
            <div className="header-items-container">
              <div className="show">
                <div className="bookmark-container">
                  <Link to="/bookmarks">Bookmarks</Link>
                </div>
                <div className="chats-container">
                  <Link to="/chat">Chats</Link>
                </div>
              </div>
              <SideBar logoutHandler={logoutHandler} />
            </div>
          ) : (
            /*<div
              className="logout_text auth_text"
              onClick={() => props.logoutHandler(false)}
            >
              Logout
            </div>
            */
            <>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="login_text auth_text"> Login </div>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <div className="signup_text auth_text"> Signup </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
