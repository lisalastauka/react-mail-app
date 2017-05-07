import React, { Component } from 'react';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";

export default class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <Header/>
            <NavBar/>
            <Content/>
        </div>
    );
  }
}
