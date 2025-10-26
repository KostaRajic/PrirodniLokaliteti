/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/desktop/ssg9.jpg";
import { moravickiOkrugPathRoutes } from "../MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../../Context";
import { Helmet } from "react-helmet-async";


const ManastirVavedenje = () => {
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
            ? "Manastir Vavedenje – Duhovna kapija Ovčarsko-kablarske klisure | Serbia Wonders"
            : "The Vavedenje Monastery – The Spiritual Gateway to the Ovčar-Kablar Gorge | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Vavedenje se nalazi na samom ulazu u Ovčarsko-kablarsku klisuru i datira iz 16. veka. Poznat je po ikonostasu sa delima Nikole Apostolovića i sačuvanim carskim vratima sa scenom Blagovesti. Umetničku celinu čine preostale i restaurirane ikone."
              : "The Vavedenje Monastery is located at the very entrance of the Ovčar-Kablar Gorge and dates back to the 16th century. It is known for its iconostasis featuring works by Nikola Apostolović and preserved royal doors depicting the Annunciation. The artistic whole is complemented by surviving icons."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Vavedenje, Ovčarsko-kablarska klisura, ikonostas, Nikola Apostolović, Blagovesti, carske dveri, manastiri Srbije, duhovni turizam"
              : "Vavedenje Monastery, Ovčar-Kablar Gorge, iconostasis, Nikola Apostolović, Annunciation, royal doors, Serbian monasteries, spiritual tourism"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-vavedenje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-uspenje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-uspenje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-uspenje"
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
            {switchLanguage === 'rs' ? 'Manastir Vavedenje' : 'The Vavedenje Monastery'}
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
                Manastir Vavedenje je podignut na samom početku klisure. Stilističke
                karakteristike originalnih delova hrama ukazuju na to da je manastir
                nastao u 16. veku. Ikonostas manastira Vavedenje čine, između ostalih,
                ikone Nikole Apostolovića, Bogorodica sa Hristom i Isus Hristos.
                Sačuvane su i pozlaćene carske vrata na kojima je prikazana scena
                Blagovesti. Skromnu umetničku celinu koju čini ikonostas ovog
                manastira dopunjuju ikone koje su preostale i sačuvane.
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
                The Vavedenje Monastery is located at the very entrance of the gorge. The stylistic characteristics of the original parts of the church suggest that the monastery was built in the 16th century. The iconostasis of the Vavedenje Monastery includes, among others, icons by Nikola Apostolović, such as the Virgin Mary with Christ and Jesus Christ. The gilded royal doors have also been preserved, featuring a depiction of the Annunciation scene. The modest artistic ensemble of the monastery’s iconostasis is complemented by the remaining preserved icons.
              </p>
            )}

        </div>
      </div>
    </>
  );
};


export default ManastirVavedenje;