import React from 'react';

const BaseInput = (props) => {
    const {
        label, 
        type = 'text', 
        name,
        value,
        placeholder,
        onChange,
        className
    } = props;

    return (
        <div className="mb-3">
            <label className="text-base">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
                required
            />
        </div>
    )
}

export default BaseInput
