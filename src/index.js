import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './FilterableProductTable';

const products = [
  {price: '$3.10', stocked: true, name: 'Shaftoli'},
  {price: '$3.40', stocked: true, name: 'Gilos'},
  {price: '$2.10', stocked: false, name: 'Nok'},
  {price: '$1.25', stocked: true, name: 'Sut'},
  {price: '$5.25', stocked: false, name: 'Olma'},
  {price: '$4.54', stocked: true, name: 'Mineral'},

];

ReactDOM.render(
  <React.StrictMode>
    <FilterableProductTable products={products} />
  </React.StrictMode>,
  document.getElementById('root')
);
