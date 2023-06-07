import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import { ReactDOM } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <div>
      {/* {ReactDOM.createElement(<Backdrop />, portalElement)}
      {ReactDOM.createElement(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )} */}
      <Backdrop/>
      <ModalOverlay>{props.children}</ModalOverlay>
    </div>
  );
};

export default Modal;
