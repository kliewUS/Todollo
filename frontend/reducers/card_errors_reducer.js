import {RECEIVE_CARD, RECEIVE_CARD_ERRORS} from '../actions/board_actions';

const cardErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CARD_ERRORS:
            return Object.assign([], action.errors); 
        case RECEIVE_CARD:
            return [];
        default:
            return state;
    }
};

export default cardErrorsReducer;