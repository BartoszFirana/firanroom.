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
                            <li><NavLink to="/panel">admin panel</NavLink></li>

                        </ul>
                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__item--title">
                        <h4>technologies</h4>
                    </div>
                    <div className="footer__item--info">
                        <ul className="footer__list">
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript/ES6</a></li>
                            <li><a href="https://reactjs.org">React.JS</a></li>
                            <li><a href="https://nodejs.org/en/">Node.JS</a></li>
                            <li><a href="https://expressjs.com">Express.JS</a></li>
                            <li><a href="https://www.mongodb.com">MongoDB</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__item--title">
                        <h4>social media</h4>
                    </div>
                    <div className="footer__item--info">
                        <ul className="footer__list">
                            <li><a href="https://facebook.com/">facebook</a></li>
                            <li><a href="https://instagram.com/">instagram</a></li>
                            <li><a href="https://www.linkedin.com/in/bartosz-buczkowski-62a2bb17a/">linked.in</a></li>
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
                            <li><a href="https://github.com/BartoszFirana">github</a></li>
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