import React from 'react';
import '../styles/Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer__container">
                <div className="footer__item">
                    <div className="footer__item--title">
                        <h4>firanroom.</h4>
                    </div>
                    <div className="footer__item--info">
                        <ul className="footer__list">
                            <li><NavLink to="/home">home</NavLink></li>
                            <li><NavLink to="/blog">blog</NavLink></li>
                            <li><NavLink to="/cv">cv</NavLink></li>
                            <li><NavLink to="/portfolio">portfolio</NavLink></li>
                            <li><NavLink to="/contact">contact</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__item--title">
                        <h4>technologies</h4>
                    </div>
                    <div className="footer__item--info">
                        <ul className="footer__list">
                            <li>JavaScript/ES6</li>
                            <li>React.JS</li>
                            <li>Node.JS</li>
                            <li>Express.JS</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__item--title">
                        <h4>social media</h4>
                    </div>
                    <div className="footer__item--info">
                        <ul className="footer__list">
                            <li>facebook</li>
                            <li>instagram</li>
                            <li>linked.in</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__item--title">
                        <h4>Bartosz Buczkowski</h4>
                    </div>
                    <div className="footer__item--info">
                        <ul className="footer__list">
                            <li>front-end developer</li>
                            <li>graphic designer</li>
                            <li>github</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul className="footer__service">
                <li>terms</li>
                <li>privacy</li>
                <li>compliances</li>
            </ul>
            <div className="footer__copyrighter">Copyright © 2019 Bartosz Buczkowski</div>
        </>
    );
}

export default Footer;