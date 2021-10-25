import React from "react";

import Login from "./pages/Login/Login";
import { HashRouter as Router,Switch,Route } from "react-router-dom";
import LeftSide from "./pages/Home/LeftSide";
import MiddleSide from "./pages/Home/MiddleSide";
import RightSide from "./pages/Home/RightSide";




function App() {

 
  return (
    
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login}/>
        
      </Switch>
      {/* <Login></Login> */}
    </div>
    </Router>

  )

  }

  // <div className="home-page">
  //     <div className="left-side">
  //       <LeftSide />
  //     </div>
  //     <div className="middle-side">
  //       <MiddleSide />
  //     </div>
  //     <div className="right-side">
  //       <RightSide />
  //     </div>
  //   </div>


export default App;
