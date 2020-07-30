import React from 'react';

class AccountMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){ 
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
                    <li><a href="https://github.com/kliewUS">Github</a></li>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <hr className='menu-line'/>
                    <li onClick={logoutUser}>Logout</li>
                </ul>
            </div>
        );
    }
}

export default AccountMenu;