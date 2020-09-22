import React from 'react';
class LabelIndexItem extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            checkMark: this.props.checkMark
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        let cardLabelCheck = this.props.cardLabels.find(cardLabel => cardLabel.labelId === id && cardLabel.cardId === this.props.cardId);

        if(cardLabelCheck === undefined){
            const cardLabel = {card_id: this.props.cardId, label_id: this.props.labelId};
            this.props.postCardLabel(cardLabel)
                .then(() => {
                    this.setState({checkMark: !this.props.checkMark})
                });
        }else{
            this.props.deleteCardLabel(cardLabelCheck.id)
                .then(() => {
                    this.setState({checkMark: !this.props.checkMark})
                });
        }

    }    

    render(){
        let labelName = (this.props.labelName !== "") ? (<p className="label-index-text">{this.props.labelName}</p>) : (<p className="label-index-text">&nbsp;</p>);

        return (
            <div className="label-index-item">
                <div className="label-index-item-main">
                    {labelName}
                </div>
                {/* Edit Label onClick will be placed here. Will need to pass in LabelId (UpdateForm) */}
            </div>
            );
    }
}

export default LabelIndexItem;