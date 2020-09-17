import React from "react";
import {connect} from 'react-redux';
import ListIndexItem from "./list_index_item";
import { requestLists, patchList, destroyList } from "../../actions/list_actions";

const mapStateToProps = (state) => {
    return {       
        // lists: Object.values(state.entities.lists),   
        errors: state.errors.listErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    // requestLists: () => dispatch(requestLists()),
    patchList: (list) => dispatch(patchList(list)),
    destroyList: (listId) => dispatch(destroyList(listId)),
    clearErrors: () => dispatch(receiveListErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndexItem);