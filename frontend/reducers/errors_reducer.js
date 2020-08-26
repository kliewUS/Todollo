import { combineReducers } from "redux";
import sessionErrorsReducer from './session_errors_reducer'
import boardErrorsReducer from "./board_errors_reducer";
import boardMembershipErrorsReducer from "./board_membership_errors_reducer";

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  boardErrors: boardErrorsReducer,
  boardMembershipErrors: boardMembershipErrorsReducer
});

export default errorsReducer;