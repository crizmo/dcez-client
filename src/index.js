import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Card from "./lib/card";
import Doc from "./lib/doc";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Doc /> } />
        <Route path="card" element={ <Card /> } />
      </Routes>
    </BrowserRouter>
);
