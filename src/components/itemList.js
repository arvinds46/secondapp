import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ItemList() {
    const items = useSelector(state => state.itemReducer.items);
    const dispatch = useDispatch();

    const [newItem,setNewItem]=useState('');

    const handAddItem=()=>{
        dispatch({type:'ADD_ITEM',payload:{id:Date.now(),name:newItem}});
        setNewItem('');
    }
    const handleRemoveItem=(itemId)=>{
        dispatch({type:'REMOVE_ITEM',payload:itemId})
    }

    return ( <div>
        <h2>Item Component</h2>
        <ul>
            {
                items.map((item)=>(
                    <li key={item.id}>
                        {item.name}
                        <button className='btn btn-danger' onClick={()=>handleRemoveItem(item.id)}>Remove Item</button>
                    </li>
                ))
            }
        </ul>
        <div>
            <input type='text' value={newItem} onChange={(e)=>setNewItem(e.target.value)} placeholder='Enter Item to Add to cart' />
            <button className='btn btn-success' onClick={handAddItem}>Add Item</button>
        </div>
    </div> );
}

export default ItemList;