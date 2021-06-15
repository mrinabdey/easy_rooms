import "./Contact.css";
import Header from "../components/landing_page/Header";
import Navigation from "../components/landing_page/Navigation";

const Contact = () => {
  return (
    <div className="contact-container">
      <Header />
      <Navigation />
      <div className="customer-executive">
        Customer Executive - <br />
        Aashis Kumar Chittawat
      </div>
      <div className="phone-number">9101911191</div>
      <div className="email-container">aashischittawat123@gmail.com</div>
      <div className="detail-container">
        Feel Free to call him anytime <br />
        Available 24*7
      </div>
    </div>
  );
};

export default Contact;
