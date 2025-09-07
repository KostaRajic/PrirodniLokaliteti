/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/desktop/ssg5.jpg";
import { moravickiOkrugPathRoutes } from "../MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../../Context";
import { Helmet } from "react-helmet-async";

const ManastirPreobraženje = () => {
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
            ? "Manastir Preobraženje – Duhovni biser Ovčarsko-kablarske klisure | Serbia Wonders"
            : "The Preobraženje Monastery – A Spiritual Gem of the Ovčar-Kablar Gorge | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Preobraženje se nalazi na severnim obroncima Ovčara, s desne strane Zapadne Morave. Prvi put se pominje 1525. godine, a originalna lokacija je ustupila mesto železničkoj pruzi prema Užicu. Danas manastir predstavlja značajnu duhovnu tačku regiona."
              : "The Preobraženje Monastery is located on the northern slopes of Ovčar, on the right bank of the West Morava River. First mentioned in 1525, the original site was removed to make way for the railway to Užice. Today, the monastery remains an important spiritual site."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Preobraženje, Ovčarsko-kablarska klisura, Zapadna Morava, duhovni turizam, manastiri Srbije, Ovčar Banja, železnička pruga, istorija"
              : "Preobraženje Monastery, Ovčar-Kablar Gorge, West Morava, spiritual tourism, Serbian monasteries, Ovčar Banja, railway, history"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-preobrazenje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-preobrazenje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-preobrazenje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-preobrazenje"
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
            {switchLanguage === 'rs' ? 'Manastir Preobraženje' : 'The Preobraženje Monastery'}
          </h2>
          {
            switchLanguage === 'rs' ?
              (
                <p
                  style={{
                    margin: "50px 50px 70px 50px",
                    overflow: "auto",
                    fontSize: isMobile ? "20px" : "30px",
                  }}
                  className={isMobile ? "scrollableClass" : ""}
                >
                  Manastir Preobraženje danas se nalazi sa desne strane Zapadne Morave,
                  na severnim obroncima Ovčara. Naspram manastira, preko reke, smeštena
                  je železnička stanica u Ovčar Banji, na mestu gde se nekada nalazio
                  manastir, ispod litica Kablara. Prvi pomen manastira Preobraženja u
                  pisanim izvorima datira iz 1525. godine. Stari manastir Preobraženje
                  je srušen, uz odobrenje vladike žičkog Save, kako bi se izgradila
                  železnička pruga prema Užicu.
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
                  The Preobraženje Monastery is today located on the right bank of the Western Morava River, on the northern slopes of Ovčar. Opposite the monastery, across the river, lies the railway station in Ovčar Banja, at the site where the monastery once stood, beneath the cliffs of Kablar. The first mention of the Preobraženje Monastery in written sources dates back to 1525. The old Preobraženje Monastery was demolished, with the approval of the Žiča Bishop Sava, to make way for the construction of the railway line to Užice.
                </p>
              )
          }

        </div>
      </div>
    </>
  );
};


export default ManastirPreobraženje;