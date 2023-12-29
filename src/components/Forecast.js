import React from "react";
import { useSelector } from "react-redux";


// Define component
export const Forecast = () => {
    const forecastData = useSelector(state => state.weather.forecastData);
    const fetching = useSelector(state => state.weather.fetchingForecast);

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let currentDate = new Date();
    const forecastList = forecastData.list && forecastData.list.filter((item) => {
        const date = new Date(item.dt_txt)
        if (currentDate.toLocaleDateString() !== date.toLocaleDateString()) {
            currentDate = date;
            item.day = date.getDay();
            return item;
        }
    });

    return (
        <div>
            {fetching ? 
            <div className="border-4 border-t-4 lg:border-8 lg:border-t-8 border-t-indigo-700 w-10 h-10 lg:w-20 lg:h-20 rounded-full animate-spin mx-auto"></div>
            :
            <>
                {forecastList &&
                <div className="grid grid-cols-5 w-80 min-[480px]:w-96 sm:w-112 lg:w-128 mx-auto gap-2 text-center mb-10">
                    {forecastList.map((item, key) =>
                    (<div key={`forecast${key}`}>               
                        <div className="text-xs min-[480px]:text-sm sm:text-lg lg:text-xl text-indigo-700 dark:text-white">{weekDays[item.day]}</div>
                        <div className="bg-indigo-500 rounded-md sm:rounded-xl lg:rounded-2xl text-center text-white">
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon.replace('n', 'd')}@2x.png`} 
                                className="brightness-200 saturate-200 mx-auto" alt="forecast" />
                            <div className="text-xs min-[480px]:text-sm sm:text-lg lg:text-xl pb-2 font-semibold">{Math.round(item.main.temp)}&deg;C</div>
                            <div className="text-xs min-[480px]:text-sm sm:text-lg lg:text-xl pb-2 break-words p-1">{item.weather[0].main}</div>
                        </div>
                    </div>)
                    )}
                </div>}
            </>
            }
        </div>
    );
}