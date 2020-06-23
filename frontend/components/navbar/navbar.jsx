import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logoutUser }) => { //{} Destructing
    const welcome = () => (
        <nav className="nav-bar">
            <h3>Hello, {currentUser.username}!</h3>
            <button onClick={logoutUser}>Log Out</button>
        </nav>        
    );

    const login = () => (
        <nav className="nav-bar">
            <Link className="nav-btn" to="/login">Log In</Link>
            <Link className="nav-btn" to="/signup">Sign Up</Link>
        </nav>        
    );

    return currentUser ? welcome() : login();
};
