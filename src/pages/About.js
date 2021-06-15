import "./About.css";
import Header from "../components/landing_page/Header";
import Navigation from "../components/landing_page/Navigation";

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <Navigation />
      <div className="about-details-container">This is the about section</div>
    </div>
  );
};

export default About;
