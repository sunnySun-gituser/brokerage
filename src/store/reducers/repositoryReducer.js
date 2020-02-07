import * as actionTypes from '../actions/actionTypes';

// Modal window: when the window on the top of evrything, do everything do with window
// build in the pages
// if you access sth, the modal window comes up says success
const initialState = {
    data: null,
    showSuccessModal: false
}
 
const executeGetDataSuccess = (state, action) =>{
    return {
        ...state,
        data: action.data 
    }
}

const executePostDataSuccess = (state, action) =>{
    return {
        ...state,
        showSuccessModal: true 
    }
}

const executePutDataSuccess = (state, action) =>{
    return {
        ...state,
        showSuccessModal: true 
    }
}

const executeDeleteDataSuccess = (state, action) =>{
    return {
        ...state,
        showSuccessModal: true 
    }
}

// false: closing it
// go back to owner page
const executeCloserSuccessModal = (state, action) =>{
    action.props.history.push(action.url);

    return {
        ...state,
        showSuccessModal: false
    }
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.GET_DATA_SUCCESS:
            return executeGetDataSuccess(state, action);
        case actionTypes.POST_DATA_SUCCESS:
            return executePostDataSuccess(state, action);
        case actionTypes.PUT_DATA_SUCCESS:
            return executePutDataSuccess(state, action);
        case actionTypes.DELETE_DATA_SUCCESS:
            return executeDeleteDataSuccess(state, action);
        case actionTypes.CLOSE_SUCCESS_MODAL:
            return executeCloserSuccessModal(state, action);
        default:
            return state;
    }
}
export default reducer;
