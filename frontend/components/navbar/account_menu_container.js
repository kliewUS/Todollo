import AccountMenu from './account_menu';
import { connect } from 'react-redux';
import {logoutUser} from '../../actions/session_actions'

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu);
