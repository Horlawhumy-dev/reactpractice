import React from 'react'

const Button = ({ type, clicked }) => {
    return (
        <button onClick={clicked} className="control-btn">
            {type}
        </button>
    )
}

export default Button;
