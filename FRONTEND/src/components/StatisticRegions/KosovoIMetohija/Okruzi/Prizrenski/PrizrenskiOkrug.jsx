import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { prizrenskiOkrugData } from "./PrizrenskiOkrugData";
import { prizrenskiOkrugPathRoutes } from "./PrizrenskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const PrizrenskiOkrug = () => {
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
    setSlide(slide === prizrenskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? prizrenskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Prizren") {
      navigate(prizrenskiOkrugPathRoutes.prizren(switchLanguage))
    } else if (name === "Manastir Svetih Arhangela") {
      navigate(prizrenskiOkrugPathRoutes.manastirSvetihArhangela(switchLanguage))
    } else if (name === "Vodopad Miruša") {
      navigate(prizrenskiOkrugPathRoutes.vodopadMirusa(switchLanguage))
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

            <section className="prizrenski okrug" lang="sr">
              <h1>Prizrenski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 2.000 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 300.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Planinske oblasti, reke Bistrica i Lepenac, šumski predeli, plodne doline i bogata istorijska i kulturna baština.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Prizrenski okrug</strong> se nalazi u južnom delu Srbije i obuhvata grad Prizren, koji je kulturni i istorijski centar ovog regiona, kao i opštine Prizren, Suva Reka, Orahovac i druga manja naselja. Sedište okruga je grad Prizren, prepoznatljiv po svojoj bogatoj istoriji i tradiciji.
                  </p>
                  <p>
                    Prema poslednjem popisu, u okrugu živi oko 300.000 stanovnika. Geografski, okrug se prostire kroz planinske i brdovite predele, dok reke Bistrica i Lepenac čine važnu vodnu mrežu ovog regiona.
                  </p>
                  <p>
                    Okrug se odlikuje plodnim dolinama pogodnim za poljoprivredu, posebno za proizvodnju voća, povrća i vinove loze. Takođe, regija je bogata šumama koje su od velikog značaja za ekosistem.
                  </p>
                  <p>
                    Prizrenski okrug je poznat po svojoj kulturnoj baštini i istorijskim spomenicima, a grad Prizren je dom brojnim verskim objektima, manastirima i džamijama. Okrug je domaćin različitim kulturnim događanjima, festivalima i manifestacijama, a tradicija i običaji ovog kraja često se prikazuju kroz umetnost i muziku.
                  </p>
                  <p>
                    Prizren je, osim toga, popularna turistička destinacija, koja nudi istorijske spomenike, muzeje, galerije i prirodne lepote. Okrug je važan i za privredu Kosova, s razvijenim poljoprivrednim sektorom i trgovinom, a planinske oblasti i prirodne lepote čine ga atraktivnim za ekološki i avanturistički turizam.
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

            <section className="prizrenski okrug" lang="en">
              <h1>Prizren District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 2,000 km²
                </p>
                <p>
                  <strong>Population: </strong>around 300,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Mountainous areas, the Bistrica and Lepenac rivers, forested landscapes, fertile valleys, and rich historical and cultural heritage.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>The Prizren District</strong> is located in the southern part of Serbia and includes the city of Prizren, which is the cultural and historical center of the region, as well as the municipalities of Prizren, Suva Reka, Orahovac, and other smaller settlements. The administrative center is the city of Prizren, known for its rich history and tradition.
                  </p>
                  <p>
                    According to the latest census, the district has a population of about 300,000. Geographically, it spans mountainous and hilly terrain, while the Bistrica and Lepenac rivers form an important water network in the region.
                  </p>
                  <p>
                    The district is characterized by fertile valleys suitable for agriculture, especially for the production of fruits, vegetables, and grapes. The region is also rich in forests that are vital to the ecosystem.
                  </p>
                  <p>
                    The Prizren District is known for its cultural heritage and historical monuments, and the city of Prizren is home to many religious buildings, monasteries, and mosques. The district hosts various cultural events, festivals, and manifestations, and the traditions and customs of the area are often showcased through art and music.
                  </p>
                  <p>
                    In addition, Prizren is a popular tourist destination offering historical landmarks, museums, galleries, and natural beauty. The district is also important for Kosovo’s economy, with a developed agricultural sector and trade, while the mountainous areas and natural attractions make it appealing for ecological and adventure tourism.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                The greatest risk of all is spending your life not doing what you want, hoping you can buy the freedom to do it later. (Randy Komisar)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          <div className="caruoselClass" style={{ padding: "0" }}>
            {prizrenskiOkrugData?.map((okrug, index) => (
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


export default PrizrenskiOkrug;