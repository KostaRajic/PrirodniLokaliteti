import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { sremskiOkrugData } from "./SremskiOkrugData";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";

export const SremskiOkrug = () => {
  const [slide, setSlide] = useState(0);

  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === sremskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? sremskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Sremska Mitrovica") {
      navigate(sremskiOkrugPathRoutes.sremskaMitrovica);
    } else if (name === 'Specijalni rezervat prirode "Zasavica"') {
      navigate(sremskiOkrugPathRoutes.srpZasavica);
    } else if (name === "Inđija") {
      navigate(sremskiOkrugPathRoutes.indjija);
    } else if (name === "Sotsko Jezero") {
      navigate(sremskiOkrugPathRoutes.sotskoJezero);
    } else if (name === "Manastir Novo Hopovo") {
      navigate(sremskiOkrugPathRoutes.novoHopovo);
    } else if (name === "Šid") {
      navigate(sremskiOkrugPathRoutes.sid);
    } else if (name === "Manastir Jazak") {
      navigate(sremskiOkrugPathRoutes.manastirJazak);
    } else if (name === "Bešenovačko Jezero") {
      navigate(sremskiOkrugPathRoutes.besenovackoJezero);
    }
  };

  return (
    <>
      <div className="okrugBackground">
        <header>
          <FaArrowLeft
            className="arrowLeft"
            onClick={() => navigate(serbianMapPathRoutes.Vojvodina)}
            style={{ fill: "white"}}
          />
        </header>
        <section className="sremski okrug">
          <h1>Sremski Okrug</h1>
          <form>
            <p>
              <span>Površina: </span>oko 3.500 km²
            </p>
            <p>
              <span>Broj stanovnika: </span>približno 800.000
            </p>
            <p>
              <span>Geografske karakteristike: </span>Ravnica sa plodnim
              zemljištem, bogata poljoprivredna područja, delimično planinsko
              područje.
            </p>
          </form>
          <div>
            Sremski okrug je jedan od okruga koji je smešten u Vojvodini. Ovaj
            okrug obuhvata nekoliko gradova i opština, među kojima se ističu
            gradovi Novi Sad, Sremska Mitrovica i Inđija, kao i brojne manje
            opštine poput Rume, Šida i Pećinaca. Geografski, Sremski okrug je
            prepoznatljiv po ravničarskim područjima koja su pogodna za
            poljoprivredu, ali i po blizini reke Save. U jugoistočnom delu
            okruga prostire se Fruška gora, planinsko područje koje je deo
            Nacionalnog parka Fruška gora, poznato po bogatoj flore i faune, kao
            i manastirima. Ovaj okrug ima veoma razvijen poljoprivredni sektor,
            sa naglaskom na ratarstvo, voćarstvo i stočarstvo, zbog čega je
            važno područje za proizvodnju hrane. Sremski okrug je značajan i
            zbog svoje privrede, sa razvijenim industrijskim i uslužnim
            sektorima, dok su i infrastrukturni projekti, kao što su autoputevi
            i železnica, omogućili dobru povezanost sa drugim delovima zemlje.
            Kultura i tradicija ovog okruga su bogate i raznovrsne, a i turizam
            se sve više razvija zahvaljujući prirodnim lepotama i istorijskim
            lokalitetima.
          </div>
        </section>
        <section className="citatClass">
          <p>
            Za dvadeset godina bićeš više razočaran stvarima koje nisi uradio
            nego onima koje jesi. Isplovi, zato, iz sigurne luke. Otkrivaj,
            sanjaj, istražuj! (Mark Tven)
          </p>
        </section>
        <section>
          <div className="caruoselClass" style={{ padding: "0" }}>
            {sremskiOkrugData?.map((okrug, index) => (
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
