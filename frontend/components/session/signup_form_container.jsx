import React from "react";
import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors.sessionErrors,
    formType: 'Sign Up'
});

const mapDispatchToProps = (dispatch) => ({
    processForm: formUser => dispatch(createNewUser(formUser))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);