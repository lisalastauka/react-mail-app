import React, { Component } from 'react';
export default class Heading extends Component {

    render() {
        return (
            <div className="heading">
                <h1>Page title in</h1>
                <div className="dropdown">
                    <a className="dropdown-toggle dropdownMenu2" data-toggle="dropdown" aria-expanded="true"
                       href="#"><span>New York</span><i className="icon-down-open"/></a>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Moscow</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Minsk</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Tokio</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Barcelona</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
