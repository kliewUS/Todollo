import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {receiveCurrentUser, logoutCurrentUser, receiveSessionErrors, createNewUser, loginUser, logoutUser} from './actions/session_actions';
import {signUp, login, logout} from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store}/>, root);

    window.getState = store.getState;
    window.dispatch = store.dispatch;       

});

window.receiveCurrentUser = receiveCurrentUser;
window.logoutCurrentUser = logoutCurrentUser;
window.receiveSessionErrors = receiveSessionErrors;

window.createNewUser = createNewUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;

window.signUp = signUp;
window.login = login;
window.logout = logout;