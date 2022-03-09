import React, {useState} from "react"; 

const Search =({searchAirlanes}) => {
  const [search, setSearch] = useState('')
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
    searchAirlanes(event.target.value)
  }

  return(        
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
            />
      </label>
    </div>
  )
}
export default Search;