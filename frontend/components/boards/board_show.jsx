import React from 'react';
import ListIndexContainer from '../lists/list_index_container';

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


    showModal(field, id){
        if(this.props.modal === field){
            return () => this.props.closeModal();
        }else{
            return () => this.props.openModal(field, id);
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
        return (<button className="left-show-btn" onClick={this.showModal('board-membership-index-menu', this.props.match.params.boardId)}><p className="left-show-content-btn count-btn">+{count - 5}</p></button>)
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

                return (
                    <li data-text={user.username} className="tooltip left-show-btn" key={member.id} onClick={this.showModal('board-membership-show', member.id)}><p className="left-show-content-btn user-btn">{user.username.substring(0, 1)}</p></li>
                );            
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

                        <ul className="bdm-members-list">
                            {users}
                            {boardMemberExpand}
                        </ul>

                        <button className="left-show-btn" onClick={this.showModal('board-membership-menu', this.props.match.params.boardId)}><p className="left-show-content-btn">Invite</p></button>
                    </div>

                    <div id="right-show-menu">
                        <button className="right-show-btn" onClick={this.toggleSideBar}><p className="right-show-content-btn">Show Menu</p></button>                
                    </div>

                </div>

                <ListIndexContainer boardId={this.props.board.id} />
                
                <div className={`side-nav ${sideNavOpen}`}>
                    <div className="side-nav-header">
                        <h3 id="sidenav-title">Menu</h3>
                        <span onClick={this.toggleSideBar} className="material-icons close-btn-2">clear</span>
                    </div>
                    <ul>
                        <hr className='menu-line'/>
                        <div className="sidenav-links">
                            <li>
                                <img src="https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/24dcf48c459a09ac70a3466f2e64a0bf4654ed2a/icons8-github-24.png" />
                                <a href="https://github.com/kliewUS">Github</a>
                            </li>
                            <li>
                                <img src="https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/24dcf48c459a09ac70a3466f2e64a0bf4654ed2a/icons8-linkedin-24.png" />
                                <a href="https://www.linkedin.com/in/khai-yuan-liew-397600143/">Linkedin</a>
                            </li>
                            <li>
                                <img src="https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/24dcf48c459a09ac70a3466f2e64a0bf4654ed2a/icons8-angellist-24.png" />
                                <a href="https://angel.co/u/khai-yuan-liew">AngelList</a>
                            </li>
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