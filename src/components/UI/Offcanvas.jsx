import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="fixed top-0 left-0 w-full h-screen z-10 bg-[#0000004d]" onClick={props.onClose}></div>;
};

const OffcanvasOverlay = (props) => {
  return (
    <div className="fixed z-20 top-0 right-0 xs:w-[300px]   h-screen bg-white shadow-lg p-4 flex flex-col gap-4 ">
      {props.children}
    </div>
  );
};

const Offcanvas = (props) => {
  const portaElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portaElement
      )}
      {ReactDOM.createPortal(
        <OffcanvasOverlay>{props.children}</OffcanvasOverlay>,
        portaElement
      )}
    </Fragment>
  );
};

export default Offcanvas;
