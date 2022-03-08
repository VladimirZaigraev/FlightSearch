import React, { useState } from "react";


const Services = ({ textStatus, id, servicesPrice, setPriceTotal, price}) => {
 
  const [click, setClick] = useState(false)

  
  const plusPrice = () => {
    setClick(true)
    setPriceTotal(price + parseInt(servicesPrice))
  }

  const minusPrice = () => {
    setClick(false)
    setPriceTotal((price + parseInt(servicesPrice)) - parseInt(servicesPrice))
  }
  
  return (
    click === false ? 
    <div onClick={plusPrice} className="talon__services services services_paid" id={id}>
      <p className="services__title services__title services__title_paid">{textStatus}</p> 
      <span  className="talon__text services__text services__text_paid">+{servicesPrice}&#8381;</span>
    </div>
    :
    <div onClick={minusPrice} className="talon__services services services_free" id={id}>
      <p className="services__title services__title services__title_free">{textStatus}</p> 
      <span  className="talon__text services__text services__text_free ">включен</span>
    </div>
    
  )
}
export default Services;