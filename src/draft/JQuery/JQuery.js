import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

function JQuery(props) {
    const [total, setTotal] = useState(1);
    const titleEl = useRef(null);
    const buttonEl = useRef(null);
    // didMount
    // JQuery 的代碼要放在 componentdidMount 中或 click 或任何在生命週期頁面渲然完畢之後的階段裡
    useEffect(function () {
        $('#one').on('click', function () {
            console.log(this);
            alert(`Hello ${this.innerHTML}`);
        });
    }, []);

    // didUpdate
    // 由於 JQuery 事件是綁定 DOM2 級，所以如果綁在 componentdidUpdate 上，每次狀態更新後都會在加掛
    // 一個新的事件聆聽處理函數！！！
    useEffect(
        function () {
            $('#two').off('click');
            $('#two').on('click', function () {
                console.log(total);
                alert('Hello, ' + this.innerHTML);
                // setTotal(total + 1);
            });
        },
        [total]
    );

    useEffect(function () {
        console.log($(titleEl.current).text());
        $(buttonEl.current).off('click');
        $(buttonEl.current).on('click', () => {
            alert('Hello, ' + $(titleEl.current).text());
        });
    }, []);

    return (
        <>
            <h1 id="title">React</h1>
            <button id="one">click me</button>
            <button id="two">click me</button>
            <h1 ref={titleEl}>React</h1>
            <button ref={buttonEl}>click me</button>
        </>
    );
}

export default JQuery;
