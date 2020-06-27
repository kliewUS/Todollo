import * as BoardAPIUtil from '../util/board_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";

const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
});
const receiveBoard = event => ({
    type: RECEIVE_BOARD,
    event
});
const removeBoard = eventId => ({
    type: REMOVE_BOARD,
    eventId
});

export const receiveBoardErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
});


export const requestBoards = () => dispatch => {
    return BoardAPIUtil.fetchBoards()
        .then(boards => dispatch(receiveBoards(boards)));
}

export const requestBoard = (boardId) => dispatch => {
    return BoardAPIUtil.fetchBoard(boardId)
        .then(board => dispatch(receiveBoard(board)));
}

export const createBoard = (board) => dispatch => {
    return BoardAPIUtil.createBoard(board)
        .then(board => dispatch(receiveBoard(board)));
}

export const updateBoard = (board) => dispatch => {
    return BoardAPIUtil.updateBoard(board)
        .then(board => dispatch(receiveBoard(board)));
}

export const deleteBoard = (boardId) => dispatch => {
    return BoardAPIUtil.deleteBoard(boardId)
        .then(() => dispatch(removeBoard(boardId)));
}