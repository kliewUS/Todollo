import * as BoardAPIUtil from '../util/board_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";

export const receiveBoards = ({boards, boardMemberships}) => ({
    type: RECEIVE_BOARDS,
    boards,
    boardMemberships
});
export const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
});
export const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
});

export const receiveBoardErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
});


export const requestBoards = () => dispatch => {
    return BoardAPIUtil.fetchBoards()
        .then(payload => dispatch(receiveBoards(payload)), 
        err => dispatch(receiveBoardErrors(err.responseJSON))
        );
}

export const requestBoard = (boardId) => dispatch => {
    return BoardAPIUtil.fetchBoard(boardId)
        .then(board => dispatch(receiveBoard(board)), 
        err => dispatch(receiveBoardErrors(err.responseJSON))
        );
}

export const postBoard = (board) => dispatch => {
    return BoardAPIUtil.createBoard(board)
        .then(board => dispatch(receiveBoard(board)), 
        err => dispatch(receiveBoardErrors(err.responseJSON))
        );
}

export const patchBoard = (board) => dispatch => {
    return BoardAPIUtil.updateBoard(board)
        .then(board => dispatch(receiveBoard(board)), 
        err => dispatch(receiveBoardErrors(err.responseJSON))
        );
}

export const destroyBoard = (boardId) => dispatch => {
    return BoardAPIUtil.deleteBoard(boardId)
        .then(() => dispatch(removeBoard(boardId)), 
        err => dispatch(receiveBoardErrors(err.responseJSON))
        );
}