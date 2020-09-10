import React from "react";
import {connect} from 'react-redux';
import ListIndex from "./list_index";
import { requestLists, patchList, postList } from "../../actions/list_actions";
// import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {       
        lists: Object.values(state.entities.lists),   
        errors: state.errors.listErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestLists: () => dispatch(requestLists()),
    postList: (list) => dispatch(postList(list)),
    patchList: (list) => dispatch(patchList(list)),
    destroyList: (listId) => dispatch(destroyList(listId)), //May move to another component.
    clearErrors: () => dispatch(receiveListErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);