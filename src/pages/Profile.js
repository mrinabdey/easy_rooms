import "./Profile.css";
import Navigation from "../components/landing_page/Navigation";
import Header from "../components/landing_page/Header";

const Profile = () => {
  return (
    <div className="profile-container">
      <Header />
      <Navigation />
      <div className="detail-form-container">
        <div className="profile-pic-container">
          <i class="fas fa-user-circle"></i>
        </div>
        <div className="user-details-container">
          <div className="user-title-container name">Name:</div>
          <div className="user-detail-container">Aashis Kumar Chittawat</div>
          <div className="user-title-container location">Location:</div>
          <div className="user-detail-container">XYZ Chatribari</div>
          <div className="user-title-container contact">Contact Number:</div>
          <div className="user-detail-container">+919101191009</div>
          <div className="user-title-container emailId">Email Id:</div>
          <div className="user-detail-container">
            aashischittawat123@gmail.com
          </div>
        </div>
        <div className="edit-details-button-container">
          <button className="edit-details-button">Edit</button>
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
