import React from 'react';

class BoardMembershipMenu extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.requestUsers();
    }

    componentWillUnmount(){
        this.props.clearBoardMemberErrors();
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value}); //[] will make variable evaluated before it's turned into a key.
        };
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div className="bdmMenu">
                <p>Test Text</p>
            </div>
        )
    }

}


export default BoardMembershipMenu;