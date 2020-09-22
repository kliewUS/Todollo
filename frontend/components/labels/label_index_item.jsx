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
    }

    handleClick(e){
        e.preventDefault();
        let cardLabelCheck = this.props.cardLabels.find(cardLabel => cardLabel.labelId === this.props.labelId && cardLabel.cardId === this.props.cardId);

        if(cardLabelCheck === undefined){
            const card_label = {card_id: this.props.cardId, label_id: this.props.labelId};
            this.props.postCardLabel(card_label)
                .then(() => {
                    this.props.requestLabels();
                    this.props.requestCardLabels();
                    this.setState({checkMark: !this.state.checkMark})
                });
        }else{
            this.props.destroyCardLabel(cardLabelCheck.id)
                .then(() => {
                    this.props.requestLabels();
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
    
    handleSubmit(e){
        e.preventDefault();
        this.clickForm();
        const updateLabel = {id: this.props.labelId, name: this.state.labelName};
        this.props.patchLabel(updateLabel)
        // .then(() => {
        //     this.props.requestLabels(); 
        // });
    }

    
    clickForm(){
        this.setState({
            inputVisible: !this.state.inputVisible
        })
    }    

    render(){
        let labelName = (this.props.labelName !== "") ? (<p className="label-index-text" onClick={this.handleClick}>{this.props.labelName}</p>) : (<p className="label-index-text" onClick={this.handleClick}>&nbsp;</p>);
        let updateLabel = (this.state.inputVisible) ? 
        (
            <form className="label-update" onSubmit={this.handleSubmit}>
                <input id="label-update-input" type="text" value={this.state.title} onChange={this.update('title')} onBlur={this.handleSubmit} />
            </form>
        ) : 
        (labelName);
        
        let check = (this.state.checkMark) ? (<span className="material-icons">done</span>) : (null);
        return (
            <div className="label-index-item">
                <div className="label-index-item-main">
                    {updateLabel}
                    {check}
                </div>
                {/* Edit Label button here */}
            </div>
            );
    }
}

export default LabelIndexItem;