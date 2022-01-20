import React, { useRef } from 'react';

function App(props) {
    const inputEl = useRef();

    return (
        <>
            {/* Ref 用 callback or string 是舊的寫法，下方才是新的寫法 */}
            <input type="text" ref={inputEl} />
            <button
                onClick={function () {
                    inputEl.current.focus();
                }}
            >
                Click me (focus)
            </button>

            <button
                onClick={function () {
                    // onMouseMove={function () {
                    inputEl.current.blur();
                }}
            >
                Click me (blur)
            </button>
        </>
    );
}

export default App;
