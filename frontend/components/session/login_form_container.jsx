import React from "react";
import {connect} from 'react-redux';
import {loginUser} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors.sessionErrors,
    formType: 'Log In'
});

const mapDispatchToProps = (dispatch) => ({
    processForm: formUser => dispatch(loginUser(formUser))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);