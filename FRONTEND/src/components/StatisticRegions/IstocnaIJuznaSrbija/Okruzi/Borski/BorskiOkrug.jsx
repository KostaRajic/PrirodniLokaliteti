import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { borskiOkrugData } from "./BorskiOkrugData";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const BorskiOkrug = () => {
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
    setSlide(
      slide === borskiOkrugData.length - 1 ? 0 : (prev) => prev + 1
    );
  };

  const prevContent = () => {
    setSlide(
      slide === 0 ? borskiOkrugData.length - 1 : (prev) => prev - 1
    );
  };


  const readMore = (name) => {
    if (name === "Bor") {
      return navigate(borskiOkrugPathRoutes.bor(switchLanguage));
    } else if (name === "Đerdapska Klisura") {
      return navigate(borskiOkrugPathRoutes.djerdapskaKlisura(switchLanguage))
    } else if (name === "Lazarev Kanjon") {
      return navigate(borskiOkrugPathRoutes.lazarevKanjon(switchLanguage))
    } else if (name === "Lazareva Pećina") {
      return navigate(borskiOkrugPathRoutes.lazarevaPecina(switchLanguage))
    } else if (name === "Borsko Jezero") {
      return navigate(borskiOkrugPathRoutes.borskoJezero(switchLanguage))
    } else if (name === "Lepenski Vir") {
      return navigate(borskiOkrugPathRoutes.lepenskiVir(switchLanguage))
    } else if (name === "Rajkova Pećina") {
      return navigate(borskiOkrugPathRoutes.rajkovaPecina(switchLanguage))
    } else if (name === "Kanjon reke Vratna i Zamna") {
      return navigate(borskiOkrugPathRoutes.vratnaizamna(switchLanguage))
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

            <section className="borski okrug" lang="sr">
              <h1>Borski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 3.507 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 120.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Planinsko-brdoviti predeli, reke Dunav, Timok i Pek, bogati rudarski resursi, guste šume, termalni izvori i značajna prirodna nalazišta.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Borski okrug</strong> se nalazi u istočnom delu Srbije i poznat je po svojim prirodnim bogatstvima, rudarskoj industriji i turističkim atrakcijama. Ovaj okrug obuhvata gradove <strong>Bor</strong>, <strong>Majdanpek</strong>, <strong>Kladovo</strong> i <strong>Negotin</strong>, koji su važni ekonomski, industrijski i kulturni centri.
                  </p>
                  <p>
                    Grad <strong>Bor</strong> je poznat po jednoj od najvećih rudarskih i metalurških industrija u regionu, dok <strong>Majdanpek</strong> ima dugu tradiciju rudarstva i prerade metala. <strong>Kladovo</strong>, smešteno na obali Dunava, značajan je zbog hidroelektrane Đerdap, koja predstavlja jednu od najvećih u Evropi.
                  </p>
                  <p>
                    Prirodne lepote Borskog okruga uključuju Nacionalni park Đerdap, Lazarevu pećinu, Stol i Deli Jovan, koji su popularne destinacije za planinarenje i istraživanje. <strong>Negotin</strong> je poznat po vinogradima i vinskoj tradiciji, dok blizina rumunske granice doprinosi ekonomskim i kulturnim vezama sa susednim državama.
                  </p>
                  <p>
                    Ovaj okrug obiluje termalnim izvorima i arheološkim lokalitetima, poput Trajanove table, koje privlače veliki broj turista. Industrija, poljoprivreda, turizam i energetika čine osnovu privrede ovog kraja, dok manifestacije poput Negotinske berbe promovišu tradiciju i lokalnu kulturu.
                  </p>
                  <p>
                    <strong>Borski okrug</strong> predstavlja spoj industrijske moći, prirodnih lepota i bogate istorije, čineći ga jednim od značajnijih područja u Srbiji.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Jednom godišnje, posetite neko mesto na kome nikada do tada niste bili. (Dalaj Lama)
              </blockquote>
            </section>

          </>
        )
        :
        (
          <>

            <section className="borski okrug" lang="en">
              <h1>Bor District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>about 3,507 km²
                </p>
                <p>
                  <strong>Population: </strong>approximately 120,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Mountainous and hilly terrain, rivers Danube, Timok, and Pek, rich mining resources, dense forests, thermal springs, and significant natural sites.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>Bor District</strong> is located in the eastern part of Serbia and is known for its natural wealth, mining industry, and tourist attractions. This district includes the cities of <strong>Bor</strong>, <strong>Majdanpek</strong>, <strong>Kladovo</strong>, and <strong>Negotin</strong>, which are important economic, industrial, and cultural centers.
                  </p>
                  <p>
                    The city of <strong>Bor</strong> is famous for one of the largest mining and metallurgical industries in the region, while <strong>Majdanpek</strong> has a long tradition of mining and metal processing. <strong>Kladovo</strong>, located on the banks of the Danube, is notable for the Đerdap Hydroelectric Power Plant, which is one of the largest in Europe.
                  </p>
                  <p>
                    Natural beauties of Bor District include the Đerdap National Park, Lazareva Cave, Stol, and Deli Jovan, which are popular destinations for hiking and exploration. <strong>Negotin</strong> is known for its vineyards and wine tradition, while its proximity to the Romanian border contributes to economic and cultural ties with neighboring countries.
                  </p>
                  <p>
                    This district abounds in thermal springs and archaeological sites, such as Trajan’s Tablet, attracting a large number of tourists. Industry, agriculture, tourism, and energy form the basis of the region’s economy, while events like the Negotin Grape Harvest Festival promote tradition and local culture.
                  </p>
                  <p>
                    <strong>Bor District</strong> represents a blend of industrial strength, natural beauty, and rich history, making it one of the most significant regions in Serbia.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Visit a place you’ve never been once a year. (Dalai Lama)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {borskiOkrugData?.map((okrug, index) => (
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

export default BorskiOkrug;