import React from 'react';

class CardLabelIndex extends React.Component{

    componentDidMount(){
        this.props.requestCardLabels()
        .then(() => {
            this.props.requestLabels();
        });
    }
    
    render(){
        let card_labels = (this.props.cardLabels !== undefined) ? 
        (            
        this.props.cardLabels
            .filter(cardLabel => cardLabel.cardId === this.props.cardId)
            .map((cardLabel) =>
            {
                let labelName = this.props.labels.find(label => cardLabel.labelId === label.id);
                let cardLabelName = (labelName !== undefined) ? (<p className="card-label-name">{labelName.name}</p>) : (<p className="card-label-name">&nbsp;</p>)
                return (
                    <div className="card-label-show" key={cardLabel.id}>
                        {cardLabelName}
                    </div>
                )
            })
        )        
        : (null);
        return (
            <div className="card-label-index">
                <div className="card-label-index-2">
                    {card_labels}
                </div>
            </div>
        );
    }

}

export default CardLabelIndex;