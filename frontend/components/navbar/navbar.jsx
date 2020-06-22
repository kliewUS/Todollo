import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => { //{} Destructing
    const welcome = () => (
        <div>
            <h3>Hello, {currentUser.username}!</h3>
            <button onClick={logout}>Log Out</button>
        </div>        
    );

    const login = () => (
        <div>
            <Link className="nav" to="/signup">Sign Up</Link>
            <Link className="nav" to="/login">Log In</Link>
        </div>        
    );

    return currentUser ? welcome() : login();
};
