import "./Profile.css";
import Navigation from "../components/landing_page/Navigation";
import Header from "../components/landing_page/Header";
import { useRef, useState } from "react";

const Profile = () => {
  const [isEditClick, setEditClick] = useState(false);

  const userName = useRef();
  const location = useRef();
  const contact = useRef();
  const email = useRef();

  const EditClickHandler = () => {
    setEditClick(true);
  };

  return isEditClick ? (
    <div className="profile-container">
      <Header />
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

          <label className="user-title-container contact">Phone number: </label>
          <input
            className="user-detail-container"
            ref={contact}
            type="number"
            placeholder="9101191101"
          />

          <label className="user-title-container emailId">email id: </label>
          <input
            className="user-detail-container"
            ref={email}
            type="text"
            placeholder="abc@gmail.com"
          />

          <label className="user-title-container location">Location: </label>
          <input className="user-detail-container" ref={location} type="text" />
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
      <Header />
      <Navigation />
      <div className="detail-form-container">
        <div className="profile-pic-container">
          <i class="fas fa-user-circle"></i>
        </div>
        <div className="user-details-container">
          <div className="user-title-container name">Name:</div>
          <div className="user-detail-container">Aashis</div>
          <div className="user-title-container location">Location:</div>
          <div className="user-detail-container">XYZ</div>
          <div className="user-title-container contact">Contact Number:</div>
          <div className="user-detail-container">91</div>
          <div className="user-title-container emailId">Email Id:</div>
          <div className="user-detail-container">aashischittawat123</div>
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
