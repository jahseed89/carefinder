import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./button.scss";

const Button = ({ btnText, clickHandler, className = "my-btn", type, backIcon=false }) => {
  return (
    <button onClick={clickHandler} className={className} type={type}>
     {backIcon && (
       <span>
       <AiOutlineArrowLeft className="back-arrow" />
     </span>
     )}
      {btnText}
    </button>
  );
};

export default Button;
