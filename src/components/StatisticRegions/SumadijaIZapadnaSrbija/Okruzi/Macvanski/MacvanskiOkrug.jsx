import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { macvanskiOkrugData } from "./MacvanskiOkrugData";

export const MacvanskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === macvanskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? macvanskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Šabac") {
      navigate('Sabac')
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
      <section className="macvanskiOkrug">
        <h1>Mačvanski okrug</h1>
        <form>
          <p>
            <span>Površina: </span>oko 3.555 km²
          </p>
          <p>
            <span>Broj stanovnika: </span>približno 450.000
          </p>
          <p>
            <span>Geografske karakteristike: </span>Ravnica, plodno zemljište,
            bogatstvo reka (Sava, Drina), idealno za poljoprivredu i stočarstvo.
          </p>
        </form>
        <div>
          Mačvanski okrug je jedan od okruga u zapadnom delu Srbije, smešten
          između reke Save na severu i reke Drine na zapadu. Ovaj okrug obuhvata
          grad Šabac, kao i brojne opštine, uključujući Bogatić, Vladimirce, i
          Koceljevu. Šabac je ekonomsko i kulturno središte okruga, poznat po
          svom istorijskom značaju, ali i kao važno trgovinsko i industrijsko
          središte. Mačva je prepoznatljiva po svom poljoprivrednom potencijalu,
          naročito u proizvodnji žitarica, voća i povrća, dok su stočarstvo i
          pčelarstvo takođe razvijeni. Okrug je domaćin brojnim kulturnim
          manifestacijama, među kojima se izdvaja Šabačko pozorište i Šabački
          festival. Mačvanski okrug je bogat i prirodnim lepotama, a reke Sava i
          Drina nude mogućnosti za rekreaciju i turizam. Prirodne znamenitosti
          kao što su priobalja reke, šumske površine, kao i bogatstvo faune i
          flore, privlače posetioce koji uživaju u lovu, ribolovu i biciklizmu.
          Pored toga, Mačva je poznata i po bogatoj tradiciji i običajima koji
          se i danas neguju.
        </div>
      </section>
      <section className="citatClass">
        <p>
        O putu saznaš više kad njime pođeš nego od  svih uputsva i opisa na svetu. (Vilijam Hazlit)
        </p>
      </section>
      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {macvanskiOkrugData?.map((okrug, index) => (
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
