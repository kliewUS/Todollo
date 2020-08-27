import * as BdMemberAPIUtil from '../util/boardMembership_util';

export const RECEIVE_BOARD_MEMBERS = 'RECEIVE_BOARDS_MEMBERS';
export const RECEIVE_BOARD_MEMBER = 'RECEIVE_BOARD_MEMBER';
export const REMOVE_BOARD_MEMBER = 'REMOVE_BOARD_MEMBER';
export const RECEIVE_BOARD_MEMBER_ERRORS = "RECEIVE_BOARD_MEMBER_ERRORS";

export const receiveBoardMembers = (boardMembers) => ({
    type: RECEIVE_BOARD_MEMBERS,
    boardMembers
});
export const receiveBoardMember = boardMember => ({
    type: RECEIVE_BOARD_MEMBER,
    boardMember
});
export const removeBoardMember = boardMemberId => ({
    type: REMOVE_BOARD_MEMBER,
    boardMemberId
});

export const receiveBoardMemberErrors = errors => ({
    type: RECEIVE_BOARD_MEMBER_ERRORS,
    errors
});

export const requestBoardMembers = () => dispatch => {
    return BdMemberAPIUtil.fetchBdMembers()
        .then(payload => dispatch(receiveBoardMembers(payload)), 
        err => dispatch(receiveBoardMemberErrors(err.responseJSON))
        );
}

export const requestBoardMember = (boardMemberId) => dispatch => {
    return BdMemberAPIUtil.fetchBdMember(boardMemberId)
        .then(boardMemberId => dispatch(receiveBoardMember(boardMemberId)), 
        err => dispatch(receiveBoardMemberErrors(err.responseJSON))
        );
}

export const postBoardMember = (boardMember) => dispatch => {
    return BdMemberAPIUtil.createBdMember(boardMember)
        .then(boardMember => dispatch(receiveBoardMember(boardMember)), 
        err => dispatch(receiveBoardMemberErrors(err.responseJSON))
        );
}

export const destroyBoardMember = (boardMemberId) => dispatch => {
    return BdMemberAPIUtil.deleteBdMember(boardMemberId)
        .then(() => dispatch(removeBoardMember(boardMemberId)), 
        err => dispatch(receiveBoardMemberErrors(err.responseJSON))
        );
}