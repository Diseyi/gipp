import React from "react";
import logo from "../assets/logoNew.svg";
import './Reusable.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="Mobile-Header"></div>
      <div className="Laptop-Header">
        <img src={logo} alt="logo" className="Logo-Header" />
        <div className="Options-Header Flex-Header">
          <button className="Button-Header" >For Graduates</button>
          <button className="Button-Header" >For Employers</button>
          <button className="Button-Header" >FAQ</button>
        </div>
        <div className="GetStarted-Header Flex-Header">
          <button className="Button-Header" >Login</button>
          <button className="Register-Header" >REGISTER FOR FREE</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
