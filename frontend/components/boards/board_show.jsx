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
        this.handleDelete = this.handleDelete.bind(this);        
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
        const updateBoard = {id: this.props.match.params.boardId, title: this.state.title, visibility: this.state.visibility, owner_id: this.props.currentUser.id};
        this.props.patchBoard(updateBoard);
    }

    handleDelete(e){
        e.preventDefault();
        if(this.props.board.ownerId === this.props.currentUser.id){
            this.props.destroyBoard(this.props.match.params.boardId)
                .then(() => 
                {
                    this.props.history.push(`/boards`)
                });            
        }
    }


    toggleSideBar(){
        if(this.state.sideNavOpen === false){
            this.setState({sideNavOpen: true});
        }else{
            this.setState({sideNavOpen: false});
        }
    }

    render(){

        let sideNavOpen = this.state.sideNavOpen ? 'open' : 'closed';

        return (
            <div className="board-show-main">
                <div className="board-show-navbar">

                    <div id="left-show-menu">
                        <form onSubmit={this.handleSubmit}>
                            <input id="title-input" type="text" value={this.state.title} onChange={this.update('title')} onBlur={this.handleSubmit} />
                            <select id="visibility-show-btn" value={this.state.visibility} onChange={this.update('visibility')} onBlur={this.handleSubmit}>
                                <option value="true">Public</option>
                                <option value="false">Private</option>
                            </select>                            
                        </form>

                        <button className="left-show-btn"><p className="left-show-content-btn user-btn">{this.props.currentUser.username.substring(0, 1)}</p></button>
                        <button className="left-show-btn" onClick={this.props.openModal}><p className="left-show-content-btn">Invite</p></button>
                        {/* <button className="left-show-btn"><p className="left-show-content-btn">Invite</p></button> */}
                    </div>

                    <div id="right-show-menu">
                        <button className="right-show-btn" onClick={this.toggleSideBar}><p className="right-show-content-btn">Show Menu</p></button>                
                    </div>

                </div>
                <div className="board-lists">
                    <button className="show-btn"><p className="show-content-btn">Add New List</p></button>
                </div>
                <div className={`side-nav ${sideNavOpen}`}>
                    <div className="side-nav-header">
                        <h3 id="sidenav-title">Menu</h3>
                        <span onClick={this.toggleSideBar} className="material-icons close-btn-2">clear</span>
                    </div>
                    <ul>
                        <hr className='menu-line'/>
                        <div className="sidenav-links">
                            <li><a href="https://github.com/kliewUS">Github</a></li>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </div>
                        <hr className='menu-line'/>
                        <li id="delete-btn" onClick={this.handleDelete}><p id="delete-text-btn">Delete Board</p></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default BoardShow