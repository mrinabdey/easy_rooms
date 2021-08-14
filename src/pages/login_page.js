import LoginTitle from "../components/login_page/login_title";
import LoginForm from "../components/login_page/login_form";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import logo from "../images/Easy_Rooms.png";

const LoginPage = (props) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const loginHandler = (email) => {
    props.loggedIn(email);
    history.push("/");
  };

  // const userHandler = (email) => {
  //     props.userHandler(email);
  // }

  // useEffect(() => {
  //     props.loggedIn(isLoggedIn);
  // }, [isLoggedIn])

  return (
    <>
      <div style={{ textAlign: "center" }} className="logo">
        <img src={logo} style={{ height: "100px", width: "auto" }} alt="logo" />
      </div>
      <LoginTitle />
      {/* <LoginForm /> */}
      <LoginForm loggedIn={loginHandler} />
    </>
  );
};

export default LoginPage;
