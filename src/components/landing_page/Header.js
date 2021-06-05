import { useContext, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../../context/authcontext";
import "./Header.css";

function Header(props) {
  const searchValue = useRef();
  const ctx = useContext(AuthContext);

  function keyDownHandler(event) {
    if (event.keyCode === 13) {
      var search_input = document.getElementById("search").value;
      console.log(`${search_input}`);
      document.getElementById("search").value = "";
    }
  }

  return (
    <div className="header_container_container">
      <div className="header_container">
        <div className="logo_container">
          {/* <Link to="/"> */}
            <div className="logo">
              <img
                src=""
                alt="logo"
              />
            </div>
          {/* </Link> */}
        </div>
        <div className="search_bar_container">
          <div className="search_bar">
            <input
              className="search_bar"
              type="text"
              placeholder="Enter your location...."
              ref={searchValue}
              onKeyDown={keyDownHandler}
            />
          </div>
        </div>
        <div className="auth_text_container">
          {ctx.isLoggedIn ? 
          <div className="logout_text auth_text" onClick={() => props.logoutHandler(false)}>Logout</div> :
          <>
          <Link to="/login" style={{textDecoration: 'none'}}>
            <div className="login_text auth_text">Login</div>
          </Link>
          <Link to="/signup" style={{textDecoration: 'none'}}>
            <div className="signup_text auth_text">Signup</div>
          </Link>
          </>}
        </div>
      </div>
    </div>
  );
}

export default Header;
