/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import gamzigrad1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/desktop/feliksRomulijana1.jpg";
import gamzigrad2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/desktop/feliksRomulijana2.jpg";
import gamzigrad3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/desktop/feliksRomulijana3.jpg";
import gamzigrad4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/desktop/feliksRomulijana9.jpg";
import gamzigrad5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/desktop/feliksRomulijana5.jpg";
import gamzigrad11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/mobile/feliksRomulijanaM1.jpg";
import gamzigrad22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/mobile/feliksRomulijanaM2.jpg";
import gamzigrad33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/mobile/feliksRomulijanaM3.jpg";
import gamzigrad44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/mobile/feliksRomulijanaM9.jpg";
import gamzigrad55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/FeliksRomulijana/mobile/feliksRomulijanaM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zajecarskiOkrugPathRoutes } from "./ZajecarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const FelixRomulijana = () => {
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

        <title>{switchLanguage === 'rs' ? "Feliks Romulijana – Veličanstvena Palata Kasne Antike | Serbia Wonders" : "Feliks Romulijana – A Magnificent Palace of the Late Antiquity | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Feliks Romulijana je jedna od najimpresivnijih građevina kasne antike, poznata po monumentalnim ostacima palate i moćnim zidinama, smeštena u današnjoj Srbiji."
            :
            "Felix Romuliana is one of the most impressive late antique buildings, famous for its monumental palace remains and powerful fortifications, located in present-day Serbia."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Feliks Romulijana, Gamzigrad, rimska palata, Galerije, arheološko nalazište, rimska istorija, Srbija, kasna antika"
            :
            "Felix Romuliana, Gamzigrad, Roman palace, Galerius, archaeological site, Roman history, Serbia, late antiquity"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/gamzigrad`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/gamzigrad"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/gamzigrad"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/gamzigrad"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zajecarskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${gamzigrad11} 450w, ${gamzigrad1} `} alt="Gamzigrad 1" loading="lazy" />

        <h2>Felix Romulijana - Gamzigrad</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Feliks Romulijana</strong> bila je jedna od najveličanstvenijih građevina kasne antike, a njen značaj i raskoš mogli bi se uporediti s najpoznatijim srednjovekovnim katedralama i impresivnim novovekovnim dvorcima. Ovo arheološko nalazište, čije ime nosi simboliku sreće (<em>Felix Romuliana</em>), očarava svojim monumentalnim ostacima palata i moćnih zidina. Dok istražujemo njegovu bogatu istoriju, postajemo svesni prolaznosti ljudskih carstava i religija – moći koje su nekada oblikovale svet, da bi zatim, u samo nekoliko decenija, iščezle bez traga.
                </p>
              </section>

              <img srcSet={`${gamzigrad22} 450w, ${gamzigrad2}`} alt="Felix Romulijana 1" loading="lazy" />

              <section lang="sr">
                <p>
                  Palata je podignuta krajem <strong>3.</strong> i početkom <strong>4. veka nove ere</strong>, u periodu <em>tetrarhije</em> – sistema vladavine u kome su Rimskim carstvom upravljala četvorica vladara: dvojica <em>avgusta</em> i dvojica <em>cezara</em>. Jedan od njih bio je i graditelj Feliks Romulijane, <strong>Gaj Valerije Maksimilijan Galerije</strong>, sin žene varvarskog porekla, koja je pobegla preko Dunava, i skromnog rimskog stočara. Zbog svog porekla, Galerija je tokom života pratio nadimak <em>Armentarius</em> (stočar). U znak poštovanja prema svojoj majci <strong>Romuli</strong>, koju je izuzetno cenio, palatu je nazvao po njoj – <strong>Feliks Romulijana</strong>.
                </p>
              </section>

              <img srcSet={`${gamzigrad33} 450w, ${gamzigrad3}`} alt="Gamzigrad 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Galerijev uspon do carskih visina bio je neverovatno brz, a njegova društvena pokretljivost nadmašuje čak i ono što danas nazivamo <em>„američkim snom“</em>. Njegov put ka moći trasirale su vojne pobede, koje su ga učinile poznatim i cenjenim kod moćnog <strong>Dioklecijana</strong>. Ne obazirući se na Galerijevo skromno poreklo – sin varvarke i rimskog stočara – Dioklecijan ga je posinio i oženio svojom ćerkom <strong>Valerijom</strong>.
                  <br /><br />
                  Kao vrhunski vojskovođa, Galerije je <strong>297. godine</strong> izvojevao značajnu pobedu nad <strong>Persijancima</strong>. U rodnoj <em>Priobalnoj Dakiji</em> započeo je izgradnju raskošne palate, želeći da ostavi trajni trag u svom zavičaju. Palatu je nazvao <strong>Romulijana</strong>, u čast svoje majke <strong>Romule</strong>, dok odrednica <em>Feliks</em>, koja se može prevesti kao „srećna“, u ovom kontekstu zapravo označava <strong>božansku zaštitu</strong>.
                  <br /><br />
                  Važno je istaći da je na području današnje Srbije rođeno čak <strong>16 rimskih imperatora</strong> – više nego u bilo kom delu nekadašnjeg Rimskog carstva, osim same Italije.
                </p>
              </section>

              <img srcSet={`${gamzigrad44} 450w, ${gamzigrad4}`} alt="Felix Romulijana 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Feliks Romulijana</strong> je dugo smatrana običnim rimskim utvrđenjem (<em>castrum</em>), sve dok arheološka istraživanja nisu otkrila da je reč o raskošnom kompleksu carske palate. Okružena je zidinama na tri nivoa, što je dugo zbunjivalo istraživače i podsticalo teoriju da je reč isključivo o vojnom utvrđenju – što je delovalo logično s obzirom na blizinu <em>Dunavskog limesa</em>.
                  <br /><br />
                  Međutim, unutar ovih moćnih zidina otkriveni su ostaci carske rezidencije i hramova posvećenih raznim paganskim božanstvima – ne samo rimskog panteona, već i bogova istočnjačkog porekla.
                </p>
              </section>

              <img srcSet={`${gamzigrad55} 450w, ${gamzigrad5}`} alt="Gamzigrad 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Galerije je bio ambiciozan i nesumnjivo kontroverzan čovek. Uživao je u životu, dobroj hrani, vinu i zabavama. Ipak, ostao je do kraja odan svojoj majci <strong>Romuli</strong> i poočimu tastu, moćnom <strong>Dioklecijanu</strong>. Njegov uzor bio je bog <strong>Dionis</strong>, zaštitnik vina, uživanja i prirode, čiji su likovi ovde sačuvani na mozaicima i u statuama.
                  <br /><br />
                  Galerijevo duboko poštovanje prema <strong>Dionisu</strong> može se protumačiti i kroz njegovu želju da sebe i svoju majku uzdigne na božanski nivo. Baš kao što je Dionis uzneo svoju majku <strong>Semelu</strong> na Olimp nakon svog trijumfa u Indiji, Galerije – <em>Novi Dionis</em> – želeo je da posle pobede nad <strong>Persijancima</strong> obezbedi sebi i svojoj majci besmrtnost.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en"> <p> <strong>Felix Romuliana</strong> was one of the most magnificent buildings of late antiquity, and its significance and splendor could be compared to the most famous medieval cathedrals and impressive modern castles. This archaeological site, whose name carries the symbolism of luck (<em>Felix Romuliana</em>), enchants with its monumental remains of palaces and mighty walls. As we explore its rich history, we become aware of the transience of human empires and religions – powers that once shaped the world, only to vanish without a trace within a few decades. </p> </section>
              <img srcSet={`${gamzigrad22} 450w, ${gamzigrad2}`} alt="Felix Romuliana 1" loading="lazy" />

              <section lang="en"> <p> The palace was built at the end of the <strong>3rd</strong> and beginning of the <strong>4th century AD</strong>, during the period of the <em>Tetrarchy</em> – a system of rule in which the Roman Empire was governed by four rulers: two <em>Augusti</em> and two <em>Caesars</em>. One of them was also the builder of Felix Romuliana, <strong>Gaius Valerius Maximinus Galerius</strong>, the son of a woman of barbarian origin who fled across the Danube, and a modest Roman shepherd. Due to his origin, Galerius carried the nickname <em>Armentarius</em> (shepherd) throughout his life. Out of respect for his mother <strong>Romula</strong>, whom he greatly esteemed, he named the palace after her – <strong>Felix Romuliana</strong>. </p> </section>
              <img srcSet={`${gamzigrad33} 450w, ${gamzigrad3}`} alt="Gamzigrad 2" loading="lazy" />

              <section lang="en"> <p> Galerius’s rise to imperial heights was incredibly swift, and his social mobility surpasses even what we today call the <em>“American Dream”</em>. His path to power was paved by military victories that made him known and respected by the powerful <strong>Diocletian</strong>. Regardless of Galerius’s humble origin – the son of a barbarian woman and a Roman shepherd – Diocletian adopted him as his son and married him to his daughter <strong>Valeria</strong>. <br /><br /> As a top military commander, Galerius won a significant victory over the <strong>Persians</strong> in <strong>297 AD</strong>. In his native <em>Coastal Dacia</em>, he began building a magnificent palace, wishing to leave a lasting mark in his homeland. He named the palace <strong>Romuliana</strong>, in honor of his mother <strong>Romula</strong>, while the designation <em>Felix</em>, which can be translated as “happy” or “fortunate,” in this context actually signifies <strong>divine protection</strong>. <br /><br /> It is important to note that <strong>16 Roman emperors</strong> were born in the territory of present-day Serbia – more than in any other part of the former Roman Empire except Italy itself. </p> </section>
              <img srcSet={`${gamzigrad44} 450w, ${gamzigrad4}`} alt="Felix Romuliana 2" loading="lazy" />

              <section lang="en"> <p> <strong>Felix Romuliana</strong> was long considered an ordinary Roman fortress (<em>castrum</em>), until archaeological research revealed that it was actually a luxurious complex of an imperial palace. It is surrounded by walls on three levels, which long confused researchers and fueled the theory that it was exclusively a military fortification – which seemed logical given its proximity to the <em>Danube limes</em>. <br /><br /> However, within these mighty walls, remains of the imperial residence and temples dedicated to various pagan deities were discovered – not only from the Roman pantheon, but also gods of Eastern origin. </p> </section>
              <img srcSet={`${gamzigrad55} 450w, ${gamzigrad5}`} alt="Gamzigrad 3" loading="lazy" />

              <section lang="en"> <p> Galerius was an ambitious and undoubtedly controversial man. He enjoyed life, good food, wine, and festivities. Nevertheless, he remained loyal until the end to his mother <strong>Romula</strong> and his stepfather and father-in-law, the powerful <strong>Diocletian</strong>. His role model was the god <strong>Dionysus</strong>, protector of wine, pleasure, and nature, whose images have been preserved here in mosaics and statues. <br /><br /> Galerius’s deep respect for <strong>Dionysus</strong> can also be interpreted through his desire to elevate himself and his mother to a divine level. Just as Dionysus took his mother <strong>Semele</strong> to Olympus after his triumph in India, Galerius – the <em>New Dionysus</em> – wished that after his victory over the <strong>Persians</strong>, he and his mother would gain immortality. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default FelixRomulijana;