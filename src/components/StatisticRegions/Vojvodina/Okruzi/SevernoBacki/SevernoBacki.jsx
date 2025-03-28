import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { severnoBackiData } from "./SevernoBackiData";

export const SevernoBacki = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === severnoBackiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? severnoBackiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Palićko jezero") {
      navigate("PalickoJezero");
    } else if (name === "Subotica") {
      navigate("Subotica");
    } else if (name === "Tisa - rečna i prirodna oaza") {
      navigate("Tisa");
    } else if (name === "Subotička peščara") {
      navigate("SubotickaPescara");
    } else if (name === "Bačka Topola") {
      navigate("BackaTopola");
    } else if (name === "Bačkotopolsko Jezero") {
      navigate("BackoTopolskoJezero");
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
      <section className="severnoBacki okrug">
        <h1>Severno - Bački okrug</h1>
        <form>
          <p>
            <span>Površina: </span> oko 3.513 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 315.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Ravnica sa plodnim
            zemljištem, bogata rekama i jezerima, pogodna za poljoprivredu.
          </p>
        </form>
        <div>
          Severo-bački okrug je jedan od sedam okruga u Vojvodini, smešten u
          severoistočnom delu Srbije. Glavni grad okruga je Subotica, koja je
          najveći grad u ovom okrugu, kao i jedno od najvažnijih kulturnih,
          političkih i ekonomskih središta Vojvodine. Pored Subotice, u okrug
          spadaju i gradovi Senta i Kanjiža, kao i brojne opštine. Severo-bački
          okrug je i kulturno veoma bogat, sa značajnim uticajem mađarske,
          srpske, rumunske i drugih manjinskih zajednica. To se ogleda u bogatoj
          tradiciji, običajima, jezicima i religijskim manifestacijama koje čine
          svakodnevni život ovog regiona. Subotica je poznata po svojoj
          arhitekturi, posebno u stilu secesije, i brojnim kulturnim
          manifestacijama koje se održavaju tokom godine, kao što su festivali,
          pozorišni i muzički događaji. U Severo-bačkom okrugu se nalaze i
          prirodne znamenitosti kao što su Palićko jezero, koje je popularno
          odredište za turizam, kao i brojne zaštićene oblasti i parkovi
          prirode. Turizam u ovom okrugu bazira se na prirodnim lepotama,
          kulturnim spomenicima, ali i na vinogradima i proizvodnji lokalnih
          vina. Pored toga, posetioci mogu uživati u raznim rekreativnim
          aktivnostima kao što su vožnja bicikla, pecanje i šetnje prirodom.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Putovanja vas prvo ostave bez reči, a onda vas pretvore u pripovedača.
          (Ibn Batuta)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {severnoBackiData?.map((okrug, index) => (
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
