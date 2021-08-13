import { useState } from "react";
import "./room_card.css";
import FullCard from "../../pages/FullCard";
import { Link } from "react-router-dom";
import { CgMaximizeAlt } from "react-icons/cg";
import Modal from "./Modal";

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

  const [showModal, setShowModal] = useState(false);
  const getModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div id="room-card-container" className="room_card_container">
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        key={props.room.imageUrl}
        room={props.room}
      />
      <div className="room_image_container" onClick={getModal}>
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

      <div className="room_information_container" onClick={getModal}>
        <div className="room_price_container">{props.room.price}</div>
        <div className="room_features_container">{props.room.features}</div>
        <div className="room_address_container">{props.room.address}</div>
      </div>
    </div>
  );
};

export default RoomCard;
