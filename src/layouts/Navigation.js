import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';
import logo from '../images/logo_firanroom.svg';

const list = [
    { name: 'home', path: '/', exact: true },
    { name: 'blog', path: '/blog' },
    { name: 'cv', path: '/cv' },
    { name: 'portfolio', path: '/portfolio' },
    { name: 'contact', path: '/contact' },
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <nav className="navigation">
            <ul>
                <img className="logo" src={logo} alt="Logo firanroom" />
                {menu}
            </ul>
            <ul>
                <li><NavLink to="/panel">admin panel</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;