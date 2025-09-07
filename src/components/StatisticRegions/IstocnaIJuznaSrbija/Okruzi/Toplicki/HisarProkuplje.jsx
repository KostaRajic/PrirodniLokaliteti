/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import hisar1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/HisarProkuplje/desktop/hisar1.jpg";
import hisar2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/HisarProkuplje/desktop/hisar2.jpg";
import hisar3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/HisarProkuplje/desktop/hisar3.jpg";
import hisar4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/HisarProkuplje/desktop/hisar4.jpg";
import hisar5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/HisarProkuplje/desktop/hisar5.jpg";
import hisar11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/HisarProkuplje/mobile/hisarM1.jpg";
import hisar22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/HisarProkuplje/mobile/hisarM2.jpg";
import hisar33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/HisarProkuplje/mobile/hisarM3.jpg";
import hisar44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/HisarProkuplje/mobile/hisarM4.jpg";
import hisar55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/HisarProkuplje/mobile/hisarM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { toplickiOkurgPathRoutes } from "./ToplickiOkurgPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const TvrdjavaHisar = () => {
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

        <title>{switchLanguage === 'rs' ? "Hisar Tvrđava – Srednjovekovni Prokupački Grad i Spomenik Kulture" : "Hisar Fortress – The Medieval Town of Prokuplje and a Cultural Monument"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Hisar tvrđava u Prokuplju je značajno srednjovekovno utvrđenje na prirodnoj steni iznad reke Toplice, nastala na rimskim temeljima i važan deo srpske istorije."
            :
            "Hisar Fortress in Prokuplje is a medieval stronghold built on Roman foundations above the Toplica river, representing an important site in Serbian history."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Hisar tvrđava, Prokuplje, srednjovekovni grad, Toplica, spomenik kulture, vodena kula, despot Đurađ, srpska tvrđava, Srbija istorija"
            :
            "Hisar Fortress, Prokuplje, medieval city, Toplica river, cultural monument, water tower, Despot Đurađ, Serbian fortress, Serbia history"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/tvrdajva-hisar`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/tvrdajva-hisar"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/tvrdajva-hisar"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/tvrdajva-hisar"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(toplickiOkurgPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${hisar11} 450w, ${hisar1} `} alt="Hisar Tvrđava 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Hisar Tvrđava</h2>

              <section lang="sr">
                <p>
                  <strong>Prokupaćki grad</strong>, ili <em>Hisar</em> (ranije poznat kao Hameum, Komplos i Toplica), je tvrđava u Srbiji oko koje se razvilo današnje Prokuplje. Smeštena je na uzvišenju iznad grada, koje sa tri strane okružuje reka <strong>Toplica</strong>, formirajući prirodnu odbranu. Današnja tvrđava nastala je u drugoj polovini 14. veka, verovatno između 1371. i 1389. godine, kao zaštita od Osmanlijskog carstva, ali je izgrađena na starijim, antičkim i rimskim temeljima. Utvrđenje se sastoji od ovalne citadele sa suvim šancom, dva bedema u obliku lepeze, dva podgrađa i crkava – crkve svetog Prokopija iz 10. i Latinske (Jug Bogdanove) crkve iz 14. veka.
                </p>
              </section>

              <img srcSet={`${hisar22} 450w, ${hisar2}`} alt="Hisar Tvrđava 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Sa severozapadne strane citadele nalazi se strma stena kroz koju protiče reka Toplica, a pored nje je danas najbolje očuvana <strong>vodena kula</strong>, popularno nazvana <em>Jug Bogdanova kula</em>. Od nekadašnje tvrđave ostali su uglavnom temelji, osim arheološki istražene i konzervirane citadele i vodene kule, koja je sačuvala veliki deo originalnog izgleda.
                  <br /><br />
                  Prostor tvrđave je pod zaštitom države kao spomenik kulture od velikog značaja. Povremeno se održavaju kulturne manifestacije, obično povodom dana ili slave grada 21. jula (Sveti Prokopije). Trenutno traju radovi na čišćenju i obnovi tvrđave.
                </p>
              </section>

              <img srcSet={`${hisar33} 450w, ${hisar3}`} alt="Hisar Tvrđava 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Sredinom 12. veka, Prokuplje i oblast Toplice bile su deo udele kneževine Stefana Nemanje (1166–1196), iz koje je započeo stvaranje nove srpske države. Pretpostavlja se da je jedan njegov dvor bio u Toplici.
                  <br /><br />
                  Raspad srpskog carstva i proboj Osmanlija u drugoj polovini 14. veka učinili su Topličku dolinu strateški važnom, pa je u Prokuplju podignuto novo utvrđenje za zaštitu tog pravca. Već 1386. Osmanlije su, u pohodu na Kruševac, zaobišle Prokuplje, što govori o snazi tvrđave, a njihov odred potučen je u bici kod Pločnika iste godine. Tada stižu mošti svetog Prokopija u gradsku crkvu unutar tvrđavskog podgrađa.
                </p>
              </section>

              <img srcSet={`${hisar44} 450w, ${hisar4}`} alt="Prokupaćki grad" loading="lazy" />

              <section lang="sr">
                <p>
                  Tokom prvog pada Despotovine, Osmanlije su 1440. ušle u grad, ali je on vraćen despotu Đurđu (1427–1456) Segedinskim mirom. Konačno, 1454. godine, grad zauzimaju Osmanlije, koji obnavljaju tvrđavu i naseljavaju podgrađe.
                  <br /><br />
                  U vreme Morejskog rata i prodora Pikolominija do Skoplja, Prokuplje pada pod austrijsku vlast. 1689. jedan austrijski inženjer pravi plan utvrđenja sa ovalnom citadelom i Donžon kulom.
                  <br /><br />
                  Nakon srpsko-turskih ratova 1878, brdo nije bilo pošumljeno kao danas i jasno su se videla dva koncentrčna bedema podgrađa, sa tri očuvane i jednom delimično srušenom četvoročlanom kulom.
                </p>
              </section>

              <img srcSet={`${hisar55} 450w, ${hisar5}`} alt="Prokupacki grad Hisar" loading="lazy" />

              <section lang="sr">
                <p>
                  Prokupčanska tvrđava sastoji se od ovalne citadele na najvišoj tački brda, sa bedemima višeg i nižeg podgrađa. U severozapadnom podnožju brda nalazi se izbočena kula na obali Tople.
                  <br /><br />
                  Citadela je sa severozapada zaštićena strmom stenom, zbog čega je bedem na toj strani širok samo 1 metar, dok je jugoistočni bedem širok 3,5 metra i zaštićen suvim šancom. Ulaz u citadelu je na severoistočnom kraju, čuva ga kvadratna Donžon kula. Pored nje je mala kapija koja povezuje citadelu sa vodenom kulom na obali reke. Unutrašnjost citadele pokriva površinu od oko 500 m² i sadrži cisternu za vodu.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Hisar Fortress</h2>

              <section lang="en"> <p> <strong>Prokuplje Fortress</strong>, or <em>Hisar</em> (formerly known as Hameum, Komplos, and Toplica), is a fortress in Serbia around which the modern town of Prokuplje developed. It is located on a hill above the town, surrounded on three sides by the <strong>Toplica River</strong>, providing a natural defense. The present fortress was built in the second half of the 14th century, probably between 1371 and 1389, as protection against the Ottoman Empire, but it was constructed on older, ancient and Roman foundations. The fortification consists of an oval citadel with a dry moat, two fan-shaped walls, two lower towns, and churches — the Church of Saint Procopius from the 10th century and the Latin (Jug Bogdan’s) Church from the 14th century. </p> </section>
              <img srcSet={`${hisar22} 450w, ${hisar2}`} alt="Hisar Fortress 2" loading="lazy" />

              <section lang="en"> <p> On the northwestern side of the citadel there is a steep cliff through which the Toplica River flows, and next to it is today the best-preserved <strong>water tower</strong>, popularly known as <em>Jug Bogdan’s Tower</em>. From the original fortress, mostly only foundations remain, except for the archaeologically excavated and conserved citadel and water tower, which has preserved much of its original appearance. <br /><br /> The fortress area is protected by the state as a cultural monument of great importance. Cultural events are occasionally held here, usually on the town’s day or patron saint celebration on July 21st (Saint Procopius). Currently, restoration and cleaning works on the fortress are ongoing. </p> </section>
              <img srcSet={`${hisar33} 450w, ${hisar3}`} alt="Hisar Fortress 3" loading="lazy" />

              <section lang="en"> <p> In the mid-12th century, Prokuplje and the Toplica region were part of the domain of Prince Stefan Nemanja (1166–1196), who began the creation of the new Serbian state. It is assumed that one of his courts was located in Toplica. <br /><br /> The collapse of the Serbian Empire and the Ottoman incursion in the second half of the 14th century made the Toplica valley strategically important, so a new fortress was built in Prokuplje to protect this route. Already in 1386, the Ottomans, during their campaign to Kruševac, bypassed Prokuplje, which speaks to the strength of the fortress, and their detachment was defeated at the Battle of Pločnik that same year. At that time, the relics of Saint Procopius were brought to the town church within the fortress’s lower town. </p> </section>
              <img srcSet={`${hisar44} 450w, ${hisar4}`} alt="Prokuplje Fortress" loading="lazy" />

              <section lang="en"> <p> During the first fall of the Despotate, the Ottomans entered the town in 1440, but it was returned to Despot Đurađ (1427–1456) by the Treaty of Szeged. Finally, in 1454, the town was captured by the Ottomans, who restored the fortress and settled the lower town. <br /><br /> During the Morean War and the advance of Piccolomini to Skopje, Prokuplje fell under Austrian control. In 1689, an Austrian engineer made a plan for the fortress with an oval citadel and a donjon tower. <br /><br /> After the Serbian–Turkish wars in 1878, the hill was not forested as it is today, and two concentric walls of the lower town were clearly visible, with three preserved and one partially destroyed four-membered tower. </p> </section>
              <img srcSet={`${hisar55} 450w, ${hisar5}`} alt="Prokuplje Fortress Hisar" loading="lazy" />

              <section lang="en"> <p> The Prokuplje fortress consists of an oval citadel at the highest point of the hill, with walls of the upper and lower towns. At the northwestern foot of the hill, there is a protruding tower on the bank of the Toplica River. <br /><br /> The citadel is protected on the northwest by a steep rock, which is why the wall on that side is only one meter wide, while the southeastern wall is 3.5 meters wide and protected by a dry moat. The entrance to the citadel is at the northeastern end, guarded by a square donjon tower. Next to it is a small gate that connects the citadel with the water tower on the riverbank. The interior of the citadel covers an area of about 500 m² and contains a water cistern. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default TvrdjavaHisar;