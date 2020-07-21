import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Register from "./register";
import Signin from "./signin";

import './indexStyle.css';

class Index extends Component {
    render() {
        return (
          <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>

            <Route exact path="/" component={Register}>
              </Route>
              <Route path="/" component={Signin}>
              </Route>

        </div>
        </div>

        );
        }  
}

export default Index;