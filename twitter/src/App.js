import React from "react";

import Login from "./pages/Login/Login";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import PProfile from "./pages/Profile/PProfile";

function App() {


  return (
    <Router>
      <div className="main">
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
