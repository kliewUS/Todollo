import React from 'react';
import { Link } from 'react-router-dom';
import CardIndexContainer from "../cards/card_index_container";

class ListIndexItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: this.props.list.title
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);     
        this.handleDelete = this.handleDelete.bind(this);     
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
        
    }    

    handleSubmit(e){
        e.preventDefault();
        const updateList = {id: this.props.list.id, title: this.state.title};
        this.props.patchList(updateList);
    }
    
    handleDelete(e){
        e.preventDefault();
        this.props.destroyList(this.props.list.id)      
    }
    
    render(){

        return ( 
            <li className="list-item">
                <div className="list-item-content">
                    <form className="list-item-form" onSubmit={this.handleSubmit}>
                        <input className="list-title-input" type="text" value={this.state.title} onChange={this.update('title')} onBlur={this.handleSubmit} />                    
                    </form>
                    <button id="button-delete-btn" onClick={this.handleDelete}><span className="material-icons delete-list">delete</span></button> 
                </div>
                <CardIndexContainer listId={this.props.list.id} />
            </li>
        )        
    }
}

export default ListIndexItem;