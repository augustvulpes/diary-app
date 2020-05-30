import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './NewPost.module.css';
import * as actions from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';

class NewPost extends Component {
    componentDidMount() {
        this.props.getLocalContent();
    };

    updateValue = event => {
        this.props.saveContent(event.target.name, event.target.value);
    };

    checkButtonStatus = (title, postContent) => {
        if (!title || !postContent) {
            return false;
        } else {
            return true;
        };
    };

    submitHandler = event => {
        event.preventDefault();
        if (this.props.isAuthenticated) {
            this.props.storeToDatabase(this.props.title, this.props.postContent, this.props.userId, this.props.token);
        }else {
            this.props.history.push('/signup');
        };
    };

    render() {
        return (
            <div className={classes.NewPost}>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="title" placeholder="Title..." value={this.props.title} onChange={this.updateValue} />
                    <div className={classes.TextareaWrapper}>
                        <textarea  
                            name='postContent'
                            placeholder="Just start typing here..." 
                            value={this.props.postContent} 
                            onChange={this.updateValue} />
                    </div>
                    <Button disabled={!this.checkButtonStatus(this.props.title, this.props.postContent)}>
                        Continue</Button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        title: state.newPost.title,
        postContent: state.newPost.postContent,
        isAuthenticated: state.auth.token !== null,
        userId: state.auth.userId,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveContent: (name, value) => dispatch(actions.saveContent(name, value)),
        getLocalContent: () => dispatch(actions.getLocalContent()),
        storeToDatabase: (title, postContent, userId, token) => dispatch(actions.storeToDatabase(title, postContent, userId, token))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPost));