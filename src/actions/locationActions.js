import { REQUEST_LOC_DATA, RECEIVE_LOC_DATA } from "../actionTypes/actions-types";


// Define actions
export const requestLocData = () => {
    return {
        type: REQUEST_LOC_DATA
    }
}

export const receiveLocData = (payload) => {
    return {
        type: RECEIVE_LOC_DATA,
        locData: payload
    }
}

// Define async api call action
export const fetchLocDataAsync = (query) => {
    return dispatch => {
        dispatch(requestLocData);
    
        // Fetch
        fetch(`/.netlify/functions/location?q=${query}`)
            .then(res => res.json())
            .then(data  => {
                console.log(data);
                dispatch(receiveLocData(data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}