import { useState } from "react";
import "./room_card.css";
import FullCard from "../../pages/FullCard";
import { Link } from "react-router-dom";

const RoomCard = (props) => {
  const [isCardClicked, setCardClicked] = useState(false);

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
    console.log(`Clicked ${props.room.address}`);
    //isCardClicked ? changeDispTrue() : changeDispHidden() ;
  };

  console.log(`image - ${props.room.imageUrls[0]}`);

  return (
    <div
      id="room-card-container"
      className="room_card_container"
      onClick={clickHandler}
    >
      <div className="room_image_container">
        <img
          src={"https://easyrooms.herokuapp.com/" + props.room.imageUrls[0]}
          className="room_image"
          alt="This is an image of a room"
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
