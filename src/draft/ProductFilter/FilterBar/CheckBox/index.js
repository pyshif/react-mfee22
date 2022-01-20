import React from 'react';

function CheckBox(props) {
    const { name, handleChange } = props;
    // 勾選狀態

    return (
        <>
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        className="icheck"
                        onChange={handleChange}
                    />{' '}
                    {name}
                </label>
            </div>
        </>
    );
}

export default CheckBox;
