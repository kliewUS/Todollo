import React from 'react';
import { Link } from 'react-router-dom';

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
            .then(() => {
                this.props.requestLists();
            });         
    }
    
    render(){
        return (
            <li className="list-item">
                <form onSubmit={this.handleSubmit}>
                    <input className="list-title-input" type="text" value={this.state.title} onChange={this.update('title')} onBlur={this.handleSubmit} />                    
                </form>
                <li id="list-delete-btn" onClick={this.handleDelete}><p id="delete-list-text-btn">Delete List</p></li>                
            </li>
        )        
    }
}

export default ListIndexItem;