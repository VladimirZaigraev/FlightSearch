import React from "react";
import uploadLogo from "../functions/uploadLogo"
import airplane from "../img/tickets/air.svg"

const Segment = ({segment, transfer, positionImg, classMain, classInfoLeft, classInfoRight}) => {
  // console.log("segment",segment)
  const airline = segment[0].airline.caption;
  //вылет
  const departureCity = segment[0].departureCity?.caption;
  const departureAirport = segment[0].departureAirport.caption;
  const departureUid = segment[0].departureAirport.uid;
  const departureDate = segment[0].departureDate
  
  //прилет
  const arrivalCity = transfer ? segment[1].arrivalCity?.caption : segment[0].arrivalCity.caption;
  const arrivalAirport = transfer ? segment[1].arrivalAirport.caption : segment[0].arrivalAirport.caption;
  const arrivalUid = transfer ? segment[1].arrivalAirport.uid : segment[0].arrivalAirport.uid;
  const arrivalDate = transfer ? segment[1].arrivalDate
        : segment[0].arrivalDate;
  //время полета
  const travelDuration = String((segment[0].travelDuration / 60).toFixed(0))+ ' ч' + ' ' + String(segment[0].travelDuration % 60)+' мин';

  const convertDate = (date) => {
    const day = new Date(date).toLocaleString('ru', {day: '2-digit', month: 'short'});
    const weekday = new Date(date).toLocaleString('ru', {weekday: 'short'});
    return [day, weekday].join(' ').toUpperCase();
  }

  function convertTime(time) {
    const newTime = new Date(time).toLocaleString('ru', {hour: '2-digit', minute: '2-digit'});
    return newTime;
  }

  
  //console.log('transfer', transfer)
  return (     
    <div className="flight__segment">
      <div className="flight__header">
        <img src={uploadLogo(airline)} alt={airline} className="flight__logo"/>
      </div>
      <div className={`"flight__main" ${classMain}`}>
        <div className={`flight__info flight__info-${classInfoLeft}`}>
          <p className="flight__city">{departureCity},</p> 
          <span className="flight__airport">{departureAirport}, <br /> ({departureUid})</span>
          <p className="flight__date">{convertDate(departureDate)}</p>
          <p className="flight__time">{convertTime(departureDate)}</p>
        </div>
        <div className="flight__center">
          <p className="flight__time-flight">В полете: {travelDuration}</p>
          <div className="flight__line">
            <img src={airplane} alt="самолет" className={`flight__img flight__img-${positionImg}`} />
          </div>
            {transfer ? <p className="flight__transfer">1 пересадка</p> : ""}
        </div>
        <div className={`flight__info flight__info-${classInfoRight}`}> 
          <p className="flight__city"> {arrivalCity} 
          </p>
          <span className="flight__airport">{arrivalAirport},<br /> ({arrivalUid})</span>
          <p className="flight__date">{convertDate(arrivalDate)}</p>
          <p className="flight__time">{convertTime(arrivalDate)}</p>
        </div>
      </div>
      <div className="flight__footer">
        <p className="flight__airlines">Рейс выполнятет: {airline}</p>
      </div>              
    </div>
  )
}
export default Segment;