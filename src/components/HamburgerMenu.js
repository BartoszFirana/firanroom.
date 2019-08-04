import React, { Component } from 'react';
import logo from '../images/logo_firanroom.svg';
import '../styles/HamburgerMenu.css';
import HamburgerButton from './HamburgerButton';

class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }

    handleClick() {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        return (
            <>
                <nav className="navigation">
                    <ul>
                        <img className="logo" src={logo} alt="Logo firanroom" />
                    </ul>
                    <ul>
                        <button className="hamburger__button" onClick={this.handleClick.bind(this)}>
                            <HamburgerButton toggle={this.state.toggle} />
                        </button>
                    </ul>
                </nav>
                {this.state.toggle ? (
                    <div className="hamburger__menu--background">
                        elo
                </div>
                ) : (
                        <></>
                    )
                }
            </>
        );
    }
}

export default HamburgerMenu;