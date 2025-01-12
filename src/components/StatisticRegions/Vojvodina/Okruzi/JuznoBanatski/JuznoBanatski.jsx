/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { juaznoBanatskiData } from "./JuznoBanatskiData";

export const JuznoBanatski = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === juaznoBanatskiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? juaznoBanatskiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Pančevo") {
      navigate('Pancevo')
    } else if (name === "Vračevgajsko Jezero") {
      navigate('VracevgajskoJezero')
    } else if (name === "Deliblatska Peščara i Zagajička Brda") {
      navigate('DelibaltskaPescaraIZagajickaBrda')
    } else if (name === "Vršac") {
      navigate('Vrsac')
    } else if (name === "SRP 'Kraljevac'") {
      navigate('SRPKraljevac')
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
      <section className="juznoBanatskiOkrug">
        <h1>Južno - Banatski okrug</h1>
        <form>
          <p>
            <span>Površina: </span> oko 2.575 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 300.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Ravnica, prostire se duž
            reka Tamiš i Dunav, bogata plodnim zemljištem, pogodna za
            poljoprivredu, s razvijenim industrijskim zonama.
          </p>
        </form>

        <div>
          Južno-banatski okrug je jedan od sedam okruga u Vojvodini, smešten u
          jugoistočnom delu Srbije. Ovaj okrug obuhvata četiri opštine: Pančevo,
          Opovo, Kovin i Alibunar, a administrativno je povezano sa glavnim
          gradom, Beogradom. Geografski, Južno-banatski okrug je smešten između
          reke Tamiš na severu i reke Dunav na jugu, što mu daje strateški
          značaj u transportu i trgovini. Grad Pančevo, kao najveći i
          administrativni centar okruga, predstavlja ekonomski i kulturni hub.
          Regija je prepoznatljiva po razvijenoj industriji, naročito
          petrohemijskoj i hemijskoj industriji. U okrugu se nalazi i nekoliko
          važnih infrastrukturnih objekata, uključujući industrijske zone, kao i
          pristup velikim rekama koje olakšavaju plovidbu i trgovinu. Osim
          industrije, poljoprivreda, naročito ratarstvo, ima značajnu ulogu u
          ekonomiji. Kultura ovog područja bogata je tradicijom, a
          manifestacije, kao i muzeji, galerije i kulturni centri, čine ga
          važnim mestom za kulturni život Vojvodine. Južno-banatski okrug je i
          region u kojem se nalaze brojne etničke zajednice, što doprinosi
          njegovoj multikulturnoj posebnosti.
        </div>
      </section>
      <section className="citatClass">
        <p>
          Živimo u divnom svetu koji je put lepote, čari i avantura. Nema kraja
          avanturi koju možemo imati samo ako je tražimo otvorenih očiju.
          (Džavaharlal Nehru)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {juaznoBanatskiData?.map((okrug, index) => (
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
