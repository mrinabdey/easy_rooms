import { useEffect, useState } from "react";
import Header from "../components/landing_page/Header";
import Navigation from "../components/landing_page/Navigation";
import RoomsList from "../components/landing_page/rooms_list";
import AddRoomIcon from "../components/landing_page/AddRoomIcon";
import LoadingIcon from "../components/common_components/LoadingIcon";
import "./landing_page.css";

const LandingPage = (props) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState([]);
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
        setTemp(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRoomsHandler();
  }, []);

  const address_handler = (search_input) => {
    setTemp([]);
    var search_title = document.getElementById("search_result_title");
    search_title.classList.remove("hidden");
    var element = document.getElementById("room_list");
    element.style.marginTop = 0;
    console.log(search_input);
    console.log(rooms);
    setSearch(search_input);
    var iter;
    var temp1 = [];
    for (iter in rooms) {
      if (rooms[iter].address === search_input) {
        temp1.push(rooms[iter]);
        console.log(rooms[iter].address);
      }
    }
    setTemp(temp1);
    console.log(temp);
    //setRooms(rooms);
    //setRooms([]);
    console.log(rooms);
  };
  console.log(rooms);
  console.log(temp);

  const logoutHandler = (loggedIn) => {
    props.logoutHandler(loggedIn);
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("token");
  };

  return isLoading ? (
    <>
      <Header logoutHandler={logoutHandler} />
      <Navigation />
      <LoadingIcon visible={true} color="#365e75" />
    </>
  ) : (
    <>
      <div
        className="header_navbar_container"
        style={{ position: "fixed", top: "0px", left: "0px", width: "100vw" }}
      >
        <Header send_address={address_handler} logoutHandler={logoutHandler} />
        <Navigation />
      </div>
      <h1 id="search_result_title" className="hidden">
        Search results for: {search}
      </h1>
      <RoomsList rooms={temp} />

      <AddRoomIcon />
    </>
  );
};

export default LandingPage;
