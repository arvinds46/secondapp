import React from 'react';
import MyContextProvider from './mycontext';
import MyParent from './myparent';

function MyGrandParent() {
    return ( 
    <MyContextProvider>
        <div>
            <h1>GrandParent Component</h1>
            <MyParent />
        </div>
    </MyContextProvider> );
}

export default MyGrandParent;