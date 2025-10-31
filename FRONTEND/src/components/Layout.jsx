/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/icons/android-chrome-192x192.png";
import logoMobile from "../assets/images/icons/android-chrome-40x40-mobile.png";

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useContextAuth } from "../Context";
import Regions from "./regionDropDown/regions";
import { PlacePortal } from "./PlacePortal";
import Spinner from "../Spinner";
const Header = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./Header")), 2000)
  )
);

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { switchLanguage, setSwitchLanguage, selectedPlace, setSelectedPlace } = useContextAuth();
  const [searchComponent, setSearchComponent] = useState(false)
  const [openWeather, setOpenWeather] = useState(false);
  const [searchPlaceWeather, setSearchPlaceWeather] = useState('')
  const [loading, setLoading] = useState(false);
  const [currentWeatherData, setCurrentWeatherData] = useState(null)
  const [weatherDataForecast, setWeatherDataForecast] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLanguageBox, setOpenLanguageBox] = useState(false);
  let ref = useRef()
  const weatherComponentRefDesktop = useRef();
  const weatherComponentRefMobile = useRef();
  const searchComponentRefDesktop = useRef();
  const searchComponentRefMobile = useRef();
  const regionsRefDesktop = useRef();
  const regionsRefMobile = useRef();
  const menuRef = useRef();


  useEffect(() => {
    const handler = (e) => {
      if (openLanguageBox && ref.current && !ref.current.contains(e.target)) {
        setOpenLanguageBox(false)
      }
    }
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler)
    }

  }, [openLanguageBox, setOpenLanguageBox]);

  async function fetchWeatherData(params) {
    setLoading(true)
    try {

      const responseHourlyForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${params}&units=metric&appid=d2f4eb543945760a80816a3a77a508e4`)
      const reposneCurrentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params}&units=metric&appid=d2f4eb543945760a80816a3a77a508e4`)

      const dataForecast = await responseHourlyForecast.json();
      const dataCurrentWeather = await reposneCurrentWeather.json();

      if (dataForecast.cod === "200") setWeatherDataForecast(dataForecast)
      if (dataCurrentWeather.cod === 200) setCurrentWeatherData(dataCurrentWeather)

    } catch (e) {
      setLoading(false)
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const handler = (e) => {
      const clickedOutsideDesktop =
        regionsRefDesktop.current &&
        !regionsRefDesktop.current.contains(e.target);

      const clickedOutsideMobile =
        regionsRefMobile.current &&
        !regionsRefMobile.current.contains(e.target);

      if (open && clickedOutsideDesktop && clickedOutsideMobile) {
        setOpen(false);
      }

    }
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler)
    }
  }, [open, setOpen])


  useEffect(() => {
    const handler = (e) => {
      const clickedOutsideDesktop =
        searchComponentRefDesktop.current &&
        !searchComponentRefDesktop.current.contains(e.target);

      const clickedOutsideMobile =
        searchComponentRefMobile.current &&
        !searchComponentRefMobile.current.contains(e.target);

      if (searchComponent && clickedOutsideDesktop && clickedOutsideMobile) {
        setSearchComponent(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [searchComponent]);


  useEffect(() => {
    const handler = (e) => {
      const clickedOutsideDesktop =
        weatherComponentRefDesktop.current &&
        !weatherComponentRefDesktop.current.contains(e.target);

      const clickedOutsideMobile =
        weatherComponentRefMobile.current &&
        !weatherComponentRefMobile.current.contains(e.target);

      if (openWeather && clickedOutsideDesktop && clickedOutsideMobile) {
        setOpenWeather(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [openWeather]);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  async function handleSearchWeather(e) {
    fetchWeatherData(searchPlaceWeather)
    e.preventDefault();
  }

  const handleLanguageChange = (e) => {
    setSwitchLanguage(e.target.value);
  };

  const handleRegionsComponent = (e) => {
    setOpen(true)
  }

  const handleSearchComponent = (e) => {
    setSearchComponent(true);
  }

  const handleWeatherComponent = () => {
    setOpenWeather(true);
  };


  return (
    <div>
      <Suspense fallback={<Spinner/>}>


        <Header
          navigate={navigate}
          logo={logo}
          logoMobile={logoMobile}

          // Language
          switchLanguage={switchLanguage}
          setSwitchLanguage={setSwitchLanguage}
          openLanguageBox={openLanguageBox}
          setOpenLanguageBox={setOpenLanguageBox}
          refLang={ref}
          handleLanguageChange={handleLanguageChange}

          // Menu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuRef={menuRef}

          // Regions
          handleRegionsComponent={handleRegionsComponent}
          openRegions={open}
          setOpen={setOpen}
          regionsRefDesktop={regionsRefDesktop}
          regionsRefMobile={regionsRefMobile}

          // Search
          handleSearchComponent={handleSearchComponent}
          searchComponent={searchComponent}
          setSearchComponent={setSearchComponent}
          searchComponentRefDesktop={searchComponentRefDesktop}
          searchComponentRefMobile={searchComponentRefMobile}

          // Weather
          handleWeatherComponent={handleWeatherComponent}
          weatherComponentRefDesktop={weatherComponentRefDesktop}
          weatherComponentRefMobile={weatherComponentRefMobile}
          loading={loading}
          openWeather={openWeather}
          setOpenWeather={setOpenWeather}
          searchPlaceWeather={searchPlaceWeather}
          setSearchPlaceWeather={setSearchPlaceWeather}
          handleSearchWeather={handleSearchWeather}
          currentWeatherData={currentWeatherData}
          weatherDataForecast={weatherDataForecast}
          fetchWeatherData={fetchWeatherData}

        />
      </Suspense>
      {selectedPlace ? (
        <PlacePortal place={selectedPlace} />
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};


export default Layout;