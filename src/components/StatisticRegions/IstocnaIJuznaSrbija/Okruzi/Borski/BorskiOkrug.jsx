import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { borskiOkrugData } from "./BorskiOkrugData";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const BorskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(
      slide === borskiOkrugData.length - 1 ? 0 : (prev) => prev + 1
    );
  };

  const prevContent = () => {
    setSlide(
      slide === 0 ? borskiOkrugData.length - 1 : (prev) => prev - 1
    );
  };

  const readMore = (name) => {
    if (name === "Bor") {
      return navigate(borskiOkrugPathRoutes.bor);
    } else if (name === "Đerdapska Klisura") {
      return navigate(borskiOkrugPathRoutes.djerdapskaKlisura)
    } else if (name === "Lazarev Kanjon") {
      return navigate(borskiOkrugPathRoutes.lazarevKanjon)
    } else if (name === "Lazareva Pećina") {
      return navigate(borskiOkrugPathRoutes.lazarevaPecina)
    } else if (name === "Borsko Jezero") {
      return navigate(borskiOkrugPathRoutes.borskoJezero)
    } else if (name === "Lepenski Vir") {
      return navigate(borskiOkrugPathRoutes.lepenskiVir)
    } else if (name === "Rajkova Pećina") {
      return navigate(borskiOkrugPathRoutes.rajkovaPecina)
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.IstocnaSrbija)}
          style={{ fill: "white" }}
        />
      </header>
      <section className="borski okrug">
        <h1>Borski Okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.507 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 120.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Planinsko-brdoviti predeli,
            reke Dunav, Timok i Pek, bogati rudarski resursi, guste šume,
            termalni izvori i značajna prirodna nalazišta.
          </p>
        </form>
        <div>
          Borski okrug se nalazi u istočnom delu Srbije i poznat je po svojim
          prirodnim bogatstvima, rudarskoj industriji i turističkim atrakcijama.
          Ovaj okrug obuhvata gradove Bor, Majdanpek, Kladovo i Negotin, koji su
          važni ekonomski, industrijski i kulturni centri. Grad Bor je poznat po
          jednoj od najvećih rudarskih i metalurških industrija u regionu, dok
          Majdanpek ima dugu tradiciju rudarstva i prerade metala. Kladovo,
          smešteno na obali Dunava, značajan je zbog hidroelektrane Đerdap, koja
          predstavlja jednu od najvećih u Evropi. Prirodne lepote Borskog okruga
          uključuju Nacionalni park Đerdap, Lazarevu pećinu, Stol i Deli Jovan,
          koji su popularne destinacije za planinarenje i istraživanje. Negotin
          je poznat po vinogradima i vinskoj tradiciji, dok blizina rumunske
          granice doprinosi ekonomskim i kulturnim vezama sa susednim državama.
          Ovaj okrug obiluje termalnim izvorima i arheološkim lokalitetima,
          poput Trajanove table, koje privlače veliki broj turista. Industrija,
          poljoprivreda, turizam i energetika čine osnovu privrede ovog kraja,
          dok manifestacije poput Negotinske berbe promovišu tradiciju i lokalnu
          kulturu. Borski okrug predstavlja spoj industrijske moći, prirodnih
          lepota i bogate istorije, čineći ga jednim od značajnijih područja u
          Srbiji.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Jednom godišnje, posetite neko mesto na kome nikada do tada niste
          bili. (Dalaj Lama)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {borskiOkrugData?.map((okrug, index) => (
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
