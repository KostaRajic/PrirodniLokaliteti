/* eslint-disable react/no-unknown-property */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac1MV.jpg";
import { useContextAuth } from "../../../../../../Context";
import { sumadijskiOkrugPathRoutes } from "../SumadijskiOkrugPathRoutes";
import { Helmet } from "react-helmet-async";

const StaraPridvornaCrkva = () => {
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
            ? "Stara crkva u Kragujevcu – Pridvorna crkva kneza Miloša | Srbija Wonders"
            : "Old Church in Kragujevac – Prince Miloš’s Court Church | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Stara crkva u Kragujevcu, podignuta 1818. godine po nalogu kneza Miloša Obrenovića, bila je prva mitropolitska i dvorska crkva u oslobođenoj Srbiji. U njenoj porti donet je Prvi srpski ustav."
              : "The Old Church in Kragujevac, built in 1818 by order of Prince Miloš Obrenović, was the first metropolitan and court church in liberated Serbia. The First Serbian Constitution was adopted in its courtyard."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Stara crkva, Pridvorna crkva, Kragujevac, knez Miloš Obrenović, Prvi srpski ustav, Sretenjska skupština, srpska istorija, crkve Srbije, mitropolitska crkva"
              : "Old Church, Court Church, Kragujevac, Prince Miloš Obrenović, First Serbian Constitution, Sretenje Assembly, Serbian history, churches in Serbia, metropolitan church"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/stara-pridvorna-crkva`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/stara-pridvorna-crkva"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/stara-pridvorna-crkva"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/stara-pridvorna-crkva"
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
                  Stara (Pridvorna crkva)
                </h2>

                <p
                  style={{
                    margin: "50px 50px 70px 50px",
                    overflow: "auto",
                    fontSize: isMobile ? "20px" : "30px",
                  }}
                  className={isMobile ? "scrollableClass" : ""}
                >
                  Stara (Pridvorna crkva) podignuta je 1818. godine, na mestu
                  nekadašnjeg groblja. Knez Miloš Obrenović, kao ktitor ovog hrama, nije
                  štedeo na materijalnim sredstvima, angažujući najbolje majstore za
                  izgradnju crkve. Crkva je posvećena Silasku Svetog Duha na apostole.
                  Zadužbina kneza Miloša više puta je rekonstruisana. Godine 1829. prvi
                  put su zazvonila zvona ove crkve. Stara crkva bila je prva
                  mitropolitska, katedralna i dvorska crkva u oslobođenoj Srbiji. U
                  njenoj porti proglašavane su gotovo sve značajne odluke za srpski
                  narod, uključujući hatišerife i ustave. U porti crkve održana je i
                  Sretenjska skupština 1835. godine, na kojoj je donet Prvi srpski
                  ustav. Sva skupštinska zasedanja do 1859. godine održavana su u porti
                  crkve, a od te godine u novoizgrađenoj skupštinskoj zgradi.
                </p>
              </>
            )
            :
            (
              <>
                <h2 style={{ padding: "120px 50px 0 50px", fontSize: "40px" }}>
                  The Old (Court) Church
                </h2>

                <p
                  style={{
                    margin: "50px 50px 70px 50px",
                    overflow: "auto",
                    fontSize: isMobile ? "20px" : "30px",
                  }}
                  className={isMobile ? "scrollableClass" : ""}
                >
                  The Old (Court) Church was built in 1818 on the site of a former cemetery. Prince Miloš Obrenović, as the founder of this church, spared no expense, employing the best craftsmen for its construction. The church is dedicated to the Descent of the Holy Spirit upon the Apostles. Prince Miloš’s endowment has been reconstructed several times. In 1829, the church bells rang for the first time. The Old Church was the first metropolitan, cathedral, and court church in liberated Serbia. Almost all significant decisions for the Serbian people, including firman decrees and constitutions, were proclaimed in its courtyard. The Sretenje Assembly of 1835, during which the First Serbian Constitution was adopted, was also held in the church’s courtyard. All assembly sessions until 1859 took place in the church courtyard, after which they were held in the newly built parliamentary building.
                </p>
              </>
            )}

        </div>
      </div>
    </>
  );
};


export default StaraPridvornaCrkva;