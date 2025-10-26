import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { branicevskiOkrugData } from "./BranicevskiOkrugData";
import { borskiOkrugPathRoutes } from "../Borski/BorskiOkrugPathRoutes";
import { branicevskiOkrugPathRoutes } from "./BranicevskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const BranicevskiOkrug = () => {
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
    setSlide(slide === branicevskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? branicevskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Požarevac') {
      return navigate(branicevskiOkrugPathRoutes.pozarevac(switchLanguage))
    } else if (name === 'Tvrđava Golubac') {
      return navigate(branicevskiOkrugPathRoutes.tvrdjavaGolubac(switchLanguage))
    } else if (name === 'Srebrno Jezero') {
      return navigate(branicevskiOkrugPathRoutes.srebrnoJezero(switchLanguage))
    } else if (name === 'Manastir Tumane') {
      return navigate(branicevskiOkrugPathRoutes.manastirTumane(switchLanguage))
    } else if (name === 'Krupajsko Vrelo') {
      return navigate(branicevskiOkrugPathRoutes.krupajskoVrelo(switchLanguage))
    } else if (name === 'Manastir Gornjak') {
      return navigate(branicevskiOkrugPathRoutes.manastirGornjak(switchLanguage))
    } else if (name === 'Planina Beljanica') {
      return navigate(branicevskiOkrugPathRoutes.planinaBeljanica(switchLanguage))
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

            <section className="branicevski okrug" lang="sr">
              <h1>Braničevski Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong>oko 3.865 km²
                </p>
                <p>
                  <strong>Broj stanovnika: </strong>približno 180.000
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>Ravničarski i brdoviti predeli, reke Dunav, Velika Morava i Mlava, plodno zemljište pogodno za poljoprivredu, bogati šumski kompleksi i značajni rudarski resursi.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="sr">
                  <p>
                    <strong>Braničevski okrug</strong> se nalazi u istočnom delu Srbije, uz obalu Dunava, i obuhvata područja bogata prirodnim lepotama i kulturno-istorijskim znamenitostima. Ovaj okrug uključuje gradove <strong>Požarevac</strong>, <strong>Golubac</strong> i <strong>Petrovac na Mlavi</strong>, koji su značajni administrativni, ekonomski i kulturni centri.

                    Grad <strong>Požarevac</strong>, kao najveći grad okruga, poznat je po svojoj istorijskoj i kulturnoj baštini, dok je <strong>Golubac</strong> poznat po istoimenoj tvrđavi, jednoj od najočuvanijih srednjovekovnih fortifikacija na Dunavu.
                  </p>
                  <p>
                    Braničevski okrug obiluje prirodnim bogatstvima, a posebno su značajni Nacionalni park Đerdap, rečne doline i termalne vode koje doprinose razvoju turizma i rekreacije. Privreda ovog okruga oslanja se na poljoprivredu, vinogradarstvo, rudarstvo i industriju, dok Dunav omogućava razvoj rečnog transporta i trgovine.
                  </p>
                  <p>
                    Turistički potencijali uključuju arheološki lokalitet <em>Viminacijum</em>, manastire <em>Gornjak</em> i <em>Tumane</em>, kao i prirodne atrakcije poput <em>Golubačke klisure</em> i izvora reke Mlave. Pored toga, brojne manifestacije, poput <em>Ljubičevskih konjičkih igara</em>, doprinose očuvanju tradicije i privlače turiste iz celog regiona.

                    <strong>Braničevski okrug</strong> predstavlja spoj bogate istorije, prirodnih lepota i savremenog razvoja, čineći ga jednim od značajnijih delova Srbije.
                  </p>
                </article>}
            </section>

            <section className="citatClass">
              <blockquote>
                Ljudi ne polaze na putovanje. Putovanja polaze do njih. (Džon Stejnbek)
              </blockquote>
            </section>


          </>
        )
        :
        (
          <>

            <section className="branicevski okrug" lang="en">
              <h1>Braničevo District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong>approximately 3,865 km²
                </p>
                <p>
                  <strong>Population: </strong>around 180,000
                </p>
                <p>
                  <strong>Geographical features: </strong>Flat and hilly terrain, rivers Danube, Great Morava, and Mlava, fertile land suitable for agriculture, rich forest complexes, and significant mining resources.
                </p>
              </div>
              <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
              </button>

              {showArticle &&
                <article lang="en">
                  <p>
                    The <strong>Braničevo District</strong> is located in the eastern part of Serbia along the Danube River, encompassing areas rich in natural beauty and cultural-historical landmarks. This district includes the towns of <strong>Požarevac</strong>, <strong>Golubac</strong>, and <strong>Petrovac na Mlavi</strong>, which are important administrative, economic, and cultural centers.

                    The town of <strong>Požarevac</strong>, as the largest town in the district, is known for its historical and cultural heritage, while <strong>Golubac</strong> is famous for its namesake fortress, one of the best-preserved medieval fortifications on the Danube.
                  </p>
                  <p>
                    Braničevo District abounds in natural resources, with particularly significant sites such as Đerdap National Park, river valleys, and thermal springs that contribute to tourism and recreation development. The economy of this district relies on agriculture, viticulture, mining, and industry, while the Danube facilitates the development of river transport and trade.
                  </p>
                  <p>
                    Tourist attractions include the archaeological site of <em>Viminacium</em>, the monasteries of <em>Gornjak</em> and <em>Tumane</em>, as well as natural attractions like the <em>Golubac Gorge</em> and the sources of the Mlava River. Additionally, numerous events, such as the <em>Ljubičevo Horse Games</em>, help preserve tradition and attract tourists from across the region.

                    The <strong>Braničevo District</strong> represents a blend of rich history, natural beauty, and modern development, making it one of the more significant regions in Serbia.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                People don't take journeys. Journeys take people. (John Steinbeck)
              </blockquote>
            </section>


          </>
        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {branicevskiOkrugData?.map((okrug, index) => (
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

export default BranicevskiOkrug;