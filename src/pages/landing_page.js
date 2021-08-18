import { useEffect, useState } from "react";
import Header from "../components/landing_page/Header";
import Navigation from "../components/landing_page/Navigation";
import RoomsList from "../components/landing_page/rooms_list";
import AddRoomIcon from "../components/landing_page/AddRoomIcon";
import LoadingIcon from "../components/common_components/LoadingIcon";
import "./landing_page.css";
import mode from "../mode";

const LandingPage = (props) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  let url;
  if (mode) {
    url = "https://easyrooms.herokuapp.com/features/get_rooms/0";
  } else {
    url = "http://localhost:4000/features/get_rooms/0";
  }

  const address_handler = (search_input) => {
    let search_title = document.getElementById("search_result_title");
    let element = document.getElementById("room_list");
    if (search_input !== "") {
      element.style.marginTop = 0;
      search_title.classList.remove("hidden");
    } else {
      search_title.classList.add("hidden");
    }

    console.log(`searching for ${search_input}`);
    setSearch(search_input);
  };

  const logoutHandler = (loggedIn) => {
    props.logoutHandler(loggedIn);
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return isLoading ? (
    <>
      <Header logoutHandler={logoutHandler} />
      <Navigation />
      <LoadingIcon visible={true} color="black" />
    </>
  ) : (
    <>
      <div className="header_navbar_container">
        <Header send_address={address_handler} logoutHandler={logoutHandler} />
        <Navigation />
      </div>
      <h1 id="search_result_title" className="hidden">
        Search results for: {search}
      </h1>
      <RoomsList rooms={rooms} to_search={search} />
      <AddRoomIcon />
    </>
  );
};

export default LandingPage;
