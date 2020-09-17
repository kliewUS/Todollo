import React from "react";
import {connect} from 'react-redux';
import CardIndexItem from "./card_index_item";
import {patchCard} from "../../actions/card_actions";

const mapStateToProps = (state) => {
    return {        
        errors: state.errors.cardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    patchCard: (card) => dispatch(patchCard(card)),
    clearErrors: () => dispatch(receiveCardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIndexItem);