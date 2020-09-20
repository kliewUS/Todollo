import React from 'react';
import { Link } from 'react-router-dom';

class CardIndexItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            body: this.props.comment.body,
            commentBodyVisible: true
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);      
        this.clickForm = this.clickForm.bind(this);      
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }  
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.clickForm();
        const updateComment = {id: this.props.comment.id, body: this.state.body, user_id: this.props.comment.userId, card_id: this.props.comment.cardId};
        this.props.patchComment(updateComment)
        .then(() => {
            this.props.requestComments(); //Pretty hacky. Since I have to call RECEIVE_COMMENTS twice to rerender all the comments. Maybe there might be a better way?
        });
    }
    
    handleDelete(e){
        e.preventDefault();
        this.props.destroyComment(this.props.comment.id);
    }
    
    clickForm(){
        this.setState({
            commentBodyVisible: !this.state.commentBodyVisible
        })
    }
    
    render(){
        let edit_btns = (this.props.comment.userId === this.props.currentUser.id) ? 
        (
        <div className="comment-links-content">
            <p className="comment-links edit" onClick={this.clickForm}>Edit</p>
            <p className="comment-links delete" onClick={this.handleDelete}>Delete</p>
        </div>
        ) 
        : (null);

        let comment_body = (this.state.commentBodyVisible) ? 
        (
        <div className="comment-body">
            <p className="comment-body-content">{this.props.comment.body}</p>
            {edit_btns}
        </div>
        )
        : (        
        <div className="comment-edit-form">
            <form className="comment-edit" onSubmit={this.handleSubmit}>
                <textarea id="comment-edit-input" type="text" value={this.state.body} onChange={this.update('body')} rows="1" cols="50" />  
                <div className="comment-edit-btns">
                    <button className="comment-update-btn" disabled={!this.state.body}>Save</button>
                    <span onClick={this.clickForm} className="material-icons comment-clear-btn">clear</span> 
                </div>
            </form>
        </div>
    )

        const options = {
            timeZone:"America/Los_Angeles",
            hour12 : true,
            hour:  "2-digit",
            minute: "2-digit"
        };
        
        let date = new Date(this.props.comment.createdAt).toLocaleDateString('en-US', options);


        return (
            <li className="comment-item">
                <div className="comment-main-content">
                    <p className="poster-btn">{this.props.username.substring(0, 1)}</p> 
                    <p className="poster-name">{this.props.username}</p> 
                    <p className="posted-date">{date}</p>
                    {comment_body}
                </div>
            </li>
        )        
    }
}

export default CardIndexItem;