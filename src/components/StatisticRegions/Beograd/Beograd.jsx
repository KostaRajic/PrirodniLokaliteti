// /* eslint-disable react/jsx-key */

import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { beogradData } from "./BeogradData";
import { beogradPathRoutes } from "./BeogradPathRoutes";

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
      navigate(beogradPathRoutes.beograd)
    } else if (name === 'Beogradska Tvrdjava - Kalemegdan') {
      navigate(beogradPathRoutes.kalemegdan)
    } else if (name === 'Hram Svetog Save') {
      navigate(beogradPathRoutes.hramSvetogSave)
    } else if (name === 'Knez Mihailova') {
      navigate(beogradPathRoutes.knezMihajlova)
    } else if (name === 'Trg Republike') {
      navigate(beogradPathRoutes.trgRepublike)
    } else if (name === 'Botanicka Bašta') {
      navigate(beogradPathRoutes.botanickaBasta)
    } else if (name === 'Skadarlija') {
      navigate(beogradPathRoutes.skadarlija)
    } else if (name === 'Ada Ciganlija') {
      navigate(beogradPathRoutes.adaCiganlija)
    } else if (name === 'Košutnjak') {
      navigate(beogradPathRoutes.kosutnjak)
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate('/')}
          style={{ fill: "white"}}
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
      <Outlet />
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
    </div>
  );
};
