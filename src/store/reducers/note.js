import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/updateObject';

const initialState = {
    title: '',
    postContent: '',
    date: '',
    id: null,
    loading: false,
    error: null
};

const storeNoteContent = (state, action) => {
    return updateObject(state, {
        title: action.title,
        postContent: action.postContent,
        date: action.date,
        id: action.id
    });
};

const changeContent = (state, action) => {
    return updateObject(state, {
        [action.name]: action.value
    });
};

const retrieveStoredNote = (state, action) => {
    return updateObject(state, {
        title: action.title,
        postContent: action.postContent,
        date: action.date,
        id: action.id
    });
};

const deleteSuccess = (state) => {
    return updateObject(state, {
        title: '',
        postContent: '',
        date: '',
        id: null
    });
};

const deleteFail = (state, action) => {
    return updateObject(state, {
        error: action.error
    });
};

const storeChangesStart = (state) => {
    return updateObject(state, {loading: true});
};

const storeChangesSuccess = (state) => {
    return updateObject(state, {loading: false});
};

const storeChangesFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const clearNoteContent = (state) => {
    return updateObject(state, {
        title: '',
        postContent: '',
        date: '',
        id: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_NOTE_CONTENT:
            return storeNoteContent(state, action);
        case actionTypes.CHANGE_NOTE_CONTENT:
            return changeContent(state, action);
        case actionTypes.RETRIEVE_STORED_NOTE:
            return retrieveStoredNote(state, action);
        case actionTypes.DELETE_SUCCESS:
            return deleteSuccess(state);
        case actionTypes.DELETE_FAIL:
            return deleteFail(state, action);
        case actionTypes.STORE_CHANGES_START:
            return storeChangesStart(state);
        case actionTypes.STORE_CHANGES_SUCCESS:
            return storeChangesSuccess(state);
        case actionTypes.STORE_CHANGES_FAIL:
            return storeChangesFail(state, action);
        case actionTypes.CLEAR_NOTE_CONTENT:
            return clearNoteContent(state);
        default:
            return state;
    };
};

export default reducer;