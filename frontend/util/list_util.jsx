export const fetchLists = () => {
    return $.ajax({
        url: `/api/lists`
    });
}
export const fetchList = (listId) => {
    return $.ajax({
        url: `/api/lists/${listId}`
    });
}
export const createList = (list) => {
    return $.ajax({
        method: 'POST',
        url: `/api/lists`,
        data: {list}
    });
}
export const updateList = (list) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/lists/${list.id}`,
        data: {list}
    });
}
export const deleteList = (listId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/lists/${listId}`
    });
}