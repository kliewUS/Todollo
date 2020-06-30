import React from "react";
import {connect} from 'react-redux';
import BoardIndex from "./board_index";
import { requestBoards } from "../../actions/board_actions";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        boards: Object.values(state.entities.boards),     
        errors: state.errors.boardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestBoards: () => dispatch(requestBoards()),
    openModal: () => dispatch(openModal('board-create-menu')),
    clearErrors: () => dispatch(receiveBoardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);