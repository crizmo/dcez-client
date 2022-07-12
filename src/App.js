import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./lib/card";
// import Doc from "./lib/doc";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={ <Doc /> } />
        <Route path="/card" element={ <Card /> } /> */}
        <Route path="/" element={ <Card/> } />
      </Routes>
    </div>
  );
}

export default App;