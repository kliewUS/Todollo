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
        this.boardMemberExpand = this.boardMemberExpand.bind(this);        
    }

    componentDidMount(){
        this.props.requestBoard(this.props.match.params.boardId)
                    .then((res) => {
                        this.setState({title: res.board.title, visibility: res.board.visibility}); //Pretty Hacky. Perhaps there's a better solution to this?
                    });
        this.props.requestBoardMembers();
        this.props.requestUsers();
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.boardId !== prevProps.match.params.boardId){
            this.props.requestBoard(this.props.match.params.boardId);
            this.props.requestBoardMembers();
            this.props.requestUsers();      
        }     
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
            this.props.destroyBoard(this.props.board.id)
                .then(() => 
                {
                    this.props.history.push(`/boards`)
                });            
        }
    }


    showModal(field){
        if(this.props.modal === field){
            return () => this.props.closeModal();
        }else{
            return () => this.props.openModal(field);
        }
    }    


    toggleSideBar(){
        if(this.state.sideNavOpen === false){
            this.setState({sideNavOpen: true});
        }else{
            this.setState({sideNavOpen: false});
        }
    }

    boardMemberExpand(count){
        return (<button className="left-show-btn" onClick={this.showModal('board-membership-index-menu')}><p className="left-show-content-btn count-btn">+{count - 5}</p></button>)
    }

    render(){
        let sideNavOpen = this.state.sideNavOpen ? 'open' : 'closed';
        let currentBoardId = parseInt(this.props.match.params.boardId);

        let boardMembers = this.props.boardMemberships
        .filter(boardMember => boardMember.boardId === currentBoardId)
        .slice(0, 5);

        let boardMemberCount = this.props.boardMemberships
        .filter(boardMember => boardMember.boardId === currentBoardId); //Not DRY. Will have to revise later if I have time.

        let boardMemberExpand = null;

        if(boardMemberCount.length > 5){
            boardMemberExpand = this.boardMemberExpand(boardMemberCount.length);
        }

        let users = (boardMembers.length > 0 && this.props.userRoster.length > 0) ? (boardMembers
            .map((member) => {

                let user = this.props.userRoster.find(x => x.id === member.userId); 

                //Key is not unique even though I have set the key to the primary key of the member object.
                //How would I pass the member.id to the Board Membership Show Component for this case?
                return (
                <ul>
                    <li data-text={user.username} className="tooltip left-show-btn" key={member.id}><p className="left-show-content-btn user-btn">{user.username.substring(0, 1)}</p></li>
                </ul>);            
        })) : (null);

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
                        {users}

                        {boardMemberExpand}
                        {/* <button className="left-show-btn" onClick={this.showModal('board-membership-index-menu')}><p className="left-show-content-btn">+{boardMemberCount.length - 5}</p></button> */}
                        <button className="left-show-btn" onClick={this.showModal('board-membership-menu')}><p className="left-show-content-btn">Invite</p></button>
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