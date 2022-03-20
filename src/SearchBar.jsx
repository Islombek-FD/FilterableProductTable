function SearchBar(props) {
  const {filter, setFilter } = props;

  const handleFilterTextChange = (e) => setFilter({...filter, filterText: e.target.value});

  const handleInStockChange = (e) => setFilter({...filter, isStockOnly: e.target.checked});

  return (
    <div>
        <input onChange={handleFilterTextChange} type="text" placeholder='Izlash....' value={filter.filterText} />

        <div>
            <input onChange={handleInStockChange} type="checkbox" id="onlyInStock" checked={filter.isStockOnly} />
            <label htmlFor="onlyInStock">Faqat omborda mavjud bo'lgan maxsulotlar</label>
        </div>
    </div> 
  )
}

export default SearchBar;