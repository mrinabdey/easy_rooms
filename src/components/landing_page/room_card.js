import { useState } from "react";
import "./room_card.css";

const RoomCard = (props) => {
  const [isCardClicked, setCardClicked] = useState(false);

  const clickHandler = () => {
    setCardClicked(!isCardClicked);
    console.log(`Clicked ${props.room.address}`);
  };

  return (
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
      </div>
    </div>
  );
};

export default RoomCard;
