import React from 'react';

const InformationMenu = (props) => {
    return (
        <div className="info-menu">
            <div className='info-header'>
                <p className="info-header-content">Information</p>
                <span onClick={() => props.closeModal()} className="material-icons info-close-btn">clear</span>                
            </div>
            <div className='info-content'>
                <hr className='menu-line'/>
                <p>Help Image</p>
                <hr className='menu-line'/>
                <p>Have some new tips</p>
            </div>
        </div>
    );
}

export default InformationMenu;