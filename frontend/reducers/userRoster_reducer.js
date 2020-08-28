import {RECEIVE_USERS, RECEIVE_USER} from '../actions/userRoster_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    // debugger;    
    switch (action.type) {       
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            nextState[action.user.id] = action.user;
            return nextState;            
        default:
            return state;
    }
};
