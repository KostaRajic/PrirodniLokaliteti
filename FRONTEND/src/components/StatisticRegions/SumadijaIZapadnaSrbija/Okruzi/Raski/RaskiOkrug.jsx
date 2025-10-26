import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { raskiOkrugData } from "./raskiOkrugData";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const RaskiOkrug = () => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const [showArticle, setShowArticle] = useState(true);
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
    setSlide(slide === raskiOkrugData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? raskiOkrugData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === 'Kraljevo') {
      navigate(raskiOkrugPathRoutes.kraljevo(switchLanguage))
    } else if (name === 'Manastir Studenica') {
      navigate(raskiOkrugPathRoutes.manastirStudenica(switchLanguage))
    } else if (name === 'Planina Kopaonik') {
      navigate(raskiOkrugPathRoutes.planinaKopaonik(switchLanguage))
    } else if (name === 'Vrnjačka Banja') {
      navigate(raskiOkrugPathRoutes.vrnjackaBanja(switchLanguage))
    } else if (name === 'Manastir Žiča') {
      navigate(raskiOkrugPathRoutes.manastirZica(switchLanguage))
    } else if (name === 'Tvrđava Maglič') {
      navigate(raskiOkrugPathRoutes.tvrdjavaMaglic(switchLanguage))
    } else if (name === 'Planina Goč') {
      navigate(raskiOkrugPathRoutes.planinaGoc(switchLanguage))
    } else if (name === 'Manastir Đurđevi Stupovi') {
      navigate(raskiOkrugPathRoutes.manastirDjurdjeviStupovi(switchLanguage))
    } else if (name === 'Tvrđava Stari Ras') {
      navigate(raskiOkrugPathRoutes.tvrdjavaStariRas(switchLanguage))
    } else if (name === 'Manastir Sopoćani') {
      navigate(raskiOkrugPathRoutes.manastirSopocani(switchLanguage))
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
            <section className="raski okrug" lang="rs">
              <h1>Raški Okrug</h1>
              <div className="basicInfo">
                <p>
                  <strong>Površina: </strong><em>oko 3.788 km²</em>
                </p>
                <p>
                  <strong>Broj stanovnika: </strong><em>približno 240.000</em>
                </p>
                <p>
                  <strong>Geografske karakteristike: </strong>
                  <em>Planinski predeli, reka Ibar, šumski kompleks, pogodnost za stočarstvo, poljoprivredu i turizam.</em>
                </p>
              </div>
              {isMobile && <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {switchLanguage === 'rs' ? 'Pročitaj više' : 'Read more'}
              </button>}

              {!isMobile && showArticle &&
                <article lang="rs">
                  <p>
                    <strong>Raški okrug</strong> se nalazi u <em>jugozapadnom delu Srbije</em>, a njegova teritorija obuhvata grad <strong>Kraljevo</strong>, koji je <em>administrativni, ekonomski i kulturni centar</em> okruga, kao i opštine poput <strong>Novi Pazar</strong>, <strong>Raška</strong>, <strong>Tutin</strong>, <strong>Sjenica</strong> i drugi.
                  </p>
                  <p>
                    Okrug je poznat po svojoj <em>bogatoj istoriji</em>, jer je u ovom regionu bio važan <strong>kulturni centar u srednjem veku</strong>, a grad <strong>Novi Pazar</strong> je bio jedan od najvažnijih <em>trgovačkih i verskih centara</em>.
                  </p>
                  <p>
                    <strong>Kraljevo</strong>, sa svoje strane, takođe ima značajnu istorijsku ulogu i razvio se kao <em>ekonomski i industrijski centar</em>.
                  </p>
                  <p>
                    <strong>Raški okrug</strong> se ponosi svojim <em>prirodnim lepotama</em>, sa planinskim masivima, rekama i šumama, dok reka <strong>Ibar</strong> pruža posebnu vrednost ovom regionu.
                  </p>
                  <p>
                    Turizam u <strong>Raškom okrugu</strong> obuhvata istorijske lokalitete, manastire i kulturne spomenike, dok su prirodni predeli pogodni za <em>ljubitelje planinarenja, biciklizma i lova</em>.
                  </p>
                  <p>
                    Okrug je takođe poznat po stočarstvu, posebno u proizvodnji <em>mleka i mesa</em>, kao i poljoprivredi, koja se temelji na gajenju <strong>žitarica, voća i povrća</strong>.
                  </p>
                  <p>
                    Domaći proizvodi, kao što su <strong>sirevi i mesni proizvodi</strong>, popularni su suveniri i privlače turiste.
                  </p>
                  <p>
                    <strong>Gastronomija Raškog okruga</strong> je bogata, sa <em>tradicionalnim jelima</em> koja odražavaju specifičan ukus i tradiciju ovog kraja.
                  </p>
                  <p>
                    Okrug je idealno odredište za <em>ljubitelje prirode, istorije i autentične kulture</em>, dok je <strong>gostoprimstvo domaćina</strong> nadaleko poznato.
                  </p>
                  <p>
                    Tokom godine, okrug nudi razne manifestacije, kulturne događaje i sajmove, a posetioci mogu uživati u rekreativnim aktivnostima poput <strong>planinarenja, ribolova i biciklizma</strong>.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                Putnik vidi ono što vidi. Turista vidi ono što je došao da vidi. (<em>G.K. Česterton</em>)
              </blockquote>
            </section>


          </>
        )
        :
        (
          <>

            <section className="raski okrug" lang="en">
              <h1>Raški District</h1>
              <div className="basicInfo">
                <p>
                  <strong>Area: </strong><em>approximately 3,788 km²</em>
                </p>
                <p>
                  <strong>Population: </strong><em>around 240,000</em>
                </p>
                <p>
                  <strong>Geographical features: </strong>
                  <em>Mountainous regions, the Ibar River, forest complexes, suitable for livestock farming, agriculture, and tourism.</em>
                </p>
              </div>
              {isMobile && <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                {switchLanguage === 'rs' ? 'Pročitaj više' : 'Read more'}
              </button>}

              {!isMobile && showArticle &&
                <article lang="en">
                  <p>
                    <strong>Raški District</strong> is located in the <em>southwestern part of Serbia</em>, and its territory includes the city of <strong>Kraljevo</strong>, which is the <em>administrative, economic, and cultural center</em> of the district, as well as municipalities such as <strong>Novi Pazar</strong>, <strong>Raška</strong>, <strong>Tutin</strong>, <strong>Sjenica</strong>, and others.
                  </p>
                  <p>
                    The district is known for its <em>rich history</em>, as this region was an important <strong>cultural center in the Middle Ages</strong>, and the city of <strong>Novi Pazar</strong> was one of the most significant <em>trade and religious centers</em>.
                  </p>
                  <p>
                    <strong>Kraljevo</strong>, on the other hand, also has an important historical role and has developed into an <em>economic and industrial center</em>.
                  </p>
                  <p>
                    <strong>Raški District</strong> takes pride in its <em>natural beauties</em>, with mountain ranges, rivers, and forests, while the <strong>Ibar River</strong> adds special value to this region.
                  </p>
                  <p>
                    Tourism in the <strong>Raški District</strong> includes historical sites, monasteries, and cultural monuments, while the natural landscapes are suitable for <em>hiking, cycling, and hunting enthusiasts</em>.
                  </p>
                  <p>
                    The district is also known for livestock farming, especially in the production of <em>milk and meat</em>, as well as agriculture based on growing <strong>grains, fruits, and vegetables</strong>.
                  </p>
                  <p>
                    Local products, such as <strong>cheeses and meat products</strong>, are popular souvenirs and attract tourists.
                  </p>
                  <p>
                    The <strong>gastronomy of Raški District</strong> is rich, featuring <em>traditional dishes</em> that reflect the unique taste and traditions of this region.
                  </p>
                  <p>
                    The district is an ideal destination for <em>nature lovers, history enthusiasts, and those seeking authentic culture</em>, while the <strong>hospitality of the locals</strong> is widely renowned.
                  </p>
                  <p>
                    Throughout the year, the district offers various events, cultural festivals, and fairs, and visitors can enjoy recreational activities such as <strong>hiking, fishing, and cycling</strong>.
                  </p>
                </article>
              }
            </section>

            <section className="citatClass">
              <blockquote>
                A traveler sees what he sees. A tourist sees what he has come to see. (<em>G.K. Chesterton</em>)
              </blockquote>
            </section>

          </>
        )}

      <section>


        <div className="caruoselClass" style={{ padding: "0" }}>
          {raskiOkrugData?.map((okrug, index) => (
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

export default RaskiOkrug;