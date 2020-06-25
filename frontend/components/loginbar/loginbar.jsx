import React from 'react';
import { Link } from 'react-router-dom';

const LoginBar = () => {
    return (
        <nav className="nav-bar">
        <nav className="nav-bar-left">
            <Link to='/' className="logo">Todollo</Link>
        </nav>
        <nav className="nav-bar-right">
            <Link className="nav-btn" to="/login">Log In</Link>
            <Link className="nav-btn" to="/signup">Sign Up</Link>
        </nav>        
      </nav>  
    );
}

export default LoginBar;