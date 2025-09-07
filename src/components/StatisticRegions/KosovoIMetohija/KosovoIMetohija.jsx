/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */

import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { KosovoIMetohijaRegioni } from "./KosovoIMetohijaRegioni";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { peckiOkrugPathRoutes } from "./Okruzi/Pecki/PeckiOkrugPathRoutes";
import { mitrovackiOkrugPathRoutes } from "./Okruzi/Mitrovacki/MitrovackiOkrugPathRoutes";
import { pristinskiOkrugPathRoutes } from "./Okruzi/Pristinski/PristinskiOkrugPathRoutes";
import { prizrenskiOkrugPathRoutes } from "./Okruzi/Prizrenski/PrizrenskiOkrugPathRoutes";
import { djakovickiOkrugPathRoutes } from "./Okruzi/Djakovicki/DjakovickiOkrugPathRoutes";
import { urosevackiOkrugPathRoutes } from "./Okruzi/Uroevacki/UrosevackiOkrugPathRoutes";
import { gnjilanskiOkrugPathRoutes } from "./Okruzi/Gnjilanski/GnjilanskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../serbianMapPathRoutes";
import { useContextAuth } from "../../../Context";

const KosovoIMetohija = () => {
  const center = [42.651929, 20.992529];
  const navigate = useNavigate();
  const [showPecki, setShowPecki] = useState(false);
  const [showMitrovacki, setShowMitrovacki] = useState(false);
  const [showPristinski, setShowPristinski] = useState(false);
  const [showPrizrenski, setShowPrizrenski] = useState(false);
  const [showDjakovicki, setShowDjakovicki] = useState(false);
  const [showUrosevacki, setShowUrosevacki] = useState(false);
  const [showGnjilanski, setShowGnjilanski] = useState(false);
  const { switchLanguage } = useContextAuth();
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
    if (showPecki) {
      return navigate(peckiOkrugPathRoutes.home(switchLanguage));
    } else if (showMitrovacki) {
      return navigate(mitrovackiOkrugPathRoutes.home(switchLanguage));
    } else if (showPristinski) {
      return navigate(pristinskiOkrugPathRoutes.home(switchLanguage));
    } else if (showPrizrenski) {
      return navigate(prizrenskiOkrugPathRoutes.home(switchLanguage));
    } else if (showDjakovicki) {
      return navigate(djakovickiOkrugPathRoutes.home(switchLanguage));
    } else if (showUrosevacki) {
      return navigate(urosevackiOkrugPathRoutes.home(switchLanguage));
    } else if (showGnjilanski) {
      return navigate(gnjilanskiOkrugPathRoutes.home(switchLanguage));
    }
  }, [
    showPecki,
    showMitrovacki,
    showPristinski,
    showPrizrenski,
    showDjakovicki,
    showUrosevacki,
    showGnjilanski,
    navigate,
  ]);

  const bounds = [[42.651929, 20.992529]];

  return (
    <div>


      <MapContainer
        center={center}
        zoom={zoom}
        style={{ width: "100vw", height: "100vh", position: "none" }}
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
          onClick={() => navigate(serbianMapPathRoutes.KosovoIMetohijaTekstModal(switchLanguage))}
          style={{ zIndex: "40000", position: 'absolute' }}
        />
        {KosovoIMetohijaRegioni?.features?.map((statisticRegion) => {
          const cordinates = statisticRegion?.geometry?.coordinates[0]?.map(
            (item) => [item[1], item[0]]
          );

          return (
            <Polygon
              key={statisticRegion?.properties?.name}
              pathOptions={{
                fillColor: "green",
                fillOpacity: 0.8,

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
                  statisticRegion?.properties?.name === "Pećki" &&
                    setShowPecki(true);
                  statisticRegion?.properties?.name === "Mitrovački" &&
                    setShowMitrovacki(true);
                  statisticRegion?.properties?.name === "Prištinski" &&
                    setShowPristinski(true);
                  statisticRegion?.properties?.name === "Prizrenski" &&
                    setShowPrizrenski(true);
                  statisticRegion?.properties?.name === "Đakovički" &&
                    setShowDjakovicki(true);
                  statisticRegion?.properties?.name === "Uroševački" &&
                    setShowUrosevacki(true);
                  statisticRegion?.properties?.name === "Gnjilanski" &&
                    setShowGnjilanski(true);
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
    </div>
  );
};


export default KosovoIMetohija;