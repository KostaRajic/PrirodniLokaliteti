import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { zlatiborskiOkrugData } from "./ZlatiborskiOkrugData";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";

export const ZlatiborskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === zlatiborskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? zlatiborskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
      if (name === 'Užice') {
        navigate(zlatiborskiOkrugPathRoutes.uzice)
      } else if (name === 'Reka Uvac') {
        navigate(zlatiborskiOkrugPathRoutes.rekaUvac)
      } else if (name === 'Nacionalni Park "Tara"') {
        navigate(zlatiborskiOkrugPathRoutes.nacionalniParkTara)
      } else if (name === 'Planina Zlatibor') {
        navigate(zlatiborskiOkrugPathRoutes.planinaZlatar)
      } else if (name === 'Manastir Mileševa') {
        navigate(zlatiborskiOkrugPathRoutes.manastirMileseva)
      } else if (name === 'Jezero Perućac') {
        navigate(zlatiborskiOkrugPathRoutes.jezeroPerucac)
      } else if (name === 'Vodopad Sopotice') {
        navigate(zlatiborskiOkrugPathRoutes.vodopadSopotnice)
      } else if (name === 'Manastir Rujan') {
        navigate(zlatiborskiOkrugPathRoutes.manastirRujan)
      } else if (name === 'Planina Zlatar') {
        navigate(zlatiborskiOkrugPathRoutes.planinaZlatar)
      } else if (name === 'Zaovinsko Jezero') {
        navigate(zlatiborskiOkrugPathRoutes.zaovinskoJezero)
      } else if (name === 'Stopića Pećina') {
        navigate(zlatiborskiOkrugPathRoutes.stopicaPecina)
      } else if (name === 'Vodopad Gostilje') {
        navigate(zlatiborskiOkrugPathRoutes.vodopadGostilje)
      } else if (name === 'Mokra Gora') {
        navigate(zlatiborskiOkrugPathRoutes.mokraGora)
      }
  };  

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(-1)}
          style={{ fill: "white"}}
        />
      </header>
      <section className="zlatiborski okrug">
        <h1>Zlatiborski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 4.335 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 250.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Planinsko područje, bogato
            šumama i čistim rekama, sa velikim brojem turističkih destinacija,
            pogodna za skijanje, planinarenje i seoski turizam.
          </p>
        </form>
        <div>
          Zlatiborski okrug se nalazi u zapadnom delu Srbije, poznat po svojoj
          prirodnoj lepoti i razvijenom turizmu. Ovaj okrug obuhvata grad Užice,
          koji je ekonomski i kulturni centar, kao i opštine kao što su
          Zlatibor, Čajetina, Sjenica, Nova Varoš, Priboj i Prijepolje. Zlatibor
          je jedno od najpoznatijih turističkih odredišta u Srbiji,
          prepoznatljivo po svom planinskom okruženju, čistom vazduhu i brojnim
          rekreacijskim mogućnostima. Okrug je bogat šumama, rekama i jezerima,
          a Zlatibor je naročito popularan tokom zimskih meseci zbog skijališta
          i zimskih sportova. Pored prirodnih lepota, Zlatiborski okrug je
          poznat i po kulturnim manifestacijama, kao što su Zlatiborski sabor,
          Užički festival i mnoge druge, koje privlače posetioce iz celog
          regiona. Turizam u okrugu se bazira na rekreativnim aktivnostima, kao
          što su planinarenje, biciklizam, i poseta prirodnim lepotama kao što
          su jezera, kanjoni i pećine. Zlatibor je takođe domaćin termalnih
          izvora i banja, koje pružaju mogućnost za opuštanje i lečenje.
          Tradicija i gostoprimstvo stanovnika čine Zlatiborski okrug jednim od
          najlepših i najatraktivnijih turističkih destinacija u Srbiji.
        </div>
      </section>
      <section className="citatClass">
        <p>
        Putovanja vraćaju snagu i ljubav u vaš život. (Rumi)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {zlatiborskiOkrugData?.map((okrug, index) => (
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
