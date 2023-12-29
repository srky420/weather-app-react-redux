import { 
    REQUEST_WEATHER_DATA, 
    RECEIVE_WEATHER_DATA, 
    REQUEST_FORECAST_DATA, 
    RECEIVE_FORECAST_DATA, 
    RESET_STATE 
} from "../actionTypes/actions-types";


// Define actions
export const requestWeatherData = () => {
    return {
        type: REQUEST_WEATHER_DATA
    }
}

export const receiveWeatherData = (payload) => {
    return {
        type: RECEIVE_WEATHER_DATA,
        weatherData: payload
    }
}

export const requestForecastData = () => {
    return {
        type: REQUEST_FORECAST_DATA
    }
}

export const receiveForecastData = (payload) => {
    return {
        type: RECEIVE_FORECAST_DATA,
        forecastData: payload
    }
}

export const resetState = () => {
    return {
        type: RESET_STATE
    }
}

// Fetching weather data
export const fetchWeatherDataAsync = (lat, lon) => {
    return (dispatch) => {
        dispatch(requestWeatherData());

        // Weather
        fetch(`/.netlify/functions/weather?lat=${lat}&lon=${lon}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(receiveWeatherData(data));
            })
            .catch(err => {
                console.log(err);
            })

        dispatch(requestForecastData());

        // Forecast
        fetch(`/.netlify/functions/forecast?lat=${lat}&lon=${lon}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(receiveForecastData(data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

