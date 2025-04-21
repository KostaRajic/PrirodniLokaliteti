import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { peckiOkrugData } from "./PeckiOkrugData";
import { peckiOkrugPathRoutes } from "./PeckiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const PeckiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === peckiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? peckiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Peć") {
        navigate(peckiOkrugPathRoutes.pec)
    } else if (name === "Pećka Patrijaršija") {
        navigate(peckiOkrugPathRoutes.peckaPatrijarsija)
    } else if (name === "Planina Mokra Gora") {
        navigate(peckiOkrugPathRoutes.mokraGora)
    } else if (name === "Vodopad Beli Drim") {
        navigate(peckiOkrugPathRoutes.vodopadBeliDrim)
    } else if (name === "Planina Žuti Kamen") {
        navigate(peckiOkrugPathRoutes.planinaZutiKamen)
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.KosovoIMetohija)}
          style={{ fill: "white" }}
        />
      </header>
      <section className="pecki okrug">
        <h1>Pećki Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 4.400 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 315.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Planinske oblasti, reke
            Beli Drim i Pećka Bistrica, bogato prirodno nasleđe, šumska područja i plodna
            dolina.
          </p>
        </form>
        <div>
          Pećki okrug se nalazi u zapadnom delu Kosova, obuhvatajući grad Peć i
          opštine Peć, Istok, Klina. Sedište okruga
          je grad Peć. Prema poslednjem popisu, u okrugu živi oko 315.000
          stanovnika. Okrug je poznat po planinskim predelima, ali i plodnim
          dolinama, gde je poljoprivreda veoma razvijena, naročito u proizvodnji
          žitarica, povrća i voća. Pećki okrug je takođe značajan po šumarstvu i
          stočarstvu. Regija je bogata prirodnim lepotama, kao i rekama i vodopadima.
           Okrug se oslanja i na turizam, jer njegova priroda, kulturno
          nasleđe i istorijska znamenitost, uključujući manastir Pećku
          Patrijaršiju, privlače posetioce. Pećki okrug ima bogatu kulturnu
          baštinu, a poznat je i po brojnim manifestacijama, među kojima je i
          "Pećki džez festival", koji slavi tradiciju, umetnost i običaje ovog kraja.
          Okrug je odlična destinacija za ljubitelje prirode, istorije i
          tradicionalne kulture, i predstavlja značajan deo Kosova.
        </div>
      </section>
      <section className="citatClass">
        <p>Putovanje i promena mesta daju novu snagu vašem umu. (Seneka)</p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {peckiOkrugData?.map((okrug, index) => (
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
