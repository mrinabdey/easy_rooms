import SignupTitle from "../components/signup_page/signup_title";
import SignupForm from "../components/signup_page/signup_form";
import logo from "../images/Easy_Rooms.png";
const SignupPage = () => {
  return (
    <>
      <div style={{ textAlign: "center" }} className="logo">
        <img src={logo} style={{ height: "100px", width: "auto" }} alt="logo" />
      </div>

      <SignupForm />
    </>
  );
};

export default SignupPage;
