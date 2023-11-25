import React from 'react';
import { useMyContext } from './mycontext';

function MyChild() { 
    const {name,setName}=useMyContext();
    return ( <div>
        <h2>Child Component</h2>
        <p>Name: {name}</p>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
    </div> );
}

export default MyChild;