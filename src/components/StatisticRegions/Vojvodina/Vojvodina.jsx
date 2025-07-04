/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { VojvodinaRegioni } from "./VojvodinaRegioni";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { zapadnoBackiPathRoutes } from "./Okruzi/ZapadnoBacki/ZapadnoBackiPathRoutes";
import { severnoBanatskiPathRoutes } from "./Okruzi/SevernoBanatski/SevernoBanatskiPathRoutes";
import { servernoBackiPathRoutes } from "./Okruzi/SevernoBacki/SevernoBackiPathRoutes";
import { JuznoBackiPathRoutes } from "./Okruzi/JuznoBacki/JuznoBackiPathRoutes";
import { srednjeBanatskiPathRoutes } from "./Okruzi/SrednjeBanatski/SrednjeBanatskiPathRoutes";
import { sremskiOkrugPathRoutes } from "./Okruzi/Sremski/SremskiOkrugPathRoutes";
import { juznoBanatskiPathRoutes } from "./Okruzi/JuznoBanatski/JuznoBanatskiPathRoutes";
import { serbianMapPathRoutes } from "../../serbianMapPathRoutes";

export const Vojvodina = () => {
  const center = [45.20313713852372, 20.012617302735283];
  const navigate = useNavigate();
  const [showZapadnoBacki, setZapadnoBacki] = useState(false);
  const [showSevernoBacki, setSevernoBacki] = useState(false);
  const [showSevernoBanatski, setSevernoBanatski] = useState(false);
  const [showJuznoBacki, setJuznoBacki] = useState(false);
  const [showSrednjeBanatski, setSrednjeBanatski] = useState(false);
  const [showSremski, setSremski] = useState(false);
  const [shoeJuznoBanatski, setJuznoBanatski] = useState(false);
  const [zoom, setZoom] = useState(() => {
    if (window.innerWidth < 600) {
      return 7;
    } else if (window.innerWidth < 1600) {
      return 8;
    } else {
      return 10;
    }
  });

  const bounds = [[45.20313713852372, 20.012617302735283]];

  useEffect(() => {
    if (showZapadnoBacki) {
      return navigate(zapadnoBackiPathRoutes.home);
    } else if (showSevernoBacki) {
      return navigate(servernoBackiPathRoutes.home);
    } else if (showSevernoBanatski) {
      return navigate(severnoBanatskiPathRoutes.home);
    } else if (showJuznoBacki) {
      return navigate(JuznoBackiPathRoutes.home);
    } else if (showSrednjeBanatski) {
      return navigate(srednjeBanatskiPathRoutes.home);
    } else if (showSremski) {
      return navigate(sremskiOkrugPathRoutes.home);
    } else if (shoeJuznoBanatski) {
      return navigate(juznoBanatskiPathRoutes.home);
    }
  });



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
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.VojvodinaTekstModal)}
          style={{ zIndex: '400' }}
        />
        {VojvodinaRegioni?.features?.map((statisticOkrug, index) => {
          const cordinates = statisticOkrug?.geometry?.coordinates[0]?.map(
            (item) => [item[1], item[0]]
          );

          return (
            <div key={index}>
              <Polygon
                key={statisticOkrug?.id}
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
                    statisticOkrug?.properties?.name === "Zapadno-Backi" &&
                      setZapadnoBacki(true);
                    statisticOkrug?.properties?.name === "Severno-Backi" &&
                      setSevernoBacki(true);
                    statisticOkrug?.properties?.name === "Severno-Banatski" &&
                      setSevernoBanatski(true);
                    statisticOkrug?.properties?.name === "Juzno-Backi" &&
                      setJuznoBacki(true);
                    statisticOkrug?.properties?.name === "Srednje-Banatski" &&
                      setSrednjeBanatski(true);
                    statisticOkrug?.properties?.name === "Sremski" &&
                      setSremski(true);
                    statisticOkrug?.properties?.name === "Juzno-Banatski" &&
                      setJuznoBanatski(true);
                  },
                }}
              >
                <Tooltip>
                  <span className="toolTipClass">
                    {statisticOkrug?.properties?.name}
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
