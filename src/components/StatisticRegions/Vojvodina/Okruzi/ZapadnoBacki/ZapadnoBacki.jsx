import { useEffect, useState } from "react";
import { zapadnoBackiData } from "./ZapadnoBackiData";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const ZapadnoBacki = () => {
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
    setSlide(slide === zapadnoBackiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? zapadnoBackiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Sombor") {
      navigate(zapadnoBackiPathRoutes.sombor(switchLanguage));
    } else if (name === "Gornje Podunavlje") {
      navigate(zapadnoBackiPathRoutes.gornjePodunavlje(switchLanguage));
    } else if (name === "Apatin i apatinske terminalne vode") {
      navigate(zapadnoBackiPathRoutes.apatin(switchLanguage));
    } else if (name === "Veliki Bački kanal") {
      navigate(zapadnoBackiPathRoutes.velikiBackiKanal(switchLanguage));
    } else if (name === "Manastir Bodjani") {
      navigate(zapadnoBackiPathRoutes.manastirBodjani(switchLanguage));
    } else if (name === "Salaši u Bačkoj") {
      navigate(zapadnoBackiPathRoutes.salasiUBackoj(switchLanguage));
    } else if (name === "Dunavkse Ade") {
      navigate(zapadnoBackiPathRoutes.dunavskeAde(switchLanguage));
    }
  };

  return (
    <>
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

              <section className="zapadnoBacki okrug" lang="sr">
                <h1>Zapadno - Bački okrug</h1>
                <div className="basicInfo">
                  <p>
                    <strong>Površina: </strong>oko 2.420 km²
                  </p>
                  <p>
                    <strong>Broj stanovnika: </strong>približno 188.000
                  </p>
                  <p>
                    <strong>Geografske karakteristike: </strong>Ravnica sa plodnim zemljištem, idealnim za poljoprivredu.
                  </p>
                </div>
                <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                  {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
                </button>

                {showArticle &&
                  <article lang="sr">
                    <p>
                      <strong>Zapadno Bački okrug</strong> smešten je u severozapadnom delu Srbije, u
                      Vojvodini, sa centrom u Somboru. Obuhvata opštine <strong>Apatin</strong>, <strong>Kula</strong> i
                      <strong>Odžaci</strong>, a poznat je po ravničarskom pejzažu, plodnom zemljištu i
                      prirodnim lepotama.
                    </p>
                    <p>
                      <strong>Dunav</strong> i <strong>Veliki Bački kanal</strong> dominiraju geografijom regiona, pružajući mogućnosti za ribolov, rekreaciju i
                      ekoturizam. Okrug je dom <strong>Specijalnog rezervata prirode Gornje Podunavlje</strong>, značajnog močvarnog područja sa bogatom florom i faunom.
                    </p>
                    <p>
                      Termalne vode u <strong>Apatinu</strong> privlače posetioce, dok <strong>salaši</strong> nude
                      autentično iskustvo vojvođanskog načina života.
                    </p>
                    <p>
                      <strong>Sombor</strong>, poznat po zelenilu i arhitekturi, čuva kulturno nasleđe, uključujući Galeriju
                      <em>„Milan Konjović“</em> i čuvenu fresku <em>„Bitka kod Sente“</em>.
                    </p>
                    <p>
                      Privreda okruga oslanja se na poljoprivredu, proizvodnju hrane i pića, posebno
                      zahvaljujući <strong>Apatinskoj pivari</strong>. Okrug spaja prirodne resurse,
                      kulturno nasleđe i gostoljubivost, pružajući bogato iskustvo za
                      stanovnike i posetioce.
                    </p>
                    <p>
                      Ovo područje idealno je za ljubitelje prirode, istorije i tradicionalne vojvođanske kulture.
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

              <section className="zapadnoBacki okrug" lang="en">
                <h1>West Bačka District</h1>
                <div className="basicInfo">
                  <p>
                    <strong>Area: </strong>about 2,420 km²
                  </p>
                  <p>
                    <strong>Population: </strong>approximately 188,000
                  </p>
                  <p>
                    <strong>Geographical features: </strong>Plain with fertile soil, ideal for agriculture.
                  </p>
                </div>
                <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
                  {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
                </button>

                {showArticle &&
                  <article lang="en">
                    <p>
                      <strong>West Bačka District</strong> is located in the northwest part of Serbia, in
                      Vojvodina, with Sombor as its center. It includes the municipalities of <strong>Apatin</strong>, <strong>Kula</strong>, and
                      <strong>Odžaci</strong>, and is known for its flat landscape, fertile land, and
                      natural beauty.
                    </p>
                    <p>
                      The <strong>Danube River</strong> and the <strong>Great Bačka Canal</strong> dominate the region’s geography, offering opportunities for fishing, recreation, and
                      ecotourism. The district is home to the <strong>Gornje Podunavlje Special Nature Reserve</strong>, an important wetland area with rich flora and fauna.
                    </p>
                    <p>
                      Thermal waters in <strong>Apatin</strong> attract visitors, while traditional <strong>salaši</strong> farms offer
                      an authentic experience of the Vojvodina rural lifestyle.
                    </p>
                    <p>
                      <strong>Sombor</strong>, known for its greenery and architecture, preserves cultural heritage, including the
                      <em>“Milan Konjović” Gallery</em> and the famous fresco <em>“Battle of Senta”</em>.
                    </p>
                    <p>
                      The district’s economy relies on agriculture, food and beverage production, especially
                      thanks to the <strong>Apatin Brewery</strong>. The district combines natural resources,
                      cultural heritage, and hospitality, providing a rich experience for
                      residents and visitors.
                    </p>
                    <p>
                      This area is ideal for lovers of nature, history, and traditional Vojvodina culture.
                    </p>
                  </article>
                }
              </section>

              <section className="citatClass">
                <blockquote>
                  Travel is much more than sightseeing; it is a deep and lasting change in the idea of living. (Miriam Beard)
                </blockquote>
              </section>

            </>
          )}
        <section>
          <div className="caruoselClass" style={{ padding: "0" }}>
            {zapadnoBackiData?.map((okrug, index) => (
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
                <div className="caruoselInfo">
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
    </>
  );
};


export default ZapadnoBacki;