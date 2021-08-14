import Header from "../components/landing_page/Header";
import Navigation from "../components/landing_page/Navigation";
import RoomsList from "../components/landing_page/rooms_list";
import "./Bookmarks.css";
import { useEffect, useState } from 'react';
import mode from '../mode';

const Bookmarks = () => {
  const roomIds = localStorage.getItem('bookmarks');
  const [rooms,setRooms] = useState([]);
  let url;
  if(mode)
  url = 'https://easyrooms.herokuapp.com/features/get_bookmarks';
  else
  url = 'http://localhost:4000/features/get_bookmarks';

  const fetchBookmarkedRooms = () => {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        'roomIds': roomIds,
      })
    })
    .then(res => res.json())
    .then(res => {
      setRooms(res);
    })
  } 

  useEffect(() => {
    fetchBookmarkedRooms();
  },[]);

  if(rooms.length === 0) {
    return (
      <div className="bookmarks-container">
        <Header />
        <Navigation />
        <h1>No bookmarks found!</h1>
      </div>
    );
  }
  return (
    <div className="bookmarks-container">
      <Header />
      <Navigation />
      <RoomsList rooms={rooms}/>
    </div>
  );
};

export default Bookmarks;
