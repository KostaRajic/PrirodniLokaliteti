/* eslint-disable react/jsx-no-duplicate-props */
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { juaznoBanatskiData } from "./JuznoBanatskiData";
import { juznoBanatskiPathRoutes } from "./JuznoBanatskiPathRoutes";
import { serbianMapPathRoutes } from "../../../../serbianMapPathRoutes";
import { useContextAuth } from "../../../../../Context";

const JuznoBanatski = () => {
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
    setSlide(slide === juaznoBanatskiData.length - 1 ? 0 : (prev) => prev + 1);
  };

  const prevContent = () => {
    setSlide(slide === 0 ? juaznoBanatskiData.length - 1 : (prev) => prev - 1);
  };

  const readMore = (name) => {
    if (name === "Pančevo") {
      navigate(juznoBanatskiPathRoutes.pancevo(switchLanguage))
    } else if (name === "Vračevgajsko Jezero") {
      navigate(juznoBanatskiPathRoutes.vracevgajskoJezero(switchLanguage))
    } else if (name === "Deliblatska Peščara i Zagajička Brda") {
      navigate(juznoBanatskiPathRoutes.deliblatskaPescara(switchLanguage))
    } else if (name === "Vršac") {
      navigate(juznoBanatskiPathRoutes.vrsac(switchLanguage))
    } else if (name === "SRP 'Kraljevac'") {
      navigate(juznoBanatskiPathRoutes.srpKraljevac(switchLanguage))
    } else if (name === "Bela Crkva") {
      navigate(juznoBanatskiPathRoutes.belaCrkva(switchLanguage))
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

      {switchLanguage === 'rs' ? (
        <>
          <section className="juznoBanatski okrug" lang="sr">
            <h1>Južno - Banatski okrug</h1>
            <div className="basicInfo">
              <p>
                <strong>Površina: </strong>oko 2.575 km²
              </p>
              <p>
                <strong>Broj stanovnika: </strong>približno 300.000
              </p>
              <p>
                <strong>Geografske karakteristike: </strong>Ravnica, prostire se duž reka Tamiš i Dunav, bogata plodnim zemljištem, pogodna za poljoprivredu, s razvijenim industrijskim zonama.
              </p>
            </div>
            <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
              {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
            </button>

            {showArticle &&
              <article lang="sr">
                <p>
                  <strong>Južno-banatski okrug</strong> je jedan od sedam okruga u Vojvodini, smešten u jugoistočnom delu Srbije. Ovaj okrug obuhvata četiri opštine: <strong>Pančevo, Opovo, Kovin</strong> i <strong>Alibunar</strong>, a administrativno je povezan sa glavnim gradom, <strong>Beogradom</strong>.
                </p>
                <p>
                  Geografski, Južno-banatski okrug je smešten između reke <strong>Tamiš</strong> na severu i reke <strong>Dunav</strong> na jugu, što mu daje strateški značaj u transportu i trgovini. Grad <strong>Pančevo</strong>, kao najveći i administrativni centar okruga, predstavlja ekonomski i kulturni hub.
                </p>
                <p>
                  Regija je prepoznatljiva po razvijenoj industriji, naročito petrohemijskoj i hemijskoj industriji. U okrugu se nalazi nekoliko važnih infrastrukturnih objekata, uključujući industrijske zone, kao i pristup velikim rekama koje olakšavaju plovidbu i trgovinu. Osim industrije, poljoprivreda, naročito ratarstvo, ima značajnu ulogu u ekonomiji.
                </p>
                <p>
                  Kultura ovog područja bogata je tradicijom, a manifestacije, muzeji, galerije i kulturni centri čine ga važnim mestom za kulturni život Vojvodine. Južno-banatski okrug je i region u kojem se nalaze brojne etničke zajednice, što doprinosi njegovoj multikulturnoj posebnosti.
                </p>
              </article>
            }
          </section>
          <section className="citatClass">
            <blockquote>
              Živimo u divnom svetu koji je put lepote, čari i avantura. Nema kraja avanturi koju možemo imati samo ako je tražimo otvorenih očiju.
              (Džavaharlal Nehru)
            </blockquote>
          </section>
        </>
      )
        :
        (
          <><section className="juznoBanatski okrug" lang="en">
            <h1>South Banat District</h1>
            <div className="basicInfo">
              <p>
                <strong>Area: </strong>approximately 2,575 km²
              </p>
              <p>
                <strong>Population: </strong>around 300,000
              </p>
              <p>
                <strong>Geographical characteristics: </strong>Plain, stretching along the
                Tamiš and Danube rivers, rich in fertile soil, suitable for agriculture,
                with developed industrial zones.
              </p>
            </div>
            <button className="okrugButton" onClick={() => setShowArticle(prev => !prev)}>
              {showArticle ? (switchLanguage === 'rs' ? 'Pokaži manje' : 'Show less') : (switchLanguage === 'rs' ? 'Pokaži više' : 'Show more')}
            </button>

            {showArticle &&
              <article lang="en">
                <p>
                  <strong>South Banat District</strong> is one of the seven districts in
                  Vojvodina, located in the southeastern part of Serbia, with the main city
                  of <strong>Pančevo</strong>, which is also the administrative center.
                </p>
                <p>
                  This district includes municipalities such as <strong>Opovo, Kovin</strong>,
                  and <strong>Alibunar</strong>. Pančevo is the economic and cultural hub of
                  the region, known for its developed petrochemical and chemical industries.
                </p>
                <p>
                  South Banat District holds strategic importance due to its position between
                  the <strong>Tamiš</strong> and <strong>Danube Rivers</strong>, facilitating
                  transport and trade. Agriculture, especially crop farming, also plays a
                  significant role in the district’s economy.
                </p>
                <p>
                  The district is home to diverse ethnic communities, contributing to its
                  multicultural character. Cultural events, museums, and galleries enrich
                  the local cultural life, making South Banat a vibrant region within
                  Vojvodina.
                </p>
              </article>
            }
          </section>
            <section className="citatClass">
              <blockquote>
                We live in a wonderful world that is the path of beauty, charm, and adventure.
                There is no end to the adventure we can have only if we seek it with open eyes.
                (Jawaharlal Nehru)
              </blockquote>
            </section>
          </>

        )}

      <section>
        <div className="caruoselClass" style={{ padding: "0" }}>
          {juaznoBanatskiData?.map((okrug, index) => (
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
  );
};


export default JuznoBanatski;