/* eslint-disable react/no-unknown-property */
import manastirBlagovestenje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/desktop/manastirBlagovestenje1.jpg";
import manastirBlagovestenje2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/desktop/manastirBlagovestenje2.jpg";
import manastirBlagovestenje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/desktop/manastirBlagovestenje3.jpg";
import manastirBlagovestenje11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/mobile/MmanastirBlagovestenje1.jpg";
import manastirBlagovestenje22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/mobile/MmanastirBlagovestenje2.jpg";
import manastirBlagovestenje33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirBlagoveštenje/mobile/MmanastirBlagovestenje3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useContextAuth } from "../../../../../Context";
import { sumadijskiOkrugPathRoutes } from "./SumadijskiOkrugPathRoutes";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirBlagovestenjeRudnicko = () => {
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
          {switchLanguage === 'rs'
            ? "Manastir Blagoveštenje Rudničko – Duhovno i istorijsko blago Šumadije | Srbija Wonders"
            : "Blagoveštenje Rudničko Monastery – Spiritual and Historical Treasure of Šumadija | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Blagoveštenje Rudničko iz 15. veka, smešten na planini Rudnik, jedno je od najznačajnijih duhovnih i kulturno-istorijskih mesta Šumadije. Saznajte više o njegovoj ulozi kroz vekove."
              : "Blagoveštenje Rudničko Monastery, founded in the 15th century on Mount Rudnik, is a significant spiritual and cultural site in Šumadija. Discover its rich history and natural beauty."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Blagoveštenje Rudničko, Rudnik, Stragari, srpski manastiri, Prvi srpski ustanak, duhovni centar, turizam Šumadija"
              : "Blagoveštenje Rudničko Monastery, Rudnik Mountain, Stragari, Serbian monasteries, First Serbian Uprising, spiritual center, tourism Šumadija"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-blagovestenje-rudnciko`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-blagovestenje-rudnciko"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-blagovestenje-rudnciko"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-blagovestenje-rudnciko"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(sumadijskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${manastirBlagovestenje11} 450w, ${manastirBlagovestenje1} `} alt="Manastir Blagoveštenje Rudničko 1" />

        {switchLanguage === 'rs' ?

          (
            <>


              <h2 style={{ color: "white" }}>Manastir Blagoveštenje Rudničko</h2>

              <section lang="sr">
                <p> Manastir <strong>Blagoveštenje Rudničko</strong>, smešten na severnim obroncima planine <em>Rudnik</em>, u klisuri Blagoveštenske reke, šest kilometara zapadno od <strong>Stragara</strong>, jedno je od značajnih duhovnih mesta Srbije. Osnovan je oko <strong>1400. godine</strong>, a posvećen je <em>Blagoveštenju Presvete Bogorodice</em>. </p>
              </section>

              <img srcSet={`${manastirBlagovestenje22} 450w, ${manastirBlagovestenje2} `} alt="Manastir Blagoveštenje Rudničko 2" />

              <section lang="sr">
                <p> Manastir je tokom svoje istorije više puta stradao i obnavljan. Tokom <strong>Prvog srpskog ustanka</strong>, <strong>1795. godine</strong>, u njemu je skrivano oružje i barut, a <strong>1796. godine</strong> u njemu je učinjen oproštaj <strong>Karađorđu</strong> za ubistvo oca. Danas je manastir aktivni ženski manastir, deo <em>Eparhije šumadijske Srpske pravoslavne crkve</em>. U njemu se nalazi crkva sa freskama iz <strong>14.</strong> i <strong>15. veka</strong>, a kompleks uključuje konake i druge prateće objekte. </p>
              </section>

              <img srcSet={`${manastirBlagovestenje33} 450w, ${manastirBlagovestenje3}`} alt="Manastir Blagoveštenje Rudničko 3" />

              <section lang="sr">
                <p> Manastir <strong>Blagoveštenje Rudničko</strong> predstavlja značajan duhovni centar i kulturno dobro, te je mesto koje privlači posetioce svojom istorijom, arhitekturom i prirodnim okruženjem. </p>
              </section>

            </>
          )
          :
          (
            <>


              <h2 style={{ color: "white" }}>Blagoveštenje Rudničko Monastery</h2>

              <section lang="en">
                <p> The <strong>Blagoveštenje Rudničko Monastery</strong>, located on the northern slopes of <em>Rudnik</em> mountain, in the gorge of the Blagoveštenska River, six kilometers west of <strong>Stragari</strong>, is one of the significant spiritual sites in Serbia. It was founded around <strong>1400</strong> and is dedicated to the <em>Annunciation of the Most Holy Theotokos</em>. </p>
              </section>

              <img srcSet={`${manastirBlagovestenje22} 450w, ${manastirBlagovestenje2}`} alt="Blagoveštenje Rudničko Monastery 2" />

              <section lang="en">
                <p> Throughout its history, the monastery has suffered damage and been restored multiple times. During the <strong>First Serbian Uprising</strong>, in <strong>1795</strong>, weapons and gunpowder were hidden there, and in <strong>1796</strong>, it was the site of Karađorđe’s farewell for the killing of his father. Today, the monastery is an active women's monastery, part of the <em>Šumadija Diocese of the Serbian Orthodox Church</em>. It houses a church with frescoes from the <strong>14th</strong> and <strong>15th centuries</strong>, and the complex includes residential quarters and other auxiliary buildings. </p>
              </section>

              <img srcSet={`${manastirBlagovestenje33} 450w, ${manastirBlagovestenje3}`} alt="Blagoveštenje Rudničko Monastery 3" />

              <section lang="en">
                <p> The <strong>Blagoveštenje Rudničko Monastery</strong> represents an important spiritual center and cultural heritage site, attracting visitors with its history, architecture, and natural surroundings. </p>
              </section>
            </>
          )
        }

      </div >
    </>
  );
};


export default ManastirBlagovestenjeRudnicko;