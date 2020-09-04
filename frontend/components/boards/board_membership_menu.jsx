import React from 'react';

class BoardMembershipMenu extends React.Component{
    constructor(props){
        super(props)
        let users = this.props.userRoster.map((user) => {
            return user.username;
        });

        this.state = {
            names: users,
            searchTerm: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dynamicSearch = this.dynamicSearch.bind(this);  
    }
    
    dynamicSearch(){
        let search = this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));

        return search.map((name, i) => {
            return (
            <li key={i}>
                <button onClick={this.handleClick}>{name}</button>
            </li>)
        });
    }    

    componentWillUnmount(){
        this.props.clearBoardMemberErrors();
    }

    handleClick(e){
        console.log(e.target.textContent)
        this.setState({searchTerm: e.target.textContent});        
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value}); //[] will make variable evaluated before it's turned into a key.
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const searchTerm = this.state.searchTerm;
        let user = this.props.userRoster.find(x => x.username === searchTerm);
        this.props.postBoardMember({board_id: this.props.board[0].id, user_id: user.id});
    }

    render(){
        return(
            <div className="bdm-menu">
                <form className="bdm-create-form" onSubmit={this.handleSubmit}>
                    <input className="bdm-input" type="text" placeholder="Input a user" value={this.state.searchTerm} onChange={this.handleInput('searchTerm')}/>
                    <ul className="member-search">
                        {this.dynamicSearch()}
                    </ul>
                    <button id="new-bdm-btn" type="submit" disabled={!this.state.searchTerm}>Invite User</button>
                </form>
            </div>
        )
    }

}


export default BoardMembershipMenu;