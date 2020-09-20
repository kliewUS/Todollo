import {
    RECEIVE_LABELS,
    RECEIVE_LABEL,
    REMOVE_LABEL,
  } from '../actions/label_actions';

const labelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
      case RECEIVE_LABELS:
          return action.labels;
      case RECEIVE_LABEL:
        nextState[action.label.id] = action.label;
        return nextState;
      case REMOVE_LABEL:
        delete nextState[action.labelId];
        return nextState;
      default:
        return state;
    }
  }
  
  export default labelsReducer;