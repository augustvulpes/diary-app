import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Diary.module.css';
import * as actions from '../../store/actions/index';
import DiaryPost from '../../components/DiaryPost/DiaryPost';
import Spinner from '../../components/UI/Spinner/Spinner';

class Diary extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    };
    
    render() {
        let posts = <Spinner />;
        if (!this.props.loading) {
            if (this.props.error) {
                posts = <p>{this.props.error.message}</p>
            } else {
                posts = this.props.posts.map(post => {
                    const date = new Date(post.date);
                    const dateString = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
                    return <DiaryPost
                        title={post.title}
                        date={dateString}
                        postContent={post.postContent} />
                });
            };
        };
        
        return (
            <div className={classes.Diary}>
                <div className={classes.Wrapper}>
                    <div className={classes.DiaryList}>
                        {posts}
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        posts: state.diary.posts,
        error: state.diary.error,
        loading: state.diary.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(actions.fetchPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Diary);