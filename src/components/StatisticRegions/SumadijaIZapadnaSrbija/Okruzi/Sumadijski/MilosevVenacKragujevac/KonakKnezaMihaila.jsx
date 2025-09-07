/* eslint-disable react/no-unknown-property */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac2MV.jpg";
import { useContextAuth } from "../../../../../../Context";
import { Helmet } from "react-helmet-async";
import { sumadijskiOkrugPathRoutes } from "../SumadijskiOkrugPathRoutes";

const KonakKnezaMihaila = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== switchLanguage) {
      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


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

  return (
    <>

      <Helmet>
        <title>
          {switchLanguage === 'rs'
            ? "Konak Kneza Mihaila – Kulturni spomenik od velikog značaja | Srbija Wonders"
            : "Konak of Prince Mihailo – Cultural Monument of Great Importance | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Konak kneza Mihaila, sagrađen 1860. godine u Beogradu, predstavlja značajan primer evropske arhitekture pod uticajem Austrije. Danas u njemu boravi Narodni muzej Srbije."
              : "The Konak of Prince Mihailo, built in 1860 in Belgrade, stands as an important example of European architecture influenced by Austria. Today, it houses the National Museum of Serbia."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Konak kneza Mihaila, Milošev venac, Narodni muzej, beogradska arhitektura, kulturni spomenik, istorija Beograda, knez Mihailo Obrenović"
              : "Konak of Prince Mihailo, Milošev venac, National Museum, Belgrade architecture, cultural monument, history of Belgrade, Prince Mihailo Obrenović"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/konak-kneza-mihaila`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/konak-kneza-mihaila"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/konak-kneza-mihaila"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/konak-kneza-mihaila"
        />
      </Helmet>


      <div className="singleComponent">
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(sumadijskiOkrugPathRoutes.kragujevac(switchLanguage))}
          style={{ fill: "white" }}
        />
        <div
          style={{
            backgroundImage: `url(${z})`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundBlendMode: "overlay",
            color: "white",
            paddingBottom: "50px",
            fontSize: "26px",
            textShadow: "5px 5px 5px black",
          }}
        >

          {switchLanguage === 'rs' ?
            (
              <>
                <h2 style={{ padding: "120px 50px 0 50px", fontSize: "40px" }}>
                  Konak Kneza Mihaila
                </h2>

                <p
                  style={{
                    margin: "50px 50px 70px 50px",
                    overflow: "auto",
                    fontSize: isMobile ? "20px" : "30px",
                  }}
                  className={isMobile ? "scrollableClass" : ""}
                >
                  Konak kneza Mihaila sagrađen je 1860. godine po nalogu kneza Mihaila
                  Obrenovića, unutar dvorskog kompleksa kneza Miloša, današnjeg
                  Miloševog venca. Ovaj orijentalni kompleks izdvajao se kao jedna od
                  prvih evropskih građevina rađenih po austrijskom uzoru. Konak ima
                  visoko prizemlje, sprat i tavan, a osnova mu je pravougaonog oblika.
                  Uticaj evropske arhitekture je vidljiv kroz simetriju i umerenu
                  klasičističku ornamentiku. Krajem XIX veka u njemu je bio Oficirski
                  dom. Danas se u njemu nalaze uprava Narodnog muzeja i muzejska
                  biblioteka. Odlukom Skupštine SR Srbije, zgrada je 1979. godine
                  proglašena za spomenik kulture od velikog značaja.
                </p>
              </>
            )
            :
            (
              <>
                <h2 style={{ padding: "120px 50px 0 50px", fontSize: "40px" }}>
                  The Residence of Prince Mihailo
                </h2>

                <p
                  style={{
                    margin: "50px 50px 70px 50px",
                    overflow: "auto",
                    fontSize: isMobile ? "20px" : "30px",
                  }}
                  className={isMobile ? "scrollableClass" : ""}
                >
                  The Residence of Prince Mihailo was built in 1860 by the order of Prince Mihailo Obrenović, within the court complex of Prince Miloš, known today as Miloš’s Vračar. This oriental-style complex stood out as one of the first European-style buildings constructed following Austrian architectural models. The residence features a raised ground floor, one upper floor, and an attic, with a rectangular floor plan. The influence of European architecture is evident in its symmetry and restrained classical ornamentation. By the end of the 19th century, the building served as the Officers’ Club. Today, it houses the administration of the National Museum and the museum library. By the decision of the Assembly of the Socialist Republic of Serbia, the building was declared a cultural monument of great importance in 1979.
                </p>
              </>
            )}

        </div>
      </div>
    </>
  );
};


export default KonakKnezaMihaila;