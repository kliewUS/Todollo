import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logoutUser }) => { //{} Destructing
    const navBar = () => (
        <nav className="nav-bar">

            <nav className="nav-bar-left">
                <button className="nav-btn-2">Home</button>
                <button className="nav-btn-2">Boards</button>
                <input className="search-bar" type="text"/>
            </nav>

            <nav className="nav-bar-center">
                <h1 className="logo">Todollo</h1>            
            </nav>

            <nav className="nav-bar-right">
                <button className="nav-btn-2">Create New Board</button>
                <button className="nav-btn-2">Information</button>
                <button className="nav-btn-2">Notifications</button>
                <button className="logout-btn" onClick={logoutUser}>{currentUser.username.substring(0, 1)}</button>
            </nav>

        </nav>        
    );

    const login = () => (
      <nav className="nav-bar">
        <nav className="nav-bar-left">
            <h1 className="logo">Todollo</h1>
        </nav>
        <nav className="nav-bar-right">
            <Link className="nav-btn" to="/login">Log In</Link>
            <Link className="nav-btn" to="/signup">Sign Up</Link>
        </nav>        
      </nav>  
    );

    return currentUser ? navBar() : login();
};
