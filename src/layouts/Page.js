import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import CvPage from '../pages/CvPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import PanelPage from '../pages/PanelPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/blog" exact component={BlogPage} />
                <Route path="/cv" exact component={CvPage} />
                <Route path="/portfolio" exact component={PortfolioPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/panel" exact component={PanelPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;