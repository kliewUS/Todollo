import React from 'react';
import ListIndexItemContainer from './list_index_item_container';

class ListIndex extends React.Component{
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
        this.props.requestLists();
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
        
    }    

    handleSubmit(e){
        e.preventDefault();
        const newList = {title: this.state.title, board_id: this.props.boardId};
        this.props.postList(newList)
            .then(() => {
                this.props.requestLists();
                this.setState({title: ""});
            });
    }

    handleClick(e){
        e.preventDefault();
        this.setState({showInput: !this.state.showInput});               
    }

    render(){

        let list_arr = (this.props.lists !== undefined) ? this.props.lists
        .filter(list => list.boardId === this.props.boardId)
        .map(list => {
            return (
                <ListIndexItemContainer list={list} key={list.id}/>
            );
        }) : (null);

        let addListInput = (this.state.showInput === true) 
        ? (           
            <div className="add-list-dropdown"> 
                <form className="add-list-content" onSubmit={this.handleSubmit}>
                    <input id="list-create-input" type="text" value={this.state.title} placeholder="Enter list title..." onChange={this.update('title')}/>
                    <div className="list-create-controls">
                        <button className="list-create-btn"><p className="list-create-content-btn">Add List</p></button>
                        <span onClick={this.handleClick} className="material-icons list-clear-btn">clear</span> 
                    </div>    
                </form>
            </div>
        )    
        : (
            <button className="add-list-btn" onClick={this.handleClick}>
                <div className="add-list-btn-content">
                    <span className="material-icons add-icon">add</span>
                    <p className="add-list-content-btn">Add New List</p>
                </div>
            </button>
        );


        return(
        <div className="board-lists">
            <ul className="lists">
                {list_arr}
            </ul>
            {addListInput}
        </div>
        );

    }
}

export default ListIndex