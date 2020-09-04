import React from 'react';


class BoardForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            owner_id: this.props.currentUser.id,
            visibility: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentWillUnmount(){
        this.props.clearBoardErrors();
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value}); //[] will make variable evaluated before it's turned into a key.
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const board = Object.assign({}, this.state);
        if(this.state.title.length > 0){
            this.props.closeModal();
            this.props.processBoard(board)
                .then((res) => 
                {
                    this.props.postBoardMember({board_id: res.board.id, user_id: this.state.owner_id})
                    .then(() => 
                    {
                        this.props.history.push(`/boards/${res.board.id}`)
                    })
                });
        }
    }


    render(){
        return(
        <div className="board-create-content">
            <form className="board-create-form" onSubmit={this.handleSubmit}>

                <div className="board-create-main-form">
                    <input className="board-title-input" type="text" placeholder="Add board title" value={this.state.title} onChange={this.handleInput('title')}/>
                    <span onClick={() => this.props.closeModal()} className="material-icons board-create-close-btn">clear</span>                 
                    <select id="visibility" value={this.state.visibility} onChange={this.handleInput('visibility')}>
                        <option value="true">Public</option>
                        <option value="false">Private</option>
                    </select>
                </div>

                <div className="board-create-btn">
                    <button id="new-board-btn" type="submit" disabled={!this.state.title}>Create Board</button>
                </div>

            </form>
        </div>
        )
    }
}

export default BoardForm;