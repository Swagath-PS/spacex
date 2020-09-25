import { BASE_API_URL } from '../Utility/UrlConstants'
import { FETCH_SPACE_INFO, FETCH_SPACE_INFO_FILTERED, GET_ERRORS } from '../Utility/AppConstants'


const headerOptions = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    }
};


export const fetchSpaceData = () => dispatch => {
    fetch(BASE_API_URL, headerOptions)
        .then(response => response.json())
        .then(response => {
            dispatch({ type: FETCH_SPACE_INFO, payload: response });
        })
        .catch(err => dispatch(getErrors(err.message)));
};

export const fetchSpaceDataFIlter = (URL__FILTER) => dispatch => {


    fetch(URL__FILTER, headerOptions)
        .then(response => response.json())
        .then(response => {
            dispatch({ type: FETCH_SPACE_INFO_FILTERED, payload: response });
        })
        .catch(err => dispatch(getErrors(err.message)));
};

export const getErrors = errorMessage => {
    return {
        type: GET_ERRORS,
        payload: errorMessage
    };
};