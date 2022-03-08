import React, {useState, useEffect} from "react";
import Filters from "./Filters";
import Ticket from "./Ticket";
import data from "../data/flights.json"

const Main = () => {
const newData = data.result.flights.slice()
const [flights, setFlights] = useState(newData);

const searchAirlanes = (search) => {
  const searchAir = flights.filter((item) => {
     if(item.flight.legs.every((item) => 
     item.segments.every((segment) => 
     segment.airline.caption.toLowerCase().includes(search.toLowerCase())))) {
       return item
     }
    })
  if(search.length > 0) {
    setFlights(searchAir)
  } else {
    setFlights(newData)
  }
  
}

const sortTikets = (sort) => {
  switch(sort) {
    case "highPrice":
      setFlights([...flights].sort((prev, next) => {
      return parseInt(prev.flight.price.total.amount) - parseInt(next.flight.price.total.amount);
    }))
      console.log(sort)
      break;
    case "lowPrice":
      setFlights([...flights].sort((prev, next) => {
      return parseInt(next.flight.price.total.amount) - parseInt(prev.flight.price.total.amount)
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
const sortPrice = (price) => {
    console.log('priceMin', price.priceMin)
    console.log('priceMax', price.priceMax)
    if (price.priceMin.length > 0) {
      setFlights(newData.filter(
        (item) => parseInt(item.flight.price.total.amount) > +price.priceMin
      ))

    }
    if (price.priceMax.length > 0) {
      setFlights(newData.filter(
        (item) => parseInt(item.flight.price.total.amount) < +price.priceMax
      ))
    }
}

  const countTiket = 2
  const [counter, setCounter] = useState(countTiket);
  const tiketLength = flights.length;

  const plusCounter = () => {
    const newCounter = Math.min(tiketLength, counter + countTiket);
    setCounter(newCounter);
  };

  const tiketAll = tiketLength - countTiket
  const plusAllCounter = () => {
    setCounter(tiketLength);
  };


  return (  
    <main className="main">
      <div className="section">
        <div className="main__wrapper">
          <Filters searchAirlanes={searchAirlanes} sortTikets={sortTikets} sortFilters={sortFilters} sortPrice={sortPrice} />
          <div className="tickets">
            {flights.slice(0, counter).map(({flight, flightToken}) => (
             <Ticket key={flightToken} {...flight}/>
            ))
            }
             {counter === tiketLength ? "" :
             <div className="tickets__wrapper-btn">
              <button 
                onClick={plusCounter}
                className="tickets__button button__more"> Показать еще {countTiket}
              </button>
              <button 
                onClick={plusAllCounter}
                className="tickets__button button__all"> Показать все {tiketLength}</button>
            </div>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;