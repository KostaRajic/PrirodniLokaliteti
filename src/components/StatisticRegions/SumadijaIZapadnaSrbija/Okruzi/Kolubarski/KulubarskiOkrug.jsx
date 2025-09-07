import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { kolubarskiOkrugData } from "./KulubarskiOkrugData";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const KolubarskiOkrug = () => {
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
    setSlide(slide === kolubarskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? kolubarskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Valjevo") {
      navigate(kulubarskiOkrugPathRoutes.valjevo(switchLanguage));
    } else if (name === "Taorska Vrela") {
      navigate(kulubarskiOkrugPathRoutes.taorskaVrela(switchLanguage));
    } else if (name === "Petnica i Petnička pećina") {
      navigate(kulubarskiOkrugPathRoutes.petnickaPecina(switchLanguage));
    } else if (name === "Reka Gradac") {
      navigate(kulubarskiOkrugPathRoutes.rekaGradac(switchLanguage));
    } else if (name === "Manastir Lelić") {
      navigate(kulubarskiOkrugPathRoutes.manastirLelic)(switchLanguage);
    } else if (name === "Vidikovac Velika stena") {
      navigate(kulubarskiOkrugPathRoutes.vidikovacVelikaStena(switchLanguage));
    } else if (name === "Vrh Rajac") {
      navigate(kulubarskiOkrugPathRoutes.vrhRajac(switchLanguage));
    } else if (name === "Manastir Ćelije") {
      navigate(kulubarskiOkrugPathRoutes.manastirCelije(switchLanguage));
    } else if (name === "Divčibare") {
      navigate(kulubarskiOkrugPathRoutes.divcibare(switchLanguage));
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
            <section className="kolubarski okrug" lang="rs">
              <h1>Kolubarski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 2.474 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 175.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Brdovito područje, bogatstvo
                  rudnih resursa, reka Kolubara, pogodnost za poljoprivredu, rudarstvo
                  i industriju.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="rs">
                  <p>
                    <strong>Kolubarski okrug</strong> se nalazi u zapadnom delu Srbije i prostire
                    se između reka <strong>Kolubare</strong> i <strong>Ljiga</strong>, obuhvatajući
                    područja koja su poznata po raznovrsnim prirodnim i kulturnim karakteristikama.
                  </p>
                  <p>
                    Ovaj okrug uključuje grad <strong>Valjevo</strong>, kao administrativni,
                    ekonomski i kulturni centar, zajedno sa opštinama kao što su <strong>Lajkovac</strong>,
                    <strong>Ub</strong>, <strong>Ljig</strong>, <strong>Mionica</strong> i <strong>Osečina</strong>.
                  </p>
                  <p>
                    Valjevo se ističe svojim bogatim istorijskim nasleđem, kao i razvijenom
                    industrijom, trgovinom i turizmom. Kolubarski okrug je poznat po rudarstvu,
                    posebno eksploataciji lignita iz rudarskog basena <strong>Kolubara</strong>,
                    ali i po plodnim dolinama koje su pogodne za poljoprivredu, uzgajanje voća,
                    povrća i stočarstvo.
                  </p>
                  <p>
                    Turistički potencijali okruga uključuju prirodne znamenitosti poput
                    <strong>Divčibara</strong>, planinskog područja koje je popularno za odmor
                    i rekreaciju, kao i brojnih reka, šuma i termalnih izvora.
                  </p>
                  <p>
                    Kulturni život Kolubarskog okruga obogaćen je manifestacijama poput
                    <strong>Tešnjarskih večeri u Valjevu</strong>, koje okupljaju ljubitelje umetnosti
                    i tradicije.
                  </p>
                  <p>
                    Ovo područje nudi brojne mogućnosti za rekreativni turizam, uključujući
                    planinarenje, lov, ribolov i biciklizam, a očuvane tradicije i običaji
                    čine ga atraktivnim i autentičnim delom Srbije.
                  </p>
                </article>
              }
            </section>
            <section className="citatClass">
              <blockquote>
                Putujemo zato što su udaljenost i raznolikost tajni osveživači kreativnosti.
                Kada stignemo kući, kuća je i dalje ista. Ali nešto unutar našeg uma se
                promenilo, i to sve menja. (Johan Lehrer)
              </blockquote>
            </section>

          </>
        )
        :

        (

          <>
            <section className="kolubarski okrug" lang="en">
              <h1>Kolubara District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>about 2,474 km²
                </p>
                <p>
                  <strong>Population: </strong>approximately 175,000
                </p>
                <p>
                  <strong>Geographical characteristics: </strong>Hilly terrain, rich mineral resources,
                  Kolubara River, suitable for agriculture, mining, and industry.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>Kolubara District</strong> is located in the western part of Serbia and
                    stretches between the <strong>Kolubara</strong> and <strong>Ljig</strong> rivers,
                    encompassing areas known for diverse natural and cultural features.
                  </p>
                  <p>
                    This district includes the city of <strong>Valjevo</strong> as the administrative,
                    economic, and cultural center, along with municipalities such as <strong>Lajkovac</strong>,
                    <strong>Ub</strong>, <strong>Ljig</strong>, <strong>Mionica</strong>, and <strong>Osečina</strong>.
                  </p>
                  <p>
                    Valjevo stands out with its rich historical heritage, as well as developed industry,
                    trade, and tourism. Kolubara District is known for mining, especially lignite extraction
                    from the <strong>Kolubara</strong> mining basin, as well as fertile valleys suitable
                    for agriculture, fruit growing, vegetable cultivation, and livestock breeding.
                  </p>
                  <p>
                    The district's tourist potentials include natural attractions such as
                    <strong>Divčibare</strong>, a mountainous area popular for relaxation and recreation,
                    as well as numerous rivers, forests, and thermal springs.
                  </p>
                  <p>
                    The cultural life of Kolubara District is enriched by events like the
                    <strong>Tešnjar Evenings in Valjevo</strong>, which bring together lovers of art and tradition.
                  </p>
                  <p>
                    This area offers many opportunities for recreational tourism, including hiking,
                    hunting, fishing, and cycling, and its preserved traditions and customs make it
                    an attractive and authentic part of Serbia.
                  </p>
                </article>
              }
            </section>
            <section className="citatClass">
              <blockquote>
                We travel because distance and diversity are secret refreshers of creativity.
                When we arrive home, the house is still the same. But something inside our mind
                has changed, and that changes everything. (Johan Lehrer)
              </blockquote>
            </section>

          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {kolubarskiOkrugData?.map((okrug, index) => (
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


export default KolubarskiOkrug;