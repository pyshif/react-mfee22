import React, { useState, useRef } from 'react';
import RadioButton from './RadioButton';
import CheckBox from './CheckBox';
import './css/5-form-auth.css';

function App(props) {
    const [fields, setFields] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '', // 有可能只會在瀏覽器用，不會存到資料庫
        gender: '',
        likeList: [],
    });

    const [fieldErrors, setFieldErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    // 帳號有錯誤要聚焦
    const usenameFieldRef = useRef();

    // RadioButton 用的項目（！ RadioButton 元件有修改）
    const genderOptions = ['男', '女', '不提供'];

    // Checkbox 用的項目
    const fruitOptions = ['西瓜', '芒果'];

    // 轉門處理每個欄位的輸入用
    const handleFieldChange = function (e) {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;

        let newValue = value;
        // 從原本的狀態物件上拷貝出一個新物件
        // 在拷貝的物件上處理

        if (type === 'checkbox') {
            // toggle
            // 果目前這個值在陣列中 -> 移出陣列
            // 反之如果目前這個值 沒在 陣列中 -> 加入陣列
            newValue = fields[name].includes(value)
                ? fields[name].filter((v) => v !== value)
                : [...fields[name], value];
        }

        // 合併物件
        const updatedFields = { ...fields, [name]: newValue };

        // 設定回狀態
        setFields(updatedFields);
    };

    // 當表單檢查有不合法的訊息時會呼叫到
    const handleFormInvalid = function (e) {
        // 阻擋 form 的預設送出行為（錯誤泡泡訊息）
        e.preventDefault();

        const updatedFieldErrors = {
            ...fieldErrors,
            [e.target.name]: e.target.validationMessage,
        };

        // 設定回錯誤訊息狀態
        setFieldErrors(updatedFieldErrors);

        if (e.target.name === 'username') {
            usenameFieldRef.current.focus();
        }
    };

    // 當整個表單有更動時會觸發
    // 認定使用者輸入某個欄位（更正某個有錯誤的欄位）
    // 清空某個欄位錯誤訊息
    const handleFormChange = function (e) {
        const name = e.target.name;
        // 使用解構賦值拷貝物件（只會拷貝第一層）
        const updatedFieldErrors =
            name === 'password' || name === 'confirmPassword'
                ? {
                      ...fieldErrors,
                      password: '',
                      confirmPassword: '',
                  }
                : {
                      ...fieldErrors,
                      [name]: '',
                  };
        // 設定回錯誤訊息狀態
        setFieldErrors(updatedFieldErrors);
    };

    const handleSubmit = function (e) {
        // 阻擋 form 的預設送出行為
        e.preventDefault();

        // 利用 FormData 獲取個欄位的值（另一種得到表單值的方式）
        // 注意：FormData 是利用個欄位的 name 屬性
        const formData = new FormData(e.target);
        console.log(formData.get('username'));
        console.log(formData.get('email'));
        console.log(formData.get('password'));
        console.log(formData.get('gender'));

        // 獲取同名稱的 checkbox
        console.log(formData.getAll('likeList'));

        // 做客製化驗證
        if (formData.get('password') !== formData.get('confirmPassword')) {
            // 設定錯誤的訊息
            const updatedFieldErrors = {
                ...fieldErrors,
                password: '密碼與確認密碼欄位輸入值不相同',
                confirmPassword: '密碼與確認密碼欄位輸入值不相同',
            };

            setFieldErrors(updatedFieldErrors);

            // 檢查到錯誤，不送出到伺服器
            return;
        }

        // 驗證成功，用 fetch 或 ajax 送到伺服器
    };
    return (
        <>
            <h1>HTML 5 表單驗證</h1>
            <form
                onSubmit={handleSubmit}
                onInvalid={handleFormInvalid}
                onChange={handleFormChange}
            >
                <label>Account</label>
                <input
                    type="text"
                    value={fields.username}
                    name="username"
                    onChange={handleFieldChange}
                    required
                />
                {/* 如果有錯誤訊息，呈現出來 */}
                {fieldErrors.username !== '' && (
                    <div className="error">{fieldErrors.username}</div>
                )}
                <br />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleFieldChange}
                    required
                />
                {/* 如果有錯誤訊息，呈現出來 */}
                {fieldErrors.email !== '' && (
                    <div className="error">{fieldErrors.email}</div>
                )}
                <br />
                <label>Password</label>
                <input
                    type="text"
                    name="password"
                    value={fields.password}
                    onChange={handleFieldChange}
                    required
                    minLength="6"
                />
                {/* 如果有錯誤訊息，呈現出來 (內聯 if)*/}
                {fieldErrors.password !== '' && (
                    <div className="error">{fieldErrors.password}</div>
                )}
                <br />
                <label htmlFor="">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={fields.confirmPassword}
                    onChange={handleFieldChange}
                    required
                    minLength="6"
                />
                {/* 如果有錯誤訊息，呈現出來 */}
                {fieldErrors.confirmPassword !== '' && (
                    <div className="error">{fieldErrors.confirmPassword}</div>
                )}
                <br />
                <label htmlFor="">性別</label>
                {genderOptions.map((v, i) => {
                    return (
                        <RadioButton
                            key={i}
                            name="gender"
                            value={v}
                            checkedValue={fieldErrors.gender}
                            handleFieldChange={handleFieldChange}
                            required
                        />
                    );
                })}
                {fieldErrors.gender !== '' && (
                    <div className="error">{fieldErrors.gender}</div>
                )}
                <br />
                <label htmlFor="">Favoriate Fruit</label>
                {fruitOptions.map((v, i) => {
                    return (
                        <CheckBox
                            key={i}
                            name="likeList"
                            value={v}
                            onChange={handleFieldChange}
                            checked={fields.likeList.includes(v)}
                        />
                    );
                })}
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default App;
