/* eslint-disable react/jsx-key */
import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SumadijaIZapadnaSrbijaRegioni } from "./SumadijaIZapadnaSrbijaRegioni";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const SumadijaIZapadnaSrbija = () => {
  const center = [43.904569, 20.301485];
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

  useEffect(() => {
    if (showMacvanski) {
      return navigate("Macvanski");
    } else if (showKolubarski) {
      return navigate("Kolubarski")
    } else if (showSumadijski) {
      return navigate("Sumadijski")
    } else if (showZlatiborski) {
      return navigate("ZlatiborskiOkrug")
    } else if (showMoravicki) {
      return navigate("MoravickiOkrug")
    }
  });

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ width: "100vw", height: "100vh", position: "none" }}
    >
      <TileLayer
        url={`https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=qZ4DIeGQoRrxWzufyKP1`}
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}
        style={{ fill: "white", zIndex: "400" }}
      />
      {SumadijaIZapadnaSrbijaRegioni?.features?.map((statisticRegion) => {
        const cordinates = statisticRegion?.geometry?.coordinates[0]?.map(
          (item) => [item[1], item[0]]
        );

        return (
          <Polygon
            pathOptions={{
              fillColor: "#FD8D3C",
              fillOpacity: 0.3,
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
                  fillOpacity: 0.3,
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
