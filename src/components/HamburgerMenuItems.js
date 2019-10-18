import React, { Component } from 'react';
import linkedInLogo from '../images/linkedin.svg';
import gitHubLogo from '../images/github.svg';

class HamburgerMenuItems extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible"
    }

    render() {

        return (
            <>
                <footer className="hamburger__footer">
                    <p>Follow me on<br />linked.in and gitgub</p>
                    <img src={linkedInLogo} alt="LinkedIn Logo" />
                    <img src={gitHubLogo} alt="GitHub Logo" />
                    <p>firanroom.</p>
                </footer>
            </>
        );
    }
}

export default HamburgerMenuItems;