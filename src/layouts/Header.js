import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import "../styles/Header.css"

import background from '../images/background.svg';
import firanaHeader from '../images/firanaHeader.svg';
import autoportret2 from '../images/autoportret2.svg';

const headerL = {
    flexBasis: "100vh",
}
const headerS = {
    flexBasis: "40vh",
}

const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <header style={headerL}>
                        <div className="hello-container">
                            <h1>Hello World,</h1>
                            <h3>my name is Bartek. Welcome on my own website</h3>
                            <NavLink to="/blog"><button className="layout__button">Firan Blog</button></NavLink>
                        </div>
                        <img className="firana" src={autoportret2} alt="firana" />
                        <img className="background" src={firanaHeader} alt="header"></img>
                    </header>
                )} />
                <Route path="/blog" render={() => (
                    <header style={headerS}>
                        <img src={background} alt="header3"></img>
                    </header>
                )} />
                <Route path="/cv" render={() => (
                    <header style={headerS}>
                        <img src={background} alt="header2"></img>
                    </header>
                )} />
                <Route path="/portfolio" render={() => (
                    <header style={headerS}>
                        <img src={background} alt="header3"></img>
                    </header>
                )} />
                <Route path="/contact" render={() => (
                    <header style={headerS}>
                        <img src={background} alt="header1"></img>
                    </header>
                )} />
                <Route path="/panel" render={() => (
                    <header style={headerS}>
                        <img src={background} alt="header2"></img>
                    </header>
                )} />
                <Route render={() => (
                    <header style={headerS}>
                        <img src={background} alt="header3"></img>
                    </header>
                )} />
            </Switch>
        </>
    );
}

export default Header;