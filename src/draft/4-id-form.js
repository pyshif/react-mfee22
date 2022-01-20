import React from 'react';

function App(props) {
    return (
        // 此寫法在 react 中無法達到j 元件重複利用，會導致 ID 衝突出錯
        <>
            {/* <label for=""></label> */}
            <input type="text" id="my-input" />
            <button
                onClick={function () {
                    document.getElementById('my-input').focus();
                }}
            >
                Click me (focus)
            </button>
            <button
                onClick={function () {
                    document.getElementById('my-input').blur();
                }}
            >
                Click me (blur)
            </button>
        </>
    );
}

export default App;
