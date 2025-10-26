/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/desktop/ssg6.jpg";
import { moravickiOkrugPathRoutes } from "../MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../../Context";
import { Helmet } from "react-helmet-async";

const ManastirSavinje = () => {
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
            ? "Manastir Savinje – Svetilište pod liticama Kablara | Serbia Wonders"
            : "Savinje Monastery – A Sacred Site Beneath Kablar Cliffs | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Savinje se nalazi pod liticama Kablara, kraj izvora poznatog kao Savina voda, za koju se veruje da leči vid i glavobolju. Mala crkva sagrađena je 1938. godine, a bogosluženja vrše monasi iz manastira Preobraženje tokom verskih praznika."
              : "Savinje Monastery is located beneath the steep cliffs of Mount Kablar, near the Savina spring, believed to heal eyesight and headaches. A small church was built there in 1938, and monks from Preobraženje Monastery hold services on religious holidays."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Savinje, Savina voda, Kablar, Ovčarsko-kablarska klisura, isceljujući izvor, duhovni turizam, mala crkva, Preobraženje"
              : "Savinje Monastery, Savina spring, Kablar, Ovčar-Kablar Gorge, healing spring, spiritual tourism, small church, Preobraženje Monastery"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-savinje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-savinje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-savinje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-savinje"
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
            {switchLanguage === 'rs' ? 'Manastir Savinje' : 'Savinje Monastery'}
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
                Podno najstrmijih litica Kablara, u kamenoj udubini, izvire voda.
                Veruje se da ta voda, poznata kao Savina, leči vid i glavobolju. U
                blizini izvora, 1938. godine, sagrađena je mala crkva pod stenama. U
                njoj, tokom praznika, bogosluženja obavljaju monasi iz manastira
                Preobraženje.
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
                At the foot of the steepest cliffs of Kablar, water springs from a rocky hollow. It is believed that this water, known as Savina, cures eyesight and headaches. Near the spring, a small church was built under the rocks in 1938. During holidays, monks from the Preobraženje Monastery perform religious services there.
              </p>
            )}

        </div>
      </div>
    </>
  );
};


export default ManastirSavinje;