import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';
import * as errorHandlerActions from './errorHandlerActions';

const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data: data
    }
}

// counld be response, or resp
export const getData = (url, props) => {
    console.log('get data')
    return (dispatch) => {
        console.log('before get data')
        axios.get(url)
        .then(response => {
            console.log(response)
            dispatch(getDataSuccess(response.data))
        }).catch(error =>{
            //TODO: handle error when implement
            dispatch(errorHandlerActions.handleHTTPError(error, props));
        })
    }
}
const postDataSuccess = (response) => {
    return {
        type: actionTypes.POST_DATA_SUCCESS,
        response: response 
    }
}

// counld be response, or resp
export const postData = (url, obj, props) => {
    return (dispatch) => {
        console.log("dispatch= ")
        console.log("url=" + url)
        console.log(obj)
        axios.post(url, obj)
        .then(response => {
            console.log(response)
            dispatch(postDataSuccess(response))
        }).catch(error =>{
            console.log("error.response= ", error.response)
            //TODO: handle error when implement
            dispatch(errorHandlerActions.handleHTTPError(error, props));
        })
    }
}

const putDataSuccess = (response) => {
    return {
        type: actionTypes.PUT_DATA_SUCCESS,
        response: response 
    }
}

// counld be response, or resp
export const putData = (url, obj, props) => {
    return (dispatch) => {
        axios.put(url, obj)
        .then(response => {
            dispatch(putDataSuccess(response))
        }).catch(error =>{
            //TODO: handle error when implement
            dispatch(errorHandlerActions.handleHTTPError(error, props));
        })
    }
}

const deleteDataSuccess = (response) => {
    return {
        type: actionTypes.DELETE_DATA_SUCCESS,
        response: response 
    }
}

// counld be response, or resp
export const deleteData = (url, props) => {
    return (dispatch) => {
        axios.delete(url)
        .then(response => {
            dispatch(deleteDataSuccess(response))
        }).catch(error =>{
            //TODO: handle error when implement
            dispatch(errorHandlerActions.handleHTTPError(error, props));
        })
    }
}

// take 2 params: props, url
// return an object: send them to reducer to change reducer
export const closeSuccessModal = (props, url) => {
    return {
        type: actionTypes.CLOSE_SUCCESS_MODAL,
        props: props,
        url: url
    }
}