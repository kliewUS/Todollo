import React from 'react';
import CardIndexItemContainer from './card_index_item_container';

class CardIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: "",
            showInput: false
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);         
    }

    componentDidMount(){
        this.props.requestCards();
        this.props.requestCardLabels();
    }
    
    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
        
    }    

    handleSubmit(e){
        e.preventDefault();
        const newCard = {title: this.state.title, description: "", list_id: this.props.listId};
        this.props.postCard(newCard)
            .then(() => {
                this.props.requestCards();
                this.setState({title: ""});
            });
    } 
    
    handleClick(e){
        e.preventDefault();
        this.setState({showInput: !this.state.showInput});               
    }    

    render(){
        let card_arr = (this.props.cards !== undefined) ? this.props.cards
        .filter(card => card.listId === this.props.listId)
        .map(card => {
            
            let card_label_arr = this.props.cardLabels
                .filter(cardLabel => cardLabel.cardId === card.id);

            return (
                <CardIndexItemContainer card={card} key={card.id} cardLabels={card_label_arr}/>
            );
        }) : (null);

        let addCardInput = (this.state.showInput === true) 
        ? (
            <form className="add-card-content" onSubmit={this.handleSubmit}>
                    <input id="card-create-input" type="text" value={this.state.title} placeholder="Enter a title for this card..." onChange={this.update('title')}/> 
                    <div className="card-create-controls">   
                        <button className="card-create-btn"><p className="card-create-content-btn">Add Card</p></button>
                        <span onClick={this.handleClick} className="material-icons card-clear-btn">clear</span> 
                    </div>
            </form>
        ) 
        : (
            <button className="add-card-btn" onClick={this.handleClick}>
                <div className="add-card-btn-content">
                    <span className="material-icons add-card-icon">add</span>
                    <p className="add-card-content-btn">Add New Card</p>
                </div>
            </button>
        )

        return (
        <div className="card-index">
            <ul className="cards">
                {card_arr}
            </ul>
            {addCardInput}
        </div>)
    }

}

export default CardIndex