import React from 'react';

class AccountMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){ 
        const {currentUser, logoutUser} = this.props;
        let username;
        if(currentUser){
            username = currentUser.username;
        }

        return (
            <div className="account-menu-content">
                <p>{username}</p>
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