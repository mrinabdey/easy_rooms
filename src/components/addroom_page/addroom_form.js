import React, { useContext, useRef, useState } from "react";
import AuthContext from "../../context/authcontext";
import CustomButton from "../common_components/CustomButton";
import "./addroom_form.css";
import { useHistory } from "react-router-dom";

const AddRoomForm = (props) => {
  const ctx = useContext(AuthContext);
  const history = useHistory();
  const features = useRef();
  const address = useRef();
  const imageFile = useRef();
  const title = useRef();
  const price = useRef();
  // const [isLoading, setIsLoading] = useState(false);
  const url = "https://easyrooms.herokuapp.com/features/add_room";
  // const url = 'http://localhost:4000/features/add_room';

  const addRoomFormHandler = () => {
    const formData = new FormData();
    formData.append("title", title.current.value);
    formData.append("price", price.current.value);
    formData.append("features", features.current.value);
    formData.append("address", address.current.value);
    formData.append("image", imageFile.current.files[0]);
    props.isLoadingHandler(true);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        props.isLoadingHandler(false);
        // console.log('file sent');
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="addroom_form_container">
      <label htmlFor="title_input" className="title_label addroom_label">
        Title
      </label>
      <input
        ref={title}
        id="title_input"
        className="addroom_input"
        type="text"
        placeholder="Paying Guest/ On rent"
      />
      <label htmlFor="features_input" className="features_label addroom_label">
        Features:
      </label>
      <textarea
        ref={features}
        id="features_input"
        className="addroom_input"
        type="text"
        placeholder="Add a brief description of the room"
      />
      <label htmlFor="address_input" className="address_label addroom_label">
        Address:
      </label>
      <input
        ref={address}
        id="address_input"
        className="addroom_input"
        type="text"
        placeholder="Add an address"
      />
      <label
        htmlFor="imageFile_input"
        className="imageFile_label addroom_label"
      >
        Pick an image:
      </label>
      <input
        ref={imageFile}
        id="imageFile_input"
        className="addroom_input"
        type="file"
      />
      <label htmlFor="price_input" className="price_label addroom_label">
        Price
      </label>
      <input
        ref={price}
        id="price_input"
        className="addroom_input"
        type="number"
        accept="image/*"
        placeholder="0"
      />
      <div className="addroom_button_container">
        <CustomButton onClick={addRoomFormHandler} buttonText="Add" />
      </div>
    </div>
  );
};

export default AddRoomForm;
