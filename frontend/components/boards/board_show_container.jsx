import React from "react";
import {connect} from 'react-redux';
import BoardShow from "./board_show";
import { requestBoard, patchBoard, destroyBoard } from "../../actions/board_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        board: state.entities.boards[ownProps.match.params.boardId],
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