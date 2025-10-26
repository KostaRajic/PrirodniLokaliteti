import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { zlatiborskiOkrugData } from "./ZlatiborskiOkrugData";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const ZlatiborskiOkrug = () => {
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
    setSlide(slide === zlatiborskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? zlatiborskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Užice') {
      navigate(zlatiborskiOkrugPathRoutes.uzice(switchLanguage))
    } else if (name === 'Reka Uvac') {
      navigate(zlatiborskiOkrugPathRoutes.rekaUvac(switchLanguage))
    } else if (name === 'Nacionalni Park "Tara"') {
      navigate(zlatiborskiOkrugPathRoutes.nacionalniParkTara(switchLanguage))
    } else if (name === 'Planina Zlatibor') {
      navigate(zlatiborskiOkrugPathRoutes.planinaZlatar(switchLanguage))
    } else if (name === 'Manastir Mileševa') {
      navigate(zlatiborskiOkrugPathRoutes.manastirMileseva(switchLanguage))
    } else if (name === 'Jezero Perućac') {
      navigate(zlatiborskiOkrugPathRoutes.jezeroPerucac(switchLanguage))
    } else if (name === 'Vodopad Sopotice') {
      navigate(zlatiborskiOkrugPathRoutes.vodopadSopotnice(switchLanguage))
    } else if (name === 'Manastir Rujan') {
      navigate(zlatiborskiOkrugPathRoutes.manastirRujan(switchLanguage))
    } else if (name === 'Planina Zlatar') {
      navigate(zlatiborskiOkrugPathRoutes.planinaZlatar(switchLanguage))
    } else if (name === 'Zaovinsko Jezero') {
      navigate(zlatiborskiOkrugPathRoutes.zaovinskoJezero(switchLanguage))
    } else if (name === 'Stopića Pećina') {
      navigate(zlatiborskiOkrugPathRoutes.stopicaPecina(switchLanguage))
    } else if (name === 'Vodopad Gostilje') {
      navigate(zlatiborskiOkrugPathRoutes.vodopadGostilje(switchLanguage))
    } else if (name === 'Mokra Gora') {
      navigate(zlatiborskiOkrugPathRoutes.mokraGora(switchLanguage))
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

            <section className="zlatiborski okrug" lang="rs">
              <h1>Zlatiborski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong><em>oko 4.335 km²</em>
                </p>
                <p>
                  <strong>Broj stanovnika: </strong><em>približno 250.000</em>
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>
                  <em>Planinsko područje, bogato šumama i čistim rekama, sa velikim brojem turističkih destinacija, pogodna za skijanje, planinarenje i seoski turizam.</em>
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="rs">
                  <p>
                    <strong>Zlatiborski okrug</strong> se nalazi u <em>zapadnom delu Srbije</em>, poznat po svojoj <em>prirodnoj lepoti i razvijenom turizmu</em>.
                  </p>
                  <p>
                    Ovaj okrug obuhvata <strong>grad Užice</strong>, koji je <em>ekonomski i kulturni centar</em>, kao i opštine poput <strong>Zlatibor, Čajetina, Sjenica, Nova Varoš, Priboj i Prijepolje</strong>.
                  </p>
                  <p>
                    <strong>Zlatibor</strong> je jedno od najpoznatijih turističkih odredišta u Srbiji, prepoznatljivo po svom <em>planinskom okruženju, čistom vazduhu i brojnim rekreacijskim mogućnostima</em>.
                  </p>
                  <p>
                    Okrug je bogat <em>šumama, rekama i jezerima</em>, a Zlatibor je naročito popularan tokom zimskih meseci zbog <strong>skijališta i zimskih sportova</strong>.
                  </p>
                  <p>
                    Pored prirodnih lepota, Zlatiborski okrug je poznat i po <strong>kulturnim manifestacijama</strong>, kao što su <em>Zlatiborski sabor, Užički festival</em> i mnoge druge, koje privlače posetioce iz celog regiona.
                  </p>
                  <p>
                    Turizam u okrugu se bazira na <em>rekreativnim aktivnostima</em>, poput <strong>planinarenja, biciklizma</strong> i posete prirodnim lepotama kao što su <em>jezera, kanjoni i pećine</em>.
                  </p>
                  <p>
                    Zlatibor je takođe domaćin <strong>termalnih izvora i banja</strong>, koje pružaju mogućnost za opuštanje i lečenje.
                  </p>
                  <p>
                    <em>Tradicija i gostoprimstvo stanovnika</em> čine Zlatiborski okrug jednim od <strong>najlepših i najatraktivnijih turističkih destinacija u Srbiji</strong>.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Putovanja vraćaju snagu i ljubav u vaš život. (<em>Rumi</em>)
              </blockquote>
            </section>

          </>
        )
        :
        (
          <>

            <section className="zlatiborski okrug" lang="en">
              <h1>Zlatibor District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong><em>about 4,335 km²</em>
                </p>
                <p>
                  <strong>Population: </strong><em>approximately 250,000</em>
                </p>
                <p>
                  <strong>Geographical features: </strong>
                  <em>Mountainous area, rich in forests and clean rivers, with many tourist destinations, suitable for skiing, hiking, and rural tourism.</em>
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    <strong>Zlatibor District</strong> is located in the <em>western part of Serbia</em>, known for its <em>natural beauty and developed tourism</em>.
                  </p>
                  <p>
                    This district includes the <strong>city of Užice</strong>, which is the <em>economic and cultural center</em>, as well as municipalities such as <strong>Zlatibor, Čajetina, Sjenica, Nova Varoš, Priboj, and Prijepolje</strong>.
                  </p>
                  <p>
                    <strong>Zlatibor</strong> is one of the most famous tourist destinations in Serbia, recognized for its <em>mountain surroundings, clean air, and numerous recreational opportunities</em>.
                  </p>
                  <p>
                    The district is rich in <em>forests, rivers, and lakes</em>, and Zlatibor is especially popular during the winter months due to its <strong>ski resorts and winter sports</strong>.
                  </p>
                  <p>
                    Besides its natural beauty, Zlatibor District is also known for <strong>cultural events</strong> such as the <em>Zlatibor Gathering, Užice Festival</em>, and many others, which attract visitors from the entire region.
                  </p>
                  <p>
                    Tourism in the district is based on <em>recreational activities</em>, such as <strong>hiking, cycling</strong>, and visiting natural attractions like <em>lakes, canyons, and caves</em>.
                  </p>
                  <p>
                    Zlatibor is also home to <strong>thermal springs and spas</strong>, offering opportunities for relaxation and healing.
                  </p>
                  <p>
                    The <em>tradition and hospitality of the locals</em> make Zlatibor District one of the <strong>most beautiful and attractive tourist destinations in Serbia</strong>.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Travel restores strength and love in your life. (<em>Rumi</em>)
              </blockquote>
            </section>

          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {zlatiborskiOkrugData?.map((okrug, index) => (
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


export default ZlatiborskiOkrug;