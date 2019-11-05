import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import PanelPage from '../pages/PanelPage';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';


class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/blog" exact component={BlogPage} />
                    <Route path="/portfolio" exact component={PortfolioPage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/panel" exact component={PanelPage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route component={ErrorPage} />
                </Switch>
            </>
        )
    }
}

export default Page;