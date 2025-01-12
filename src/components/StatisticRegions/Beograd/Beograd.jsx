// /* eslint-disable react/jsx-key */

// import { MapContainer, TileLayer, Polygon } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { BeogradRegioni } from "./BeogradRegioni";

// export const Beograd = () => {
//     const center = [44.816646, 20.427935];

//     return (
//         <MapContainer
//           center={center}
//           zoom={9}
//           style={{ width: "100vw", height: "100vh", position: "none" }}
//         >
//           <TileLayer
//             url="https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=ZEp04Kl6nUeRyGwWLKXx"
//             attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
//           />
//           {BeogradRegioni?.features?.map((statisticRegion) => {
//             const cordinates = statisticRegion?.geometry?.coordinates[0]?.map(
//               (item) => [item[1], item[0]]
//             );

//             return (
//               <Polygon
//                 pathOptions={{
//                   fillColor: "#FD8D3C",
//                   fillOpacity: 0.3,
//                   weight: 2,
//                   opacity: 1,
//                   dashArray: 1,
//                   color: "white",
//                 }}
//                 positions={cordinates}
//                 eventHandlers={{
//                   mouseover: (e) => {
//                     const layer = e.target;
//                     layer.setStyle({
//                       fillOpacity: 3,
//                       weight: 5,
//                       dashArray: "3",
//                     });
//                   },
//                   mouseout: (e) => {
//                     const layer = e.target;
//                     layer.setStyle({
//                       fillOpacity: 0.3,
//                       weight: 2,
//                       dashArray: "3",
//                       color: "white",
//                     });
//                   },
//                 }}
//               />

//             );
//           })}
//         </MapContainer>
//       );

// }

import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { beogradData } from "./BeogradData";

export const Beograd = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === beogradData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? beogradData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Beograd') {
      navigate('Beograd2')
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(-1)}
          style={{ fill: "white" }}
        />
      </header>
      <section className="beograd">
        <h1>Beograd</h1>
        <form>
          {" "}
          <p>
            {" "}
            <span>Površina: </span>oko 360 km²{" "}
          </p>{" "}
          <p>
            {" "}
            <span>Broj stanovnika: </span>približno 1.7 miliona{" "}
          </p>{" "}
          <p>
            {" "}
            <span>Geografske karakteristike: </span>Leži na ušću reka Save i
            Dunava, prostire se kroz ravnicu, sa brojnim brdima i zelenim
            površinama, idealno za urbanizaciju i rekreaciju.{" "}
          </p>{" "}
        </form>
        <div>
          Beograd, glavni grad Srbije, smešten je na ušću reke Save u Dunav, što
          ga čini jednim od najvažnijih gradova u jugoistočnoj Evropi. Sa
          bogatom istorijom koja seže više od 2.000 godina, Beograd je bio
          ključna tačka na mnogim važnim istorijskim putevima i uticao na razvoj
          kulture, politike i ekonomije regiona. Grad je bio pod vlašću
          Rimljana, Vizantije, Otomanskog carstva, a tokom 20. veka, pretrpeo je
          i brojne promene kroz oba svetska rata i tokom perioda socijalizma.
          Danas je Beograd moderan grad, poznat po vibrirajućem kulturnom i
          noćnom životu, brojnim muzejima, galerijama, kao i prelepim parkićima
          i rekreacionim zonama. Simboli Beograda uključuju Beogradsku tvrđavu,
          koja pruža panoramski pogled na reke, i Skadarliju, boemsku četvrt
          koja čuva duh prošlih vremena. Beograd je takođe važan univerzitetski
          i naučni centar, sa brojnim institucijama visokog obrazovanja i
          istraživačkim centrima. Grad je središte trgovine, transporta i
          tehnologije, a njegovi stanovnici poznati su po gostoljubivosti.
          Uprkos izazovima sa kojima se suočava, Beograd ostaje simbol dinamične
          kulture i tradicije.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Svet je knjiga, a oni koji ne putuju, čitaju samo jednu stranicu.
          (Sveti Avgustin)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {beogradData?.map((okrug, index) => (
            <div
              key={okrug.id}
              style={{ backgroundImage: `url(${okrug.img})` }}
              className={
                slide === index
                  ? "caruoselBackground caruoselBackground-visible"
                  : "caruoselBackground caruoselBackground-hidden"
              }
            >
              <BsArrowLeftCircleFill
                className="arrow arrow-left"
                onClick={prevContent}
              />
              <div className="caruoselInfo" style={{ padding: "0" }}>
                <h3>{okrug.name}</h3>
                <p>{okrug.mainText}</p>
                <button onClick={() => readMore(okrug.name)}>
                  Pročitaj više
                </button>
              </div>
              <BsArrowRightCircleFill
                className="arrow arrow-right"
                onClick={nextContent}
              />
            </div>
          ))}
        </div>
      </section>
      <footer></footer>
      <Outlet />
    </div>
  );
};
