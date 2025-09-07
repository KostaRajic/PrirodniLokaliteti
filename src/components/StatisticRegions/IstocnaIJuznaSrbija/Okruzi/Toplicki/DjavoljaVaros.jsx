/* eslint-disable react/no-unknown-property */
import djavoljaVaros1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/desktop/djavoljaVaros1.jpg";
import djavoljaVaros2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/desktop/djavoljaVaros2.jpg";
import djavoljaVaros3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/desktop/djavoljaVaros3.jpg";
import djavoljaVaros4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/desktop/djavoljaVaros4.jpg";
import djavoljaVaros5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/desktop/djavoljaVaros5.jpg";
import djavoljaVaros11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/mobile/djavoljaVarosM1.jpg";
import djavoljaVaros22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/mobile/djavoljaVarosM2.jpg";
import djavoljaVaros33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/mobile/djavoljaVarosM3.jpg";
import djavoljaVaros44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/mobile/djavoljaVarosM4.jpg";
import djavoljaVaros55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/DjavoljaVaros/mobile/djavoljaVarosM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { toplickiOkurgPathRoutes } from "./ToplickiOkurgPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const DjavoljaVaros = () => {
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

        <title>{switchLanguage === 'rs' ? "Đavolja Varoš – Jedinstveni Prirodni Fenomen na Radan Planini | Serbia Wonders" : "Đavolja Varoš – A Unique Natural Phenomenon on Mount Radan | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Đavolja Varoš je skup preko 200 zemljanih kula sa kamenim kapama, jedinstven prirodni fenomen na Radan planini, poznat po izuzetnoj erozivnoj formaciji i lekovitim izvorištima."
            :
            "Devil's Town is a collection of over 200 earth pyramids topped with stone caps on Radan Mountain, a rare natural phenomenon known for its erosion formations and mineral springs."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Đavolja Varoš, Radan planina, zemljane kule, prirodni fenomen, Kuršumlija, erozija, spomenik prirode, mineralna voda, prirodna čuda Srbije"
            :
            "Devil's Town, Radan Mountain, earth pyramids, natural phenomenon, Kuršumlija, erosion, natural monument, mineral water, Serbian natural wonders"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/djavolja-varos`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/djavolja-varos"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/djavolja-varos"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/djavolja-varos"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(toplickiOkurgPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${djavoljaVaros11} 450w, ${djavoljaVaros1} `} alt="Đavolja Varoš 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Đavolja Varoš</h2>

              <section lang="sr">
                <p>
                  <strong>Đavolja varoš</strong> je skup zemljanih glavutaka ili kula na čijim vrhovima se nalaze kamene kape (blokovi, andezitske kupe). Ima ih više od dvesta, visoke su od dva do petnaest metara, a široke od pola do tri metra. Đavolja varoš je retki prirodni fenomen koji se nalazi na <em>Radan planini</em> u ataru sela <strong>Đake</strong>, blizu <strong>Kuršumlije</strong>, oko 90 km jugozapadno od Niša. Čine je 202 kamene figure nastale dugotrajnim i strpljivim radom prirode, smeštene u dve jaruge – <em>Đavolja jaruga</em> i <em>Paklena jaruga</em>, koje su podeljene vododelnicom, a čiji se završni delovi spajaju u erozivnu čelenku.
                </p>
              </section>

              <img srcSet={`${djavoljaVaros22} 450w, ${djavoljaVaros2}`} alt="Đavolja Varoš 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Ovaj spomenik kulture čine dva, u svetu retka prirodna fenomena: zemljane figure kao specifični oblici reljefa i dva izvora veoma kisele vode sa visokom mineralizacijom.
                  <br /><br />
                  Đavolja varoš je bila najbolje plasirani evropski kandidat u svojoj kategoriji, kao jedan od 77 kandidata za sedam svetskih čuda prirode. Posebno je značajno da je bila u trci sve do poslednjeg glasanja leta 2010. godine.
                  <br /><br />
                  Zaštićena je od 1959. godine, a 1995. je Uredbom Vlade Srbije proglašena za prirodno dobro od izuzetnog značaja i stavljena u prvu kategoriju zaštite kao spomenik prirode.
                </p>
              </section>

              <img srcSet={`${djavoljaVaros33} 450w, ${djavoljaVaros3}`} alt="Đavolja Varoš 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Kameni stubovi nastali su erozijom zemljišta sastavljenog od rastresitog, ali čvrstog materijala na kome se nalazi veće kamenje. Pre više miliona godina ovo područje bilo je centar snažnih vulkanskih aktivnosti, što i danas potvrđuju raznobojne stene u zaledju stubova.
                  <br /><br />
                  Stvaranje figura uslovili su i ljudi koji su uništavanjem šume omogućili razorno delovanje vode. Kiša i voda su ispirale zemljište, osim ispod kamenih kapa, koje svojim težinama štite dublje slojeve zemlje i formiraju piramide ili kule.
                  <br /><br />
                  Ovaj erozivni proces traje vekovima, tokom koga figure nastaju, rastu, menjaju se, skraćuju, nestaju i ponovo se stvaraju.
                </p>
              </section>

              <img srcSet={`${djavoljaVaros44} 450w, ${djavoljaVaros4}`} alt="Đavolja Varoš 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Fenomen Đavolje varoši je jedinstven u Srbiji i veoma redak u svetu. Slične pojave postoje u Alpima i u SAD-u (poznata „Bašta bogova“), ali su kule Đavolje varoši veće i stabilnije, što ih čini najpoznatijim prirodnim spomenikom ove vrste u Evropi.
                  <br /><br />
                  Do Đavolje varoši može se doći iz opština Kuršumlija, Bojnik i Lebane, pri čemu je planinarenje iz Lebana najlakši i najlepši pristup.
                  <br /><br />
                  Đavolja varoš svrstana je u <strong>Sedam srpskih čuda</strong>, u kategoriju istorijskih i kulturnih spomenika Srbije, kao i sedam prirodnih mesta, u akciji „Magazin“ lista <em>Politika</em> i Turističke organizacije Srbije.
                </p>
              </section>

              <img srcSet={`${djavoljaVaros55} 450w, ${djavoljaVaros5}`} alt="Đavolja Varoš 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Pored kamenih kula, Đavolja varoš je poznata i po dva izvora veoma kisele vode. Jedan je <strong>Đavolja voda</strong>, hladan i ekstremno kisel izvor (pH 1.5) sa visokom mineralizacijom (15 g/l), smešten u Đavoljoj jaruzi. Drugi je <em>Crveno vrelo</em> (pH 3.5), sa nižom mineralizacijom (4.372 mg/l).
                  <br /><br />
                  Ove vode su retke i koriste se u banjskom lečenju, jer se smatraju lekovitima, mada naučnici upozoravaju da voda sa izvora Đavolja voda nije bezbedna za piće zbog visokog sadržaja gvožđa, bakra i sumpora.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Devil’s Town</h2>

              <section lang="en"> <p> <strong>Đavolja Varoš</strong> is a collection of earth pillars or towers topped with stone caps (blocks of andesite cones). There are more than two hundred of them, ranging in height from two to fifteen meters and in width from half a meter to three meters. Đavolja Varoš is a rare natural phenomenon located on <em>Radan Mountain</em> in the vicinity of the village of <strong>Đake</strong>, near <strong>Kuršumlija</strong>, about 90 km southwest of Niš. It consists of 202 stone formations created through long and patient natural processes, situated in two ravines — <em>Đavolja Jaruga</em> and <em>Paklena Jaruga</em> — separated by a watershed, whose lower parts join into an erosive gorge. </p> </section>
              <img srcSet={`${djavoljaVaros22} 450w, ${djavoljaVaros2}`} alt="Đavolja Varoš 2" loading="lazy" />

              <section lang="en"> <p> This cultural monument comprises two rare natural phenomena in the world: earth figures as specific relief forms and two springs of very acidic water with high mineralization. <br /><br /> Đavolja Varoš was the best-ranked European candidate in its category, being one of 77 candidates for the Seven Natural Wonders of the World. It is especially notable that it remained in the competition until the final vote in the summer of 2010. <br /><br /> It has been protected since 1959, and in 1995, by decree of the Government of Serbia, it was declared a natural asset of exceptional importance and placed in the highest protection category as a natural monument. </p> </section>
              <img srcSet={`${djavoljaVaros33} 450w, ${djavoljaVaros3}`} alt="Đavolja Varoš 3" loading="lazy" />

              <section lang="en"> <p> The stone pillars were formed by the erosion of soil composed of loose but solid material that contains larger stones. Several million years ago, this area was the center of strong volcanic activity, as evidenced today by the colorful rocks behind the pillars. <br /><br /> The formation of these figures was also influenced by human activity, as deforestation allowed the destructive action of water. Rain and water washed away the soil except beneath the stone caps, which by their weight protect the deeper layers of earth and form pyramids or towers. <br /><br /> This erosive process has lasted for centuries, during which the figures are formed, grow, change, shorten, disappear, and are created anew. </p> </section>
              <img srcSet={`${djavoljaVaros44} 450w, ${djavoljaVaros4}`} alt="Đavolja Varoš 4" loading="lazy" />

              <section lang="en"> <p> The phenomenon of Đavolja Varoš is unique in Serbia and very rare in the world. Similar formations exist in the Alps and in the USA (the well-known "Garden of the Gods"), but the towers of Đavolja Varoš are larger and more stable, making it the best-known natural monument of this type in Europe. <br /><br /> Đavolja Varoš can be reached from the municipalities of Kuršumlija, Bojnik, and Lebane, with hiking from Lebane being the easiest and most beautiful approach. <br /><br /> Đavolja Varoš is ranked among the <strong>Seven Serbian Wonders</strong> in the category of historical and cultural monuments of Serbia, as well as among the seven natural sites, in a campaign by the "Magazin" section of the <em>Politika</em> newspaper and the Tourist Organization of Serbia. </p> </section>
              <img srcSet={`${djavoljaVaros55} 450w, ${djavoljaVaros5}`} alt="Đavolja Varoš 5" loading="lazy" />

              <section lang="en"> <p> Besides the stone towers, Đavolja Varoš is also known for two springs of very acidic water. One is <strong>Đavolja voda</strong>, a cold and extremely acidic spring (pH 1.5) with high mineralization (15 g/l), located in Đavolja Jaruga. The other is <em>Crveno Vrelo</em> (pH 3.5), with lower mineralization (4,372 mg/l). <br /><br /> These waters are rare and used in spa treatments, as they are considered healing, although scientists warn that water from the Đavolja voda spring is not safe for drinking due to high content of iron, copper, and sulfur. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default DjavoljaVaros;