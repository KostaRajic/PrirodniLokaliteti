import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { rasinskiOkrugData } from "./rasinskiOkrugData";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";

const RasinskiOkrug = () => {
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
    setSlide(slide === rasinskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? rasinskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Kruševac") {
      navigate(rasinskiOkrugPathRoutes.krusevac(switchLanguage));
    } else if (name === "Jezero Ćelije") {
      navigate(rasinskiOkrugPathRoutes.jezeroCelije(switchLanguage));
    } else if (name === "Srpski srednjovekovni grad Koznik") {
      navigate(rasinskiOkrugPathRoutes.tvrdjavaKoznik(switchLanguage));
    } else if (name === "Manastir Đunis") {
      navigate(rasinskiOkrugPathRoutes.manastirDjunis(switchLanguage));
    } else if (name === "Svetilište Metođe") {
      navigate(rasinskiOkrugPathRoutes.svetilisteMetodje(switchLanguage));
    } else if (name === "Ribarska Banja") {
      navigate(rasinskiOkrugPathRoutes.ribarskaBanja(switchLanguage));
    } else if (name === "Manastir Ljubostinja") {
      navigate(rasinskiOkrugPathRoutes.manastirLjubostinja(switchLanguage));
    } else if (name === "Vodopad Jelovarnik") {
      navigate(rasinskiOkrugPathRoutes.vodopadJelovarnik(switchLanguage));
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

            <section className="rasinski okrug" lang="rs">
              <h1>Rasinski okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong><em>oko 2.667 km²</em>
                </p>
                <p>
                  <strong>Broj stanovnika: </strong><em>približno 240.000</em>
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>
                  <em>Brežuljkasti predeli, plodne doline, reka Zapadna Morava, planina Kopaonik, pogodnost za vinogradarstvo, poljoprivredu i turizam.</em>
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="rs">
                  <p>
                    <strong>Rasinski okrug</strong> se nalazi u <em>centralnom delu Srbije</em>, a njegova teritorija obuhvata grad <strong>Kruševac</strong>, koji je <em>administrativni, ekonomski i kulturni centar</em> okruga, kao i opštine poput <strong>Trstenik</strong>, <strong>Aleksandrovac</strong>, <strong>Varvarin</strong>, <strong>Brus</strong> i <strong>Ćićevac</strong>.
                  </p>
                  <p>
                    Okrug je poznat po <em>bogatoj istoriji</em>, naročito iz doba <strong>srednjovekovne Srbije</strong>, kada je <strong>Kruševac</strong> bio prestonica <strong>kneza Lazara</strong>.
                  </p>
                  <p>
                    Rasinski okrug obiluje <strong>kulturno-istorijskim spomenicima</strong>, poput <strong>manastira Ljubostinja, Naupare</strong> i <strong>Veluće</strong>, dok je <strong>Lazarica</strong> jedan od <em>najznačajnijih pravoslavnih hramova</em> u Srbiji.
                  </p>
                  <p>
                    <strong>Prirodne lepote</strong> ovog okruga čine ga <em>privlačnim za turizam</em> – planina <strong>Kopaonik</strong> pruža <em>idealne uslove</em> za <strong>zimske sportove i rekreaciju</strong>, dok reka <strong>Zapadna Morava</strong> omogućava razvoj <strong>ribolova i ekoturizma</strong>.
                  </p>
                  <p>
                    <strong>Rasinski okrug</strong> je posebno poznat po <strong>vinogradima</strong> u <strong>Aleksandrovačkoj Župi</strong>, gde se proizvode <em>visokokvalitetna vina</em>.
                  </p>
                  <p>
                    <strong>Poljoprivreda</strong> je značajna privredna grana – uzgajaju se <strong>voće, povrće i lekovito bilje</strong>, dok su <em>domaći proizvodi</em>, poput <strong>vina i rakije</strong>, popularni i među turistima.
                  </p>
                  <p>
                    <strong>Kulturna scena</strong> okruga bogata je <strong>manifestacijama</strong>, među kojima se ističe <em>"Župska berba"</em>, festival vina i grožđa u <strong>Aleksandrovcu</strong>.
                  </p>
                  <p>
                    <strong>Gastronomska ponuda</strong> uključuje <em>tradicionalna jela</em> poput <strong>svadbarskog kupusa</strong> i <strong>jagnjetine ispod sača</strong>.
                  </p>
                  <p>
                    Pored toga, Rasinski okrug nudi mogućnosti za <strong>biciklizam, planinarenje, lov i ribolov</strong>.
                  </p>
                  <p>
                    <strong>Gostoprimstvo domaćina</strong>, <em>istorijsko nasleđe</em> i <em>prirodne lepote</em> čine ovaj okrug <strong>atraktivnim mestom za posetu i istraživanje</strong>.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Putujemo zato što su <em>udaljenost</em> i <em>raznolikost</em> tajni osveživači kreativnosti. Kada stignemo kući, kuća je i dalje ista. Ali nešto unutar našeg uma se promenilo, i to sve menja. (<em>Johan Lehrer</em>)
              </blockquote>
            </section>

          </>
        )
        :
        (
          <>

            <section className="rasinski okrug" lang="en">
              <h1>Rasina District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong><em>approximately 2,667 km²</em>
                </p>
                <p>
                  <strong>Population: </strong><em>around 240,000</em>
                </p>
                <p>
                  <strong>Geographical features: </strong>
                  <em>Hilly landscapes, fertile valleys, the Zapadna Morava River, Mount Kopaonik, ideal for viticulture, agriculture, and tourism.</em>
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>The Rasina District</strong> is located in the <em>central part of Serbia</em>, and its territory includes the city of <strong>Kruševac</strong>, which is the <em>administrative, economic, and cultural center</em> of the district, as well as the municipalities of <strong>Trstenik</strong>, <strong>Aleksandrovac</strong>, <strong>Varvarin</strong>, <strong>Brus</strong>, and <strong>Ćićevac</strong>.
                  </p>
                  <p>
                    The district is known for its <em>rich history</em>, especially from the time of <strong>medieval Serbia</strong>, when <strong>Kruševac</strong> was the capital of <strong>Prince Lazar</strong>.
                  </p>
                  <p>
                    The Rasina District is rich in <strong>cultural and historical landmarks</strong>, such as the <strong>Ljubostinja, Naupara</strong>, and <strong>Veluće monasteries</strong>, while <strong>Lazarica</strong> is one of the <em>most significant Orthodox churches</em> in Serbia.
                  </p>
                  <p>
                    The <strong>natural beauty</strong> of this district makes it <em>very attractive for tourism</em> – <strong>Mount Kopaonik</strong> offers <em>ideal conditions</em> for <strong>winter sports and recreation</strong>, while the <strong>Zapadna Morava River</strong> enables the development of <strong>fishing and ecotourism</strong>.
                  </p>
                  <p>
                    <strong>The Rasina District</strong> is particularly known for its <strong>vineyards</strong> in the <strong>Aleksandrovac Župa region</strong>, where <em>high-quality wines</em> are produced.
                  </p>
                  <p>
                    <strong>Agriculture</strong> is a key economic sector – <strong>fruits, vegetables, and medicinal herbs</strong> are cultivated, and <em>local products</em> such as <strong>wine and rakija (brandy)</strong> are popular among tourists.
                  </p>
                  <p>
                    The <strong>cultural scene</strong> of the district is rich in <strong>festivals and events</strong>, with the highlight being <em>"Župska berba"</em>, the wine and grape festival in <strong>Aleksandrovac</strong>.
                  </p>
                  <p>
                    <strong>Gastronomy</strong> features <em>traditional dishes</em> such as <strong>svadbarski kupus</strong> (wedding-style cabbage) and <strong>lamb under the bell</strong>.
                  </p>
                  <p>
                    Additionally, the Rasina District offers opportunities for <strong>cycling, hiking, hunting, and fishing</strong>.
                  </p>
                  <p>
                    <strong>The hospitality of the locals</strong>, along with the <em>historical heritage</em> and <em>natural beauty</em>, makes this district an <strong>attractive destination for visitors and exploration</strong>
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                We travel because <em>distance</em> and <em>diversity</em> are secret refreshers of creativity. When we return home, the house is still the same. But something inside our mind has changed, and that changes everything. (<em>Jonah Lehrer</em>)
              </blockquote>
            </section>


          </>
        )}
      <section>

        <div className="caruoselClass" style={{ padding: "0" }}>
          {rasinskiOkrugData?.map((okrug, index) => (
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


export default RasinskiOkrug;