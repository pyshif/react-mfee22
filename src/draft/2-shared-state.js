import React, { useState } from 'react';

function App() {
    // 給定初始狀態
    const [data, setData] = useState({ fullname: '', phone: '' });

    // 共用狀態操作函數
    const handleChange = function (e) {
        // [e.target.name] -> computed propertys name
        const newData = { ...data, [e.target.name]: e.target.value };
        setData(newData);
    };

    return (
        <>
            <h2>文字輸入框</h2>
            <label>姓名</label>
            <input
                type="text"
                value={data['fullname']}
                name="fullname"
                onChange={handleChange}
                // onChange={function (e) {
                //     // copy -> deal -> set state
                //     const newData = { ...data, fullname: e.target.value };
                //     // newData.name = e.target.value;
                //     setData(newData);
                // }}
            />
            <br />
            <label>電話</label>
            <input
                type="text"
                value={data['phone']}
                name="phone"
                onChange={handleChange}
            />
        </>
    );
}
