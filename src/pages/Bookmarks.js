import Header from "../components/landing_page/Header";
import Modal from "../components/landing_page/Modal";
import Navigation from "../components/landing_page/Navigation";
import RoomsList from "../components/landing_page/rooms_list";
import "./Bookmarks.css";
import { useEffect, useState } from 'react';
import mode from '../mode';
import BookmarkRoomsList from "../components/landing_page/BookmarkRoomsList";

const Bookmarks = () => {
  
  return (
    <div className="bookmarks-container">
      <Header />
      <Navigation />
      <BookmarkRoomsList />
    </div>
  );
};

export default Bookmarks;
