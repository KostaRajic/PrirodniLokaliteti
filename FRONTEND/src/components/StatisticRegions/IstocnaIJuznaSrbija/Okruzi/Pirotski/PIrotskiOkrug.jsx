import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { pirotskiOkrugData } from "./PirotskiOkrugData";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const PirotskiOkrug = () => {
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
    setSlide(slide === pirotskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? pirotskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Pirot") {
      navigate(pirotskiOkrugPathRoutes.pirot(switchLanguage))
    } else if (name === 'Nacionalni Park "Stara Planina"') {
      navigate(pirotskiOkrugPathRoutes.staraPlanina(switchLanguage))
    } else if (name === 'Zavojsko jezero') {
      navigate(pirotskiOkrugPathRoutes.zavojskoJezero(switchLanguage))
    } else if (name === 'Vodopad Tupavica') {
      navigate(pirotskiOkrugPathRoutes.vodopadTupavica(switchLanguage))
    } else if (name === 'Manastir Sukovo') {
      navigate(pirotskiOkrugPathRoutes.manastirSukovo(switchLanguage))
    } else if (name === 'Vodopad Bigar') {
      navigate(pirotskiOkrugPathRoutes.vodopadBigar(switchLanguage))
    } else if (name === 'Kanjon reke Jerme') {
      navigate(pirotskiOkrugPathRoutes.jerma(switchLanguage))
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
      {switchLanguage == 'rs' ?
        (
          <>

            <section className="pirotski okrug" lang="sr">
              <h1>Pirotski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 3.838 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 160.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Planinski i brdoviti predeli, reke Morava i Nišava, bogat prirodni resursi, plodno zemljište, razvijena poljoprivreda, stočarstvo i tekstilna industrija.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Pirotski okrug</strong> se nalazi na jugoistoku Srbije i poznat je po bogatoj tradiciji, prirodnim lepotama i značajnim kulturnim spomenicima. Ovaj okrug obuhvata grad Pirot kao najveći administrativni i ekonomski centar, i opštine Babušnica, Dimitrovgrad i Bela Palanka.
                  </p>
                  <p>
                    Grad Pirot je poznat po svojoj tradiciji u izradi čuvenih Pirotskih ćilima i drugih tekstilnih proizvoda. Osim toga, okrug ima razvijeno stočarstvo i poljoprivredu, a proizvodi poput sira, mesa i povrća imaju značajnu poziciju na domaćem tržištu.
                  </p>
                  <p>
                    Među prirodnim lepotama ističe se Nacionalni park Stara Planina, sa brojnim planinskim vrhovima, rekama i jezerima. Stara Planina je idealna destinacija za ljubitelje prirode, planinarenja i zimskih sportova.
                  </p>
                  <p>
                    Okrug je domaćin i nekoliko kulturnih manifestacija, među kojima se ističe <em>sajam Pirotskih peglanih kobasica</em>. Pored toga, bogata kulturno-istorijska baština uključuje brojne crkve, manastire i arheološka nalazišta.
                  </p>
                  <p>
                    Pirotski okrug predstavlja spoj tradicije, prirode i savremenih industrijskih i poljoprivrednih aktivnosti, čineći ga važnim delom Srbije.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Sa godinama dolazi mudrost, a sa putovanjima dolazi razumevanje. (Sandra Lejk)
              </blockquote>
            </section>


          </>
        )
        :
        (
          <>

            <section className="pirotski okrug" lang="en">
              <h1>Pirot District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 3,838 km²
                </p>
                <p>
                  <strong>Population: </strong>around 160,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Mountainous and hilly terrain, the Morava and Nišava rivers, rich natural resources, fertile land, developed agriculture, livestock farming, and textile industry.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>Pirot District</strong> is located in southeastern Serbia and is known for its rich traditions, natural beauty, and significant cultural monuments. The district includes the city of Pirot as the main administrative and economic center, as well as the municipalities of Babušnica, Dimitrovgrad, and Bela Palanka.
                  </p>
                  <p>
                    The city of Pirot is famous for its tradition of producing the renowned Pirot kilims and other textile products. In addition, the district has a well-developed livestock and agricultural sector, with products such as cheese, meat, and vegetables holding a notable position in the domestic market.
                  </p>
                  <p>
                    Among its natural attractions, the Stara Planina National Park stands out, with numerous mountain peaks, rivers, and lakes. Stara Planina is an ideal destination for nature lovers, hiking, and winter sports.
                  </p>
                  <p>
                    The district also hosts several cultural events, most notably the <em>Pirot Sausage Fair</em>. Moreover, its rich cultural and historical heritage includes many churches, monasteries, and archaeological sites.
                  </p>
                  <p>
                    Pirot District represents a blend of tradition, nature, and modern industrial and agricultural activities, making it an important part of Serbia.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                With age comes wisdom, and with travel comes understanding. (Sandra Lake)
              </blockquote>
            </section>

          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {pirotskiOkrugData?.map((okrug, index) => (
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


export default PirotskiOkrug;