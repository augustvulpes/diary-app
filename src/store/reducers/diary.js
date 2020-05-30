import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../../shared/updateObject';

const initialState = {
    posts: null,
    error: null,
    loading: true,
    title: '',
    postContent: '',
    date: ''
}

const startFetchingPosts = (state) => {
    return updateObject(state, {loading: true, posts: false, error: false});
};

const storeFetchedPosts = (state, action) => {
    return updateObject(state, {posts: action.posts, loading: false});
};

const storeErrorInfo = (state, action) => {
    return updateObject(state, {error: action.error, loading: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_START:
            return startFetchingPosts(state);
        case actionTypes.FETCH_POSTS_SUCCESS:
            return storeFetchedPosts(state, action);
        case actionTypes.FETCH_POSTS_FAIL:
            return storeErrorInfo(state, action);
        default:
            return state;
    };
};

export default reducer;