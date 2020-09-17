import React from "react";
import {connect} from 'react-redux';
import CardShow from "./card_show";
import { requestCard, patchCard, destroyCard } from "../../actions/card_actions";

const mapStateToProps = (state, ownProps) => {
    // debugger;
    const card = state.entities.cards[ownProps.cardId]
    const listTitle = state.entities.lists[card.listId].title;

    return {       
        card: card,
        listTitle: listTitle,
        errors: state.errors.cardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestCard: (cardId) => dispatch(requestCard(cardId)),
    patchCard: (card) => dispatch(patchCard(card)),
    destroyCard: (cardId) => dispatch(destroyCard(cardId)),
    clearErrors: () => dispatch(receiveCardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);