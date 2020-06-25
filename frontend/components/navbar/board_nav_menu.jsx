import React from 'react';


class BoardNavMenu extends React.Component{
    constructor(props){
        super(props);
    }

    showModal(field){
        if(this.props.modal === field){
            return () => this.props.closeModal();
        }else{
            return () => this.props.openModal(field);
        }
    }    
    
    render(){

        return (
            <div className="board-nav">
                <div className='board-nav-header'>
                    <span className="material-icons person-icon">person</span>
                    <h3 id="board-nav-header">PERSONAL BOARDS</h3>
                    <span onClick={this.props.closeModal} className="material-icons board-nav-close-btn ">clear</span> 
                </div>
                <hr className='menu-line'/>
                <ul className="board-nav-content">
                    <li>Board 1</li>
                    <li>Board 2</li>
                    <li>Board 3</li>
                    <li>Board 4</li>
                    <li>Board 5</li>
                    <li id="create-board-btn" onClick={this.showModal('board-create-menu')}>Create New Board...</li>
                </ul>
            </div>
        );
    }
}


// const BoardNavMenu = (props) => {
//     return (
//         <div className="board-nav">
//             <div className='board-nav-header'>
//                 <h3 id="board-nav-header">PERSONAL BOARDS</h3>
//                 <span onClick={() => props.closeModal()} className="material-icons board-nav-close-btn ">clear</span> 
//             </div>
//             <hr className='menu-line'/>
//             <ul className="board-nav-content">
//                 <li>Board 1</li>
//                 <li>Board 2</li>
//                 <li>Board 3</li>
//                 <li>Board 4</li>
//                 <li>Board 5</li>
//                 <li><button id="create-board-btn">Create New Board...</button></li>
//             </ul>
//         </div>
//     );
// }

export default BoardNavMenu;