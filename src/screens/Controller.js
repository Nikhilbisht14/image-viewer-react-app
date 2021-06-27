import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import Profile from "./profile/Profile";

class Controller extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          {/* Router for login page */}
          <Route exact path="/" render={(props) => <Login {...props} />} />  

          {/* Router for Home page */}
          <Route path="/home" render={(props) => <Home {...props} />} />

          {/* Router for Profile page */}
          <Route path="/profile" render={(props) => <Profile {...props} />} />
        </div>
      </Router>
    );
  }
}

export default Controller;