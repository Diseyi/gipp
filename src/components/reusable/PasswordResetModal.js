import React from 'react';
import Header2 from "./Header2";
import "./Reusable.css";
import Button from "./Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

const PasswordResetModal = (props) => {
    return (
        <div className="SignUpSuccess">
        <Header2 value={props.value} />
        <main className="SignUpSuccess-Main">
          <Modal.Dialog centered  >
          <div className="Modal">
          <img src={props.src} alt="email success" className="Email-Icon" />
              <Modal.Title className="H2-Modal" >{props.h1} </Modal.Title>
              <Form.Label className="Label-Form-Landing Left">
              Enter Your New Password
              </Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className="borderNone"
                  className="Placeholder"
                />
                <InputGroup.Text id="basic-addon2" className="Underline">
                  SHOW
                </InputGroup.Text>
              </InputGroup>
              <Button id="SignUpSuccess-Button" value="SAVE PASSWORD" />
              </div>
          </Modal.Dialog>
          <footer>
              <p>© 2020. GIPP - All rights reserved. Powered by: deVtage</p>
          </footer>
  
        </main>
      </div>
    )
}

export default PasswordResetModal
