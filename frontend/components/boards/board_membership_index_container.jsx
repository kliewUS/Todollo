import React from "react";
import {connect} from 'react-redux';
import BoardMembershipIndex from './board_membership_index';
import { withRouter } from 'react-router-dom';
import { destroyBoardMember, requestBoardMember } from "../../actions/boardMembership_actions";
import {requestUser} from "../../actions/userRoster_actions";

const mapStateToProps = (state) => ({
    userRoster: Object.values(state.entities.userRoster),
    boardMemberships: Object.values(state.entities.boardMemberships),
    board: Object.values(state.entities.boards)
    // errors: state.errors.boardMembershipErrors
});

const mapDispatchToProps = (dispatch) => ({
    // destroyBoardMember: boardMemberId => dispatch(destroyBoardMember(boardMemberId)),
    // requestBoardMember: (boardMemberId) => dispatch(requestBoardMember(boardMemberId)),
    // requestUser: (userId) => dispatch(requestUser(userId)),
    // clearBoardMemberErrors: () => dispatch(receiveBoardMemberErrors([]))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardMembershipIndex));