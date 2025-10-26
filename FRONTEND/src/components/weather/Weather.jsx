/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useCallback, useEffect, useRef } from "react";
import { useContextAuth } from "../../Context";
import { debounce } from "lodash";
import { FaSearch } from "react-icons/fa";
import TempAndDetails from "./TempAndDetails";

const WeatherComponent = ({ currentWeatherData, weatherDataForecast, handleSearchWeather, searchPlaceWeather, setSearchPlaceWeather, fetchWeatherData, openWeather }) => {
    const inputRef = useRef();
    const buttonRef = useRef(null);
    const { switchLanguage } = useContextAuth();


    const debounced = useCallback(
        debounce((text) => {
            fetchWeatherData(text);
        }, 10000),
        [fetchWeatherData]
    );

    useEffect(() => {
        if (searchPlaceWeather) {
            debounced(searchPlaceWeather);
        }

        return () => {
            debounced.cancel();
        };
    }, [searchPlaceWeather]);


    useEffect(() => {
        if (inputRef?.current) {
            inputRef.current.focus();
        }
    }, []);


    return (

        openWeather ? (
            <div className="searchWeatherComponent">
                <div>
                    <input
                        type="text"
                        value={searchPlaceWeather}
                        onChange={(e) => setSearchPlaceWeather(e.target.value)}
                        ref={inputRef}
                        placeholder={switchLanguage === 'rs' ? "Pretraži..." : "Search..."}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                if (buttonRef.current) {
                                    buttonRef.current.click();
                                }
                            }
                        }}
                    />

                    <button onClick={handleSearchWeather} ref={buttonRef} >
                        <FaSearch className='searchButton' />
                    </button>

                </div>
                <h3>{currentWeatherData?.city?.name}</h3>
                <TempAndDetails currentWeatherData={currentWeatherData} weatherDataForecast={weatherDataForecast} openWeather={openWeather} />


            </div >
        )
            :
            null


    )
}

export default WeatherComponent