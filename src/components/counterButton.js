import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CounterButton() {

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return ( <>
        <p>Count: {count}</p>
        <button className='btn btn-success' onClick={() => dispatch({type:"INCREMENT"})}>INCREMENT</button>
        <button className='btn btn-warning' onClick={() => dispatch({type:"DECREMENT"})}>DECREMENT</button>
    </> );
}

export default CounterButton;