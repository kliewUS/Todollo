import * as UserAPIUtil from '../util/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});

export const requestUsers = () => dispatch => {
    return UserAPIUtil.fetchUsers()
        .then(payload => dispatch(receiveUsers(payload)));
}
