import {RECEIVE_BOARD_MEMBERS, RECEIVE_BOARD_MEMBER, REMOVE_BOARD_MEMBER} from '../actions/boardMembership_actions';
import {
    RECEIVE_BOARDS
  } from '../actions/board_actions';

const boardMembershipsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) { //All other cases are for showing the users that are a member of a specfic board.
      case RECEIVE_BOARD_MEMBERS: 
        return action.boardMembers
      case RECEIVE_BOARD_MEMBER:
        nextState[action.boardMember.id] = action.boardMember;
        return nextState;
      case REMOVE_BOARD_MEMBER:
        delete nextState[action.boardMemberId];
        return nextState;
        case RECEIVE_BOARDS: //For showing the current user's board memberships.
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