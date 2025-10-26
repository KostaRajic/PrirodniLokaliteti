/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import blagovestenje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/desktop/manastirBlagovestenje1.jpg";
import blagovestenje2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/desktop/manastirBlagovestenje2.jpg";
import blagovestenje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/desktop/manastirBlagovestenje3.jpg";
import blagovestenje11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/mobile/MmanastirBlagovestenje1.jpg";
import blagovestenje22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/mobile/MmanastirBlagovestenje2.jpg";
import blagovestenje33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirBlagovestenje/mobile/MmanastirBlagovestenje3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirBlagovestenje = () => {
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
            ? "Manastir Blagoveštenje – Duša Kablara i srpskog duhovnog nasleđa | Serbia Wonders"
            : "Blagoveštenje Monastery – The Soul of Kablar and Serbian Spiritual Heritage | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Blagoveštenje na Kablaru, sa korenima u 12. ili 13. veku, poznat po freskama iz 17. veka i bogatoj istoriji obnove i duhovnosti."
              : "Blagoveštenje Monastery on Kablar mountain, dating back to the 12th or 13th century, renowned for its 17th-century frescoes and rich history of restoration and spirituality."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Blagoveštenje, Kablar, srpska pravoslavna crkva, freske, istorija manastira, duhovnost, kulturno nasleđe"
              : "Blagovestenje Monastery, Kablar, Serbian Orthodox Church, frescoes, monastery history, spirituality, cultural heritage"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-blagovestenje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-blagovestenje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-blagovestenje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-blagovestenje"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(moravickiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${blagovestenje22} 450w, ${blagovestenje2} `} alt="Manastir Blagoveštenja na Kablaru" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Manastir Blagoveštenja</h1>

              <section lang="sr">
                <p>
                  <strong>Manastir Blagoveštenje</strong> smešten je u podnožju <em>Kablara</em>. Tačan datum osnivanja nije poznat, ali određeni arhitektonski elementi <em>Rške škole</em> sugerišu da je možda podignut u <strong>12.</strong> ili <strong>13. veku</strong>. Natpis iznad ulaznih vrata hrama, posvećenog <strong>Blagovestima Presvete Bogorodice</strong>, navodi da je manastir osnovan <strong>1602. godine</strong> „trudom i nastojanjem igumana <strong>Nikodima</strong>“.
                </p>

              </section>


              <img srcSet={`${blagovestenje11} 450w, ${blagovestenje1}`} alt="Manastir Blagoveštenja na Kablaru 2" />

              <section lang="sr">
                <p>
                  Podaci o freskopisanju hrama nalaze se na pilastru severnog zida, gde je zapisano da su freske urađene <strong>1632. godine</strong> za vreme igumana <strong>Mihaila</strong> i patrijarha <strong>Pajsija</strong>. Jedna od najlepših scena je prikaz <em>Strahovitog suda</em>, koja se nalazi na spoljnim zidovima zapadne strane crkve. <strong>Ikonostas</strong> sa bogatim duborezom iz ovog perioda smatra se jednim od najlepših iz <strong>17. veka</strong>. <strong>Jovan Vujic</strong> je <strong>1826. godine</strong> zabeležio da je manastir bio spaljen.
                </p>

              </section>


              <img srcSet={`${blagovestenje33} 450w, ${blagovestenje3}`} alt="Manastir Blagoveštenja na Kablaru 3" />
              <section lang="sr">

                <p>
                  <strong>Feliks Kanic</strong> je <strong>1866. godine</strong> zapisao da je uživao u gostoprimstvu <strong>Blagoveštenijskog bratstva</strong>, što je bio dokaz da je svetiinja bila obnovljena. Međutim, već <strong>1895. godine</strong> crkva je bila u toliko lošem stanju da u njoj nije bilo moguće obavljati bogosluženje. Tek <strong>1932. godine</strong>, za vreme igumana <strong>Mitrofana</strong>, crkva je obnovljena i ponovo pokrivena. U ovom manastiru je blaženopočivši patrijarh <strong>Pavle</strong> primio monaški postrig <strong>1948. godine</strong>.
                </p>

              </section>


            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Manastir Blagoveštenja</h1>

              <section lang="en">

                <p>
                  The <strong>Blagoveštenje Monastery</strong> is located at the foot of <em>Kablar</em>. The exact date of its founding is unknown, but certain architectural elements of the <em>Raška school</em> suggest it may have been built in the <strong>12th</strong> or <strong>13th century</strong>. An inscription above the entrance doors of the church, dedicated to the <strong>Annunciation of the Holy Virgin</strong>, states that the monastery was founded in <strong>1602</strong> "through the efforts and diligence of Abbot <strong>Nikodim</strong>".
                </p>
              </section>


              <img srcSet={`${blagovestenje11} 450w, ${blagovestenje1}`} alt="Blagoveštenje Monastery on Kablar 2" />

              <section lang="en">

                <p>
                  Information about the fresco painting of the church can be found on the pilaster of the northern wall, where it is recorded that the frescoes were done in <strong>1632</strong> during the time of Abbot <strong>Mihailo</strong> and Patriarch <strong>Pajsije</strong>. One of the most beautiful scenes is the depiction of the <em>Last Judgment</em>, located on the exterior walls of the western side of the church. The <strong>iconostasis</strong> with rich wood carving from this period is considered one of the finest from the <strong>17th century</strong>. <strong>Jovan Vujić</strong> noted in <strong>1826</strong> that the monastery had been burned down.
                </p>
              </section>


              <img srcSet={`${blagovestenje33} 450w, ${blagovestenje3}`} alt="Blagoveštenje Monastery on Kablar 3" />
              <section lang="en">
                <p>
                  <strong>Felix Kanitz</strong> recorded in <strong>1866</strong> that he enjoyed the hospitality of the <strong>Blagoveštenje brotherhood</strong>, which was proof that the sanctuary had been restored. However, by <strong>1895</strong> the church was in such poor condition that religious services could no longer be held. It was only in <strong>1932</strong>, during the time of Abbot <strong>Mitrofan</strong>, that the church was restored and re-roofed. The late Patriarch <strong>Pavle</strong> received his monastic tonsure at this monastery in <strong>1948</strong>.
                </p>
              </section>



            </>
          )}

      </div>
    </>
  );
};


export default ManastirBlagovestenje;