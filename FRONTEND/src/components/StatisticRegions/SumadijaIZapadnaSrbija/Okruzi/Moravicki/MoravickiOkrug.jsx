import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { moravickiOkrugData } from "./moravickiOkrugData";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const MoravickiOkrug = () => {
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
    setSlide(slide === moravickiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? moravickiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Čačak') {
      navigate(moravickiOkrugPathRoutes.cacak(switchLanguage))
    } else if (name === 'Ovčarsko - kablarska klisura') {
      navigate(moravickiOkrugPathRoutes.ovcarskoKablarskaKlisura(switchLanguage))
    } else if (name === 'Jezero Međuvršje') {
      navigate(moravickiOkrugPathRoutes.jezeroMedjuvrsje(switchLanguage))
    } else if (name === 'Manastir Blagoveštenje') {
      navigate(moravickiOkrugPathRoutes.manastirBlagovestenje(switchLanguage))
    } else if (name === 'Guča') {
      navigate(moravickiOkrugPathRoutes.guca(switchLanguage))
    } else if (name === 'Gornji Milanovac') {
      navigate(moravickiOkrugPathRoutes.gornjiMilanovac(switchLanguage))
    } else if (name === 'Planina Rudnik') {
      navigate(moravickiOkrugPathRoutes.planinaRudnik(switchLanguage))
    } else if (name === 'Manastir Sretenje') {
      navigate(moravickiOkrugPathRoutes.manastirSretenje(switchLanguage))
    }
  };

  return (
    <div className="okrugBackground">
      <header>
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(serbianMapPathRoutes.SumadijaIZapadnaSrbija(switchLanguage))}
          style={{ fill: "white" }}
        />
      </header>
      {switchLanguage === 'rs' ?
        (
          <>

            <section className="moravicki okrug" lang="rs">
              <h1>Moravički okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 3.211 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 270.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Raznovrsni pejzaži, blagi brežuljci, plodne ravnice, reka Morava, pogodnost za poljoprivredu, stočarstvo i turizam.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="rs">
                  <p>
                    <strong>Moravički okrug</strong> se nalazi u centralnom delu Srbije, a njegova teritorija obuhvata grad <strong>Čačak</strong>, koji je administrativni, ekonomski i kulturni centar okruga, kao i opštine poput <strong>Gornji Milanovac</strong>, <strong>Lučani</strong> i <strong>Ivanjica</strong>.
                  </p>
                  <p>
                    Ovaj okrug je poznat po bogatoj istoriji – grad Čačak se ističe značajem još iz perioda Rimskog carstva, ali i po dugoj tradiciji industrijskog razvoja i trgovine.
                  </p>
                  <p>
                    Moravički okrug je prepoznatljiv po prirodnim lepotama: brojnim rekama, jezerima i planinskim predelima, uključujući planinu <strong>Ovčar</strong>, jednu od najlepših u regionu.
                  </p>
                  <p>
                    Turizam u okrugu obuhvata lokalitete kao što su <strong>Ovčarsko-Kablarska klisura</strong>, srednjovekovni manastiri, prirodni rezervati, termalni izvori i jezera. Okrug je takođe poznat po razvijenom stočarstvu i poljoprivredi, posebno u proizvodnji voća, povrća i mlečnih proizvoda.
                  </p>
                  <p>
                    Domaći proizvodi i suveniri privlače brojne turiste, dok je lokalna <strong>gastronomija</strong> raznovrsna i bogata. Razvijen je i rekreativni turizam, zahvaljujući planinskim stazama, biciklističkim rutama, kao i mogućnostima za lov i ribolov.
                  </p>
                  <p>
                    Kulturni život Moravičkog okruga je živ i raznolik, sa brojnim manifestacijama kao što su <strong>Čačansko kulturno leto</strong>, <strong>Sabor tamburaša</strong> i mnoge druge koje neguju tradiciju i običaje ovog kraja.
                  </p>
                  <p>
                    Moravički okrug je idealno mesto za ljubitelje prirode, istorije i tradicije, a njegovi domaćini su poznati po izuzetnom gostoprimstvu.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Putujemo zato što su udaljenost i raznolikost tajni osveživači kreativnosti. Kada stignemo kući, kuća je i dalje ista. Ali nešto unutar našeg uma se promenilo, i to sve menja. (Johan Lehrer)
              </blockquote>
            </section>

          </>
        )
        :
        (
          <>

            <section className="moravicki okrug" lang="en">
              <h1>Moravica District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 3,211 km²
                </p>
                <p>
                  <strong>Population: </strong>around 270,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Diverse landscapes, gentle hills, fertile plains, the Morava River; suitable for agriculture, livestock farming, and tourism.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>Moravica District</strong> is located in central Serbia, and its territory includes the city of <strong>Čačak</strong>, which is the administrative, economic, and cultural center of the district, as well as municipalities such as <strong>Gornji Milanovac</strong>, <strong>Lučani</strong>, and <strong>Ivanjica</strong>.
                  </p>
                  <p>
                    This district is known for its rich history—Čačak has historical significance dating back to the Roman Empire, as well as a long tradition of industrial development and trade.
                  </p>
                  <p>
                    Moravica District is recognized for its natural beauty, with numerous rivers, lakes, and mountain areas, including <strong>Mount Ovčar</strong>, one of the most picturesque spots in the region.
                  </p>
                  <p>
                    Tourism in the district includes sites such as the <strong>Ovčar-Kablar Gorge</strong>, medieval monasteries, nature reserves, thermal springs, and lakes. The district is also known for its well-developed livestock farming and agriculture, especially in the production of fruit, vegetables, and dairy products.
                  </p>
                  <p>
                    Local products and souvenirs attract many tourists, while the regional <strong>cuisine</strong> is diverse and rich. Recreational tourism is well developed, thanks to hiking trails, cycling routes, and opportunities for hunting and fishing.
                  </p>
                  <p>
                    The cultural life of the Moravica District is vibrant and diverse, with numerous events such as the <strong>Čačak Cultural Summer</strong>, the <strong>Tamburica Festival</strong>, and many others that celebrate the traditions and customs of the area.
                  </p>
                  <p>
                    Moravica District is an ideal destination for lovers of nature, history, and tradition, and its locals are known for their exceptional hospitality.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                We travel because distance and diversity are secret refreshers of creativity. When we return home, the house is still the same. But something in our mind has changed, and that changes everything. (Jonah Lehrer)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          <div className="caruoselClass" style={{ padding: "0" }}>
            {moravickiOkrugData?.map((okrug, index) => (
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


export default MoravickiOkrug;