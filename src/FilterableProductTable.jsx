import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable({ products }) {
  const [filter, setFilter] = useState({
    filterText: '',
    isStockOnly: false,
  });

  return (
    <div>
      <SearchBar
        filter={filter}
        setFilter={setFilter}
      />

      <ProductTable
        products={products}
        filter={filter}
      />
    </div>
  )
}

export default FilterableProductTable; 