import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import classes from './Diary.module.css';
import * as actions from '../../store/actions/index';
import DiaryPost from '../../components/DiaryPost/DiaryPost';
import Spinner from '../../components/UI/Spinner/Spinner';


class Diary extends Component {
    componentDidMount() {
        this.props.nullifyRedirectPath();
        this.props.fetchPosts(this.props.token, this.props.userId);
    };
    
    render() {
        let posts = <Spinner />;
        if (!this.props.loading) {
            if (this.props.error) {
                posts = <p>{this.props.error.message}</p>;
            } else if (!this.props.posts[0]) {
                posts = <h1 className={classes.Warning}>It seems like you haven't saved any note for now.<br/>
                You can do it in <NavLink to="/">New note</NavLink> page!</h1>;
            }else {
                const postsList = this.props.posts.map(post => {
                    const date = new Date(post.date);
                    const dateString = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
                    return <DiaryPost
                        title={post.title}
                        date={dateString}
                        postContent={post.postContent}
                        key={post.id} />
                });

                posts = (
                    <div className={classes.Wrapper}>
                        <div className={classes.DiaryList}>
                            {postsList}
                        </div>
                    </div>
                );
            };
        };
        
        return (
            <div className={classes.Diary}>
                {posts}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        posts: state.diary.posts,
        error: state.diary.error,
        loading: state.diary.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (token, userId) => dispatch(actions.fetchPosts(token, userId)),
        nullifyRedirectPath: () => dispatch(actions.nullifyRedirectPath())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Diary);