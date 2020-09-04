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
        console.log(this.props.boards);


        let boards_arr = (this.props.boards !== undefined) ? this.props.boards
        .filter(board => board.ownerId === this.props.currentUser.id)
        .map(board => {
            return (
                <BoardIndexItem board={board} key={board.id} />
            );
        }) : (null);

        let sharedBoards_arr = (this.props.boards !== undefined) ? this.props.boards
        .filter(board => board.ownerId !== this.props.currentUser.id)
        .map(board => {
            return (
                <BoardIndexItem board={board} key={board.id} />
            );
        }) : (null);  //Not DRY, Will refactor in a later time.      

        return(
            <div className="boards-content">
                <div className="boards-index-main">

                    <div className="boards-header">
                        <div>
                            <span className="material-icons">assignment_ind</span>
                        </div>
                        <h1>Your Boards</h1>
                    </div>

                    <ul className="boards-list">
                        {boards_arr}
                        <li className="board-item create-board-btn" onClick={this.props.openModal}>Create New Board</li>
                    </ul>

                    <div className="boards-header">
                        <div>
                            <span className="material-icons">group</span>
                        </div>
                        <h1>Team Boards</h1>
                    </div>

                    <ul className="boards-list">
                        {sharedBoards_arr}
                        <li className="board-item create-board-btn" onClick={this.props.openModal}>Create New Board</li>
                    </ul>                    
                    
                </div>
            </div>
        );
    }
}

export default BoardIndex;


