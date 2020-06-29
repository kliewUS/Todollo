import React from 'react';
import { Link } from 'react-router-dom';

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
                <li key={board.id}>
                    <Link to={`/boards/${board.id}`}>{board.title}</Link>
                </li>
            );
        })


        return(
            <div className="boards-content">
                <h1>Personal Boards</h1>
                <ul className="boards-list">
                    {boards_arr}
                </ul>
                <button>Create New Board</button>
            </div>
        );
    }
}

export default BoardIndex;


