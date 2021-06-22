import { useState } from "react";
import "./room_card.css";
import FullCard from "../../pages/FullCard";

const RoomCard = (props) => {
  const [isCardClicked, setCardClicked] = useState(false);

  const changeDispHidden = () => {
    document.getElementById("room_ad_poster").classList.add("hidden");
    document.getElementById("room_buttons_conatiner").classList.add("hidden");
  }

  const changeDispTrue = () => {
    document.getElementById("room_ad_poster").classList.remove("hidden");
    document.getElementById("room_buttons_conatiner").classList.remove("hidden");
  }


  const clickHandler = () => {
    setCardClicked(!isCardClicked);
    console.log(`Clicked ${props.room.address}`);
    isCardClicked ? changeDispTrue() : changeDispHidden() ;
    
  };

  return ( //isCardClicked ? <FullCard room={props.room}/> :
    <div
      id="room-card-container"
      className="room_card_container"
      onClick={clickHandler}
    >
      <div className="room_image_container">
        <img
          src={"https://easyrooms.herokuapp.com/" + props.room.imageUrl}
          className="room_image"
          alt="This is an image of a room"
        />
      </div>
      <div className="room_information_container">
        <div className="room_price_container">Rs. 5500</div>
        <div className="room_features_container">{props.room.features}</div>
        <div className="room_address_container">{props.room.address}</div>
        <div id ="room_ad_poster" className="room_ad_poster hidden">By: EasyRooms</div>
        <div id="room_buttons_conatiner" className="room_buttons_conatiner hidden">
            <div className="room_favorite_button"><i class="fas fa-bookmark"></i></div>
            <div className="room_chat_container"><i class="fab fa-facebook-messenger"></i></div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
