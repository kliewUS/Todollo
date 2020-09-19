export const fetchComments = () => {
    return $.ajax({
        url: `/api/comments`
    });
}
export const fetchComment = (commentId) => {
    return $.ajax({
        url: `/api/comments/${commentId}`
    });
}
export const createComment = (comment) => {
    return $.ajax({
        method: 'POST',
        url: `/api/comments`,
        data: {comment}
    });
}
export const updateComment = (comment) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: {comment}
    });
}
export const deleteComment = (commentId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    });
}