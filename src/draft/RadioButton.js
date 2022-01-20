import React from 'react';

function RadioButton(props) {
    const { name, value, checkedValue, handleFieldChange, required } = props;

    return (
        <>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checkedValue === value}
                onChange={handleFieldChange}
                required={required}
            />
            <label>{value}</label>
        </>
    );
}

export default RadioButton;
