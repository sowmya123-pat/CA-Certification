import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Index from "./login/index";
import Mainpage from './landpage/mainpage';
import Main from './form/main';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router> 
      <Route exact path ="/" component= {Index}>
      </Route> 
        
      <Route path ="/sign-in" component= {Index}>
      </Route>
      
      <Route exact path ="/mainpage" component= {Main}>
      </Route>
      <Route exact path ="/project" component= {Mainpage}>
      </Route>
    </Router>
    );
  }
}

export default App;