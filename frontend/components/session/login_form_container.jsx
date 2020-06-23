import React from "react";
import {connect} from 'react-redux';
import {loginUser, receiveErrors} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors.sessionErrors,
    formType: 'Log In'
});

const mapDispatchToProps = (dispatch) => ({
    processForm: formUser => dispatch(loginUser(formUser)),
    clearErrors: () => dispatch(receiveErrors([]))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);