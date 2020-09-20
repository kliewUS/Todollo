import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CardIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            body: ""
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentDidMount(){
        this.props.requestComments();
    }
    
    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
    }    

    handleSubmit(e){
        e.preventDefault();
        const newComment = {body: this.state.body, user_id: this.props.currentUser.id, card_id: this.props.cardId};
        this.props.postComment(newComment)
            .then(() => {
                this.props.requestComments();
                this.setState({body: ""});
            });
    }    

    render(){
        let comment_arr = (this.props.comments !== undefined) ? this.props.comments
        .filter(comment => comment.cardId === this.props.cardId)
        .reverse()
        .map(comment => {
            return (
                <CommentIndexItemContainer comment={comment} key={comment.id}/>
            );
        }) : (null);

        return (
        <div className="comments-index">
            <div className="add-comment">
                <p className="poster-btn">{this.props.currentUser.username.substring(0, 1)}</p> 
                <form className="add-comment-content" onSubmit={this.handleSubmit}>
                        <input id="comment-create-input" type="text" value={this.state.body} placeholder="Write a comment..." onChange={this.update('body')}/>    
                        <button className="comment-create-btn" disabled={!this.state.body}><p className="comment-create-content-btn">Save</p></button>
                </form>
            </div>
            <ul className="comments">
                {comment_arr}
            </ul>
        </div>)
    }

}

export default CardIndex