import React from "react";
import { useSelector} from "react-redux";
import { regionNames } from "../utils/regionNames";


// Define component
export const Weather = () => {
    const weatherData = useSelector(state => state.weather.weatherData)
    const fetching = useSelector(state => state.weather.fetchingWeather)
    const weather = weatherData.weather;
    const main = weatherData.main;
    const sys = weatherData.sys;

    return (
        <div>
            {fetching ? 
            <div className="border-4 border-t-4 lg:border-8 lg:border-t-8 border-t-indigo-700 w-10 h-10 lg:w-20 lg:h-20 rounded-full animate-spin mx-auto my-20"></div>
            :
            <div className={weather ? "mx-auto my-5 sm:my-10 border-indigo-400 w-80 min-[480px]:w-96 sm:w-112 lg:w-128" : "my-5 sm:my-10"}>
                {weather && <div className="text-xl sm:text-2xl font-semibold text-center mb-2 text-indigo-700 dark:text-white">
                    {weatherData.name}, {regionNames.of(sys.country)}
                </div>}
                {weather && 
                <div className="grid grid-cols-3 px-1 rounded-2xl py-3 sm:py-3 bg-indigo-500 text-white">
                    <div className="w-24 min-[480px]:w-28 sm:w-32 lg:w-44 place-self-center">
                        <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`} 
                            alt="weather" className={/01n|13n|50n/.test(weather[0].icon) ? "invert contrast-200" : "saturate-200 brightness-200"} />
                    </div>
                    <div className="self-center">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-4 lg:mb-6">{Math.round(main.temp)}&deg;C</p>
                        <p className="text-xs min-[480px]:text-sm sm:text-lg lg:text-xl">Feels like {Math.round(main.feels_like)}&deg;C</p>
                        <p className="text-xs min-[480px]:text-sm sm:text-lg lg:text-xl">{weather[0].main}, {/.d$/g.test(weather[0].icon) ? 'Day' : 'Night'}</p>
                    </div>
                    <div className="w-full text-xs sm:text-sm lg:text-lg px-1">
                        <div className="flex justify-between border-b py-1">
                            <p>Wind </p>
                            <p>{Math.round(weatherData.wind.speed) || 0} M/S</p>
                        </div>
                        <div className="flex justify-between border-b py-1">
                            <p>Gust </p>
                            <p>{Math.round(weatherData.wind.gust) || 0} M/S</p>
                        </div>
                        <div className="flex justify-between py-1">
                            <p>Visibility </p>
                            <p>{Math.round(weatherData.visibility / 1000)} KM</p>
                        </div>
                    </div>
                </div>}
            </div>
            }
        </div>
    )
}