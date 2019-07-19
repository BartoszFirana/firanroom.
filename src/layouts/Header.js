import React from 'react';
import { Route, Switch } from 'react-router-dom';

import "../styles/Header.css"

import header1 from '../images/header1.jpg';
import header2 from '../images/header2.jpg';
import header3 from '../images/header3.jpg';
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
                            <h1 style={{ fontWeight: "bold", fontSize: 80 }}>Hello World,</h1>
                            <h3>my name is Bartek. Welcome on my own website</h3>
                            <button>about me</button>
                        </div>
                        <img className="firana" src={autoportret2} alt="firana" />
                        <img className="background" src={firanaHeader} alt="header"></img>
                    </header>
                )} />
                <Route path="/blog" render={() => (
                    <header style={headerS}>
                        <img src={header3} alt="header3"></img>
                    </header>
                )} />
                <Route path="/cv" render={() => (
                    <header style={headerS}>
                        <img src={header2} alt="header2"></img>
                    </header>
                )} />
                <Route path="/portfolio" render={() => (
                    <header style={headerS}>
                        <img src={header3} alt="header3"></img>
                    </header>
                )} />
                <Route path="/contact" render={() => (
                    <header style={headerS}>
                        <img src={header1} alt="header1"></img>
                    </header>
                )} />
                <Route path="/panel" render={() => (
                    <header style={headerS}>
                        <img src={header2} alt="header2"></img>
                    </header>
                )} />
                <Route render={() => (
                    <header style={headerS}>
                        <img src={header3} alt="header3"></img>
                    </header>
                )} />
            </Switch>
        </>
    );
}

export default Header;