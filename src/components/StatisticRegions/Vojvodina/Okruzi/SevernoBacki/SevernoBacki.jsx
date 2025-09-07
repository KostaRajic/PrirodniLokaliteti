import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { severnoBackiData } from "./SevernoBackiData";
import { servernoBackiPathRoutes } from "./SevernoBackiPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const SevernoBacki = () => {
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
    setSlide(slide === severnoBackiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? severnoBackiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Palićko jezero") {
      navigate(servernoBackiPathRoutes.palickoJezero(switchLanguage));
    } else if (name === "Subotica") {
      navigate(servernoBackiPathRoutes.subotica(switchLanguage));
    } else if (name === "Tisa - rečna i prirodna oaza") {
      navigate(servernoBackiPathRoutes.rekaTisa(switchLanguage));
    } else if (name === "Subotička peščara") {
      navigate(servernoBackiPathRoutes.subotickaPescara(switchLanguage));
    } else if (name === "Bačka Topola") {
      navigate(servernoBackiPathRoutes.backaTopola(switchLanguage));
    } else if (name === "Bačkotopolsko Jezero") {
      navigate(servernoBackiPathRoutes.backoTopolskoJezero(switchLanguage));
    }
  };

  return (
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
          <><section className="severnoBacki okrug" lang="sr">
            <h1>Severno - Bački okrug</h1>
            <div className="basicInfo">
              <p>
                <strong>Površina: </strong>oko 3.513 km²
              </p>
              <p>
                <strong>Broj stanovnika: </strong>približno 315.000
              </p>
              <p>
                <strong>Geografske karakteristike: </strong>Ravnica sa plodnim zemljištem, bogata rekama i jezerima, pogodna za poljoprivredu.
              </p>
            </div>
            <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
              {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
            </button>

            {showArticle &&
              <article lang="sr">
                <p>
                  <strong>Severo-bački okrug</strong> je jedan od sedam okruga u Vojvodini, smešten u severoistočnom delu Srbije. Glavni grad okruga je <strong>Subotica</strong>, koja je najveći grad u ovom okrugu, kao i jedno od najvažnijih kulturnih, političkih i ekonomskih središta Vojvodine.
                </p>
                <p>
                  Pored Subotice, u okrug spadaju i gradovi <strong>Senta</strong> i <strong>Kanjiža</strong>, kao i brojne opštine. Severo-bački okrug je i kulturno veoma bogat, sa značajnim uticajem mađarske, srpske, rumunske i drugih manjinskih zajednica. To se ogleda u bogatoj tradiciji, običajima, jezicima i religijskim manifestacijama koje čine svakodnevni život ovog regiona.
                </p>
                <p>
                  <strong>Subotica</strong> je poznata po svojoj arhitekturi, posebno u stilu secesije, i brojnim kulturnim manifestacijama koje se održavaju tokom godine, kao što su festivali, pozorišni i muzički događaji.
                </p>
                <p>
                  U Severo-bačkom okrugu se nalaze i prirodne znamenitosti kao što su <strong>Palićko jezero</strong>, koje je popularno odredište za turizam, kao i brojne zaštićene oblasti i parkovi prirode. Turizam u ovom okrugu bazira se na prirodnim lepotama, kulturnim spomenicima, ali i na vinogradima i proizvodnji lokalnih vina.
                </p>
                <p>
                  Pored toga, posetioci mogu uživati u raznim rekreativnim aktivnostima kao što su vožnja bicikla, pecanje i šetnje prirodom.
                </p>
              </article>
            }
          </section>
            <section className="citatClass">
              <blockquote>
                Putovanja vas prvo ostave bez reči, a onda vas pretvore u pripovedača. (Ibn Batuta)
              </blockquote>
            </section></>

        )
        :
        (
          <><section className="severnoBacki okrug" lang="en">
            <h1>North Bačka District</h1>
            <div className="basicInfo">
              <p>
                <strong>Area: </strong>approximately 3,513 km²
              </p>
              <p>
                <strong>Population: </strong>about 315,000
              </p>
              <p>
                <strong>Geographical features: </strong>Plain with fertile soil, rich in rivers and lakes, suitable for agriculture.
              </p>
            </div>
            <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
              {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
            </button>

            {showArticle &&
              <article lang="en">
                <p>
                  The <strong>North Bačka District</strong> is one of the seven districts in Vojvodina, located in the northeastern part of Serbia. The administrative center of the district is <strong>Subotica</strong>, which is the largest city in the district and one of the most important cultural, political, and economic centers of Vojvodina.
                </p>
                <p>
                  Besides Subotica, the district includes the towns of <strong>Senta</strong> and <strong>Kanjiža</strong>, as well as numerous municipalities. The North Bačka District is culturally very rich, with a significant influence from Hungarian, Serbian, Romanian, and other minority communities. This is reflected in the rich traditions, customs, languages, and religious events that shape everyday life in this region.
                </p>
                <p>
                  <strong>Subotica</strong> is known for its architecture, especially in the Art Nouveau style, and numerous cultural events held throughout the year, such as festivals, theater, and music performances.
                </p>
                <p>
                  The North Bačka District is also home to natural landmarks such as <strong>Palić Lake</strong>, a popular tourist destination, as well as many protected areas and nature parks. Tourism in this district is based on natural beauty, cultural monuments, as well as vineyards and local wine production.
                </p>
                <p>
                  Additionally, visitors can enjoy various recreational activities such as cycling, fishing, and walking in nature.
                </p>
              </article>
            }
          </section>
            <section className="citatClass">
              <blockquote>
                “Traveling – it leaves you speechless, then turns you into a storyteller.” (Ibn Battuta)
              </blockquote>
            </section></>

        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {severnoBackiData?.map((okrug, index) => (
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
  );
};


export default SevernoBacki;