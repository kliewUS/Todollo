export const fetchBoards = () => {
    return $.ajax({
        url: `/api/boards`
    });
}
export const fetchBoard = (boardId) => {
    return $.ajax({
        url: `/api/boards/${boardId}`
    });
}
export const createBoard = (board) => {
    return $.ajax({
        method: 'POST',
        url: `/api/boards`,
        data: {board}
    });
}
export const updateBoard = (board) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/boards/${board.id}`,
        data: {board}
    });
}
export const deleteBoard = (boardId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/boards/${boardId}`
    });
}