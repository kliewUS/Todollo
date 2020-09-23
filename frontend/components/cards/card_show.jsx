import React from 'react';
import CommentIndexContainer from '../comments/comment_index_container';
import CardLabelIndexContainer from '../labels/card_label_index_container';
import LabelIndexContainer from '../labels/label_index_container';

class CardShow extends React.Component{
    constructor(props){
        super(props);
        // debugger;
        this.state = {
            cardId: this.props.cardId,
            boardId: this.props.boardId,
            title: this.props.card.title,
            description: this.props.card.description
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);                
    }

    componentDidMount(){
        this.props.requestCard(this.props.cardId);
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }  
    }
    
    handleSubmit(e){
        e.preventDefault();
        const updateCard = {id: this.props.cardId, title: this.state.title, description: this.state.description};
        this.props.patchCard(updateCard);
    }
    
    handleDelete(e){
        e.preventDefault();
        this.props.destroyCard(this.state.cardId)
        .then(() => 
        {
            this.props.closeModal();
        });
    }    

    render(){
        return(
        <div className="card-show-menu">
            <form className="card-show-content" onSubmit={this.handleSubmit}>
                <div className="card-title">
                    <span className="material-icons main-card-icon">subject</span> 
                    <input id="card-title-input" type="text" value={this.state.title} onChange={this.update('title')} onBlur={this.handleSubmit} />
                    <span onClick={this.props.closeModal} className="material-icons card-show-close-btn">clear</span>   
                </div>
                <p id="card-list-text">in list <a href="#">{this.props.listTitle}</a></p>

                <div className="card-labels-content">
                    <p id="labels-title">Labels</p>
                    <CardLabelIndexContainer cardId={this.props.cardId}/>
                </div>

                <div className="card-description">
                    <span className="material-icons card-icons">description</span>
                    <h2>Description</h2>
                </div>
                <textarea id="card-description-input" type="text" value={this.state.description} placeholder="Add a more detailed description..." onChange={this.update('description')} onBlur={this.handleSubmit} rows="2" cols="50" />                
            </form>
            <div className="card-comments">
                <span className="material-icons card-icons">comment</span>
                <h2>Activity</h2>
                <CommentIndexContainer cardId={this.props.cardId} />
            </div>

                <h3 id="delete-card-title">Card Actions</h3>

                <div id="add-label">
                    <LabelIndexContainer cardId={this.props.cardId} />
                </div>

                <div id="delete-card">
                    <button id="delete-card-text-btn" onClick={this.handleDelete}>Delete Card</button>
                </div>
        </div>)
    }
}

export default CardShow;