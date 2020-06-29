import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {fetchBoards, fetchBoard, createBoard, updateBoard, deleteBoard} from './util/board_util'
import {requestBoards, requestBoard, postBoard, patchBoard, destroyBoard, receiveBoards, receiveBoard, removeBoard} from './actions/board_actions'

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
    
    
    window.receiveBoards = receiveBoards;
    window.receiveBoard = receiveBoard;
    window.removeBoard = removeBoard;
    
    window.requestBoards = requestBoards;
    window.requestBoard = requestBoard;
    window.postBoard = postBoard;
    window.patchBoard = patchBoard;
    window.destroyBoard = destroyBoard;
    
    window.fetchBoards = fetchBoards;
    window.fetchBoard = fetchBoard;
    window.createBoard = createBoard;
    window.updateBoard = updateBoard;
    window.deleteBoard = deleteBoard;    

});