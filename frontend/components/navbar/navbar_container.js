import NavBar from './navbar';
import { connect } from 'react-redux';
import {logoutUser} from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    modal: state.ui.modal
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())    
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
