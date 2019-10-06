import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer__container">
                <div className="footer__item footer__item--border">
                    <div className="footer__item--title">
                        <h4>firanroom.</h4>
                    </div>
                    <div className="footer__item--info">
                        <ul className="footer__list">
                            <li>home</li>
                            <li>blog</li>
                            <li>cv</li>
                            <li>portfolio</li>
                            <li>contact</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__item footer__item--border">
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
                <div className="footer__item footer__item--border">
                    <div className="footer__item--title">
                        <h4>service</h4>
                    </div>
                    <div className="footer__item--info">
                        <ul className="footer__list">
                            <li>terms</li>
                            <li>privacy</li>
                            <li>compliances</li>
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
            </div>
            <div className="footer__copyrighter">Copyright © 2019 Bartosz Buczkowski</div>
        </>
    );
}

export default Footer;