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
            description: this.props.card.description,
            labelModal: false
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    handleClick(e){
        e.preventDefault();
        this.setState({labelModal: !this.state.labelModal});        
    }

    render(){

        let openlabelModal = (this.state.labelModal) 
        ? (
        <div id="add-label">
            <LabelIndexContainer cardId={this.props.cardId} handleClick={this.handleClick} />
        </div>
        ) : (null);

        return(
        <div className="card-show-menu">
            <form className="card-show-content" onSubmit={this.handleSubmit}>

                <div className="card-title">
                    <span className="material-icons main-card-icon">subject</span> 
                    <input id="card-title-input" type="text" value={this.state.title} onChange={this.update('title')} onBlur={this.handleSubmit} />
                    <span onClick={this.props.closeModal} className="material-icons card-show-close-btn">clear</span>   
                </div>
                <p id="card-list-text">in list <a href="#">{this.props.listTitle}</a></p>

                <div className="card-show-content-2">

                    <div className="card-labels-content">
                        <p id="labels-title">Labels</p>
                        <CardLabelIndexContainer cardId={this.props.cardId}/>
                    </div>

                    <div className="card-description">
                        <span className="material-icons card-icons">description</span>
                        <h2>Description</h2>
                    </div>
                    <textarea id="card-description-input" type="text" value={this.state.description} placeholder="Add a more detailed description..." onChange={this.update('description')} onBlur={this.handleSubmit} rows="2" cols="50" />                
                
                    <div className="card-comments">
                        <span className="material-icons card-icons">comment</span>
                        <h2>Activity</h2>
                        <CommentIndexContainer cardId={this.props.cardId} />
                    </div>

                </div>
            
            </form>

                <div className="card-actions">
                    <h3 id="delete-card-title">Card Actions</h3>
                    <button id="add-labels-btn" onClick={this.handleClick}><span className="material-icons card-actions-btn">label</span>Add Labels</button>
                    {openlabelModal}
                    <button id="delete-card-text-btn" onClick={this.handleDelete}><span className="material-icons card-actions-btn">delete</span>Delete Card</button>
                </div>
        </div>)
    }
}

export default CardShow;