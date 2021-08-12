import "./FullCard.css";
import { Link } from "react-router-dom";
import Header from "../components/landing_page/Header";
import Navigation from "../components/landing_page/Navigation";
import { useState, useRef } from "react";
import { GrLocation } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";
import { GrNext, GrPrevious } from "react-icons/gr";
import { BsBookmark, BsBookmarkFill, BsChatSquare } from "react-icons/bs";
import mode from '../mode';

const FullCard = (props) => {
  let bookmarkStatus = false;
  const id = props.location.detailProps.detail._id;
  let bookmarks = localStorage.getItem('bookmarks');
  let bookmarksList = bookmarks.split(',');
  if(bookmarksList.includes(id)) {
    bookmarkStatus = true;
  }
  const [isClicked, setIsClicked] = useState(bookmarkStatus);
  const user = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  let addBookmarkUrl;
  let removeBookmarkUrl;

  if(mode) {
    addBookmarkUrl = 'https://easyrooms.herokuapp.com/features/add_bookmark';
    removeBookmarkUrl = 'https://easyrooms.herokuapp.com/features/remove_bookmark';
  }

  else {
    addBookmarkUrl = 'http://localhost:4000/features/add_bookmark';
    removeBookmarkUrl = 'http://localhost:4000/features/remove_bookmark';
  }

  const addBookmarkHandler = () => {
    setIsClicked(true);
    bookmarksList.push(id);
    localStorage.setItem('bookmarks', bookmarksList);
    console.log("add",id,email);
    fetch(addBookmarkUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        'roomId': id, 
        'email': email,
      })
    })
    .then(res => res.json())
    .then(res => {
      alert(res);
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  const removeBookmarkHandler = () => {
    setIsClicked(false);
    let newBookmarksList = bookmarksList.filter(bId => bId != id);
    localStorage.setItem('bookmarks', newBookmarksList);
    console.log("remove",id,email);
    fetch(removeBookmarkUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        'roomId': id, 
        'email': email,
      })
    })
    .then(res => res.json())
    .then(res => {
      alert(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const sz = props.location.detailProps.detail.imageUrls.length;
  console.log(`size is ${sz}`);
  const [currImage, setcurrImage] = useState(0);
  const subSlides = () => {
    console.log("slideprev ");
    if (currImage == 0) setcurrImage(sz);
    else {
      //currImage = currImage + val;
      setcurrImage(currImage - 1);
    }
    console.log("slidecurr " + currImage);
  };

  const plusSlides = () => {
    console.log("slidecurr " + currImage);
    if (currImage == sz) setcurrImage(0);
    else setcurrImage(currImage + 1);
    console.log("slidenext " + currImage);
  };

  return (
    <div>
      <Header />
      <Navigation />
      <div className="full-room_total_details">
        <div className="full-room_image">
          <a className="prev" onClick={subSlides}>
            &#10094;
          </a>
          <img
            src={
              "https://easyrooms.herokuapp.com/" +
              props.location.detailProps.detail.imageUrls[currImage]
            }
            className="full-room_image mySlides fade"
            alt="This is an image of a room"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg";
            }}
          />

          <a className="next" onClick={plusSlides}>
            &#10095;
          </a>
        </div>
        <div className="full-room_details">
          <div className="full-room_price">
            <div className="full-room_rupee_icon">
              <BiRupee />
            </div>
            5500
          </div>
          <div className="full-room_title">Paying Guest</div>
          <div className="full-room_features">
            <div className="full-room_features_container">
              {props.location.detailProps.detail.features} displaying in full
              view mode
            </div>
          </div>
          <div className="full-room_address">
            <div className="full-room_address_container">
              <GrLocation />
              {props.location.detailProps.detail.address}
            </div>
          </div>
          <div className="full-room_posted">By: {user}</div>
          <div className="full-room_posted_contact">Ph no:- +917002528767</div>
        </div>
      </div>
      <div className="full-room_feature_button">
        <div className="full-room_favorite_button">
          {isClicked ? (
            <BsBookmarkFill onClick={removeBookmarkHandler} />
          ) : (
            <BsBookmark onClick={addBookmarkHandler} />
          )}
        </div>
        <div className="full-room_chat_container">
          <Link to={{ pathname: "/chat", chatProps: { name: user } }}>
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </div>

    /*<div
      id="full-room-card-container"
      className="full-room_card_container"
      
    >
      <div className="full-room_image_container">
        <img
          src={"https://easyrooms.herokuapp.com/" + props.room.imageUrl}
          className="full-room_image"
          alt="This is an image of a room"
        />
      </div>
      <div className="full-room_information_container">
        <div className="full-room_price_container">Rs. 5500</div>
        <div className="full-room_features_container">{props.room.features} displaying in full view mode</div>
        <div className="full-room_address_container">{props.room.address}</div>
        <div className="full-room_ad_poster">By: {user}</div>
        <div className="full-room_buttons_conatiner">
            <div className="full-room_favorite_button"><i class="far fa-bookmark active" ></i></div>
            <div className="full-room_chat_container"><Link to={{pathname: '/chat', chatProps:{name: user}}}><i class="fab fa-facebook-messenger"></i></Link></div>
        </div>
        
      </div>
    </div>
    */
  );
};

export default FullCard;
