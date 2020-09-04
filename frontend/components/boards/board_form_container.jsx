import React from "react";
import {connect} from 'react-redux';
import BoardForm from "./board_form";
import { postBoard, receiveBoardErrors } from "../../actions/board_actions";
import { postBoardMember, receiveBoardMemberErrors } from "../../actions/boardMembership_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],    
    errors: state.errors.boardErrors,
    bdmErrors: state.errors.boardMembershipErrors
});

const mapDispatchToProps = (dispatch) => ({
    processBoard: formBoard => dispatch(postBoard(formBoard)),
    postBoardMember: boardMember => dispatch(postBoardMember(boardMember)),
    clearBoardErrors: () => dispatch(receiveBoardErrors([])),
    clearBoardMemberErrors: () => dispatch(receiveBoardMemberErrors([]))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardForm));