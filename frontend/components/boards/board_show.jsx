import React from 'react';

class BoardShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestBoard(this.props.match.params.boardId);
    }

    render(){

        if (this.props.board === undefined){ //Allows the board to render the page again.
            return null;
        }

        let boardVisible = this.props.board.visibility === true ? ('Public') : ('Private'); 


        return (
            <div className="board-show-main">
                <h1>{this.props.board.title}</h1>
                <h2>{boardVisible}</h2>
                <button>{this.props.currentUser.username.substring(0, 1)}</button>
                <button>Invite</button>
                <button>Show Menu</button>                
                <button>Add New List</button>
            </div>
        )
    }

}

export default BoardShow