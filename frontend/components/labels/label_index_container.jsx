import React from "react";
import {connect} from 'react-redux';
import LabelIndex from "./label_index";
import { requestLabels, postLabel } from "../../actions/label_actions";
const mapStateToProps = (state) => {
    // debugger;

    return {
        cardLabels: Object.values(state.entities.cardLabels),
        labels: Object.values(state.entities.labels),          
        errors: state.errors.cardLabelErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestLabels: () => dispatch(requestLabels()),
    postLabel: (label) => dispatch(postLabel(label)),
    clearErrors: () => dispatch(receiveLabelErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelIndex);