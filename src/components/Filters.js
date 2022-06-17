import React, { useState, useEffect } from 'react';
import Search from './Search';
import Sort from './Sort';
import Transfer from './Transfer';
import Price from './Price';
import BurgerBtn from './BurgerBtn';

const Filters = ({ searchAirlanes, sortTikets, sortFilters, sortPrice }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  function updateScreenType() {
    setIsMobile(window.innerWidth <= 800);
  }

  useEffect(() => {
    window.addEventListener('resize', updateScreenType);
    return () => {
      window.removeEventListener('resize', updateScreenType);
    };
  }, []);
  return (
    <>
      {isMobile ? <BurgerBtn menuActive={menuActive} setMenuActive={setMenuActive} /> : ''}
      <div className={!isMobile ? 'filters' : menuActive ? 'filters filters_active' : 'filters'}>
        <form className="filters__form">
          <Search searchAirlanes={searchAirlanes} />
          <Sort sortTikets={sortTikets} />
          <Transfer sortFilters={sortFilters} />
          <Price sortPrice={sortPrice} />
        </form>
      </div>
    </>
  );
};

export default Filters;
