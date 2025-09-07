/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/icons/android-chrome-192x192.png";
import logoMobile from "../assets/images/icons/android-chrome-40x40-mobile.png";
import spinner from '../assets/images/spinner.svg'
import { useEffect, useRef, useState } from "react";
import { useContextAuth } from "../Context";
import Regions from "./regionDropDown/regions";
import SearchComponent from "./seacrhComponent/SearchComponent";
import WeatherComponent from "./weather/Weather";



export const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [searchComponent, setSearchComponent] = useState(false)
  const { switchLanguage, setSwitchLanguage } = useContextAuth();
  const inputRef = useRef();
  const [openWeather, setOpenWeather] = useState(false);
  const [searchPlaceWeather, setSearchPlaceWeather] = useState('')
  const [loading, setLoading] = useState(false);
  const [currentWeahterData, setCurrentWeatherData] = useState(null)
  const [weatherDataForecast, setWeatherDataForecast] = useState(null)



  async function fetchWeatherData(params) {
    setLoading(true)
    try {

      const responseHourlyForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${params}&units=metric&appid=d2f4eb543945760a80816a3a77a508e4`)
      const reposneCurrentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params}&units=metric&appid=d2f4eb543945760a80816a3a77a508e4`)


      const dataForecast = await responseHourlyForecast.json();
      if (dataForecast) {
        setLoading(false)
        setWeatherDataForecast(dataForecast)
      }

      const dataCurrentWeather = await reposneCurrentWeather.json();
      if (dataCurrentWeather) {
        setLoading(dataCurrentWeather)
        setCurrentWeatherData(dataCurrentWeather)
      }

    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }

  async function handleSearchWeather(e) {
    fetchWeatherData(searchPlaceWeather)
    e.preventDefault();
  }

  const handleLanguageChange = (e) => {
    setSwitchLanguage(e.target.value);
  };

  const handleSearchCompoenent = (e) => {
    setSearchComponent(true)
  }

  const hangleWeatherComponent = (e) => {
    setOpenWeather(true)
  }


  return (
    <div>
      <header className="headerClass">
        <nav>
          <div className="logo-and-nav">
            <img srcSet={`${logoMobile} 450w, ${logo} `} alt="SerbianWonders Logo" />
            <div
              style={{ marginRight: '60px' }}
              className="navbar"
            >
              <ul className="navbar-nav">

                <li onClick={() => navigate("/")}>{switchLanguage === 'en' ? "Home" : "Početna"}</li>

                <li onClick={() => setOpen(true)}>
                  {switchLanguage === 'en' ? "Regions" : "Regioni"}
                  {open && <Regions open={open} setOpen={setOpen} />}
                </li>

                <li onClick={handleSearchCompoenent}>
                  {switchLanguage === 'en' ? "Search" : "Pretraži"}
                  {searchComponent &&
                    <SearchComponent
                      searchComponent={searchComponent}
                      setSearchComponent={setSearchComponent}
                      inputRef={inputRef}
                    />}
                </li>


                <li onClick={hangleWeatherComponent}>
                  {switchLanguage === 'en' ? "Weather" : "Vreme"}
                  {/* {
                    loading ? <img className="loadingClass" src={spinner} /> :
                      openWeather &&
                      <WeatherComponent
                        openWeather={openWeather}
                        setOpenWeather={setOpenWeather}
                        searchPlaceWeather={searchPlaceWeather}
                        setSearchPlaceWeather={setSearchPlaceWeather}
                        handleSearchWeather={handleSearchWeather}
                        inputRef={inputRef}
                        weahterData={weahterData}
                        fetchWeatherData={fetchWeatherData}
                      />
                  } */}
                  <WeatherComponent
                    openWeather={openWeather}
                    setOpenWeather={setOpenWeather}
                    searchPlaceWeather={searchPlaceWeather}
                    setSearchPlaceWeather={setSearchPlaceWeather}
                    handleSearchWeather={handleSearchWeather}
                    inputRef={inputRef}
                    currentWeahterData={currentWeahterData}
                    weatherDataForecast={weatherDataForecast}
                    fetchWeatherData={fetchWeatherData}
                  />
                </li>

              </ul>
              <div
                style={{
                  alignItems: "center",
                }}
              >
                <p>{switchLanguage === 'en' ? 'Language' : 'Jezik'}:</p>
                <select name="" id="" onChange={handleLanguageChange}>
                  <option value="en">ENG</option>
                  <option value="rs">SRB</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div>{children}</div>
    </div>
  );
};
