import React from "react";
import {connect} from 'react-redux';
import BoardShow from "./board_show";
import { requestBoard, patchBoard, destroyBoard } from "../../actions/board_actions";
// import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const defaultBoard = {
        title: 'Default Title',
        visibility: true
    };
    return {
        currentUser: state.entities.users[state.session.id],        
        board: state.entities.boards[ownProps.match.params.boardId] || defaultBoard,
        errors: state.errors.boardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestBoard: (boardId) => dispatch(requestBoard(boardId)),
    patchBoard: (board) => dispatch(patchBoard(board)),
    destroyBoard: (boardId) => dispatch(destroyBoard(boardId)),
    clearErrors: () => dispatch(receiveBoardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow));
