import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { toplickiOkrugData } from "./toplickiOkrugData";
import { toplickiOkurgPathRoutes } from "./ToplickiOkurgPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const ToplickiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === toplickiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? toplickiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Prokuplje") {
      navigate(toplickiOkurgPathRoutes.prokuplje)
    } else if (name === "Đavolja Varoš") {
      navigate(toplickiOkurgPathRoutes.djavoljaVaros)
    } else if (name === "Planina Jastrebac") {
      navigate(toplickiOkurgPathRoutes.jastrebac)
    } else if (name === "Tvrđava Hisar") {
      navigate(toplickiOkurgPathRoutes.hisar)
    } else if (name === "Manastir Svetog Nikole") {
      navigate(toplickiOkurgPathRoutes.manastirSvetogNikole)
    } else if (name === "Planina Radan") {
      navigate(toplickiOkurgPathRoutes.planinaRadan)
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.IstocnaSrbija)}
          style={{ fill: "white" }}
        />
      </header>
      <section className="toplicki okrug">
        <h1>Toplički Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.486 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 190.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Ravničarski i brežuljkasti
            predeli, reke Morava i Toplica, plodno zemljište pogodno za
            poljoprivredu, razvijena poljoprivreda, industrija i turizam.
          </p>
        </form>
        <div>
          Toplički okrug se nalazi u južnom delu Srbije, obuhvata područje
          bogato prirodnim lepotama, istorijskim spomenicima i kulturnim
          znamenitostima. Ovaj okrug uključuje gradove Prokuplje, Kuršumliju i
          Blace, koji su značajni administrativni, ekonomski i kulturni centri.
          Prokuplje je najpoznatiji grad u okrugu, poznat po svojoj istorijskoj
          tradiciji i značaju, dok Kuršumlija ima bogatu istoriju i brojne
          spomenike iz prošlih vekova. Toplički okrug je poznat po razvijenoj
          poljoprivredi, naročito u proizvodnji žitarica, povrća i voća. Takođe,
          vina iz ovog kraja su prepoznata i popularna u regionu. Okrug se
          oslanja na poljoprivredu, ali i na turizam, jer prirodne lepote,
          termalne vode i arheološka nalazišta privlače brojne posetioce. Među
          važnijim turističkim atrakcijama su termalne banje, kao što je Banja
          Niš, i arheološka nalazišta, uključujući i utvrđenja iz rimskog i
          srednjeg veka. Okrug je poznat po kulturnim manifestacijama, među
          kojima se izdvaja Prokupačka jesen, koja slavi tradiciju i običaje
          ovog kraja. Toplički okrug spaja istoriju, prirodu i savremeni način
          života, čineći ga jedinstvenim delom Srbije.
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
          {toplickiOkrugData?.map((okrug, index) => (
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
