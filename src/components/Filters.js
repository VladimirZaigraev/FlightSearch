import React from "react";
import Search from "./Search";
import Sort from "./Sort"
import Transfer from "./Transfer"
import Price from "./Price";

const Filters = ({searchAirlanes, sortTikets, sortFilters, sortPrice}) => {
  
  return (  
    <div className="filters">
      <form className="filters__form">
        <Search searchAirlanes={searchAirlanes}/>
        <Sort sortTikets={sortTikets}/>
        <Transfer sortFilters={sortFilters}/>
        <Price sortPrice={sortPrice}/>
      </form>
    </div>
  );
}

export default Filters;