import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { djakovickiOkrugData } from "./DjakovickiOkurgData";
import { djakovickiOkrugPathRoutes } from "./DjakovickiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const DjakovickiOkrug = () => {
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
    setSlide(slide === djakovickiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? djakovickiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Đakovica") {
      navigate(djakovickiOkrugPathRoutes.djakovica(switchLanguage))
    } else if (name === "Manastir Visoki Dečani") {
      navigate(djakovickiOkrugPathRoutes.decani(switchLanguage))
    } else if (name === "Planina Prokletije") {
      navigate(djakovickiOkrugPathRoutes.prokletije(switchLanguage))
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

            <section className="djakovicki okrug" lang="rs">
              <h1>Đakovički Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 2.500 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 100.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Ravne i brdovite oblasti, reka Beli Drim, brojni kanali, plodne ravnice i bogata poljoprivreda.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="rs">
                  <p>
                    <strong>Đakovički okrug</strong> se nalazi u jugozapadnom delu Srbije, obuhvatajući gradove i opštine kao što su <strong>Đakovica</strong>, <strong>Dečani</strong>, <strong>Orahovac</strong> i <strong>Junik</strong>.
                  </p>
                  <p>
                    Sedište okruga je grad <strong>Đakovica</strong>. Prema poslednjem popisu, u okrugu živi oko 100.000 stanovnika.
                  </p>
                  <p>
                    Okrug je poznat po ravničarskim i brdovitim predelima, kao i po velikim rekama, među kojima je najvažnija <strong>reka Morava</strong>. Region obiluje plodnim ravnicama koje su pogodne za poljoprivredu, naročito za proizvodnju žitarica, povrća i vinove loze.
                  </p>
                  <p>
                    <strong>Đakovički okrug</strong> se takođe odlikuje bogatom kulturnom baštinom i istorijskim značajem. Gradovi u ovom okrugu domaćini su brojnim manifestacijama i kulturnim događanjima koji ističu tradiciju i običaje ovog kraja.
                  </p>
                  <p>
                    Okrug ima značajnu ulogu u privredi, sa razvijenim poljoprivrednim sektorom i industrijskim kapacitetima.
                  </p>
                  <p>
                    Prirodne lepote, kao što su reke, šume i brdoviti predeli, čine ovu oblast atraktivnom za turiste, posebno ljubitelje prirode i etno-turizma.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Najveći rizik od svih je provesti život ne radeći ono što želite, misleći kako ćete kasnije moći da kupite slobodu kako biste to činili. (Radni Komisar)
              </blockquote>
            </section>


          </>
        )
        :
        (
          <>

            <section className="djakovicki okrug" lang="en">
              <h1>Đakovica District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 2,500 km²
                </p>
                <p>
                  <strong>Population: </strong>around 100,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Flat and hilly areas, the White Drin River, numerous canals, fertile plains, and rich agriculture.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>The Đakovica District</strong> is located in the southwestern part of Serbia, encompassing cities and municipalities such as <strong>Đakovica</strong>, <strong>Dečani</strong>, <strong>Orahovac</strong>, and <strong>Junik</strong>.
                  </p>
                  <p>
                    The administrative center of the district is the city of <strong>Đakovica</strong>. According to the latest census, the district has a population of around 100,000.
                  </p>
                  <p>
                    The district is known for its flat and hilly landscapes, as well as for large rivers, the most significant being the <strong>Morava River</strong>. The region is rich in fertile plains, ideal for agriculture—especially for growing grains, vegetables, and vineyards.
                  </p>
                  <p>
                    <strong>The Đakovica District</strong> is also distinguished by its rich cultural heritage and historical importance. Cities in the district host numerous events and cultural manifestations that celebrate the traditions and customs of the area.
                  </p>
                  <p>
                    The district plays an important role in the economy, with a developed agricultural sector and industrial capacities.
                  </p>
                  <p>
                    Natural beauties such as rivers, forests, and hilly terrain make this area attractive to tourists, especially nature lovers and those interested in ethno-tourism.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                The greatest risk of all is spending your life not doing what you want, thinking you can buy the freedom to do it later. (Randy Komisar)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {djakovickiOkrugData?.map((okrug, index) => (
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


export default DjakovickiOkrug;