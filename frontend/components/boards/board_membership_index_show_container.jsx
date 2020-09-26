import React from "react";
import {connect} from 'react-redux';
import BoardMembershipIndexShow from './board_membership_index_show';
import { withRouter } from 'react-router-dom';
import { destroyBoardMember, requestBoardMember } from "../../actions/boardMembership_actions";
import {requestUser} from "../../actions/userRoster_actions";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],  
    userProfile: Object.values(state.entities.userRoster),
    boards: Object.values(state.entities.boards),
    boardMembership: Object.values(state.entities.boardMemberships),
    errors: state.errors.boardMembershipErrors
});

const mapDispatchToProps = (dispatch) => ({
    openModal: (id) => dispatch(openModal('board-membership-index-menu', id)),
    destroyBoardMember: boardMemberId => dispatch(destroyBoardMember(boardMemberId)),
    // requestBoardMember: (boardMemberId) => dispatch(requestBoardMember(boardMemberId)),
    // requestUser: (userId) => dispatch(requestUser(userId)),
    clearBoardMemberErrors: () => dispatch(receiveBoardMemberErrors([]))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardMembershipIndexShow));