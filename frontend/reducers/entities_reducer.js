import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import boardsReducer from "./boards_reducer";
import boardMembershipsReducer from "./board_memberships_reducer";
import userRosterReducer from "./userRoster_reducer";
import listsReducer from "./lists_reducer";
import cardsReducer from "./cards_reducer";
import commentsReducer from "./comments_reducer";

const entitiesReducer = combineReducers({
  boards: boardsReducer,
  boardMemberships: boardMembershipsReducer,
  userRoster: userRosterReducer,
  lists: listsReducer,
  cards: cardsReducer,
  users: usersReducer,
  comments: commentsReducer
});

export default entitiesReducer;