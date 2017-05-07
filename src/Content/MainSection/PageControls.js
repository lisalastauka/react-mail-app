import React, { Component } from 'react';
export default class PageControls extends Component {

    render() {
        return (
            <div className="controlButtons">
                <a href="#" className="btn btn-default btn-prevNext">
                    <i className="icon-left-open-big"/>Previous</a>
                <a href="#" className="btn btn-default btn-prevNext">Next
                    <i className="icon-right-open-big"/></a>
            </div>
        )
    }
}
