import React from 'react'

const BaseButton = (props) => {
    const {
        type, 
        name,
        className
    } = props;

    return (
        <button type={type} className={className}>
            {name}
        </button>
    )
}

export default BaseButton
