import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";

const RootReducer = combineReducers({
    entities: {},
    users: usersReducer,
    ui: {},
    errors: errorsReducer,
    session: sessionReducer
});

export default RootReducer;