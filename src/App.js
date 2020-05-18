import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Redirect to="/" /> */}
      </Switch>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  };
};

export default App;