import React, {useState} from "react"; 
import InputPrice from "./InputPrice";

const Price =({sortPrice}) => {
  const [price, setPrice] = useState({
    priceMin: "",
    priceMax: ""
  })

  const handelChangePrice = (event) => {
    const newState = {
        ...price,
        [event.target.name]: event.target.value
    };
    setPrice(newState);
  }

  return(
    <div className="filters__price price">
      <h4 className="filters__title">Цена</h4>
      <div className="price__wrapper">
        <InputPrice
          inputText={"от"} 
          id={"priceMin"} 
          value={price.priceMin} 
          handelChange={handelChangePrice}
          placeholder={'0'} 
          onBlur={() => sortPrice(price)}/>
        <InputPrice
          inputText={"до"} 
          id={"priceMax"} 
          value={price.priceMax} 
          handelChange={handelChangePrice}
          placeholder={'100 000'} 
          onBlur={() => sortPrice(price)}/>
      </div>
    </div>
  )
}

export default Price;