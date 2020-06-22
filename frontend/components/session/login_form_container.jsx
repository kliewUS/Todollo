import React from "react";
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors.sessionErrors,
    formType: 'Log In'
});

const mapDispatchToProps = (dispatch) => ({
    processForm: formUser => dispatch(login(formUser))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);