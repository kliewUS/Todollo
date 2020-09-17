import React from 'react';
import { Link } from 'react-router-dom';

class CardIndexItem extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){

        return (
            <li className="card-item" onClick={() => this.props.openCardShowModal(this.props.card.id)}> {/* Make this onClick to card show modal */}
                <p>{this.props.card.title}</p>
            </li>
        )        
    }
}

export default CardIndexItem;