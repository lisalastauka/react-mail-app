import React, { Component } from 'react';
export default class SubMenu extends Component {

    render() {
        return (
            <aside className="submenu">

                <section className="submenuSection">
                    <h4 className="submenuCategory">Labels</h4>
                    <ul className="nav">
                        <li><a href="#" title="Submenu" className="active">Inbox</a></li>
                        <li><a href="#" title="Submenu">Starred</a></li>
                        <li><a href="#" title="Submenu">Sent Mail</a></li>
                        <li><a href="#" title="Submenu">Drafts</a></li>
                    </ul>
                </section>

                <section className="submenuSection">
                    <h4 className="submenuCategory">More</h4>
                    <ul className="nav">
                        <li><a href="#" title="Submenu">Important</a></li>
                        <li><a href="#" title="Submenu">Circles</a></li>
                        <li><a href="#" title="Submenu">All Mail</a></li>
                        <li><a href="#" title="Submenu">Trash</a></li>
                        <li><a href="#" title="Submenu">Spam</a></li>
                    </ul>
                </section>
                <section className="submenuSection">
                    <h4 className="submenuCategory">Categories</h4>
                    <ul className="nav">
                        <li><a href="#" title="Submenu" className="active">Notes</a></li>
                        <li><a href="#" title="Submenu">Personal</a></li>
                        <li><a href="#" title="Submenu">Travel</a></li>
                        <li><a href="#" title="Submenu">Chats</a></li>
                    </ul>
                </section>

            </aside>
        )
    }
}
