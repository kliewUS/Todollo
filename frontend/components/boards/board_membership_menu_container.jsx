import React from "react";
import {connect} from 'react-redux';
import BoardMembershipMenu from './board_membership_menu';
import { withRouter } from 'react-router-dom';
import { postBoardMember, receiveBoardMemberErrors } from "../../actions/boardMembership_actions";
// import { requestUsers } from "../../actions/userRoster_actions";

const mapStateToProps = (state) => ({
    userRoster: Object.values(state.entities.userRoster),
    board: Object.values(state.entities.boards),
    errors: state.errors.boardMembershipErrors
});

const mapDispatchToProps = (dispatch) => ({
    postBoardMember: boardMember => dispatch(postBoardMember(boardMember)),
    clearBoardMemberErrors: () => dispatch(receiveBoardMemberErrors([]))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardMembershipMenu));