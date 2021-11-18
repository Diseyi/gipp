import React from "react";
import "./Register.css";
import ModalComponent from "../../../reusable/ModalComponent";
import emailSuccess from "../../../assets/successemail.svg";

const SignUpSuccess = () => {
  return (
    <div className="SignUpSuccess">
      <ModalComponent
        value="Registration"
        src={emailSuccess}
        h1="Sign Up Successful"
        p="A verification link has been sent to your email. Kindly follow the
            link to complete your registration."
        button="BACK TO HOMEPAGE"
      />
    </div>
  );
};

export default SignUpSuccess;
