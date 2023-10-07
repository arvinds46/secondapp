import React, { useState } from 'react';
import data from "./products.json"
import ProductForm from './productForm';
import ProductDetail from './productDetail';

function ProductList() {
    const [products, setProducts] = useState(data);//set json data as default
    const [selected, setSelected] = useState(null);
    const addProduct = (obj) => {
        obj.id=products.length+1;
        setProducts([...products, obj]);
    }

    return (<>
    <h1>Product List</h1>
    <table className='table table-bordered table-striped'>
        <thead><tr><th>ID</th><th>Name</th><th>Price</th><th>Description</th><th>Brand</th><th>Rating</th></tr></thead>
        <tbody>
            {
                products.map((item,index) => {
                    return (
                        <tr key={index} onClick={() => setSelected(item)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.brand}</td>
                            <td>{item.rating}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    <div className='row'>
        <div className='col'>
            <ProductForm addProduct={addProduct} />
        </div>
        <div className='col'>
            {selected && <ProductDetail product={selected} />}
        </div>
    </div>
    </>  );
}

export default ProductList;