import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Diary from './containers/Diary/Diary';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignin();
  };
  
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Auth} />
        <Route path="/signin" render={() => <Auth signin />} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/diary" component={Diary} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      );
    };

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignin: () => dispatch(actions.autoSignin())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));