import {RECEIVE_LABEL, RECEIVE_LABEL_ERRORS} from '../actions/label_actions';

const labelErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LABEL_ERRORS:
            return Object.assign([], action.errors); 
        case RECEIVE_LABEL:
            return [];
        default:
            return state;
    }
};

export default labelErrorsReducer;