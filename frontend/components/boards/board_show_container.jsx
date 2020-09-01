import React from "react";
import {connect} from 'react-redux';
import BoardShow from "./board_show";
import { requestBoard, patchBoard, destroyBoard } from "../../actions/board_actions";
import { requestBoardMembers } from "../../actions/boardMembership_actions";
import { requestUsers } from "../../actions/userRoster_actions";
import { openModal } from '../../actions/modal_actions';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const defaultBoard = {
        title: 'Default Title',
        visibility: true
    };
    return {
        currentUser: state.entities.users[state.session.id],        
        board: state.entities.boards[ownProps.match.params.boardId] || defaultBoard,
        boardMemberships: Object.values(state.entities.boardMemberships),
        userRoster: Object.values(state.entities.userRoster),
        errors: state.errors.boardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestBoard: (boardId) => dispatch(requestBoard(boardId)),
    patchBoard: (board) => dispatch(patchBoard(board)),
    destroyBoard: (boardId) => dispatch(destroyBoard(boardId)),
    requestBoardMembers: () => dispatch(requestBoardMembers()),
    requestUsers: () => dispatch(requestUsers()),
    openModal: () => dispatch(openModal('board-membership-menu')),
    clearErrors: () => dispatch(receiveBoardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow));
