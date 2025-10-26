import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { mitrovackiOkrugData } from "./MitrovackiOkrugData";
import { mitrovackiOkrugPathRoutes } from "./MitrovackiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const MitrovackiOkrug = () => {
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
    setSlide(slide === mitrovackiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? mitrovackiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Kosovska Mitrovica") {
      return navigate(mitrovackiOkrugPathRoutes.mitrovica(switchLanguage))
    } else if (name === "Manastir Banjska") {
      return navigate(mitrovackiOkrugPathRoutes.banjska(switchLanguage))
    } else if (name === "Gazivodsko Jezero") {
      return navigate(mitrovackiOkrugPathRoutes.gazivode(switchLanguage))
    } else if (name === "Manastir Devič") {
      return navigate(mitrovackiOkrugPathRoutes.devic(switchLanguage))
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

            <section className="mitrovacki okrug" lang="sr">
              <h1>Mitrovački Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 1.900 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 350.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Planinske oblasti, reke Ibar i Sitnica, brojne šume, plodne doline i značajna kulturna baština.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Kosovsko-mitrovački okrug</strong> nalazi se u severnom delu Kosova, obuhvatajući grad <strong>Kosovsku Mitrovicu</strong> i opštine <strong>Kosovska Mitrovica</strong>, <strong>Zvečan</strong>, <strong>Leposavić</strong> i <strong>Zubin Potok</strong>. Sedište okruga je grad <strong>Kosovska Mitrovica</strong>. Prema poslednjem popisu, u okrugu živi oko 350.000 stanovnika.
                  </p>
                  <p>
                    Okrug je poznat po planinskim predelima, ali i po <strong>plodnim dolinama</strong>, pogodnim za poljoprivredu – naročito u proizvodnji žitarica, povrća i stočarstvu. Područje je bogato <strong>šumama</strong> i brojnim rekama, među kojima se ističe reka <strong>Ibar</strong>.
                  </p>
                  <p>
                    <strong>Grad Kosovska Mitrovica</strong> ima značajnu istorijsku i kulturnu ulogu, dok ceo okrug karakterišu brojne manifestacije, kulturne i umetničke priredbe koje neguju tradiciju i običaje ovog kraja.
                  </p>
                  <p>
                    <strong>Prirodne lepote</strong>, kao što su planine, reke i šumski pejzaži, čine ovu oblast atraktivnom za turiste i ljubitelje prirode. Okrug ima važnu ulogu u <strong>privredi Kosova</strong>, zahvaljujući razvijenoj poljoprivredi, industriji i kulturno-istorijskom značaju.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Bolje je doživeti nešto jednom nego slušati o tome 1000 puta. (Azijska poslovica)
              </blockquote>
            </section>


          </>
        )
        :
        (
          <>

            <section className="mitrovacki okrug" lang="en">
              <h1>Mitrovica District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 1,900 km²
                </p>
                <p>
                  <strong>Population: </strong>around 350,000
                </p>
                <p>
                  <strong>Geographical Features: </strong>Mountainous areas, the Ibar and Sitnica rivers, numerous forests, fertile valleys, and rich cultural heritage.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The <strong>Mitrovica District</strong> is located in the northern part of Kosovo, encompassing the city of <strong>Kosovska Mitrovica</strong> and the municipalities of <strong>Kosovska Mitrovica</strong>, <strong>Zvečan</strong>, <strong>Leposavić</strong>, and <strong>Zubin Potok</strong>. The administrative center of the district is the city of <strong>Kosovska Mitrovica</strong>. According to the latest census, the district has a population of around 350,000 people.
                  </p>
                  <p>
                    The district is known for its mountainous landscapes, but also for <strong>fertile valleys</strong> suitable for agriculture—especially in the production of cereals, vegetables, and livestock. The area is rich in <strong>forests</strong> and numerous rivers, the most notable being the <strong>Ibar River</strong>.
                  </p>
                  <p>
                    The <strong>city of Kosovska Mitrovica</strong> plays a significant historical and cultural role, while the entire district is characterized by various events, cultural and artistic performances that preserve the traditions and customs of the region.
                  </p>
                  <p>
                    <strong>Natural beauty</strong> such as mountains, rivers, and forest landscapes make this area attractive to tourists and nature lovers. The district plays an important role in the <strong>economy of Kosovo</strong> due to its developed agriculture, industry, and cultural-historical significance.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                It is better to experience something once than to hear about it a thousand times. (Asian proverb)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          <div className="caruoselClass" style={{ padding: "0" }}>
            {mitrovackiOkrugData?.map((okrug, index) => (
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


export default MitrovackiOkrug;