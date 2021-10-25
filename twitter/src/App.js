import React from "react";
import Login from "./pages/Login/Login";
import { HashRouter as Router,Switch,Route } from "react-router-dom";




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
  );
}

export default App;
