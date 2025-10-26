import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { gnjilanskiOkrugData } from "./GnjilanskiOkrugData";
import { gnjilanskiOkrugPathRoutes } from "./GnjilanskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const GnjilanskiOkrug = () => {
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
    setSlide(slide === gnjilanskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? gnjilanskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Gnjilane") {
      navigate(gnjilanskiOkrugPathRoutes.gnjilane(switchLanguage))
    } else if (name === "Manastir Ubožac") {
      navigate(gnjilanskiOkrugPathRoutes.ubozac(switchLanguage))
    } else if (name === "Podgrađa tvrđava") {
      navigate(gnjilanskiOkrugPathRoutes.podgradje(switchLanguage))
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

            <section className="gnjilanski okrug" lang="sr">
              <h1>Gnjilanski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 1.200 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 90.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Brdovita i planinska područja, reka Binačka Morava, plodne doline, šumska prostranstva i raznovrsna flora i fauna.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Gnjilanski okrug</strong> se nalazi u istočnom delu Srbije, obuhvatajući gradove i opštine kao što su <strong>Gnjilane</strong>, <strong>Vitina</strong> i <strong>Kosovska Kamenica</strong>. Sedište okruga je grad <strong>Gnjilane</strong>. Prema poslednjem popisu, u okrugu živi oko 54.000 stanovnika.
                  </p>
                  <p>
                    Okrug se odlikuje pretežno brdovitim i planinskim reljefom, kroz koji protiče reka <strong>Binačka Morava</strong>. Region je poznat po plodnim dolinama koje pogoduju poljoprivrednoj proizvodnji, naročito povrtarstvu, voćarstvu i stočarstvu.
                  </p>
                  <p>
                    <strong>Gnjilanski okrug</strong> ima bogatu kulturnu i istorijsku baštinu, sa brojnim spomenicima iz srednjeg veka, manastirima i tradicionalnim manifestacijama koje odražavaju duh i običaje lokalnog stanovništva.
                  </p>
                  <p>
                    Privreda okruga se bazira na poljoprivredi, prerađivačkoj industriji i zanatstvu. Prirodne lepote, kao što su planinski pejzaži, reke i šumske površine, čine ovaj region privlačnim za turizam i ekološke aktivnosti.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Život počinje na kraju vaše zone komfora. (Nil Donald Valš)
              </blockquote>
            </section>


          </>
        )
        :
        (
          <>

            <section className="gnjilanski okrug" lang="en">
              <h1>Gnjilane District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 1,200 km²
                </p>
                <p>
                  <strong>Population: </strong>around 90,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Hilly and mountainous areas, Binačka Morava river, fertile valleys, forest expanses, and diverse flora and fauna.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The <strong>Gnjilane District</strong> is located in the eastern part of Serbia, encompassing cities and municipalities such as <strong>Gnjilane</strong>, <strong>Vitina</strong>, and <strong>Kosovska Kamenica</strong>. The administrative center is the city of <strong>Gnjilane</strong>. According to the latest census, the district has around 54,000 inhabitants.
                  </p>
                  <p>
                    The district is characterized mostly by hilly and mountainous terrain, through which the <strong>Binačka Morava</strong> river flows. The region is known for fertile valleys suitable for agricultural production, especially vegetable growing, fruit farming, and livestock breeding.
                  </p>
                  <p>
                    The <strong>Gnjilane District</strong> has a rich cultural and historical heritage, with numerous medieval monuments, monasteries, and traditional events reflecting the spirit and customs of the local population.
                  </p>
                  <p>
                    The economy of the district is based on agriculture, manufacturing industry, and crafts. Natural beauties, such as mountain landscapes, rivers, and forested areas, make this region attractive for tourism and ecological activities.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Life begins at the end of your comfort zone. (Neal Donald Walsch)
              </blockquote>
            </section>

          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          <div className="caruoselClass" style={{ padding: "0" }}>
            {gnjilanskiOkrugData?.map((okrug, index) => (
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


export default GnjilanskiOkrug;