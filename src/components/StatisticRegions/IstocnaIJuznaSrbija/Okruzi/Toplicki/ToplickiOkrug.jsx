import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { toplickiOkrugData } from "./toplickiOkrugData";
import { toplickiOkurgPathRoutes } from "./ToplickiOkurgPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const ToplickiOkrug = () => {
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
    setSlide(slide === toplickiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? toplickiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Prokuplje") {
      navigate(toplickiOkurgPathRoutes.prokuplje(switchLanguage))
    } else if (name === "Đavolja Varoš") {
      navigate(toplickiOkurgPathRoutes.djavoljaVaros(switchLanguage))
    } else if (name === "Planina Jastrebac") {
      navigate(toplickiOkurgPathRoutes.jastrebac(switchLanguage))
    } else if (name === "Tvrđava Hisar") {
      navigate(toplickiOkurgPathRoutes.hisar(switchLanguage))
    } else if (name === "Manastir Svetog Nikole") {
      navigate(toplickiOkurgPathRoutes.manastirSvetogNikole(switchLanguage))
    } else if (name === "Planina Radan") {
      navigate(toplickiOkurgPathRoutes.planinaRadan(switchLanguage))
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

            <section className="toplicki okrug" lang="sr">
              <h1>Toplički Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 3.486 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 190.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Ravničarski i brežuljkasti predeli, reke Morava i Toplica, plodno zemljište pogodno za poljoprivredu, razvijena poljoprivreda, industrija i turizam.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {!isMobile && showArticle &&
                <article lang="sr">
                  <p>
                    Toplički okrug se nalazi u južnom delu Srbije, obuhvata područje bogato prirodnim lepotama, istorijskim spomenicima i kulturnim znamenitostima. Ovaj okrug uključuje gradove Prokuplje, Kuršumliju i Blace, koji su značajni administrativni, ekonomski i kulturni centri.
                  </p>
                  <p>
                    Prokuplje je najpoznatiji grad u okrugu, poznat po svojoj istorijskoj tradiciji i značaju, dok Kuršumlija ima bogatu istoriju i brojne spomenike iz prošlih vekova.
                  </p>
                  <p>
                    Toplički okrug je poznat po razvijenoj poljoprivredi, naročito u proizvodnji žitarica, povrća i voća. Takođe, vina iz ovog kraja su prepoznata i popularna u regionu.
                  </p>
                  <p>
                    Okrug se oslanja na poljoprivredu, ali i na turizam, jer prirodne lepote, termalne vode i arheološka nalazišta privlače brojne posetioce. Među važnijim turističkim atrakcijama su termalne banje, kao što je Banja Niš, i arheološka nalazišta, uključujući i utvrđenja iz rimskog i srednjeg veka.
                  </p>
                  <p>
                    Okrug je poznat po kulturnim manifestacijama, među kojima se izdvaja Prokupačka jesen, koja slavi tradiciju i običaje ovog kraja. Toplički okrug spaja istoriju, prirodu i savremeni način života, čineći ga jedinstvenim delom Srbije.
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

            <section className="toplicki okrug" lang="en">
              <h1>Toplica District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>about 3,486 km²
                </p>
                <p>
                  <strong>Population: </strong>approximately 190,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Flat and hilly terrain, the Morava and Toplica rivers, fertile land suitable for agriculture, developed agriculture, industry, and tourism.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    Toplica District is located in the southern part of Serbia, encompassing an area rich in natural beauty, historical monuments, and cultural landmarks. This district includes the cities of Prokuplje, Kuršumlija, and Blace, which are significant administrative, economic, and cultural centers.
                  </p>
                  <p>
                    Prokuplje is the best-known city in the district, known for its historical tradition and importance, while Kuršumlija has a rich history and numerous monuments from past centuries.
                  </p>
                  <p>
                    Toplica District is known for its developed agriculture, especially in the production of grains, vegetables, and fruits. Also, wines from this region are recognized and popular throughout the area.
                  </p>
                  <p>
                    The district relies on agriculture, but also on tourism, as natural beauties, thermal waters, and archaeological sites attract many visitors. Important tourist attractions include thermal spas such as Banja Niš and archaeological sites, including fortifications from Roman and medieval times.
                  </p>
                  <p>
                    The district is known for cultural events, among which Prokuplje Autumn stands out, celebrating the traditions and customs of this region. Toplica District combines history, nature, and modern lifestyle, making it a unique part of Serbia.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Life is short and the world is wide; the sooner you start exploring it, the better. (Simon Raven)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {toplickiOkrugData?.map((okrug, index) => (
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


export default ToplickiOkrug;