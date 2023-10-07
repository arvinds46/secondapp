import React from 'react';

function CounterButton({onClick,label}) {
    let cls;
    if (label === 'Increment') cls = 'btn btn-success';
    else cls = 'btn btn-warning';
    return ( <><button className={cls} onClick={onClick}>{label}</button>{' '}</> );
}

export default CounterButton;