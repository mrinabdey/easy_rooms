import "./Loader.css";

const Loader = (props) => {
  return (
    <div className="loader_container_container">
        <div
            className="loader_container"
            style={{
                visibility: props.visible ? "visible" : "hidden",
                borderTopColor: props.color,
            }}
        ></div>
    </div>
  );
};

export default Loader;
