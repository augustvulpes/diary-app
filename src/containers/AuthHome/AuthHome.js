import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import classes from './AuthHome.module.css';
import NewPost from '../NewPost/NewPost';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';


class AuthHome extends Component {
    render() {
        let content = <Spinner />;

        if (!this.props.loading) {
            content = (
                <>
                    <h1>How about a new note?</h1>
                    <NewPost />
                </>
            );
        };

        let redirectToDiary = null;
        if (this.props.redirectPath) {
            redirectToDiary = <Redirect to={this.props.redirectPath} />;
        };

        return (
            <div className={classes.AuthHome}>
                {redirectToDiary}
                <div className={classes.Content}>
                    {content}
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loading: state.newPost.loading,
        redirectPath: state.newPost.pathToRedirect
    };
};

export default withRouter(connect(mapStateToProps, null)(AuthHome));