import {RECEIVE_CARD_LABEL, RECEIVE_CARD_LABEL_ERRORS} from '../actions/cardLabel_actions';

const cardLabelErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CARD_LABEL_ERRORS:
            return Object.assign([], action.errors); 
        case RECEIVE_CARD_LABEL:
            return [];
        default:
            return state;
    }
};

export default cardLabelErrorsReducer;