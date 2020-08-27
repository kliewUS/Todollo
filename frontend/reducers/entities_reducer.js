import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import boardsReducer from "./boards_reducer";
import boardMembershipsReducer from "./board_memberships_reducer";
import userRosterReducer from "./userRoster_reducer";

const entitiesReducer = combineReducers({
  boards: boardsReducer,
  boardMemberships: boardMembershipsReducer,
  userRoster: userRosterReducer,
  users: usersReducer
});

export default entitiesReducer;