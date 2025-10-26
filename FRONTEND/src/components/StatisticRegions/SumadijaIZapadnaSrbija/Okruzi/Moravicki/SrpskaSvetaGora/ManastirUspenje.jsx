/* eslint-disable react/no-unknown-property */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import z from "../../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/OvcarskoKablarskaKlisura/srpskaSvetaGora/desktop/ssg8.jpg";
import { moravickiOkrugPathRoutes } from "../MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../../Context";
import { Helmet } from "react-helmet-async";


const ManastirUspenje = () => {
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
            ? "Manastir Uspenje – Svetilište vidljivo iz cele klisure | Serbia Wonders"
            : "The Uspenje Monastery – A Sanctuary Visible from the Entire Gorge | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Uspenje se nalazi iznad manastira Jovanje i vidljiv je iz svih delova Ovčarsko-kablarske klisure. Prvi put se pominje 1536. godine. Današnja crkva je podignuta 1939. kao verna kopija ohridskog hrama. Manastir čuvaju monahinje od 2004. godine."
              : "The Uspenje Monastery is situated above the Jovanje Monastery and is visible from all parts of the Ovčar-Kablar Gorge. First mentioned in 1536, the current church was built in 1939 as a faithful replica of the Church of St. Constantine and Helena in Ohrid. Nuns have resided there since 2004."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Uspenje, Ovčarsko-kablarska klisura, monahinje, Presveta Bogorodica, Vladika Nikolaj, srpski manastiri, Uspenje Presvete Bogorodice, Efeski mučenici"
              : "Uspenje Monastery, Ovčar-Kablar Gorge, nuns, Holy Mother of God, Bishop Nikolaj, Serbian monasteries, Dormition of the Theotokos, Seven Sleepers of Ephesus"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/ovcarsko-kablarska-klisura/manastir-uspenje`}
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
            {switchLanguage === 'rs' ? 'Manastir Uspenje' : 'The Uspenje Monastery'}
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
                Na uzvišenju iznad manastira Jovanje nalazi se manastir Uspenje, koji
                je vidljiv sa svih strana klisure. U turskim izvorima pominje se 1536.
                godine. Posvećen je Uspenju Presvete Bogorodice. Na tom mestu je
                nekada postojala kula sa zvonikom visoka oko 30 metara. Pretpostavlja
                se da su je Turci srušili u isto vreme kada i manastir Jovanje.
                Vladika Nikolaj je na tom mestu zatekao samo ruševine. Po njegovoj
                želji, 1939. godine izgrađena je nova crkva manastira Uspenja, koja je
                verna kopija crkve Sv. Cara Konstantina i Jelene u Ohridu. Prvobitni
                ikonosats uništili su Bugari 1943. godine. Manastir je ponovo
                obnovljen 1998. godine, a 2004. godine naselile su ga monahinje.
                Manastirski hram ima nekoliko posebnosti koje se retko viđaju u drugim
                srpskim pravoslavnim crkvama. Crkva manastira Uspenja ima vrlo mali
                broj prozora uskog pravougaonog oblika, bez ikakvih ukrasa. Nikada
                nije bila slikana. U manastirskom hramu zapravo postoje dve crkve koje
                dele jednu zajedničku pripratu. Levi deo hrama posvećen je Uspenju
                Presvete Bogorodice, a desni Sedmorici efeskih mučenika.
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
                On an elevation above the Jovanje Monastery lies the Uspenje Monastery, visible from all sides of the gorge. It is mentioned in Ottoman sources in 1536 and is dedicated to the Dormition of the Most Holy Mother of God. A tower with a bell tower, approximately 30 meters high, once stood at this location. It is believed that the Turks demolished it at the same time as the Jovanje Monastery. When Bishop Nikolaj visited the site, he found only ruins. At his request, a new church for the Uspenje Monastery was built in 1939, modeled after the Church of St. Constantine and Helena in Ohrid. The original iconostasis was destroyed by the Bulgarians in 1943.
                The monastery was restored again in 1998, and in 2004 it became home to a community of nuns. The monastery church has several unique features rarely seen in other Serbian Orthodox churches. It has a very small number of narrow rectangular windows, completely undecorated, and the church interior has never been painted. In fact, the monastery church contains two chapels that share a single narthex. The left part is dedicated to the Dormition of the Most Holy Mother of God, while the right is dedicated to the Seven Sleepers of Ephesus.
              </p>
            )}

        </div>
      </div>
    </>
  );
};


export default ManastirUspenje;