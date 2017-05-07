import React, { Component } from 'react';
export default class MessageList extends Component {

    render() {
        return (

            <section className="postsContainer">

                <section className="media">
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object" src="images/member1.png" alt="userpic"/>
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="userInfo clearfix">
                            <span>User name</span>
                            <span className="rank">Pro</span>
                            <div className="commentsAndTime pull-right">
                                <a href="#"><i className="icon-chat"/>2</a>
                                <span><i className="icon-clock"/><time className="timeago"
                                                                       dateTime="2015-06-14T09:24:17Z"/></span>
                            </div>
                        </div>
                        <div className="itemName">
                            <a href="#" className="media-heading" title="Item title">Item title 1i</a>
                            <span className="status pull-right"/>
                        </div>
                        <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Nullam
                            ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
                            imperdiet nisi. Proin condimentum fermentum nunc. </p>
                        <div className="tags">
                            <button type="submit" className="btn btn-tag">
                                <i className="icon-tag"/>
                            </button>
                            <a href="#" className="tag" title="tag">tag1</a>
                            <a href="#" className="tag" title="tag">tag2</a>
                            <a href="#" className="tag" title="tag">tag3</a>
                        </div>
                    </div>
                </section>

                <section className="media">
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object" src="images/member2.png" alt="userpic"/>
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="userInfo clearfix">
                            <span>User name</span>
                            <span className="rank">Member</span>
                            <div className="commentsAndTime pull-right">
                                <a href="#"><i className="icon-chat"/>2</a>
                                <span><i className="icon-clock"/><time className="timeago"
                                                                       dateTime="2015-05-11T10:50:17Z"/></span>
                            </div>
                        </div>
                        <div className="itemName">
                            <a href="#" className="media-heading" title="Item title">Item title 1i</a>
                            <span className="status pull-right hidden"/>
                        </div>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
                            augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. </p>
                        <div className="tags">
                            <button type="submit" className="btn btn-tag">
                                <i className="icon-tag"/>
                            </button>
                            <a href="#" className="tag" title="tag">tag1</a>
                            <a href="#" className="tag" title="tag">tag2</a>
                            <a href="#" className="tag" title="tag">tag3</a>
                        </div>
                    </div>
                </section>

                <section className="media">
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object" src="images/member3.png" alt="userpic"/>
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="userInfo clearfix">
                            <span>User name</span>
                            <span className="rank">Member</span>
                            <div className="commentsAndTime pull-right">
                                <a href="#"><i className="icon-chat"/>2</a>
                                <span><i className="icon-clock"/><time className="timeago"
                                                                       dateTime="2012-06-14T09:24:17Z"/></span>
                            </div>
                        </div>
                        <div className="itemName clearfix">
                            <a href="#" className="media-heading" title="Item title">Item title 1i</a>
                            <span className="status pull-right hidden"/>
                        </div>
                        <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Nullam
                            ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
                            imperdiet nisi. Proin condimentum fermentum nunc. </p>
                        <div className="tags">
                            <button type="submit" className="btn btn-tag">
                                <i className="icon-tag"/>
                            </button>
                            <a href="#" className="tag" title="tag">tag1</a>
                            <a href="#" className="tag" title="tag">tag2</a>
                            <a href="#" className="tag" title="tag">tag3</a>
                        </div>
                    </div>
                </section>

                <section className="media">
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object" src="images/member4.png" alt="userpic"/>
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="userInfo clearfix">
                            <span>User name</span>
                            <span className="rank">Member</span>
                            <div className="commentsAndTime pull-right">
                                <a href="#"><i className="icon-chat"/>2</a>
                                <span><i className="icon-clock"/><time className="timeago"
                                                                       dateTime="2015-06-16T15:30:17Z"/></span>
                            </div>
                        </div>
                        <div className="itemName">
                            <a href="#" className="media-heading" title="Item title">Item title 1i</a>
                            <span className="status pull-right hidden"/>
                        </div>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
                            augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. </p>
                        <div className="tags">
                            <button type="submit" className="btn btn-tag">
                                <i className="icon-tag"/>
                            </button>
                            <a href="#" className="tag" title="tag">tag1</a>
                            <a href="#" className="tag" title="tag">tag2</a>
                            <a href="#" className="tag" title="tag">tag3</a>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}
