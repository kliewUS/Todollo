import {RECEIVE_LIST, RECEIVE_LIST_ERRORS} from '../actions/list_actions';

const listErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIST_ERRORS:
            return Object.assign([], action.errors); 
        case RECEIVE_LIST:
            return [];
        default:
            return state;
    }
};

export default listErrorsReducer;