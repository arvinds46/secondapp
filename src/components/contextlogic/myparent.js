import React from 'react';
import MyChild from './mychild';
import { useMyContext } from './mycontext';

function MyParent() {
    const {name,setName}=useMyContext();
    return ( <div>
        <h2>Parent Component</h2>
        <p>{name}</p>
        <MyChild />
    </div> );
}

export default MyParent;