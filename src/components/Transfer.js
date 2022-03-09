import React, {useState, useEffect} from "react";
import InputRadio from "./InputRadio"

const Transfer = ({sortFilters}) => {
  const [filter, setFilter] = useState('')

  useEffect(() => {
    sortFilters(filter)
  }, [filter])

  const handelChangeFilter = (event) => {
    const {checked, value} = event.target
    if(checked) {
      setFilter(value)
    }
  }

  return(
  <div className="filters__transfer transfer">
    <h4 className="filters__title">Фильтровать</h4>
    <InputRadio 
      id={'radioTransfer'} 
      value={'transfer'}
      name={'filter'}
      state={filter} 
      handelChange={handelChangeFilter} 
      inputText = {'1 пересадка'}/>
    <InputRadio 
      id={'radioNoTransfer'} 
      value={'noTransfer'}
      name={'filter'}
      state={filter} 
      handelChange={handelChangeFilter} 
      inputText = {'без пересадок'}/>
  </div>
  )
}

export default Transfer;