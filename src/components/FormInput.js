import { useState } from 'react';

const FormInput = (props) => {
    const {
        label, 
        type = 'text', 
        name,
        value,
        placeholder,
        onChange,
        className
    } = props;
    
    // const [value, setValue] = useState('');
    // const onChange = (event) => {
    //     setValue(event.target.value);
    // };

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

export default FormInput
