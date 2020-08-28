import * as UserAPIUtil from '../util/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});


export const requestUsers = () => dispatch => {
    return UserAPIUtil.fetchUsers()
        .then(payload => dispatch(receiveUsers(payload)), 
        err => dispatch(receiveUserErrors(err.responseJSON)));
}

export const requestUser = (userId) => dispatch => {
    return UserAPIUtil.fetchUser(userId)
        .then(userId => dispatch(receiveUser(userId)), 
        err => dispatch(receiveUserErrors(err.responseJSON)));
}

