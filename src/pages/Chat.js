import "./Chat.css";
import Navigation from "../components/landing_page/Navigation.js";
import Header from "../components/landing_page/Header.js";

const Chat = (props) => {
  console.log("props: ", props.location.chatProps);
  return (
    <div>
      <Header />
      <Navigation />
      <div>Chatting with Bot</div>
    </div>
  );
};

export default Chat;
