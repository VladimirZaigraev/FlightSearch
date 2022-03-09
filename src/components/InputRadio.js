import React from "react";

const InputRadio = ({id, name, value, state, handelChange, inputText}) => {
  return (
    <label 
    className="filters__label" 
    htmlFor={id}>
    <input 
      className="filters__radio" 
      type="radio" 
      id={id}
      name={name}
      value={value}
      checked={state === value ? true : false} 
      onChange={handelChange}/>
    <p className="filters__radio-text">{inputText}</p>
  </label>
  )
}
export default InputRadio;