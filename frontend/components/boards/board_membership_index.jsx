import React from 'react';

class BoardMembershipIndex extends React.Component{
    constructor(props){
        super(props);

        let currentBoardId = parseInt(this.props.boardId);

        let boardMembers = this.props.boardMemberships
        .filter(boardMember => boardMember.boardId === currentBoardId);

        let users = boardMembers.map((member) => {
            let user = this.props.userRoster.find(x => x.id === member.userId); 
            return user.username;              
        });


        this.state = {
            names: users,
            bdms: boardMembers,
            searchTerm: ''  
        }
        this.handleClick = this.handleClick.bind(this);  
        this.dynamicSearch = this.dynamicSearch.bind(this);  
    }

    handleClick(e, memberId){
        e.preventDefault();
        this.props.openModal(memberId);
    }

    dynamicSearch(){
        let search = this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));

        return search.map((name, i) => {

            return (
            <li data-text={name} className="tooltip bdm-show-btn" key={i}>
                <p className="bdm-show-content-btn user-btn" onClick={(e) => this.handleClick(e,this.state.bdms[i].id)}>{name.substring(0, 1)}</p>
            </li>)
        });
    }
    
    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value}); //[] will make variable evaluated before it's turned into a key.
        };
    }   


    render(){
        return(
            <div className="bdm-index-content">
                <p>Board Members</p>
                <span onClick={this.props.closeModal} className="material-icons bdm-index-close-btn">clear</span>                   
                <hr />
                <input className="bdm" type="text" placeholder="Search members" value={this.state.searchTerm} onChange={this.handleInput('searchTerm')}/>
                <ul className="bdm-index-search">
                    {this.dynamicSearch()}
                </ul>
            </div>
        )
    }
}

export default BoardMembershipIndex;