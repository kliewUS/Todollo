import React from 'react';

const NotificationsMenu = (props) => {
    return (
        <div className="notice-menu">
            <div className="notice-header">
                <p className="notice-header-text">Notifications</p>
                <span onClick={() => props.closeModal()} className="notice-close-btn">close</span> 
            </div>

            <hr className='menu-line'/>
            <p className="notice-comments">Notifications are found here!</p>
        </div>
    );
}

export default NotificationsMenu;