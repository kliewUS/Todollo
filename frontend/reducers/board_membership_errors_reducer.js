import {RECEIVE_BOARD_MEMBER, RECEIVE_BOARD_MEMBER_ERRORS} from '../actions/boardMembership_actions';

const boardMembershipErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARD_MEMBER_ERRORS:
            return Object.assign([], action.errors); 
        case RECEIVE_BOARD_MEMBER:
            return [];
        default:
            return state;
    }
};

export default boardMembershipErrorsReducer;