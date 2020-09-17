import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AccountMenuContainer from '../navbar/account_menu_container';
import NotificationsMenu from '../navbar/notifications_menu';
import InformationMenu from '../navbar/information_menu';
import BoardFormContainer from '../boards/board_form_container';
import BoardNavMenuContainer from '../navbar/board_nav_menu_container';
import BoardMembershipMenuContainer from '../boards/board_membership_menu_container';
import BoardMembershipShowContainer from '../boards/board_membership_show_container';
import BoardMembershipIndexContainer from '../boards/board_membership_index_container';
import CardShowContainer from '../cards/card_show_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  // debugger;
  let component;
  let background = 'transparent';
  switch (modal.type) {
    case 'account-menu':
        component = <AccountMenuContainer closeModal={closeModal} />;
        background = 'none';
        break;      
    case 'notification-menu':
        component = <NotificationsMenu closeModal={closeModal} />;
        background = 'none';        
        break;      
    case 'information-menu':
        component = <InformationMenu closeModal={closeModal} />;
        background = 'none';        
        break;
    case 'board-create-menu':
        component = <BoardFormContainer closeModal={closeModal} />;
        break;      
    case 'board-nav-menu':
        component = <BoardNavMenuContainer closeModal={closeModal} />;
        background = 'none';        
        break;
    case 'board-membership-menu':
        // debugger;
        component = <BoardMembershipMenuContainer closeModal={closeModal} />;
        background = 'none';        
        break;
    case 'board-membership-show':
        component = <BoardMembershipShowContainer closeModal={closeModal} />;
        background = 'none';        
        break;
    case 'board-membership-index-menu':
        component = <BoardMembershipIndexContainer closeModal={closeModal} />;
        background = 'none';        
        break;
    case 'card-show-menu':
        debugger;
        component = <CardShowContainer closeModal={closeModal} cardId={modal.id}/>;    
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
