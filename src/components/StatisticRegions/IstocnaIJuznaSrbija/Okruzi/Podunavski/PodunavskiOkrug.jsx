import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { podunavskiOkrugData } from "./PodunavskiOkrugData";
import { podunavskiOkrugPathRoutes } from "./PodunavskiOkrugPathRouts";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const PodunavskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === podunavskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? podunavskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Smederevo") {
      navigate(podunavskiOkrugPathRoutes.smederevo);
    } else if (name === "Manastir Pokajnica") {
      navigate(podunavskiOkrugPathRoutes.manastirPokajnica);
    } else if (name === "Smederevska tvrdjava") {
      navigate(podunavskiOkrugPathRoutes.smedervskaTvrdjava);
    } else if (name === "Radovanjski Lug") {
      navigate(podunavskiOkrugPathRoutes.radovanjskiLug);
    } else if (name === "Manastir Koporin") {
      navigate(podunavskiOkrugPathRoutes.manastirKoporin);
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.IstocnaSrbijaTekstModal)}
          style={{ fill: "white"}}
        />
      </header>
      <section className="podunavski okrug">
        <h1>Podunavski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 1.248 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 200.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Ravničarski i brežuljkasti
            predeli, reke Dunav i Velika Morava, plodno zemljište pogodno za
            poljoprivredu i vinogradarstvo, razvijena industrija i rečni
            saobraćaj.
          </p>
        </form>
        <div>
          Podunavski okrug se nalazi u centralnom delu Srbije, uz obale Dunava,
          i obuhvata područja bogata prirodnim lepotama i istorijskim
          znamenitostima. Ovaj okrug uključuje gradove Smederevo, Požarevac i
          Veliku Planu, koji su važni administrativni, ekonomski i kulturni
          centri. Smederevo je poznato po svojoj istorijskoj tvrđavi,
          nekadašnjoj prestonici Srbije u srednjem veku, dok je Požarevac
          značajan kao kulturno središte i mesto održavanja Ljubičevskih
          konjičkih igara. Podunavski okrug je poznat po bogatoj poljoprivredi,
          naročito vinogradima i voćnjacima, a vina iz ovog kraja su prepoznata
          širom regiona. Privreda se oslanja na industriju, trgovinu i rečni
          transport zahvaljujući Dunavu, koji omogućava vezu sa evropskim
          tržištima. Turistički potencijali ovog okruga obuhvataju znamenitosti
          poput Smederevske tvrđave, Viminacijuma – arheološkog nalazišta iz
          rimskog doba, kao i prirodnih lepota poput obala Dunava koje pružaju
          mogućnosti za rekreaciju, ribolov i nautički turizam. Pored toga,
          brojni kulturni događaji i manifestacije, poput Smederevske jeseni,
          privlače posetioce i doprinose očuvanju tradicije i lokalnog
          identiteta. Podunavski okrug nudi spoj istorije, prirode i savremenog
          načina života, čineći ga značajnim delom Srbije."
        </div>
      </section>
      <section className="citatClass">
        <p>Putnici nikad ne pomisle da su stranci. (Mason Kolej)</p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {podunavskiOkrugData?.map((okrug, index) => (
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
