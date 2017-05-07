import React, { Component } from 'react';
import Logo from "./Logo";
import Profile from "./Profile";

export default class Header extends Component {

    render(){
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <Logo/>
                        <Profile/>
                    </div>
                </div>
            </header>
        );
    }

}

