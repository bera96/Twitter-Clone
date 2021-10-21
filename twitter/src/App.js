import React from "react";
import Login from "./pages/Login/Login";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Login></Login>
    </div>
    </Router>
  );
}

export default App;
