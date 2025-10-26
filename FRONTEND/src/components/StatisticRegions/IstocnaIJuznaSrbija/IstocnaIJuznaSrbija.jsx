/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */

import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IstocnaIJuznaSrbijaRegioni } from "./IstocnaIJuznaSrbijaRegioni";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { nisavskiOkrugPathRoutes } from "./Okruzi/Nisavski/NisavskiOkrugPathRoutes";
import { toplickiOkurgPathRoutes } from "./Okruzi/Toplicki/ToplickiOkurgPathRoutes";
import { pirotskiOkrugPathRoutes } from "./Okruzi/Pirotski/PirotskiOkrugPathRoutes";
import { jablanickiOkrugPathRoutes } from "./Okruzi/Jablanicki/JablanickiOkrugPathRoutes";
import { pcinjskiOkrugPathRoutes } from "./Okruzi/Pcinjski/PcinjskiOkrugPathRoutes";
import { borskiOkrugPathRoutes } from "./Okruzi/Borski/BorskiOkrugPathRoutes";
import { branicevskiOkrugPathRoutes } from "./Okruzi/Branicevski/BranicevskiOkrugPathRoutes";
import { podunavskiOkrugPathRoutes } from "./Okruzi/Podunavski/PodunavskiOkrugPathRouts";
import { zajecarskiOkrugPathRoutes } from "./Okruzi/Zajecarski/ZajecarskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../serbianMapPathRoutes";
import { useContextAuth } from "../../../Context";

const IstocnaiJuznaSrbija = () => {
  const center = [43.582016, 21.975183];
  const navigate = useNavigate();
  const [showPodunavski, setShowPodunavski] = useState(false);
  const [showBranicevski, setShowBranicevski] = useState(false);
  const [showBorski, setShowBorski] = useState(false);
  const [showZajecarski, setShowZajecarski] = useState(false);
  const [showNisavski, setShowNisavski] = useState(false);
  const [showToplicki, setShowToplicki] = useState(false);
  const [showPirotski, setShowPirotski] = useState(false);
  const [showJablanicki, setShowJablanicki] = useState(false);
  const [showPcinjski, setShowPcinjski] = useState(false);
  const { switchLanguage } = useContextAuth();
  const [zoom, setZoom] = useState(() => {
    if (window.innerWidth < 600) {
      return 6;
    } else if (window.innerWidth < 1600) {
      return 7;
    } else {
      return 10;
    }
  });


  const bounds = [[43.582016, 21.975183]];

  useEffect(() => {
    if (showPodunavski) {
      return navigate(podunavskiOkrugPathRoutes.home(switchLanguage));
    } else if (showBranicevski) {
      return navigate(branicevskiOkrugPathRoutes.home(switchLanguage));
    } else if (showBorski) {
      return navigate(borskiOkrugPathRoutes.home(switchLanguage));
    } else if (showZajecarski) {
      return navigate(zajecarskiOkrugPathRoutes.home(switchLanguage));
    } else if (showNisavski) {
      return navigate(nisavskiOkrugPathRoutes.home(switchLanguage));
    } else if (showToplicki) {
      return navigate(toplickiOkurgPathRoutes.home(switchLanguage));
    } else if (showPirotski) {
      return navigate(pirotskiOkrugPathRoutes.home(switchLanguage));
    } else if (showJablanicki) {
      return navigate(jablanickiOkrugPathRoutes.home(switchLanguage));
    } else if (showPcinjski) {
      return navigate(pcinjskiOkrugPathRoutes.home(switchLanguage));
    }
  }, [
    showPodunavski,
    showBranicevski,
    showBorski,
    showZajecarski,
    showNisavski,
    showToplicki,
    showPirotski,
    showJablanicki,
    showPcinjski,
    navigate,
  ]);

  return (
    <div>
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
          onClick={() => navigate(serbianMapPathRoutes.IstocnaSrbijaTekstModal(switchLanguage))}
          style={{ zIndex: "40000", position: 'absolute' }}
        />
        {IstocnaIJuznaSrbijaRegioni?.features?.map((statisticRegion) => {
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
                  statisticRegion?.properties?.name === "Podunavski" &&
                    setShowPodunavski(true);
                  statisticRegion?.properties?.name === "Braničevski" &&
                    setShowBranicevski(true);
                  statisticRegion?.properties?.name === "Borski" &&
                    setShowBorski(true);
                  statisticRegion?.properties?.name === "Zaječarski" &&
                    setShowZajecarski(true);
                  statisticRegion?.properties?.name === "Nišavski" &&
                    setShowNisavski(true);
                  statisticRegion?.properties?.name === "Toplički" &&
                    setShowToplicki(true);
                  statisticRegion?.properties?.name === "Pirotski" &&
                    setShowPirotski(true);
                  statisticRegion?.properties?.name === "Jablanički" &&
                    setShowJablanicki(true);
                  statisticRegion?.properties?.name === "Pčinski" &&
                    setShowPcinjski(true);
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

export default IstocnaiJuznaSrbija;