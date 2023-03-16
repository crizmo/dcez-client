import * as React from "react";
import Card from "./lib/card";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Card />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;