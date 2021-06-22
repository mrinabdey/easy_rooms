import './FullCard.css';


const FullCard = (props) =>{
    return (
        <div
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
        <div className="full-room_ad_poster">By: EasyRooms</div>
        <div className="full-room_buttons_conatiner">
            <div className="full-room_favorite_button"><i class="fas fa-bookmark"></i></div>
            <div className="full-room_chat_container"><i class="fab fa-facebook-messenger"></i></div>
        </div>
        
      </div>
    </div>
    )
}

export default FullCard;