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
                <ul id="account-menu-options">
                    <li id="profile-name">{username}</li>
                    <hr className='account-menu-line'/>
                    <li>Profile</li>
                    <li>Github</li>
                    <li>LinkedIn</li>
                    <hr className='account-menu-line'/>
                    <li><button className="account-logout-btn" onClick={logoutUser}>Logout</button></li>
                </ul>
        );
    }
}

export default AccountMenu;