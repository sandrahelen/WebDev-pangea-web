import React from 'react';
import './App.css';
import Header from "./Components/Header";
import AlleLand from "./Components/AlleLand";
import MineLand from "./Components/MineLand";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Registrer from "./Components/Registrer";
import Login from "./Components/Login";

function App() {
  return (
      <Router>
        <div className="app">
        <Header/>
        <div className="main">
        <Switch>
            <Route path="/alle"><AlleLand/></Route>
            <Route path="/mine"><MineLand/></Route>
            <Route path="/registrer"><Registrer/></Route>
            <Route path="/login"><Login/></Route>
        </Switch>
        </div>
        </div>
      </Router>
  );
}

export default App;
