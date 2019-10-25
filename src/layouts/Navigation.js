import React, { Component } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';
import logo from '../images/logo_firanroom.svg';
import instagramlogo from '../images/instagramlogo.svg';
import linkedinlogo from '../images/linkedinlogo.svg';
import githublogo from '../images/githublogo.svg';

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
                            <li><a href="/"><img className="logo" src={logo} alt="Logo firanroom" /></a></li>
                            {menu}
                        </ul>
                        <ul>
                            <li><NavLink to="/panel">sign in</NavLink></li>
                            <li><a href="https://www.linkedin.com/in/bartosz-buczkowski-62a2bb17a/"><img className="media" src={linkedinlogo} alt="Logo linkedin" /></a></li>
                            <li><a href="/"><img className="media" src={instagramlogo} alt="Logo instagram" /></a></li>
                            <li><a href="https://github.com/BartoszFirana"><img className="media" src={githublogo} alt="Logo github" /></a></li>
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