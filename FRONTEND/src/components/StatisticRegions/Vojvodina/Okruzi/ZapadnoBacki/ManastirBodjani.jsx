/* eslint-disable react/no-unknown-property */
import manastirBodjani1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/desktop/ManastirBodjani1.jpg";
import manastirBodjani2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/desktop/ManastirBodjani2.jpg";
import manastirBodjani3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/desktop/ManastirBodjani3.jpg";
import manastirBodjani4 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/desktop/ManastirBodjani4.jpg";
import manastirBodjani11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/mobile/MManastirBodjani1.jpg";
import manastirBodjani22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/mobile/MManastirBodjani2.jpg";
import manastirBodjani33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/mobile/MManastirBodjani3.jpg";
import manastirBodjani44 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/mobile/MManastirBodjani4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirBodjani = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== switchLanguage) {
      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);

  return (
    <>

      <Helmet>
        <title>
          {switchLanguage === "rs"
            ? "Manastir Bođani | Srpski Pravoslavni Manastir u Vojvodini | Serbia Wonders"
            : "Bodjani Monastery | Serbian Orthodox Monastery in Vojvodina | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? "Manastir Bođani je srpski pravoslavni manastir posvećen Vavedenju Presvete Bogorodice, poznat po baroknoj arhitekturi, živopisima Kristofora Žefarovića i bogatoj istoriji."
              : "Bodjani Monastery is a Serbian Orthodox monastery dedicated to the Presentation of the Blessed Virgin Mary, renowned for its baroque architecture, frescoes by Kristofor Žefarović, and rich history."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? "Manastir Bođani, srpski pravoslavni manastir, Vojvodina, barok, Kristofor Žefarović, kultura, istorija"
              : "Bodjani Monastery, Serbian Orthodox monastery, Vojvodina, baroque, Kristofor Žefarović, culture, history"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/manastir-bodjani`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/manastir-bodjani"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/manastir-bodjani"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/manastir-bodjani"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${manastirBodjani11} 450w, ${manastirBodjani1} `} alt="manastir Bodjani 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Manastir Bođani</h1>

              <section lang="sr">
                <p>
                  <strong>Manastir Bođani</strong> je <em>srpski pravoslavni manastir</em> koji se nalazi u blizini
                  sela <strong>Bođani</strong>, na severu <strong>Srbije</strong>, u <strong>Vojvodini</strong>.
                </p>
                <p>
                  Posvećen je <strong>Vavedenju Presvete Bogorodice</strong> i predstavlja jedno od
                  <em>značajnijih verskih i kulturnih mesta</em> u ovom regionu.
                </p>
              </section>

              <img srcSet={`${manastirBodjani33} 450w, ${manastirBodjani3} `} alt="manastir Bodjani 3" />

              <section lang="sr">
                <p>
                  Udaljen je <strong>15 km zapadno od Bača</strong>, u pravcu <strong>Dunava</strong>. Kompleks čine
                  <strong>crkva</strong>, <strong>konaci</strong> i <strong>prateći ekonomski objekti</strong>.
                </p>
                <p>
                  Nekoliko puta je <em>razaran i obnavljan</em>, a u doba <strong>Rakozijeve bune</strong> bio je
                  <em>spaljen do temelja</em>.
                </p>
                <p>
                  Prvi manastir izgradio je <strong>trgovac Bogdan iz Dalmacije</strong> <strong>1478. godine</strong>.
                </p>
              </section>

              <img srcSet={`${manastirBodjani22} 450w, ${manastirBodjani2} `} alt="manastir Bodjani 2" />

              <section lang="sr">
                <p>
                  <strong>Veliki konak</strong> i <strong>crkva u Bođanima</strong> sagrađeni su u <strong>baroknom stilu</strong>,
                  a živopis je slikao poznati <em>zograf toga doba</em> <strong>Kristofor Žefarović</strong>.
                </p>
                <p>
                  U konaku se nekada nalazio i <strong>bogat, stručno uređen Muzej</strong> posvećen upravo ovom umetniku,
                  sa mnogim <em>starinskim gravurama</em>, <em>uljanim slikama</em>, <em>crkvenim posudama</em>,
                  <em>štamparskom presom</em> i drugim <em>raritetima</em>.
                </p>
              </section>

              <img srcSet={`${manastirBodjani44} 450w, ${manastirBodjani4} `} alt="manastir Bodjani 4" />

              <section lang="sr">
                <p>
                  U posedu manastira je i <strong>nekoliko hektara zemlje</strong> pod <em>šumom</em> i <em>voćnjacima</em>,
                  i <strong>dvorište</strong> sa dosta <em>cveća</em> i <em>drveća</em>.
                </p>
                <p>
                  U okviru konaka nalazi se <strong>mala kapela</strong> sa <strong>česmom</strong> u sećanje na
                  <strong>Bogdana</strong>, <em>prvog ktitora</em>.
                </p>
                <p>
                  <em>Osećaj duhovnosti, vere i istorijskog značaja</em> oseti se u svakom kutku ovog manastira,
                  <strong>koji treba posetiti</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Bođani Monastery</h1>

              <section lang="en">
                <p>
                  <strong>Bođani Monastery</strong> is a <em>Serbian Orthodox monastery</em> located near the village of
                  <strong>Bođani</strong>, in the north of <strong>Serbia</strong>, in the region of <strong>Vojvodina</strong>.
                </p>
                <p>
                  It is dedicated to the <strong>Presentation of the Most Holy Theotokos</strong> and is one of the
                  <em>most important religious and cultural sites</em> in the region.
                </p>
              </section>

              <img srcSet={`${manastirBodjani33} 450w, ${manastirBodjani3} `} alt="Bođani Monastery 3" />

              <section lang="en">
                <p>
                  It is located <strong>15 km west of Bač</strong>, in the direction of the <strong>Danube River</strong>.
                  The complex consists of a <strong>church</strong>, <strong>residences</strong>, and <strong>auxiliary economic buildings</strong>.
                </p>
                <p>
                  It has been <em>destroyed and rebuilt several times</em>, and during the <strong>Rákóczi Uprising</strong>, it was
                  <em>burned to the ground</em>.
                </p>
                <p>
                  The first monastery was built by <strong>Bogdan, a merchant from Dalmatia</strong>, in <strong>1478</strong>.
                </p>
              </section>

              <img srcSet={`${manastirBodjani22} 450w, ${manastirBodjani2} `} alt="Bođani Monastery 2" />

              <section lang="en">
                <p>
                  The <strong>main residence</strong> and <strong>church in Bođani</strong> were built in <strong>Baroque style</strong>,
                  and the frescoes were painted by the famous <em>iconographer of that era</em> <strong>Kristofor Žefarović</strong>.
                </p>
                <p>
                  The residence once housed a <strong>rich, professionally curated museum</strong> dedicated to this artist,
                  featuring numerous <em>antique engravings</em>, <em>oil paintings</em>, <em>church vessels</em>,
                  a <em>printing press</em>, and other <em>rarities</em>.
                </p>
              </section>

              <img srcSet={`${manastirBodjani44} 450w, ${manastirBodjani4} `} alt="Bođani Monastery 4" />

              <section lang="en">
                <p>
                  The monastery owns <strong>several hectares of land</strong> covered with <em>forests</em> and <em>orchards</em>,
                  and a <strong>courtyard</strong> with plenty of <em>flowers</em> and <em>trees</em>.
                </p>
                <p>
                  Within the residence, there is a <strong>small chapel</strong> with a <strong>fountain</strong> in memory of
                  <strong>Bogdan</strong>, the <em>first patron</em>.
                </p>
                <p>
                  A strong <em>sense of spirituality, faith, and historical significance</em> can be felt in every corner of this monastery,
                  <strong>which is well worth visiting</strong>.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default ManastirBodjani;