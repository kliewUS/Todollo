import React from 'react';

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

        let demoButton = () => {
            if (this.props.formType === 'Log In'){
                return (
                    <button className="session-btn" onClick={() => this.props.processForm(demoUser)}>Demo Log In</button>
                );
            }else{
                return undefined;
            }
        }

        let accountHeader = this.props.formType === 'Log In' ? ('Log in to Todollo') : ('Sign up for your account');

        let switchFormLink = this.props.formType === 'Log In' ? ('Sign up for an account') : ('Already have an account? Log In');

        let errorsArr = this.props.errors.map((error, i) => {
            return (<li key={i}>{error}</li>);
        });         


        return (
            <div className="todollo">

                <div className="session-header">
                    <h1 id="session-logo">Todollo</h1>
                </div>

                <div className="session-form">
                    <h1 className="account-header">{accountHeader}</h1>
                    <form className="account-form" onSubmit={this.handleSubmit}>
                            <input id="username-input" type="text" placeholder="Enter username" value={this.state.username} onChange={this.handleInput('username')}/>
                            <input id="password-input" type="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInput('password')}/>
                            <button className="session-btn" type="submit">{this.props.formType}</button>
                    </form>
                    {demoButton()}
                    <ul className="errors_list">
                        {errorsArr}
                    </ul>
                    <hr/>
                    <p>{switchFormLink}</p>
                </div>
            </div>
        )
    }
};

export default SessionForm;