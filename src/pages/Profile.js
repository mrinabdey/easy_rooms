import "./Profile.css";
import Navigation from "../components/landing_page/Navigation";
import Header from "../components/landing_page/Header";
import AuthContext from "../context/authcontext";
import { useRef, useState, useContext, useEffect } from "react";
import mode from "../mode";

const Profile = (props) => {
  const [isEditClick, setEditClick] = useState(false);
  const [user, setUser] = useState({});
  const ctx = useContext(AuthContext);
  const username = localStorage.getItem("user");
  let url;
  if (mode) url = `https://easyrooms.herokuapp.com/auth/user/${username}`;
  else url = `http://localhost:4000/auth/user/${username}`;

  const fetchUser = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const userName = useRef();
  const location = useRef();
  const contact = useRef();
  const email = useRef();

  const EditClickHandler = () => {
    setEditClick(true);
  };
  console.log(`values: ${user.name}`);

  const logoutHandler = (loggedIn) => {
    props.logoutHandler(loggedIn);
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return isEditClick ? (
    <div className="profile-container">
      <Header logoutHandler={logoutHandler} />
      <Navigation />

      <form className="detail-form-container">
        <div className="profile-pic-container">
          <i class="fas fa-user-circle"></i>
        </div>
        <div className="user-details-container">
          <label className="user-title-container name">Name: </label>
          <input
            className="user-detail-container"
            ref={userName}
            type="text"
            placeholder="Enter your name"
          />

          <label className="user-title-container location">Location: </label>
          <input
            className="user-detail-container"
            ref={location}
            type="text"
            placeholder="Near SUndarbari"
          />

          <label className="user-title-container contact">
            Contact Number:
          </label>
          <input
            className="user-detail-container"
            ref={contact}
            type="number"
            placeholder="8136096856"
          />

          <label className="user-title-container emailId">Email Id: </label>
          <input
            className="user-detail-container"
            ref={email}
            type="text"
            placeholder="abc@gmail.com"
          />
        </div>
        <div className="edit-details-button-container">
          <button className="edit-details-button" onClick={EditClickHandler}>
            Save
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="profile-container">
      <Header logoutHandler={logoutHandler} />
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
          <button className="edit-details-button" onClick={EditClickHandler}>
            Edit
          </button>
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
