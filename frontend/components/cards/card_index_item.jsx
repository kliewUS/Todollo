import React from 'react';
import { Link } from 'react-router-dom';

class CardIndexItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: this.props.card.title
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);     
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
        
    }    

    handleSubmit(e){
        e.preventDefault();
        const updateCard = {id: this.props.card.id, title: this.state.title};
        this.props.patchCard(updateCard);
    }    
    
    render(){
        return (
            <li className="card-item">
                <form onSubmit={this.handleSubmit}>
                <input id="card-title-input" type="text" value={this.state.title} onChange={this.update('title')} onBlur={this.handleSubmit} />                    
                </form>                
            </li>
        )        
    }
}

export default CardIndexItem;