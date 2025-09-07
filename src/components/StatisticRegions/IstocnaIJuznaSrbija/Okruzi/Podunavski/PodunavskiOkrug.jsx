import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { podunavskiOkrugData } from "./PodunavskiOkrugData";
import { podunavskiOkrugPathRoutes } from "./PodunavskiOkrugPathRouts";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const PodunavskiOkrug = () => {
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
    setSlide(slide === podunavskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? podunavskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Smederevo") {
      navigate(podunavskiOkrugPathRoutes.smederevo(switchLanguage));
    } else if (name === "Manastir Pokajnica") {
      navigate(podunavskiOkrugPathRoutes.manastirPokajnica(switchLanguage));
    } else if (name === "Smederevska tvrdjava") {
      navigate(podunavskiOkrugPathRoutes.smedervskaTvrdjava(switchLanguage));
    } else if (name === "Radovanjski Lug") {
      navigate(podunavskiOkrugPathRoutes.radovanjskiLug(switchLanguage));
    } else if (name === "Manastir Koporin") {
      navigate(podunavskiOkrugPathRoutes.manastirKoporin(switchLanguage));
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.IstocnaSrbijaTekstModal(switchLanguage))}
          style={{ fill: "white" }}
        />
      </header>

      {switchLanguage === 'rs' ?
        (
          <>

            <section className="podunavski okrug" lang="sr">
              <h1>Podunavski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 1.248 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 200.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Ravničarski i brežuljkasti predeli, reke Dunav i Velika Morava, plodno zemljište pogodno za poljoprivredu i vinogradarstvo, razvijena industrija i rečni saobraćaj.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    Podunavski okrug se nalazi u centralnom delu Srbije, uz obale Dunava, i obuhvata područja bogata prirodnim lepotama i istorijskim znamenitostima. Ovaj okrug uključuje gradove Smederevo, Požarevac i Veliku Planu, koji su važni administrativni, ekonomski i kulturni centri.
                  </p>
                  <p>
                    Smederevo je poznato po svojoj istorijskoj tvrđavi, nekadašnjoj prestonici Srbije u srednjem veku, dok je Požarevac značajan kao kulturno središte i mesto održavanja Ljubičevskih konjičkih igara.
                  </p>
                  <p>
                    Podunavski okrug je poznat po bogatoj poljoprivredi, naročito vinogradima i voćnjacima, a vina iz ovog kraja su prepoznata širom regiona. Privreda se oslanja na industriju, trgovinu i rečni transport zahvaljujući Dunavu, koji omogućava vezu sa evropskim tržištima.
                  </p>
                  <p>
                    Turistički potencijali ovog okruga obuhvataju znamenitosti poput Smederevske tvrđave, Viminacijuma – arheološkog nalazišta iz rimskog doba, kao i prirodnih lepota poput obala Dunava koje pružaju mogućnosti za rekreaciju, ribolov i nautički turizam.
                  </p>
                  <p>
                    Pored toga, brojni kulturni događaji i manifestacije, poput Smederevske jeseni, privlače posetioce i doprinose očuvanju tradicije i lokalnog identiteta. Podunavski okrug nudi spoj istorije, prirode i savremenog načina života, čineći ga značajnim delom Srbije.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Putnici nikad ne pomisle da su stranci. (Mason Kolej)
              </blockquote>
            </section>


          </>
        )
        :
        (
          <>

            <section className="podunavski okrug" lang="en">
              <h1>Danube District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 1,248 km²
                </p>
                <p>
                  <strong>Population: </strong>around 200,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Flat and hilly terrain, the Danube and Great Morava rivers, fertile land suitable for agriculture and viticulture, developed industry and river transport.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The Danube District is located in the central part of Serbia along the banks of the Danube River and encompasses areas rich in natural beauty and historical landmarks. This district includes the cities of Smederevo, Požarevac, and Velika Plana, which are important administrative, economic, and cultural centers.
                  </p>
                  <p>
                    Smederevo is known for its historic fortress, once the capital of Serbia in the Middle Ages, while Požarevac is significant as a cultural center and the site of the Ljubicevske Equestrian Games.
                  </p>
                  <p>
                    The Danube District is renowned for its rich agriculture, especially vineyards and orchards, with wines from this region recognized throughout the area. The economy relies on industry, trade, and river transport thanks to the Danube, which provides a connection to European markets.
                  </p>
                  <p>
                    Tourist attractions in this district include landmarks such as the Smederevo Fortress, Viminacium – an archaeological site from the Roman era, as well as natural beauties like the Danube riverbanks offering opportunities for recreation, fishing, and nautical tourism.
                  </p>
                  <p>
                    Additionally, numerous cultural events and festivals, such as Smederevo Autumn, attract visitors and contribute to preserving the tradition and local identity. The Danube District offers a blend of history, nature, and modern lifestyle, making it an important part of Serbia.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Travelers never think of themselves as strangers. (Mason Cooley)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {podunavskiOkrugData?.map((okrug, index) => (
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


export default PodunavskiOkrug;