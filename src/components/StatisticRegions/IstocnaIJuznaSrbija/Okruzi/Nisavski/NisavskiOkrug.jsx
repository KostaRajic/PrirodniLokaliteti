import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { nisavskiOkrugData } from "./NisavskiOkrugData";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";

export const NisavskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === nisavskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? nisavskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Niš") {
      navigate(nisavskiOkrugPathRoutes.nis);
    } else if (name === "Čegar") {
      navigate(nisavskiOkrugPathRoutes.cegar);
    } else if (name === "Bovansko Jezero") {
      navigate(nisavskiOkrugPathRoutes.bovanskoJezero);
    } else if (name === "Suva Planina") {
      navigate(nisavskiOkrugPathRoutes.suvaPlanina);
    } else if (name === "Sićevačka Klisura") {
      navigate(nisavskiOkrugPathRoutes.sicevackaKlisura);
    } else if (name === "Manastir Sveta Petka Iverica") {
      navigate(nisavskiOkrugPathRoutes.manastirSvetaPetkaIverica);
    } else if (name === "Niška Banja") {
      navigate(nisavskiOkrugPathRoutes.niskaBanja);
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
      <section className="nisavski okrug">
        <h1>Nišavski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 2.729 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 370.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Ravnica i brdoviti predeli,
            reka Nišava, plodne doline, bogata kulturna i istorijska baština.
          </p>
        </form>
        <div>
          Nišavski okrug se nalazi u jugoistočnom delu Srbije i obuhvata
          područja sa značajnim prirodnim lepotama i istorijskim znamenitostima.
          Ovaj okrug uključuje grad Niš, koji je administrativni, ekonomski i
          kulturni centar regiona, kao i manja naselja poput Aleksinca i
          Svrljiga. Niš je poznat po svojoj bogatoj istoriji, uključujući
          lokalitete poput Medijane, Čegra i Ćele-kule. Prirodni resursi
          Nišavskog okruga obuhvataju reku Nišavu, brojne termalne izvore i
          planinske predele idealne za rekreaciju. Privreda okruga zasniva se na
          industriji, trgovini, turizmu i poljoprivredi. Niš je domaćin
          manifestacijama poput Nišvila, međunarodnog džez festivala, koji
          privlači posetioce iz celog sveta. Osim toga, Nišavski okrug nudi
          bogatstvo prirodnih atrakcija, uključujući pećine, rečne kanjone i
          banjske centre poznate po lekovitim vodama.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Život je kratak a svet je širok, što pre krenete da ga istražujete to
          bolje. (Simon Raven)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {nisavskiOkrugData?.map((okrug, index) => (
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
