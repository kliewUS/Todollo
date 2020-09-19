import * as CommentAPIUtil from '../util/comment_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
});

export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
});

export const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
});

export const receiveCommentErrors = (errors) => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const requestComments = () => dispatch => {
    return CommentAPIUtil.fetchComments()
        .then(payload => dispatch(receiveComments(payload)), 
        err => dispatch(receiveCommentErrors(err.responseJSON))
        );
}

export const requestComment = (commentId) => dispatch => {
    return CommentAPIUtil.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment)), 
        err => dispatch(receiveCommentErrors(err.responseJSON))
        );
}

export const postComment = (comment) => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComments(comment)), 
        err => dispatch(receiveCommentErrors(err.responseJSON))
        );
}

export const patchComment = (comment) => dispatch => {
    return CommentAPIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComments(comment)), 
        err => dispatch(receiveCommentErrors(err.responseJSON))
        );
}

export const destroyComment = (commentId) => dispatch => {
    return CommentAPIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)), 
        err => dispatch(receiveCommentErrors(err.responseJSON))
        );
}