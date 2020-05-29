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

export const storeToDatabase = (title, postContent, userId) => {
    const note = {
        title: title,
        postContent: postContent,
        userId: userId,
        date: new Date()
    };
    
    return dispatch => {
        axios.post('/notes.json', note)
            .then(response => {
                dispatch(storeSuccess());
            })
            .catch(error => {
                dispatch(storeFail(error.response.data.error));
            });
    };
};