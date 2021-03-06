import React from "react";
import {connect} from 'react-redux';
import LabelIndexItem from "./label_index_item";
import { requestLabels, destroyLabel, patchLabel } from "../../actions/label_actions";
import { requestCardLabels, postCardLabel, destroyCardLabel } from "../../actions/cardLabel_actions";

const mapStateToProps = (state) => {
    return {
        cardLabels: Object.values(state.entities.cardLabels),          
        errors: state.errors.cardLabelErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestLabels: () => dispatch(requestLabels()),
    patchLabel: (label) => dispatch(patchLabel(label)),    
    destroyLabel: (labelId) => dispatch(destroyLabel(labelId)),    
    requestCardLabels: () => dispatch(requestCardLabels()),
    postCardLabel: (cardLabel) => dispatch(postCardLabel(cardLabel)),
    destroyCardLabel: (cardLabelId) => dispatch(destroyCardLabel(cardLabelId)),
    clearErrors: () => dispatch(receiveLabelErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelIndexItem);