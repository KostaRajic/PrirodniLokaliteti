import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { severnoBanatskiData } from "./SevernoBanatskiData";

export const SevernoBanatski = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === severnoBanatskiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? severnoBanatskiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Kikinda") {
      navigate("Kikinda");
    } else if (name === "Kanjiža i termalne vode") {
      navigate("Kanjiza");
    } else if (name === "Selevenjske pustare") {
      navigate("SelevenjskePustare");
    } else if (name === "Rezervat velike droplje") {
      navigate("RezervatVelikeDroplje");
    } else if (name === "Senta") {
      navigate("Senta");
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(-1)}
          style={{ fill: "white",right: '50px' }}
        />
      </header>
      <section className="severnoBanatskiOkrug">
        <h1>Severno - Banatski okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.860 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 210.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Pretežno ravničarski pejzaž
            sa plodnim zemljištem, brojnim rekama i jezerima, pogodna teritorija
            za poljoprivrednu proizvodnju.
          </p>
        </form>
        <div>
          Severno-banatski okrug je jedan od sedam okruga u Vojvodini, smešten u
          severnom delu regiona Banata, uz granicu sa Mađarskom. Glavni grad
          okruga je Kikinda, koja predstavlja administrativno, ekonomsko i
          kulturno središte ovog regiona. Pored Kikinde, u okrug spadaju i
          gradovi Senta, Ada, Novi Kneževac i druge opštine. Okrug se odlikuje
          multikulturalnim identitetom, s izraženim uticajem Mađara, Srba, Roma
          i drugih etničkih grupa koje žive na ovom prostoru, a taj kulturni
          pluralizam vidljiv je u tradicijama, manifestacijama, običajima i
          jezicima lokalnog stanovništva. Severno-banatski okrug poznat je po
          svojoj bogatoj poljoprivredi, prirodnim lepotama, rekama i jezerima,
          kao i brojnim istorijskim lokalitetima. Prirodne znamenitosti kao što
          su obale reke Tamiš, ribolovačka područja i lokalni prirodni rezervati
          doprinose turističkim vrednostima regiona. Poljoprivreda je ključna
          ekonomska grana, dok turizam nudi mogućnosti za biciklizam, ribolov,
          planinarenje i istraživanje istorijskih lokaliteta. Severno-banatski
          okrug je prava destinacija za istraživače koji traže autentični
          vojvođanski ambijent i prirodni mir.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Dok putujemo svetom da bismo našli lepotu, moramo je poneti sa sobom
          ili je nećemo naći. (Ralf Valdo Emerson)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {severnoBanatskiData?.map((okrug, index) => (
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
