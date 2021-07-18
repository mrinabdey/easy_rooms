import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  withRouter,
} from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/signup_page";
import LoginPage from "./pages/login_page";
import AddRoomPage from "./pages/addroom_page";
import AuthContext from "./context/authcontext";
import NotFound from "./components/common_components/NotFound";
import LoadingIcon from "./components/common_components/LoadingIcon";
import LandingPage from "./pages/landing_page";
import FoodPage from "./pages/food_page";
import NotesPage from "./pages/notes_page";
import MarketPage from "./pages/market_page";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Chat from "./pages/Chat";
import { useEffect, useState } from "react";
import FullCard from "./pages/FullCard";
import Bookmarks from "./pages/Bookmarks";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.getItem("isLoggedIn") == "true"
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, []);

  const loginHandler = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const logoutHandler = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage logoutHandler={logoutHandler} />
            </Route>
            <Route exact path="/add_room">
              <AddRoomPage />
            </Route>
            <Route exact path="/login">
              <LoginPage loggedIn={loginHandler} />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/food">
              <FoodPage />
            </Route>
            <Route exact path="/notes">
              <NotesPage />
            </Route>
            <Route exact path="/market">
              <MarketPage />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/details" component={FullCard} />
          </Switch>
        </Router>
      </AuthContext.Provider>
      {/* <AddRoomPage /> */}
      {/* <NotFound>
      <i className="fas fa-sad-tear" style={{ fontSize: 50 }}/>
      <div>This page is not available!</div>
      </NotFound> */}
    </>
  );
}

export default App;
