import React from "react";
import {connect} from 'react-redux';
import CardIndexItem from "./card_index_item";
// import {patchCard} from "../../actions/card_actions";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {        
        errors: state.errors.cardErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    openCardShowModal: (id) => {
        // debugger;
        dispatch(openModal('card-show-menu', id))
    },
    // patchCard: (card) => dispatch(patchCard(card)),
    clearErrors: () => dispatch(receiveCardErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIndexItem);