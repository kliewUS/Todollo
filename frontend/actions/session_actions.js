import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const createNewUser = formUser => dispatch => {
    return SessionUtil.signUp(formUser)
        .then(user => dispatch(receiveCurrentUser(user)), 
        err => dispatch(receiveErrors(err.responseJSON)) );
}
export const loginUser = formUser => dispatch => {
    return SessionUtil.login(formUser)
        .then(user => dispatch(receiveCurrentUser(user)), 
        err => dispatch(receiveErrors(err.responseJSON)) );
}
export const logoutUser = () => dispatch => {
    return SessionUtil.logout()
        .then(() => dispatch(logoutCurrentUser()), 
        err => dispatch(receiveErrors(err.responseJSON)) );
}

