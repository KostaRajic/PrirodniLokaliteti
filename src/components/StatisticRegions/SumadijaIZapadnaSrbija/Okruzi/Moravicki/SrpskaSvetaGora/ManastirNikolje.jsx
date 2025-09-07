/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/desktop/ssg4.jpg";
import { moravickiOkrugPathRoutes } from "../MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../../Context";
import { Helmet } from "react-helmet-async";

const ManastirNikolje = () => {
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
            ? "Manastir Nikolje – Najstariji manastir Ovčarsko-kablarske klisure | Serbia Wonders"
            : "The Nikolje Monastery – The Oldest Monastery in the Ovčar-Kablar Gorge | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Nikolje je najstariji među manastirima Ovčarsko-kablarske klisure. Podignut je na padinama Kablara i poznat je po Karanovskom jevanđelju i istorijskoj ulozi tokom turskih osvajanja. Miloš Obrenović je tu izgradio konak koji i danas postoji."
              : "The Nikolje Monastery is the oldest among the monasteries of the Ovčar-Kablar Gorge. Built on the slopes of Mount Kablar, it is renowned for the Karan Gospel and its historical role during the Ottoman era. Miloš Obrenović built a residence there that still stands today."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Nikolje, Ovčarsko-kablarska klisura, Miloš Obrenović, Karanovsko jevanđelje, stari manastiri, duhovni turizam, Zapadna Morava, Kablar"
              : "Nikolje Monastery, Ovčar-Kablar Gorge, Miloš Obrenović, Karan Gospel, old monasteries, spiritual tourism, West Morava, Kablar"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-nikolje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-nikolje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-nikolje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-nikolje"
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
            {switchLanguage === 'rs' ? 'Manastir Nikolje' : 'The Nikolje Monastery'}
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
                Manastir Nikolje, najstarija crkva među Ovčarsko-Kablarskim
                manastirima, podignut je na padinama Kablara, na levoj obali Zapadne
                Morave. Na osnovu arhitektonskih karakteristika, pretpostavlja se da
                potiče iz srednjeg veka, verovatno kraja 14. ili početka 15. veka. U
                riznici manastira Nikolje čuva se najvažnija rukopisna knjiga u
                srpskoj kulturi, Karanovsko jevanđelje, napisano početkom 17. veka. U
                manastiru je nekoć živelo i do 300 monaha. Tu se od Turaka sklonio i
                Miloš Obrenović sa porodicom. On je 1817. godine sagradio konak u
                manastirskoj porti koji i danas postoji i nosi njegovo ime.
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
                The Nikolje Monastery, the oldest church among the Ovčar-Kablar monasteries, was built on the slopes of Kablar, on the left bank of the Western Morava River. Based on architectural features, it is believed to date back to the Middle Ages, probably the late 14th or early 15th century. The monastery’s treasury houses the most important manuscript in Serbian culture, the Karanovo Gospel, written in the early 17th century. At one time, up to 300 monks lived in the monastery. Miloš Obrenović and his family also took refuge here from the Turks. In 1817, he built a residence in the monastery courtyard that still exists today and bears his name.
              </p>
            )}


        </div>
      </div>
    </>
  );
};


export default ManastirNikolje;