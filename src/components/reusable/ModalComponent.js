import React from "react";
import Header2 from "./Header2";
import "./Reusable.css";
import Button from "./Button";
import Modal from "react-bootstrap/Modal";

const ModalComponent = (props) => {
  return (
    <div className="SignUpSuccess">
      <Header2 value={props.value} />
      <main className="SignUpSuccess-Main">
        <Modal.Dialog centered  >
        <div className="Modal">
        <img src={props.src} alt="email success" className="Email-Icon" />
            <Modal.Title className="H2-Modal" >{props.h1} </Modal.Title>
          <Modal.Body>
            <p>{props.p} </p>
          </Modal.Body>
            <Button id="SignUpSuccess-Button" value={props.button} />
            </div>
        </Modal.Dialog>
        <footer>
            <p>© 2020. GIPP - All rights reserved. Powered by: deVtage</p>
        </footer>

      </main>
    </div>
  );
};

export default ModalComponent;
