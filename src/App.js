import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Diary from './containers/Diary/Diary';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import AuthHome from './containers/AuthHome/AuthHome';
import Info from './containers/Info/Info';
import * as actions from './store/actions/index';
import OpenedNote from './containers/OpenedNote/OpenedNote';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignin();
    this.props.retrieveOpenedNote();
  };
  
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/signup" component={Auth} />
        <Route path="/signin" render={() => <Auth signin />} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={AuthHome} />
          <Route path="/info" component={Info} />
          <Route path="/diary" component={Diary} />
          <Route path="/note" component={OpenedNote} />
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
    onTryAutoSignin: () => dispatch(actions.autoSignin()),
    retrieveOpenedNote: () => dispatch(actions.retrieveStoredNote())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));