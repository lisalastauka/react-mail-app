import React, { Component } from 'react';

export default class Profile extends Component {

    render(){
        return (
            <div className="header-comp pull-right">

                <div className="dropdown">
                    <a className="dropdown-toggle dropdownMenu1" data-toggle="dropdown" aria-expanded="true" href="#"><span>New York</span><em className="icon-down-open"/></a>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Moscow</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Minsk</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Tokio</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Barcelona</a></li>
                    </ul>
                </div>

                <a href="#" className="btn btn-sm btn-header">
                    <em className="headerIcon icon-bell"/>
                </a>
                <a href="#" className="btn btn-sm btn-header">
                    <em className="headerIcon icon-mail"/>
                </a>
                <a href="#" className="profile"><span>User name</span><img src="images/profilePhoto.png" alt="img"/></a>
                <a href="#" className="btn btn-xs btn-header">
                    <em className="headerIcon icon-search"/>
                </a>
            </div>
        );
    }

}

