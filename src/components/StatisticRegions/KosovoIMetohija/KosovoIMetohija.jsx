/* eslint-disable react/jsx-key */

import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { KosovoIMetohijaRegioni } from "./KosovoIMetohijaRegioni";

export const KosovoIMetohija = () => {
    const center = [42.651929, 20.992529];

    return (
        <MapContainer
          center={center}
          zoom={9}
          style={{ width: "100vw", height: "100vh", position: "none" }}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=ZEp04Kl6nUeRyGwWLKXx"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          {KosovoIMetohijaRegioni?.features?.map((statisticRegion) => {
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
                  dashArray: 1,
                  color: "white",
                }}
                positions={cordinates}
                eventHandlers={{
                  mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 3,
                      weight: 5,
                      dashArray: "3",
                    });
                  },
                  mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.3,
                      weight: 2,
                      dashArray: "3",
                      color: "white",
                    });
                  },
                }}
              />

            );
          })}
        </MapContainer>
      );

}