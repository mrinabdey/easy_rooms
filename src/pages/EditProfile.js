import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './Profile.css';
import mode from '../mode';
import Navigation from "../components/landing_page/Navigation";
import Header from "../components/landing_page/Header";

export default function EditProfile(props) {
    let url;
    const location = useRef();
    const contact = useRef();
    const userName = useRef();
    const email = localStorage.getItem("email");
    const history = useHistory();

    if(mode)
    url = `https://easyrooms.herokuapp.com/user/edit_profile`;
    else
    url = `http://localhost:4000/user/edit_profile`;
  
    const saveUserProfile = () => {
        fetch(url, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: "POST",
          body: JSON.stringify({
            "email": email,
            "name": userName.current.value,
            "location": location.current.value,
            "contact": contact.current.value, 
          }),
        })
        .then(res => res.json())
        .then(res => {
          alert(res);
          history.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }

    return (
        <div className="profile-container">
          <Header logoutHandler={props.logoutHandler}/>
          <Navigation />
    
            <div className="profile-pic-container">
              <i className="fas fa-user-circle"></i>
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
            </div>
            <div className="edit-details-button-container">
              <button className="edit-details-button" onClick={saveUserProfile}>
                Save
              </button>
            </div>
        </div>
    )
}

