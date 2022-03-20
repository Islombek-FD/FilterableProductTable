import ProductRow from "./ProductRow";

function ProductTable({ products, filter }) {
    const rows = [];

    products.forEach(product => {
        if (product.name.toLowerCase().indexOf(filter.filterText.toLowerCase()) === -1) {
            return;
        }
        if (filter.isStockOnly && !product.stocked) {
            return;
        }

        rows.push(<ProductRow key={product.name} product={product} />)
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Nomi</th>
                    <th>Narxi</th>
                </tr>
            </thead>

            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default ProductTable;