import React from 'react';
import { Link } from 'react-router-dom';

class CardIndexItem extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){

        return (
            <li className="comment-item">
                <p>{this.props.username.substring(0, 1)}</p> 
                <p>{this.props.username}</p> 
                <p>{this.props.comment.createdAt}</p>
                <p>{this.props.comment.body}</p>
            </li>
        )        
    }
}

export default CardIndexItem;