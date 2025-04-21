import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { urosevackiOkrugData } from "./UrosevackiOkrugData";
import { urosevackiOkrugPathRoutes } from "./UrosevackiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const UrosevackiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === urosevackiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? urosevackiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Uroševac") {
        navigate(urosevackiOkrugPathRoutes.urosevac)
    } else if (name === "Ski centar Brezovica") {
        navigate(urosevackiOkrugPathRoutes.brezovica)
    } else if (name === "Ljuboten - Šar Planina") {
      navigate(urosevackiOkrugPathRoutes.ljuboten)
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
      <section className="urosevacki okrug">
        <h1>Uroševački Okrug</h1>
        <form>
          {" "}
          <p>
            {" "}
            <span>Površina: </span>oko 1.200 km²{" "}
          </p>{" "}
          <p>
            {" "}
            <span>Broj stanovnika: </span>približno 100.000{" "}
          </p>{" "}
          <p>
            {" "}
            <span>Geografske karakteristike: </span>Brdsko-planinska područja,
            reke Lepenac i Nerodimka, plodne doline, prirodna bogatstva i
            raznovrsna kulturno-istorijska baština.{" "}
          </p>{" "}
        </form>{" "}
        <div>
          {" "}
          Uroševački okrug se nalazi u južnom delu Srbije, na teritoriji Kosova
          i Metohije, i obuhvata grad Uroševac kao administrativno i ekonomsko
          središte regiona, zajedno sa opštinama Štrpce, Kačanik. Grad Uroševac
          je poznat po brzom razvoju i položaju na važnoj saobraćajnoj
          raskrsnici između Prištine i Skoplja. Okrug ima približno 250.000
          stanovnika. Geografski, prostor okruga karakterišu brdsko-planinski
          reljef, reke Lepenac i Nerodimka, kao i plodne doline pogodne za
          poljoprivredu. Okružen je prirodnim lepotama, posebno Šar-planinom,
          koja nudi mogućnosti za zimsku rekreaciju i planinski turizam. Štrpce
          i Brezovica su poznate po zimskim sportovima i očuvanom prirodnom
          okruženju. Uroševački okrug ima značajnu kulturnu i istorijsku
          baštinu, sa brojnim crkvama, manastirima i arheološkim lokalitetima. U
          regiji se održavaju kulturne manifestacije koje neguju lokalne običaje
          i tradiciju. Pored toga, okrug ima razvijen poljoprivredni sektor, a
          prirodni resursi i turizam predstavljaju potencijal za dalji razvoj
          lokalne privrede.{" "}
        </div>
      </section>
      <section className="citatClass">
        <p>
          Kada putujete, više naučite o svojoj zemlji, nego o mestu koje
          posećujete. (Klint Borgen)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {urosevackiOkrugData?.map((okrug, index) => (
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
