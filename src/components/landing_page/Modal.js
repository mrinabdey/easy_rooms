import "./Modal.css";
import logo from "../../images/Easy_Rooms.png";
import { AiOutlineClose, AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { useState, useRef } from "react";
import { GrLocation } from "react-icons/gr";
import { BsBookmark, BsBookmarkFill, BsChatSquare } from "react-icons/bs";
import mode from "../../mode";
import { Link } from "react-router-dom";
import ErrImg from "../../images/image-not-found.jpg";

const Modal = ({ showModal, setShowModal, imageUrl, room }) => {
  const closeModal = () => {
    setShowModal(false);
  };
  console.log(`data ${imageUrl} ${room}`);

  let bookmarkStatus = false;
  const id = room._id;
  let bookmarks = localStorage.getItem("bookmarks");
  let bookmarksList = bookmarks.split(",");

  if (bookmarksList.includes(id)) {
    bookmarkStatus = true;
  }
  const [isClicked, setIsClicked] = useState(bookmarkStatus);
  const user = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  let addBookmarkUrl;
  let removeBookmarkUrl;

  if (mode) {
    addBookmarkUrl = "https://easyrooms.herokuapp.com/features/add_bookmark";
    removeBookmarkUrl =
      "https://easyrooms.herokuapp.com/features/remove_bookmark";
  } else {
    addBookmarkUrl = "http://localhost:4000/features/add_bookmark";
    removeBookmarkUrl = "http://localhost:4000/features/remove_bookmark";
  }

  const addBookmarkHandler = () => {
    setIsClicked(true);
    bookmarksList.push(id);
    localStorage.setItem("bookmarks", bookmarksList);
    console.log("add", id, email);
    fetch(addBookmarkUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        roomId: id,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeBookmarkHandler = () => {
    setIsClicked(false);
    let newBookmarksList = bookmarksList.filter((bId) => bId != id);
    localStorage.setItem("bookmarks", newBookmarksList);
    console.log("remove", id, email);
    fetch(removeBookmarkUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        roomId: id,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sz = room.imageUrls.length;
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
      {showModal ? (
        <div className="modal-background">
          <div className="modal-modal-wrapper" showModal={showModal}>
            <div className="modal-features-image-container">
              <a className="feature-prev" onClick={subSlides}>
                &#10094;
              </a>
              <img
                src={
                  "https://easyrooms.herokuapp.com/" + room.imageUrls[currImage]
                }
                className="feature-full-room_image mySlides fade"
                alt="This is an image of a room"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = ErrImg;
                }}
              />
              <a className="feature-next" onClick={plusSlides}>
                &#10095;
              </a>
            </div>
            <div className="modal-detail-container">
              <div className="modal-detail-features-container">
                <div className="modal-features-price">Rs. 5500</div>
                <div className="modal-features-title">Paying Guest</div>
                <div className="modal-features-feature">
                  Description:
                  <div className="modal-features-feature-detail">
                    {room.features} displaying in full view mode
                  </div>
                </div>
                <div className="modal-features-address">
                  Location:
                  <div className="modal-features-address-detail">
                    <GrLocation />
                    {room.address}
                  </div>
                </div>
                <div className="modal-features-postedby">By: Dummy</div>
                <div className="modal-features-contact">Ph no: Dummy</div>
                <div className="modal-features-rating-container">
                  <div className="modal-features-rating">2</div>
                  <AiFillStar size="25px" style={{ paddingLeft: "5px" }} />
                </div>
                <div className="modal-features-button-container">
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

              <div className="modal-close-btn">
                <AiOutlineClose
                  className="modal-close"
                  style={{ width: "25px", height: "25px", borderRadius: "3px" }}
                  onClick={closeModal}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Modal;
