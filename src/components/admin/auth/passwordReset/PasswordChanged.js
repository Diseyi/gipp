import React from 'react';
import ModalComponent from "../../../reusable/ModalComponent";
import Thumb from "../../../assets/Thumb.svg";


const PasswordChanged = () => {
    return (
        <div>
             <ModalComponent
        value="Password Reset"
        src={Thumb}
        h1="Password Changed!"
        p="You have successfully changed your password."
        button="HOMEPAGE"
      />
        </div>
    )
}

export default PasswordChanged
