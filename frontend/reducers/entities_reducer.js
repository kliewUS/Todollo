import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import boardsReducer from "./boards_reducer";
import boardMembershipsReducer from "./board_memberships_reducer";

const entitiesReducer = combineReducers({
  boards: boardsReducer,
  boardMemberships: boardMembershipsReducer,
  users: usersReducer
});

export default entitiesReducer;