import React from 'react';
import LabelIndexItemContainer from './label_index_item_container';

class LabelIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: ""
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    componentDidMount(){
        this.props.requestLabels();
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
    }        

    handleSubmit(e){
        e.preventDefault();
        const newLabel = {name: this.state.name};
        this.props.postLabel(newLabel)
            .then(() => {
                this.props.requestLabels();
                this.setState({name: ""});
            });
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
                <hr className="label-index-hr" />
                <form className="label-create" onSubmit={this.handleSubmit}>
                    <input id="label-create-input" type="text" value={this.state.name} onChange={this.update('name')} />
                    <button className="label-create-btn"><p className="label-create-content-btn">Save</p></button>
                </form>
                <hr className="label-index-hr" />
            </div>
        );
    }

}

export default LabelIndex;