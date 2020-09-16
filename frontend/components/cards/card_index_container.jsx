import React from "react";
import {connect} from 'react-redux';
import CardIndex from "./card_index";
import { requestCards, postCard } from "../../actions/card_actions";

const mapStateToProps = (state) => {
    return {       
        cards: Object.values(state.entities.cards),   
        errors: state.errors.cardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestCards: () => dispatch(requestCards()),
    postCard: (card) => dispatch(postCard(card)),
    clearErrors: () => dispatch(receiveCardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);