import React, { useState } from "react";


import Talon from "./Talon";
import Segment from "./Segment";

const Ticket = ({...flight}) => {

 
  const segmentFrom = flight.legs[0].segments;
  const segmentAbout = flight.legs[1].segments;
 
  //трансфер
  let transferFrom = flight.legs[0].segments.length > 1;
  let transferAbout = flight.legs[1].segments.length > 1;

 

  return (
            <div className="ticket">
              <div className="ticket__flight flight">
                <Segment 
                  segment={segmentFrom} 
                  transfer={transferFrom} 
                  positionImg = {"from"} 
                  classMain={"flight__main"} 
                  classInfoLeft={"left"} 
                  classInfoRight={"right"}/>
                <Segment 
                  segment={segmentAbout} 
                  transfer={transferAbout} 
                  positionImg = {"about"} 
                  classMain ={"flight__main_reverse"} 
                  classInfoLeft={"right"} 
                  classInfoRight={"left"}/>
              </div>
              <Talon flight={flight}/>
            </div>
  )
}
export default Ticket;