import React from "react";
import {connect} from 'react-redux';
import LabelIndex from "./label_index";
import { requestLabels } from "../../actions/label_actions";
import { postCardLabel, destroyCardLabel } from "../../actions/cardLabel_actions";

const mapStateToProps = (state) => {
    return {
        labels: Object.values(state.entities.labels),            
        errors: state.errors.cardLabelErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestLabels: () => dispatch(requestLabels()),
    postCardLabel: (cardLabel) => dispatch(postCardLabel(cardLabel)),
    destroyCardLabel: (cardLabelId) => dispatch(destroyCardLabel(cardLabelId)),
    clearErrors: () => dispatch(receiveLabelErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelIndex);