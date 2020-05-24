import axios from '../../axios-orders';

import * as actionTypes from './actionTypes';

export const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_START
    };
};

export const fetchPostsSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts
    };
};

export const fetchPostsFail = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_FAIL,
        error: error
    };
};

export const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsStart());
        axios.get('./notes.json')
            .then(res => {
                const fetchedPosts = [];
                for (let key in res.data) {
                    fetchedPosts.push({
                        ...res.data[key],
                        id: key
                    });
                };
                console.log(res.data);
                dispatch(fetchPostsSuccess(fetchedPosts));
            })
            .catch(err => {
                dispatch(fetchPostsFail(err));
            });
    };
};