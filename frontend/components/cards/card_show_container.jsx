import React from "react";
import {connect} from 'react-redux';
import CardShow from "./card_show";
import { requestCard, patchCard, destroyCard } from "../../actions/card_actions";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    let card = "";
    let listTitle = "";
    let boardId = "";

    if(state.entities.cards[ownProps.cardId] !== undefined){
        card = state.entities.cards[ownProps.cardId]
        listTitle = state.entities.lists[card.listId].title;
        boardId = state.entities.lists[card.listId].boardId;
    
        if(card.description === null){
            card.description = "";
        }
    }

    return {       
        card: card,
        listTitle: listTitle,
        boardId: boardId,
        errors: state.errors.cardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestCard: (cardId) => dispatch(requestCard(cardId)),
    patchCard: (card) => dispatch(patchCard(card)),
    destroyCard: (cardId) => dispatch(destroyCard(cardId)),
    // openModal: (id) => {
    //     dispatch(openModal('label-index-menu', id))
    // },    
    clearErrors: () => dispatch(receiveCardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);