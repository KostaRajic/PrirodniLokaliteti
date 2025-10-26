import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { nisavskiOkrugData } from "./NisavskiOkrugData";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const NisavskiOkrug = () => {
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
    setSlide(slide === nisavskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? nisavskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Niš") {
      navigate(nisavskiOkrugPathRoutes.nis(switchLanguage));
    } else if (name === "Čegar") {
      navigate(nisavskiOkrugPathRoutes.cegar(switchLanguage));
    } else if (name === "Bovansko Jezero") {
      navigate(nisavskiOkrugPathRoutes.bovanskoJezero(switchLanguage));
    } else if (name === "Suva Planina") {
      navigate(nisavskiOkrugPathRoutes.suvaPlanina(switchLanguage));
    } else if (name === "Sićevačka Klisura") {
      navigate(nisavskiOkrugPathRoutes.sicevackaKlisura(switchLanguage));
    } else if (name === "Manastir Sveta Petka Iverica") {
      navigate(nisavskiOkrugPathRoutes.manastirSvetaPetkaIverica(switchLanguage));
    } else if (name === "Niška Banja") {
      navigate(nisavskiOkrugPathRoutes.niskaBanja(switchLanguage));
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

            <section className="nisavski okrug" lang="sr">
              <h1>Nišavski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 2.729 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 370.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Ravnica i brdoviti predeli, reka Nišava, plodne doline, bogata kulturna i istorijska baština.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Nišavski okrug</strong> se nalazi u jugoistočnom delu Srbije i obuhvata područja bogata prirodnim lepotama i istorijskim znamenitostima. Glavni centar okruga je grad <strong>Niš</strong>, koji ima ključnu ulogu kao administrativni, ekonomski i kulturni centar regiona.
                  </p>
                  <p>
                    Okrug obuhvata i manja naselja poput <strong>Aleksinca</strong> i <strong>Svrljiga</strong>. Grad Niš poznat je po svojoj bogatoj istoriji, sa znamenitostima kao što su <em>Medijana</em>, <em>Čegar</em> i <em>Ćele-kula</em>, koji privlače veliki broj turista.
                  </p>
                  <p>
                    Nišavski okrug obiluje <strong>prirodnim resursima</strong>, uključujući reku <strong>Nišavu</strong>, brojne <strong>termalne izvore</strong> i <strong>planinske predele</strong> pogodne za rekreaciju i odmor.
                  </p>
                  <p>
                    Privreda se zasniva na <strong>industriji</strong>, <strong>trgovini</strong>, <strong>turizmu</strong> i <strong>poljoprivredi</strong>. Grad Niš je domaćin značajnim manifestacijama poput <em>Nišvila</em>, međunarodnog džez festivala koji okuplja umetnike i posetioce iz celog sveta.
                  </p>
                  <p>
                    Nišavski okrug takođe nudi raznovrsne <strong>prirodne atrakcije</strong>, uključujući <strong>pećine</strong>, <strong>rečne kanjone</strong> i <strong>banjske centre</strong> poznate po lekovitim vodama, čime se dodatno razvija turizam u ovom regionu.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Život je kratak a svet je širok, što pre krenete da ga istražujete to bolje. (Simon Raven)
              </blockquote>
            </section>

          </>
        )
        :
        (
          <>

            <section className="nisavski okrug" lang="en">
              <h1>Nišava District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>about 2,729 km²
                </p>
                <p>
                  <strong>Population: </strong>approximately 370,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Plains and hilly areas, the Nišava River, fertile valleys, rich cultural and historical heritage.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The <strong>Nišava District</strong> is located in the southeastern part of Serbia and encompasses areas rich in natural beauty and historical landmarks. The main center of the district is the city of <strong>Niš</strong>, which plays a key role as the administrative, economic, and cultural center of the region.
                  </p>
                  <p>
                    The district also includes smaller settlements such as <strong>Aleksinac</strong> and <strong>Svrljig</strong>. The city of Niš is known for its rich history, with landmarks like <em>Medijana</em>, <em>Čegar</em>, and <em>Ćele-kula</em>, which attract many tourists.
                  </p>
                  <p>
                    Nišava District abounds in <strong>natural resources</strong>, including the <strong>Nišava River</strong>, numerous <strong>thermal springs</strong>, and <strong>mountainous areas</strong> ideal for recreation and relaxation.
                  </p>
                  <p>
                    The economy is based on <strong>industry</strong>, <strong>trade</strong>, <strong>tourism</strong>, and <strong>agriculture</strong>. Niš hosts important events such as <em>Nišville</em>, an international jazz festival that gathers artists and visitors from around the world.
                  </p>
                  <p>
                    Nišava District also offers diverse <strong>natural attractions</strong>, including <strong>caves</strong>, <strong>river canyons</strong>, and <strong>spa centers</strong> known for their healing waters, which further promote tourism in the region.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Life is short and the world is wide, the sooner you start exploring it the better. (Simon Raven)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {nisavskiOkrugData?.map((okrug, index) => (
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

      </section>
      <footer></footer>
      <Outlet />
    </div>
  );
};


export default NisavskiOkrug;