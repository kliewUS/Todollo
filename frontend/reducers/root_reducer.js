import { combineReducers } from 'redux';
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import entitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    ui: {},
    errors: errorsReducer,
    session: sessionReducer
});

export default RootReducer;