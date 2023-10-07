import React, { useState } from 'react';
import Counter from './counter';

function CounterContainer() {
    const [counter,setCounter] = useState(0);

    const increment = () => {
        setInterval(()=>{
            setCounter(counter => counter + 1);
        },1000);
    }
    const decrement = () => {
        setInterval(()=>{
            setCounter(counter => counter - 1);
        },1000);
    }

    return ( <>
        <div>Seconds: {counter}</div>
        <Counter onIncrement={increment} onDecrement={decrement} />
    </> );
}

export default CounterContainer;