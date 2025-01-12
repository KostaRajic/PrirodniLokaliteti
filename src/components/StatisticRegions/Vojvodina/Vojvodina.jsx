/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { VojvodinaRegioni } from "./VojvodinaRegioni";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Vojvodina = () => {
  const center = [45.20313713852372, 20.012617302735283];
  const mapRef = useRef(null);
  const navigate = useNavigate();
  const [showZapadnoBacki, setZapadnoBacki] = useState(false);
  const [showSevernoBacki, setSevernoBacki] = useState(false);
  const [showSevernoBanatski, setSevernoBanatski] = useState(false);
  const [showJuznoBacki, setJuznoBacki] = useState(false);
  const [showSrednjeBanatski, setSrednjeBanatski] = useState(false);
  const [showSremski, setSremski] = useState(false);
  const [shoeJuznoBanatski, setJuznoBanatski] = useState(false);

  // useEffect(() => {
  //   if (mapRef.current) {
  //     if (showVojvodina) {
  //       mapRef.current.scrollWheelZoom.disable();
  //     } else {
  //       mapRef.current.scrollWheelZoom.enable();
  //     }
  //   }
  // }, [showVojvodina, navigate]);

  useEffect(() => {
    if (showZapadnoBacki) {
      return navigate("ZapadnoBacki");
    } else if (showSevernoBacki) {
      return navigate("SevernoBacki");
    } else if (showSevernoBanatski) {
      return navigate("SevernoBanatski");
    } else if (showJuznoBacki) {
      return navigate("JuznoBacki");
    } else if (showSrednjeBanatski) {
      return navigate("SrednjeBanatski");
    } else if (showSremski) {
      return navigate("Sremski");
    } else if (shoeJuznoBanatski) {
      return navigate("JuznoBanatski");
    }
  });

  return (
    <div className="serbianMapClass">
      <MapContainer
        center={center}
        zoom={8}
        style={{ width: "100vw", height: "100vh" }}
        ref={mapRef}
      >
        <TileLayer
          url={`https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=qZ4DIeGQoRrxWzufyKP1`}
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
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
