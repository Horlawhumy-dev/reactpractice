import React from 'react';


const CounterOutput = ({ value }) => {
    return (
        <div className="control-output">
            <h2>Counter: <span>{ value } </span></h2>
        </div>
    )
}
export default CounterOutput;
