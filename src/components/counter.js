import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setInterval(()=>{
            setCount(count => count + 1);
        },1000);
    }
    const decrement = () => {
        setInterval(()=>{
            setCount(count => count - 1);
        },1000);
    }
    useEffect(() => {
        const timer = window.setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
        return () => {
        window.clearInterval(timer);
        };
    }, []);

    return (
        <><div>Seconds: {count}</div>
        <button className='btn btn-success' onClick={increment}>Increment</button>{' '}
        <button className='btn btn-warning' onClick={decrement}>Decrement</button>
        </>
    );
}

export default Counter;