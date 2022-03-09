import React from "react";

const Button = ({onClick, classBtn, text}) => {
  return(
  <button 
    onClick={onClick}
    className={`tickets__button ${classBtn}`}> {text}
  </button>
  )
}

export default Button;