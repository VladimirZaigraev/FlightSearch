import React, {useState} from "react";
import Filters from "./Filters";
import Ticket from "./Ticket";
import data from "../data/flights.json"

const Main = () => {
const newData = data.result.flights.slice()
const [flights, setFlights] = useState(newData);
// console.log(flights)
// 
// const data = JSON.parse(JSON.stringify(flights))
console.log(data)
//const flights = data.result.flights
//const tickets = flights.slice().sort((a, b) => (parseInt(a.flight.price.total.amount) - parseInt(b.flight.price.total.amount)))
const sortTikets = (sort) => {
  switch(sort) {
    case "highPrice":
      setFlights([...flights].sort((prev, next) => {
      return +prev.flight.price.total.amount - +next.flight.price.total.amount;
    }))
      console.log(sort)
      break;
    case "lowPrice":
      setFlights([...flights].sort((prev, next) => {
      return +next.flight.price.total.amount - +prev.flight.price.total.amount;
    }))
      console.log(sort)
      break;
    default:
      setFlights([...flights].sort((prev, next) => {
      return (
        prev.flight.legs.reduce((a, b) => a + b.duration, 0) -
        next.flight.legs.reduce((a, b) => a + b.duration, 0)
      );
    }))
      // console.log(sort)
      break
  }
}
        
const sortFilters = (sort) => {
  console.log(sort)
  switch(sort) {
    case "transfer":
      const flightsTransfer = newData.filter((item) => 
        item.flight.legs.every((item) => 
        item.segments.some((segment) => segment.starting === false))
        )
      setFlights(flightsTransfer)
      break;
    case "noTransfer":
      const flightsNoTransfer = newData.filter((item) => 
        item.flight.legs.every((item) => 
        item.segments.every((segment) => segment.starting))
        )
      setFlights(flightsNoTransfer)
      break;
  }
}

  const countTiket = 2
  const [counter, setCounter] = useState(countTiket);
  const tiketLength = flights.length;
  console.log("maxLength", tiketLength)

  const plusCounter = () => {
    const newCounter = Math.min(tiketLength, counter + countTiket);
    console.log('newCounter', newCounter)
    setCounter(newCounter);
  };
  // const allCounter = () => {
  //   setCounter(10);
  // }
  const tiketAll = tiketLength - countTiket

  return (  
    <main className="main">
      <div className="section">
        <div className="main__wrapper">
          <Filters sortTikets={sortTikets} sortFilters={sortFilters}/>
          <div className="tickets">
            {flights.slice(0, counter).map(({flight, flightToken}) => (
             <Ticket key={flightToken} {...flight}/>
            ))
            }
            <div className="tickets__wrapper-btn">
              <button 
                onClick={plusCounter}
                className="tickets__button button__more"> Показать еще {countTiket}
              </button>
              <button 
                className="tickets__button button__all"> Показать все {tiketAll}</button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Main;