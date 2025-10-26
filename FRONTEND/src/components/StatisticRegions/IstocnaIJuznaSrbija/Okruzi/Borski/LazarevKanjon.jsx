/* eslint-disable react/no-unknown-property */
import lazarevKanjon1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/desktop/lazarevKanjon1.jpg";
import lazarevKanjon2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/desktop/lazarevKanjon2.jpg";
import lazarevKanjon3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/desktop/lazarevKanjon3.jpg";
import lazarevKanjon4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/desktop/lazarevKanjon4.jpg";
import lazarevKanjon5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/desktop/lazarevKanjon5.jpg";
import lazarevKanjon11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/mobile/lazarevKanjonM1.jpg";
import lazarevKanjon22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/mobile/lazarevKanjonM2.jpg";
import lazarevKanjon33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/mobile/lazarevKanjonM3.jpg";
import lazarevKanjon44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/mobile/lazarevKanjonM4.jpg";
import lazarevKanjon55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevKanjon/mobile/lazarevKanjonM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const LazarevKanjon = () => {
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

        <title>{switchLanguage === 'rs' ? "Lazarev Kanjon – Najdublji Kanjon Istočne Srbije | Serbia Wonders" : "Lazarev Canyon – The Deepest Canyon of Eastern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Lazarev kanjon, najdublji i najduži kanjon u istočnoj Srbiji, poznat po spektakularnoj prirodi, Zlotskim pećinama, Lazarevoj pećini, retkim biljkama i divljim životinjama."
            :
            "Lazar’s Canyon, the deepest and longest canyon in eastern Serbia, known for its spectacular nature, Zlot Caves, Lazareva Cave, rare plants, and wild animals."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Lazarev kanjon, Lazareva reka, Zlotske pećine, Lazareva pećina, Kučaj, Malinik, speleologija, surog orao, srpska ramonda, pećine Srbije, divokoze, priroda Srbije, tisa, hajduci, poskok, turizam u Srbiji"
            :
            "Lazar’s Canyon, Lazar’s River, Zlot Caves, Lazareva Cave, Kučaj, Malinik, speleology, golden eagle, Serbian ramonda, caves of Serbia, chamois, Serbian nature, yew tree, outlaws, horned viper, tourism in Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazarev-kanjon`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazarev-kanjon"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazarev-kanjon"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazarev-kanjon"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(borskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${lazarevKanjon11} 450w, ${lazarevKanjon1} `} alt="Lazarev Kanjon 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Lazarev Kanjon</h1>

              <section lang="sr">
                <p>
                  Kanjon <strong>Lazareve reke</strong>, poznat i kao <strong>Lazarev kanjon</strong>, najduži je i
                  najdublji kanjon u istočnoj Srbiji. Nalazi se u blizini sela <strong>Zlot</strong>, oko
                  <strong>20 kilometara</strong> od Bora, i prostire se između obronaka istočnog <strong>Kučaja</strong> i
                  kraške visoravni <strong>Dubašnica</strong>. Zbog strmih stena i nepristupačnog terena,
                  ni danas nije u potpunosti istražen. Poznat je po brojnim pećinama i
                  jamama, a do sada je registrovano čak <strong>70 speleoloških objekata</strong>.
                  <br />
                  <br />
                  Najpoznatiji među njima je <strong>Lazareva pećina</strong>, ujedno i najduža pećina u
                  Srbiji. Zbog svoje izuzetne prirodne vrednosti, <strong>Lazarev kanjon</strong> zaštićen
                  je kao spomenik prirode.
                </p>
              </section>

              <img srcSet={`${lazarevKanjon22} 450w, ${lazarevKanjon2} `} alt="Lazarev Kanjon 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Sa dužinom od oko <strong>9 kilometara</strong> i dubinom koja varira između <strong>300 i 500
                    metara</strong>, <strong>Lazarev kanjon</strong> je najduži i najdublji kanjon u istočnoj Srbiji.
                  Nastao je usecanjem <strong>Lazareve reke</strong> i njenih pritoka – <em>Valja Mikulj
                    (Mikuljska reka)</em>, <em>Valja de Mižlok</em> i <em>Vejske reke</em> – u krečnjački masiv
                  <strong>Kučaja</strong>. Ovaj predeo obiluje speleološkim objektima, među kojima se
                  ističe <strong>Lazareva pećina</strong>, najduža pećina u Srbiji prema dosadašnjim
                  istraživanjima, kao i pećina <strong>Vernjikica</strong>, koju mnogi smatraju
                  najatraktivnijom u zemlji.
                  <br />
                  <br />
                  Kanjon ima asimetričan poprečni profil – desna strana, koja se pruža
                  ispod <strong>Malinika</strong>, dostiže visinu od <strong>500 metara</strong>, dok je leva strana visoka
                  oko <strong>300 metara</strong>. Prosečan nagib uzdužnog profila kanjona iznosi <strong>38%</strong>, a
                  visinska razlika između njegovog završetka i ušća u <strong>Zlotsku reku</strong> je <strong>200
                    metara</strong>. Na pojedinim mestima, stenovite litice kanjona toliko su blizu
                  da im se gornji rubovi nalaze na manje od <strong>400 metara</strong> razmaka. U najužem
                  delu kanjona formiran je niz džinovskih lonaca – vodom izdubljenih
                  kotlova raspoređenih na dva visinska nivoa. Najveći među njima ima
                  dužinu od <strong>7,5 metara</strong>, širinu od <strong>6,5 metara</strong> i dubinu od <strong>3 metra</strong>.
                </p>
              </section>

              <img srcSet={`${lazarevKanjon33} 450w, ${lazarevKanjon3} `} alt="Lazarev Kanjon 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Kanjon je sa svih strana okružen stenovitim grebenima: na jugu i
                  jugoistoku uzdiže se <strong>Malinik</strong> (<strong>1.087 m</strong>), na severu <strong>Strnjak</strong> (<strong>720 m</strong>) i
                  <strong>Kornjet</strong> (<strong>696 m</strong>), dok se na zapadu nalaze <strong>Pogara</strong> (<strong>883 m</strong>) i <strong>Mikulja</strong> (<strong>1.022
                    m</strong>). U svom sastavu krije više od <strong>70 pećina</strong>, od kojih su samo neke
                  istražene i dostupne. Ove pećine, poznate kao <strong>Zlotske pećine</strong>, uključuju
                  <strong>Lazarevu pećinu</strong>, <strong>Vernjikicu</strong>, <strong>Hajdučicu</strong>, <strong>Mandinu pećinu</strong>, <strong>Dubašničku jamu</strong>
                  i druge.
                  <br />
                  <br />
                  Prostor <strong>Lazarevog kanjona</strong> čini zatvoren ekosistem, što je omogućilo
                  opstanak retkih i endemskih biljnih vrsta, poput <strong>srpske ramonde</strong>. Kanjon
                  je takođe stanište strogo zaštićenog <strong>surog orla</strong>, dok se u pećini
                  <strong>Vernjikica</strong> nalazi kolonija od čak <strong>50.000 slepih miševa</strong> – najveća te
                  vrste u Evropi.
                </p>
              </section>

              <img srcSet={`${lazarevKanjon44} 450w, ${lazarevKanjon4} `} alt="Lazarev Kanjon 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Lazarev kanjon</strong>, kroz koji protiče istoimena reka, nekada je bio jedno od
                  najvažnijih skrovišta homoljskih hajduka tokom turske vladavine. Ulazak
                  u kanjon za hajduke je značio sigurnost, jer se Turci nikada nisu
                  usuđivali da ih tamo slede.
                  <br />
                  <br />
                  Prema legendi, nakon bitke na <strong>Marici 1371. godine</strong>, konjanici kneza
                  <strong>Lazara</strong> stigli su u ovaj kraj i tu se zadržali neko vreme, po čemu su
                  reka i kanjon dobili ime. Kasnije su u pećinama kanjona utočište
                  pronalazili i hajduci koji su se borili protiv turskih osvajača.
                </p>
              </section>

              <img srcSet={`${lazarevKanjon55} 450w, ${lazarevKanjon5} `} alt="Lazarev Kanjon 5" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Lazarev kanjon</strong> spada među floristički i fitogeografski najsloženija i
                  najraznovrsnija područja u Srbiji. Flora ovog kanjona i <strong>Malinika</strong>
                  obuhvata <strong>720 taksona</strong>, što čini <strong>20%</strong> flore Srbije i <strong>11%</strong> flore Balkana,
                  raspoređenih u <strong>345 rodova</strong> i <strong>71 porodicu</strong>. Ipak, biljni svet ovog područja
                  još uvek nije u potpunosti istražen, pa se pretpostavlja da je njegovo
                  bogatstvo još veće.
                  <br />
                  <br />
                  Danas je <strong>Lazarev kanjon</strong> stanište retkih biljnih vrsta, poput <strong>krimskog
                    bora</strong>, <strong>reliktnog tise</strong> i <strong>srpske ramonde</strong>, kao i brojnih životinja,
                  uključujući <strong>divokozu</strong>, <strong>surog orla</strong>, <strong>šumsku sovu</strong> i <strong>sivog sokola</strong>. Njegove
                  pećine dom su mnogim endemskim zglavkarima i slepim miševima. Osim toga,
                  u kanjonu se nalaze brojna legla otrovnih zmija, pre svega <strong>poskoka</strong>, što
                  ga čini jednim od najvećih staništa ove vrste u Evropi.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Lazarev Canyon</h1>

              <section lang="en">
                <p>
                  The canyon of the <strong>Lazareva River</strong>, also known as <strong>Lazarev Canyon</strong>, is the longest and
                  deepest canyon in eastern Serbia. It is located near the village of <strong>Zlot</strong>, about
                  <strong>20 kilometers</strong> from Bor, stretching between the slopes of the eastern <strong>Kučaj</strong> mountains and the
                  karst plateau of <strong>Dubašnica</strong>. Due to steep cliffs and inaccessible terrain,
                  it has still not been fully explored. It is known for numerous caves and
                  pits, with as many as <strong>70 speleological sites</strong> registered so far.
                  <br />
                  <br />
                  The most famous among them is the <strong>Lazareva Cave</strong>, which is also the longest cave in
                  Serbia. Due to its exceptional natural value, <strong>Lazarev Canyon</strong> is protected
                  as a natural monument.
                </p>
              </section>

              <img srcSet={`${lazarevKanjon22} 450w, ${lazarevKanjon2} `} alt="Lazarev Canyon 2" loading="lazy" />

              <section lang="en">
                <p>
                  With a length of about <strong>9 kilometers</strong> and a depth varying between <strong>300 and 500
                    meters</strong>, <strong>Lazarev Canyon</strong> is the longest and deepest canyon in eastern Serbia.
                  It was formed by the cutting action of the <strong>Lazareva River</strong> and its tributaries – <em>Valja Mikulj
                    (Mikuljska River)</em>, <em>Valja de Mižlok</em>, and <em>Vejska River</em> – in the limestone massif of
                  <strong>Kučaj</strong>. This area abounds in speleological sites, among which
                  <strong>Lazareva Cave</strong> stands out as the longest cave in Serbia according to current
                  research, as well as the <strong>Vernjikica Cave</strong>, considered by many
                  the most attractive cave in the country.
                  <br />
                  <br />
                  The canyon has an asymmetric cross-section – the right side, stretching
                  below <strong>Malinik</strong>, reaches a height of <strong>500 meters</strong>, while the left side is about
                  <strong>300 meters</strong> high. The average gradient along the canyon’s profile is <strong>38%</strong>, and
                  the elevation difference between its end and the mouth into the <strong>Zlotska River</strong> is <strong>200
                    meters</strong>. In some places, the rocky cliffs are so close that their upper edges are less than <strong>400 meters</strong> apart. In the narrowest
                  part of the canyon, a series of giant potholes have formed – water-eroded
                  basins arranged on two elevation levels. The largest among them measures
                  <strong>7.5 meters</strong> in length, <strong>6.5 meters</strong> in width, and <strong>3 meters</strong> in depth.
                </p>
              </section>

              <img srcSet={`${lazarevKanjon33} 450w, ${lazarevKanjon3} `} alt="Lazarev Canyon 3" loading="lazy" />

              <section lang="en">
                <p>
                  The canyon is surrounded on all sides by rocky ridges: to the south and
                  southeast rises <strong>Malinik</strong> (<strong>1,087 m</strong>), to the north <strong>Strnjak</strong> (<strong>720 m</strong>) and
                  <strong>Kornjet</strong> (<strong>696 m</strong>), while to the west are <strong>Pogara</strong> (<strong>883 m</strong>) and <strong>Mikulja</strong> (<strong>1,022
                    m</strong>). It contains more than <strong>70 caves</strong>, only some of which
                  have been explored and are accessible. These caves, known as the <strong>Zlot Caves</strong>, include
                  <strong>Lazareva Cave</strong>, <strong>Vernjikica</strong>, <strong>Hajdučica</strong>, <strong>Manda’s Cave</strong>, <strong>Dubašnica Pit</strong>,
                  and others.
                  <br />
                  <br />
                  The area of <strong>Lazarev Canyon</strong> forms a closed ecosystem, which has allowed
                  the survival of rare and endemic plant species, such as the <strong>Serbian ramonda</strong>. The canyon
                  is also home to the strictly protected <strong>bearded vulture</strong>, while the <strong>Vernjikica Cave</strong> hosts a colony of as many as <strong>50,000 blind bats</strong> – the largest
                  of its kind in Europe.
                </p>
              </section>

              <img srcSet={`${lazarevKanjon44} 450w, ${lazarevKanjon4} `} alt="Lazarev Canyon 4" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Lazarev Canyon</strong>, through which the river of the same name flows, was once one of
                  the most important hideouts of the Homolje hajduks during the Turkish rule. Entering
                  the canyon meant safety for the hajduks, because the Turks never dared
                  to follow them there.
                  <br />
                  <br />
                  According to legend, after the battle of <strong>Maritsa in 1371</strong>, the horsemen of Prince
                  <strong>Lazar</strong> arrived in this region and stayed there for some time, which is why the
                  river and canyon were named after him. Later, hajduks fighting against the Turkish invaders
                  also found refuge in the canyon caves.
                </p>
              </section>

              <img srcSet={`${lazarevKanjon55} 450w, ${lazarevKanjon5} `} alt="Lazarev Canyon 5" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Lazarev Canyon</strong> ranks among the most complex and diverse floristic and phytogeographical
                  regions in Serbia. The flora of this canyon and <strong>Malinik</strong> includes <strong>720 taxa</strong>,
                  representing <strong>20%</strong> of Serbia’s flora and <strong>11%</strong> of the Balkans’ flora,
                  distributed across <strong>345 genera</strong> and <strong>71 families</strong>. However, the plant life of this area
                  is still not fully explored, so its richness is presumed to be even greater.
                  <br />
                  <br />
                  Today, <strong>Lazarev Canyon</strong> is home to rare plant species such as the <strong>Crimean pine</strong>,
                  <strong>relict yew</strong>, and <strong>Serbian ramonda</strong>, as well as numerous animals,
                  including <strong>wild goat</strong>, <strong>bearded vulture</strong>, <strong>forest owl</strong>, and <strong>gray falcon</strong>. Its
                  caves shelter many endemic arthropods and bats. Additionally,
                  the canyon hosts numerous nests of venomous snakes, primarily <strong>horned vipers</strong>, making
                  it one of the largest habitats of this species in Europe.
                </p>
              </section>

            </>
          )}

      </div >
    </>
  );
};

export default LazarevKanjon;