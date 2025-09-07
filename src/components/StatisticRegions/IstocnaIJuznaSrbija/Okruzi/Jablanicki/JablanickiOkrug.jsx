import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { jablanickiOkrugData } from "./JablanickiOkrugData";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";
import { Leskovac } from "./Leskovac";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const JablanickiOkrug = () => {
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
    setSlide(slide === jablanickiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? jablanickiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Leskovac") {
      navigate(jablanickiOkrugPathRoutes.leskovac(switchLanguage))
    } else if (name === "Brestovačko Jezero") {
      navigate(jablanickiOkrugPathRoutes.brestovackoJezero(switchLanguage))
    } else if (name === "Planina Babička Gora") {
      navigate(jablanickiOkrugPathRoutes.babickaGora(switchLanguage))
    } else if (name === "Kanjon Vučjanke") {
      navigate(jablanickiOkrugPathRoutes.kanjonVucjanke(switchLanguage))
    } else if (name === "Planina Goljak") {
      navigate(jablanickiOkrugPathRoutes.planinaGoljak(switchLanguage))
    } else if (name === "Tularska Banja") {
      navigate(jablanickiOkrugPathRoutes.tularskaBanja(switchLanguage))
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

            <section className="jablanicki okrug" lang="sr">
              <h1>Jablanički Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 2.654 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 160.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Brdoviti predeli, reke Jablanica i Vučjanka, bogatstvo prirodnih resursa, plodno zemljište, razvijena poljoprivreda, stočarstvo, voćarstvo i proizvodnja hrane.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ?  'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ?  'Pokaži više' : 'Show more') }
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Jablanički okrug</strong> se nalazi u južnom delu Srbije i poznat je po svojoj prirodnoj lepoti, bogatoj tradiciji i značajnim kulturnim spomenicima. Ovaj okrug obuhvata grad <strong>Leskovac</strong>, kao najveći administrativni i ekonomski centar, i opštine <strong>Vlasotince</strong>, <strong>Medveđa</strong> i <strong>Lebane</strong>.
                  </p>
                  <p>
                    Grad <strong>Leskovac</strong> poznat je po svojoj tradiciji u proizvodnji hrane, naročito po poznatim leskovačkim specijalitetima, kao što su <em>leskovački roštilj</em> i <em>ajvar</em>. Okrug se odlikuje razvijenim stočarstvom i poljoprivredom, a proizvodi poput mesa, mleka i povrća imaju značajnu poziciju na tržištu.
                  </p>
                  <p>
                    Jablanički okrug je bogat prirodnim lepotama, među kojima se izdvajaju planinski vrhovi, brojne reke i jezera, koji ga čine idealnim za ljubitelje prirode i planinarenja. Pored toga, okrug je domaćin brojnih kulturnih manifestacija, poput <em>Leskovačkog sajma</em> i manifestacija posvećenih tradicionalnoj kuhinji.
                  </p>
                  <p>
                    Turizam je takođe u razvoju zahvaljujući bogatoj kulturno-istorijskoj baštini, među kojom se ističu <strong>crkve</strong>, <strong>manastiri</strong> i <strong>arheološka nalazišta</strong> koja svedoče o dugoj istoriji ovog regiona.
                  </p>
                  <p>
                    <strong>Jablanički okrug</strong> predstavlja spoj tradicije, prirodnih resursa i savremenih industrijskih i poljoprivrednih aktivnosti, što ga čini jednim od značajnih regiona Srbije.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Turisti ne znaju gde su bili. Putnici ne znaju gde idu. (Pol Terou)
              </blockquote>
            </section>

          </>
        )
        :
        (
          <>

            <section className="jablanicki okrug" lang="en">
              <h1>Jablanica District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 2,654 km²
                </p>
                <p>
                  <strong>Population: </strong>around 160,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Hilly terrain, the Jablanica and Vučjanka rivers, abundant natural resources, fertile soil, developed agriculture, livestock farming, fruit growing, and food production.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
              {showArticle ? (switchLanguage === 'rs' ?  'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ?  'Pokaži više' : 'Show more') }
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The <strong>Jablanica District</strong> is located in the southern part of Serbia and is known for its natural beauty, rich tradition, and significant cultural monuments. This district includes the city of <strong>Leskovac</strong>, as the largest administrative and economic center, and the municipalities of <strong>Vlasotince</strong>, <strong>Medveđa</strong>, and <strong>Lebane</strong>.
                  </p>
                  <p>
                    The city of <strong>Leskovac</strong> is famous for its food production tradition, especially for well-known Leskovac specialties such as <em>Leskovac grilled meat</em> and <em>ajvar</em>. The district is distinguished by developed livestock farming and agriculture, with products like meat, milk, and vegetables holding significant market positions.
                  </p>
                  <p>
                    Jablanica District is rich in natural beauties, including mountain peaks, numerous rivers, and lakes, making it ideal for nature lovers and hiking enthusiasts. Additionally, the district hosts many cultural events, such as the <em>Leskovac Fair</em> and events dedicated to traditional cuisine.
                  </p>
                  <p>
                    Tourism is also developing thanks to the rich cultural and historical heritage, which includes <strong>churches</strong>, <strong>monasteries</strong>, and <strong>archaeological sites</strong> that testify to the long history of this region.
                  </p>
                  <p>
                    The <strong>Jablanica District</strong> represents a blend of tradition, natural resources, and modern industrial and agricultural activities, making it one of the important regions of Serbia.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Tourists do not know where they have been. Travelers do not know where they are going. (Paul Theroux)
              </blockquote>
            </section>

          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {jablanickiOkrugData?.map((okrug, index) => (
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


export default JablanickiOkrug;