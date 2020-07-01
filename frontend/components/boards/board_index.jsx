import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestBoards();
    }


    render(){

        let boards_arr = this.props.boards.map(board => {
            return (
                <BoardIndexItem board={board} key={board.id} />
            );
        })

        return(
            <div className="boards-content">
                <div className="boards-header">
                    <h1>Personal Boards</h1>
                </div>
                <ul className="boards-list">
                    {boards_arr}
                </ul>
                <button onClick={this.props.openModal}>Create New Board</button>
            </div>
        );
    }
}

export default BoardIndex;


