import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { srednjeBanatskiData } from "./SrednjeBanatskiData";
import { srednjeBanatskiPathRoutes } from "./SrednjeBanatskiPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const SrednjeBanatski = () => {
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
    setSlide(slide === srednjeBanatskiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? srednjeBanatskiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Zrenjanin") {
      navigate(srednjeBanatskiPathRoutes.zrenjanin(switchLanguage));
    } else if (name === "Novi Bečej") {
      navigate(srednjeBanatskiPathRoutes.noviBecej(switchLanguage));
    } else if (name === 'Specijalni rezervat prirode "Slano kopovo"') {
      navigate(srednjeBanatskiPathRoutes.slanoKopovo(switchLanguage));
    } else if (name === "Park prirode “Stara Tisa“ kod Bisernog ostrva") {
      navigate(srednjeBanatskiPathRoutes.staraTisa(switchLanguage));
    } else if (name === "Kupalište Peskara") {
      navigate(srednjeBanatskiPathRoutes.kupalistePeskara(switchLanguage));
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
      {switchLanguage === 'rs' ?
        (
          <>
            <section className="srednjeBanatski okrug" lang="sr">
              <h1>Srednje - Banatski okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 4.030 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 180.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Pretežno ravničarski pejzaž sa plodnim zemljištem, brojnim rekama i jezerima, pogodna teritorija za poljoprivrednu proizvodnju, naročito za uzgoj žitarica, povrća i stočarstvo.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Srednje-banatski okrug</strong> je jedan od sedam okruga u Vojvodini, smešten u centralnom delu regiona Banata. Glavni grad okruga je <strong>Zrenjanin</strong>, koji je administrativno, ekonomsko i kulturno središte ovog regiona.
                  </p>
                  <p>
                    Pored Zrenjanina, u okrug spadaju i gradovi <strong>Kikinda</strong>, <strong>Novi Bečej</strong> i opštine kao što su <strong>Žitište</strong>, <strong>Sečanj</strong> i drugi. Okrug je prepoznatljiv po svojoj bogatoj poljoprivredi, koja je ključna ekonomska grana, kao i industrijskom sektoru koji se razvija.
                  </p>
                  <p>
                    Region je domaćin brojnim etničkim grupama, među kojima su <strong>Srbi</strong>, <strong>Mađari</strong>, <strong>Romi</strong> i drugi, što doprinosi njegovom multikulturalnom identitetu.
                  </p>
                  <p>
                    Srednje-banatski okrug se može pohvaliti i prirodnim lepotama, kao što su brojne reke, kanali, jezera i prirodni rezervati, koji čine regiju atraktivnom za turizam. Posetioci mogu uživati u <strong>biciklizmu</strong>, <strong>ribolovu</strong>, <strong>planinarenju</strong>, ali i istraživanju istorijskih i kulturnih spomenika.
                  </p>
                  <p>
                    Poljoprivreda je osnovna ekonomska grana, dok turizam nudi mogućnosti za uživanje u prirodi i istraživanju tradicija i običaja ovog kraja. Srednje-banatski okrug je odlična destinacija za ljubitelje prirode, istorije i kulturnih manifestacija.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Putovanje je mnogo više od razgledanja spomenika, to je duboka i trajna promena ideje življenja. (Miriam Beard)
              </blockquote>
            </section>
          </>
        )
        :
        (
          <>
            <section className="srednjeBanatski okrug" lang="en">
              <h1>Central Banat District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 4,030 km²
                </p>
                <p>
                  <strong>Population: </strong>around 180,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Mainly flat terrain with fertile land, numerous rivers and lakes; a favorable area for agricultural production, especially for growing grains, vegetables, and livestock farming.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The <strong>Central Banat District</strong> is one of the seven districts in Vojvodina, located in the central part of the Banat region. The main city of the district is <strong>Zrenjanin</strong>, which serves as the administrative, economic, and cultural center of the region.
                  </p>
                  <p>
                    In addition to Zrenjanin, the district includes towns such as <strong>Kikinda</strong>, <strong>Novi Bečej</strong>, and municipalities like <strong>Žitište</strong>, <strong>Sečanj</strong>, and others. The district is known for its rich agriculture, which is the main economic sector, as well as for its developing industrial sector.
                  </p>
                  <p>
                    The region is home to many ethnic groups, including <strong>Serbs</strong>, <strong>Hungarians</strong>, <strong>Roma</strong>, and others, contributing to its multicultural identity.
                  </p>
                  <p>
                    Central Banat District also boasts natural beauty, such as numerous rivers, canals, lakes, and nature reserves, making it attractive for tourism. Visitors can enjoy <strong>cycling</strong>, <strong>fishing</strong>, <strong>hiking</strong>, as well as exploring historical and cultural landmarks.
                  </p>
                  <p>
                    Agriculture is the primary economic branch, while tourism offers opportunities to enjoy nature and explore the traditions and customs of this region. The Central Banat District is an excellent destination for nature lovers, history enthusiasts, and those interested in cultural events.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Travel is more than the seeing of sights; it is a deep and permanent change in the ideas of living. (Miriam Beard)
              </blockquote>
            </section>

          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: '0' }}>
          {srednjeBanatskiData?.map((okrug, index) => (
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


export default SrednjeBanatski;