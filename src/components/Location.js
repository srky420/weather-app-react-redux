import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocDataAsync, receiveLocData } from "../actions/locationActions";
import { fetchWeatherDataAsync, resetState } from "../actions/weatherActions";
import { regionNames } from "../utils/regionNames";


// Define component
export default function Location() {
    // useSelector
    const locData = useSelector(state => state.location.locData);
    // useDispatch
    const dispatch = useDispatch();
    // Local state
    const [input, setInput] = useState('');

    useEffect(() => {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                dispatch(fetchWeatherDataAsync(position.coords.latitude, position.coords.longitude))
            });
        else {
            console.log("Your browser does not support Geolocation!");
        }
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value);
        dispatch(fetchLocDataAsync(e.target.value));
    }

    const handleClick = (loc) => {
        // Reset search
        setInput('');
        dispatch(receiveLocData(''));

        // Fetch weather data
        dispatch(fetchWeatherDataAsync(loc.lat, loc.lon))
        console.log(loc);
    }

    const handleReset = () => {
        dispatch(resetState());
    }

    return (
        <div className="w-full my-3 sm:my-5">
            <div className="relative w-fit mx-auto">
                <input type="text" value={input} onChange={handleChange} placeholder="Enter city name..." className="block w-72 sm:w-80 border border-grey-700 rounded-full text-base sm:text-lg px-5 py-2 focus:outline-none focus:border-indigo-500" />
                <div className="absolute top-11 sm:top-12 border dark:border-none rounded-lg bg-gray-50 z-50">
                    {Array.isArray(locData) && 
                        locData.map((loc, key) => (
                            <button key={`result${key}`} onClick={() => handleClick(loc)} 
                                className="block mx-auto p-3 w-72 sm:w-80 border-b text-sm sm:text-base text-start last:rounded-b-lg last:border-none bg-white first:rounded-t-lg hover:bg-indigo-500 hover:text-white">
                                    {loc.name}, {regionNames.of(loc.country)}
                            </button>)
                    )}
                </div>
            </div>
            <div>
                <button className="block mt-3 sm:mt-5 text-md sm:text-lg text-indigo-400 mx-auto hover:text-indigo-700 dark:hover:text-white" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div> 
    )
}