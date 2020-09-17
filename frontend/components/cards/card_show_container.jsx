import React from "react";
import {connect} from 'react-redux';
import CardShow from "./card_show";
import { requestCard, patchCard, destroyCard } from "../../actions/card_actions";

const mapStateToProps = (state) => {
    return {       
        card: Object.values(state.entities.cards),   
        errors: state.errors.cardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestCard: () => dispatch(requestCard()),
    patchCard: (card) => dispatch(patchCard(card)),
    destroyCard: (cardId) => dispatch(destroyCard(cardId)),
    clearErrors: () => dispatch(receiveCardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);