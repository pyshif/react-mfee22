// import logo from './logo.svg';
// import './App.css';
import './styles/global.scss';
// import { useState } from 'react';

// ============================================================================
// Sass
// ============================================================================
function App() {
    return (
        <>
            <button className="btn btn-primary">Sass Test</button>
        </>
    );
}
// ============================================================================
// JQuery
// ============================================================================
// import JQuery from './draft/JQuery/JQuery';

// function App() {
//     return (
//         <>
//             <JQuery />
//         </>
//     );
// }
// ============================================================================
// Product Filter
// ============================================================================
// import ProductFilter from './draft/ProductFilter';

// function App() {
//     return (
//         <>
//             <ProductFilter />
//         </>
//     );
// }
// ============================================================================
// User List
// ============================================================================
// import UserList from './draft/UserList/UserList';

// function App() {
//     return (
//         <>
//             <UserList />
//         </>
//     );
// }

// ============================================================================
// React Life Cycle
// ============================================================================
// import CCLifeCycle from './draft/CCLifeCycle/CCLifeCycle';
// import FCLifeCycle from './draft/FCLifeCycle/FCLifeCycle';
// function App() {
//     const [live, setLive] = useState(true);

//     return (
//         <>
//             {/* {live && <CCLifeCycle />} */}
//             {live && <FCLifeCycle />}
//             <hr />
//             <button
//                 onClick={() => {
//                     setLive(!live);
//                 }}
//             >
//                 {live ? '移除 LifeCycle' : '加入 LifeCycle'}
//             </button>
//         </>
//     );
// }

export default App;
