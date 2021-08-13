import Header from "../components/landing_page/Header";
import { useState } from "react";
import Modal from "../components/landing_page/Modal";
import Navigation from "../components/landing_page/Navigation";
import "./Bookmarks.css";
const Bookmarks = () => {
  const [showModal, setShowModal] = useState(false);
  const getModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="bookmarks-container">
      <Header />
      <Navigation />
      <div className="bookmarks-details">Bookmarks</div>
      <button className="dummy-button" onClick={getModal}>
        ShowModal
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Bookmarks;
