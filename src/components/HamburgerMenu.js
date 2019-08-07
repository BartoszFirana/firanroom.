import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/HamburgerMenu.css';
import HamburgerButton from './HamburgerButton';
import MobileLogo from '../components/MobileLogo';

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

        const list = [
            { name: 'home', path: '/', exact: true },
            { name: 'blog', path: '/blog' },
            { name: 'cv', path: '/cv' },
            { name: 'portfolio', path: '/portfolio' },
            { name: 'contact', path: '/contact' },
            { name: 'admin panel', path: '/panel' },
        ]

        const menu = list.map(item => (
            <li key={item.name} className="hamburger__menu--items">
                <NavLink to={item.path} exact={item.exact ? item.exact : false} onClick={this.handleClick.bind(this)}>{item.name}</NavLink>
            </li>
        ))

        return (
            <>
                <div className="topcontainer__mobile">
                    <MobileLogo toggle={this.state.toggle} />
                    <button className="hamburger__button" onClick={this.handleClick.bind(this)}>
                        <HamburgerButton toggle={this.state.toggle} />
                    </button>
                </div>
                {this.state.toggle ? (
                    <div className="hamburger__menu--container">
                        <ul className="hamburger__menu--list">
                            {menu}
                        </ul>
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