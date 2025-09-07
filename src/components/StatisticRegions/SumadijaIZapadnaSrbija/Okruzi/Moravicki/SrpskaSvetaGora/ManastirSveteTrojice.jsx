/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/desktop/ssg7.jpg";
import { moravickiOkrugPathRoutes } from "../MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../../Context";
import { Helmet } from "react-helmet-async";


const ManastirSveteTrojice = () => {
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
            ? "Manastir Svete Trojice – Najlepši hram Ovčarsko-kablarske klisure | Serbia Wonders"
            : "The Holy Trinity Monastery – The Most Beautiful Church of the Ovčar-Kablar Gorge | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Svete Trojice se smatra najlepšim hramom Ovčarsko-kablarske klisure. Podignut na jugozapadnim padinama Ovčara u 16. veku, manastir je poznat po prestolnom krstu izvezenom zlatom i srebrnom žicom, kao i po vrednim ikonama iz tog perioda."
              : "The Holy Trinity Monastery is considered the most beautiful church in the Ovčar-Kablar Gorge. Built in the 16th century on the southwestern slopes of Ovčar, the monastery is known for its throne cross embroidered with gold and silver thread, and its valuable icons."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Svete Trojice, Ovčarsko-kablarska klisura, prestolni krst, antikvitetne ikone, manastiri Srbije, duhovni turizam, Ovčar, 16. vek"
              : "Holy Trinity Monastery, Ovčar-Kablar Gorge, throne cross, antique icons, Serbian monasteries, spiritual tourism, Ovčar, 16th century"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-svete-trojice`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-svete-trojice"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-svete-trojice"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-svete-trojice"
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
            {switchLanguage === 'rs' ? 'Manastir Svete Trojice' : 'The Holy Trinity Monastery'}
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
                Crkva manastira Sv. Trojice, zbog svoje arhitekture, smatra se
                najlepšim hramom u Ovčarsko-Kablarskoj klisuri, smeštena na
                jugozapadnim šumovitim padinama Ovčara. Nije utvrđeno ko je i kada
                podigao manastir. Na osnovu dosadašnjih saznanja, koja se oslanjaju na
                turske popise, ovaj manastir potiče iz druge polovine 16. veka. Kao i
                ostali manastiri u Srbiji, i ovaj je pretrpeo stradanja krajem 17.
                veka. U manastiru Sv. Trojice čuva se jedan veliki prestolni krst,
                izvezen zlatom i srebrnom žicom, od velike umetničke vrednosti. Pored
                tog krsta, u manastiru se nalaze i dve jedinstvene prestolne ikone –
                Spasiteljeva i Bogorodičina – od antikvitetne vrednosti.
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
                The church of the Holy Trinity Monastery is considered the most beautiful temple in the Ovčar-Kablar Gorge due to its architecture. It is located on the southwestern forested slopes of Mount Ovčar. It is not known who built the monastery or when it was founded. Based on current knowledge, which relies on Ottoman records, the monastery dates back to the second half of the 16th century. Like other monasteries in Serbia, it suffered destruction at the end of the 17th century.
                The Holy Trinity Monastery preserves a large throne cross, embroidered with gold and silver thread, of great artistic value. In addition to this cross, the monastery also houses two unique throne icons — of Christ the Savior and the Virgin Mary — both of significant antique value.
              </p>
            )}

        </div>
      </div>
    </>
  );
};


export default ManastirSveteTrojice;