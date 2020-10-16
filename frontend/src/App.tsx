import React from 'react';
import './App.css';
import Header from "./Components/Header";
import AlleLand from "./Components/AlleLand";
import MineLand from "./Components/MineLand";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="app">
        <Header/>
        <Switch>
            <Route path="/alle"><AlleLand/></Route>
            <Route path="/mine"><MineLand/></Route>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
