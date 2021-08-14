import { useCallback, useEffect, useRef, useState } from "react";
import "./room_card.css";
import FullCard from "../../pages/FullCard";
import { Link } from "react-router-dom";

const RoomCard = (props) => {
  const [isCardClicked, setCardClicked] = useState(false);
  const [element,setElement] = useState(null);

  useEffect(() => {
    let observer = new IntersectionObserver((entries,observer) => {
      const entry = entries[0];
      if(entry.isIntersecting) {
        observer.unobserve(element);
        props.fetchNextPage();
      }
    },{threshold: 0.5});
    if(element) {
      observer.observe(element);
    }
  },[element]);
  
  
  /*
  const changeDispHidden = () => {
    document.getElementById("room_ad_poster").classList.add("hidden");
    document.getElementById("room_buttons_conatiner").classList.add("hidden");
  }

  const changeDispTrue = () => {
    document.getElementById("room_ad_poster").classList.remove("hidden");
    document.getElementById("room_buttons_conatiner").classList.remove("hidden");
  }
  */

  const clickHandler = () => {
    setCardClicked(!isCardClicked);
    //isCardClicked ? changeDispTrue() : changeDispHidden() ;
  };
  return (props.isObserved) ? 
   (
    <div
      id="room-card-container"
      className="room_card_container"
      ref={setElement}
      onClick={clickHandler}
    >
      <div className="room_image_container">
        <img
          src={"https://easyrooms.herokuapp.com/" + props.room.imageUrls[0]}
          className="room_image"
          alt="This is an image of a room"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg";
          }}
        />
      </div>
      <Link to={{ pathname: "/details", detailProps: { detail: props.room } }}>
        <div className="room_information_container">
          <div className="room_price_container">{props.room.price}</div>
          <div className="room_features_container">{props.room.features}</div>
          <div className="room_address_container">{props.room.address}</div>
        </div>
      </Link>
    </div>
  ) :
   (
    <div
      id="room-card-container"
      className="room_card_container "
      onClick={clickHandler}
    >
      <div className="room_image_container">
        <img
          src={"https://easyrooms.herokuapp.com/" + props.room.imageUrls[0]}
          className="room_image"
          alt="This is an image of a room"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg";
          }}
        />
      </div>
      <Link to={{ pathname: "/details", detailProps: { detail: props.room } }}>
        <div className="room_information_container">
          <div className="room_price_container">{props.room.price}</div>
          <div className="room_features_container">{props.room.features}</div>
          <div className="room_address_container">{props.room.address}</div>
        </div>
      </Link>
    </div>
  );
};

export default RoomCard;
