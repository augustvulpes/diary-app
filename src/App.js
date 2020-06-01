import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Info from './containers/Info/Info';
import * as actions from './store/actions/index';

const asyncInfo = asyncComponent(() => {
  return import('./containers/Info/Info');
});

const asyncDiary = asyncComponent(() => {
  return import('./containers/Diary/Diary');
});

const asyncNote = asyncComponent(() => {
  return import('./containers/OpenedNote/OpenedNote');
});

const asyncAuthHome = asyncComponent(() => {
  return import('./containers/AuthHome/AuthHome');
});

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
          <Route path="/" exact component={asyncAuthHome} />
          <Route path="/info" component={asyncInfo} />
          <Route path="/diary" component={asyncDiary} />
          <Route path="/note" component={asyncNote} />
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