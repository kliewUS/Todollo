import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {receiveCurrentUser, logoutCurrentUser, receiveErrors, createNewUser, loginUser, logoutUser} from './actions/session_actions';
import {signUp, login, logout} from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
      const preloadedState = {
        users: { [window.currentUser.id]: window.currentUser },
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

});

window.receiveCurrentUser = receiveCurrentUser;
window.logoutCurrentUser = logoutCurrentUser;
window.receiveErrors = receiveErrors;

window.createNewUser = createNewUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;

window.signUp = signUp;
window.login = login;
window.logout = logout;