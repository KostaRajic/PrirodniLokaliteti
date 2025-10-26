/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import sretenje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/desktop/manastirSretenje1.jpg";
import sretenje2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/desktop/manastirSretenje2.jpg";
import sretenje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/desktop/manastirSretenje3.jpg";
import sretenje4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/desktop/manastirSretenje4.jpg";
import sretenje11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/mobile/MmanastirSretenje1.jpg";
import sretenje22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/mobile/MmanastirSretenje2.jpg";
import sretenje33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/mobile/MmanastirSretenje3.jpg";
import sretenje44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/ManastirSretenje/mobile/MmanastirSretenje4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirSretenje = () => {
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
            ? "Manastir Sretenje – Duša Ovčara i bogatstvo srpskog kulturnog nasleđa | Serbia Wonders"
            : "Sretenje Monastery – The Soul of Ovčar and Rich Serbian Cultural Heritage | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Sretenje, smešten na 800 metara nadmorske visine na planini Ovčar, poznat je po svojoj bogatoj istoriji, arhitekturi iz 16. veka i freskama iz 19. veka koje krase njegovu crkvu."
              : "Sretenje Monastery, located 800 meters above sea level on Ovčar mountain, is known for its rich history, 16th-century architecture, and 19th-century frescoes adorning its church."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Sretenje, Ovčar, Lučani, srpska pravoslavna crkva, freske, arhitektura, kulturno nasleđe, Nikifor Maksimović"
              : "Sretenje Monastery, Ovčar, Lucani, Serbian Orthodox Church, frescoes, architecture, cultural heritage, Nikifor Maksimovic"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-sretenje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-sretenje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-sretenje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/manastir-sretenje"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(moravickiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${sretenje11} 450w, ${sretenje1} `} alt="Manastir Sretenje" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Manastir Sretenje</h1>

              <section lang="sr">
                <p>
                  <strong>Manastir Sretenje</strong> nalazi se u <em>Dučalovićima</em>, mestu u opštini <strong>Lučani</strong>, pod samim vrhom planine <em>Ovčar</em> na <strong>800 metara</strong> nadmorske visine. Prema pisanim izvorima, manastir Sretenje prvi put se pominje u manastiru <em>Jovanju</em> <strong>1571. godine</strong>, a spominje se i njegovo rušenje <strong>1623. godine</strong>, što upućuje na to da je postojao i ranije. Prema predanju, sa vrha Ovčara bačena je kruna (<em>korona</em>), a gledalo se gde će da padne; na tom mestu je trebalo da se sagradi crkva. Zbog ovog događaja, brdo iznad samog manastira nosi ime <strong>Koronsko brdo</strong>. Manastir Sretenje predstavlja nepokretno kulturno dobro, spomenik kulture od velikog značaja. Takođe, postoji metoh manastira Sretenje u selu <em>Pakovraće</em>.
                </p>

              </section>


              <img srcSet={`${sretenje22} 450w, ${sretenje2}`} alt="Manastir Sretenje na Ovcaru i Kablaru" loading="lazy" />
              <section lang="sr">
                <p>
                  Manastirska crkva je obnovljena zahvaljujući trudu monaha <strong>Nikifora Maksimovića</strong>, koji je nakon obnove manastira <em>Preobraženja</em> <strong>1818. godine</strong>, započeo obnovu manastira Sretenje. Tada su obnovljeni crkva, konak i bedemi. Po želji kneza <strong>Miloša</strong>, zbog velikih zasluga, Nikifor Maksimović je postavljen za arhimandrita manastira Sretenje, a kasnije je bio hirotonisan za Episkopa užičkog. Upokojio se <strong>1853. godine</strong> i sahranjen je u crkvi manastira Sretenje.
                </p>
              </section>


              <img srcSet={`${sretenje33} 450w, ${sretenje3}`} alt="Manastir Sretenje u moravickom okrugu" loading="lazy" />

              <section lang="sr">
                <p>
                  Manastirska crkva je izgrađena kao jednobrodna građevina, sa dubokom, spolja petougaonim oltarskim apsidama, plitkim pravougaonim pevnicama i priprattom gotovo kvadratne osnove, iznad koje je podignuta kula-zvonara. Crkva je pokrivena polukružnim svodom, dok priprata ima slepu kupolu. Fasadna dekoracija je jednostavna, sa kamenim soklom i blago profilisanim krovnim vencem. Donji delovi naosa, oltarske apside i zidane oltarske pregrade, kao i mermerna roseta amvona u obliku šestokrake zvezde sa okvirom od srcolikih listova bršljana, datuju manastirsku crkvu na kraj <strong>16. veka</strong>.
                </p>
              </section>


              <img srcSet={`${sretenje44} 450w, ${sretenje4}`} alt="Manastir Sretenje 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Živopis naosa, oltarskog prostora i zidane oltarske pregrade iz <strong>1844. godine</strong> delo je <strong>Živka Pavlovića</strong> iz Požarevca, dok je <strong>Nikola Janković</strong> autor slikane dekoracije priprata. Na strogost u izboru, kako ikonografskih tako i likovnih rešenja, ovog konvencionalnog slikarskog stila, sa tek ponekim elementima baroka, uticao je duboko religiozan <strong>Nikifor Maksimović</strong>. Oltarska freska prikazuje sveštenika kome je anđeo vezao ruke jer je nedostojan i nesprema da služi Svetu Liturgiju. Manastirski kompleks je ograđen zidom <strong>1845. godine</strong>. Većina konaka, kao i imanje sa vinogradom u Pakovraču, pripadaju vremenu užičkog episkopa.
                </p>

              </section>


            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Sretenje Monastery</h1>

              <section lang="en">

                <p>
                  <strong>The Sretenje Monastery</strong> is located in <em>Dučalovići</em>, a village in the municipality of <strong>Lučani</strong>, just below the peak of <em>Ovčar</em> mountain at an altitude of <strong>800 meters</strong>. According to written sources, the Sretenje Monastery is first mentioned in the <em>Jovanje</em> Monastery in <strong>1571</strong>, and its destruction is recorded in <strong>1623</strong>, which suggests it existed earlier. According to legend, a crown (<em>corona</em>) was thrown from the top of Ovčar, and it was watched where it would fall; a church was supposed to be built on that spot. Because of this event, the hill above the monastery is named <strong>Koronsko Hill</strong>. The Sretenje Monastery is an immovable cultural asset and a monument of great cultural importance. Additionally, there is a metochion (dependency) of the Sretenje Monastery in the village of <em>Pakovraće</em>.
                </p>
              </section>


              <img srcSet={`${sretenje22} 450w, ${sretenje2}`} alt="Sretenje Monastery on Ovčar and Kablar" loading="lazy" />

              <section lang="en">

                <p>
                  The monastery church was restored thanks to the efforts of the monk <strong>Nikifor Maksimović</strong>, who, after the restoration of the <em>Transfiguration</em> Monastery in <strong>1818</strong>, began the restoration of the Sretenje Monastery. At that time, the church, the monastic residence, and the walls were renewed. By the wish of Prince <strong>Miloš</strong>, due to his great merits, Nikifor Maksimović was appointed archimandrite of the Sretenje Monastery, and later he was consecrated as the Bishop of Užice. He passed away in <strong>1853</strong> and was buried in the church of the Sretenje Monastery.
                </p>
              </section>


              <img srcSet={`${sretenje33} 450w, ${sretenje3}`} alt="Sretenje Monastery in the Moravica District" loading="lazy" />

              <section lang="en">

                <p>
                  The monastery church is built as a single-nave structure, with deep, externally pentagonal altar apses, shallow rectangular choirs, and an almost square narthex above which a bell tower was raised. The church is covered with a semicircular vault, while the narthex has a blind dome. The facade decoration is simple, with a stone plinth and a gently profiled roof cornice. The lower parts of the nave, altar apses, and the built altar screen, as well as the marble rosette of the ambo in the shape of a six-pointed star framed by heart-shaped ivy leaves, date the monastery church to the late <strong>16th century</strong>.
                </p>
              </section>


              <img srcSet={`${sretenje44} 450w, ${sretenje4}`} alt="Sretenje Monastery 2" loading="lazy" />

              <section lang="en">

                <p>
                  The fresco painting of the nave, altar space, and the built altar screen from <strong>1844</strong> is the work of <strong>Živko Pavlović</strong> from Požarevac, while <strong>Nikola Janković</strong> is the author of the painted decoration of the narthex. The strict choice of both iconographic and artistic solutions of this conventional painting style, with only a few Baroque elements, was influenced by the deeply religious <strong>Nikifor Maksimović</strong>. The altar fresco depicts a priest whose hands are bound by an angel because he is unworthy and unprepared to serve the Holy Liturgy. The monastery complex was enclosed with a wall in <strong>1845</strong>. Most of the monastic residences, as well as the estate with vineyards in Pakovraće, date back to the time of the Bishop of Užice.
                </p>
              </section>

            </>
          )}

      </div>
    </>

  );
};


export default ManastirSretenje;