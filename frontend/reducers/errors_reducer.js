import { combineReducers } from "redux";
import sessionErrorsReducer from './session_errors_reducer'
import boardErrorsReducer from "./board_errors_reducer";
import boardMembershipErrorsReducer from "./board_membership_errors_reducer";
import userRosterErrorsReducer from "./userRoster_errors_reducer";
import listErrorsReducer from "./list_errors_reducer"
import cardErrorsReducer from "./card_errors_reducer";
import commentErrorsReducer from "./comment_errors_reducer";

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  boardErrors: boardErrorsReducer,
  boardMembershipErrors: boardMembershipErrorsReducer,
  userRosterErrors: userRosterErrorsReducer,
  listErrors: listErrorsReducer,
  cardErrors: cardErrorsReducer,
  commentErrors: commentErrorsReducer
});

export default errorsReducer;