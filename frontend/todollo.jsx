import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {fetchBdMembers, fetchBdMember, createBdMember, deleteBdMember} from './util/boardMembership_util';
import {fetchUsers, fetchUser} from './util/user_util';
import {receiveUsers, requestUsers, requestUser, receiveUser} from './actions/userRoster_actions';
import { receiveBoardMembers, receiveBoardMember, removeBoardMember, requestBoardMembers, requestBoardMember, postBoardMember, destroyBoardMember } from "./actions/boardMembership_actions";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
      const preloadedState = {
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }    

    ReactDOM.render(<Root store={store}/>, root);

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.fetchUsers = fetchUsers;
    window.fetchUser = fetchUser;

    window.receiveUsers = receiveUsers;
    window.receiveUser = receiveUser;
    
    window.requestUsers = requestUsers;
    window.requestUser = requestUser;

    window.fetchBdMembers = fetchBdMembers; //Works
    window.fetchBdMember = fetchBdMember; //Works
    window.createBdMember = createBdMember; //Works
    window.deleteBdMember = deleteBdMember; //Works
    
    window.receiveBoardMembers = receiveBoardMembers; //Work
    window.receiveBoardMember = receiveBoardMember; //Work
    window.removeBoardMember = removeBoardMember; //Work
    
    window.requestBoardMembers = requestBoardMembers; //Work
    window.requestBoardMember = requestBoardMember; //Work
    window.postBoardMember = postBoardMember; //Work
    window.destroyBoardMember = destroyBoardMember; //Work

});