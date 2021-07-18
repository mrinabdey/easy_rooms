import Header from "../components/landing_page/Header";
import Navigation from "../components/landing_page/Navigation";
import "./Bookmarks.css";
const Bookmarks = () => {
  return (
    <div className="bookmarks-container">
      <Header />
      <Navigation />
      <div className="bookmarks-details">Bookmarks</div>
    </div>
  );
};

export default Bookmarks;
