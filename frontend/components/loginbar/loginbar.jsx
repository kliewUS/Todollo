import React from 'react';
import { Link } from 'react-router-dom';

const LoginBar = () => {
    return (
        <nav className="login-bar">
        <nav className="login-bar-left">
            <Link to='/' className="login-logo">Todollo</Link>
        </nav>
        <nav className="login-bar-right">
            <Link className="login-btn" to="/login">Log In</Link>
            <Link className="login-btn" to="/signup">Sign Up</Link>
        </nav>        
      </nav>  
    );
}

export default LoginBar;