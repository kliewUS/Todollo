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
                <button className="name-item">{name}</button>
                {/* <button onClick={this.handleClick}>{name}</button> */}
            </li>)
        });
    }    

    componentWillUnmount(){
        this.props.clearBoardMemberErrors();
    }

    handleClick(e){
        
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

        if(user === undefined){
            this.props.postBoardMember({board_id: this.props.boardId, user_id: 0});
        }else{
            this.props.postBoardMember({board_id: this.props.boardId, user_id: user.id});
        }


    }

    render(){
        const bdmError = this.props.errors[0] ? 
                            (<h1 className="bdm-errors-list">{this.props.errors[0]}</h1>) :
                            (null);
        return(
            <div className="bdm-menu">

                <form className="bdm-create-form" onSubmit={this.handleSubmit}>
                    <p id="bdm-title">Invite To Board</p>
                    <span onClick={this.props.closeModal} className="material-icons bdm-menu-close-btn">clear</span>                    
                    <hr className="bdm-line"/>
                    <div className="bdm-create-input">                 
                    <input className="bdm-input" type="text" placeholder="Enter name" value={this.state.searchTerm} onChange={this.handleInput('searchTerm')}/>
                    <ul className="member-search">
                        {this.dynamicSearch()}
                    </ul>
                    {bdmError}
                    <button id="new-bdm-btn" type="submit" disabled={!this.state.searchTerm}>Invite User</button>
                    </div>
                </form>
            </div>
        )
    }

}


export default BoardMembershipMenu;