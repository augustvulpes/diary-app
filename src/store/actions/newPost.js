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
    localStorage.removeItem('title');
    localStorage.removeItem('postContent');
    alert(1);
    return {
        type: actionTypes.STORE_SUCCESS
    };
};

export const storeFail = () => {
    alert(0);
    return {
        type: actionTypes.STORE_FAIL
    };
};

export const storeToDatabase = (title, postContent) => {
    const note = {
        title: title,
        postContent: postContent,
        date: new Date()
    };
    
    return dispatch => {
        axios.post('/notes.json', note)
            .then(response => {
                dispatch(storeSuccess());
            })
            .catch(error => {
                dispatch(storeFail());
            });
    };
};