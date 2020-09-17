import * as CardAPIUtil from '../util/card_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const RECEIVE_CARD_ERRORS = "RECEIVE_CARD_ERRORS";

export const receiveCards = (cards) => ({
    type: RECEIVE_CARDS,
    cards
});

export const receiveCard = (card) => ({
    type: RECEIVE_CARD,
    card
});

export const removeCard = (cardId) => ({
    type: REMOVE_CARD,
    cardId
});

export const receiveCardErrors = (errors) => ({
    type: RECEIVE_CARD_ERRORS,
    errors
});

export const requestCards = () => dispatch => {
    return CardAPIUtil.fetchCards()
        .then(payload => dispatch(receiveCards(payload)), 
        err => dispatch(receiveCardErrors(err.responseJSON))
        );
}

export const requestCard = (cardId) => dispatch => {
    return CardAPIUtil.fetchCard(cardId)
        .then(card => dispatch(receiveCard(card)), 
        err => dispatch(receiveCardErrors(err.responseJSON))
        );
}

export const postCard = (card) => dispatch => {
    return CardAPIUtil.createCard(card)
        .then(card => dispatch(receiveCard(card)), 
        err => dispatch(receiveCardErrors(err.responseJSON))
        );
}

export const patchCard = (card) => dispatch => {
    return CardAPIUtil.updateCard(card)
        .then(card => dispatch(receiveCard(card)), 
        err => dispatch(receiveCardErrors(err.responseJSON))
        );
}

export const destroyCard = (cardId) => dispatch => {
    return CardAPIUtil.deleteCard(cardId)
        .then(() => dispatch(removeCard(cardId)), 
        err => dispatch(receiveCardErrors(err.responseJSON))
        );
}