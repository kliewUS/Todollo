import React from 'react';

class BoardShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: this.props.board.title,
            visibility: this.props.board.visibility,
            sideNavOpen: false
        }

        this.toggleSideBar = this.toggleSideBar.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentDidMount(){
        this.props.requestBoard(this.props.match.params.boardId)
                    .then((res) => {
                        this.setState({title: res.board.title, visibility: res.board.visibility}); //Pretty Hacky. Perhaps there's a better solution to this?
                    });
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
        
    }

    handleSubmit(e){
        e.preventDefault();
        const updateBoard = {id: this.props.match.params.boardId, title: this.state.title, owner_id: this.props.currentUser.id};
        this.props.patchBoard(updateBoard);
    }


    toggleSideBar(){
        if(this.state.sideNavOpen === false){
            this.setState({sideNavOpen: true});
        }else{
            this.setState({sideNavOpen: false});
        }
    }

    render(){

        let boardVisible = this.props.board.visibility === true ? ('Public') : ('Private');
        
        let sideNavOpen = this.state.sideNavOpen ? 'open' : 'closed';

        return (
            <div className="board-show-main">
                <div className="board-show-navbar">

                    <form onSubmit={this.handleSubmit}>
                        <input id="title-input" type="text" value={this.state.title} onChange={this.update('title')} onBlur={this.handleSubmit} />
                    </form>

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
                        <li>Delete Board</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default BoardShow