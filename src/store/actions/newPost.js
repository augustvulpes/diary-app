import axios from '../../axios-orders';

import * as actionTypes from './actionTypes';

export const saveContent = (name, value) => {
    localStorage.setItem(name, value);
    return {
        type: actionTypes.SAVE_CONTENT,
        name: name,
        value: value
    };
};

export const getLocalContent = () => {
    const title = localStorage.getItem('title');
    const postContent = localStorage.getItem('postContent');
    return {
        type: actionTypes.GET_LOCAL_CONTENT,
        title: title,
        postContent: postContent
    };
};

export const storeProcessStart = () => {
    return {
        type: actionTypes.STORE_START
    };
};

export const storeSuccess = () => {
    localStorage.setItem('title', '');
    localStorage.setItem('postContent', '');
    return {
        type: actionTypes.STORE_SUCCESS
    };
};

export const storeFail = (error) => {
    return {
        type: actionTypes.STORE_FAIL,
        error: error
    };
};

export const storeToDatabase = (title, postContent, userId, token) => {
    const note = {
        title: title,
        postContent: postContent,
        userId: userId,
        date: new Date()
    };
    
    return dispatch => {
        dispatch(storeProcessStart());
        axios.post('/notes.json?auth=' + token, note)
            .then(response => {
                dispatch(storeSuccess());
            })
            .catch(error => {
                dispatch(storeFail(error));
            });
    };
};

export const nullifyRedirectPath = () => {
    return {
        type: actionTypes.NULLIFY_REDIRECT
    };
};