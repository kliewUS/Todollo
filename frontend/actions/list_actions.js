import * as ListAPIUtil from '../util/list_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";

export const receiveLists = (lists) => ({
    type: RECEIVE_LISTS,
    lists
});

export const receiveList = (list) => ({
    type: RECEIVE_LIST,
    list
});

export const removeList = (listId) => ({
    type: REMOVE_LIST,
    listId
});

export const receiveListErrors = (errors) => ({
    type: RECEIVE_LIST_ERRORS,
    errors
});

export const requestLists = () => dispatch => {
    return ListAPIUtil.fetchLists()
        .then(payload => dispatch(receiveLists(payload)), 
        err => dispatch(receiveListErrors(err.responseJSON))
        );
}

export const requestList = (listId) => dispatch => {
    return ListAPIUtil.fetchList(listId)
        .then(list => dispatch(receiveList(list)), 
        err => dispatch(receiveListErrors(err.responseJSON))
        );
}

export const postList = (list) => dispatch => {
    return ListAPIUtil.createList(list)
        .then(list => dispatch(receiveList(list)), 
        err => dispatch(receiveListErrors(err.responseJSON))
        );
}

export const patchList = (list) => dispatch => {
    return ListAPIUtil.updateList(list)
        .then(list => dispatch(receiveList(list)), 
        err => dispatch(receiveListErrors(err.responseJSON))
        );
}

export const destroyList = (listId) => dispatch => {
    return ListAPIUtil.deleteList(listId)
        .then(() => dispatch(removeList(listId)), 
        err => dispatch(receiveListErrors(err.responseJSON))
        );
}