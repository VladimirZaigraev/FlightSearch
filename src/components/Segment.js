import React from "react";
import uploadLogo from "../functions/uploadLogo"
import airplane from "../img/tickets/air.svg"

const Segment = ({segment, transfer, positionImg, classMain, classInfoLeft, classInfoRight}) => {

  const SEGMENT_FIRST = segment[0]
  const SEGMENT_LAST = segment[1]

  const airline = SEGMENT_FIRST.airline.caption;
  //вылет
  const departureCity = SEGMENT_FIRST.departureCity?.caption;
  const departureAirport = SEGMENT_FIRST.departureAirport.caption;
  const departureUid = SEGMENT_FIRST.departureAirport.uid;
  const departureDate = SEGMENT_FIRST.departureDate
  
  //прилет
  const arrivalCity = transfer ? SEGMENT_LAST.arrivalCity?.caption : SEGMENT_FIRST.arrivalCity.caption;
  const arrivalAirport = transfer ? SEGMENT_LAST.arrivalAirport.caption : SEGMENT_FIRST.arrivalAirport.caption;
  const arrivalUid = transfer ? SEGMENT_LAST.arrivalAirport.uid : SEGMENT_FIRST.arrivalAirport.uid;
  const arrivalDate = transfer ? SEGMENT_LAST.arrivalDate : SEGMENT_FIRST.arrivalDate;
  //время полета
  const travelDuration = String((SEGMENT_FIRST.travelDuration / 60).toFixed(0))+ ' ч' + ' ' + String(SEGMENT_FIRST.travelDuration % 60)+' мин';

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