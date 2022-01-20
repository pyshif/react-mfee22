import React, { useEffect, useState, useRef } from 'react';

function FCLifeCycle(props) {
    const [total, setTotal] = useState(1);
    // 模擬 componentDidMount
    // componentDidUpdate 也會執行一次
    useEffect(() => {
        console.log('模擬 componentDidMount');
        // 此處可以放一些跟伺服器要資料的操作
    }, []);

    // 模擬 componentDidUpdate
    // 和類別型元件不同，函數型元件一加載後就會直接觸發 didMount、和 didUpdate 各一次
    // 由於上述原因 掛載時 didUpdate 也會執行一次，所以如果要避免掛載階段就 didUpdate 需要做流程控制
    useEffect(() => {
        console.log('模擬 componentDitUpdate, total = ', total);
    }, [total]);

    // 100% 模擬 componentDidUpdate
    // sol 1: 初始值解法（比較不好，有可能回到初始值）
    // sol 2: 用另一個勾子幫忙（useRef）
    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            console.log('100% 模擬 componentDidUpdate, total = ', total);
        } else {
            didMountRef = true;
        }
    }, [total]);

    // 模擬 componentWillUnMount
    useEffect(() => {
        console.log('模擬 componentWillUnMount 1');
        // 為什麼回傳一個箭頭函數就可以模擬 componentWillUnMount
        // 函數式編程？
        return () => {
            console.log('模擬 componentWillUnMount 2');
        };
    }, []);

    // 只要這個元件內容有被 react 讀到或是 render 就會執行 (一般情況下不建議使用)
    useEffect(() => {
        console.log('只要這個元件內容有被 react 讀到或是 render 就會執行');
    });

    // 回傳
    return (
        <>
            {console.log('render')}
            <h1
                onClick={() => {
                    setTotal(total + 1);
                }}
            >
                {total}
            </h1>
        </>
    );
}

export default FCLifeCycle;
