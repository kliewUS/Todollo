import React from "react";
import {connect} from 'react-redux';
import LabelIndexItem from "./label_index";
import { postCardLabel, destroyCardLabel } from "../../actions/cardLabel_actions";

const mapStateToProps = (state) => {
    return {
        cardLabels: Object.values(state.entities.cardlabels),          
        errors: state.errors.cardLabelErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestLabels: () => dispatch(requestLabels()),
    postCardLabel: (cardLabel) => dispatch(postCardLabel(cardLabel)),
    destroyCardLabel: (cardLabelId) => dispatch(destroyCardLabel(cardLabelId)),
    clearErrors: () => dispatch(receiveLabelErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelIndexItem);