import React, { useEffect, useState } from 'react'

import FilterablePorductTable from './FilterableProductTable';

const PRODUCT_API = 'https://amock.io/api/vd/products';

function App() {
    const [state, setState] = useState({
        products: [],
        isLoading: true
    })

    useEffect(() => {
        fetch(PRODUCT_API)
            .then(res => res.json())
            .then(data => {
                let jsonData = eval('(' + data + ')'); // eslint-disable-line
                setState({products: jsonData, isLoading: false})
            })
    })

    if(state.isLoading) {
        return <span>Iltimos, sabr qiling. Ma'lumot yuklanayabdi .......</span>
    }
    else {
        return <FilterablePorductTable products={state.products} /> 
    }
}

export default App