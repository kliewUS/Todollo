import React from 'react';

const AppMenu = (props) => {
    return (
        <div className="app-menu">
            <div className='app-header'>
                <p className="app-header-content">More from Todollo</p>
                <span onClick={() => props.closeModal()} className="material-icons app-close-btn">clear</span>                
            </div>
            <div className='app-content'>
                <hr className='menu-line'/>
                <ul id="app-menu-content">
                    <li><a href="https://github.com/kliewUS">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/khai-yuan-liew-397600143/">Linkedin</a></li>
                    <li><a href="https://angel.co/u/khai-yuan-liew">AngelList</a></li>
                    <li><a href="https://kliewus.github.io/portfolio/">Portfolio</a></li>
                </ul>
            </div>
        </div>
    );
}

export default AppMenu;