import { useState } from "react";
import { zapadnoBackiData } from "./ZapadnoBackiData";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const ZapadnoBacki = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === zapadnoBackiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? zapadnoBackiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Sombor") {
      navigate("Sombor");
    } else if (name === "Gornje Podunavlje") {
      navigate("GornjePodunavlje");
    } else if (name === "Apatin i apatinske terminalne vode") {
      navigate("ApatinITerminalneVode");
    } else if (name === "Veliki Bački kanal") {
      navigate("VelikiBackiKanal");
    } else if (name === "Manastir Bodjani") {
      navigate("ManastirBodjani");
    } else if (name === "Salaši u Bačkoj") {
      navigate("SalasiUBackoj");
    } else if (name === "Dunavkse Ade") {
      navigate("DunavskeAde");
    }
  };

  return (
    <>
      <div className="okrugBackground">
        <header>
          <FaArrowLeft
            className="arrowLeft"
            onClick={() => navigate(-1)}
            style={{ fill: "white",right: '50px' }}
          />
        </header>
        <section className="zapadnoBackiClassMain">
          <h1>Zapadno - Bački okrug</h1>
          <form>
            <p>
              <span>Površina: </span>oko 2.420 km²
            </p>
            <p>
              <span>Broj stanovnika: </span>približno 188.000
            </p>
            <p>
              <span>Geografske karakteristike: </span>Ravnica sa plodnim
              zemljištem, idealnim za poljoprivredu.
            </p>
          </form>
          <div>
            Zapadno Bački okrug smešten je u severozapadnom delu Srbije, u
            Vojvodini, sa centrom u Somboru. Obuhvata opštine Apatin, Kula i
            Odžaci, a poznat je po ravničarskom pejzažu, plodnom zemljištu i
            prirodnim lepotama. Dunav i Veliki Bački kanal dominiraju
            geografijom regiona, pružajući mogućnosti za ribolov, rekreaciju i
            ekoturizam. Okrug je dom Specijalnog rezervata prirode Gornje
            Podunavlje, značajnog močvarnog područja sa bogatom florom i faunom.
            Termalne vode u Apatinu privlače posetioce, dok salaši nude
            autentično iskustvo vojvođanskog načina života. Sombor, poznat po
            zelenilu i arhitekturi, čuva kulturno nasleđe, uključujući Galeriju
            „Milan Konjović“ i čuvenu fresku „Bitka kod Sente“. Privreda okruga
            oslanja se na poljoprivredu, proizvodnju hrane i pića, posebno
            zahvaljujući Apatinskoj pivari. Okrug spaja prirodne resurse,
            kulturno nasleđe i gostoljubivost, pružajući bogato iskustvo za
            stanovnike i posetioce. Ovo područje idealno je za ljubitelje
            prirode, istorije i tradicionalne vojvođanske kulture.
          </div>
        </section>
        <section className="citatClass">
          <p>
            Putovanje je mnogo više od razgledanja spomenika, to je duboka i
            trajna promena ideje življenja. (Miriam Beard)
          </p>
        </section>
        <section>
          <div className="caruoselClass" style={{ padding: "0" }}>
            {zapadnoBackiData?.map((okrug, index) => (
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
                <div className="caruoselInfo">
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
    </>
  );
};
