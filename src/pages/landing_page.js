import { useEffect, useState } from "react";
import Header from "../components/landing_page/Header";
import Navigation from "../components/landing_page/Navigation";
import RoomsList from "../components/landing_page/rooms_list";
import AddRoomIcon from "../components/landing_page/AddRoomIcon";
import LoadingIcon from "../components/common_components/LoadingIcon";

const LandingPage = (props) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const url = 'http://localhost:4000/features/get_rooms';
  const url = "https://easyrooms.herokuapp.com/features/get_rooms";

  const fetchRoomsHandler = () => {
    setIsLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setRooms(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logoutHandler = (loggedIn) => {
    props.logoutHandler(loggedIn);
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    fetchRoomsHandler();
  }, []);

  return isLoading ? (
    <LoadingIcon visible={true} color="#365e75" />
  ) : (
    <>
      <div
        className="header_navbar_container"
        style={{ position: "fixed", top: "0px", left: "0px", width: "100vw" }}
      >
        <Header logoutHandler={logoutHandler} />
        <Navigation />
      </div>
      <RoomsList rooms={rooms} />
      <AddRoomIcon />
    </>
  );
};

export default LandingPage;
