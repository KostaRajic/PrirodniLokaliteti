import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { peckiOkrugData } from "./PeckiOkrugData";
import { peckiOkrugPathRoutes } from "./PeckiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const PeckiOkrug = () => {
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
    setSlide(slide === peckiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? peckiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Peć") {
      navigate(peckiOkrugPathRoutes.pec(switchLanguage))
    } else if (name === "Pećka Patrijaršija") {
      navigate(peckiOkrugPathRoutes.peckaPatrijarsija(switchLanguage))
    } else if (name === "Planina Mokra Gora") {
      navigate(peckiOkrugPathRoutes.mokraGora(switchLanguage))
    } else if (name === "Vodopad Beli Drim") {
      navigate(peckiOkrugPathRoutes.vodopadBeliDrim(switchLanguage))
    } else if (name === "Planina Žuti Kamen") {
      navigate(peckiOkrugPathRoutes.planinaZutiKamen(switchLanguage))
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.KosovoIMetohija(switchLanguage))}
          style={{ fill: "white" }}
        />
      </header>

      {switchLanguage === 'rs' ?
        (
          <>

            <section className="pecki okrug" lang="sr">
              <h1>Pećki Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 4.400 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 315.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Planinske oblasti, reke Beli Drim i Pećka Bistrica, bogato prirodno nasleđe, šumska područja i plodna dolina.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {!isMobile && showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Pećki okrug</strong> se nalazi u zapadnom delu Kosova, obuhvatajući grad Peć i opštine Peć, Istok, Klina. Sedište okruga je grad Peć. Prema poslednjem popisu, u okrugu živi oko 315.000 stanovnika.
                  </p>
                  <p>
                    Okrug je poznat po planinskim predelima, ali i plodnim dolinama, gde je poljoprivreda veoma razvijena, naročito u proizvodnji žitarica, povrća i voća. Pećki okrug je takođe značajan po šumarstvu i stočarstvu.
                  </p>
                  <p>
                    Regija je bogata prirodnim lepotama, kao i rekama i vodopadima. Okrug se oslanja i na turizam, jer njegova priroda, kulturno nasleđe i istorijska znamenitost, uključujući manastir Pećku Patrijaršiju, privlače posetioce.
                  </p>
                  <p>
                    Pećki okrug ima bogatu kulturnu baštinu, a poznat je i po brojnim manifestacijama, među kojima je i "Pećki džez festival", koji slavi tradiciju, umetnost i običaje ovog kraja.
                  </p>
                  <p>
                    Okrug je odlična destinacija za ljubitelje prirode, istorije i tradicionalne kulture, i predstavlja značajan deo Kosova.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Putovanje i promena mesta daju novu snagu vašem umu. (Seneka)
              </blockquote>
            </section>


          </>
        )
        :
        (
          <>

            <section className="pecki okrug" lang="en">
              <h1>Peć District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>about 4,400 km²
                </p>
                <p>
                  <strong>Population: </strong>approximately 315,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Mountainous regions, rivers Beli Drim and Pećka Bistrica, rich natural heritage, forested areas, and fertile valley.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The <strong>Peć District</strong> is located in the western part of Kosovo, encompassing the city of Peć and the municipalities of Peć, Istok, and Klina. The district seat is the city of Peć. According to the latest census, about 315,000 people live in the district.
                  </p>
                  <p>
                    The district is known for its mountainous landscapes as well as fertile valleys where agriculture is highly developed, especially in the production of cereals, vegetables, and fruits. Peć District is also significant for forestry and livestock farming.
                  </p>
                  <p>
                    The region is rich in natural beauties, including rivers and waterfalls. The district also relies on tourism, as its nature, cultural heritage, and historical landmarks, including the Peć Patriarchate monastery, attract visitors.
                  </p>
                  <p>
                    Peć District has a rich cultural heritage and is known for numerous events, including the "Peć Jazz Festival," which celebrates the tradition, art, and customs of the region.
                  </p>
                  <p>
                    The district is an excellent destination for nature lovers, history enthusiasts, and those interested in traditional culture, representing an important part of Kosovo.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Travel and change of place give new strength to the mind. (Seneca)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          <div className="caruoselClass" style={{ padding: "0" }}>
            {peckiOkrugData?.map((okrug, index) => (
              <div
                key={okrug.id}
                className={
                  slide === index
                    ? "caruoselBackground caruoselBackground-visible"
                    : "caruoselBackground caruoselBackground-hidden"
                }
              >
                <img
                  src={okrug.img}
                  loading="lazy"
                  alt={switchLanguage === 'en' ? okrug.nameENG ?? okrug.name : okrug.name}
                />
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevContent} />
                <div className="caruoselInfo">
                  <h3>{switchLanguage === 'en' ? okrug.nameENG ?? okrug.name : okrug.name}</h3>
                  <p>{switchLanguage === 'en' ? okrug.mainTextENG : okrug.mainTextSRB}</p>
                  <button onClick={() => readMore(okrug.name)}>
                    {switchLanguage === 'rs' ? 'Pročitaj više' : 'Read more'}
                  </button>
                </div>

                <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextContent} />
              </div>
            ))}
          </div>

        </div>
      </section>
      <footer></footer>
      <Outlet />
    </div>
  );
};


export default PeckiOkrug;