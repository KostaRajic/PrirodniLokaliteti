/* eslint-disable react/prop-types */
import { title } from "framer-motion/client";
import { FaCloudRain, FaTemperatureHigh } from "react-icons/fa";
import { FaArrowUp, FaArrowDown, FaWind, FaTint } from 'react-icons/fa';

import { WiSunrise, WiSunset } from 'react-icons/wi';
import { WiDaySunny, WiNightClear, WiCloud, WiRain, WiSnow, WiThunderstorm, WiFog } from "react-icons/wi";
import { useContextAuth } from "../../Context";

const weatherIconMap = {
    Clear: {
        day: WiDaySunny,
        night: WiNightClear,
    },
    Clouds: WiCloud,
    Rain: WiRain,
    Snow: WiSnow,
    Thunderstorm: WiThunderstorm,
    Mist: WiFog,
    Haze: WiFog,
    Fog: WiFog,
};

const weatherDescriptions = {
    'overcast clouds': {
        en: 'Overcast Clouds',
        rs: 'Oblačno'
    },
    'clear sky': {
        en: 'Clear Sky',
        rs: 'Vedro nebo'
    },
    'few clouds': {
        en: 'Few Clouds',
        rs: 'Malo oblaka'
    },
    'scattered clouds': {
        en: 'Scattered Clouds',
        rs: 'Rasuti oblaci'
    },
    'broken clouds': {
        en: 'Broken Clouds',
        rs: 'Delimično oblačno'
    },
    'shower rain': {
        en: 'Shower Rain',
        rs: 'Pljusak'
    },
    'rain': {
        en: 'Rain',
        rs: 'Kiša'
    },
    'light rain': {
        en: 'Light Rain',
        rs: 'Slaba kiša'
    },
    'thunderstorm': {
        en: 'Thunderstorm',
        rs: 'Grmljavina'
    },
    'snow': {
        en: 'Snow',
        rs: 'Sneg'
    },
    'mist': {
        en: 'Mist',
        rs: 'Magla'
    }
};


const TempAndDetails = ({ currentWeatherData, weatherDataForecast,openWeather  }) => {
    const { switchLanguage, setSwitchLanguage } = useContextAuth();

    if (!currentWeatherData || !currentWeatherData.weather || !currentWeatherData.main) {
        return <p>
            {switchLanguage === 'en' ? "Enter a location..." : "Unesite lokaciju..."}
        </p>
    }

    const main = currentWeatherData?.weather[0]?.main;
    const iconCode = currentWeatherData?.weather[0].icon;
    const isNight = iconCode?.includes("n");

    let WeatherIcon;

    if (main) {
        if (typeof weatherIconMap[main] === "object") {
            WeatherIcon = isNight ? weatherIconMap[main].night : weatherIconMap[main].day;
        } else {
            WeatherIcon = weatherIconMap[main] || WiCloud;
        }
    }

    const verticalDetails = [
        {
            id: 1,
            Icon: FaTemperatureHigh,
            title: switchLanguage === 'en' ? 'Real Feel' : 'Pravi osećaj',
            value: currentWeatherData?.main?.feels_like != null
                ? `${Math.round(currentWeatherData.main.feels_like)}°C`
                : 'N/A'
        },
        {
            id: 2,
            Icon: FaTint,
            title: switchLanguage === 'en' ? 'Humidity' : 'Vlažnost',
            value: currentWeatherData?.main?.humidity != null
                ? `${currentWeatherData.main.humidity}%`
                : 'N/A'
        },
        {
            id: 3,
            Icon: FaWind,
            title: switchLanguage === 'en' ? 'Wind' : 'Vetar',
            value: currentWeatherData?.wind?.speed != null
                ? `${Math.round(currentWeatherData.wind.speed)} km/h`
                : 'N/A'
        }
    ]

    const horisontalDetails = [
        {
            id: 1,
            Icon: WiSunrise,
            title: switchLanguage === 'en' ? 'Sunrise' : 'Izlazak sunca',
            value: currentWeatherData?.sys?.sunrise != null
                ? new Date(currentWeatherData.sys.sunrise * 1000).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                })
                : 'N/A'
        },
        {
            id: 2,
            Icon: WiSunset,
            title: switchLanguage === 'en' ? 'Sunset' : 'Zalazak sunca',
            value: currentWeatherData?.sys?.sunset != null
                ? new Date(currentWeatherData.sys.sunset * 1000).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                })
                : 'N/A'
        },
        {
            id: 3,
            Icon: FaArrowUp,
            title: switchLanguage === 'en' ? 'Maximal temperature' : 'Maksimalna temperatura',
            value: currentWeatherData?.main?.temp_max != null
                ? `${Math.round(currentWeatherData.main.temp_max)} °C`
                : 'N/A'
        },
        {
            id: 4,
            Icon: FaArrowDown,
            title: switchLanguage === 'en' ? 'Minimal temperature' : 'Minimalna temperatura',
            value: currentWeatherData?.main?.temp_max != null
                ? `${Math.round(currentWeatherData.main.temp_min)} °C`
                : 'N/A'
        }
    ]


    let date = new Date();

    const dailyData = weatherDataForecast?.list?.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    const rsDays = ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'];

    return (
        <>
            <div className="displayFlexClassicWeatherHeader" >

                <h2 style={{ textAlign: 'center', marginRight: '50px', textDecoration: 'underline' }}>{currentWeatherData?.name}</h2>

                <p>{date.toDateString()}</p>
                <p>{date.toTimeString().split(' GMT')[0]}</p>

            </div>

            <p className="weatherDescriptions"> {
                weatherDescriptions[currentWeatherData?.weather[0]?.description]?.[switchLanguage]
                || (
                    currentWeatherData?.weather[0]?.description
                        ? currentWeatherData.weather[0].description.charAt(0).toUpperCase() +
                        currentWeatherData.weather[0].description.slice(1)
                        : ''
                )
            }</p>

            <div className="displayFlexClassicWeather" >
                {WeatherIcon ? <WeatherIcon size={48} /> : 'N/A'}
                <p>{currentWeatherData?.main?.temp ? `${currentWeatherData?.main?.temp} °C` : 'N/A'}</p>
                <div style={{ fontSize: '9px', flexDirection: 'column' }}>
                    {
                        verticalDetails.map(({ id, Icon, title, value }) => (
                            <div key={id} style={{ margin: '5px', display: 'flex', flexDirection: 'row' }}>

                                <Icon size={15} style={{ marginRight: '10px' }} />
                                {`${title}`}: <span style={{ marginLeft: '5px' }}>{value ? value : ''}</span>
                            </div>

                        ))
                    }
                </div>
            </div>
            <div style={{ fontSize: '8px' }} className="horisontalDetails">
                {
                    horisontalDetails.map(({ id, Icon, title, value }) => (
                        <div key={id} style={{ margin: '20px 10px 10px 10px', display: 'flex', flexDirection: 'row' }}>

                            <Icon size={15} />
                            <div style={{ flexDirection: 'column', width: '60px' }}>
                                {`${title}`}: <span style={{ marginLeft: '5px' }}>{`${value}` || ''}</span>
                            </div>

                        </div>

                    ))
                }
            </div>
            <hr style={{ marginTop: '5px' }} />
            <div style={{ fontSize: '13px' }} className="weatherDallyMobile">
                {
                    dailyData.map((data, index) => (
                        <div key={index} style={{ margin: '20px 15px 10px 10px', display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ width: '50px', marginLeft: '5px', fontSize: '13px' }}>
                                {switchLanguage === 'en' ?
                                    new Date(data?.dt * 1000).toLocaleDateString(
                                        switchLanguage === 'rs' ? 'sr-RS' : 'en-US',
                                        { weekday: 'short' }
                                    )
                                    :
                                    rsDays[new Date(data?.dt * 1000).getDay()]
                                }


                                { }
                            </h3>

                            <p style={{ margin: '10px 0' }}>{data.main.temp} °C </p>
                            <img className="imgWeatherIconsMobile"
                                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                alt="weather icon"
                                style={{ width: '30px', height: '30px' }}
                            />
                            <p style={{ margin: '10px 0' }}>
                                {
                                    weatherDescriptions[data?.weather[0]?.description]?.[switchLanguage] ||
                                    (data?.weather[0]?.description
                                        ? data.weather[0].description.charAt(0).toUpperCase() +
                                        data.weather[0].description.slice(1)
                                        : '')
                                }
                            </p>

                        </div>

                    ))
                }
            </div>
        </>
    )

}

export default TempAndDetails;