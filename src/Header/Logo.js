import React, { Component } from 'react';
import logo from '../../public/logo.svg';

export default class Logo extends Component {

    render(){
        return (
            <div className="logoBlock">
                <a href="index.html"><img src={logo} className="App-logo" alt="logo" /></a>
                <span>Page title</span>
            </div>
        );
    }

}

