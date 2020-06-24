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
        //Figure out a way how to clear errors messages upon switching login/signup.

        let errorsArr = this.props.errors.map((error, i) => {
            return (<li key={i}>{error}</li>);
        }); 

        const demoUser = {
            username: 'Edmund',
            password: 'hunter12'
        }

        let demoButton = () => {
            if (this.props.formType === 'Log In'){
                return (
                    <button onClick={() => this.props.processForm(demoUser)}>Demo Log In</button>
                );
            }else{
                return undefined;
            }
        }


        return (
            <div className="todollo"> 
                <div className="session-form">
                    <h1>{this.props.formType}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:
                            <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                        </label>
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                        </label>
                        <button type="submit">{this.props.formType}</button>
                    </form>
                    {demoButton()}
                    <ul className="errors_list">
                        {errorsArr}
                    </ul>
                </div>
            </div>
        )
    }
};

export default SessionForm;