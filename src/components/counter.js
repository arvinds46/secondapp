import React from 'react';
import CounterButton from './counterButton';

function Counter(props) {
    /*const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = window.setInterval(() => {
        setTime(time => time + 1);
        }, 1000);
        return () => {
        window.clearInterval(timer);
        };
    }, []);*/

    return (
        <>
        <CounterButton onClick={props.onIncrement} label="Increment" />
        <CounterButton onClick={props.onDecrement} label="Decrement" />
        </>
    );
}

export default Counter;