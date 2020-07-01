import React from 'react';

class BoardShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            sideNavOpen: false
        }

        this.toggleSideBar = this.toggleSideBar.bind(this);
    }

    componentDidMount(){
        this.props.requestBoard(this.props.match.params.boardId);
    }

    toggleSideBar(){
        if(this.state.sideNavOpen === false){
            this.setState({sideNavOpen: true});
        }else{
            this.setState({sideNavOpen: false});
        }
    }

    render(){

        if (this.props.board === undefined){ //Allows the board to render the page again.
            return null;
        }

        let boardVisible = this.props.board.visibility === true ? ('Public') : ('Private');
        
        let sideNavOpen = this.state.sideNavOpen ? 'open' : 'closed';

        return (
            <div className="board-show-main">
                <div className="board-show-navbar">
                    <h1>{this.props.board.title}</h1>
                    <h2>{boardVisible}</h2>
                    <button>{this.props.currentUser.username.substring(0, 1)}</button>
                    <button>Invite</button>
                    <button onClick={this.toggleSideBar}>Show Menu</button>                
                </div>
                <div className="board-lists">
                    <button>Add New List</button>
                </div>
                <div className={`side-nav ${sideNavOpen}`}>
                    <button onClick={this.toggleSideBar}>Close</button>
                    <ul>
                        <li>Update Board</li>
                        <li>Delete Board</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default BoardShow