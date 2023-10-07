import React, { useState } from 'react';

function ProductForm({addProduct}) {
    const [product, setProduct] = useState({name:'',price:'',description:'',brand:'',rating:''});

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        alert("Product added successfully");
        setProduct({name:'',price:'',description:'',brand:'',rating:''});
    }
    return ( <div>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group p-3'>
                <label for='name'>Name</label>
                <input type='text' id='name' placeholder='Name'
                className='form-control'
                value={product.name}
                onChange={(e)=>setProduct({...product,name:e.target.value})}
                />
            </div>
            <div className='form-group p-3'>
                <label for='price'>Price</label>
                <input type='text' id='price' placeholder='Price'
                className='form-control'
                value={product.price}
                onChange={(e)=>setProduct({...product,price:e.target.value})}
                />
            </div>
            <div className='form-group p-3'>
                <label for='description'>Description</label>
                <input type='text' id='description' placeholder='Description'
                className='form-control'
                value={product.description}
                onChange={(e)=>setProduct({...product,description:e.target.value})}
                />
            </div>
            <div className='form-group p-3'>
                <label for='brand'>Brand</label>
                <input type='text' id='brand' placeholder='Brand'
                className='form-control'
                value={product.brand}
                onChange={(e)=>setProduct({...product,brand:e.target.value})}
                />
            </div>
            <div className='form-group p-3'>
                <label for='rating'>Rating</label>
                <input type='text' id='rating' placeholder='Rating'
                className='form-control'
                value={product.rating}
                onChange={(e)=>setProduct({...product,rating:e.target.value})}
                />
            </div>
            <div className='form-group m-3'>
                <button type='submit' className='btn btn-primary'>Add Product</button>
            </div>
        </form>
    </div> );
}

export default ProductForm;