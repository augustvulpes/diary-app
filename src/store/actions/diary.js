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

export const fetchPosts = (token, userId) => {
    return dispatch => {
        dispatch(fetchPostsStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/notes.json' + queryParams)
            .then(res => {
                const fetchedPosts = [];
                for (let key in res.data) {
                    fetchedPosts.push({
                        ...res.data[key],
                        id: key
                    });
                };
                dispatch(fetchPostsSuccess(fetchedPosts));
            })
            .catch(err => {
                dispatch(fetchPostsFail(err));
            });
    };
};