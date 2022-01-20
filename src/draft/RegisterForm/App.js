import React, { useState, useRef } from 'react';
import './App.css';

// - 欄位樣式套用css類別: 不合法(.is-invalid)  合法(.is-valid)
// - 錯誤(不合法)訊息css類別: .invalid-feedback
// - 成功(合法)訊息css類別: .valid-feedback

function App(props) {
    // gender 狀態
    const genderOptions = ['Male', 'Female'];
    // local 狀態
    const localOptions = [
        'Uzbekistan',
        'Russia',
        'United States',
        'India',
        'Afganistan',
    ];
    // input 欄位狀態勾子
    const { field, setField } = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        password: '',
    });

    // input 錯誤狀態勾子
    const { error, setError } = useState({
        name: '',
        email: '',
        gender: '',
        local: '',
        password: '',
    });
    // ref 勾子？
    const fieldRef = useRef();

    // 處理錯誤狀態（HTML5 的表單驗證）
    function handleFormInvalid(e) {
        const pname = e.target.name;
        const pvalue = e.target.value;
        let updatedError = {};

        switch (pname) {
            case 'email':
                updatedError = {
                    ...error,
                    [pname]: e.target.validationMessage,
                };
                break;
            case 'password':
                updatedError = {
                    ...error,
                    [pname]: e.target.validationMessage,
                };
                break;
            default:
                // 沒有錯誤
                return;
        }

        setError(updatedError);
        fieldRef.current.focus();
    }

    // assign name
    return (
        <>
            <div className="container">
                <br />
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header">
                                <a
                                    href=""
                                    className="float-right btn btn-outline-primary mt-1"
                                >
                                    Log in
                                </a>
                                <h4 className="card-title mt-2">Sign up</h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    {/* name */}
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>First name </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                // placeholder=""
                                            />
                                        </div>
                                        <div className="col form-group">
                                            <label>Last name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                placeholder=" "
                                            />
                                        </div>
                                    </div>
                                    {/* email */}
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input
                                            type="email"
                                            className="email"
                                            placeholder=""
                                        />
                                        <small className="form-text text-muted">
                                            We'll never share your email with
                                            anyone else.
                                        </small>
                                    </div>
                                    {/* gender */}
                                    <div className="form-group">
                                        <label className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                value="option1"
                                            />
                                            <span className="form-check-label">
                                                {' '}
                                                Male{' '}
                                            </span>
                                        </label>
                                        <label className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                value="option2"
                                            />
                                            <span className="form-check-label">
                                                {' '}
                                                Female
                                            </span>
                                        </label>
                                    </div>
                                    {/* local */}
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Country</label>
                                            <select
                                                id="inputState"
                                                className="form-control"
                                            >
                                                <option> Choose...</option>
                                                <option>Uzbekistan</option>
                                                <option>Russia</option>
                                                <option selected="">
                                                    United States
                                                </option>
                                                <option>India</option>
                                                <option>Afganistan</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* password */}
                                    <div className="form-group">
                                        <label>Create password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block"
                                        >
                                            Register
                                        </button>
                                    </div>
                                    <small className="text-muted">
                                        By clicking the 'Sign Up' button, you
                                        confirm that you accept our <br /> Terms
                                        of use and Privacy Policy.
                                    </small>
                                </form>
                            </article>
                            <div className="border-top card-body text-center">
                                Have an account? <a href="">Log In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
