import React from "react";

const Talon = ({price}) => {
  return (  
    <div className="ticket__talon talon">
      <span className="talon__price">{price} &#8381; </span>
      <p className="talon__text">Стоимость для одного взрослого пассажира</p>
      <button className="talon__button">Выбрать</button>
    </div>
  )

}
export default Talon;