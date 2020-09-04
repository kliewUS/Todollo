import React from "react";
import {connect} from 'react-redux';
import BoardIndex from "./board_index";
import { requestBoards } from "../../actions/board_actions";
// import { requestBoardMembers } from "../../actions/boardMembership_actions";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],        
        boards: Object.values(state.entities.boards),
        // boardMemberships: Object.values(state.entities.boardMemberships),     
        errors: state.errors.boardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestBoards: () => dispatch(requestBoards()),
    // requestBoardMembers: () => dispatch(requestBoardMembers()),
    openModal: () => dispatch(openModal('board-create-menu')),
    clearErrors: () => dispatch(receiveBoardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);