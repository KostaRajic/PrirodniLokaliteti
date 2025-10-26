import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { severnoBanatskiData } from "./SevernoBanatskiData";
import { severnoBanatskiPathRoutes } from "./SevernoBanatskiPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";


const SevernoBanatski = () => {
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
    setSlide(slide === severnoBanatskiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? severnoBanatskiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Kikinda") {
      navigate(severnoBanatskiPathRoutes.kikinda(switchLanguage));
    } else if (name === "Kanjiža i termalne vode") {
      navigate(severnoBanatskiPathRoutes.kanjiza(switchLanguage));
    } else if (name === "Selevenjske pustare") {
      navigate(severnoBanatskiPathRoutes.selevenjskePustare(switchLanguage));
    } else if (name === "Rezervat velike droplje") {
      navigate(severnoBanatskiPathRoutes.rezervatVelikeDroplje(switchLanguage));
    } else if (name === "Senta") {
      navigate(severnoBanatskiPathRoutes.senta(switchLanguage));
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
          <>
            <section className="severnoBanatski okrug" lang="sr">
              <h1>Severno - Banatski okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 3.860 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 210.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Pretežno ravničarski pejzaž sa plodnim zemljištem, brojnim rekama i jezerima, pogodna teritorija za poljoprivrednu proizvodnju.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Severno-banatski okrug</strong> je jedan od sedam okruga u Vojvodini, smešten u severnom delu regiona Banata, uz granicu sa Mađarskom. Glavni grad okruga je <strong>Kikinda</strong>, koja predstavlja administrativno, ekonomsko i kulturno središte ovog regiona. Pored Kikinde, u okrug spadaju i gradovi <strong>Senta</strong>, <strong>Ada</strong>, <strong>Novi Kneževac</strong> i druge opštine.
                  </p>
                  <p>
                    Okrug se odlikuje multikulturalnim identitetom, s izraženim uticajem Mađara, Srba, Roma i drugih etničkih grupa koje žive na ovom prostoru, a taj kulturni pluralizam vidljiv je u tradicijama, manifestacijama, običajima i jezicima lokalnog stanovništva.
                  </p>
                  <p>
                    Severno-banatski okrug poznat je po svojoj bogatoj poljoprivredi, prirodnim lepotama, rekama i jezerima, kao i brojnim istorijskim lokalitetima. Prirodne znamenitosti kao što su obale reke Tamiš, ribolovačka područja i lokalni prirodni rezervati doprinose turističkim vrednostima regiona.
                  </p>
                  <p>
                    Poljoprivreda je ključna ekonomska grana, dok turizam nudi mogućnosti za biciklizam, ribolov, planinarenje i istraživanje istorijskih lokaliteta. Severno-banatski okrug je prava destinacija za istraživače koji traže autentični vojvođanski ambijent i prirodni mir.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Dok putujemo svetom da bismo našli lepotu, moramo je poneti sa sobom ili je nećemo naći. (Ralf Valdo Emerson)
              </blockquote>
            </section>
          </>
        )
        :
        (
          <>
            <section className="severnoBanatski okrug" lang="en">
              <h1>North Banat District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>about 3,860 km²
                </p>
                <p>
                  <strong>Population: </strong>approximately 210,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Predominantly flat landscape with fertile soil, numerous rivers and lakes, suitable land for agricultural production.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The <strong>North Banat District</strong> is one of the seven districts in Vojvodina, located in the northern part of the Banat region, near the border with Hungary. The district’s administrative center is <strong>Kikinda</strong>, which serves as the administrative, economic, and cultural hub of the region. Besides Kikinda, the district also includes the towns of <strong>Senta</strong>, <strong>Ada</strong>, <strong>Novi Kneževac</strong>, and other municipalities.
                  </p>
                  <p>
                    The district is characterized by a multicultural identity, with a strong influence of Hungarians, Serbs, Roma, and other ethnic groups living in the area. This cultural pluralism is visible in the traditions, events, customs, and languages of the local population.
                  </p>
                  <p>
                    North Banat District is known for its rich agriculture, natural beauty, rivers, lakes, and numerous historical sites. Natural landmarks such as the banks of the Tamiš River, fishing areas, and local nature reserves contribute to the region’s tourist appeal.
                  </p>
                  <p>
                    Agriculture is the key economic sector, while tourism offers opportunities for cycling, fishing, hiking, and exploring historical locations. North Banat District is a true destination for explorers seeking an authentic Vojvodina ambiance and natural tranquility.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                “As we travel the world to find beauty, we must carry it with us or we will not find it.” (Ralph Waldo Emerson)
              </blockquote>
            </section>
          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {severnoBanatskiData?.map((okrug, index) => (
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


export default SevernoBanatski;