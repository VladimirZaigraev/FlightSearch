import React from "react";

const Filters = () => {
  return (  
          <div className="filters">
            <form className="filters__form">
              <div className="filters__sort-price sort-price">
                <h4 className="filters__title">Сортировать</h4>
                <label className="filters__label" htmlFor="radio1">
                  <input className="filters__radio" type="radio" id="radio1"/>
                  <p className="filters__radio-text">по возврастанию цены</p>
                </label>
                <label className="filters__label" htmlFor="radio2">
                  <input className="filters__radio" type="radio" id="radio2"/>
                  <p className="filters__radio-text">по убыванию цены</p>
                </label>

                <label className="filters__label" htmlFor="radio3">
                  <input className="filters__radio" type="radio" id="radio3"/>
                  <p className="filters__radio-text">по времени в пути</p>
                </label>

              </div>
              <div className="filters__transfer transfer">
                <h4 className="filters__title">Фильтровать</h4>
                <label className="filters__label" htmlFor="radio4">
                  <input className="filters__radio" type="radio" id="radio4"/>
                  <p className="filters__radio-text">1 пересадка</p>
                </label>

                <label className="filters__label" htmlFor="radio5">
                  <input className="filters__radio" type="radio" id="radio5"/>
                  <p className="filters__radio-text">без пересадок</p>
                </label>

              </div>
              <div className="filters__price price">
                <h4 className="filters__title">Цена</h4>
                <div className="price__wrapper">
                  <label className="filters__label price__label" htmlFor="price-min">
                    <p className="price__text">от</p>
                    <input className="filters__input price__input" name="price-min" type="number" minLength={1}  maxLength={9}/>
                  </label>
                  <label className="filters__label price__label" htmlFor="price-max">
                    <p className="price__text">до</p>
                    <input className="filters__input price__input" nume="price-max" type="number" minLength={1}  maxLength={9}/>
                  </label>
                </div>
              </div>
              <div className="filters__airlines airlines">
                <h4 className="filters__title">Авиакомпании</h4>
                <label className="filters__label" htmlFor="radio6">
                  <input className="filters__radio" type="radio" id="radio6"/> 
                  <p className="filters__radio-text">Авиакомпания 1</p>
                </label>

                <label className="filters__label" htmlFor="radio7">
                  <input className="filters__radio" type="radio" id="radio7"/>
                  <p className="filters__radio-text">Авиакомпания 2</p>
                </label>

              </div>
            </form>
          </div>
  );
}

export default Filters;