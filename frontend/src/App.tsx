import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Alle_land from "./Components/Alle_land";
import Mine_land from "./Components/Mine_land";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="app">
        <Header/>
        <Switch>
            <Route path="/alle"><Alle_land/></Route>
            <Route path="/mine"><Mine_land/></Route>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
