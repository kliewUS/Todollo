import {
    RECEIVE_LISTS,
    RECEIVE_LIST,
    REMOVE_LIST,
  } from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
      case RECEIVE_LISTS:
          return action.lists;
      case RECEIVE_LIST:
        nextState[action.list.id] = action.list;
        return nextState;
      case REMOVE_LIST: //Will need to check back at this case later.
        delete nextState[action.listId];
        return nextState;
      default:
        return state;
    }
  }
  
  export default listsReducer;