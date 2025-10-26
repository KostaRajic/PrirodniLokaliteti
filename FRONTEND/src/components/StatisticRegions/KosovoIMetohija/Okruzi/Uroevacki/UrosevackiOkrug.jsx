import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { urosevackiOkrugData } from "./UrosevackiOkrugData";
import { urosevackiOkrugPathRoutes } from "./UrosevackiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const UrosevackiOkrug = () => {
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
    setSlide(slide === urosevackiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? urosevackiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Uroševac") {
      navigate(urosevackiOkrugPathRoutes.urosevac(switchLanguage))
    } else if (name === "Ski centar Brezovica") {
      navigate(urosevackiOkrugPathRoutes.brezovica(switchLanguage))
    } else if (name === "Ljuboten - Šar Planina") {
      navigate(urosevackiOkrugPathRoutes.ljuboten(switchLanguage))
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

            <section className="urosevacki okrug" lang="sr">
              <h1>Uroševački Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 1.200 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 100.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Brdsko-planinska područja, reke Lepenac i Nerodimka, plodne doline, prirodna bogatstva i raznovrsna kulturno-istorijska baština.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Uroševački okrug</strong> se nalazi u južnom delu Srbije, na teritoriji Kosova i Metohije, i obuhvata grad Uroševac kao administrativno i ekonomsko središte regiona, zajedno sa opštinama <strong>Štrpce</strong> i <strong>Kačanik</strong>.
                  </p>
                  <p>
                    Grad <strong>Uroševac</strong> je poznat po brzom razvoju i svom položaju na važnoj saobraćajnoj raskrsnici između <strong>Prištine</strong> i <strong>Skoplja</strong>.
                  </p>
                  <p>
                    Geografski, prostor okruga karakterišu brdsko-planinski reljef, reke <strong>Lepenac</strong> i <strong>Nerodimka</strong>, kao i plodne doline pogodne za poljoprivredu. Okružen je prirodnim lepotama, posebno <strong>Šar-planinom</strong>, koja nudi mogućnosti za zimsku rekreaciju i planinski turizam.
                  </p>
                  <p>
                    <strong>Štrpce</strong> i <strong>Brezovica</strong> su poznate po zimskim sportovima i očuvanom prirodnom okruženju.
                  </p>
                  <p>
                    Uroševački okrug ima značajnu kulturnu i istorijsku baštinu, sa brojnim <strong>crkvama</strong>, <strong>manastirima</strong> i <strong>arheološkim lokalitetima</strong>. U regiji se održavaju kulturne manifestacije koje neguju lokalne običaje i tradiciju.
                  </p>
                  <p>
                    Pored toga, okrug ima razvijen <strong>poljoprivredni sektor</strong>, dok <strong>prirodni resursi</strong> i <strong>turizam</strong> predstavljaju značajan potencijal za dalji razvoj lokalne privrede.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Kada putujete, više naučite o svojoj zemlji, nego o mestu koje posećujete. (Klint Borgen)
              </blockquote>
            </section>

          </>

        )
        :
        (
          <>

            <section className="urosevacki okrug" lang="en">
              <h1>Uroševac District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 1,200 km²
                </p>
                <p>
                  <strong>Population: </strong>around 100,000
                </p>
                <p>
                  <strong>Geographical characteristics: </strong>Hilly and mountainous areas, the rivers Lepenac and Nerodimka, fertile valleys, natural resources, and diverse cultural and historical heritage.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The <strong>Uroševac District</strong> is located in the southern part of Serbia, within the territory of Kosovo and Metohija, and includes the city of Uroševac as the administrative and economic center of the region, along with the municipalities of <strong>Štrpce</strong> and <strong>Kačanik</strong>.
                  </p>
                  <p>
                    The city of <strong>Uroševac</strong> is known for its rapid development and its position at an important traffic junction between <strong>Pristina</strong> and <strong>Skopje</strong>.
                  </p>
                  <p>
                    Geographically, the district features hilly and mountainous terrain, the rivers <strong>Lepenac</strong> and <strong>Nerodimka</strong>, as well as fertile valleys suitable for agriculture. It is surrounded by natural beauties, especially the <strong>Šar Mountain</strong>, which offers opportunities for winter recreation and mountain tourism.
                  </p>
                  <p>
                    <strong>Štrpce</strong> and <strong>Brezovica</strong> are known for winter sports and preserved natural environments.
                  </p>
                  <p>
                    The Uroševac District has significant cultural and historical heritage, with numerous <strong>churches</strong>, <strong>monasteries</strong>, and <strong>archaeological sites</strong>. Cultural events are held in the region that preserve local customs and traditions.
                  </p>
                  <p>
                    In addition, the district has a developed <strong>agricultural sector</strong>, while its <strong>natural resources</strong> and <strong>tourism</strong> represent important potential for further development of the local economy.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                When you travel, you learn more about your own country than the place you are visiting. (Clint Borgen)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          <div className="caruoselClass" style={{ padding: "0" }}>
            {urosevackiOkrugData?.map((okrug, index) => (
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


export default UrosevackiOkrug;