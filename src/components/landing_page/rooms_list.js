import RoomCard from "./room_card";
import "./rooms_list.css";

const RoomsList = (props) => {
  // console.log(props.rooms);
  return (
    <ul className="rooms_list">
      {props.rooms.map((room) => (
        <RoomCard key={room.imageUrl} room={room} />
      ))}
    </ul>
  );
};

export default RoomsList;
