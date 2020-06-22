import NavBar from './navbar';
import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions'

const mapStateToProps = (state) => ({
    currentUser: state.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())    
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
