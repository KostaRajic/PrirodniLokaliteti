/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import besnaKobila1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/desktop/besnaKobila1.jpg";
import besnaKobila2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/desktop/besnaKobila2.jpg";
import besnaKobila3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/desktop/besnaKobila3.jpg";
import besnaKobila4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/desktop/besnaKobila4.jpg";
import besnaKobila5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/desktop/besnaKobila5.jpg";
import besnaKobila11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/mobile/besnaKobilaM1.jpg";
import besnaKobila22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/mobile/besnaKobilaM2.jpg";
import besnaKobila33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/mobile/besnaKobilaM3.jpg";
import besnaKobila44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/mobile/besnaKobilaM4.jpg";
import besnaKobila55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/BesnaKobila/mobile/besnaKobilaM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pcinjskiOkrugPathRoutes } from "./PcinjskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaBesnaKobila = () => {
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

        <title>{switchLanguage === 'rs' ? "Besna Kobila – Planina, priroda i legenda | Serbia Wonders" : "Besna Kobila – Mountain, Nature, and Legend | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Besna Kobila je planina u jugoistočnoj Srbiji, deo Rodopskog masiva, poznata po bogatoj flori i fauni, pastirskim legendama i izvanrednim vidicima. Nalazi se istočno od Vranja i predstavlja odličnu destinaciju za ljubitelje prirode."
            :
            "Besna Kobila is a mountain in southeastern Serbia, part of the Rhodope massif, known for its rich biodiversity, pastoral legends, and scenic landscapes. Located east of Vranje, it's a perfect destination for nature lovers and hikers."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Besna Kobila, planina u Srbiji, jugoistočna Srbija, Vranje, Rodopski masiv, Kriva Feja, legenda, priroda, biljni svet, životinje, planinarenje, turizam, balkanske planine"
            :
            "Besna Kobila, mountain in Serbia, southeastern Serbia, Vranje, Rhodope massif, Kriva Feja, legend, nature, flora, fauna, hiking, tourism, Balkan mountains"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-besna-kobila`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-besna-kobila"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-besna-kobila"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-besna-kobila"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pcinjskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${besnaKobila11} 450w, ${besnaKobila1} `} alt="Planina Besna Kobila 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Planina Besna Kobila</h2>

              <section lang="sr">
                <p>
                  <strong>Besna kobila</strong> je planina u <em>jugoistočnom delu Srbije</em>, smeštena na granici sliva <strong>Južne Morave</strong> i sliva reke <strong>Strume</strong>. Deo je <strong>Rodopskog planinskog masiva</strong>. Najviši vrh planine doseže visinu od <strong>1.922 metra</strong>, dok ostali značajni vrhovi uključuju <em>Šuplji pad</em> (1.862 m), <em>Musul</em> (1.777 m), <em>Mečit</em> (1.587 m), kao i <strong>Bele Vode</strong> i <strong>Modriku</strong>. Tokom perioda od <strong>1878. do 1919.</strong> godine, greben ove planine činio je granicu između <strong>Srbije</strong> i <strong>Bugarske</strong>.
                </p>
              </section>

              <img srcSet={`${besnaKobila22} 450w, ${besnaKobila2}`} alt="Planina Besna Kobila 2" loading="lazy" />


              <section lang="sr">
                <p>
                  U prošlim vremenima, na planini bogatoj <strong>zelenim pašnjacima</strong>, naselili su se nomadi sa svojim stadima <em>ovaca, krava i konja</em>. Po dolasku, brzo su počeli da grade svoje kolibe. U tom naselju živela je lepa devojka po imenu <strong>Feja</strong>. Feja je bila <em>snažna i hrabra</em>, sa talentom za jahanje koji je bio jednak, ako ne i bolji, od svih muškaraca iz sela. Njena najveća strast bilo je <strong>jahanje</strong>, a gotovo nikada nije silazila sa svoje kobile.
                  <br /><br />
                  Jednog dana, dok je Feja bila na putu, njenoj kobili je zadao ujeda <strong>besan pas</strong>. Feja nije primetila ujed, ali je ubrzo videla <em>krvave tragove</em> na nozdrvama svoje kobile. Požurila je u selo u nadi da će joj ljudi pomoći da spase ljubimicu. Međutim, kobila je iznenada krenula u suprotnom pravcu i pojurila prema planini. U tom momentu, dok je kobila naglo skrenula, Feja je pala sa nje i <strong>slomila nogu</strong>.
                  <br /><br />
                  Selo je pronašlo nesvesnu Feju i odnelo je u očevu kolibu, gde su je dugo lečili. Iako su je spasili, Feja je ostala <em>hroma</em>. Kao podsećanje na ovu lepu i hrabru devojku, te njenu tragičnu sudbinu, selo je nazvano <strong>Kriva Feja</strong>, a planina je dobila ime <strong>Besna kobila</strong>.
                </p>
              </section>

              <img srcSet={`${besnaKobila33} 450w, ${besnaKobila3}`} alt="Planina Besna Kobila 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Planina <strong>Besna kobila</strong>, sa najvišim vrhom koji se uzdiže na <strong>1.922 metra</strong> nadmorske visine, smeštena je u <em>jugoistočnom delu Srbije</em>. Nalazi se <strong>27 kilometara istočno od Vranja</strong>, a od <strong>Niša</strong>, <strong>Skoplja</strong> i <strong>Sofije</strong> udaljena je oko 90 kilometara u pravoj liniji.
                  <br /><br />
                  Ova planina deo je <strong>rodopskog planinskog masiva</strong>. Rodopske planine se protežu i na istočnu i zapadnu stranu od Južne Morave. Uz Besnu kobilu, u rodopski masiv spadaju i planine poput <strong>Dukata</strong>, <strong>Vardenika</strong>, <strong>Čemernika</strong>, <strong>Kukavice</strong>, <strong>Jastrepcu</strong> i druge. Severno od Besne kobile smešteni su <strong>Vardenik</strong> (1.874 m), <strong>Čemernik</strong> (1.638 m) i <strong>Oštrozub</strong> (1.546 m), dok južno od nje leže <strong>Dukat</strong> i <strong>Ostrogovske planine</strong> u Makedoniji.
                  <br /><br />
                  Severnim podnožjem planine vodi put koji povezuje <strong>Bosilegrad</strong> sa dolinom Južne Morave. Na južnoj padini planine nalazi se <strong>rudnik galenita</strong>.
                </p>
              </section>

              <img srcSet={`${besnaKobila44} 450w, ${besnaKobila4}`} alt="Planina Besna Kobila 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Planina Besna kobila bogata je raznovrsnim biljnim vrstama, sa preko <strong>700 vrsta</strong> drvenastih, žbunastih i zeljastih biljaka. Najzastupljenije su samonikle lekovite biljke poput <em>kantariona</em>, <em>koprive</em>, <em>nane</em> i <em>maslačka</em>. Što se tiče životinjskog sveta, na ovoj planini nastanjuju se <strong>vukovi</strong>, <strong>divlje svinje</strong> i <strong>lisice</strong>.
                  <br /><br />
                  Srednja godišnja temperatura na Besnoj kobili iznosi <strong>4,5°C</strong>. Najtoplije je tokom <strong>jula</strong>, kada prosečna temperatura dostiže <strong>13,6°C</strong>, dok je <strong>januar</strong> najoštriji mesec, sa prosečnom temperaturom od <em>-6,5°C</em>. Kada su u pitanju padavine, Besna kobila prima između <strong>900 i 1000 milimetara</strong> kiše godišnje. Najveći padavinski period je u <strong>junu</strong>, sa 117 milimetara, dok je <strong>oktobar</strong> najsušniji mesec, sa svega 35 milimetara padavina.
                </p>
              </section>

              <img srcSet={`${besnaKobila55} 450w, ${besnaKobila5}`} alt="Planina Besna Kobila 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Najvažniji prirodni resursi područja Besne kobile uključuju sliv reke <strong>Južne Morave</strong>, reku <strong>Strumu</strong> sa njenim pritokama, termalne vode <strong>Vranjske banje</strong>, kao i <strong>Vlasinsko</strong> i <strong>Lisinsko jezero</strong>.
                  <br /><br />
                  Sliv Južne Morave je ključni vodeni sistem u ovom regionu. Reka Južna Morava teče od makedonske granice ka severu, dugačka <strong>295 kilometara</strong>, i uliva se u Veliku Moravu. Deo je crnomorskog sliva, a površina njenog sliva obuhvata <strong>15.469 kvadratnih kilometara</strong>. Pritoke koje teku u blizini Besne kobile uključuju <strong>Vranjsku reku</strong>, <strong>Vrlu</strong> i <strong>Vlasinu</strong>.
                  <br /><br />
                  U opštini Bosilegrad, hidrografsku mrežu čini reka <strong>Dragovištica</strong>, sa pritokama <strong>Brankovskom</strong>, <strong>Ljubatskom</strong> i <strong>Lisinskom</strong> rekama. Svi vodeni tokovi u ovom području usmereni su ka Strumi i Egejskom moru, osim <strong>Božičke</strong>, <strong>Lisinske</strong> i <strong>Ljubatske</strong> reke, koje putem Lisinskog jezera ulaze u sliv Vlasinskog jezera.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>Besna Kobila Mountain</h2>

              <section lang="en">
                <p>
                  <strong>Besna Kobila</strong> is a mountain located in the <em>southeastern part of Serbia</em>, situated on the border of the Južna Morava River basin and the Struma River basin. It is part of the <strong>Rhodope mountain massif</strong>. The highest peak of the mountain reaches an altitude of <strong>1,922 meters</strong>, while other notable peaks include <em>Šuplji pad</em> (1,862 m), <em>Musul</em> (1,777 m), <em>Mečit</em> (1,587 m), as well as <strong>Bele Vode</strong> and <strong>Modrika</strong>. During the period from <strong>1878 to 1919</strong>, the ridge of this mountain formed the border between <strong>Serbia</strong> and <strong>Bulgaria</strong>.
                </p>
              </section>

              <img srcSet={`${besnaKobila22} 450w, ${besnaKobila2}`} alt="Besna Kobila Mountain 2" loading="lazy" />

              <section lang="en">
                <p>
                  In earlier times, on the mountain rich with <strong>green pastures</strong>, nomads settled with their herds of <em>sheep, cows, and horses</em>. Upon arrival, they quickly began to build their huts. In that settlement lived a beautiful girl named <strong>Feja</strong>. Feja was <em>strong and brave</em>, with a talent for horse riding that was equal to, if not better than, all the men in the village. Her greatest passion was <strong>riding</strong>, and she almost never got off her mare.
                  <br /><br />
                  One day, while Feja was on the road, her mare was bitten by a <strong>mad dog</strong>. Feja did not notice the bite but soon saw <em>bloody traces</em> on her mare’s nostrils. She hurried to the village hoping people would help save her beloved horse. However, the mare suddenly went in the opposite direction and raced toward the mountain. At that moment, as the mare sharply turned, Feja fell off and <strong>broke her leg</strong>.
                  <br /><br />
                  The village found unconscious Feja and took her to her father’s hut, where she was treated for a long time. Although they saved her, Feja remained <em>lame</em>. As a reminder of this beautiful and brave girl and her tragic fate, the village was named <strong>Kriva Feja</strong>, and the mountain got the name <strong>Besna Kobila</strong>.
                </p>
              </section>

              <img srcSet={`${besnaKobila33} 450w, ${besnaKobila3}`} alt="Besna Kobila Mountain 3" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>Besna Kobila</strong> mountain, with its highest peak rising to <strong>1,922 meters</strong> above sea level, is located in the <em>southeastern part of Serbia</em>. It lies <strong>27 kilometers east of Vranje</strong> and about 90 kilometers in a straight line from <strong>Niš</strong>, <strong>Skopje</strong>, and <strong>Sofia</strong>.
                  <br /><br />
                  This mountain is part of the <strong>Rhodope mountain massif</strong>. The Rhodope mountains extend both to the east and west sides of the Južna Morava river. Along with Besna Kobila, the Rhodope massif includes mountains such as <strong>Dukat</strong>, <strong>Vardenik</strong>, <strong>Čemernik</strong>, <strong>Kukavica</strong>, <strong>Jastrebac</strong>, and others. North of Besna Kobila are <strong>Vardenik</strong> (1,874 m), <strong>Čemernik</strong> (1,638 m), and <strong>Oštrozub</strong> (1,546 m), while south of it lie <strong>Dukat</strong> and the <strong>Ostrogovske Mountains</strong> in Macedonia.
                  <br /><br />
                  At the northern foothills of the mountain runs a road that connects <strong>Bosilegrad</strong> with the Južna Morava valley. On the southern slope of the mountain lies a <strong>galena ore mine</strong>.
                </p>
              </section>

              <img srcSet={`${besnaKobila44} 450w, ${besnaKobila4}`} alt="Besna Kobila Mountain 4" loading="lazy" />

              <section lang="en">
                <p>
                  Besna Kobila mountain is rich in diverse plant species, with over <strong>700 species</strong> of woody, shrub, and herbaceous plants. The most common are wild medicinal herbs such as <em>St. John's wort</em>, <em>nettle</em>, <em>mint</em>, and <em>dandelion</em>. Regarding wildlife, the mountain is inhabited by <strong>wolves</strong>, <strong>wild boars</strong>, and <strong>foxes</strong>.
                  <br /><br />
                  The average annual temperature on Besna Kobila is <strong>4.5°C</strong>. The warmest month is <strong>July</strong>, when the average temperature reaches <strong>13.6°C</strong>, while <strong>January</strong> is the coldest month, with an average temperature of <em>-6.5°C</em>. Regarding precipitation, Besna Kobila receives between <strong>900 and 1000 millimeters</strong> of rainfall annually. The highest precipitation is in <strong>June</strong>, with 117 millimeters, while <strong>October</strong> is the driest month, with only 35 millimeters of rainfall.
                </p>
              </section>

              <img srcSet={`${besnaKobila55} 450w, ${besnaKobila5}`} alt="Besna Kobila Mountain 5" loading="lazy" />

              <section lang="en">
                <p>
                  The most important natural resources of the Besna Kobila area include the Južna Morava river basin, the Struma river with its tributaries, the thermal waters of <strong>Vranjska Banja</strong>, as well as <strong>Vlasina</strong> and <strong>Lisina lakes</strong>.
                  <br /><br />
                  The Južna Morava basin is a key water system in this region. The Južna Morava river flows from the Macedonian border to the north, is <strong>295 kilometers</strong> long, and flows into the Great Morava. It is part of the Black Sea basin, and the area of its basin covers <strong>15,469 square kilometers</strong>. Tributaries flowing near Besna Kobila include the <strong>Vranjska river</strong>, <strong>Vrla</strong>, and <strong>Vlasina</strong>.
                  <br /><br />
                  In the Bosilegrad municipality, the hydrographic network consists of the <strong>Dragovištica river</strong>, with its tributaries: <strong>Brankovska</strong>, <strong>Ljubatska</strong>, and <strong>Lisinska</strong> rivers. All water flows in this area are directed towards the Struma river and the Aegean Sea, except for the <strong>Božička</strong>, <strong>Lisinska</strong>, and <strong>Ljubatska</strong> rivers, which flow via Lisina Lake into the basin of Vlasina Lake.
                </p>
              </section>

            </>
          )}

      </div>

    </>
  );
};


export default PlaninaBesnaKobila;