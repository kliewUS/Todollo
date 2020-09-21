export const fetchCardLabels = () => {
    return $.ajax({
        url: `/api/card_labels`
    });
}

export const fetchCardLabel = (cardLabelId) => {
    return $.ajax({
        url: `/api/card_labels/${cardLabelId}`
    });
}

export const createCardLabel = (cardLabel) => {
    return $.ajax({
        method: 'POST',
        url: `/api/card_labels`,
        data: {cardLabel}
    });
}

export const deleteCardLabel = (cardLabelId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/card_labels/${cardLabelId}`
    });
}