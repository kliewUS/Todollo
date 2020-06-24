import React from 'react';

class AccountMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){ 
        const {currentUser, logoutUser} = this.props;    
        return (
            <div className="account-menu-content">
                <p>{currentUser.username}</p>
                <hr/>
                <ul id="account-menu-options">
                    <li>Profile</li>
                    <li>About</li>
                    <li><button onClick={logoutUser}>Logout</button></li>
                </ul>
            </div>
        );
    }
}

export default AccountMenu;