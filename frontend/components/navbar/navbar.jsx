import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logoutUser }) => { //{} Destructing
    const welcome = () => (
        <nav className="nav-bar">
            <h3>{currentUser.username}</h3>
            <button onClick={logoutUser}>Log Out</button>
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

    return currentUser ? welcome() : login();
};
