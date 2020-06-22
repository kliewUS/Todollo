import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const createNewUser = formUser => dispatch => {
    return SessionUtil.signUp(formUser)
        .then(user => dispatch(receiveCurrentUser(user)), 
        err => dispatch(receiveSessionErrors(err.responseJSON)) );
}
export const login = formUser => dispatch => {
    return SessionUtil.login(formUser)
        .then(user => dispatch(receiveCurrentUser(user)), 
        err => dispatch(receiveSessionErrors(err.responseJSON)) );
}
export const logout = () => dispatch => {
    return SessionUtil.logout()
        .then(() => dispatch(logoutCurrentUser()), 
        err => dispatch(receiveSessionErrors(err.responseJSON)) );
}

