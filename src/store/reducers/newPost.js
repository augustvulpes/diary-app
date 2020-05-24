import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/updateObject';

const initialState = {
    title: '',
    postContent: ''
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_CONTENT:
            return saveContent(state, action);
        case actionTypes.GET_LOCAL_CONTENT:
            return getContent(state, action);
        case actionTypes.STORE_SUCCESS:
            return {
                title: '',
                postContent: ''
            };
        case actionTypes.STORE_FAIL:
            return state;
        default:
            return state;
    };
};

export default reducer;