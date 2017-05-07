import React, { Component } from 'react';
import MainSection from "./MainSection/MainSection";
import SubMenu from "./SubMenu/SubMenu";
export default class Content extends Component {

    render() {
        return (
            <main className="container main">
                <SubMenu/>
                <MainSection/>
            </main>
        );
    }
}
