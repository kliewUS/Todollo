import React from "react";
import {connect} from 'react-redux';
import BoardMembershipMenu from './board_membership_menu';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    userRoster: Object.values(state.entities.userRoster),
    board: state.entities.boards[ownProps.match.params.boardId],
    errors: state.errors.boardMembershipErrors
});

const mapDispatchToProps = (dispatch) => ({
    postBoardMember: boardMember => dispatch(postBoard(boardMember)),
    requestUsers: () => dispatch(receiveUsers()),
    clearBoardMemberErrors: () => dispatch(receiveBoardMemberErrors([]))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardMembershipMenu));