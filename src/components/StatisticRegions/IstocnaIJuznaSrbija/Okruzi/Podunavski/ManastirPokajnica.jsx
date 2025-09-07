/* eslint-disable react/no-unknown-property */
import pokajnica1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/desktop/pokajnica1.jpg";
import pokajnica2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/desktop/pokajnica2.jpg";
import pokajnica3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/desktop/pokajnica3.jpg";
import pokajnica4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/desktop/pokajnica4.jpg";
import pokajnica11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/mobile/pokajnicaM1.jpg";
import pokajnica22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/mobile/pokajnicaM2.jpg";
import pokajnica33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/mobile/pokajnicaM3.jpg";
import pokajnica44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/ManastirPokajnica/mobile/pokajnicaM4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { podunavskiOkrugPathRoutes } from "./PodunavskiOkrugPathRouts";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirPokajnica = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Pokajnica – Istorija i Značaj u Srbiji | Serbia Wonders" : "Pokajnica Monastery – History and Significance in Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Pokajnica, smešten između Velike Plane i Radovanja, poznat je po svojoj jedinstvenoj crkvi brvnari i istorijskoj vezi sa Vujicom Vulićevićem i knezom Milošem Obrenovićem."
            :
            "Pokajnica Monastery, located between Velika Plana and Radovanje, is famous for its unique wooden church and historic ties to Vujica Vulićević and Prince Miloš Obrenović."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Pokajnica, Vujica Vulićević, Velika Plana, Srpska pravoslavna crkva, crkva brvnara, knez Miloš, istorija manastira, kulturna baština Srbije"
            :
            "Pokajnica Monastery, Vujica Vulićević, Velika Plana, Serbian Orthodox Church, wooden church, Prince Miloš, monastery history, Serbian cultural heritage"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/manastir-pokajnica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/manastir-pokajnica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/manastir-pokajnica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/manastir-pokajnica"
        />

      </Helmet >


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(podunavskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${pokajnica11} 450w, ${pokajnica1} `} alt="Manastir Pokajnica 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Manastir Pokajnica</h2>


              <section lang="sr">
                <p>
                  <strong>Manastir Pokajnica</strong> nalazi se između <em>Velike Plane</em> i <em>Radovanja</em>, u ataru <em>Starog Sela</em>, nedaleko od <em>Carigradskog druma</em>, današnjeg autoputa E-75. Smešten je u hladu šume, blizu <em>Grabovačkog potoka</em>.
                  <br /><br />
                  Godine <strong>1818.</strong>, vojvoda, a kasnije knez smederevske nahije <strong>Vujica Vulićević</strong>, uz podršku kneza <strong>Miloša Obrenovića</strong> i kneginje <strong>Ljubice</strong>, podiže crkvu brvnaru nazvanu Pokajnica. O tome svedoče urezani zapisi na brvnu i ikoni svetog Đorđa: „sie cerkov ogradi gospodar Vuica za pomen 1818“.
                </p>
              </section>

              <img srcSet={`${pokajnica22} 450w, ${pokajnica2}`} alt="Manastir Pokajnica 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Po običaju <em>Srpske pravoslavne crkve</em>, crkva nosi ime po svetitelju, ktitoru ili motivu osnivanja. <strong>Pokajnica</strong> je ime dobila zbog kajanja Vujice Vulićevića, koji je u <strong>julu 1817.</strong> učestvovao u ubistvu vožda <strong>Karađorđa</strong>.
                  <br /><br />
                  Prema predanju, odmah nakon zločina, vojvoda je odlučio da podigne crkvu kao čin pokajanja. Knez Miloš je dozvolio da se za gradnju iskoriste voždove dukati. Za manje od godinu dana podignuta je drvena crkva od hrastovine, što je postala preteča budućih crkava-brvnara širom Srbije. Iako je bila nazvana <em>Velikoplanska</em>, narod je i dalje zove Pokajnica.
                </p>
              </section>

              <img srcSet={`${pokajnica33} 450w, ${pokajnica3}`} alt="Manastir Pokajnica 3" loading="lazy" />

              <section lang="sr">
                <p>
                  U početku je crkva služila kao parohijska za sela: <em>Staro Selo</em>, <em>Novo Selo</em>, <em>Rakinac</em>, <em>Radovanje</em> i <em>Velika Plana</em>. Nije imala veću ulogu u prosveti ni kulturi.
                  <br /><br />
                  Godine <strong>1954.</strong>, episkop Hrizostom proglasio ju je muškim manastirom, dok je 1992. episkop Sava (Andrić) dodelio status ženskog manastira. Brigu o njemu preuzela je igumanija <strong>Ilarija</strong> i sestrinstvo iz manastira <em>Sveta Trojica</em> sa Kosova.
                  <br /><br />
                  Konzervatorski radovi izvedeni su 1951. godine, a manastir je 1979. proglašen <strong>kulturnim dobrom od izuzetnog značaja</strong>.
                </p>
              </section>

              <img srcSet={`${pokajnica44} 450w, ${pokajnica4}`} alt="Manastir Pokajnica 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Za razliku od većine crkava-brvnara, <strong>Pokajnica</strong> ima kružnu jednobrodnu osnovu podeljenu na: trem, pripratu, naos i oltar.
                  <br /><br />
                  Trem, podignut <strong>1880.</strong>, je sedmougaoni i poluotvoren, sa šest stubova. Tumači se kao praktično proširenje crkve i svedočanstvo mirnog doba. Priprata je popločana opekom, a na nju se nadovezuje svetao naos i polukružni oltar.
                  <br /><br />
                  Crkva je prekrivena visokim krovom od šindre, gotovo dvostruko višim od zidova. Temelj je od lomljenog kamena, a konstrukcija od hrastovih greda. Mogla je da se rasklopi i premesti u slučaju turske opasnosti.
                  <br /><br />
                  U porti se nalaze zvonara slična onima iz <em>Takova</em> i <em>Orašca</em>, stari konak iz vremena gradnje i novi konak, osveštan <strong>1998.</strong> godine od strane <strong>patrijarha Pavla</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>Pokajnica Monastery</h2>

              <section lang="en"> <p> <strong>Pokajnica Monastery</strong> is located between <em>Velika Plana</em> and <em>Radovanje</em>, in the area of <em>Staro Selo</em>, near the old <em>Constantinople Road</em>, today’s E-75 highway. It is nestled in the shade of a forest, close to the <em>Grabovac Stream</em>. <br /><br /> In the year <strong>1818</strong>, Duke and later Prince of the Smederevo district, <strong>Vujica Vulićević</strong>, with the support of Prince <strong>Miloš Obrenović</strong> and Princess <strong>Ljubica</strong>, built a wooden church (log church) called Pokajnica. This is confirmed by inscriptions carved on a log and on the icon of Saint George, stating: “This church was built by Lord Vuica in remembrance, 1818.” </p> </section>
              <img srcSet={`${pokajnica22} 450w, ${pokajnica2}`} alt="Pokajnica Monastery 2" loading="lazy" />

              <section lang="en"> <p> According to the tradition of the <em>Serbian Orthodox Church</em>, a church is typically named after a saint, founder, or the motive behind its founding. <strong>Pokajnica</strong> (meaning "Place of Repentance") got its name from the repentance of Vujica Vulićević, who participated in the assassination of the national leader <strong>Karađorđe</strong> in <strong>July 1817</strong>. <br /><br /> According to legend, immediately after the crime, the duke decided to build a church as an act of atonement. Prince Miloš allowed him to use Karađorđe’s gold coins for its construction. Within less than a year, a wooden church made of oak was erected, becoming a precursor to future wooden churches across Serbia. Although it was officially called the <em>Velika Plana Church</em>, people continue to call it Pokajnica. </p> </section>
              <img srcSet={`${pokajnica33} 450w, ${pokajnica3}`} alt="Pokajnica Monastery 3" loading="lazy" />

              <section lang="en"> <p> Initially, the church served as a parish church for the villages of: <em>Staro Selo</em>, <em>Novo Selo</em>, <em>Rakinac</em>, <em>Radovanje</em>, and <em>Velika Plana</em>. It did not play a significant role in education or culture. <br /><br /> In <strong>1954</strong>, Bishop Hrizostom proclaimed it a male monastery, while in 1992, Bishop Sava (Andrić) granted it the status of a female monastery. It was then entrusted to Abbess <strong>Ilarija</strong> and the sisterhood from the <em>Holy Trinity Monastery</em> in Kosovo. <br /><br /> Conservation work was carried out in 1951, and in 1979, the monastery was declared a <strong>cultural monument of exceptional importance</strong>. </p> </section>
              <img srcSet={`${pokajnica44} 450w, ${pokajnica4}`} alt="Pokajnica Monastery 4" loading="lazy" />

              <section lang="en"> <p> Unlike most wooden churches, <strong>Pokajnica</strong> has a circular single-nave layout divided into: porch, narthex, nave, and altar. <br /><br /> The porch, added in <strong>1880</strong>, is heptagonal and semi-open, supported by six columns. It is interpreted as a practical extension of the church and a testimony to peaceful times. The narthex is paved with brick, followed by a bright nave and a semicircular altar. <br /><br /> The church is covered with a tall shingle roof, nearly twice the height of its walls. The foundation is made of broken stone, and the structure consists of oak beams. It was designed to be disassembled and moved in case of Ottoman threats. <br /><br /> In the monastery courtyard, there is a bell tower similar to those in <em>Takovo</em> and <em>Orašac</em>, an old monastic residence from the time of construction, and a new residence consecrated in <strong>1998</strong> by <strong>Patriarch Pavle</strong>. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default ManastirPokajnica;