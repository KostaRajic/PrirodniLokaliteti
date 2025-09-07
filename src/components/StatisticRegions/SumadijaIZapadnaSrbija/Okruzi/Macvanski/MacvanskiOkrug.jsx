import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { macvanskiOkrugData } from "./MacvanskiOkrugData";
import { macvanskiOkrugPathRoutes } from "./MacvanskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const MacvanskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const [showArticle, setShowArticle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextContent = () => {
    setSlide(slide === macvanskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? macvanskiOkrugData.length - 1 : (prev) => prev - 1);
  };


  const readMore = (name) => {
    if (name === "Šabac") {
      navigate(macvanskiOkrugPathRoutes.sabac(switchLanguage))
    } else if (name === "Gučevo") {
      navigate(macvanskiOkrugPathRoutes.gucevo(switchLanguage))
    } else if (name === "Zvorničko jezero") {
      navigate(macvanskiOkrugPathRoutes.zvornickoJezero(switchLanguage))
    } else if (name === "Manastir Tronoša") {
      navigate(macvanskiOkrugPathRoutes.manastirTronosa(switchLanguage))
    } else if (name === "Planina Cer") {
      navigate(macvanskiOkrugPathRoutes.planinaCer(switchLanguage))
    } else if (name === "Mačkov Kamen") {
      navigate(macvanskiOkrugPathRoutes.mackovKamen(switchLanguage))
    } else if (name === "Tršić") {
      navigate(macvanskiOkrugPathRoutes.trsic(switchLanguage))
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.SumadijaIZapadnaSrbija(switchLanguage))}
          style={{ fill: "white" }}
        />
      </header>

      {switchLanguage === 'rs' ?
        (
          <>
            <section className="macvanski okrug" lang="rs">
              <h1>Mačvanski okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 3.555 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 450.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Ravnica, plodno zemljište, bogatstvo reka (Sava, Drina), idealno za poljoprivredu i stočarstvo.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="rs">
                  <p>
                    <strong>Mačvanski okrug</strong> je jedan od okruga u zapadnom delu Srbije, smešten između reke Save na severu i reke Drine na zapadu. Ovaj okrug obuhvata grad <strong>Šabac</strong>, kao i brojne opštine, uključujući <strong>Bogatić</strong>, <strong>Vladimirce</strong> i <strong>Koceljevu</strong>.
                  </p>
                  <p>
                    Šabac je ekonomsko i kulturno središte okruga, poznat po svom istorijskom značaju, ali i kao važno trgovinsko i industrijsko središte. Mačva je prepoznatljiva po svom poljoprivrednom potencijalu, naročito u proizvodnji žitarica, voća i povrća, dok su stočarstvo i pčelarstvo takođe razvijeni.
                  </p>
                  <p>
                    Okrug je domaćin brojnim kulturnim manifestacijama, među kojima se izdvaja <strong>Šabačko pozorište</strong> i <strong>Šabački festival</strong>. Mačvanski okrug je bogat i prirodnim lepotama, a reke <strong>Sava</strong> i <strong>Drina</strong> nude mogućnosti za rekreaciju i turizam.
                  </p>
                  <p>
                    Prirodne znamenitosti kao što su priobalja reke, šumske površine, kao i bogatstvo faune i flore, privlače posetioce koji uživaju u lovu, ribolovu i biciklizmu. Pored toga, Mačva je poznata i po bogatoj tradiciji i običajima koji se i danas neguju.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                O putu saznaš više kad njime pođeš nego od svih uputsva i opisa na svetu. (Vilijam Hazlit)
              </blockquote>
            </section>

          </>
        )
        :
        (
          <>
            <section className="macvanski okrug" lang="en">
              <h1>Mačva District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 3,555 km²
                </p>
                <p>
                  <strong>Population: </strong>around 450,000
                </p>
                <p>
                  <strong>Geographic features: </strong>Flatlands, fertile soil, abundance of rivers (Sava, Drina), ideal for agriculture and livestock farming.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The <strong>Mačva District</strong> is one of the districts in western Serbia, located between the Sava River to the north and the Drina River to the west. This district includes the city of <strong>Šabac</strong> as well as numerous municipalities, including <strong>Bogatić</strong>, <strong>Vladimirci</strong>, and <strong>Koceljeva</strong>.
                  </p>
                  <p>
                    Šabac is the economic and cultural center of the district, known for its historical importance and as a major hub for trade and industry. Mačva is recognized for its agricultural potential, particularly in the production of grains, fruits, and vegetables, while livestock farming and beekeeping are also well developed.
                  </p>
                  <p>
                    The district hosts many cultural events, among which the <strong>Šabac Theatre</strong> and the <strong>Šabac Festival</strong> stand out. Mačva District is also rich in natural beauty, with the <strong>Sava</strong> and <strong>Drina</strong> rivers offering opportunities for recreation and tourism.
                  </p>
                  <p>
                    Natural landmarks such as riverbanks, forest areas, and the abundance of wildlife and plant life attract visitors who enjoy hunting, fishing, and cycling. Additionally, Mačva is well known for its rich traditions and customs that are still preserved today.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                You learn more about a road by traveling it than by all the descriptions in the world. (William Hazlitt)
              </blockquote>
            </section>


          </>
        )}

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
              <div className="caruoselInfo" style={{ padding: '0' }}>
                <h3>{switchLanguage === 'en' ? okrug.nameENG ? okrug.nameENG : okrug.name : okrug.name}</h3>
                <p>{switchLanguage === 'en' ? okrug.mainTextENG : okrug.mainTextSRB}</p>
                <button onClick={() => readMore(okrug.name)}>
                  {switchLanguage === 'rs' ? 'Pročitaj više' : 'Read more'}

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


export default MacvanskiOkrug;