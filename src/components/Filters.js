import React, { useState } from "react";

const Filters = ({searchAirlanes, sortTikets, sortFilters, sortPrice}) => {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [filter, setFilter] = useState('')
  const [price, setPrice] = useState({
    priceMin: "",
    priceMax: ""
  })
  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
    searchAirlanes(event.target.value)
  }

  const handelChangeSort = (event) => {
    if(event.target.checked) {
      setSort(event.target.value)
      sortTikets(event.target.value)
    }
  }

  const handelChangeFilter = (event) => {
    if(event.target.checked) {
      sortFilters(event.target.value)
      setFilter(event.target.value)
    }
  }

  const hendelChangePrice = (event) => {
    console.log('event.target.name', event.target.name)
    let newState = {
        ...price,
        [event.target.name]: event.target.value
    };
    console.log(newState);
    setPrice(newState);
    // sortPrice(newState);
  }
  
  return (  
          <div className="filters">
            <form className="filters__form">
              <div className="filters__search search">
                <div className="filters__title">Поиск</div>
                <label className="filters__label" htmlFor="search">
                  <input 
                    className="filters__input search__input" 
                    onChange={handleSearch} 
                    value={search} 
                    type="text" 
                    id="search" 
                    placeholder="Название авиакомпании"
                    //  onBlur={() => searchAirlanes(search)}
                     />
                </label>
              </div>
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
                  <label className="filters__label price__label" htmlFor="priceMin">
                    <p className="price__text">от</p>
                    <input 
                      className="filters__input price__input"   name="priceMin" 
                      type="number" 
                      minLength={1} 
                      maxLength={9}
                      placeholder="0"
                      value={price.priceMin}
                      onChange={hendelChangePrice} 
                      onBlur={() => sortPrice(price)}/>
                  </label>
                  <label className="filters__label price__label" htmlFor="priceMax">
                    <p className="price__text">до</p>
                    <input 
                      className="filters__input price__input" name="priceMax" 
                      type="number" 
                      placeholder="100 000" 
                      minLength={1}  
                      maxLength={9}
                      value={price.priceMax}
                      onChange={hendelChangePrice}
                      onBlur={() => sortPrice(price)}/>
                  </label>
                </div>
              </div>
            </form>
          </div>
  );
}

export default Filters;