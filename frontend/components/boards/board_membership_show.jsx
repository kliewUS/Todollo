import React from 'react';

class BoardMembershipShow extends React.Component{
    constructor(props){
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
        this.isOwner = this.isOwner.bind(this);
        this.handleOwnerCheck = this.handleOwnerCheck.bind(this);
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
            <div className="bdm-show-modal">
                <span onClick={this.props.closeModal} className="material-icons bdm-show-close-btn">clear</span> 
                <div className="bdm-show-content">
                    <p className="bdm-show-name-btn">{getUsername.username.substring(0, 1)}</p>
                    <p className="bdm-show-name">{getUsername.username}</p>
                    {deleteBtn}
                </div>
            </div>
        );
    }

}

export default BoardMembershipShow;