import React, { Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header title="Image Viewer" showHomePage="home"></Header>
        <p>Home Page</p>
      </div>
    );
  }
}

export default Home;