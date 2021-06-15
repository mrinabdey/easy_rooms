import { useContext, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../../context/authcontext";
import "./Header.css";
import SideBar from "../common_components/Sidebar";

function Header(props) {
  const searchValue = useRef();
  const ctx = useContext(AuthContext);

  function keyDownHandler(event) {
    if (event.keyCode === 13) {
      var search_input = document.getElementById("search").value;
      console.log(`${search_input}`);
      document.getElementById("search").value = "";
      props.send_address(search_input);
    }
  }
  const logoutHandler = () => props.logoutHandler(false);

  return (
    <div className="header_container_container">
      <div className="header_container">
        <div className="logo_container">
          {/* <Link to="/"> */}
          <div className="logo">
            <img
              src="https://e7.pngegg.com/pngimages/339/761/png-clipart-computer-icons-foursquare-button-button-simple-logo.png"
              alt="logo"
            />
          </div>
          {/* </Link> */}
        </div>
        <div className="search_bar_container">
          <div className="search_bar">
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
            <SideBar logoutHandler={logoutHandler} />
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
                <div className="login_text auth_text">Login</div>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <div className="signup_text auth_text">Signup</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
