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
                    <button className="nav-btn-2" onClick={this.showModal('app-menu')}><span className="material-icons nav-icons">apps</span></button>
                    <Link to='/boards'><button className="nav-btn-2"><span className="material-icons nav-icons">home</span></button></Link>
                    <button className="nav-btn-2 board-btn" onClick={this.showModal('board-nav-menu')}><span className="material-icons boards-icon">assignment</span> Boards</button>

                    <div className="search-content">
                        <input className="search-bar" type="text"/>
                        <span className="material-icons search-icon">search</span>
                    </div>
                </nav>

                <nav className="nav-bar-center">
                    <Link to='/boards' className="logo">Todollo</Link>
                </nav>

                <nav className="nav-bar-right">
                    <button className="nav-btn-2" onClick={this.showModal('board-create-menu')}><span className="material-icons nav-icons">add_box</span></button>
                    <button className="nav-btn-2" onClick={this.showModal('information-menu')}><span className="material-icons nav-icons">info</span></button>
                    <button className="nav-btn-2" onClick={this.showModal('notification-menu')}><span className="material-icons nav-icons">notifications</span></button>
                    <button className="logout-btn" onClick={this.showModal('account-menu')}>{currentUser.username.substring(0, 1)}</button>
                </nav>

            </nav>   
        );
    }
}

export default NavBar;
