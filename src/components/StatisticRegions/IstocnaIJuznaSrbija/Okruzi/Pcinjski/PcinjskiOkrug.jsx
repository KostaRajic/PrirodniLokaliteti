import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { pcinjskiOkrugData } from "./PcinjskiOkrugData";
import { pcinjskiOkrugPathRoutes } from "./PcinjskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const PcinjskiOkrug = () => {
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
    setSlide(slide === pcinjskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? pcinjskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Vranje') {
      navigate(pcinjskiOkrugPathRoutes.vranje(switchLanguage))
    } else if (name === 'Vlasinsko jezero') {
      navigate(pcinjskiOkrugPathRoutes.vlasinskoJezero(switchLanguage))
    } else if (name === 'Planina Besna Kobila') {
      navigate(pcinjskiOkrugPathRoutes.besnaKobila(switchLanguage))
    } else if (name === 'Manastir Prohora Pčinjskog') {
      navigate(pcinjskiOkrugPathRoutes.prohorPcinjski(switchLanguage))
    } else if (name === 'Planina Kukavica') {
      navigate(pcinjskiOkrugPathRoutes.planinaKukavica(switchLanguage))
    } else if (name === 'Planina Čermenik') {
      navigate(pcinjskiOkrugPathRoutes.planinaCemernik(switchLanguage))
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

            <section className="pcinjski okrug" lang="sr">
              <h1>Pčinjski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 3.520 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 193.802
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Ravničarski i brdoviti predeli, reke Pčinja i Vlasina, plodno zemljište pogodno za poljoprivredu, razvijena poljoprivreda, industrija i turizam.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
               {showArticle ? (switchLanguage === 'rs' ?  'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ?  'Pokaži više' : 'Show more') }
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Pčinjski okrug</strong> se nalazi u južnom delu Srbije, obuhvatajući grad Vranje i opštine Bujanovac, Preševo, Bosilegrad, Surdulica, Vladičin Han, Trgovište i Bujanovac. Sedište okruga je grad Vranje. Prema poslednjem popisu iz 2022. godine, u okrugu živi 193.802 stanovnika.
                  </p>
                  <p>
                    Okrug je poznat po razvijenoj poljoprivredi, naročito u proizvodnji žitarica, povrća i voća. Takođe, vina iz ovog kraja su prepoznata i popularna u regionu. Okrug se oslanja na poljoprivredu, ali i na turizam, jer prirodne lepote, termalne vode i arheološka nalazišta privlače brojne posetioce.
                  </p>
                  <p>
                    Među važnijim turističkim atrakcijama su termalne banje, kao što je Vranjska banja, i arheološka nalazišta, uključujući i utvrđenja iz rimskog i srednjeg veka.
                  </p>
                  <p>
                    Okrug je poznat po kulturnim manifestacijama, među kojima se izdvaja <em>"Dani Vranja"</em>, koja slavi tradiciju i običaje ovog kraja.
                  </p>
                  <p>
                    Pčinjski okrug spaja istoriju, prirodu i savremeni način života, čineći ga jedinstvenim delom Srbije.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Bolje je doživeti nešto jednom nego slušati o tome 1000 puta. (Azian Proverb)
              </blockquote>
            </section>


          </>
        )
        :
        (
          <>

            <section className="pcinjski okrug" lang="en">
              <h1>Pčinja District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 3,520 km²
                </p>
                <p>
                  <strong>Population: </strong>approximately 193,802
                </p>
                <p>
                  <strong>Geographical features: </strong>Plains and hilly areas, the Pčinja and Vlasina rivers, fertile land suitable for agriculture, developed agriculture, industry, and tourism.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ?  'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ?  'Pokaži više' : 'Show more') }
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The <strong>Pčinja District</strong> is located in the southern part of Serbia, encompassing the city of Vranje and the municipalities of Bujanovac, Preševo, Bosilegrad, Surdulica, Vladičin Han, Trgovište, and Bujanovac. The district seat is the city of Vranje. According to the latest census in 2022, the district has a population of 193,802.
                  </p>
                  <p>
                    The district is known for its developed agriculture, especially in the production of cereals, vegetables, and fruits. Also, wines from this region are recognized and popular in the area. The district relies on agriculture but also on tourism, as natural beauties, thermal waters, and archaeological sites attract numerous visitors.
                  </p>
                  <p>
                    Among the most important tourist attractions are thermal spas, such as Vranjska Banja, and archaeological sites, including fortifications from the Roman and medieval periods.
                  </p>
                  <p>
                    The district is known for cultural events, among which <em>"Days of Vranje"</em> stands out, celebrating the traditions and customs of this region.
                  </p>
                  <p>
                    Pčinja District combines history, nature, and modern way of life, making it a unique part of Serbia.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                It is better to experience something once than to hear about it a thousand times. (Asian Proverb)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {pcinjskiOkrugData?.map((okrug, index) => (
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


export default PcinjskiOkrug;