/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { beogradData } from "./BeogradData";
import { beogradPathRoutes } from "./BeogradPathRoutes";
import { useContextAuth } from "../../../Context";

const Beograd = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();
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

  useEffect(() => {
    if (lang && lang !== switchLanguage) {
      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


  const nextContent = () => {
    setSlide(slide === beogradData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? beogradData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Beograd') {
      navigate(beogradPathRoutes.beograd(switchLanguage))
    } else if (name === 'Beogradska Tvrdjava - Kalemegdan') {
      navigate(beogradPathRoutes.kalemegdan(switchLanguage))
    } else if (name === 'Hram Svetog Save') {
      navigate(beogradPathRoutes.hramSvetogSave(switchLanguage))
    } else if (name === 'Knez Mihailova') {
      navigate(beogradPathRoutes.knezMihajlova(switchLanguage))
    } else if (name === 'Trg Republike') {
      navigate(beogradPathRoutes.trgRepublike(switchLanguage))
    } else if (name === 'Botanicka Bašta') {
      navigate(beogradPathRoutes.botanickaBasta(switchLanguage))
    } else if (name === 'Skadarlija') {
      navigate(beogradPathRoutes.skadarlija(switchLanguage))
    } else if (name === 'Ada Ciganlija') {
      navigate(beogradPathRoutes.adaCiganlija(switchLanguage))
    } else if (name === 'Košutnjak') {
      navigate(beogradPathRoutes.kosutnjak(switchLanguage))
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate('/serbianMap')}
          style={{ fill: "white" }}
        />
      </header>

      {switchLanguage === 'rs' ?
        (
          <>

            <section className="beograd okrug" lang="sr">
              <h1>Beograd</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 360 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 1.7 miliona
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Leži na ušću reka Save i Dunava, prostire se kroz ravnicu, sa brojnim brdima i zelenim površinama, idealno za urbanizaciju i rekreaciju.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {!isMobile && showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Beograd</strong>, glavni grad Srbije, smešten je na ušću reke Save u Dunav, što ga čini jednim od najvažnijih gradova u jugoistočnoj Evropi. Sa bogatom istorijom koja seže više od 2.000 godina, Beograd je bio ključna tačka na mnogim važnim istorijskim putevima i uticao na razvoj kulture, politike i ekonomije regiona.
                  </p>
                  <p>
                    Grad je bio pod vlašću Rimljana, Vizantije, Otomanskog carstva, a tokom 20. veka pretrpeo je brojne promene kroz oba svetska rata i tokom perioda socijalizma. Danas je Beograd moderan grad, poznat po vibrirajućem kulturnom i noćnom životu, brojnim muzejima, galerijama, kao i prelepim parkićima i rekreacionim zonama.
                  </p>
                  <p>
                    Simboli Beograda uključuju <strong>Beogradsku tvrđavu</strong>, koja pruža panoramski pogled na reke, i <strong>Skadarliju</strong>, boemsku četvrt koja čuva duh prošlih vremena. Beograd je takođe važan univerzitetski i naučni centar, sa brojnim institucijama visokog obrazovanja i istraživačkim centrima.
                  </p>
                  <p>
                    Grad je središte trgovine, transporta i tehnologije, a njegovi stanovnici poznati su po gostoljubivosti. Uprkos izazovima sa kojima se suočava, <strong>Beograd</strong> ostaje simbol dinamične kulture i tradicije.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Svet je knjiga, a oni koji ne putuju, čitaju samo jednu stranicu. (Sveti Avgustin)
              </blockquote>
            </section>


          </>
        )
        :
        (
          <>

            <section className="beograd okrug" lang="en">
              <h1>Belgrade</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 360 km²
                </p>
                <p>
                  <strong>Population: </strong>around 1.7 million
                </p>
                <p>
                  <strong>Geographical features: </strong>Located at the confluence of the Sava and Danube rivers, it stretches across a plain with numerous hills and green areas, making it ideal for urbanization and recreation.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>Belgrade</strong>, the capital of Serbia, is situated at the confluence of the Sava and Danube rivers, making it one of the most important cities in Southeast Europe. With a rich history spanning more than 2,000 years, Belgrade has been a key point on many important historical routes and has influenced the development of culture, politics, and the economy in the region.
                  </p>
                  <p>
                    The city was ruled by the Romans, Byzantines, and the Ottoman Empire, and during the 20th century, it underwent numerous changes through both world wars and the period of socialism. Today, Belgrade is a modern city known for its vibrant cultural and nightlife, numerous museums, galleries, as well as beautiful parks and recreational areas.
                  </p>
                  <p>
                    Symbols of Belgrade include the <strong>Belgrade Fortress</strong>, which offers panoramic views of the rivers, and <strong>Skadarlija</strong>, a bohemian quarter that preserves the spirit of past times. Belgrade is also an important university and scientific center, with many institutions of higher education and research centers.
                  </p>
                  <p>
                    The city is a hub of trade, transportation, and technology, and its residents are known for their hospitality. Despite the challenges it faces, <strong>Belgrade</strong> remains a symbol of dynamic culture and tradition.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                The world is a book, and those who do not travel read only one page. (Saint Augustine)
              </blockquote>
            </section>

          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {beogradData?.map((okrug, index) => (
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
    </div>
  );
};
export default Beograd;