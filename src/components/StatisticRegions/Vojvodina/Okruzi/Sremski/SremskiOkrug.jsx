import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { sremskiOkrugData } from "./SremskiOkrugData";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const SremskiOkrug = () => {
  const [slide, setSlide] = useState(0);
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

  const navigate = useNavigate();

  const nextContent = () => {
    setSlide(slide === sremskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? sremskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Sremska Mitrovica") {
      navigate(sremskiOkrugPathRoutes.sremskaMitrovica(switchLanguage));
    } else if (name === 'Specijalni rezervat prirode "Zasavica"') {
      navigate(sremskiOkrugPathRoutes.srpZasavica(switchLanguage));
    } else if (name === "Inđija") {
      navigate(sremskiOkrugPathRoutes.indjija(switchLanguage));
    } else if (name === "Sotsko Jezero") {
      navigate(sremskiOkrugPathRoutes.sotskoJezero(switchLanguage));
    } else if (name === "Manastir Novo Hopovo") {
      navigate(sremskiOkrugPathRoutes.novoHopovo(switchLanguage));
    } else if (name === "Šid") {
      navigate(sremskiOkrugPathRoutes.sid(switchLanguage));
    } else if (name === "Manastir Jazak") {
      navigate(sremskiOkrugPathRoutes.manastirJazak(switchLanguage));
    } else if (name === "Bešenovačko Jezero") {
      navigate(sremskiOkrugPathRoutes.besenovackoJezero(switchLanguage));
    }
  };

  return (
    <>
      <div className="okrugBackground">
        <header>
          <FaArrowLeft
            className="arrowLeft"
            onClick={() => navigate(serbianMapPathRoutes.Vojvodina(switchLanguage))}
            style={{ fill: "white" }}
          />
        </header>
        {switchLanguage === 'rs' ?
          (
            <>
              <section className="sremski okrug" lang="sr">
                <h1>Sremski okrug</h1>
                <div className="basicInfo">
                  <p>
                    <strong>Površina: </strong>oko 3.500 km²
                  </p>
                  <p>
                    <strong>Broj stanovnika: </strong>približno 800.000
                  </p>
                  <p>
                    <strong>Geografske karakteristike: </strong>Ravnica sa plodnim zemljištem, bogata poljoprivredna područja, delimično planinsko područje.
                  </p>
                </div>
                <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                  {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
                </button>

                {showArticle &&
                  <article lang="sr">
                    <p>
                      <strong>Sremski okrug</strong> je jedan od okruga smešten u Vojvodini. Ovaj okrug obuhvata više gradova i opština, među kojima se ističu <strong>Novi Sad</strong>, <strong>Sremska Mitrovica</strong> i <strong>Inđija</strong>, kao i manje opštine poput <strong>Rume</strong>, <strong>Šida</strong> i <strong>Pećinaca</strong>.
                    </p>
                    <p>
                      Geografski je prepoznatljiv po plodnim ravnicama pogodnim za <strong>poljoprivredu</strong>, ali i po blizini reke <strong>Save</strong>. U jugoistočnom delu okruga nalazi se <strong>Fruška gora</strong>, planinsko područje koje je deo <strong>Nacionalnog parka Fruška gora</strong>, poznato po bogatoj flori, fauni i pravoslavnim manastirima.
                    </p>
                    <p>
                      Poljoprivreda je snažno razvijena, sa naglaskom na <strong>ratarstvo</strong>, <strong>voćarstvo</strong> i <strong>stočarstvo</strong>, što čini region važnim za proizvodnju hrane.
                    </p>
                    <p>
                      Okrug je značajan i po razvijenoj <strong>privredi</strong>, industrijskim i uslužnim delatnostima, dok moderna <strong>infrastruktura</strong> – uključujući autoputeve i železnicu – omogućava odličnu povezanost sa ostatkom zemlje.
                    </p>
                    <p>
                      Kultura i tradicija su bogate i raznovrsne, a <strong>turizam</strong> se sve više razvija zahvaljujući prirodnim lepotama i istorijskim lokalitetima.
                    </p>
                  </article>
                }
              </section>

              <section className="citatClass">
                <blockquote>
                  Za dvadeset godina bićeš više razočaran stvarima koje nisi uradio nego onima koje jesi. Isplovi, zato, iz sigurne luke. Otkrivaj, sanjaj, istražuj! (Mark Tven)
                </blockquote>
              </section>
            </>
          )
          :
          (
            <>
              <section className="sremski okrug" lang="en">
                <h1>Srem District</h1>
                <div className="basicInfo">
                  <p>
                    <strong>Area: </strong>approximately 3,500 km²
                  </p>
                  <p>
                    <strong>Population: </strong>around 800,000
                  </p>
                  <p>
                    <strong>Geographical features: </strong>A plain with fertile soil, rich agricultural areas, and partially mountainous terrain.
                  </p>
                </div>
                <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                  {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
                </button>

                {showArticle &&
                  <article lang="en">
                    <p>
                      <strong>The Srem District</strong> is one of the districts located in Vojvodina. This district includes several cities and municipalities, among which <strong>Novi Sad</strong>, <strong>Sremska Mitrovica</strong>, and <strong>Inđija</strong> stand out, along with smaller municipalities such as <strong>Ruma</strong>, <strong>Šid</strong>, and <strong>Pećinci</strong>.
                    </p>
                    <p>
                      Geographically, it is known for its fertile plains suitable for <strong>agriculture</strong>, as well as its proximity to the <strong>Sava River</strong>. In the southeastern part of the district lies <strong>Fruška Gora</strong>, a mountainous area that is part of the <strong>Fruška Gora National Park</strong>, known for its rich flora, fauna, and Orthodox monasteries.
                    </p>
                    <p>
                      Agriculture is highly developed, with a focus on <strong>crop farming</strong>, <strong>fruit growing</strong>, and <strong>livestock breeding</strong>, making the region important for food production.
                    </p>
                    <p>
                      The district is also significant for its developed <strong>economy</strong>, including industrial and service sectors, while modern <strong>infrastructure</strong>—such as highways and railways—provides excellent connectivity with other parts of the country.
                    </p>
                    <p>
                      The district’s <strong>culture and tradition</strong> are rich and diverse, and <strong>tourism</strong> is increasingly developing thanks to its natural beauty and historical landmarks.
                    </p>
                  </article>
                }
              </section>

              <section className="citatClass">
                <blockquote>
                  In twenty years, you will be more disappointed by the things you didn’t do than by the ones you did. So, sail away from the safe harbor. Explore, dream, discover! (Mark Twain)
                </blockquote>
              </section>
            </>
          )}

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
    </>
  );
};


export default SremskiOkrug;