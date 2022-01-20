import React, { useState } from 'react';

function App() {
    // checkbox group state
    const [likeList, setLikeList] = useState(['西瓜', '芒果']);

    return (
        <>
            <h2>多個核取方塊</h2>
            <p>請選擇你最喜愛的水果：</p>
            <input
                type="checkbox"
                value="西瓜"
                checked={likeList.includes('西瓜')}
                onChange={function (e) {
                    if (likeList.includes(e.target.value)) {
                        setLikeList(
                            likeList.filter((s) => !(s === e.target.value))
                        );
                    } else {
                        setLikeList([...likeList, e.target.value]);
                    }
                }}
            />
            <label>西瓜</label>
            <br />
            <input
                type="checkbox"
                value="芒果"
                checked={likeList.includes('芒果')}
                onChange={function (e) {
                    if (likeList.includes(e.target.value)) {
                        setLikeList(
                            likeList.filter((s) => !(s === e.target.value))
                        );
                    } else {
                        setLikeList([...likeList, e.target.value]);
                    }
                }}
            />
            <label>芒果</label>
        </>
    );
}

export default App;
