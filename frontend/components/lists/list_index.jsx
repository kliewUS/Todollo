import React from 'react';
import ListIndexItemContainer from './list_index_item_container';

class ListIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: ""
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
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
            });
    }

    render(){
        // debugger;
        let list_arr = (this.props.lists !== undefined) ? this.props.lists
        .filter(list => list.boardId === this.props.boardId)
        .map(list => {
            return (
                <ListIndexItemContainer list={list} key={list.id}/>
            );
        }) : (null);


        return(
        <div className="board-lists">
            <ul className="lists">
                {list_arr}
            </ul>
            <div className="add-list-dropdown"> {/* Will make this a dropdown */}
                <form onSubmit={this.handleSubmit}>
                    <input id="list-create-input" type="text" value={this.state.title} onChange={this.update('title')}/>    
                    <button className="show-btn"><p className="show-content-btn">Add New List</p></button>
                </form>
            </div>
        </div>
        );

    }
}

export default ListIndex