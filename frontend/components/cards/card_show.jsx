import React from 'react';

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
        // console.log(this.props.boardId);
        return(
        <div className="card-show-menu">
            <form onSubmit={this.handleSubmit}>
                <input id="card-title-input" type="text" value={this.state.title} onChange={this.update('title')} onBlur={this.handleSubmit} />
                <p>in list {this.props.listTitle}</p>
                <input id="card-description-input" type="text" value={this.state.description} onChange={this.update('description')} onBlur={this.handleSubmit} />                
            </form>
            <div id="delete-card-btn" onClick={this.handleDelete}><p id="delete-card-text-btn">Delete List</p></div>
        </div>)
    }
}

export default CardShow;