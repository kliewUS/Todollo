import React from 'react';
import { Link } from 'react-router-dom';

class CardIndexItem extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        // console.log(this.props.cardLabels);
        let cardLabelBoxes = this.props.cardLabels
        .map((cardLabel) => {
            return (
                <li className="card-label-item" key={cardLabel.id}>&nbsp;</li>
            );
        });

        return (
            <li className="card-item" onClick={() => this.props.openCardShowModal(this.props.card.id)}> {/* Make this onClick to card show modal */}
                <ul className="card-label-list">
                    {cardLabelBoxes}
                </ul>
                <p>{this.props.card.title}</p>
            </li>
        )        
    }
}

export default CardIndexItem;