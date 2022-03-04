import React, { useState } from "react";

const Filters = ({sortTikets, sortFilters}) => {

  const [sort, setSort] = useState('')
  const [filter, setFilter] = useState('')

  const handelChangeSort = (event) => {
    // console.log(event.target.checked)
    if(event.target.checked) {
      setSort(event.target.value)
      // console.log(event.target.value)
      // console.log(sort)
      sortTikets(event.target.value)
    }
  }

  const handelChangeFilter = (event) => {
    if(event.target.checked) {
      sortFilters(event.target.value)
      setFilter(event.target.value)
    }
  }

  return (  
          <div className="filters">
            <form className="filters__form">
              <div className="filters__sort sort">
                <h4 className="filters__title">Сортировать</h4>
                <label 
                  className="filters__label" 
                  htmlFor="radioHighPrice">
                  <input 
                    className="filters__radio" 
                    type="radio" 
                    id="radioHighPrice" 
                    value="highPrice"
                    checked={sort === 'highPrice' ? true : false} 
                    onChange={handelChangeSort}/>
                  <p className="filters__radio-text">по возврастанию цены</p>
                </label>
                <label 
                  className="filters__label" 
                  htmlFor="radioLowPrice">
                  <input 
                    className="filters__radio" 
                    type="radio" 
                    id="radioLowPrice" 
                    value="lowPrice"
                    checked={sort === 'lowPrice' ? true : false} 
                    onChange={handelChangeSort}/>
                  <p className="filters__radio-text">по убыванию цены</p>
                </label>
                <label 
                  className="filters__label" 
                  htmlFor="radioTimeFly">
                  <input 
                    className="filters__radio" 
                    type="radio" 
                    id="radioTimeFly" 
                    value="timeFly"
                    checked={sort === 'timeFly' ? true : false} 
                    onChange={handelChangeSort}/>
                  <p className="filters__radio-text">по времени в пути</p>
                </label>
              </div>
              <div className="filters__transfer transfer">
                <h4 className="filters__title">Фильтровать</h4>
                <label 
                  className="filters__label" 
                  htmlFor="radioTransfer">
                  <input 
                    className="filters__radio" 
                    type="radio"
                    name="filter" 
                    id="radioTransfer"
                    value="transfer"
                    checked={filter === 'transfer' ? true : false} 
                    onChange={handelChangeFilter}/>
                  <p className="filters__radio-text">1 пересадка</p>
                </label>
                <label 
                  className="filters__label" 
                  htmlFor="radioNoTransfer">
                  <input 
                    className="filters__radio" 
                    type="radio"
                    name="filter" 
                    id="radioNoTransfer"
                    value="noTransfer"
                    checked={filter === 'noTransfer' ? true : false} 
                    onChange={handelChangeFilter}/>
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