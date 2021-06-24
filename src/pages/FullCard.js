import './FullCard.css';
import { Link } from 'react-router-dom';
import Header from '../components/landing_page/Header';
import Navigation from '../components/landing_page/Navigation';
import { useState } from 'react';

const FullCard = (props) =>{
  //const [data, setData] = useState("");
  //setData(props.location.detailProps.detail);

  const user = "EasyRooms";


  console.log("details: ",props.location.detailProps.detail);
  //console.log("data: ", data);


  return (
    <div>
      <Header />
      <Navigation />
      <div className="full-room_total_details">
        <div className="full-room_image">
            <img
            src={"https://easyrooms.herokuapp.com/" + props.location.detailProps.detail.imageUrl}
            className="full-room_image"
            alt="This is an image of a room"
            />
        </div>
        <div className="full-room_details">
          <div className="full-room_title">
                <h1>Paying Guest</h1>
          </div>
          <div className="full-room_price">
                Rs. 5500
          </div>
          <div className="full-room_features">
              <div className="full-room_features_container">{props.location.detailProps.detail.features} displaying in full view mode</div>
          </div>
          <div className="full-room_address">
              <div className="full-room_address_container">{props.location.detailProps.detail.address}</div>
          </div>
          <div className="full-room_posted">
              By: {user}
          </div>
          <div className="full-room_posted_contact">
              Ph no:- +917002528767
          </div>

        </div>

      </div>
      <div className="full-room_feature_button">
          <div className="full-room_favorite_button"><i class="far fa-bookmark active" ></i></div>
          <div className="full-room_chat_container"><Link to={{pathname: '/chat', chatProps:{name: user}}}><i class="fab fa-facebook-messenger"></i></Link></div>
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
    )
}

export default FullCard;