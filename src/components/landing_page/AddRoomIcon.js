import "./AddRoomIcon.css";
import { Link } from "react-router-dom";

function AddRoomIcon() {
  return (
    <div className="add-icon-container">
      <Link to="/add_room">
        <i class="fas fa-plus-circle"></i>
      </Link>
    </div>
  );
}

export default AddRoomIcon;
