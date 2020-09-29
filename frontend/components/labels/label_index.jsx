import React from 'react';
import LabelIndexItemContainer from './label_index_item_container';

class LabelIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            showInput: false,
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickForm = this.clickForm.bind(this);    
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
    
    clickForm(){
        this.setState({
            showInput: !this.state.showInput
        })
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

        let addLabelInput = (this.state.showInput === true) ? 
        (
            <form className="label-create" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input id="label-create-input" type="text" value={this.state.name} onChange={this.update('name')} />
                <div className="label-create-btns">
                    <button className="label-create-btn-2"><p className="label-create-content-btn-2">Save</p></button>
                    <span onClick={this.clickForm} className="material-icons label-create-close-btn">clear</span> 
                </div>
            </form>
        ) : (<button className="label-create-btn" onClick={this.clickForm}><p className="label-create-content-btn">Create Label</p></button>);


        return(
            <div className="label-index">
                <span onClick={this.props.handleClick} className="material-icons label-index-clear-icon">clear</span> 
                <h1>Labels</h1>
                <hr />
                <p>Labels</p>
                {labels_arr}
                {addLabelInput}
            </div>
        );
    }

}

export default LabelIndex;