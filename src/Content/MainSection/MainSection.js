import React, { Component } from 'react';
import SearchForm from "./SearchForm";
import Heading from "./Heading";
import MessageList from "./MessageList";
import PageControls from "./PageControls";
import Footer from "./Footer";
export default class MainSection extends Component {

    render() {
        return (
            <section className="mainSection">
                <Heading/>
                <SearchForm/>
                <MessageList/>
                <PageControls/>
                <Footer/>
            </section>
        )
    }
}
