import React from "react";
import {connect} from 'react-redux';
import CardLabelIndex from "./card_label_index";
import { requestCardLabels } from "../../actions/cardLabel_actions";
import { requestLabels } from "../../actions/label_actions";

const mapStateToProps = (state) => {
    return {
        cardLabels: Object.values(state.entities.cardLabels),            
        labels: Object.values(state.entities.labels),            
        errors: state.errors.cardLabelErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestCardLabels: () => dispatch(requestCardLabels()),
    requestLabels: () => dispatch(requestLabels()),
    clearErrors: () => dispatch(receiveCardLabelErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardLabelIndex);