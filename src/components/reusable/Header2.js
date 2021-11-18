import React from 'react';
import logo from "../assets/logoNew.svg";
import './Reusable.css';


const Header2 = (props) => {
    return (
        <div className="Header" >
            <div className="Mobile-Header"></div>
      <div className="Laptop-Header Second">
        <img src={logo} alt="logo" className="Logo-Header" />
        <h1 className="H1-Header" >{props.value} </h1>
        </div>
        </div>
    )
}

export default Header2
