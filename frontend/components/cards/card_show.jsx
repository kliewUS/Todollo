import React from 'react';

class CardShow extends React.Component{
    constructor(props){
        super(props);

        // this.state = {
        //     title: this.props.list.title
        // }

        // this.update = this.update.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentDidMount(){
        this.props.requestCard(this.props.cardId);
    }

    render(){
        return(
        <div className="card-show-menu">
            <h1>{this.props.card.title}</h1>
            <p>in list {this.props.listTitle}</p>
            <p>{this.props.card.description}</p>
            {/* Delete Button here */}
        </div>)
    }
}

export default CardShow;