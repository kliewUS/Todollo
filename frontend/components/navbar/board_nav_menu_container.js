import BoardNavMenu from './board_nav_menu';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = (dispatch) => {
    // debugger
    return({
        openModal: (modal) => dispatch(openModal(modal))
    });
};

export default connect(null, mapDispatchToProps)(BoardNavMenu);
