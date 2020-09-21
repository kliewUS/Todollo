import React from "react";
import {connect} from 'react-redux';
import CardIndex from "./card_index";
import { requestCards, postCard } from "../../actions/card_actions";
import { requestCardLabels } from "../../actions/cardLabel_actions"

const mapStateToProps = (state) => {
    return {       
        cards: Object.values(state.entities.cards),
        cardLabels: Object.values(state.entities.cardLabels),      
        errors: state.errors.cardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestCards: () => dispatch(requestCards()),
    requestCardLabels: () => dispatch(requestCardLabels()),
    postCard: (card) => dispatch(postCard(card)),
    clearErrors: () => dispatch(receiveCardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);