import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {receiveCurrentUser, logoutCurrentUser, receiveErrors, createNewUser, login, logout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store}/>, root);

    window.getState = store.getState;
    window.dispatch = store.dispatch;       

});

window.receiveCurrentUser = receiveCurrentUser;
window.logoutCurrentUser = logoutCurrentUser;
window.receiveErrors = receiveErrors;

window.createNewUser = createNewUser;
window.login = login;
window.logout = logout;