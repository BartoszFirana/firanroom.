import React, { Component } from 'react';
import '../styles/Technology.css'

class Technology extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="technology__item">
                <div className="technology__item--header">
                    <img src={this.props.logo} className="technology__item--logo"></img>
                </div>
                <div className="technology__item--content">
                    <h4>{this.props.title}</h4>
                    <p className="technology__item--paragraph">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Technology;