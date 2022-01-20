import React, { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
// React 引入時會自動把 JSON 字串轉成 物件
import rowData from './user.json';
import './UserList.css';

function UserList(props) {
    // 狀態 State
    const [loading, setLoading] = useState(false);
    // 原始資料 (記錄)
    const [users, setUsers] = useState([]);
    // 呈現用，用來篩選排序
    const [usersDisplay, setUsersDisplay] = useState([]);
    const [keyword, setKeyword] = useState('');

    async function fetchUser() {
        try {
            setLoading(true);
            // 接收到資料（promise）
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            // 資料轉換（promise）
            const data = await response.json();
            setUsers(data);
            setUsersDisplay(data);
            setLoading(false);
        } catch (e) {
            // 輸出錯誤
            // ...
            // 改回 loading 狀態
            setLoading(false);
        }
    }

    async function searchUser() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users?name=${keyword}`
            );
            const data = awiat response.json();
            setUsers(data);
            setUsersDisplay(data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    }

    // async function SearchUser() {
    //     setLoading(true);
    //     if (keyword === '') {
    //         setUsersDisplay(users);
    //         return;
    //     }

    //     if (keyword.length < 3) {
    //         return;
    //     }

    //     const newUsers = users.filter((v, i) => v.name.includes(keyword));

    //     setUsersDisplay(newUsers);
    // }

    // didMount 加載
    useEffect(fetchUser, []);
    // useEffect(() => {
    //     // 開啟載入指示器
    //     setLoading(true);
    //     // 載入資料 (網路請求)
    //     setUsers(rowData);
    //     // 模擬資料載入完成 2 秒後關閉指示器
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, []);

    useEffect(
        function () {
            if (keyword === '') {
                setUsersDisplay(users);
                return;
            }

            if (keyword.length < 3) {
                return;
            }

            const newUsers = users.filter((v, i) => v.name.includes(keyword));

            setUsersDisplay(newUsers);
        },
        [keyword]
    );

    // 設定最大允許載入時間，n 秒後自動關掉 spinner (設定 loading 為 false)
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    }, [loading]);

    // didUpdate 更新

    // JSX 返回 元素物件？
    const spinner = (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );

    const userListTable = (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {usersDisplay.map(function (v, i) {
                    return (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            value={keyword}
                            className="form-control"
                            onChange={function (e) {
                                return setKeyword(e.target.value);
                            }}
                        />
                        <button
                            className="btn btn-success"
                            // onClick={function () {
                            //     // 回正
                            //     if (keyword === '') {
                            //         setUsersDisplay(users);
                            //         return;
                            //     }
                            //     // console.log(keyword);
                            //     // 更改物件狀態三步驟（建立、合併、替換）
                            //     const newUsers = users.filter((v, i) => {
                            //         return v.name.includes(keyword);
                            //     });

                            //     setUsersDisplay(newUsers);
                            // }}
                        >
                            search name
                        </button>
                        <hr />
                        <button
                            className="btn btn-danger m-2"
                            onClick={function () {
                                // 更改狀態（物件）三步驟（新建、合併、替換）
                                // 由於 Array.prototype.sort 會更動到原物件內容，所以先解構賦值出一個新的物件
                                const newUsers = [...users].sort(
                                    (a, b) => a.id > b.id
                                );

                                setUsersDisplay(newUsers);
                            }}
                        >
                            sort-id n-N
                        </button>
                        <button
                            className="btn btn-danger m-2"
                            onClick={function () {
                                const newUsers = [...users].sort(
                                    (a, b) => a.id < b.id
                                );
                                setUsersDisplay(newUsers);
                            }}
                        >
                            sort-id N-n
                        </button>
                        <button
                            className="btn btn-danger m-2"
                            onClick={function () {
                                const newUsers = [...users].sort((a, b) => {
                                    return a.name[0] > b.name[0];
                                });
                                setUsersDisplay(newUsers);
                            }}
                        >
                            sort-name a-z
                        </button>
                        <button
                            className="btn btn-danger m-2"
                            onClick={function () {
                                const newUsers = [...users].sort((a, b) => {
                                    return a.name[0] < b.name[0];
                                });
                                setUsersDisplay(newUsers);
                            }}
                        >
                            sort-name z-a
                        </button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? spinner : userListTable}
                </div>
            </div>
        </>
    );
}

export default UserList;
