import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { gnjilanskiOkrugData } from "./GnjilanskiOkrugData";
import { gnjilanskiOkrugPathRoutes } from "./GnjilanskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const GnjilanskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === gnjilanskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? gnjilanskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Gnjilane") {
      navigate(gnjilanskiOkrugPathRoutes.gnjilane)
    } else if (name === "Manastir Ubožac") {
      navigate(gnjilanskiOkrugPathRoutes.ubozac)
    } else if (name === "Podgrađa tvrđava") {
      navigate(gnjilanskiOkrugPathRoutes.podgradje)
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
      <section className="gnjilanski okrug">
        <h1>Gnjilanski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 1.200 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 90.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Brdovita i planinska
            područja, reka Binačka Morava, plodne doline, šumska prostranstva i
            raznovrsna flora i fauna.
          </p>
        </form>
        <div>
          Gnjilanski okrug se nalazi u istočnom delu Srbije, obuhvatajući
          gradove i opštine kao što su Gnjilane, Vitina i Kosovska Kamenica.
          Sedište okruga je grad Gnjilane. Prema poslednjem popisu, u okrugu
          živi oko 54.000 stanovnika. Okrug se odlikuje pretežno brdovitim i
          planinskim reljefom, kroz koji protiče reka Binačka Morava. Region je
          poznat po plodnim dolinama koje pogoduju poljoprivrednoj proizvodnji,
          naročito povrtarstvu, voćarstvu i stočarstvu. Gnjilanski okrug ima
          bogatu kulturnu i istorijsku baštinu, sa brojnim spomenicima iz
          srednjeg veka, manastirima i tradicionalnim manifestacijama koje
          odražavaju duh i običaje lokalnog stanovništva. Privreda okruga se
          bazira na poljoprivredi, prerađivačkoj industriji i zanatstvu.
          Prirodne lepote, kao što su planinski pejzaži, reke i šumske površine,
          čine ovaj region privlačnim za turizam i ekološke aktivnosti.
        </div>
      </section>
      <section className="citatClass">
        <p>Život počinje na kraju vaše zone komfora. (Nil Donald Valš)</p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {gnjilanskiOkrugData?.map((okrug, index) => (
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
