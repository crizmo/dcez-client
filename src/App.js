import * as React from "react";
import Card from "./lib/card";
import Doc from "./lib/doc";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Doc />} />
          <Route path="/card" element={<Card />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;