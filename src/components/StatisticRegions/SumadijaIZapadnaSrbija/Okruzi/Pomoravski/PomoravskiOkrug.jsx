import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { pomoravskiOkrugData } from "./pomoravskiOkrugData";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";


export const PomoravskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === pomoravskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? pomoravskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Jagodina') {
      navigate(pomoravskiOkrugPathRoutes.jagodina)
    } else if (name === 'Grza') {
      navigate(pomoravskiOkrugPathRoutes.grza)
    } else if (name === 'Manastir Manasija') {
      navigate(pomoravskiOkrugPathRoutes.manastirManasija)
    } else if (name === 'Vodopad Lisine') {
      navigate(pomoravskiOkrugPathRoutes.vodopadLisine)
    } else if (name === 'Manastir Jošanica') {
      navigate(pomoravskiOkrugPathRoutes.manastirJosanica)
    } else if (name === 'Resavska Pećina') {
      navigate(pomoravskiOkrugPathRoutes.resavskaPecina)
    } else if (name === 'Vodopad Prskalo') {
      navigate(pomoravskiOkrugPathRoutes.vodopadPrskalo)
    } else if (name === 'Manastir Ravanica') {
      navigate(pomoravskiOkrugPathRoutes.manastirRavanica)
    } else if (name === 'Prirodnjački centar') {
      navigate(pomoravskiOkrugPathRoutes.prirodnjackiCentar)
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.SumadijaIZapadnaSrbija)}
          style={{ fill: "white"}}
        />
      </header>
      <section className="pomoravski okrug">
        <h1>Pomoravski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.685 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 260.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Plodne ravnice, reka Morava,
            brežuljci, pogodnost za poljoprivredu, stočarstvo i turizam.
          </p>
        </form>
        <div>
          Pomoravski okrug se nalazi u centralnom delu Srbije, a njegova
          teritorija obuhvata grad Jagodinu, koji je administrativni, ekonomski
          i kulturni centar okruga, kao i opštine poput Svilajnac, Paraćin,
          Rekovac i drugi. Okrug je poznat po bogatoj istoriji, a grad Jagodina
          je značajan iz perioda Rimskog carstva i srednjeg veka, sa tradicijom
          trgovine i industrije. Pomoravski okrug je prepoznatljiv po prirodnim
          lepotama, sa velikim brojem reka, polja i brda, a Morava, koja protiče
          kroz ovaj region, daje posebnu vrednost ovom okrugu. Turizam u
          Pomoravskom okrugu obuhvata istorijske lokalitete, manastire iz
          perioda srednjeg veka, kulturne spomenike, kao i brojne rekreativne
          sadržaje. Okrug je takođe poznat po poljoprivredi, posebno u
          proizvodnji voća, povrća, i žitarica. Domaći proizvodi, poput rakije i
          vina, popularni su suveniri i privlače turiste. Gastronomija je
          bogata, sa tradicionalnim jelima ovog kraja. Pomoravski okrug je
          idealno mesto za ljubitelje prirode, istorije i tradicije, a
          gostoprimstvo domaćina je poznato i cenjeno. Okrug nudi brojne
          manifestacije tokom godine, uključujući kulturne događaje i sajmove,
          kao i mogućnosti za lov, ribolov, biciklizam i planinarenje.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Svaki sanjar zna da je potpuno moguće biti nostalgičan prema mestima
          na kojima nikada mismo bili. (Judit Turman)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {pomoravskiOkrugData?.map((okrug, index) => (
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
