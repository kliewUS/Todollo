import React from "react";
import {connect} from 'react-redux';
import BoardForm from "./board_form";
import { postBoard, receiveBoardErrors } from "../../actions/board_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],    
    errors: state.errors.boardErrors
});

const mapDispatchToProps = (dispatch) => ({
    processBoard: formBoard => dispatch(postBoard(formBoard)),
    clearBoardErrors: () => dispatch(receiveBoardErrors([]))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardForm));