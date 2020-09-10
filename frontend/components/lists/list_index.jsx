import React from 'react';

class ListIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestLists();
    }

    handleSubmit(){
    }

    render(){
        return(<div>
            <p>List Index here</p>
        </div>)
    }
}

export default ListIndex