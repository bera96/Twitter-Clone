import React from "react";

import Login from "./pages/Login/Login";
import { HashRouter as Router } from "react-router-dom";

// <Router>
// <div>
//   <Login></Login>
// </div>
// </Router>

import LeftSide from "./pages/Home/LeftSide";
import MiddleSide from "./pages/Home/MiddleSide";
import RightSide from "./pages/Home/RightSide";
import PProfile from "./pages/Profile/PProfile";

function App() {
  return (
    <div>
      <div className="home-page">
        <div className="left-side">
          <LeftSide />
        </div>
        <div className="middle-side">
          <MiddleSide />
        </div>
        <div className="right-side">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
