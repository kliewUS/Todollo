import React from 'react';
class LabelIndexItem extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            labelName: this.props.labelName,
            checkMark: this.props.checkMark,
            inputVisible: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.clickForm = this.clickForm.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        let cardLabelCheck = this.props.cardLabels.find(cardLabel => cardLabel.labelId === this.props.labelId && cardLabel.cardId === this.props.cardId);

        if(cardLabelCheck === undefined){
            const card_label = {card_id: this.props.cardId, label_id: this.props.labelId};
            this.props.postCardLabel(card_label)
                .then(() => {
                    this.props.requestCardLabels();
                    this.setState({checkMark: !this.state.checkMark})
                });
        }else{
            this.props.destroyCardLabel(cardLabelCheck.id)
                .then(() => {
                    this.props.requestCardLabels();
                    this.setState({checkMark: !this.state.checkMark})
                });
        }
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }  
    }
    
    handleUpdate(e){
        e.preventDefault();
        this.clickForm();
        const updateLabel = {id: this.props.labelId, name: this.state.labelName};
        this.props.patchLabel(updateLabel)
        .then(() => {
            this.props.requestLabels(); 
        });
    }
    
    handleDelete(e){
        e.preventDefault();
        this.props.destroyLabel(this.props.labelId)
        .then(() => {
            this.props.requestCardLabels(); 
        });
    }

    clickForm(){
        this.setState({
            inputVisible: !this.state.inputVisible
        })
    }    

    render(){
        let check = (this.state.checkMark) ? (<span className="material-icons checkmark-icon">done</span>) : (null);

        let labelName = (this.props.labelName !== "") ? (
        <div className="label-index-content-2" onClick={this.handleClick}>
            <p className="label-index-text">{this.props.labelName}</p>
            {check}
        </div>
        ) : (
        <div className="label-index-content-2" onClick={this.handleClick}>
            <p className="label-index-text">&nbsp;</p>                        
            {check}
        </div>
        );

        let updateLabel = (this.state.inputVisible) ? 
        (
            <div className="label-update-modal">
                <h1>Change Label</h1>
                <button className="label-update-clear-btn" onClick={this.clickForm}><span className="material-icons label-clear-button">clear</span></button>
                <hr />
                <form className="label-update" onSubmit={this.handleUpdate}>
                    <label>Name</label>
                    <input id="label-update-input" type="text" value={this.state.labelName} onChange={this.update('labelName')} />
                    <div className="label-update-btn">
                        <button className="label-create-btn-2"><p className="label-create-content-btn-2">Save</p></button>
                    </div>
                </form>
            </div>
        ) : (null);

        return (
            <div className="label-index-item">
                <div className="label-index-item-main">
                    <div className="label-index-content">
                        {labelName}
                    </div>
                </div>
                <div className="label-edit-btns">
                    <span className="material-icons edit-button" onClick={this.clickForm}>create</span>
                    {updateLabel}
                    <span className="material-icons delete-button" onClick={this.handleDelete}>delete</span>
                </div>
            </div>
            );
    }
}

export default LabelIndexItem;