import BoardNavMenu from './board_nav_menu';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { requestBoards } from "../../actions/board_actions";

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],        
        boards: Object.values(state.entities.boards),     
        errors: state.errors.boardErrors
    }
};

const mapDispatchToProps = (dispatch) => {
    return({
        requestBoards: () => dispatch(requestBoards()),        
        openModal: (modal) => dispatch(openModal(modal)),
        clearErrors: () => dispatch(receiveBoardErrors([]))        
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardNavMenu);
