import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { djakovickiOkrugData } from "./DjakovickiOkurgData";
import { djakovickiOkrugPathRoutes } from "./DjakovickiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const DjakovickiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === djakovickiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? djakovickiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Đakovica") {
      navigate(djakovickiOkrugPathRoutes.djakovica)
    } else if (name === "Manastir Visoki Dečani") {
      navigate(djakovickiOkrugPathRoutes.decani)
    } else if (name === "Planina Prokletije") {
      navigate(djakovickiOkrugPathRoutes.prokletije)
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
      <section className="djakovicki okrug">
        <h1>Đakovički Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 2.500 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 100.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Ravne i brdovite oblasti,
            reka Beli Drim, brojni kanali, plodne ravnice i bogata poljoprivreda.
          </p>
        </form>
        <div>
          Đakovicki okrug se nalazi u jugozapadnom delu Srbije, obuhvatajući
          gradove i opštine kao što su Đakovica, Dečani, Orahovac i Junik.
          Sedište okruga je grad Đakovica. Prema poslednjem popisu, u okrugu
          živi oko 100.000 stanovnika. Okrug je poznat po ravničarskim i
          brdovitim predelima, kao i po velikim rekama, među kojima je
          najvažnija reka Morava. Region je poznat po plodnim ravnicama, koje su
          pogodne za poljoprivredu, naročito u proizvodnji žitarica, povrća i
          vinogradarstvu. Đakovicki okrug se takođe odlikuje bogatom kulturnom
          baštinom i istorijskim značajem. Gradovi u ovom okrugu domaćini su
          brojnim manifestacijama i kulturnim događanjima koja ističu tradiciju
          i običaje ovog kraja. Okrug je značajan za privredu, s razvijenim
          poljoprivrednim sektorom i industrijskim kapacitetima. Prirodne
          lepote, kao što su reke, šume i brdoviti predeli, čine ovu oblast
          atraktivnom za turiste.
        </div>
      </section>
      <section className="citatClass">
        <p>
        Najveći rizik od svih je provesti život ne radeći ono što želite, misleći kako ćete kasnije moći da kupite slobodu kako biste to činili. (Radni Komisar)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {djakovickiOkrugData?.map((okrug, index) => (
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
