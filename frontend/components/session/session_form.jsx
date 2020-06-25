import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value}); //[] will make variable evaluated before it's turned into a key.
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render(){

        const demoUser = {
            username: 'Edmund',
            password: 'hunter12'
        }

        let accountHeader = this.props.formType === 'Log In' ? ('Log in to Todollo') : ('Sign up for your account');                            

        let demoButton = this.props.formType === 'Log In' ?
                            (<button className="session-btn" onClick={() => this.props.processForm(demoUser)}>Demo Log In</button>) :
                            (null);

        let switchFormLink = this.props.formType === 'Log In' ? 
                            (<Link to='/signup'>Sign up for an account</Link>) : 
                            (<Link to='/login'>Already have an account? Log In</Link>);


        const sessionError = this.props.errors[0] ? 
                            (<h1 className="errors-list">{this.props.errors[0]}</h1>) :
                            (null);

        return (
            <div className="main-session-form">

                <div className="session-header">
                    <h1 id="session-logo">Todollo</h1>
                </div>

                <div className="session-form">
                    {sessionError}

                    <h1 className="account-header">{accountHeader}</h1>

                    <form className="account-form" onSubmit={this.handleSubmit}>
                            <input id="username-input" type="text" placeholder="Enter username" value={this.state.username} onChange={this.handleInput('username')}/>
                            <input id="password-input" type="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInput('password')}/>
                            <button className="session-btn" type="submit">{this.props.formType}</button>
                    </form>
                    {demoButton}
                    <hr/>
                    <p>{switchFormLink}</p>
                </div>
            </div>
        )
    }
};

export default SessionForm;