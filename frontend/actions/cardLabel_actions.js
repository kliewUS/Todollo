import * as CardLabelAPIUtil from '../util/cardLabel_util';

export const RECEIVE_CARD_LABELS = 'RECEIVE_CARD_LABELS';
export const RECEIVE_CARD_LABEL = 'RECEIVE_CARD_LABEL';
export const REMOVE_CARD_LABEL = 'REMOVE_CARD_LABEL';
export const RECEIVE_CARD_LABEL_ERRORS = "RECEIVE_CARD_LABEL_ERRORS";

export const receiveCardLabels = (cardLabels) => ({
    type: RECEIVE_CARD_LABELS,
    cardLabels
});
export const receiveCardLabel = cardLabel => ({
    type: RECEIVE_CARD_LABEL,
    cardLabel
});
export const removeCardLabel = cardLabelId => ({
    type: REMOVE_CARD_LABEL,
    cardLabelId
});

export const receiveCardLabelErrors = errors => ({
    type: RECEIVE_CARD_LABEL_ERRORS,
    errors
});

export const requestCardLabels = () => dispatch => {
    return CardLabelAPIUtil.fetchCardLabels()
        .then(payload => dispatch(receiveCardLabels(payload)), 
        err => dispatch(receiveCardLabelErrors(err.responseJSON))
        );
}

export const requestCardLabel = (cardLabelId) => dispatch => {
    return CardLabelAPIUtil.fetchCardLabel(cardLabelId)
        .then(cardLabelId => dispatch(receiveCardLabel(cardLabelId)), 
        err => dispatch(receiveCardLabelErrors(err.responseJSON))
        );
}

export const postCardLabel = (cardLabel) => dispatch => {
    return CardLabelAPIUtil.createCardLabel(cardLabel)
        .then(cardLabel => dispatch(receiveCardLabel(cardLabel)), 
        err => dispatch(receiveCardLabelErrors(err.responseJSON))
        );
}

export const destroyCardLabel = (cardLabelId) => dispatch => {
    return CardLabelAPIUtil.deleteCardLabel(cardLabelId)
        .then(() => dispatch(removeCardLabel(cardLabelId)), 
        err => dispatch(receiveCardLabelErrors(err.responseJSON))
        );
}