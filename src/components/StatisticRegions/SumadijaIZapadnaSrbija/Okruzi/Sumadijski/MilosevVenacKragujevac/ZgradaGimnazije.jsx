/* eslint-disable react/no-unknown-property */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Kragujevac/desktop/kragujevac33MV.jpg";
import { useContextAuth } from "../../../../../../Context";
import { sumadijskiOkrugPathRoutes } from "../SumadijskiOkrugPathRoutes";
import { Helmet } from "react-helmet-async";

const ZgradaGimnazije = () => {
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
            ? "Zgrada Gimnazije u Kragujevcu – Prva gimnazija u Srbiji | Srbija Wonders"
            : "Gymnasium Building in Kragujevac – First High School in Serbia | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Zgrada Gimnazije u Kragujevcu, podignuta 1887. godine, predstavlja jednu od najmonumentalnijih školskih građevina u Srbiji. Danas čuva Spomen učionicu posvećenu streljanim učenicima i profesorima iz 1941."
              : "The Gymnasium Building in Kragujevac, built in 1887, is one of the most monumental school buildings in Serbia. Today, it includes a Memorial Classroom dedicated to students and teachers executed in 1941."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Zgrada Gimnazije, Kragujevac, Prva gimnazija u Srbiji, Spomen učionica, 21. oktobar 1941, školstvo u Srbiji, kulturni spomenik, istorija obrazovanja"
              : "Gymnasium Building, Kragujevac, first Serbian high school, Memorial Classroom, October 21 1941, Serbian education history, cultural monument, Serbian schools"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/zgrada-gimnazije`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/zgrada-gimnazije"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/zgrada-gimnazije"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/kragujevac/zgrada-gimnazije"
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
                  Zgrada Gimnazije
                </h2>

                <p
                  style={{
                    margin: "50px 50px 70px 50px",
                    overflow: "auto",
                    fontSize: isMobile ? "20px" : "30px",
                  }}
                  className={isMobile ? "scrollableClass" : ""}
                >
                  Zgrada Gimnazije je jedna od najmonumentalnijih školskih zgrada
                  podignutih u Srbiji u XIX veku. Sagrađena je 1887. godine, kada je
                  prva Gimnazija u Srbiji, osnovana 1833. godine, dobila svoju zgradu.
                  Iz učionica ove škole, 21. oktobra 1941. godine, Nemci su izveli
                  veliki broj đaka i profesora na streljanje. Jedna od učionica je
                  preuređena u Spomen učionicu, posvećenu ovom tragičnom događaju.
                </p>
              </>
            )
            :
            (
              <>
                <h2 style={{ padding: "120px 50px 0 50px", fontSize: "40px" }}>
                  The Gymnasium building
                </h2>

                <p
                  style={{
                    margin: "50px 50px 70px 50px",
                    overflow: "auto",
                    fontSize: isMobile ? "20px" : "30px",
                  }}
                  className={isMobile ? "scrollableClass" : ""}
                >
                  The Gymnasium building is one of the most monumental school buildings constructed in Serbia in the 19th century. It was built in 1887, when the first Gymnasium in Serbia, founded in 1833, received its own building. On October 21, 1941, the Germans took a large number of students and teachers from the classrooms of this school to be executed. One of the classrooms has been converted into a Memorial Classroom dedicated to this tragic event.
                </p>
              </>
            )}

        </div>
      </div>
    </>
  );
};


export default ZgradaGimnazije;