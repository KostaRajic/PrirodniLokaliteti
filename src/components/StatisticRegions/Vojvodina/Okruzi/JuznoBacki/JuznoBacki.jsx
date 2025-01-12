import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { juznoBackiData } from "./JuznoBackiData";

export const JuznoBacki = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === juznoBackiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? juznoBackiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Nacionalni park Fruska Gora') {
      navigate('FruskaGora')
    } else if (name === 'Novi Sad') {
      navigate('NoviSad')
    } else if (name === 'Manastir Krušedol') {
      navigate('ManastirKrusedol')
    } else if (name === 'Sremski Karlovci') {
      navigate('SremskiKarlovci')
    } else if (name === 'Šajkaška oblast') {
      navigate('SajkaskaOblast')
    } else if (name === 'Manastir Beočin') {
      navigate('ManastirBeocin')
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
      <section className="juznoBackiOkrug">
        <h1>Južno - Bački okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.658 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 600.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Ravnica, plodno zemljište,
            bogatstvo reka (Dunav, Tisa), idealno za poljoprivredu i
            vinogradarstvo.
          </p>
        </form>
        <div>
          Južni bački okrug je jedan od sedam okruga u Vojvodini, smešten u
          južnom delu Srbije, sa glavnim gradom Novim Sadom, koji je takođe i
          glavni grad Vojvodine. Ovaj okrug obuhvata i gradove kao što su Senta,
          Beočin i Ruma, kao i brojne opštine. Novi Sad je kulturno i ekonomsko
          središte regiona, poznat po Petrovaradinskoj tvrđavi, EXIT festivalu,
          i bogatom kulturnom životu. Južnobački okrug je dom za raznovrsne
          manjinske zajednice, uključujući Mađare, Slovače i Hrvate, što se
          ogleda u njegovoj tradiciji, jezicima i religijskim običajima. Okrug
          je poznat i po svojim vinogradima i vinskim turizmima, jer je područje
          idealno za proizvodnju vina. Pored kulturnih spomenika, prirodne
          znamenitosti kao što su Fruška gora, Nacionalni park Fruška gora, i
          jezera, pružaju odlične uslove za rekreaciju. Ovdje posetioci mogu
          uživati u biciklizmu, pešačenju, planinarenju, kao i brojnim
          manifestacijama koje se održavaju tokom godine.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Svet je knjiga, a oni koji ne putuju, čitaju samo jednu stranicu.
          (Sveti Avgustin)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{padding: '0'}}>
          {juznoBackiData?.map((okrug, index) => (
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
              <div className="caruoselInfo" style={{padding:'0'}}>
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
