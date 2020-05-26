import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        this.props.storeToDatabase(this.props.title, this.props.postContent);
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
        postContent: state.newPost.postContent
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveContent: (name, value) => dispatch(actions.saveContent(name, value)),
        getLocalContent: () => dispatch(actions.getLocalContent()),
        storeToDatabase: (title, postContent) => dispatch(actions.storeToDatabase(title, postContent))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);