import {RECEIVE_CARD_LABELS, RECEIVE_CARD_LABEL, REMOVE_CARD_LABEL} from '../actions/cardLabel_actions';
const cardLabelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) { //All other cases are for showing the users that are a member of a specfic board.
      case RECEIVE_CARD_LABELS: 
        return action.cardLabels
      case RECEIVE_CARD_LABEL:
        nextState[action.cardLabel.id] = action.cardLabel;
        return nextState;
      case REMOVE_CARD_LABEL:
        delete nextState[action.cardLabelId];
        return nextState;
      default:
        return state;
    }
  }
  
  export default cardLabelsReducer;