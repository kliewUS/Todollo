import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AccountMenuContainer from '../navbar/account_menu_container';
import NotificationsMenu from '../navbar/notifications_menu';
import InformationMenu from '../navbar/information_menu';
import BoardCreateMenu from '../navbar/board_create_menu';
import BoardNavMenu from '../navbar/board_nav_menu';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  let background = 'transparent';

  switch (modal) {
    case 'account-menu':
        component = <AccountMenuContainer />;
        background = 'none';
        break;      
    case 'notification-menu':
        component = <NotificationsMenu />;
        background = 'none';        
        break;      
    case 'information-menu':
        component = <InformationMenu />;
        background = 'none';        
        break;
    case 'board-create-menu':
        component = <BoardCreateMenu />;
        break;      
    case 'board-nav-menu':
        component = <BoardNavMenu />;
        background = 'none';        
        break;      
    default:
      return null;
  }
  
  return (
    <div className={`modal-background ${background}`} onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
