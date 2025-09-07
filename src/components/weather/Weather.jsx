/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useCallback, useEffect, useRef } from "react";
import { useContextAuth } from "../../Context";
import { debounce } from "lodash";
import { FaSearch } from "react-icons/fa";
import TempAndDetails from "./TempAndDetails";

const WeatherComponent = ({ currentWeahterData, weatherDataForecast, handleSearchWeather, searchPlaceWeahter, setSearchPlaceWeather, inputRef, openWeather, setOpenWeather, fetchWeatherData }) => {
    let ref = useRef();
    const buttonRef = useRef(null);
    const { switchLanguage } = useContextAuth();


    const debounced = useCallback(
        debounce((text) => {
            fetchWeatherData(text);
        }, 10000),
        [fetchWeatherData]
    );

    useEffect(() => {
        if (searchPlaceWeahter) {
            debounced(searchPlaceWeahter);
        }

        return () => {
            debounced.cancel();
        };
    }, [searchPlaceWeahter]);

    useEffect(() => {
        const handler = (e) => {
            if (
                openWeather &&
                ref.current &&
                !ref.current.contains(e.target) &&
                !(buttonRef.current && buttonRef.current.contains(e.target))
            ) {
                setOpenWeather(false);
            }
        }

        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler)
        }

    }, [openWeather, setOpenWeather])

    useEffect(() => {
        if (inputRef?.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="searchWeatherComponent" ref={ref}>
            <div>
                <input
                    type="text"
                    value={searchPlaceWeahter}
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
                    <FaSearch className='searchButton'/>

                </button>

            </div>
            <h3>{currentWeahterData?.city?.name || searchPlaceWeahter}</h3>
            <TempAndDetails currentWeahterData={currentWeahterData} weatherDataForecast={weatherDataForecast}/>

        </div>
    )
}

export default WeatherComponent