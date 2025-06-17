import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { sumadijskiOkrugData } from "./SumadijskiOkrugData";
import { sumadijskiOkrugPathRoutes } from "./SumadijskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const SumadijskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === sumadijskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? sumadijskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Kragujevac') {
      navigate(sumadijskiOkrugPathRoutes.kragujevac)
    } else if (name === 'Arandjelovac') {
      navigate(sumadijskiOkrugPathRoutes.arandjelovac)
    } else if (name === 'Oplenac') {
      navigate(sumadijskiOkrugPathRoutes.oplenac)
    } else if (name === 'Gružansko jezero') {
      navigate(sumadijskiOkrugPathRoutes.gruzanskoJezero)
    } else if (name === 'Manastir Blagoveštenje Rudničko') {
      navigate(sumadijskiOkrugPathRoutes.manastirBlagovestenjeRudnicko)
    } else if (name === 'Manastir Petkovica') {
      navigate(sumadijskiOkrugPathRoutes.manastirPetkovica)
    } else if (name === 'Planinarska staza Žeželj i Bešnjaja') {
      navigate(sumadijskiOkrugPathRoutes.planinarskaStazaZezeljIBesnjaja)
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
      <section className="sumadijski okrug">
        <h1>Šumadijski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 2.387 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 300.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Blago talasasto područje,
            bogata poljoprivredna zemljišta, reka Lepenica, pogodnost za
            vinogradarstvo, voćarstvo i turizam.
          </p>
        </form>
        <div>
          Šumadijski okrug se nalazi u centralnom delu Srbije i prostire se na
          teritoriji poznatoj po raznovrsnim prirodnim i kulturnim bogatstvima.
          Ovaj okrug obuhvata grad Kragujevac, koji je administrativni,
          ekonomski i kulturni centar, zajedno sa opštinama kao što su
          Aranđelovac, Topola, Rača, Lapovo, Knić i Batočina. Kragujevac,
          nekadašnja prestonica Srbije, ima značajno istorijsko i industrijsko
          nasleđe, uključujući prve moderne fabrike u zemlji i poznati Zastava
          kompleks. Šumadijski okrug je prepoznatljiv po vinogradima i
          voćnjacima koji se prostiru na blagim brežuljcima, a vina iz ovog
          regiona uživaju veliku popularnost. Turistički potencijali Šumadijskog
          okruga uključuju znamenitosti kao što su Oplenac u Topoli, mauzolej
          dinastije Karađorđević, planinsko područje Bukulja, termalne izvore u
          Aranđelovcu i prirodni park Garaško jezero. Pored prirodnih lepota,
          Šumadijski okrug nudi bogat kulturni i umetnički život, sa
          manifestacijama poput Šumadijskog sajma i Saboru vina u Topoli, koji
          privlače posetioce iz cele zemlje. Rekreativni turizam je razvijen
          kroz brojne staze za planinarenje, biciklizam i aktivnosti na
          otvorenom, dok očuvana tradicija, običaji i gostoprimstvo stanovnika
          čine Šumadijski okrug jednim od najatraktivnijih područja u Srbiji.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Putujemo zato što su udaljenost i raznolikost tajni osveživači
          kreativnosti. Kada stignemo kući, kuća je i dalje ista. Ali nešto
          unutar našeg uma se promenilo, i to sve menja. (Johan Lehrer)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {sumadijskiOkrugData?.map((okrug, index) => (
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
