/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { serbianMapData } from "../data";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { serbianMapPathRoutes } from "./serbianMapPathRoutes";
import { beogradPathRoutes } from "./StatisticRegions/Beograd/BeogradPathRoutes";
import { useContextAuth } from "../Context";

const SerbianMap = () => {
  const center = [44.02543064661552, 20.888526435851563];
  const [showVojvodina, setShowVojvodina] = useState(false);
  const [showBeograd, setShowBeograd] = useState(false);
  const [showIstocnaiJuznaSrbija, setShowIstocnaiJuznaSrbija] = useState(false);
  const [showSumadijaIZapadnaSrbija, setShowSumadijaIZapadnaSrbija] =
    useState(false);
  const [showKosovoIMetohija, setShowKosovoIMethoija] = useState(false);
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(() => {
    if (window.innerWidth < 600) {
      return 6;
    } else if (window.innerWidth < 1600) {
      return 6;
    } else {
      return 10;
    }
  });
  const [showMap, setShowMap] = useState(false);
  const { switchLanguage } = useContextAuth();

  const bounds = [[44.02543064661552, 20.888526435851563]];

  useEffect(() => {
    if (showVojvodina) {
      return navigate(serbianMapPathRoutes.VojvodinaTekstModal(switchLanguage));
    } else if (showBeograd) {
      return navigate(beogradPathRoutes.home(switchLanguage));
    } else if (showSumadijaIZapadnaSrbija) {
      return navigate(serbianMapPathRoutes.SumadijaIZapadnaSrbijaModal(switchLanguage));
    } else if (showIstocnaiJuznaSrbija) {
      return navigate(serbianMapPathRoutes.IstocnaSrbijaTekstModal(switchLanguage));
    } else if (showKosovoIMetohija) {
      return navigate(serbianMapPathRoutes.KosovoIMetohijaTekstModal(switchLanguage));
    }
  },
    [
      showVojvodina,
      showBeograd,
      showSumadijaIZapadnaSrbija,
      showIstocnaiJuznaSrbija,
      showKosovoIMetohija,
      switchLanguage,
      navigate
    ]);

  return (
    <div className="serbianMapClass">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ width: "100vw", height: "100vh" }}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* <TileLayer
       url={`https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=qZ4DIeGQoRrxWzufyKP1`}
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      /> */}
        {serbianMapData?.features?.map((statisticRegion, index) => {
          const cordinates = statisticRegion?.geometry?.coordinates[0]?.map(
            (item) => [item[1], item[0]]
          );

          return (
            <div key={index}>
              <Polygon
                key={statisticRegion?.id}
                pathOptions={{
                  fillColor: "green",
                  fillOpacity: 0.8,
                  weight: 2,
                  opacity: 1,
                  color: "white",
                }}
                positions={cordinates}
                eventHandlers={{
                  mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 3,
                      weight: 5,
                    });
                  },
                  mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillColor: "green",
                      fillOpacity: 0.8,
                      weight: 2,
                      color: "white",
                    });
                  },
                  click: (e) => {
                    statisticRegion?.properties?.nameSrb === "Vojvodina" &&
                      setShowVojvodina(true);
                    statisticRegion?.properties?.nameSrb === "Beograd" &&
                      setShowBeograd(true);
                    statisticRegion?.properties?.nameSrb ===
                      "Južna i istočna Srbija" &&
                      setShowIstocnaiJuznaSrbija(true);
                    statisticRegion?.properties?.nameSrb ===
                      "Šumadija i zapadna Srbija" &&
                      setShowSumadijaIZapadnaSrbija(true);
                    statisticRegion?.properties?.nameSrb ===
                      "Kosovo i Metohija" && setShowKosovoIMethoija(true);
                  },
                }}
              >
                <Tooltip>
                  <span className="toolTipClass">
                    {switchLanguage === "en"
                      ? statisticRegion?.properties?.nameEng
                      : statisticRegion?.properties?.nameSrb}
                  </span>
                </Tooltip>
              </Polygon>
            </div>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default SerbianMap;
