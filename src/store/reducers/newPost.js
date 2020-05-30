import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/updateObject';

const initialState = {
    title: '',
    postContent: '',
    error: null,
    loading: false,
    pathToRedirect: null
};

const startStoreProcess = (state) => {
    return updateObject(state, {loading: true});
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

const storeSuccess = (state) => {
    return updateObject(state, {
        title: '',
        postContent: '',
        loading: false,
        pathToRedirect: '/diary'
    });
};

const storeErrorInfo = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const nullifyRedirectPath = (state) => {
    return updateObject(state, {pathToRedirect: null})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_CONTENT:
            return saveContent(state, action);
        case actionTypes.GET_LOCAL_CONTENT:
            return getContent(state, action);
        case actionTypes.STORE_START:
            return startStoreProcess(state);
        case actionTypes.STORE_SUCCESS:
            return storeSuccess(state);
        case actionTypes.STORE_FAIL:
            return storeErrorInfo(state, action);
        case actionTypes.NULLIFY_REDIRECT:
            return nullifyRedirectPath(state);
        default:
            return state;
    };
};

export default reducer;