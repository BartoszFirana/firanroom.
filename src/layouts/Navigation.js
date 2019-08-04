import React, { Component } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';
import logo from '../images/logo_firanroom.svg';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 900 });
    }

    render() {
        const isDesktop = this.state.isDesktop;

        const list = [
            { name: 'home', path: '/', exact: true },
            { name: 'blog', path: '/blog' },
            { name: 'cv', path: '/cv' },
            { name: 'portfolio', path: '/portfolio' },
            { name: 'contact', path: '/contact' },
        ]

        const menu = list.map(item => (
            <li key={item.name}>
                <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
            </li>
        ))

        return (
            <>
                {isDesktop ? (
                    <nav className="navigation">
                        <ul>
                            <img className="logo" src={logo} alt="Logo firanroom" />
                            {menu}
                        </ul>
                        <ul>
                            <li><NavLink to="/panel">admin panel</NavLink></li>
                        </ul>
                    </nav>
                ) : (
                        <HamburgerMenu />
                    )
                }

            </>
        );
    }
}

export default Navigation;