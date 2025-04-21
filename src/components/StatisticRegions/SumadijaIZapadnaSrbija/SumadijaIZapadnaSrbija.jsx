/* eslint-disable react/jsx-key */
import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SumadijaIZapadnaSrbijaRegioni } from "./SumadijaIZapadnaSrbijaRegioni";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { kulubarskiOkrugPathRoutes } from "./Okruzi/Kolubarski/KolubarskiOkrugPathRoutes";
import { macvanskiOkrugPathRoutes } from "./Okruzi/Macvanski/MacvanskiOkrugPathRoutes";
import { moravickiOkrugPathRoutes } from "./Okruzi/Moravicki/MoravickiOkrugPathRoutes";
import { pomoravskiOkrugPathRoutes } from "./Okruzi/Pomoravski/PomoravskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../serbianMapPathRoutes";

export const SumadijaIZapadnaSrbija = () => {
  const center = [43.92543064661552, 20.38526435851563];
  const navigate = useNavigate();
  const [showMacvanski, setShowMacvanski] = useState(false);
  const [showKolubarski, setShowKolubarski] = useState(false);
  const [showSumadijski, setShowSumadijski] = useState(false);
  const [showZlatiborski, setShowZlatiborski] = useState(false);
  const [showMoravicki, setShowMoravicki] = useState(false);
  const [showPomoravski, setShowPomoravski] = useState(false);
  const [showRaski, setShowRaski] = useState(false);
  const [showRasinski, setShowRasinski] = useState(false);
  const [zoom, setZoom] = useState(() => {
    if (window.innerWidth < 600) {
      return 7;
    } else if (window.innerWidth < 1600) {
      return 8;
    } else {
      return 10;
    }
  });

  // const bounds = [[44.02543064661552, 20.888526435851563]];

  useEffect(() => {
    if (showMacvanski) {
      return navigate(macvanskiOkrugPathRoutes.home);
    } else if (showKolubarski) {
      return navigate(kulubarskiOkrugPathRoutes.home);
    } else if (showSumadijski) {
      return navigate("Sumadijski");
    } else if (showZlatiborski) {
      return navigate("ZlatiborskiOkrug");
    } else if (showMoravicki) {
      return navigate(moravickiOkrugPathRoutes.home);
    } else if (showPomoravski) {
      return navigate(pomoravskiOkrugPathRoutes.home);
    } else if (showRaski) {
      return navigate("RaskiOkrug");
    } else if (showRasinski) {
      return navigate("RasinskiOkrug");
    }
  });

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ width: "100vw", height: "100vh", position: "none" }}
      //maxBounds={bounds}
      maxBoundsViscosity={1.0}
      scrollWheelZoom={false}
    >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(serbianMapPathRoutes.SumadijaIZapadnaSrbija)}
        style={{zIndex: "400" }}
      />
      {SumadijaIZapadnaSrbijaRegioni?.features?.map((statisticRegion) => {
        const cordinates = statisticRegion?.geometry?.coordinates[0]?.map(
          (item) => [item[1], item[0]]
        );

        return (
          <Polygon
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
                statisticRegion?.properties?.name === "Mačvanski" &&
                  setShowMacvanski(true);
                statisticRegion?.properties?.name === "Kolubarski" &&
                  setShowKolubarski(true);
                statisticRegion?.properties?.name === "Šumadijski" &&
                  setShowSumadijski(true);
                statisticRegion?.properties?.name === "Zlatiborski" &&
                  setShowZlatiborski(true);
                statisticRegion?.properties?.name === "Moravički" &&
                  setShowMoravicki(true);
                statisticRegion?.properties?.name === "Pomoravski" &&
                  setShowPomoravski(true);
                statisticRegion?.properties?.name === "Raški" &&
                  setShowRaski(true);
                statisticRegion?.properties?.name === "Rasinski" &&
                  setShowRasinski(true);
              },
            }}
          >
            <Tooltip>
              <span className="toolTipClass">
                {statisticRegion?.properties?.name}
              </span>
            </Tooltip>
          </Polygon>
        );
      })}
    </MapContainer>
  );
};
