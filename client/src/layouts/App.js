import React from "react";
import '../styles/App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <nav className="general-nav">
            {<Navigation />}
          </nav>
          {<Header />}
          <section className="page">
            {<Page />}
          </section>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
