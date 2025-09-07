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


const TempAndDetails = ({ currentWeahterData, weatherDataForecast }) => {
    const { switchLanguage, setSwitchLanguage } = useContextAuth();

    if (!currentWeahterData || !currentWeahterData.weather || !currentWeahterData.main) {
        return <p>
            {switchLanguage === 'en' ? "Enter a location..." : "Unesite lokaciju..."}
        </p>
    }

    const main = currentWeahterData?.weather[0]?.main;
    const iconCode = currentWeahterData?.weather[0].icon;
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
            value: currentWeahterData?.main?.feels_like != null
                ? `${Math.round(currentWeahterData.main.feels_like)}°C`
                : 'N/A'
        },
        {
            id: 2,
            Icon: FaTint,
            title: switchLanguage === 'en' ? 'Humidity' : 'Vlažnost',
            value: currentWeahterData?.main?.humidity != null
                ? `${currentWeahterData.main.humidity}%`
                : 'N/A'
        },
        {
            id: 3,
            Icon: FaWind,
            title: switchLanguage === 'en' ? 'Wind' : 'Vetar',
            value: currentWeahterData?.wind?.speed != null
                ? `${Math.round(currentWeahterData.wind.speed)} km/h`
                : 'N/A'
        }
    ]

    const horisontalDetails = [
        {
            id: 1,
            Icon: WiSunrise,
            title: switchLanguage === 'en' ? 'Sunrise' : 'Izlazak sunca',
            value: currentWeahterData?.sys?.sunrise != null
                ? new Date(currentWeahterData.sys.sunrise * 1000).toLocaleTimeString([], {
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
            value: currentWeahterData?.sys?.sunset != null
                ? new Date(currentWeahterData.sys.sunset * 1000).toLocaleTimeString([], {
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
            value: currentWeahterData?.main?.temp_max != null
                ? `${Math.round(currentWeahterData.main.temp_max)} °C`
                : 'N/A'
        },
        {
            id: 4,
            Icon: FaArrowDown,
            title: switchLanguage === 'en' ? 'Minimal temperature' : 'Minimalna temperatura',
            value: currentWeahterData?.main?.temp_max != null
                ? `${Math.round(currentWeahterData.main.temp_min)} °C`
                : 'N/A'
        }
    ]


    let date = new Date();

    const dailyData = weatherDataForecast?.list?.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    console.log(dailyData)

    return (
        <>
            <p style={{ textAlign: 'center', marginTop: '5px' }}>{date.toDateString()}</p>
            <p style={{ textAlign: 'center' }}>{date.toTimeString().split(' GMT')[0]}</p>
            <h3 style={{ textAlign: 'center', margin: '10px' }}>{currentWeahterData?.name}</h3>
            <p style={{ margin: '0 auto' }}> {
                weatherDescriptions[currentWeahterData?.weather[0]?.description]?.[switchLanguage]
                || (
                    currentWeahterData?.weather[0]?.description
                        ? currentWeahterData.weather[0].description.charAt(0).toUpperCase() +
                        currentWeahterData.weather[0].description.slice(1)
                        : ''
                )
            }</p>

            <div className="displayFlexClassic" style={{ justifyContent: 'space-between' }}>
                {WeatherIcon ? <WeatherIcon size={48} /> : 'N/A'}
                <p>{currentWeahterData?.main?.temp ? `${currentWeahterData?.main?.temp} °C` : 'N/A'}</p>
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
            <div style={{ fontSize: '8px' }}>
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
            <hr style={{ margin: '10px 0' }} />
            <div style={{ fontSize: '13px'}}>
                {
                    dailyData.map((data, index) => (
                        <div key={index} style={{ margin: '20px 15px 10px 10px', display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ width: '50px', marginLeft: '5px', fontSize: '13px' }}>
                                {new Date(data?.dt * 1000).toLocaleDateString(
                                    switchLanguage === 'sr' ? 'sr-RS' : 'en-US',
                                    { weekday: 'short' }
                                )}
                            </h3>

                            <p style={{ margin: '10px 0', fontSize: '13px' }}>{data.main.temp} °C </p>
                            <img
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