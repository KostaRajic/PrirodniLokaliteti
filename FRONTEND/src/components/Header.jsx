import { Suspense, lazy } from "react";
import Spinner from "../Spinner";
import { FaTimes, FaBars } from "react-icons/fa";
import serbiaFlag from '../assets/images/icons/serbia.png';
import usFlag from '../assets/images/icons/united-states.png';

const SearchComponent = lazy(() => import('../components/seacrhComponent/SearchComponent'));
const WeatherComponent = lazy(() => import('../components/weather/Weather'));
const Regions = lazy(() => import('../components/regionDropDown/regions'));

const Header = ({
  navigate, switchLanguage, setSwitchLanguage, openLanguageBox, setOpenLanguageBox,
  refLang, logo, logoMobile, menuOpen, setMenuOpen,
  handleRegionsComponent, regionsRefDesktop, openRegions,
  handleSearchComponent, searchComponent, searchComponentRefDesktop,
  hangleWeatherComponent, weatherComponentRefDesktop,
  loading, spinner, openWeather, setOpenWeather,
  searchPlaceWeather, setSearchPlaceWeather, handleSearchWeather,
  currentWeatherData, weatherDataForecast, fetchWeatherData,
  handleLanguageChange, setSearchComponent, setOpen, menuRef,
  regionsRefMobile, searchComponentRefMobile, weatherComponentRefMobile,
  handleWeatherComponent
}) => {

  return (
    <header className="headerClass">
      <nav>
        <div className="logo-and-nav">
          <img
            srcSet={`${logoMobile} 450w, ${logo}`}
            alt="SerbianWonders Logo"
            onClick={() => navigate("/")}
            loading="eager"
          />

          <div>
            <p className='languageText'>{switchLanguage === 'en' ? 'Language' : 'Jezik'}:</p>
            <div ref={refLang} onChange={handleLanguageChange} className='languageDiv' style={{ display: openWeather ? 'none' : '' }}>
              {!openLanguageBox && (
                <img
                  src={switchLanguage === 'en' ? usFlag : serbiaFlag}
                  style={{ width: 25, height: 25, marginTop: '15px', cursor: 'pointer', marginLeft: switchLanguage === 'rs' ? '-30px' : '0' }}
                  onClick={() => setOpenLanguageBox(true)}
                />
              )}
              {openLanguageBox && (
                <div className="languageClass" style={{ marginLeft: switchLanguage === 'rs' ? '-30px' : '0' }}>
                  <img src={serbiaFlag} style={{ width: 25, height: 25, margin: '6px', cursor: 'pointer' }} onClick={() => { setSwitchLanguage('rs'); setOpenLanguageBox(false); }} />
                  <img src={usFlag} style={{ width: 25, height: 25, margin: '6px', cursor: 'pointer' }} onClick={() => { setSwitchLanguage('en'); setOpenLanguageBox(false); }} />
                </div>
              )}
            </div>
          </div>

          <div className="navbar mobile">
            <ul className="navbar-nav" style={{ marginRight: '60px' }}>
              <li onClick={() => navigate("/")}>{switchLanguage === 'en' ? "Home" : "Početna"}</li>

              <li onClick={handleRegionsComponent}>
                {switchLanguage === 'en' ? "Regions" : "Regioni"}
                <div ref={regionsRefDesktop}>
                  {openRegions && (
                    <Suspense fallback={<Spinner />}>
                      <Regions open={open} setOpen={setOpen} />
                    </Suspense>
                  )}
                </div>
              </li>

              <li onClick={handleSearchComponent}>
                {switchLanguage === 'en' ? "Search" : "Pretraži"}
                <div ref={searchComponentRefDesktop}>
                  {searchComponent && (
                    <Suspense fallback={<Spinner />}>
                      <SearchComponent searchComponent={searchComponent} setSearchComponent={setSearchComponent} />
                    </Suspense>
                  )}
                </div>
              </li>

              <li onClick={handleWeatherComponent}>
                {switchLanguage === 'en' ? "Weather" : "Vreme"}
                <div ref={weatherComponentRefDesktop}>
                  {loading ? <Spinner/> :
                    WeatherComponent && openWeather && (
                      <Suspense fallback={<Spinner />}>
                        <WeatherComponent
                          openWeather={openWeather} setOpenWeather={setOpenWeather}
                          searchPlaceWeather={searchPlaceWeather} setSearchPlaceWeather={setSearchPlaceWeather}
                          handleSearchWeather={handleSearchWeather}
                          currentWeatherData={currentWeatherData} weatherDataForecast={weatherDataForecast}
                          fetchWeatherData={fetchWeatherData}
                        />
                      </Suspense>
                    )}
                </div>
              </li>
            </ul>
          </div>


          <div className="mobile-menu-toggle" style={{ zIndex: 2000 }}>
            {menuOpen ? <FaTimes onClick={() => setMenuOpen(false)} /> : <FaBars onClick={() => setMenuOpen(true)} />}
          </div>

          <nav className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
            <div ref={menuRef} className={`mobile-menu-wrapper ${menuOpen ? 'active' : ''}`}>
              <ul style={{ marginTop: '40px' }}>
                <li onClick={() => navigate("/")}>{switchLanguage === 'en' ? "Home" : "Početna"}</li>
                <li onClick={handleRegionsComponent}>{switchLanguage === 'en' ? "Regions" : "Regioni"}</li>
                <div ref={regionsRefMobile}>
                  {openRegions && (
                    <Suspense fallback={<Spinner />}>
                      <Regions open={open} setOpen={setOpen} />
                    </Suspense>
                  )}
                </div>

                <li onClick={handleSearchComponent}>{switchLanguage === 'en' ? "Search" : "Pretraži"}
                  <div ref={searchComponentRefMobile}>
                    {searchComponent && (
                      <Suspense fallback={<Spinner />}>
                        <SearchComponent searchComponent={searchComponent} setSearchComponent={setSearchComponent} />
                      </Suspense>
                    )}
                  </div>
                </li>

                <li onClick={handleWeatherComponent}>{switchLanguage === 'en' ? "Weather" : "Vreme"}
                  <div ref={weatherComponentRefMobile}>
                    {loading ? <Spinner/> :
                      WeatherComponent && openWeather && (
                        <Suspense fallback={<Spinner />}>
                          <WeatherComponent
                            openWeather={openWeather} setOpenWeather={setOpenWeather}
                            searchPlaceWeather={searchPlaceWeather} setSearchPlaceWeather={setSearchPlaceWeather}
                            handleSearchWeather={handleSearchWeather}
                            currentWeatherData={currentWeatherData} weatherDataForecast={weatherDataForecast}
                            fetchWeatherData={fetchWeatherData}
                          />
                        </Suspense>
                      )}
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
