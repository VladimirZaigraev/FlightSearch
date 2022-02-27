import React from "react";
import airplane from "../img/tickets/air.svg"
const Tickets = () => {
  return (
          <div className="tickets">
            <div className="ticket">
              <div className="ticket__flight flight">
                <div className="flight__thither">
                  <div className="flight__header">
                    <img className="flight__logo"/>
                  </div>
                  <div className="flight__main">
                    <div className="flight__info flight__info-left">
                      <p className="flight__airport">Москва, Шереметьево, (SVO)</p>
                      <p className="flight__date">18 АВГ.ВТ</p>
                      <p className="flight__time">09:25</p>
                    </div>
                    <div className="flight__center">
                      <p className="flight__mid-flight">14ч 45 мин</p>
                      <div className="flight__line">
                        <img src={airplane} alt="" className="flight__img flight__img-thither" />
                      </div>
                      <p className="flight__transfer">1 пересадка</p>
                    </div>
                    <div className="flight__info flight__info-right">
                      <p className="flight__airport">Москва, Шереметьево, (SVO)</p>
                      <p className="flight__date">18 АВГ.ВТ</p>
                      <p className="flight__time">20:40</p>
                    </div>
                  </div>
                  <div className="flight__footer">
                    <p className="flight__airlines">Рейс выполнятет: LOT Polish Airlines</p>
                  </div>
                </div>
                <div className="flight__backward">
                  <div className="flight__header">
                    <img className="flight__logo"/>
                  </div>
                  <div className="flight__main">
                    <div className="flight__info flight__info-left">
                      <p className="flight__airport">Москва, Шереметьево, (SVO)</p>
                      <p className="flight__date">18 АВГ.ВТ</p>
                      <p className="flight__time">09:25</p>
                    </div>
                    <div className="flight__center">
                      <p className="flight__mid-flight">14ч 45 мин</p>
                      <div className="flight__line">
                        <img src={airplane} alt="" className="flight__img flight__img-backward" />
                      </div>
                      <p className="flight__transfer">1 пересадка</p>
                    </div>
                    <div className="flight__info flight__info-right">
                      <p className="flight__airport">Москва, Шереметьево, (SVO)</p>
                      <p className="flight__date">18 АВГ.ВТ</p>
                      <p className="flight__time">20:40</p>
                    </div>
                  </div>
                  <div className="flight__footer">
                    <p className="flight__airlines">Рейс выполнятет: LOT Polish Airlines</p>
                  </div>
                </div>
              </div>
              <div className="ticket__talon talon">
                <span className="talon__price">79999 ₽</span>
                <p className="talon__text">Стоимость для одного взрослого пассажира</p>
                <button className="talon__button">Выбрать</button>
              </div>
            </div>
            <button className="tickets__button">Показать еще</button>
          </div>    
  )
}
export default Tickets;