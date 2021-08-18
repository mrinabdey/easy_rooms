import "./Profile.css";
import Navigation from "../components/landing_page/Navigation";
import Header from "../components/landing_page/Header";
import { useRef, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import mode from "../mode";
import CustomButton from "../components/common_components/CustomButton";

const Profile = (props) => {
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

  const logoutHandler = (loggedIn) => {
    props.logoutHandler(loggedIn);
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    fetchUser();
  }, []);
  console.log(user);
  return (
    <div className="profile-container">
      <Header logoutHandler={props.logoutHandler} />
      <Navigation />
      <div className="detail-form-container">
        <div className="profile-pic-container">
          <i class="fas fa-user-circle"></i>
        </div>
        <div className="user-details-container">
          <div className="user-title-container name">Name:</div>
          <div className="user-detail-container">{user.name}</div>
          <div className="user-title-container location">Location:</div>
          <div className="user-detail-container">{user.address}</div>
          <div className="user-title-container contact">Contact Number:</div>
          <div className="user-detail-container">{user.contact}</div>
          <div className="user-title-container emailId">Email Id:</div>
          <div className="user-detail-container">{user.email}</div>
        </div>
        <div className="edit-details-button-container">
          <Link
            to={{
              pathname: "/edit_profile",
              userDetail: { userProp: props.user },
            }}
          >
            <button className="edit-details-button">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

/*
        <form className="form-detail-container">
          <div className="username-container form-container">
            <label>Name: </label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="age-container form-container">
            <label>Age: </label>
            <input type="number" placeholder="19" />
          </div>
          <div className="phone-number-container form-container">
            <label>Phone number: </label>
            <input type="number" placeholder="9101191101" />
          </div>
          <div className="email-id-container form-container">
            <label>email id: </label>
            <input type="text" placeholder="abc@gmail.com" />
          </div>
          <div className="location-container form-container">
            <label>Location: </label>
            <textarea type="text" />
          </div>
        </form>
*/
