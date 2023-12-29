import { REQUEST_WEATHER_DATA, RECEIVE_WEATHER_DATA, REQUEST_FORECAST_DATA, RECEIVE_FORECAST_DATA, RESET_STATE } from "../actionTypes/actions-types";

// Define inital state
const initialState = {
    weatherData: {},
    forecastData: {},
    fetchingWeather: false,
    fetchingForecast: false
}

// Define reducer
export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_WEATHER_DATA:
            return {
                ...state,
                fetchingWeather: true
            }
        case RECEIVE_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.weatherData,
                fetchingWeather: false
            }
        case REQUEST_FORECAST_DATA:
            return {
                ...state,
                fetchingForecast: true
            }
        case RECEIVE_FORECAST_DATA:
            return {
                ...state,
                fetchingForecast: false,
                forecastData: action.forecastData
            }
        case RESET_STATE:
            return initialState;
        default:
            return state
    }
}