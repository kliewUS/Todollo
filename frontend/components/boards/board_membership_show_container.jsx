import React from "react";
import {connect} from 'react-redux';
import BoardMembershipShow from './board_membership_show';
import { withRouter } from 'react-router-dom';
import { destroyBoardMember, requestBoardMember } from "../../actions/boardMembership_actions";
import {requestUser} from "../../actions/userRoster_actions";

const mapStateToProps = (state) => ({
    userProfile: Object.values(state.entities.userRoster),
    boardMembership: Object.values(state.entities.boardMemberships),
    errors: state.errors.boardMembershipErrors
});

const mapDispatchToProps = (dispatch) => ({
    destroyBoardMember: boardMemberId => dispatch(destroyBoardMember(boardMemberId)),
    requestBoardMember: (boardMemberId) => dispatch(requestBoardMember(boardMemberId)),
    requestUser: (userId) => dispatch(requestUser(userId)),
    clearBoardMemberErrors: () => dispatch(receiveBoardMemberErrors([]))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardMembershipShow));