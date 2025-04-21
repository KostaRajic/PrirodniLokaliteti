import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { mitrovackiOkrugData } from "./MitrovackiOkrugData";
import { mitrovackiOkrugPathRoutes } from "./MitrovackiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const MitrovackiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === mitrovackiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? mitrovackiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Kosovska Mitrovica") {
      return navigate(mitrovackiOkrugPathRoutes.mitrovica)
    } else if (name === "Manastir Banjska") {
      return navigate(mitrovackiOkrugPathRoutes.banjska)
    } else if (name === "Gazivodsko Jezero") {
      return navigate(mitrovackiOkrugPathRoutes.gazivode)
    } else if (name === "Manastir Devič") {
      return navigate(mitrovackiOkrugPathRoutes.devic)
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
      <section className="mitrovacki okrug">
        <h1>Mitrovački Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 1.900 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 350.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Planinske oblasti, reke Ibar
            i Sitnica, brojne šume, plodne doline i značajna kulturna baština.
          </p>
        </form>
        <div>
          Kosovsko-mitrovački okrug se nalazi u severnom delu Kosova,
          obuhvatajući grad Kosovsku Mitrovicu i opštine Kosovska Mitrovica,
          Zvečan, Leposavić i Zubin Potok. Sedište okruga je grad Kosovska
          Mitrovica. Prema poslednjem popisu, u okrugu živi oko 350.000
          stanovnika. Okrug je poznat po planinskim predelima, ali i plodnim
          dolinama, koje su pogodne za poljoprivredu, posebno u proizvodnji
          žitarica, povrća i stočarstvu. Kosovsko-mitrovački okrug je bogat
          šumama, a takođe ima i brojne reke, među kojima je najznačajniji Ibar.
          Regija je poznata po svojoj kulturnoj baštini, a grad Kosovska
          Mitrovica ima značajnu istorijsku ulogu na Kosovu. Okrug je domaćin
          mnogim manifestacijama, među kojima su i brojne kulturne i umetničke
          priredbe koje ističu tradiciju i običaje ovog kraja. Osim toga,
          prirodne lepote, kao što su planine i reke, čine ovu oblast
          atraktivnom za turiste. Kosovsko-mitrovački okrug je od velikog
          značaja za privredu Kosova, s obzirom na njegovu razvijenu
          poljoprivredu, industriju i značajnu kulturnu baštinu.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Bolje je doživeti nešto jednom nego slušati o tome 1000 puta. (Azian
          Proverb)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {mitrovackiOkrugData?.map((okrug, index) => (
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
