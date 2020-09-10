export const fetchCards = () => {
    return $.ajax({
        url: `/api/cards`
    });
}
export const fetchCard = (cardId) => {
    return $.ajax({
        url: `/api/cards/${cardId}`
    });
}
export const createCard = (card) => {
    return $.ajax({
        method: 'POST',
        url: `/api/cards`,
        data: {card}
    });
}
export const updateCard = (card) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/cards/${card.id}`,
        data: {card}
    });
}
export const deleteCard = (cardId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cards/${cardId}`
    });
}