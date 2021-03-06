import {
    RECEIVE_CARDS,
    RECEIVE_CARD,
    REMOVE_CARD,
  } from '../actions/card_actions';

const cardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
      case RECEIVE_CARDS:
          return action.cards;
      case RECEIVE_CARD:
        nextState[action.card.id] = action.card;
        return nextState;
      case REMOVE_CARD: //Will need to check back at this case later.
        delete nextState[action.cardId];
        return nextState;
      default:
        return state;
    }
  }
  
  export default cardsReducer;