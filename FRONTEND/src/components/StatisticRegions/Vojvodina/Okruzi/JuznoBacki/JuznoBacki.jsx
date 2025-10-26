import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { juznoBackiData } from "./JuznoBackiData";
import { JuznoBackiPathRoutes } from "./JuznoBackiPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const JuznoBacki = () => {
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
    setSlide(slide === juznoBackiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? juznoBackiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Nacionalni park Fruska Gora") {
      navigate(JuznoBackiPathRoutes.fruskaGora);
    } else if (name === "Novi Sad") {
      navigate(JuznoBackiPathRoutes.noviSad);
    } else if (name === "Manastir Krušedol") {
      navigate(JuznoBackiPathRoutes.manastirKrusedol);
    } else if (name === "Sremski Karlovci") {
      navigate(JuznoBackiPathRoutes.sremskiKarlovci);
    } else if (name === "Šajkaška oblast") {
      navigate(JuznoBackiPathRoutes.sajkaskaOblast);
    } else if (name === "Manastir Beočin") {
      navigate(JuznoBackiPathRoutes.manastirBeocin);
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
      {switchLanguage === "rs" ? (
        <>
          <section className="juznoBacki okrug" lang="rs">
            <h1>Južno - Bački okrug</h1>
            <div className="basicInfo">
              <p>
                <strong>Površina: </strong>oko 3.658 km²
              </p>
              <p>
                <strong>Broj stanovnika: </strong>približno 600.000
              </p>
              <p>
                <strong>Geografske karakteristike: </strong>Ravnica, plodno
                zemljište, bogatstvo reka (Dunav, Tisa), idealno za
                poljoprivredu i vinogradarstvo.
              </p>
            </div>
            <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
              {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
            </button>

            {showArticle &&
              <article lang="rs">
                <p>
                  <strong>Južnobački okrug</strong> je jedan od sedam okruga u
                  Vojvodini, smešten u južnom delu Srbije, sa glavnim gradom{" "}
                  <strong>Novi Sad</strong>, koji je takođe i glavni grad
                  Vojvodine.
                </p>
                <p>
                  Ovaj okrug obuhvata i gradove kao što su{" "}
                  <strong>Senta, Beočin</strong> i<strong>Ruma</strong>, kao i
                  brojne opštine. <strong>Novi Sad</strong> je kulturno i
                  ekonomsko središte regiona, poznat po{" "}
                  <strong>Petrovaradinskoj tvrđavi</strong>,
                  <strong>EXIT festivalu</strong> i bogatom kulturnom životu.
                </p>
                <p>
                  Južnobački okrug je dom za raznovrsne manjinske zajednice,
                  uključujući
                  <strong>Mađare, Slovačke</strong> i <strong>Hrvate</strong>, što
                  se ogleda u njegovoj tradiciji, jezicima i religijskim
                  običajima. Okrug je poznat i po svojim
                  <strong>vinogradima</strong> i <strong>vinskom turizmu</strong>,
                  jer je područje idealno za proizvodnju vina.
                </p>
                <p>
                  Pored kulturnih spomenika, prirodne znamenitosti kao što su
                  <strong>Fruška gora, Nacionalni park Fruška gora</strong> i
                  jezera, pružaju odlične uslove za{" "}
                  <strong>rekreaciju, biciklizam, pešačenje</strong> i{" "}
                  <strong>planinarenje</strong>. Tokom cele godine održavaju se
                  brojne manifestacije koje privlače posetioce iz celog regiona.
                </p>
              </article>
            }
          </section>
          <section className="citatClass">
            <blockquote>
              Svet je knjiga, a oni koji ne putuju, čitaju samo jednu stranicu.
              (Sveti Avgustin)
            </blockquote>
          </section>
        </>
      ) : (
        <>
          <section className="juznoBacki okrug" lang="en">
            <h1>South Bačka District</h1>

            <div className="basicInfo">
              <p>
                <strong>Area:</strong> Approximately 3,658 km²
              </p>
              <p>
                <strong>Population:</strong> Around 600,000
              </p>
              <p>
                <strong>Geographical Features:</strong> Flat terrain, fertile
                soil, rich in rivers (Danube, Tisa) — ideal for agriculture and
                viticulture.
              </p>
            </div>
            <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
              {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
            </button>

            {showArticle &&
              <article lang="en">
                <p>
                  The <strong>South Bačka District</strong> is one of the seven
                  administrative districts in the Autonomous Province of
                  Vojvodina, situated in the northern part of Serbia. Its
                  administrative center is <strong>Novi Sad</strong>, which also
                  serves as the provincial capital of Vojvodina.
                </p>
                <p>
                  Besides Novi Sad, the district includes towns like{" "}
                  <strong>Senta, Beočin,</strong> and <strong>Ruma</strong>, as
                  well as numerous smaller municipalities. As the cultural and
                  economic hub, Novi Sad is renowned for landmarks such as the{" "}
                  <strong>Petrovaradin Fortress</strong>, the international{" "}
                  <strong>EXIT music festival</strong>, and a rich cultural life
                  throughout the year.
                </p>
                <p>
                  The district is ethnically diverse, home to minorities such as{" "}
                  <strong>Hungarians, Slovaks,</strong> and{" "}
                  <strong>Croats</strong>, which is reflected in its multicultural
                  traditions, languages, and religious practices. Thanks to its
                  ideal terrain and climate, the area is also famous for{" "}
                  <strong>vineyards</strong> and <strong>wine tourism</strong>.
                </p>
                <p>
                  Nature lovers can explore the nearby{" "}
                  <strong>Fruška Gora National Park</strong>, lakes, and various
                  recreational routes suitable for{" "}
                  <strong>cycling, hiking, and mountaineering</strong>. Throughout
                  the year, numerous cultural and tourism events take place,
                  attracting visitors from across the region.
                </p>
              </article>
            }
          </section>
          <section className="citatClass">
            <blockquote>
              “The world is a book, and those who do not travel read only one
              page.”
              <br />— <em>Saint Augustine</em>
            </blockquote>
          </section>
        </>
      )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {juznoBackiData?.map((okrug, index) => (
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


export default JuznoBacki;