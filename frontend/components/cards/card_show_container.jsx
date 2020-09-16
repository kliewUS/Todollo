import React from "react";
import {connect} from 'react-redux';
import CardShow from "./card_show";
import { requestCard, patchCard } from "../../actions/card_actions";

const mapStateToProps = (state) => {
    return {       
        card: Object.values(state.entities.cards),   
        errors: state.errors.cardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestCard: () => dispatch(requestCard()),
    patchCard: (card) => dispatch(patchCard(card)),
    clearErrors: () => dispatch(receiveCardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);