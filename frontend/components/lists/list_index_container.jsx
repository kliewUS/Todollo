import React from "react";
import {connect} from 'react-redux';
import ListIndex from "./list_index";
import { requestLists, postList } from "../../actions/list_actions";

const mapStateToProps = (state) => {
    return {       
        lists: Object.values(state.entities.lists),   
        errors: state.errors.listErrors
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestLists: () => dispatch(requestLists()),
    postList: (list) => dispatch(postList(list)),
    clearErrors: () => dispatch(receiveListErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);