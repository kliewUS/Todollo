import React from "react";
import {connect} from 'react-redux';
import CommentIndex from "./comment_index";
import { requestComments, postComment } from "../../actions/comment_actions";

const mapStateToProps = (state) => {
    return {
        userId: state.session.id,        
        comments: Object.values(state.entities.comments),   
        errors: state.errors.commentErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestComments: () => dispatch(requestComments()),
    postComment: (comment) => dispatch(postComment(comment)),
    clearErrors: () => dispatch(receiveCommentErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);