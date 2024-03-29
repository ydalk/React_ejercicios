import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// import { CallbackHook } from './06memos/CallbackHook';
// import { Padre } from './07TareaMemo/Padre';
//import { MemoHook } from './06memos/MemoHook';
//import { FormCustomHook } from './02useEffect/FormCustomHook';
// import { MultipleCustomHook } from './03Example/MultipleCustomHook';
// import { FocusScreen } from './04useRef/FocusScreen';
// import { Layout } from './05useLayoutEffect/Layout';
//import { Memorize } from './06memos/Memorize';
//import { CounterApp } from './01useState/CounterApp';
//import { CounterCustomHook } from './01useState/CounterCustomHook';
//import { SimpleForm } from './02useEffect/SimpleForm';
// import './08useReducer/introReducer'
//import { TodoApp } from './08useReducer/TodoApp';
import { MainApp } from './09useContext/MainApp';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//Higer Order Component HOC (es un componente que recibe otros dentro de él)

  <BrowserRouter >
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

