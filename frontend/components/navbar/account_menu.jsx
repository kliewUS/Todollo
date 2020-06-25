import React from 'react';

class AccountMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){ 
        // debugger
        const {currentUser, logoutUser, closeModal} = this.props;
        let username;
        if(currentUser){
            username = currentUser.username;
        }

        return (
            <div className="account-menu-content">
                
                <div id="current-user">
                    <span id="profile-name">{username}</span>
                    <span onClick={closeModal} className="material-icons close-btn">clear</span>
                </div>

                <ul id="account-menu-options">
                    <hr className='menu-line'/>
                    <li>Profile</li>
                    <li>Github</li>
                    <li>LinkedIn</li>
                    <hr className='menu-line'/>
                    <li><button className="account-logout-btn" onClick={logoutUser}>Logout</button></li>
                </ul>
            </div>
        );
    }
}

export default AccountMenu;