import {RECEIVE_USER, RECEIVE_USER_ERRORS} from '../actions/userRoster_actions';

const userRosterErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return Object.assign([], action.errors); 
        case RECEIVE_USER:
            return [];
        default:
            return state;
    }
};

export default userRosterErrorsReducer;