import React from "react";

import Login from "./pages/Login/Login";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LeftSide from "./pages/Home/LeftSide";
import MiddleSide from "./pages/Home/MiddleSide";
import RightSide from "./pages/Home/RightSide";
import { SignUpForm } from "./pages/Login/Components";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";
import PProfile from "./pages/Profile/PProfile";

function App() {
  const { currentUser } = useSelector((state) => state.user);

  // console.log(currentUser)

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={PProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
