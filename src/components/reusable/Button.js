import React from "react";

const Button = (props) => {
  return (
    <button className="Button" id={props.id} > {props.value}</button>
  );
};

export default Button;
