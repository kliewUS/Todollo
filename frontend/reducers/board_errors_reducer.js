import {RECEIVE_BOARD, RECEIVE_BOARD_ERRORS} from '../actions/board_actions';

const boardErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARD_ERRORS:
            return Object.assign([], action.errors); 
        case RECEIVE_BOARD:
            return [];
        default:
            return state;
    }
};

export default boardErrorsReducer;