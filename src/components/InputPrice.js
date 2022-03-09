import React from "react";

const InputPrice = ({id, value, placeholder, handelChange, onBlur, inputText}) => {
 return (
  <label 
    className="filters__label price__label" 
    htmlFor={id}>
    <p className="price__text">{inputText}</p>
    <input 
      className="filters__input price__input"
      id={id}   
      name={id} 
      type="number" 
      minLength={1} 
      maxLength={9}
      placeholder={placeholder}
      value={value}
      onChange={handelChange} 
      onBlur={onBlur}/>
  </label>
 )
}

export default InputPrice;