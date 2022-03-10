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
    <div className="tooltip tooltip_effect">
      <img src={tooltipImg} alt={textStatus} className="tooltip__icon"/>
      <div className="tooltip__content clearfix">
        <p className="tooltip__title"> {textStatus}
        </p>
        <span className="tooltip__text"> {status}
        </span>
        </div>
    </div>
  )
}
export default TalonIcon