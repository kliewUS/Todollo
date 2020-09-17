import React from 'react';
import CardIndexItemContainer from './card_index_item_container';

class CardIndex extends React.Component{
    constructor(props){
        super(props);

        // this.state = {
        //     title: this.props.list.title
        // }

        // this.update = this.update.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentDidMount(){
        this.props.requestCards();
    }    

    render(){

        // let card_arr = (this.props.cards !== undefined) ? this.props.cards
        // .filter(card => card.listId === this.props.listId)
        // .map(card => {
        //     return (
        //         <CardIndexItemContainer card={card} key={card.id}/>
        //     );
        // }) : (null);

        return (
        <div className="card-index">
            <p>Card Index Rendering</p>
            {/* {card_arr} */}
        </div>)
    }

}

export default CardIndex