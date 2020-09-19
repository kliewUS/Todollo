import React from "react";
import {connect} from 'react-redux';
import CommentIndexItem from "./comment_index_item";
import {patchComment, destroyComment, requestComments} from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
    let username = state.entities.userRoster[ownProps.comment.userId].username;
    return {        
        username: username,
        errors: state.errors.commentErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestComments: () => dispatch(requestComments()),
    patchComment: (comment) => dispatch(patchComment(comment)),
    destroyComment: (commentId) => dispatch(destroyComment(commentId)),
    clearErrors: () => dispatch(receiveCommentErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem);