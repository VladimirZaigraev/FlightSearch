import React, { useState } from "react";
import Button from "./Button";

import baggageOff from "../img/talon/bagOff.svg"
import baggageFree from "../img/talon/bagFree.svg"
import baggagePaid from "../img/talon/bagPaid.svg"

import refundOff from "../img/talon/refOff.svg"
import refundFree from "../img/talon/refFree.svg"
import refundPaid from "../img/talon/refPaid.svg"

import exchangeOff from "../img/talon/excOff.svg"
import exchangeFree from "../img/talon/excFree.svg"
import exchangePaid from "../img/talon/excPaid.svg"
import Tooltip from "./Tooltip";
import Services from "./Services"

const Talon = ({flight}) => {

  const price = parseInt(flight.price.total.amount);
  const [priceTotal, setPriceTotal] = useState(price)

  const baggageStatus = flight.servicesStatuses.baggage.caption
  const baggageStatusUid = flight.servicesStatuses.baggage.uid
  const exchangeStatus = flight.servicesStatuses.exchange.caption
  const exchangeStatusUid = flight.servicesStatuses.exchange.uid
  const refundStatus = flight.servicesStatuses.refund.caption
  const refundStatusUid = flight.servicesStatuses.refund.uid
  const priceExchange = flight.exchange.ADULT.exchangeAfterDeparture?.amount
  const priceRefund = flight.refund.ADULT.refundBeforeDeparture?.amount

  return (  
    <div className="ticket__talon talon">
      <div className="talon__price price">
        <span className="talon__total price__total">{priceTotal} &#8381; </span>
        <p className="talon__text">Стоимость для одного взрослого пассажира</p>
        <div className="talon__wrapper-icon">
        <Tooltip 
          imgOff={baggageOff} 
          imgFree={baggageFree} 
          imgPaid={baggagePaid}
          textStatus={"Баггаж"} 
          status={baggageStatus} 
          uid={baggageStatusUid} />
        <Tooltip
          imgOff={refundOff} 
          imgFree={refundFree} 
          imgPaid={refundPaid}
          textStatus={"Возврат"} 
          status={refundStatus}  
          uid={refundStatusUid}
         />
        <Tooltip
          imgOff={exchangeOff} 
          imgFree={exchangeFree} 
          imgPaid={exchangePaid}
          textStatus={"Обмен"} 
          status={exchangeStatus}  
          uid={exchangeStatusUid}/>

      </div>
      {baggageStatusUid === 'PAID' ?
      <Services 
        id={"baggage"} 
        textStatus={"Баггаж"} 
        status={baggageStatus} 
        uid={baggageStatusUid}
        setPriceTotal={setPriceTotal}
        price={price}
        />
      : '' }
      {exchangeStatusUid === 'PAID' ?
      <Services 
        id={"exchange"} 
        textStatus={"Обмен"} 
        status={exchangeStatus} 
        servicesPrice={priceExchange}
        setPriceTotal={setPriceTotal}
        price={price}
        />
      : '' }
      {refundStatusUid === 'PAID' ?
      <Services 
        id={"refund"} 
        textStatus={"Возврат"} 
        status={refundStatus} 
        servicesPrice={priceRefund}
        setPriceTotal={setPriceTotal}
        price={price}
        />
      : '' }
      </div>
      <Button
        classBtn="talon__button" 
        text="Выбрать"/>
    </div>
  )
}
export default Talon;