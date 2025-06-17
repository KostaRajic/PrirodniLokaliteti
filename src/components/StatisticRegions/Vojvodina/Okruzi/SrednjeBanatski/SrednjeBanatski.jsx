import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { srednjeBanatskiData } from "./SrednjeBanatskiData";
import { srednjeBanatskiPathRoutes } from "./SrednjeBanatskiPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const SrednjeBanatski = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === srednjeBanatskiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? srednjeBanatskiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Zrenjanin") {
      navigate(srednjeBanatskiPathRoutes.zrenjanin);
    } else if (name === "Novi Bečej") {
      navigate(srednjeBanatskiPathRoutes.noviBecej);
    } else if (name === 'Specijalni rezervat prirode "Slano kopovo"') {
      navigate(srednjeBanatskiPathRoutes.slanoKopovo);
    } else if (name === "Park prirode “Stara Tisa“ kod Bisernog ostrva") {
      navigate(srednjeBanatskiPathRoutes.staraTisa);
    } else if (name === "Kupalište Peskara") {
      navigate(srednjeBanatskiPathRoutes.kupalistePeskara);
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.Vojvodina)}
          style={{ fill: "white"}}
        />
      </header>
      <section className="srednjeBanatski okrug">
        <h1>Srednje - Banatski okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 4.030 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 180.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Pretežno ravničarski pejzaž
            sa plodnim zemljištem, brojnim rekama i jezerima, pogodna teritorija
            za poljoprivrednu proizvodnju, naročito za uzgoj žitarica, povrća i
            stočarstvo.
          </p>
        </form>
        <div>
          Srednje-banatski okrug je jedan od sedam okruga u Vojvodini, smešten u
          centralnom delu regiona Banata. Glavni grad okruga je Zrenjanin, koji
          je administrativno, ekonomsko i kulturno središte ovog regiona. Pored
          Zrenjanina, u okrug spadaju i gradovi Kikinda, Novi Bečej, i opštine
          kao što su Žitište, Sečanj i drugi. Okrug je prepoznatljiv po svojoj
          bogatoj poljoprivredi, koja je ključna ekonomska grana, kao i
          industrijskom sektoru koji se razvija. Region je domaćin brojnim
          etničkim grupama, među kojima su Srbi, Mađari, Romi i drugi, što
          doprinosi njegovom multikulturalnom identitetu. Srednje-banatski okrug
          se može pohvaliti i prirodnim lepotama, kao što su brojne reke,
          kanali, jezera i prirodni rezervati, koji čine regiju atraktivnom za
          turizam. Posetioci mogu uživati u biciklizmu, ribolovu, planinarenju,
          ali i istraživanju istorijskih i kulturnih spomenika, među kojima je i
          Petrovaradinska tvrđava. Poljoprivreda je osnovna ekonomska grana, dok
          turizam nudi mogućnosti za uživanje u prirodi i istraživanju tradicija
          i običaja ovog kraja. Srednje-banatski okrug je odlična destinacija za
          ljubitelje prirode, istorije i kulturnih manifestacija.
        </div>
      </section>
      <section className="citatClass">
        <p>
        Putovanje je mnogo više od razgledanja spomenika, to je duboka i
        trajna promena ideje življenja. (Miriam Beard)
          
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{padding: '0'}}>
          {srednjeBanatskiData?.map((okrug, index) => (
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
  );
};
