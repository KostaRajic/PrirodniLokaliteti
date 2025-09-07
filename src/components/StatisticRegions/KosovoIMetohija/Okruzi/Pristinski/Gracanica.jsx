/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import gracanica1 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/desktop/gracanica2.jpg";
import gracanica2 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/desktop/gracanica1.jpg";
import gracanica3 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/desktop/gracanica3.jpg";
import gracanica4 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/desktop/gracanica4.jpg";
import gracanica11 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/mobile/Mgracanica2.jpg";
import gracanica22 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/mobile/Mgracanica1.jpg";
import gracanica33 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/mobile/Mgracanica3.jpg";
import gracanica44 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gracanica/mobile/Mgracanica4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirGracanica = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Gračanica – Srednjovekovni biser Kosova | Serbia Wonders" : "Gračanica Monastery – Medieval Jewel of Kosovo | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Gračanica je zadužbina kralja Milutina iz 14. veka, značajan srpski pravoslavni manastir na Kosovu poznat po svojoj arhitekturi i istoriji."
            :
            "Gračanica Monastery is a 14th-century endowment of King Milutin, a significant Serbian Orthodox monastery in Kosovo known for its architecture and history."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Gračanica, kralj Milutin, srpska pravoslavna crkva, Kosovo, srednjovekovna arhitektura, Vidovdan, spomenik Milošu Obiliću"
            :
            "Gračanica Monastery, King Milutin, Serbian Orthodox Church, Kosovo, medieval architecture, Vidovdan, Miloš Obilić monument"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gracanica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gracanica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gracanica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gracanica"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pristinskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${gracanica11} 450w, ${gracanica1} `} alt="Manastir Gračanica 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Manastir Gračanica</h2>

              <section lang="sr">
                <p>
                  Drevni manastir <strong>Gračanica</strong>, smešten na levoj obali reke <strong>Gračanke</strong> na <strong>Kosovu</strong>, zadužbina je kralja <strong>Milutina</strong>. Sagrađen je između <em>1315.</em> i <em>1321.</em> godine. Udaljen samo <strong>9 km</strong> od <strong>Prištine</strong>, poslednji je u nizu veličanstvenih manastira koje je kralj Milutin, "<em>nezasiti zidatelj božanskih crkava</em>" (kako ga opisuje njegov blizak prijatelj, saradnik i biograf arhiepiskop <strong>Danilo II</strong>), podigao u svom otadžbini i van nje.
                  <br /><br />
                  Prema narodnom predanju, kralj Milutin je pred bitku na reci Gračanki zaspo, a tada mu se ukazao anđeo Gospodnji koji mu je saopštio da će pobediti i da bi, u znak zahvalnosti za pomoć od Boga, trebalo da izgradi crkvu čiji će oblik biti prikazan. Kada se probudio, na nebu je ugledao beli oblak u obliku crkve. Pošto je zaista pobedio u bitci, odmah je pozvao najbolje majstore – graditelje i naredio im da započnu izgradnju crkve koju je video na nebu.
                </p>
              </section>

              <img srcSet={`${gracanica22} 450w, ${gracanica2} `} alt="Manastir Gračanica 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Gračanica</strong> je sagrađena nedaleko od <strong>Lipljana</strong>, antičkog grada <strong>Ulpijane</strong>, na ruševinama starije crkve <strong>Bogorodice</strong> iz <em>XIII veka</em>, koja je bila sedište lipljanskih episkopa unutar novoosnovane samostalne crkvene organizacije <strong>Svetog Save</strong> (oko <em>1220.</em> godine). Ta crkva je, pak, podignuta na temeljima ranohrišćanske trobrodne bazilike iz <em>VI veka</em>. U povelji napisanoj na južnom zidu kapele, kralj Milutin navodi: "<em>Vidih rušenje i pad hrama Svete Bogorodice gračaničke, episkopije lipljanske, sazidah je od osnivanja i popisah i ukrasih iznutra i spolja.</em>" Ovo je zabeleženo u <strong>6830.</strong> godini, odnosno <em>1321.</em> godini po Hristu.
                  <br /><br />
                  Od manastirskog kompleksa danas je ostala samo crkva, prvobitno posvećena <strong>Blagovestima Bogorodice</strong> (kako je navodi arhiepiskop <strong>Danilo II</strong>), ali se kasnije kao manastirsko posvećenje pominje praznik <strong>Uspenje Presvete Bogorodice</strong>. Priprota sa kulom izgrađena je nekoliko decenija kasnije, sa ciljem zaštite fresaka na zapadnoj fasadi. Manastir je pretrpeo štetu tokom <strong>Kosovske bitke</strong>, a priprota je stradala tokom turskih napada između <em>1379.</em> i <em>1383.</em> godine, kada je kula izgorila zajedno sa bogatom zbirkom rukopisnih knjiga.
                </p>
              </section>

              <img srcSet={`${gracanica33} 450w, ${gracanica3} `} alt="Manastir Gračanica 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Vizantijsko-srpski stil u srpskoj arhitekturi srednjeg veka obuhvata period od kraja <em>XIII veka</em> do kraja <em>XIV veka</em>, a prostire se na teritoriju <strong>Metohije</strong>, <strong>Kosova</strong> i severne <strong>Makedonije</strong>. Tokom vladavine kralja <strong>Milutina</strong> razvijaju se centralne crkve tipa upisanog krsta, sa pet kupola koje su sa svih strana podržane svodovima (kao što su <strong>Gračanica</strong>, <strong>Staro Nagoričino</strong>, <strong>Bogorodica Ljeviška</strong>...).
                  <br /><br />
                  Gračanička crkva sa pet kupola uzdiže se u vis, sa složenim krovnim površinama koje se smenjuju u obliku kupola i polukružnih svodova. Osnovu hrama čine dva upisana krsta, jedan unutar drugog, pri čemu je centralni krst vertikalno izdignut, što omogućava da centralna kupola, koja se oslanja na četiri slobodna stupa, bude postepeno podignuta u visinu. Između krakovа krsta uzdižu se četiri manja kupola koje ravnomerno raspoređuju težinu i celu gornju konstrukciju. Ovaj dvostruki upisani krst (kvadrat u kvadratu, crkva u crkvi) predstavlja koncept koji je jedinstven i teško se može naći premac, kako na Istoku, tako i na Zapadu. Nažalost, istorija ne pamti ime genijalnog arhitekte koji je stvorio ovo remek-delo.
                </p>
              </section>

              <img srcSet={`${gracanica44} 450w, ${gracanica4} `} alt="Spomenik Milosu Obilicu u Gracanici" />

              <section lang="sr">
                <p>
                  Spomenik <strong>Milošu Obiliću</strong> simbolizuje srpskog srednjovekovnog junaka, koji je bio spreman da žrtvuje svoj život za sveti cilj. Spomenik je prvi put postavljen <em>1983.</em> godine u centru grada koji nosi njegovo ime, <strong>Obilić</strong>. Zbog svog značaja za srpski narod na Kosovu, uništen je <em>1999.</em> godine, a zatim je ponovo postavljen u <strong>Gračanici</strong> na <strong>Vidovdan</strong>, <em>28. juna 2014.</em> godine, nedaleko od manastira Gračanica.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Gračanica Monastery</h2>

              <section lang="en">
                <p>
                  The ancient <strong>Gračanica</strong> Monastery, located on the left bank of the <strong>Gračanka</strong> River in <strong>Kosovo</strong>, is the endowment of King <strong>Milutin</strong>. It was built between <em>1315</em> and <em>1321</em>. Located just <strong>9 km</strong> from <strong>Priština</strong>, it is the last in a series of magnificent monasteries that King Milutin, the "<em>insatiable builder of divine churches</em>" (as described by his close friend, collaborator, and biographer Archbishop <strong>Danilo II</strong>), erected both within and beyond his homeland.
                  <br /><br />
                  According to folk tradition, before the battle on the Gračanka River, King Milutin fell asleep and an angel of the Lord appeared to him, announcing that he would win and that, in gratitude for God’s help, he should build a church whose shape would be revealed. When he awoke, he saw a white cloud in the shape of a church in the sky. After indeed winning the battle, he immediately summoned the best craftsmen and ordered them to begin construction of the church he had seen in the sky.
                </p>
              </section>

              <img srcSet={`${gracanica22} 450w, ${gracanica2} `} alt="Gračanica Monastery 2" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Gračanica</strong> was built near <strong>Lipljan</strong>, the ancient city of <strong>Ulpiana</strong>, on the ruins of an older church dedicated to the <strong>Mother of God</strong> from the <em>13th century</em>, which served as the seat of the Lipljan bishops within the newly established independent church organization of <strong>Saint Sava</strong> (around <em>1220</em>). That church, in turn, was built on the foundations of an early Christian three-nave basilica from the <em>6th century</em>. In a charter inscribed on the southern wall of the chapel, King Milutin states: "<em>I saw the destruction and fall of the church of the Holy Mother of God of Gračanica, of the Lipljan bishopric; I rebuilt it from the foundations and painted and adorned it inside and out.</em>" This was recorded in the year <strong>6830</strong> according to the Byzantine calendar, or <em>1321</em> AD.
                  <br /><br />
                  Of the monastery complex today, only the church remains, originally dedicated to the <strong>Annunciation of the Mother of God</strong> (as Archbishop <strong>Danilo II</strong> notes), but later the monastery dedication is mentioned as the feast of the <strong>Dormition of the Most Holy Mother of God</strong>. The narthex with a tower was built several decades later, to protect the frescoes on the western facade. The monastery suffered damage during the <strong>Battle of Kosovo</strong>, and the narthex was destroyed during Turkish attacks between <em>1379</em> and <em>1383</em>, when the tower burned down along with a rich collection of manuscript books.
                </p>
              </section>

              <img srcSet={`${gracanica33} 450w, ${gracanica3} `} alt="Gračanica Monastery 3" loading="lazy" />

              <section lang="en">
                <p>
                  The Byzantine-Serbian style in medieval Serbian architecture covers the period from the late <em>13th century</em> to the late <em>14th century</em>, extending over the territories of <strong>Metohija</strong>, <strong>Kosovo</strong>, and northern <strong>Macedonia</strong>. During the reign of King <strong>Milutin</strong>, central churches of the inscribed cross type developed, with five domes supported on all sides by vaults (such as <strong>Gračanica</strong>, <strong>Old Nagoričino</strong>, <strong>Bogorodica Ljeviška</strong>, etc.).
                  <br /><br />
                  The Gračanica church with five domes rises high, with complex roof surfaces alternating in the shapes of domes and semicircular vaults. The foundation of the temple consists of two inscribed crosses, one inside the other, with the central cross vertically elevated, allowing the central dome, which rests on four free-standing pillars, to be gradually raised. Between the arms of the cross rise four smaller domes, evenly distributing the weight and the entire upper structure. This double inscribed cross (a square within a square, a church within a church) represents a unique concept rarely found either in the East or West. Unfortunately, history does not remember the name of the genius architect who created this masterpiece.
                </p>
              </section>

              <img srcSet={`${gracanica44} 450w, ${gracanica4} `} alt="Monument to Miloš Obilić in Gračanica" loading="lazy" />

              <section lang="en">
                <p>
                  The monument to <strong>Miloš Obilić</strong> symbolizes the Serbian medieval hero who was willing to sacrifice his life for a sacred cause. The monument was first erected in <em>1983</em> in the center of the town that bears his name, <strong>Obilić</strong>. Due to its importance to the Serbian people in Kosovo, it was destroyed in <em>1999</em>, and then re-erected in <strong>Gračanica</strong> on <strong>Vidovdan</strong>, <em>June 28, 2014</em>, near the Gračanica Monastery.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default ManastirGracanica;