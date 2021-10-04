import React from 'react'

export const BaseSelect = (props) => {
    const {
        label,
        name,
        id,
        children,
        className,
        onChange
    } = props;

    return (
        <div action={props.action}>
            <label htmlFor={name}>
                {label}
            </label>
            <select onChange={onChange}  id={id} name={name} className={className}>
                {children}
            </select>
        </div>
    )
}

export const BaseOption = (props) => {
    const {
        selected,
        value
    } = props;

    return (
        <option selected={selected}>
            {value}
        </option>
    );
}
