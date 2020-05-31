import axios from '../../axios-orders';

import * as actionTypes from './actionTypes';

export const getNoteContent = (title, postContent, date, id) => {
    localStorage.setItem('openedNoteTitle', title);
    localStorage.setItem('openedNotePostContent', postContent);
    localStorage.setItem('openedNoteDate', date);
    localStorage.setItem('openedNoteId', id);
    return {
        type: actionTypes.GET_NOTE_CONTENT,
        title: title,
        postContent: postContent,
        date: date,
        id: id
    };
};

export const changeNoteContent = (name, value) => {
    localStorage.setItem('openedNote' + name, value);
    return {
        type: actionTypes.CHANGE_NOTE_CONTENT,
        name: name,
        value: value
    };
};

export const retrieveStoredNote = () => {
    const title = localStorage.getItem('openedNoteTitle');
    const postContent = localStorage.getItem('openedNotePostContent');
    const date = localStorage.getItem('openedNoteDate');
    const id = localStorage.getItem('openedNoteId');
    return {
        type: actionTypes.RETRIEVE_STORED_NOTE,
        title: title,
        postContent: postContent,
        date: date,
        id: id
    };
};

export const deleteSuccess = () => {
    localStorage.removeItem('openedNoteTitle');
    localStorage.removeItem('openedNotePostContent');
    localStorage.removeItem('openedNoteDate');
    localStorage.removeItem('openedNoteId');
    return {
        type: actionTypes.DELETE_SUCCESS
    };
};

export const deleteFail = () => {
    return {
        type: actionTypes.DELETE_FAIL
    };
};

export const deleteNote = (id, token) => {
    return dispatch => {
        const queryParams = id + '.json?auth=' + token;
        axios.delete('/notes/' + queryParams)
            .then(response => {
                dispatch(deleteSuccess());
            })
            .catch(error => {
                console.log(error);
                dispatch(deleteFail(error));
            });
    };
};

export const saveChangesStart = () => {
    return {
        type: actionTypes.STORE_CHANGES_START
    };
};

export const saveChangesSuccess = () => {
    return {
        type: actionTypes.STORE_CHANGES_SUCCESS
    };
};

export const saveChangesFail = (error) => {
    return {
        type: actionTypes.STORE_CHANGES_FAIL,
        error: error
    };
};

export const saveChanges = (title, postContent, userId, token, id) => {
    return dispatch => {
        dispatch(saveChangesStart());
        const note = {
            title: title,
            postContent: postContent,
            userId: userId,
            date: new Date()
        };
        const queryParams = id + '.json?' + 'auth=' + token;
        axios.patch('/notes/' + queryParams, note)
            .then(response => {
                dispatch(saveChangesSuccess())
            })
            .catch(error => {
                dispatch(saveChangesFail(error))
            })
    };
};