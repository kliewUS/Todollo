import React from "react";
import {connect} from 'react-redux';
import LabelForm from "./label_form";
import { postLabel } from "../../actions/label_actions";

const mapStateToProps = (state) => {
    return {
        // cardLabels: Object.values(state.entities.cardLabels),            
        errors: state.errors.labelErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    postLabel: (label) => dispatch(postLabel(label)), //Will need to have an update form as well. Have an updateLabel
    clearErrors: () => dispatch(receiveLabelErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelForm);