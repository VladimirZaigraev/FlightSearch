import React from "react";


const TalonIcon = ({uid, imgOff, imgFree, imgPaid, textStatus, status }) => {
    
    let tooltipImg = "";

    switch(uid) {
    case "OFF":
      tooltipImg = imgOff
      break;
    case "FREE":
      tooltipImg = imgFree
      break;
    case "PAID":
      tooltipImg = imgPaid
      break;
  }
  return(
    <span className="tooltip tooltip-effect">
      <img src={tooltipImg} alt={textStatus} className="tooltip__icon"/>
      <span className="tooltip-content clearfix">
        <span className="tooltip-text"> {`${textStatus}: ${status}`}
        </span>
        </span>
    </span>
  )
}
export default TalonIcon