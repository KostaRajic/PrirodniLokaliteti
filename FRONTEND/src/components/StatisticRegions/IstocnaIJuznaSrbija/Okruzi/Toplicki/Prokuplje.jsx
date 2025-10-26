/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import prokuplje1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/desktop/prokuplje1.jpg";
import prokuplje2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/desktop/prokuplje2.jpg";
import prokuplje4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/desktop/prokuplje4.jpg";
import prokuplje5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/desktop/prokuplje5.jpg";
import prokuplje6 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/desktop/prokuplje6.jpg";
import prokuplje7 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/desktop/prokuplje7.jpg";
import prokuplje8 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/desktop/prokuplje8.jpg";
import prokuplje9 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/desktop/prokuplje9.jpg";
import prokuplje11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/mobile/prokupljeM1.jpg";
import prokuplje22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/mobile/prokupljeM2.jpg";
import prokuplje44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/mobile/prokupljeM4.jpg";
import prokuplje55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/mobile/prokupljeM5.jpg";
import prokuplje66 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/mobile/prokupljeM6.jpg";
import prokuplje77 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/mobile/prokupljeM7.jpg";
import prokuplje88 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/mobile/prokupljeM8.jpg";
import prokuplje99 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/Prokuplje/mobile/prokupljeM9.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { toplickiOkurgPathRoutes } from "./ToplickiOkurgPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Prokuplje = () => {
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

        <title>{switchLanguage === 'rs' ? "Prokuplje – Kulturne i Prirodne Značajnosti | Serbia Wonders" : "Prokuplje – Cultural and Natural Highlights | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Prokuplje je grad bogate istorije i prirodnih lepota u Toplici, na jugu Srbije. Poznato po termalnim izvorima, kulturnim spomenicima i spomen-parku Junacima Gvozdenog puka."
            :
            "Prokuplje is a city rich in history and natural beauty in the Toplica region of southern Serbia. Known for thermal springs, cultural monuments, and the Iron Regiment Memorial Park."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Prokuplje, Toplica, termalni izvori, spomenik Junacima Gvozdenog puka, Narodni muzej Toplice, Crkva Svetog Prokopija, Astronomska opservatorija Vidojevica, južna Srbija, kulturna baština"
            :
            "Prokuplje, Toplica, thermal springs, Iron Regiment memorial, National Museum Toplica, Church of Saint Procopius, Vidojevica Astronomical Observatory, southern Serbia, cultural heritage"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/prokuplje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/prokuplje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/prokuplje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/prokuplje"
        />

      </Helmet >



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(toplickiOkurgPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${prokuplje11} 450w, ${prokuplje1} `} alt="Prokuplje 1" loading="lazy" />

        <h1>Prokuplje</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Prokuplje</strong> se nalazi u oblasti <em>Toplica</em> na jugu Srbije, u centralnom delu
                  Balkana. <strong>Reka Toplica</strong>, po kojoj je čitav kraj dobio ime, izvire ispod
                  samog <em>Pančićevog vrha</em> na Kopaoniku i teče na istok, u dužini od <strong>136 km</strong>,
                  a uliva se u <em>Južnu Moravu</em>, nedaleko od Niša.
                  <br /><br />
                  Plodno tlo, idealna nadmorska visina, <strong>rudno bogatstvo</strong>, bogatstvo
                  termalnih i mineralnih izvora, dolinske ravnice i brdovito zaleđe sa
                  mnogobrojnim mogućnostima eksploatacije, vrlo rano su privukli
                  <em>praistorijske zajednice</em> da na takvim izuzetno pogodnim mestima osnuju
                  svoja naselja, što je i potvrđeno arheološkim istraživanjima.
                </p>
              </section>

              <img srcSet={`${prokuplje22} 450w, ${prokuplje2} `} alt="Prokuplje 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Prokuplje</strong> je prema popisu iz <em>1878. godine</em> imalo <strong>1804 stanovnika</strong>, a prema
                  popisu iz <em>1879. godine</em> <strong>2560 stanovnika</strong>. Broj stanovnika u Prokuplju se
                  za samo jednu godinu povećao za <strong>42%</strong>. Krajem 19. veka, Prokuplje je bilo
                  središte <em>Topličkog okruga</em>, sa okružnom vladom i sudom za ceo okrug. U
                  njemu su bile kancelarije za Prokupčanske i Dobričke srezove.
                  <br /><br />
                  U 20. vek Prokuplje je ušlo kao malo naselje sa <strong>4000-5000 stanovnika</strong>. I dalje je bilo sedište okruga, ali bez mnogo povezanosti sa
                  ostatkom sveta. Nije imalo železnicu, a putevi su bili u lošem stanju. U
                  Prokuplje se sa juga ulazilo preko drvenog mosta na Toplici, a u Niš se
                  odlazilo i vraćalo prašnjavim putem preko Debelog brda. U gradu je bio
                  jedan lekar, dok bolnica nije postojala. Prvi lekar koji je lečio
                  Topličane nakon oslobođenja bio je <strong>dr Aleksa Savić</strong>, koji je kasnije
                  postao narodni poslanik i ministar zdravlja u Vladi Kraljevine Srba,
                  Hrvata i Slovenaca. Prokuplje je imalo jedan hotel <em>"Evropa"</em> i nekoliko
                  kafana. Pored okružnih, sreskih i upravnih sudskih vlasti, vojne
                  komande, osnovnih škola, stare crkve i pošte, u Prokuplju na početku 20.
                  veka nije bilo drugih značajnijih ustanova. U gradu su još uvek
                  postojale dve džamije i turski vodovod. Stanovništvo se uglavnom bavilo
                  poljoprivredom, a manjim delom zanatstvom. Gimnazija u Prokuplju
                  otvorena je <em>1908. godine</em>, a biblioteka <em>1909. godine</em>, dok je pošta počela
                  sa radom <em>1912. godine</em>.
                </p>
              </section>

              <img srcSet={`${prokuplje44} 450w, ${prokuplje4} `} alt="Prokuplje 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Centar Prokuplja je mesto bogato <strong>istorijskim i kulturnim spomenicima</strong>,
                  kao i prirodnim lepotama. Spomenik borcima iz Prvog i Drugog svetskog
                  rata podseća na značaj Prokuplja u tim periodima, dok <em>Gradski park</em> nudi
                  mirno okruženje za odmor i šetnje.
                  <br /><br />
                  U okolini Prokuplja, turisti mogu uživati u prirodnim lepotama, poput
                  Toplice, koja je poznata po <strong>termalnim izvorima</strong>. Kopaonik, iako nije u
                  samom gradu, pruža mogućnosti za skijanje i planinarenje. Takođe,
                  spomenik kosovskim junacima u okolini grada predstavlja značajno
                  istorijsko odredište.
                  <br /><br />
                  Prokuplje je savršeno za <em>šetnje kroz grad, planinarenje i biciklizam</em>, a
                  muzeji i kulturni centri nude posetiocima uvid u bogatu tradiciju ovog
                  kraja.
                </p>
              </section>

              <img srcSet={`${prokuplje55} 450w, ${prokuplje5} `} alt="Spomen park Junacima Gvozdenog puka u Prokuplju" loading="lazy" />

              <section lang="sr">
                <p>
                  Spomen park Junacima Gvozdenog puka nalazi se na mestu odakle su
                  toplički junaci 7. oktobra 1912. godine krenuli u rat i u večnu slavu.
                  <br /><br />
                  Tokom ratova koji su se vodili na Balkanu od <em>1912. do 1918. godine</em>,
                  Srbija je mobilisala više od stotinu pukova raznih rodova vojske, ali je
                  samo jedan od njih dobio počasni naziv – <strong>Gvozdeni puk</strong>. Ovaj prestižni
                  naziv dodeljen je drugom pešadijskom puku <em>Knjaz Mihajlo</em>, formiranom
                  oktobra 1912. godine u Prokuplju. Na tom mestu, od 12. oktobra 2018.
                  godine, nalazi se spomen-park.
                  <br /><br />
                  Spomen park je smešten pored železničke stanice, na površini od oko <strong>7000 m²</strong>. Park je u obliku Ordena Karađorđeve zvezde, jer su među nosiocima
                  tog tada najvećeg odlikovanja najbrojniji bili pripadnici Drugog
                  pešadijskog puka 1. poziva "<em>Knjaz Mihajlo</em>".
                </p>
              </section>

              <img srcSet={`${prokuplje66} 450w, ${prokuplje6} `} alt="Crkva Svetog Prokopija" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Crkva Svetog Prokopija</strong> nalazi se u današnjem Prokuplju, gradu koji je
                  dobio ime po njenom zaštitniku, Svetom Prokopiju. Ova crkva je, nakon
                  Petrove crkve, najstarija sačuvana crkva na tlu današnje Srbije. Veruje
                  se da je sagrađena krajem 9. ili početkom 10. veka, u vreme Samuilovog
                  carstva, kao trobrodna bazilika. Krajem 14. veka u crkvu su smeštene
                  mošti svetog Prokopija, kome je crkva od tada posvećena. Tokom narednih
                  vekova, crkva je obnavljana, dograđivana i prilagođavana, zbog čega je
                  izgubila svoj prvobitni oblik i danas je petobrodna bazilika.
                  <br /><br />
                  Krajem 19. veka u crkvu je donesen deo moštiju svetog Georgija, koje se
                  i danas čuvaju u Crkvi Svetog Prokopija zajedno sa moštima svetog
                  Prokopija. Tokom 2008. godine, u porti crkve su otkriveni ostaci
                  antičkih termi, koje su bile deo rimskog grada Hameuma, koji se nalazio
                  na mestu današnjeg Prokuplja.
                </p>
              </section>

              <div className="flexColumn" style={{ display: "flex", paddingBottom: "20px" }}>
                <img
                  srcSet={`${prokuplje77} 450w, ${prokuplje7} `}
                  alt="Narodni muzej Toplice 1"
                  className="fruskaGoraClassImg"
                  loading="lazy"
                />

                <section lang="sr">
                  <p className="fruskaGoraParagh">
                    Narodni muzej Toplice osnovan je na prvoj sednici Akcionog odbora koja
                    je održana 11. oktobra 1946. godine u kancelariji ONO – Prosvetno
                    odeljenje. Na januarskoj sednici Okružnog muzeja 1947. godine odlučeno
                    je da se Akcioni odbor proširi predstavnicima AFŽ-a i omladine
                    Prokuplja, koji su potom zajedno sproveli uspešnu akciju prikupljanja
                    fotografija, dokumenata i trofeja iz NOB-a. Na osnovu ovog materijala,
                    povodom Dana boraca 4. jula, u učionici današnje Osnovne škole
                    „<em>Nikodije Stojanović Tatko</em>“ organizovana je izložba posvećena
                    poginulim borcima. Ovaj materijal je do 1949. godine povremeno izlagan
                    tokom važnijih svetkovina.
                  </p>
                </section>
              </div>

              <div className="flexColumn" style={{ display: "flex" }}>
                <section lang="sr">
                  <p className="fruskaGoraParagh">
                    <strong>Gradski odbor opštine Prokuplje</strong> <em>1950. godine</em> doneo je odluku da se deo
                    zgrade na brdu <strong>Hisar</strong> (zadužbina dr <em>Aleksa Savić</em>) adaptira i da se tu
                    formira stalna muzejska postavka od prikupljenog materijala. Prvu
                    postavku činili su eksponati iz <strong>Drugog svetskog rata</strong>, uključujući
                    <em>fotografije</em>, <em>dokumente</em> i <em>naoružanje</em>. Pored ove postavke, formirane su
                    i <strong>arheološko-numizmatička zbirka</strong>, kao i zbirka raznovrsne <em>etnološke
                      građe</em> koja je obuhvatila delove <em>nošnje</em>, <em>drveno</em> i <em>keramičko pokućstvo</em>.
                  </p>
                </section>

                <img
                  srcSet={`${prokuplje88} 450w, ${prokuplje8} `}
                  alt="Narodni muzej Toplice 2"
                  className="fruskaGoraClassImg"
                  loading="lazy"
                />
              </div>

              <section lang="sr">
                <p>
                  Na <strong>Hisaru</strong> je Muzej bio nekih <em>desetak godina</em>, ali zbog <strong>nedostatka prostora</strong>, <strong>nedovoljne bezbednosti objekta</strong> i njegove <strong>udaljenosti od grada</strong>,
                  <em>1962. godine</em> <strong>Sreski odbor</strong> odlučuje da se Muzej premesti u <strong>centar grada</strong>,
                  u jednu od <em>najstarijih zgrada</em>, bivšu gimnaziju i zgradu <strong>Narodne biblioteke</strong>.
                  <br /><br />
                  Zgrada je adaptirana i od tada je <strong>Narodni muzej Toplice</strong> u centru grada,
                  gde se nalazi i danas. Muzej ima stalnu <strong>arheološku</strong>, <strong>etnološku</strong> i
                  <strong>istorijsku postavku</strong>, kao i <em>bibliotečku građu</em> od velikog značaja za
                  istoriju ovog kraja.
                </p>
              </section>

              <img srcSet={`${prokuplje99} 450w, ${prokuplje9} `} alt="Astronomska opservatorija Vidojevica" />


              <section lang="sr">
                <p>
                  <strong>Astronomska opservatorija Vidojevica</strong> nalazi se na istoimenoj planini
                  <em>Vidojevica</em>, blizu <strong>Prokuplja</strong>, na nadmorskoj visini od <em>1155 metara</em>. Od
                  <strong>2005. godine</strong> do danas izgrađeno je <em>pet objekata</em>, uključujući objekat za
                  smeštaj osoblja i <strong>četiri posmatračka paviljona</strong>. Završeni su
                  infrastrukturni radovi, a uvedena je <em>bežična internet veza</em>. Objekat za
                  smeštaj ima kapacitet za boravak do <strong>10 osoba</strong>, a u njemu se nalazi i
                  <em>velika sala za održavanje skupova</em>. Ovaj objekat je u potpunosti
                  opremljen za boravak astronoma i drugih učesnika. Na stanici stalno
                  boravi tehničko osoblje koje se brine o održavanju opreme u <strong>besprekornom
                    stanju</strong>, a internet komunikacija sa teleskopima je <em>nesmetana</em>. Posmatranja
                  na <strong>ASV</strong> se obavljaju sa pauzama od <em>7 dana tokom punog Meseca</em>, uz plan da
                  se, obezbeđivanjem većeg broja tehničkih operatera, ovaj period proširi
                  na <strong>kontinuirana posmatranja</strong>.
                  <br />
                  <br />
                  <strong>Vidojevica</strong> je jedna od retkih planina u Srbiji sa <em>tamnim nebom</em>, na kojoj
                  je <strong>svetlosno zagađenje minimalno</strong>. Prikupljeni astronometrološki podaci
                  takođe ukazuju da je Vidojevica veoma pogodna za <strong>astronomska
                    posmatranja</strong>. Na <strong>ASV</strong> smo postavili meteorološku stanicu sa <em>all-sky
                      kamerom</em>. Ova oprema je automatizovana i kontinuirano prikuplja
                  astronometrološke podatke (<em>temperatura</em>, <em>vlažnost vazduha</em>, <em>prozirnost
                    atmosfere</em>, itd.) sa ove lokacije. Dati podaci pomoći će stručnjacima sa
                  <strong>Opservatorije</strong> pri odabiru drugih teleskopa, prateće opreme i
                  instrumenata.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en"> <p> <strong>Prokuplje</strong> is located in the <em>Toplica</em> region in southern Serbia, in the central part of the Balkans. The <strong>Toplica River</strong>, after which the entire region is named, springs below the <em>Pančić's Peak</em> on Kopaonik and flows eastward for a length of <strong>136 km</strong>, emptying into the <em>South Morava</em> River, near Niš. <br /><br /> Fertile soil, ideal altitude, <strong>mineral wealth</strong>, abundant thermal and mineral springs, valley plains, and hilly hinterlands with numerous exploitation opportunities, attracted <em>prehistoric communities</em> very early to establish settlements in such exceptionally favorable locations, as confirmed by archaeological research. </p> </section>
              <img srcSet={`${prokuplje22} 450w, ${prokuplje2} `} alt="Prokuplje 2" loading="lazy" />

              <section lang="en"> <p> According to the census of <em>1878</em>, <strong>Prokuplje</strong> had <strong>1,804 inhabitants</strong>, and according to the census of <em>1879</em>, it had <strong>2,560 inhabitants</strong>. The population of Prokuplje increased by <strong>42%</strong> in just one year. By the end of the 19th century, Prokuplje was the center of the <em>Toplica district</em>, with district government and court for the entire district. It housed offices for the Prokuplje and Dobrice sub-districts. <br /><br /> In the 20th century, Prokuplje entered as a small settlement with <strong>4,000-5,000 inhabitants</strong>. It remained the district center but had limited connections with the rest of the world. There was no railway, and the roads were in poor condition. Entry into Prokuplje from the south was via a wooden bridge over the Toplica River, and travel to Niš was along a dusty road over Debelo Brdo. The town had one doctor, but no hospital. The first doctor to treat Toplica residents after liberation was <strong>Dr. Aleksa Savić</strong>, who later became a member of parliament and Minister of Health in the government of the Kingdom of Serbs, Croats, and Slovenes. Prokuplje had one hotel, <em>"Evropa"</em>, and several taverns. Besides district, sub-district, and administrative courts, military commands, primary schools, the old church, and the post office, there were no other significant institutions in Prokuplje at the beginning of the 20th century. Two mosques and a Turkish water supply system still existed. The population mostly engaged in agriculture, with a smaller part in crafts. The Prokuplje Gymnasium opened in <em>1908</em>, the library in <em>1909</em>, and the post office began operating in <em>1912</em>. </p> </section>
              <img srcSet={`${prokuplje44} 450w, ${prokuplje4} `} alt="Prokuplje 3" loading="lazy" />

              <section lang="en"> <p> The center of Prokuplje is rich in <strong>historical and cultural monuments</strong>, as well as natural beauties. The monument to the fighters of the First and Second World Wars reminds of Prokuplje's significance during those periods, while the <em>City Park</em> offers a peaceful environment for rest and walks. <br /><br /> In the vicinity of Prokuplje, tourists can enjoy natural beauties such as the Toplica River, known for its <strong>thermal springs</strong>. Although Kopaonik is not in the city itself, it offers opportunities for skiing and hiking. Also, the monument to the Kosovo heroes near the city is an important historical site. <br /><br /> Prokuplje is perfect for <em>city walks, hiking, and cycling</em>, and museums and cultural centers provide visitors with insight into the rich tradition of this region. </p> </section>
              <img srcSet={`${prokuplje55} 450w, ${prokuplje5} `} alt="Memorial Park to the Heroes of the Iron Regiment in Prokuplje" loading="lazy" />

              <section lang="en"> <p> The Memorial Park to the Heroes of the Iron Regiment is located at the place from where the Toplica heroes set off for war and eternal glory on October 7, 1912. <br /><br /> During the Balkan wars from <em>1912 to 1918</em>, Serbia mobilized more than one hundred regiments of various military branches, but only one of them received an honorary title – the <strong>Iron Regiment</strong>. This prestigious title was awarded to the Second Infantry Regiment <em>Knjaz Mihajlo</em>, formed in October 1912 in Prokuplje. Since October 12, 2018, a memorial park stands at that site. <br /><br /> The memorial park is situated near the railway station, covering an area of about <strong>7,000 m²</strong>. The park is shaped like the Order of the Karađorđe Star because among the recipients of this highest decoration at the time, the majority were members of the Second Infantry Regiment of the first call, "<em>Knjaz Mihajlo</em>". </p> </section>
              <img srcSet={`${prokuplje66} 450w, ${prokuplje6} `} alt="Church of Saint Procopius" loading="lazy" />

              <section lang="en"> <p> The <strong>Church of Saint Procopius</strong> is located in present-day Prokuplje, the city named after its patron saint, Saint Procopius. This church is, after the Church of St. Peter, the oldest preserved church on the territory of present-day Serbia. It is believed to have been built at the end of the 9th or beginning of the 10th century, during the time of the Samuil Empire, as a three-nave basilica. At the end of the 14th century, the relics of Saint Procopius were placed in the church, to whom it has been dedicated since then. Over the following centuries, the church was renovated, expanded, and adapted, which caused it to lose its original shape and today it is a five-nave basilica. <br /><br /> At the end of the 19th century, part of the relics of Saint George was brought into the church, and they are still kept in the Church of Saint Procopius alongside the relics of Saint Procopius. In 2008, remains of ancient thermal baths were discovered in the churchyard; these were part of the Roman city Hameum, which was located where Prokuplje stands today. </p> </section> <div className="flexColumn" style={{ display: "flex", paddingBottom: "20px" }}> <img srcSet={`${prokuplje77} 450w, ${prokuplje7} `} alt="Toplica National Museum 1" className="fruskaGoraClassImg" loading="lazy" /> <section lang="en"> <p className="fruskaGoraParagh"> The Toplica National Museum was founded at the first meeting of the Action Committee held on October 11, 1946, in the office of the Municipal National Committee – Education Department. At the January session of the District Museum in 1947, it was decided to expand the Action Committee with representatives of the AFŽ (Women's Antifascist Front) and the youth of Prokuplje, who then successfully carried out a campaign to collect photographs, documents, and trophies from the National Liberation War (NOB). Based on this material, an exhibition dedicated to the fallen fighters was organized on July 4, the Day of Fighters, in the classroom of the current Primary School "<em>Nikodije Stojanović Tatko</em>". This material was periodically exhibited during important celebrations until 1949. </p> </section> </div> <div className="flexColumn" style={{ display: "flex" }}> <section lang="en"> <p className="fruskaGoraParagh"> In 1950, the City Board of the Prokuplje municipality decided to adapt part of the building on Hisar Hill (a foundation of Dr. Aleksa Savić) and form a permanent museum exhibit from the collected material. The first exhibition consisted of items from the Second World War, including photographs, documents, and weapons. In addition to this exhibition, an archaeological-numismatic collection and a collection of various ethnological items were formed, which included parts of traditional costumes and wooden and ceramic household items. </p> </section>
                <img
                  srcSet={`${prokuplje88} 450w, ${prokuplje8} `}
                  alt="Toplica National Museum 2"
                  className="fruskaGoraClassImg"
                  loading="lazy"
                />

              </div> <section lang="en"> <p> The museum was located on Hisar for about ten years, but due to lack of space, insufficient security of the building, and its distance from the city, in 1962 the District Committee decided to move the museum to the city center, into one of the oldest buildings, the former gymnasium and building of the National Library. <br /><br /> The building was adapted, and since then, the Toplica National Museum has been located in the city center, where it remains today. The museum has a permanent archaeological, ethnological, and historical exhibition, as well as library material of great importance for the history of this region. </p> </section>

              <div className="flexColumn" style={{ display: "flex" }}> <section lang="en"> <p className="fruskaGoraParagh"> The <strong>City Committee of the Municipality of Prokuplje</strong> in <em>1950</em> decided to adapt part of the building on the <strong>Hisar</strong> hill (a benefaction of Dr. <em>Aleksa Savić</em>) and establish there a permanent museum exhibition from the collected materials. The first exhibition consisted of exhibits from the <strong>Second World War</strong>, including <em>photographs</em>, <em>documents</em>, and <em>weaponry</em>. Besides this exhibition, an <strong>archaeological-numismatic collection</strong> was formed, as well as a collection of diverse <em>ethnological artifacts</em> including parts of <em>traditional costumes</em>, <em>wooden</em> and <em>ceramic household items</em>. </p> </section>
                <img
                  srcSet={`${prokuplje88} 450w, ${prokuplje8} `}
                  alt="Narodni muzej Toplice 2"
                  className="fruskaGoraClassImg"
                  loading="lazy"
                />

              </div> <section lang="en"> <p> The Museum was located on <strong>Hisar</strong> for about <em>ten years</em>, but due to <strong>lack of space</strong>, <strong>insufficient safety of the building</strong>, and its <strong>distance from the city</strong>, the <em>District Committee</em> decided in <em>1962</em> to move the Museum to the <strong>city center</strong>, into one of the <em>oldest buildings</em>, the former gymnasium and the building of the <strong>National Library</strong>. <br /><br /> The building was adapted, and since then the <strong>Toplica National Museum</strong> has been located in the city center, where it remains today. The museum has permanent <strong>archaeological</strong>, <strong>ethnological</strong>, and <strong>historical exhibitions</strong>, as well as a collection of <em>library materials</em> of great importance for the history of this region. </p> </section>
              <img srcSet={`${prokuplje99} 450w, ${prokuplje9} `} alt="Vidojevica Astronomical Observatory" />

              <section lang="en"> <p> The <strong>Vidojevica Astronomical Observatory</strong> is located on the mountain of the same name, <em>Vidojevica</em>, near <strong>Prokuplje</strong>, at an altitude of <em>1155 meters</em>. From <strong>2005</strong> until today, <em>five buildings</em> have been constructed, including accommodation for staff and <strong>four observation pavilions</strong>. Infrastructure works have been completed, and <em>wireless internet connection</em> has been introduced. The accommodation building can host up to <strong>10 people</strong> and includes a <em>large hall for meetings</em>. This facility is fully equipped for astronomers and other participants. Technical staff permanently resides at the observatory, maintaining the equipment in <strong>perfect condition</strong>, and internet communication with the telescopes is <em>uninterrupted</em>. Observations at the <strong>Vidojevica Observatory</strong> are carried out with breaks of <em>7 days during the full moon</em>, with plans to extend this period to <strong>continuous observations</strong> by securing more technical operators. <br /><br /> <strong>Vidojevica</strong> is one of the few mountains in Serbia with a <em>dark sky</em>, where <strong>light pollution is minimal</strong>. Collected astronomical data also indicate that Vidojevica is very suitable for <strong>astronomical observations</strong>. At the <strong>Observatory</strong>, we installed a meteorological station with an <em>all-sky camera</em>. This equipment is automated and continuously collects astronomical weather data (<em>temperature</em>, <em>air humidity</em>, <em>atmospheric transparency</em>, etc.) from this location. These data will assist experts from the <strong>Observatory</strong> in selecting other telescopes, supporting equipment, and instruments. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default Prokuplje;