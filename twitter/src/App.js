import React, { useEffect } from "react";

import Login from "./pages/Login/Login";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";


function App() {
  

  
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default App;
