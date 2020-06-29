import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import boardsReducer from "./boards_reducer";

const entitiesReducer = combineReducers({
  boards: boardsReducer,
  users: usersReducer
});

export default entitiesReducer;