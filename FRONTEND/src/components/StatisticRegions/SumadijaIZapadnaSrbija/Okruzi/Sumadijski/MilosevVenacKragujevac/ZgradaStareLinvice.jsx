/* eslint-disable react/no-unknown-property */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac33MV.jpg";
import { useContextAuth } from "../../../../../../Context";
import { sumadijskiOkrugPathRoutes } from "../SumadijskiOkrugPathRoutes";
import { Helmet } from "react-helmet-async";

const ZgradaStareLivnice = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const { switchLanguage } = useContextAuth();

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
            ? "Zgrada Stare Livnice – Industrijsko nasleđe Kragujevca | Srbija Wonders"
            : "Old Foundry Building – Industrial Heritage of Kragujevac | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Zgrada Stare Livnice u Kragujevcu potiče iz 19. veka i predstavlja jedan od najstarijih industrijskih objekata u Srbiji. Danas u njoj funkcioniše Muzej „Stara Livnica“ kao simbol industrijske revolucije."
              : "The Old Foundry Building in Kragujevac dates back to the 19th century and is one of the oldest industrial structures in Serbia. Today, it houses the 'Stara Livnica' Museum, symbolizing the industrial era."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Stara Livnica, Kragujevac, industrijsko nasleđe, Muzej Stara Livnica, Topolivnica, industrijska arhitektura, istorija Kragujevca, industrija u Srbiji"
              : "Old Foundry, Kragujevac, industrial heritage, Stara Livnica Museum, Topolivnica, industrial architecture, Kragujevac history, Serbian industry"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/zgrada-stare-livnice`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/zgrada-stare-livnice"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/zgrada-stare-livnice"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/zgrada-stare-livnice"
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
                  Zgrada Stare Livnice
                </h2>

                <p
                  style={{
                    margin: "50px 50px 70px 50px",
                    overflow: "auto",
                    fontSize: isMobile ? "20px" : "30px",
                  }}
                  className={isMobile ? "scrollableClass" : ""}
                >
                  Zgrada Stare Livnice predstavlja jedan od najstarijih industrijskih
                  objekata na ovom području. Kada je 1851. godine Topolivnica premeštena
                  iz Beograda u Kragujevac, započeta je izgradnja industrijskog
                  kompleksa. Sadašnja zgrada Livnice potiče iz osamdesetih godina XIX
                  veka i delimično je izgrađena na temeljima nekadašnje Topolivnice.
                  Građena je po uzoru na slične industrijske objekte ovog tipa u
                  Nemačkoj i Francuskoj. Danas se u njoj nalazi Muzej „Stara Livnica“.
                </p>
              </>
            )
            :
            (
              <>
                <h2 style={{ padding: "120px 50px 0 50px", fontSize: "40px" }}>
                  The Old Foundry building
                </h2>

                <p
                  style={{
                    margin: "50px 50px 70px 50px",
                    overflow: "auto",
                    fontSize: isMobile ? "20px" : "30px",
                  }}
                  className={isMobile ? "scrollableClass" : ""}
                >
                  The Old Foundry building is one of the oldest industrial structures in this area. When the Foundry was relocated from Belgrade to Kragujevac in 1851, the construction of the industrial complex began. The current Foundry building dates back to the 1880s and is partially built on the foundations of the former Foundry. It was constructed based on models of similar industrial facilities in Germany and France. Today, it houses the “Old Foundry” Museum.
                </p>
              </>
            )}

        </div>
      </div>
    </>
  );
};


export default ZgradaStareLivnice;