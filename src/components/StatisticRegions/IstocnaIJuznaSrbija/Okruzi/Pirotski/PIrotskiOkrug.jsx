import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { pirotskiOkrugData } from "./PirotskiOkrugData";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";

export const PirotskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === pirotskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? pirotskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Pirot" ){
      navigate(pirotskiOkrugPathRoutes.pirot)
    } else if (name === 'Nacionalni Park "Stara Planina"') {
      navigate(pirotskiOkrugPathRoutes.staraPlanina)
    } else if (name === 'Zavojsko jezero') {
      navigate(pirotskiOkrugPathRoutes.zavojskoJezero)
    } else if (name === 'Vodopad Tupavica') {
      navigate(pirotskiOkrugPathRoutes.vodopadTupavica)
    } else if (name === 'Manastir Sukovo') {
      navigate(pirotskiOkrugPathRoutes.manastirSukovo)
    } else if (name === 'Vodopad Bigar') {
      navigate(pirotskiOkrugPathRoutes.vodopadBigar)
    } else if (name === 'Kanjon reke Jerme') {
      navigate(pirotskiOkrugPathRoutes.jerma)
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
      <section className="pirotski okrug">
        <h1>Pirotski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.838 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 160.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Planinski i brdoviti
            predeli, reke Morava i Nišava, bogat prirodni resursi, plodno
            zemljište, razvijena poljoprivreda, stočarstvo i tekstilna
            industrija.
          </p>
        </form>
        <div>
          Pirotski okrug se nalazi na jugoistoku Srbije i poznat je po bogatoj
          tradiciji, prirodnim lepotama i značajnim kulturnim spomenicima. Ovaj
          okrug obuhvata grad Pirot, kao najveći administrativni i ekonomski
          centar, i opštine Babušnica, Dimitrovgrad i Bela Palanka. Pirot je
          poznat po svojoj tradiciji u proizvodnji čuvenih Pirotskih ćilima i
          drugih tekstilnih proizvoda. Takođe, okrug se odlikuje razvijenim
          stočarstvom i poljoprivredom, a proizvodi poput sira, mesa i povrća
          imaju značajnu poziciju na tržištu. Pirotski okrug je takođe poznat po
          velikim prirodnim lepotama, među kojima su Nacionalni park Stara
          Planina i brojni planinski vrhovi, reke i jezera. Stara Planina je
          idealno odredište za ljubitelje prirode, planinarenja i zimskih
          sportova. Osim prirodnih lepota, okrug je domaćin i nekoliko kulturnih
          manifestacija, poput sajma Pirotskih peglanih kobasica. Okrug se
          oslanja i na turizam, zahvaljujući svojoj bogatoj
          kulturno-historijskoj baštini, među kojima su i brojne crkve,
          manastiri i spomenici, kao i arheološka nalazišta koja svedoče o
          istoriji ovog regiona. Pirotski okrug je savršen spoj tradicije,
          prirode i savremenih industrijskih i poljoprivrednih aktivnosti,
          čineći ga značajnim delom Srbije.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Sa godinama dolazi mudrost, a sa putovanjima dolazi razumevanje.
          (Sandra Lejk)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {pirotskiOkrugData?.map((okrug, index) => (
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
