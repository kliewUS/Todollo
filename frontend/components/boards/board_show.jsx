import React from 'react';
import BoardShowNavBar from './board_show_navbar';

class BoardShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestBoard(this.props.match.params.boardId);
    }

    render(){
        return (
            <BoardShowNavBar 
                board={this.props.board}
                patchBoard={this.props.patchBoard}
                destroyBoard={this.props.destroyBoard}
                clearErrors={this.props.clearErrors}
                currentUser={this.props.currentUser}
                errors={this.props.errors}
            />
        )
    }

}

export default BoardShow