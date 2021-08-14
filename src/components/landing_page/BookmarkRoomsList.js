import RoomCard from "./room_card";
import "./rooms_list.css";
import mode from '../../mode';
import Loader from '../common_components/Loader';
import { useEffect, useState } from "react";

const BookmarkRoomsList = () => {
//   const [pageNumber,setPageNumber] = useState(0);
  const [rooms,setRooms] = useState([]);
  const [ifNoBookmarks,setIfNoBookmarks] = useState();
  const roomIds = localStorage.getItem('bookmarks');
//   const [docCount,setDocCount]=useState();
//   let docCountUrl;
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
    //   if(res.length === 0) {
    //       return setIfNoBookmarks(true);
    //   }  
    setRooms(res);
    setIfNoBookmarks(false);
    })
    .catch(err => {
        console.log(err);
    })
  } 

  useEffect(() => {
    fetchBookmarkedRooms();
  },[]);


//   const fetchRoomCount = () => {
//     fetch(docCountUrl, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       method: "GET",
//     })
//     .then(res => res.json())
//     .then(res => setDocCount(res))
//     .catch(err => {
//       console.log(err);
//     })
//   }

//   const fetchNextPage = () => {
//     setPageNumber(prevPageNumber => prevPageNumber+1);
//     fetch(url+pageNumber, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     .then((res) => res.json())
//     .then((res) => {
//       setRooms((prevRooms) => [...prevRooms, ...res]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

return ifNoBookmarks ?    
 (
    <>
    <ul id="room_list" className="rooms_list">
        <h1>No Bookmarks Found!</h1>
    </ul>
    </>
  ) :
(
    <>
    <ul id="room_list" className="rooms_list">
      {rooms.map((room) => {
          return (
            <RoomCard key={room._id} room={room} isObserved={false} />
          )
        }
      )}
    </ul>
    </>
  );
};

export default BookmarkRoomsList;
