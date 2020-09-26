import React from 'react';

class BoardMembershipIndexShow extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.isOwner = this.isOwner.bind(this);
        this.handleOwnerCheck = this.handleOwnerCheck.bind(this);
    }

    handleClick(e, boardId){
        e.preventDefault();
        this.props.openModal(boardId)        
    }

    handleDelete(e){
        e.preventDefault();
        this.props.destroyBoardMember(this.props.memberId)
            .then(() => {
                this.props.closeModal();
            });
    }

    //These two methods are not DRY. Will need to refactor in another time.
    isOwner(member){
        let board = this.props.boards.find(board => board.id === member.boardId);
        if(board.ownerId === member.userId){
            return true;
        }else{
            return false;
        }
    }

    handleOwnerCheck(member){
        let board = this.props.boards.find(board => board.id === member.boardId);
        if(board.ownerId === this.props.currentUser.id){
            return true;
        }else{
            return false;
        }        
    }    
 
    render(){

        let getMember = this.props.boardMembership.find(bdm => bdm.id === this.props.memberId);

        let isMemberOwner = (getMember !== undefined) ? (this.isOwner(getMember)) : (false);
        let ownerCheck = (getMember !== undefined) ? (this.handleOwnerCheck(getMember)) : (false);

        let getUsername = (getMember !== undefined) ? (this.props.userProfile.find(user => user.id === getMember.userId)) : ({username: ""});

        let deleteBtn = (isMemberOwner === false && ownerCheck === true) ? (<button className="bdm-delete-btn" onClick={this.handleDelete}>Remove Board Member</button>) : (null);

        return(
            <div className="bdm-show-modal-2">
                <div className="bdm-show-content">
                    <span onClick={(e) => this.handleClick(e, getMember.boardId)} className="material-icons bdm-show-back-btn">keyboard_backspace</span>
                    <span onClick={this.props.closeModal} className="material-icons bdm-show-close-btn-2">clear</span>
                    <h2>Member</h2>
                    <hr />
                </div>
                    <p className="bdm-show-name-btn">{getUsername.username.substring(0, 1)}</p>
                    <p className="bdm-show-name">{getUsername.username}</p>
                    {deleteBtn}
            </div>
        );
    }

}

export default BoardMembershipIndexShow;