import React from 'react';
import ListIndexItem from './list_index_item';

class ListIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestLists();
    }

    handleSubmit(){
    }

    render(){
        // debugger;
        let list_arr = (this.props.lists !== undefined) ? this.props.lists
        .filter(list => list.boardId !== this.props.boardId)
        .map(list => {
            return (
                <ListIndexItem list={list} key={list.id}/>
            );
        }) : (null);


        return(
        <div className="board-lists">
            {list_arr}
            <button className="show-btn"><p className="show-content-btn">Add New List</p></button>
        </div>
        );

    }
}

export default ListIndex