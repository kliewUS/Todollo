import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component{
    constructor(props){
        super(props);
    }


    componentDidMount(){ //Any existing modal should close when visiting a new page.
        this.props.closeModal();
    }

    componentWillUnmount(){ //Should also close modal when leaving a page.
        this.props.closeModal();
    }

    showModal(field){
        if(this.props.modal === field){
            return () => this.props.closeModal();
        }else{
            return () => this.props.openModal(field);
        }
    }

    render(){
        const {currentUser} = this.props;

        return (
            <nav className="nav-bar">

                <nav className="nav-bar-left">
                    <button className="nav-btn-2">Home</button>
                    <button className="nav-btn-2" onClick={this.showModal('board-nav-menu')}>Boards</button>
                    <input className="search-bar" type="text"/>
                </nav>

                <nav className="nav-bar-center">
                    <h1 className="logo">Todollo</h1>            
                </nav>

                <nav className="nav-bar-right">
                    <button className="nav-btn-2" onClick={this.showModal('board-create-menu')}>Create New Board</button>
                    <button className="nav-btn-2" onClick={this.showModal('information-menu')}>Information</button>
                    <button className="nav-btn-2" onClick={this.showModal('notification-menu')}>Notifications</button>
                    <button className="logout-btn" onClick={this.showModal('account-menu')}>{currentUser.username.substring(0, 1)}</button>
                </nav>

            </nav>   
        );
    }
}

export default NavBar;


//May need to refactor this component.
// export default ({ currentUser, logoutUser }) => { //{} Destructing
//     const navBar = () => (
//         <nav className="nav-bar">

//             <nav className="nav-bar-left">
//                 <button className="nav-btn-2">Home</button>
//                 <button className="nav-btn-2">Boards</button>
//                 <input className="search-bar" type="text"/>
//             </nav>

//             <nav className="nav-bar-center">
//                 <h1 className="logo">Todollo</h1>            
//             </nav>

//             <nav className="nav-bar-right">
//                 <button className="nav-btn-2">Create New Board</button>
//                 <button className="nav-btn-2">Information</button>
//                 <button className="nav-btn-2">Notifications</button>
//                 <button className="logout-btn" onClick={logoutUser}>{currentUser.username.substring(0, 1)}</button>
//             </nav>

//         </nav>        
//     );

//     return navBar();
// };
