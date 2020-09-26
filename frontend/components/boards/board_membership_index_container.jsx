import React from "react";
import {connect} from 'react-redux';
import BoardMembershipIndex from './board_membership_index';
import { withRouter } from 'react-router-dom';
import { destroyBoardMember, requestBoardMember } from "../../actions/boardMembership_actions";
import {requestUser} from "../../actions/userRoster_actions";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    userRoster: Object.values(state.entities.userRoster),
    boardMemberships: Object.values(state.entities.boardMemberships),
});

const mapDispatchToProps = (dispatch) => ({
    openModal: (id) => dispatch(openModal('bdm-index-show-menu', id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardMembershipIndex));