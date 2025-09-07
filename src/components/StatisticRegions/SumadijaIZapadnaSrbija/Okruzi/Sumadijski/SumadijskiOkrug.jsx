import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { sumadijskiOkrugData } from "./SumadijskiOkrugData";
import { sumadijskiOkrugPathRoutes } from "./SumadijskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const SumadijskiOkrug = () => {
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
    setSlide(slide === sumadijskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? sumadijskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Kragujevac') {
      navigate(sumadijskiOkrugPathRoutes.kragujevac(switchLanguage))
    } else if (name === 'Arandjelovac') {
      navigate(sumadijskiOkrugPathRoutes.arandjelovac(switchLanguage))
    } else if (name === 'Oplenac') {
      navigate(sumadijskiOkrugPathRoutes.oplenac(switchLanguage))
    } else if (name === 'Gružansko jezero') {
      navigate(sumadijskiOkrugPathRoutes.gruzanskoJezero(switchLanguage))
    } else if (name === 'Manastir Blagoveštenje Rudničko') {
      navigate(sumadijskiOkrugPathRoutes.manastirBlagovestenjeRudnicko(switchLanguage))
    } else if (name === 'Manastir Petkovica') {
      navigate(sumadijskiOkrugPathRoutes.manastirPetkovica(switchLanguage))
    } else if (name === 'Planinarska staza Žeželj i Bešnjaja') {
      navigate(sumadijskiOkrugPathRoutes.planinarskaStazaZezeljIBesnjaja(switchLanguage))
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

            <section className="sumadijski okrug" lang="rs">
              <h1>Šumadijski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong><em>oko 2.387 km²</em>
                </p>
                <p>
                  <strong>Broj stanovnika: </strong><em>približno 300.000</em>
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>
                  <em>Blago talasasto područje, bogata poljoprivredna zemljišta, reka Lepenica, pogodnost za vinogradarstvo, voćarstvo i turizam.</em>
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="rs">
                  <p>
                    <strong>Šumadijski okrug</strong> se nalazi u <em>centralnom delu Srbije</em> i prostire se na teritoriji poznatoj po raznovrsnim <em>prirodnim i kulturnim bogatstvima</em>.
                  </p>
                  <p>
                    Ovaj okrug obuhvata <strong>grad Kragujevac</strong>, koji je <em>administrativni, ekonomski i kulturni centar</em>, zajedno sa opštinama kao što su <strong>Aranđelovac, Topola, Rača, Lapovo, Knić i Batočina</strong>.
                  </p>
                  <p>
                    <strong>Kragujevac</strong>, nekadašnja prestonica Srbije, ima značajno <em>istorijsko i industrijsko nasleđe</em>, uključujući prve moderne fabrike u zemlji i čuveni <strong>Zastava kompleks</strong>.
                  </p>
                  <p>
                    <strong>Šumadijski okrug</strong> je prepoznatljiv po <em>vinogradima i voćnjacima</em> koji se prostiru na blagim brežuljcima, a <strong>vina iz ovog regiona</strong> uživaju veliku popularnost.
                  </p>
                  <p>
                    Turistički potencijali uključuju znamenitosti poput <strong>Oplenca u Topoli</strong>, <em>mauzoleja dinastije Karađorđević</em>, planinskog područja <strong>Bukulja</strong>, <strong>termalnih izvora u Aranđelovcu</strong> i prirodnog parka <strong>Garaško jezero</strong>.
                  </p>
                  <p>
                    Pored prirodnih lepota, okrug nudi bogat <strong>kulturni i umetnički život</strong>, sa manifestacijama poput <strong>Šumadijskog sajma</strong> i <strong>Sabora vina u Topoli</strong>, koje privlače posetioce iz cele zemlje.
                  </p>
                  <p>
                    <em>Rekreativni turizam</em> je razvijen kroz brojne <strong>planinarske staze, biciklističke rute</strong> i druge aktivnosti na otvorenom.
                  </p>
                  <p>
                    Očuvana <strong>tradicija, običaji i gostoprimstvo stanovnika</strong> čine Šumadijski okrug jednim od <em>najatraktivnijih područja u Srbiji</em>.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Putujemo zato što su udaljenost i raznolikost tajni osveživači kreativnosti. Kada stignemo kući, kuća je i dalje ista. Ali nešto unutar našeg uma se promenilo, i to sve menja. (<em>Johan Lehrer</em>)
              </blockquote>
            </section>
          </>
        )
        :
        (
          <>
            <section className="sumadijski okrug" lang="en">
              <h1>Šumadija District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong><em>approximately 2,387 km²</em>
                </p>
                <p>
                  <strong>Population: </strong><em>around 300,000</em>
                </p>
                <p>
                  <strong>Geographical features: </strong>
                  <em>Gently rolling terrain, fertile agricultural land, the Lepenica River, suitable for viticulture, fruit growing, and tourism.</em>
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>Šumadija District</strong> is located in the <em>central part of Serbia</em> and covers a region known for its diverse <em>natural and cultural wealth</em>.
                  </p>
                  <p>
                    This district includes the <strong>city of Kragujevac</strong>, which serves as the <em>administrative, economic, and cultural center</em>, along with municipalities such as <strong>Aranđelovac, Topola, Rača, Lapovo, Knić, and Batočina</strong>.
                  </p>
                  <p>
                    <strong>Kragujevac</strong>, once the capital of Serbia, has a significant <em>historical and industrial legacy</em>, including the country's first modern factories and the famous <strong>Zastava industrial complex</strong>.
                  </p>
                  <p>
                    <strong>Šumadija District</strong> is known for its <em>vineyards and orchards</em> spread across gentle hills, and <strong>wines from this region</strong> are widely appreciated.
                  </p>
                  <p>
                    Tourist attractions include landmarks such as <strong>Oplenac in Topola</strong>, the <em>mausoleum of the Karađorđević dynasty</em>, the <strong>Bukulja mountain area</strong>, <strong>thermal springs in Aranđelovac</strong>, and the natural park <strong>Lake Garaš</strong>.
                  </p>
                  <p>
                    In addition to natural beauty, the district offers a rich <strong>cultural and artistic life</strong>, with events such as the <strong>Šumadija Fair</strong> and the <strong>Wine Festival in Topola</strong>, attracting visitors from across the country.
                  </p>
                  <p>
                    <em>Recreational tourism</em> is well developed through numerous <strong>hiking trails, cycling routes</strong>, and other outdoor activities.
                  </p>
                  <p>
                    Preserved <strong>tradition, customs, and the hospitality of the local people</strong> make Šumadija District one of the <em>most attractive regions in Serbia</em>.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                We travel because distance and diversity are the secret refreshers of creativity. When we return home, the house is still the same. But something in our mind has changed, and that changes everything. (<em>Jonah Lehrer</em>)
              </blockquote>
            </section>

          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {sumadijskiOkrugData?.map((okrug, index) => (
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


export default SumadijskiOkrug;