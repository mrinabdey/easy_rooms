import RoomCard from "./room_card";
import "./rooms_list.css";
import mode from "../../mode";
import Loader from "../common_components/Loader";
import { useEffect, useState } from "react";

const RoomsList = (props) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [docCount, setDocCount] = useState();

  let docCountUrl;
  let url;

  if (mode) {
    url = "https://easyrooms.herokuapp.com/features/get_rooms/";
    docCountUrl = "https://easyrooms.herokuapp.com/features/get_count";
  } else {
    url = "http://localhost:4000/features/get_rooms/";
    docCountUrl = "http://localhost:4000/features/get_count";
  }

  const fetchRoomCount = () => {
    fetch(docCountUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setDocCount(res))
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    fetch(url + pageNumber, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setRooms((prevRooms) => [...prevRooms, ...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNextPage();
    fetchRoomCount();
  }, []);
  let temp1 = [];
  const [temp, setTemp] = useState(rooms);
  let search1 = props.to_search;
  if (search1 !== "") {
    console.log(`searching for ${search1}`);
    let iter;

    for (iter in rooms) {
      if (rooms[iter].address.includes(search1)) {
        temp1.push(rooms[iter]);
      }
    }
    console.log(temp1);
  }
  let data = rooms;
  console.log(rooms);
  if (temp1.length !== 0) data = temp1;
  return (
    <>
      <ul id="room_list" className="rooms_list">
        {data.map((room, index) => {
          if (index === docCount - 1) {
            return <RoomCard key={room._id} room={room} isObserved={false} />;
          } else if (index === rooms.length - 1) {
            return (
              <>
                <RoomCard
                  key={room._id}
                  room={room}
                  isObserved={true}
                  fetchNextPage={fetchNextPage}
                />
                <Loader color="black" visible={true} />
              </>
            );
          } else
            return <RoomCard key={room._id} room={room} isObserved={false} />;
        })}
      </ul>
    </>
  );
};

export default RoomsList;
