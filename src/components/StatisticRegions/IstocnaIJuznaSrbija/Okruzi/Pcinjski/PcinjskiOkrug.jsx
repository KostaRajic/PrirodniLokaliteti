import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { pcinjskiOkrugData } from "./PcinjskiOkrugData";
import { pcinjskiOkrugPathRoutes } from "./PcinjskiOkrugPathRoutes";

export const PcinjskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === pcinjskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? pcinjskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Vranje') {
        navigate(pcinjskiOkrugPathRoutes.vranje)
    } else if (name === 'Vlasinsko jezero') {
        navigate(pcinjskiOkrugPathRoutes.vlasinskoJezero)
    } else if (name === 'Planina Besna Kobila') {
        navigate(pcinjskiOkrugPathRoutes.besnaKobila)
    } else if (name === 'Manastir Prohora Pčinjskog') {
      navigate(pcinjskiOkrugPathRoutes.prohorPcinjski)
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
      <section className="pcinjski okrug">
        <h1>Pčinjski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.520 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 193.802
          </p>
          <p>
            <span>Geografske karakteristike: </span>Ravničarski i brdoviti
            predeli, reke Pčinja i Vlasina, plodno zemljište pogodno za
            poljoprivredu, razvijena poljoprivreda, industrija i turizam.
          </p>
        </form>
        <div>
          Pčinjski okrug se nalazi u južnom delu Srbije, obuhvatajući grad
          Vranje i opštine Bujanovac, Preševo, Bosilegrad, Surdulica, Vladičin
          Han, Trgovište i Bujanovac. Sedište okruga je grad Vranje. Prema
          poslednjem popisu iz 2022. godine, u okrugu živi 193.802 stanovnika.
          Okrug je poznat po razvijenoj poljoprivredi, naročito u proizvodnji
          žitarica, povrća i voća. Takođe, vina iz ovog kraja su prepoznata i
          popularna u regionu. Okrug se oslanja na poljoprivredu, ali i na
          turizam, jer prirodne lepote, termalne vode i arheološka nalazišta
          privlače brojne posetioce. Među važnijim turističkim atrakcijama su
          termalne banje, kao što je Vranjska banja, i arheološka nalazišta,
          uključujući i utvrđenja iz rimskog i srednjeg veka. Okrug je poznat po
          kulturnim manifestacijama, među kojima se izdvaja "Dani Vranja", koja
          slavi tradiciju i običaje ovog kraja. Pčinjski okrug spaja istoriju,
          prirodu i savremeni način života, čineći ga jedinstvenim delom Srbije.
        </div>
      </section>
      <section className="citatClass">
        <p>Putovanje i promena mesta daju novu snagu vašem umu. (Seneka)</p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {pcinjskiOkrugData?.map((okrug, index) => (
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
