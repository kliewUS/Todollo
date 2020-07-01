import {
    RECEIVE_BOARDS
  } from '../actions/board_actions';

const boardMembershipsReducer = (state = {}, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state)
    switch (action.type) {
      case RECEIVE_BOARDS:
        if(!action.boardMemberships){
          return {};
        }else{
          return action.boardMemberships;
        }
      default:
        return state;
    }
  }
  
  export default boardMembershipsReducer;