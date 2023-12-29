import React, { useState } from "react";


// Define component
export const Theme = () => {
    const [darkmode, setDarkmode] = useState(false);

    const handleClick = () => {
        setDarkmode((darkmode) => {
            document.documentElement.setAttribute('class', !darkmode ? 'dark' : 'light');
            return !darkmode;
        });
    }

    return (
        <div className="flex justify-end items-center p-1 gap-2">
            <p className={darkmode ? "text-white text-sm md:text-lg" : "text-black text-sm md:text-lg"}>Darkmode</p>
            <button type="checkbox" className="w-10 h-6 md:w-12 md:h-7 dark:bg-indigo-700 bg-gray-200 relative rounded-full" onClick={handleClick}>
                <div className={darkmode ? "bg-white absolute top-1 left-1 translate-x-4 md:translate-x-5 w-4 h-4 md:w-5 md:h-5 rounded-full transition-all" : "bg-black absolute top-1 left-1 w-4 h-4 md:w-5 md:h-5 rounded-full transition-all"}></div>
            </button>
        </div>
    )
}