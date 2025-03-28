import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { zajecarskiOkrugData } from "./ZajecarskiOkrugData";

export const ZajecarskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === zajecarskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? zajecarskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Zaječar") {
      navigate("Zajecar");
    } else if (name === "Sokobanja") {
      navigate("SokoBanja");
    } else if (name === "Planina Rtanj") {
      navigate("PlaninaRtanj");
    } else if (name === "Vodopad Ripaljka") {
      navigate("VodopadRipaljka");
    } else if (name === 'Srpski Srednjovekovni Grad "Soko Grad"') {
      navigate("SokoGrad");
    } else if (name === "Feliks Romulijana") {
      navigate("Gamzigrad");
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
      <section className="zajecarski okrug">
        <h1>Zaječarski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.647 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 120.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Brdoviti i planinski
            predeli, reke Timok i Morava, plodne doline, bogata šumska i
            rudarska nalazišta.
          </p>
        </form>
        <div>
          Zaječarski okrug se nalazi u istočnom delu Srbije i obuhvata delove sa
          bogatim prirodnim lepotama i istorijskim spomenicima. Ovaj okrug
          uključuje grad Zaječar, koji je administrativni, ekonomski i kulturni
          centar, kao i manja naselja poput Knjaževca i Bora. Zaječar je poznat
          po svojoj istorijskoj baštini, uključujući arheološke lokalitete poput
          Feliks Romulijane, antičke carske palate rimskog cara Galerija. Okruzi
          su bogati prirodnim resursima, a reke Timok i Morava pružaju
          mogućnosti za poljoprivredu i ribolov. Privreda Zaječarskog okruga
          oslanja se na rudarstvo, poljoprivredu i turizam. Zaječar je domaćin
          manifestacijama poput Zaječarske Gitarijade, najpoznatijeg muzičkog
          festivala u regionu. Pored toga, Zaječarski okrug je i poznata
          destinacija za ljubitelje prirode, sa brojnim planiranim stazama,
          pećinama, i lokalnim izvorima termalne vode.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Više se ne plašim da se izgubim, jer povratak uvek otkriva nešto novo.
          (Bili Džoel)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {zajecarskiOkrugData?.map((okrug, index) => (
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
