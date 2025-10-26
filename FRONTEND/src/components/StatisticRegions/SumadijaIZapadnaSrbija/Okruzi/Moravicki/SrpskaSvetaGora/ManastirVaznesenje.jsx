/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/desktop/ssg10.jpg";
import { moravickiOkrugPathRoutes } from "../MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../../Context";
import { Helmet } from "react-helmet-async";


const ManastirVaznesenje = () => {
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
            ? "Manastir Vaznesenje – Svedok vekovne duhovnosti Ovčara | Serbia Wonders"
            : "The Vaznesenje Monastery – A Witness of Centuries-Old Spirituality on Ovčar | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Vaznesenje nalazi se na severnim padinama Ovčara i datira iz 16. veka, o čemu svedoči rukopisno jevanđelje iz 1570. godine. Stradao je tokom Velike seobe 1690. godine, a obnovljen je tek 1930-ih zahvaljujući episkopu Nikolaju Velimiroviću."
              : "The Vaznesenje Monastery is located on the northern slopes of Ovčar and dates back to the 16th century, as evidenced by a handwritten Gospel from 1570. It was destroyed during the Great Migration of 1690 and restored only in the 1930s through the efforts of Bishop Nikolaj Velimirović."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Vaznesenje, Ovčar, Velika seoba Srba, jevanđelje iz 1570, Nikolaj Velimirović, manastiri Srbije, duhovni turizam, obnova manastira"
              : "Vaznesenje Monastery, Ovčar, Great Migration of Serbs, 1570 Gospel, Nikolaj Velimirović, Serbian monasteries, spiritual tourism, monastery restoration"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-vaznesenje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-vaznesenje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-vaznesenje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-vaznesenje"
        />


      </Helmet>



      <div className="singleComponent">
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(moravickiOkrugPathRoutes.ovcarskoKablarskaKlisura(switchLanguage))}
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
          <h2 style={{ padding: "50px 50px 0 50px", fontSize: "40px" }}>
            {switchLanguage === 'rs' ? 'Manastir Vaznesenje' : 'The Vaznesenje Monastery'}
          </h2>
          {switchLanguage === 'rs' ?
            (
              <p
                style={{
                  margin: "50px 50px 70px 50px",
                  overflow: "auto",
                  fontSize: isMobile ? "20px" : "30px",
                }}
                className={isMobile ? "scrollableClass" : ""}
              >
                Manastir Vaznesenje podignut je na severnim padinama Ovčara.
                Zahvaljujući jednom rukopisnom jevanđelju, koje je napisano u
                Vaznesenju 1570. godine, sigurno je da je manastir postojao u 16.
                veku. Manastir je verovatno stradao, kao i mnogi drugi manastiri u
                klisuri, tokom Velike seobe 1690. godine. Nakon više neuspešnih
                pokušaja obnove, tek su tridesetih godina 20. veka, episkop Nikolaj
                Velimirović i započeli obnovu ovog manastira.
              </p>
            )
            :
            (
              <p
                style={{
                  margin: "50px 50px 70px 50px",
                  overflow: "auto",
                  fontSize: isMobile ? "20px" : "30px",
                }}
                className={isMobile ? "scrollableClass" : ""}
              >
                The Vaznesenje Monastery was built on the northern slopes of Mount Ovčar. Thanks to a handwritten gospel written in Vaznesenje in 1570, it is certain that the monastery existed in the 16th century. The monastery likely suffered destruction, like many others in the gorge, during the Great Migration of 1690. After several failed attempts at restoration, it was not until the 1930s that Bishop Nikolaj Velimirović initiated the successful reconstruction of the monastery.
              </p>
            )}

        </div>
      </div>
    </>
  );
};


export default ManastirVaznesenje;