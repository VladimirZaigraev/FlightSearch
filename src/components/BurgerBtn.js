import React, { useState, useEffect } from 'react';

const BurgerBtn = ({ menuActive, setMenuActive }) => {
  return (
    <div
      className={menuActive ? 'burger-btn_active burger-btn' : 'burger-btn'}
      onClick={() => setMenuActive(!menuActive)}>
      <span className="burger-btn__span"></span>
    </div>
  );
};
export default BurgerBtn;
