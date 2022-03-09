import React, {useState, useEffect} from "react";
import InputRadio from "./InputRadio";

const Sort =({sortTikets}) => {
  const [sort, setSort] = useState('')

  useEffect(() => {
    sortTikets(sort)
  }, [sort])

  const handelChangeSort = (event) => {
    const {checked, value} = event.target
    if(checked) {
      setSort(value)
    }
  }
  return (
    <div className="filters__sort sort">
      <h4 className="filters__title">Сортировать</h4>
      <InputRadio 
        id={'radioHighPrice'} 
        value={'highPrice'}
        name={'sort'}  
        state={sort} 
        handelChange={handelChangeSort} 
        inputText = {'по возврастанию цены'}/>
      <InputRadio 
        id={'radioLowPrice'} 
        value={'lowPrice'}
        name={'sort'}  
        state={sort} 
        handelChange={handelChangeSort} 
        inputText = {'по убыванию цены'}/>
      <InputRadio 
        id={'radioTimeFly'} 
        value={'timeFly'}
        name={'sort'} 
        state={sort} 
        handelChange={handelChangeSort} 
        inputText = {'по времени в пути'}/>
    </div>
  )
}

export default Sort;