import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from 'react-router-dom';


import './index.scss';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// --- EXTEND  Ex00, Ex01, Ex02...
import {Ex00} from './components/Ex00';
import {Ex01} from './components/Ex01';
import {Ex02} from './components/Ex02';

// --- EXTEND  Ex00, Ex01, Ex02...
const arrOfNames = ['Ex00', 'Ex01', 'Ex02'];

// --- EXTEND  Ex00, Ex01, Ex02...
const arrOfComponents = [<Ex00 />, <Ex01 />, <Ex02 />];

const Switcher = () => {
  const [selected, setSelected] = React.useState(arrOfNames.length - 1);
  return (
    <div>
      <select value={selected} onChange={(e)=>setSelected(e.target.value)}>
        {arrOfNames.map(it => (<option key={it} value={arrOfNames.indexOf(it)}>{`${it}`}</option>))}
      </select>
      <div>
        {arrOfComponents[selected]}
      </div>
    </div>
  );
};

const App = () => {
    let element = useRoutes([
        { path: "/", element: <Switcher />},
        { path: "test", element: <div>test</div>}
    ]);
    return element;
}

root.render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>
);
