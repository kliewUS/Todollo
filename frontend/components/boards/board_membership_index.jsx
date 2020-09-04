import React from 'react';

class BoardMembershipIndex extends React.Component{
    constructor(props){
        super(props);
        let boardMembers = this.props.boardMemberships
        .filter(boardMember => boardMember.boardId === this.props.board[0]);
        let users = boardMembers.map((member) => {
            let user = this.props.userRoster.find(x => x.id === member.userId); 
            return user.username;              
        })

        this.state = {
            names: users,
            searchTerm: ''  
        }
        this.dynamicSearch = this.dynamicSearch.bind(this);  
    }

    dynamicSearch(){
        let search = this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));

        return search.map((name, i) => {
            return (
            <li data-text={name} class="tooltip" key={i}>
                {name.substring(0, 1)}
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
            <div>
                <input className="bdm" type="text" placeholder="Search for a user" value={this.state.searchTerm} onChange={this.handleInput('searchTerm')}/>
                <ul className="bdm-index-search">
                    {this.dynamicSearch()}
                </ul>
            </div>
        )
    }
}

export default BoardMembershipIndex;