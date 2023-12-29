import { REQUEST_LOC_DATA, RECEIVE_LOC_DATA } from "../actionTypes/actions-types";

// Define initial state
const initialState = {
    locData: [],
    fetching: false
};

// Define reducer
export default function locationReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LOC_DATA:
            return {
                ...state,
                fetching: true
            }
        case RECEIVE_LOC_DATA:
            return {
                ...state,
                locData: action.locData,
                fetching: false
            }
        default:
            return state;
    }
}