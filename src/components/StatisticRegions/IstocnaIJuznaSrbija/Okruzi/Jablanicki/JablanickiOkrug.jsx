import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { jablanickiOkrugData } from "./JablanickiOkrugData";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";
import { Leskovac } from "./Leskovac";

export const JablanickiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === jablanickiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? jablanickiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Leskovac") {
      navigate(jablanickiOkrugPathRoutes.leskovac)
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
      <section className="jablanicki okrug">
        <h1>Jablanični Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 2.654 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 160.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Brdoviti predeli, reke
            Jablanica i Vučjanka, bogatstvo prirodnih resursa, plodno zemljište,
            razvijena poljoprivreda, stočarstvo, voćarstvo i proizvodnja hrane.
          </p>
        </form>
        <div>
          Jablanicki okrug se nalazi u južnom delu Srbije i poznat je po svojoj
          prirodnoj lepoti, bogatoj tradiciji i značajnim kulturnim spomenicima.
          Ovaj okrug obuhvata grad Leskovac, kao najveći administrativni i
          ekonomski centar, i opštine Vlasotince, Medveđa i Lebane. Leskovac je
          poznat po svojoj tradiciji u proizvodnji hrane, naročito po poznatim
          Leskovačkim specijalitetima, kao što su leskovački roštilj i ajvar.
          Okrug se odlikuje razvijenim stočarstvom i poljoprivredom, a proizvodi
          poput mesa, mleka i povrća imaju značajnu poziciju na tržištu.
          Jablanicki okrug je bogat prirodnim lepotama, među kojima se izdvajaju
          planinski vrhovi i brojne reke i jezera, idealna za ljubitelje prirode
          i planinarenja. Osim prirodnih lepota, okrug je domaćin i nekoliko
          kulturnih manifestacija, poput Leskovačkog sajma i manifestacija
          posvećenih tradicionalnoj kuhinji. Okrug se oslanja i na turizam,
          zahvaljujući svojoj bogatoj kulturno-historijskoj baštini, među kojima
          su crkve, manastiri i arheološka nalazišta koja svedoče o istoriji
          ovog regiona. Jablanicki okrug je savršen spoj tradicije, prirode i
          savremenih industrijskih i poljoprivrednih aktivnosti, čineći ga
          značajnim delom Srbije.
        </div>
      </section>
      <section className="citatClass">
        <p>
        Turisti ne znaju gde su bili. Putnici ne znaju gde idu. (Pol Terou)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {jablanickiOkrugData?.map((okrug, index) => (
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
