import React from "react";

import LeftSide from "./pages/Home/LeftSide";
import MiddleSide from "./pages/Home/MiddleSide";
import RightSide from "./pages/Home/RightSide";

function App() {
  return (
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
  );
}

export default App;
