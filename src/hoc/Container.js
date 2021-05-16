import React from 'react'
import '../dist/css/style.css';

const Container = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default Container;
