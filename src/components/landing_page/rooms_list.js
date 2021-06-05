import RoomCard from './room_card';
import './rooms_list.css';

const RoomsList = (props) => {
    // console.log(props.rooms);
    return (
        <div className="rooms_list_container">
            {props.rooms.map(room => <RoomCard key={room.imageUrl} room={room}/>)}
        </div>
    )
}

export default RoomsList;