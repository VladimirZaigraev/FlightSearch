import React from 'react';

const Button = ({ onClick, classBtn, text }) => {
  return (
    <button onClick={onClick} className={`button ${classBtn}`}>
      {' '}
      {text}
    </button>
  );
};

export default Button;
