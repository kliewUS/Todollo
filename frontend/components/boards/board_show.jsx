import React from 'react';

class BoardShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestBoard(this.props.match.params.boardId);
    }

    render(){
        return (
            <div className="board-show-main">
                <p>This is a Board Show Page.</p>
            </div>
        )
    }

}

export default BoardShow