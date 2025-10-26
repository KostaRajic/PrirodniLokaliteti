/* eslint-disable react/no-unknown-property */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/desktop/ssg2.jpg";
import { moravickiOkrugPathRoutes } from "../MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../../Context";
import { Helmet } from "react-helmet-async";

const ManastirJovanje = () => {
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
            ? "Manastir Jovanje – Duhovno utočište na obali Zapadne Morave | Serbia Wonders"
            : "The Jovanje Monastery – A Spiritual Retreat on the Banks of the West Morava | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Jovanje se nalazi na obali Zapadne Morave, u njenom najvećem meandru. Iako je njegova istorija obavijena misterijom, manastir nosi značajno kulturno i duhovno nasleđe. Današnja crkva čuva vredne ikone iz 19. veka."
              : "The Jovanje Monastery is located on the banks of the West Morava River, at its largest meander. Though its origins are uncertain, the monastery holds significant cultural and spiritual heritage. The present-day church preserves valuable 19th-century icons."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Jovanje, Zapadna Morava, manastiri Srbije, duhovni turizam, crkva Svetog Jovana, religija, kultura, istorija, ikone"
              : "Jovanje Monastery, West Morava, Serbian monasteries, spiritual tourism, Church of St. John, religion, culture, history, icons"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-jovanje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-jovanje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-jovanje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-jovanje"
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
            {switchLanguage === 'rs' ? 'Manastir Jovanje' : 'The Jovanje Monastery'}
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
                Manastir Jovanje nalazi se na levoj obali reke Zapadne Morave, na
                njenom najvećem meandru. Niko sa sigurnošću ne može da kaže ko je i
                kada izgradio Jovanje. Stara crkva posvećena Svetom Jovanu potopljena
                je 1954. godine prilikom izgradnje hidroelektrane. Brojna razaranja i
                rušenja koja je manastir pretrpeo potpuno su uništila gotovo sve
                tragove prvobitne građevine. Tako je nestala i riznica nekada velikog
                hrama. Najvredniji predmeti u riznici su dve prestolne ikone iz 1850.
                godine.
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
                The Jovanje Monastery is located on the left bank of the Western Morava River, at its largest meander. No one can say for certain who built Jovanje and when. The old church, dedicated to Saint John, was submerged in 1954 during the construction of a hydroelectric power plant. Numerous destructions and demolitions suffered by the monastery have completely erased almost all traces of the original building. Thus, the treasury of what was once a great temple disappeared as well. The most valuable items in the treasury are two throne icons from 1850.
              </p>
            )}


        </div>
      </div>
    </>
  );
};


export default ManastirJovanje;