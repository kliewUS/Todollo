import NavBar from './navbar';
import { connect } from 'react-redux';
import {logoutUser} from '../../actions/session_actions'

const mapStateToProps = (state) => ({
    currentUser: state.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser())    
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
