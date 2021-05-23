import React from 'react'

import '../dist/css/style.css';

const CounterControl = (props) => {
    return (
            <div className="controls">
                {props.children}
            </div>  
    )
}

export default CounterControl;
