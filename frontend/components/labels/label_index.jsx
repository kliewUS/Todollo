import React from 'react';
import LabelIndexItemContainer from './label_index_item_container';

class LabelIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestLabels();
    }

    render(){
        let labels_arr = this.props.labels
            .map((label) => {
                let labelCheck = this.props.cardLabels.find(cardLabel => cardLabel.labelId === label.id && cardLabel.cardId === this.props.cardId);
                let checkMark = (labelCheck !== undefined) ? (true) : (false);
                return (
                    <LabelIndexItemContainer key={label.id} labelName={label.name} labelId={label.id} cardId={this.props.cardId} checkMark={checkMark}/>
                )
            });

        return(
            <div className="label-index">
                {labels_arr}
                {/* Create Label onClick will be placed here. Will need to pass in LabelId to get back to label_index (LabelForm) */}
            </div>
        );
    }

}

export default LabelIndex;