import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/updateObject';

const initialState = {
    title: '',
    postContent: '',
    error: null
};

const saveContent = (state, action) => {
    return updateObject(state, {
        [action.name]: action.value
    });
};

const getContent = (state, action) => {
    return updateObject(state, {
        title: action.title,
        postContent: action.postContent
    });
};

const clearPost = (state) => {
    return updateObject(state, {
        title: '',
        postContent: ''
    });
};

const storeErrorInfo = (state, action) => {
    return updateObject(state, {error: action.error})
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_CONTENT:
            return saveContent(state, action);
        case actionTypes.GET_LOCAL_CONTENT:
            return getContent(state, action);
        case actionTypes.STORE_SUCCESS:
            return clearPost(state);
        case actionTypes.STORE_FAIL:
            return storeErrorInfo(state, action);
        default:
            return state;
    };
};

export default reducer;