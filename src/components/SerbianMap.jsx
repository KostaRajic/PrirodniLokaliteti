/* eslint-disable no-undef */
 /* eslint-disable react/jsx-key */
import { MapContainer, TileLayer, Polygon, Tooltip  } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { serbianMapData } from "../data";
import { useEffect, useRef, useState } from "react";
import { Beograd } from "./StatisticRegions/Beograd/Beograd";
import { IstocnaiJuznaSrbija } from "./StatisticRegions/IstocnaIJuznaSrbija/IstocnaIJuznaSrbija.jsx";
import { SumadijaIZapadnaSrbija } from "./StatisticRegions/SumadijaIZapadnaSrbija/SumadijaIZapadnaSrbija.jsx";
import { KosovoIMetohija } from "./StatisticRegions/KosovoIMetohija/KosovoIMetohija.jsx";
import { VojvodinaTekstModal } from "./StatisticRegions/Vojvodina/VojvodinaTekstModal.jsx";
import { useNavigate } from "react-router-dom";

export const SerbianMap = () => {
  const center = [44.02543064661552, 20.888526435851563];
  const [ showVojvodina, setShowVojvodina ] = useState(false)
  const [ showBeograd, setShowBeograd ] = useState(false);
  const [ showIstocnaiJuznaSrbija, setShowIstocnaiJuznaSrbija ] = useState(false);
  const [ showSumadijaIZapadnaSrbija, setShowSumadijaIZapadnaSrbija ] = useState(false);
  const [ showKosovoIMetohija, setShowKosovoIMethoija ] = useState(false);
  const mapRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (mapRef.current) {
      if (showVojvodina) {
        mapRef.current.scrollWheelZoom.disable();
      } else {
        mapRef.current.scrollWheelZoom.enable();
      }
    }
  }, [showVojvodina, navigate]);

  useEffect(() => {
    if (showVojvodina) {
      return navigate('vojvodinaTekstModal')
    } else if (showBeograd) {
      return navigate('Beograd')
    }
  }
  )

  return ( <div className="serbianMapClass">

    <MapContainer
      center={center}
      zoom={7}
      style={{ width: "100vw", height: "100vh"}}
      ref={mapRef}
    >
      <TileLayer
       url={`https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=qZ4DIeGQoRrxWzufyKP1`}
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {serbianMapData?.features?.map((statisticRegion, index) => {
        console.log(statisticRegion)
        const cordinates = statisticRegion?.geometry?.coordinates[0]?.map(
          (item) => [item[1], item[0]]
        );

        return  <div key={index}>
          <Polygon
            key={statisticRegion?.id}
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
                statisticRegion?.properties?.name === 'Vojvodina' && setShowVojvodina(true)
                statisticRegion?.properties?.name === 'Beograd' && setShowBeograd(true)
                statisticRegion?.properties?.name === 'Juzna i istocna Srbija' && setShowIstocnaiJuznaSrbija(true)
                statisticRegion?.properties?.name === 'Sumadija i zapadna Srbija' && setShowSumadijaIZapadnaSrbija(true)
                statisticRegion?.properties?.name === 'Kosovo i Metohija' && setShowKosovoIMethoija(true)
              }
            }}
          >
          <Tooltip><span className="toolTipClass">{statisticRegion?.properties?.name}</span></Tooltip>
          </Polygon>
        
        </div>
      })}
      
    </MapContainer>
    </div>
    )
};
