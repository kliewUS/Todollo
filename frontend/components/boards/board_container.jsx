import React from "react";
import {connect} from 'react-redux';
import BoardIndex from "./board_index";
import { postBoard, requestBoards } from "../../actions/board_actions";

const mapStateToProps = (state) => {
    return {
        boards: Object.values(state.entities.boards),
        errors: state.errors.boardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestBoards: () => dispatch(requestBoards()),
    processForm: formBoard => dispatch(postBoard(formBoard)),
    clearErrors: () => dispatch(receiveBoardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);