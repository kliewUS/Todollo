import React from 'react';

class BoardMembershipMenu extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.props.requestUsers();
    // }

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
        // console.log(this.props.board);
        return(
            <div className="bdm-menu">
                <p className="bdm-content">Test Text</p>
            </div>
        )
    }

}


export default BoardMembershipMenu;