import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { zajecarskiOkrugData } from "./ZajecarskiOkrugData";
import { zajecarskiOkrugPathRoutes } from "./ZajecarskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const ZajecarskiOkrug = () => {
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
    setSlide(slide === zajecarskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? zajecarskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Zaječar") {
      navigate(zajecarskiOkrugPathRoutes.zajecar(switchLanguage));
    } else if (name === "Sokobanja") {
      navigate(zajecarskiOkrugPathRoutes.sokoBanja(switchLanguage));
    } else if (name === "Planina Rtanj") {
      navigate(zajecarskiOkrugPathRoutes.planinaRtanj(switchLanguage));
    } else if (name === "Vodopad Ripaljka") {
      navigate(zajecarskiOkrugPathRoutes.vodopadRipaljka(switchLanguage));
    } else if (name === 'Srpski Srednjovekovni Grad "Soko Grad"') {
      navigate(zajecarskiOkrugPathRoutes.sokoGrad(switchLanguage));
    } else if (name === "Feliks Romulijana") {
      navigate(zajecarskiOkrugPathRoutes.gamzigrad(switchLanguage));
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.IstocnaSrbija(switchLanguage))}
          style={{ fill: "white" }}
        />
      </header>
      {switchLanguage === 'rs' ?
        (
          <>

            <section className="zajecarski okrug" lang="sr">
              <h1>Zaječarski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 3.647 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 120.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Brdoviti i planinski predeli, reke Timok i Morava, plodne doline, bogata šumska i rudarska nalazišta.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {!isMobile && showArticle &&
                <article lang="sr">
                  <p>
                    Zaječarski okrug se nalazi u istočnom delu Srbije i obuhvata delove sa bogatim prirodnim lepotama i istorijskim spomenicima. Ovaj okrug uključuje grad Zaječar, koji je administrativni, ekonomski i kulturni centar, kao i manja naselja poput Knjaževca i Bora.
                  </p>
                  <p>
                    Zaječar je poznat po svojoj istorijskoj baštini, uključujući arheološke lokalitete poput Feliks Romulijane, antičke carske palate rimskog cara Galerija. Okruzi su bogati prirodnim resursima, a reke Timok i Morava pružaju mogućnosti za poljoprivredu i ribolov.
                  </p>
                  <p>
                    Privreda Zaječarskog okruga oslanja se na rudarstvo, poljoprivredu i turizam. Zaječar je domaćin manifestacijama poput Zaječarske Gitarijade, najpoznatijeg muzičkog festivala u regionu.
                  </p>
                  <p>
                    Pored toga, Zaječarski okrug je i poznata destinacija za ljubitelje prirode, sa brojnim planiranim stazama, pećinama i lokalnim izvorima termalne vode.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Više se ne plašim da se izgubim, jer povratak uvek otkriva nešto novo. (Bili Džoel)
              </blockquote>
            </section>

          </>
        )
        :
        (
          <>

            <section className="zajecarski okrug" lang="en">
              <h1>Zaječar District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 3,647 km²
                </p>
                <p>
                  <strong>Population: </strong>around 120,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Hilly and mountainous terrain, Timok and Morava rivers, fertile valleys, rich forest and mining areas.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The Zaječar District is located in the eastern part of Serbia and includes areas rich in natural beauty and historical landmarks. This district includes the city of Zaječar, which is an administrative, economic, and cultural center, as well as smaller settlements like Knjaževac and Bor.
                  </p>
                  <p>
                    Zaječar is known for its historical heritage, including archaeological sites such as Felix Romuliana, the ancient imperial palace of the Roman Emperor Galerius. The district is rich in natural resources, and the Timok and Morava rivers provide opportunities for agriculture and fishing.
                  </p>
                  <p>
                    The economy of the Zaječar District relies on mining, agriculture, and tourism. Zaječar hosts events such as the Zaječar Gitarijada, the most famous music festival in the region.
                  </p>
                  <p>
                    Additionally, the Zaječar District is a popular destination for nature lovers, with numerous hiking trails, caves, and local thermal water springs.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                I am no longer afraid to get lost, because returning always reveals something new. (Billy Joel)
              </blockquote>
            </section>

          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {zajecarskiOkrugData?.map((okrug, index) => (
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



export default ZajecarskiOkrug;