import React from 'react';
import CardIndexItemContainer from './card_index_item_container';

class CardIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: ""
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentDidMount(){
        this.props.requestCards();
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
            });
    }    

    render(){
        // console.log(this.props.cards);
        let card_arr = (this.props.cards !== undefined) ? this.props.cards
        .filter(card => card.listId === this.props.listId)
        .map(card => {
            return (
                <CardIndexItemContainer card={card} key={card.id}/>
            );
        }) : (null);

        return (
        <div className="card-index">
            <ul className="cards">
                {card_arr}
            </ul>
            <form onSubmit={this.handleSubmit}>
                    <input id="card-create-input" type="text" value={this.state.title} onChange={this.update('title')}/>    
                    <button className="card-show-btn"><p className="card-create-btn">Add New Card</p></button>
            </form>
        </div>)
    }

}

export default CardIndex