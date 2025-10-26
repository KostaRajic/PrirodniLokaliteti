/* eslint-disable react/no-unknown-property */
import ljubostinja1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirLjubostinja/desktop/ljubostinja1.jpg";
import ljubostinja2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirLjubostinja/desktop/ljubostinja2.jpg";
import ljubostinja3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirLjubostinja/desktop/ljubostinja3.jpg";
import ljubostinja4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirLjubostinja/desktop/ljubostinja4.jpg";
import ljubostinja5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirLjubostinja/desktop/ljubostinja5.jpg";
import ljubostinja11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirLjubostinja/mobile/Mljubostinja1.jpg";
import ljubostinja22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirLjubostinja/mobile/Mljubostinja2.jpg";
import ljubostinja33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirLjubostinja/mobile/Mljubostinja3.jpg";
import ljubostinja44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirLjubostinja/mobile/Mljubostinja4.jpg";
import ljubostinja55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirLjubostinja/mobile/Mljubostinja5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirLjubostinja = () => {
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
            ? "Manastir Ljubostinja – Zadužbina kneginje Milice i čuvar srednjovekovne kulture | Srbija Wonders"
            : "Ljubostinja Monastery – Legacy of Princess Milica and Guardian of Medieval Heritage | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Ljubostinja, zadužbina kneginje Milice iz 14. veka, nalazi se kod Trstenika i predstavlja vrhunski primer Moravske arhitekture, duhovnog života i srpskog srednjovekovnog nasleđa."
              : "Ljubostinja Monastery, built in the 14th century by Princess Milica near Trstenik, is a masterpiece of Morava architecture and a significant site of spiritual and medieval Serbian heritage."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Ljubostinja, kneginja Milica, monahinja Jefimija, Moravska škola, srpsko srednjovekovlje, freske Makariја, Kočina buna, kulturna baština"
              : "Ljubostinja Monastery, Princess Milica, nun Jefimija, Morava school, Serbian medieval history, Makarios frescoes, Koca's Rebellion, cultural heritage"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-ljubostinja`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-ljubostinja"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-ljubostinja"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/manastir-ljubostinja"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(rasinskiOkrugPathRoutes.home(switchLanguage))}

        />
        <header></header>
        <img srcSet={`${ljubostinja11} 450w, ${ljubostinja1} `} alt="Manastir Ljubostinja 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Manastir Ljubostinja</h1>

              <section lang="sr">
                <p>
                  Manastir <strong>Ljubostinja</strong> se nalazi u blizini <strong>Trstenika</strong>, a izgrađen je krajem
                  <strong> 14. veka</strong> u stilu <strong>Moravske škole</strong>. To je zadužbina kneginje
                  <strong> Milice</strong>, koja je i tu sahranjena. Pored nje, u manastiru se čuvaju i mošti
                  srpske srednjovekovne književnice i monahinje <strong>Jefimije</strong>. Kao
                  <em>spomenik kulture od izuzetnog značaja</em>, Ljubostinja je od <strong>1979. godine</strong> pod
                  vrhunskom državnom zaštitom.
                </p>
              </section>

              <img srcSet={`${ljubostinja22} 450w, ${ljubostinja2}`} alt="Manastir Ljubostinja 2" />

              <section lang="sr">
                <p>
                  Prema istoriji manastira, <strong>kneginja Milica</strong> je dala naređenje za izgradnju svoje
                  zadužbine <em>pre Kosovske bitke 1389. godine</em>. Verovalo se da je ona želela da sagradi manastir
                  u kojem bi mogla da se povuče i skloniti, jer je naslućivala velike poraze i progone koji će
                  uslediti od <strong>Osmanlijskog carstva</strong>. U tom manastiru, Milica je zamonašena i dobila ime
                  <strong> Evgenija</strong>, a kao monahinja je i sahranjena sa leve strane u odnosu na ulaz.
                  <br />
                  <br /> Prilikom pljačkanja manastira, osvajači su otkrili riznicu u kojoj je kneginja sakrila
                  crkvene i vredne predmete. Među njima su odneli i <strong>krunu srpskog vladara Lazara</strong>, koja se i
                  danas nalazi u <strong>Istanbulu</strong>. U drugoj polovini <strong>17. veka</strong> manastir je opusteo,
                  ali je tokom narednog perioda obnovljen. U manastiru je bila aktivna i <em>prepisivačka škola</em>, koja
                  je bila jedna od najplodnijih na ovom području. Crkva manastira Ljubostinja pripada Moravskoj školi,
                  a njen temelj ima oblik <strong>razvijenog trlista</strong> sa jednom kupolom koja se oslanja na četiri
                  stupa. Na zapadnoj strani crkve nalazi se <strong>priprata</strong>. Spoljna fasada crkve ukrašena je
                  bogato izrezbarenim kamenim motivima. Graditelj manastira bio je <strong>protomaјstor Rade Borović</strong>,
                  čije ime se nalazi na pragu prolaza iz priprata u naos.
                </p>
              </section>

              <img srcSet={`${ljubostinja33} 450w, ${ljubostinja3}`} alt="Manastir Ljubostinja 3" />

              <section lang="sr">
                <p>
                  Freske koje danas ukrašavaju zidove manastira Ljubostinja većinom potiču iz <strong>novijeg perioda</strong>,
                  dok su originalni fresko-detalji, nažalost, samo delimično sačuvani. Crkva manastira bila je oslikana
                  <em>pred sam Kosovski boj</em>, ali je to slikarstvo pretrpelo značajnu štetu tokom vekova. U to vreme,
                  na poziv kneginje Milice, došao je zograf <strong>Makariје</strong>, koji je preuzeo zadatak da oslika
                  čitavu crkvu. Živopisac je svoje ime ostavio na luku iznad vrata koja vode iz priprate u glavni deo
                  hrama, čime je ostavio trajni trag svog umetničkog stvaralaštva.
                  <br />
                  <br /> Glavne karakteristike stila Makariја kao slikara mogu se sagledati kroz tri osnovna svojstva:
                  <strong> ekspresivnost likova</strong>, <strong>izražen kontrast</strong> između svetlosti i tame, kao i
                  <strong> pažljiv prikaz arhitektonskih detalja</strong> u pozadini. Ove osobine odražavaju duboku želju za
                  postizanjem <em>emocionalnog efekta</em>, ali i za stvaranjem <em>vizuelne dubine</em> koja doprinosi većoj
                  kompleksnosti i bogatstvu fresaka. Slikarstvo Makariја, sa svojim jasnim kontrastima i živahnim
                  figurama, ima snažan utisak na posmatrača, dok istovremeno detaljno ilustruje arhitektonske
                  elemente, dajući prostoru crkve dodatnu dimenziju.
                </p>
              </section>

              <img srcSet={`${ljubostinja44} 450w, ${ljubostinja4}`} alt="Manastir Ljubostinja 4" />

              <section lang="sr">
                <p>
                  Na <strong>zapadnom zidu priprata</strong> manastira Ljubostinja, prikazana je porodica kneza Lazara:
                  s leva su <strong>knez Lazar</strong> i <strong>kneginja Milica</strong>, dok s desne strane stoje
                  <strong> despot Stefan</strong> i njegov brat <strong>Vuk</strong>. Svi su prikazani u punim obavezama, sa
                  svim dostojanstvima i simbolima vlasti. U samom hramu, sačuvani su samo manji fragmenti živopisa:
                  u <strong>južnoj pevnici</strong> je prikazano <em>Isceljenje uzetoga</em>, dok su na
                  <strong> severozapadnom stubu</strong> predstavljeni <strong>Arhanđeo Gavril</strong>,
                  <strong> Sveti Teodor Studit</strong>, <strong>Sveti Juda</strong>, <strong>Sveti Teodosije</strong> i
                  <strong> Sveti Jefrem Sirin</strong>. Na <strong>jugozapadnom stubu</strong> nalaze se prikazi
                  <strong> Arhanđela Mihaila</strong>, <strong>Svetog Save Jerusalimskog</strong>,
                  <strong> Svetog Simeona Srpskog</strong> i <strong>Svetog Save Srpskog</strong>.
                </p>
              </section>

              <img srcSet={`${ljubostinja55} 450w, ${ljubostinja5}`} alt="Manastir Ljubostinja 5" />

              <section lang="sr">
                <p>
                  Prema verovanju, <strong>kneginja Milica</strong>, poznata i kao <strong>monahinja Evgenija</strong>, i
                  <strong> monahinja Jefimija</strong> živele su zajedno u manastiru, pomažući jedna drugoj.
                  Po smrti monahinje Jefimije, Evgenija je odlučila da je sahrani u sarkofagu koji je prvobitno bio
                  namenjen za nju.
                  <br />
                  <br /> Na tom sarkofagu je uklesan <em>cvet krina</em>, simbol <strong>nevinosti i čistoće</strong>.
                  Veruje se da je iz ovog manastira potekla čuvena <strong>Kočina buna</strong> protiv Turaka,
                  koji su, u znak odmazde, potpuno <strong>spalili manastir Ljubostinju</strong>.
                  <br />
                  <br /> Poznata <em>"Pohvala knezu Lazaru"</em>, izvezena zlatom na svili kao pokrov za kovčeg
                  velikog srpskog vladara, smatra se <strong>remek-delom srpske</strong>, ali i
                  <strong> srednjovekovne književnosti</strong> uopšte.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Ljubostinja Monastery</h1>

              <section lang="en">
                <p>
                  The <strong>Ljubostinja Monastery</strong> is located near <strong>Trstenik</strong>, and was built at the end of the
                  <strong> 14th century</strong> in the style of the <strong>Morava School</strong>. It is the endowment of Princess
                  <strong> Milica</strong>, who is also buried there. Alongside her, the relics of the Serbian medieval writer and nun
                  <strong> Jefimija</strong> are kept in the monastery. As a <em>cultural monument of exceptional importance</em>,
                  Ljubostinja has been under the highest state protection since <strong>1979</strong>.
                </p>
              </section>

              <img srcSet={`${ljubostinja22} 450w, ${ljubostinja2}`} alt="Ljubostinja Monastery 2" />

              <section lang="en">
                <p>
                  According to the monastery’s history, <strong>Princess Milica</strong> gave the order for the construction of her
                  endowment <em>before the Battle of Kosovo in 1389</em>. It was believed that she wanted to build a monastery where
                  she could retreat and seek refuge, foreseeing the great defeats and persecution to come from the
                  <strong> Ottoman Empire</strong>. In this monastery, Milica took monastic vows and received the name
                  <strong> Eugenia</strong>, and she was buried as a nun to the left of the entrance.
                  <br />
                  <br /> During the plundering of the monastery, invaders discovered a treasury where the princess had hidden
                  church and valuable items. Among them was the <strong>crown of Serbian ruler Lazar</strong>, which is still
                  kept today in <strong>Istanbul</strong>. In the second half of the <strong>17th century</strong>, the monastery was abandoned,
                  but it was restored in the period that followed. The monastery also hosted a <em>scriptorium</em>,
                  one of the most productive in the region. The church of Ljubostinja Monastery belongs to the Morava school,
                  and its foundation has the shape of a <strong>developed trefoil</strong> with a single dome supported by four pillars.
                  On the western side of the church is the <strong>narthex</strong>. The church’s exterior facade is richly decorated
                  with carved stone motifs. The builder of the monastery was <strong>Master Rade Borović</strong>, whose name is inscribed
                  on the threshold between the narthex and the nave.
                </p>
              </section>

              <img srcSet={`${ljubostinja33} 450w, ${ljubostinja3}`} alt="Ljubostinja Monastery 3" />

              <section lang="en">
                <p>
                  The frescoes that decorate the walls of Ljubostinja Monastery today mostly date from a <strong>later period</strong>,
                  while the original fresco details have unfortunately been only partially preserved. The church was painted
                  <em>just before the Battle of Kosovo</em>, but the paintings have suffered considerable damage over the centuries.
                  At that time, at the invitation of Princess Milica, the painter <strong>Makarios</strong> came and undertook the task
                  of painting the entire church. The painter left his name on the arch above the doors leading from the narthex
                  to the main part of the temple, thus leaving a lasting mark of his artistic work.
                  <br />
                  <br /> The main features of Makarios's painting style can be observed in three key elements:
                  <strong> expressiveness of figures</strong>, a <strong>pronounced contrast</strong> between light and shadow, and
                  <strong> detailed depiction of architectural backgrounds</strong>. These qualities reflect a deep desire to achieve
                  an <em>emotional effect</em>, as well as to create <em>visual depth</em> that adds complexity and richness to the frescoes.
                  Makarios’s painting, with its strong contrasts and vivid figures, makes a strong impression on the viewer,
                  while at the same time illustrating architectural elements in great detail, giving the church interior
                  an additional dimension.
                </p>
              </section>

              <img srcSet={`${ljubostinja44} 450w, ${ljubostinja4}`} alt="Ljubostinja Monastery 4" />

              <section lang="en">
                <p>
                  On the <strong>western wall of the narthex</strong> of Ljubostinja Monastery, the family of Prince Lazar is depicted:
                  on the left stand <strong>Prince Lazar</strong> and <strong>Princess Milica</strong>, while on the right are
                  <strong> Despot Stefan</strong> and his brother <strong>Vuk</strong>. They are all portrayed in full regalia, with
                  all the dignities and symbols of power. In the main church, only small fragments of frescoes have been preserved:
                  in the <strong>southern choir</strong> is a depiction of the <em>Healing of the Paralytic</em>, while on the
                  <strong> northwest pillar</strong> are represented <strong>Archangel Gabriel</strong>,
                  <strong> Saint Theodore the Studite</strong>, <strong>Saint Jude</strong>, <strong>Saint Theodosius</strong>,
                  and <strong>Saint Ephraim the Syrian</strong>. On the <strong>southwest pillar</strong> are depictions of
                  <strong> Archangel Michael</strong>, <strong>Saint Sabbas of Jerusalem</strong>,
                  <strong> Saint Simeon the Serb</strong>, and <strong>Saint Sava of Serbia</strong>.
                </p>
              </section>

              <img srcSet={`${ljubostinja55} 450w, ${ljubostinja5}`} alt="Ljubostinja Monastery 5" />

              <section lang="en">
                <p>
                  According to tradition, <strong>Princess Milica</strong>, also known as <strong>Nun Eugenia</strong>, and
                  <strong> Nun Jefimija</strong> lived together in the monastery, supporting each other.
                  After Jefimija’s death, Eugenia decided to bury her in the sarcophagus originally intended for herself.
                  <br />
                  <br /> On that sarcophagus, a <em>lily flower</em> is carved — a symbol of <strong>innocence and purity</strong>.
                  It is believed that the famous <strong>Kočina Rebellion</strong> against the Turks originated from this monastery,
                  and in retaliation, the Turks <strong>burned down Ljubostinja Monastery</strong>.
                  <br />
                  <br /> The famous <em>"Eulogy to Prince Lazar"</em>, embroidered in gold on silk as a covering for the coffin of
                  the great Serbian ruler, is considered a <strong>masterpiece of Serbian</strong>, as well as of
                  <strong> medieval literature</strong> in general.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default ManastirLjubostinja;