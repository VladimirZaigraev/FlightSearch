import React from "react";
import Filters from "./Filters";
import Tickets from "./Tickets";

const Main = () => {
  return (  
    <main className="main">
      <div className="section">
        <div className="main__wrapper">
          <Filters/>
          <Tickets />
        </div>
      </div>
    </main>
  );
}

export default Main;