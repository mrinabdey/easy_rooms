import { useEffect } from "react";
import "./LoadingIcon.css";

const LoadingIcon = (props) => {
  return (
    <div
      className="loading-icon-container"
      style={{
        visibility: props.visible ? "visible" : "hidden",
        borderTopColor: props.color,
      }}
    ></div>
  );
};

export default LoadingIcon;
