/* eslint-disable react/no-unknown-property */
import uzice1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/desktop/uzice1.jpg";
import uzice2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/desktop/uzice2.jpg";
import uzice3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/desktop/uzice3.jpg";
import uzice4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/desktop/uzice4.jpg";
import uzice5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/desktop/uzice5.jpg";
import uzice6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/desktop/uzice6.jpg";
import uzice7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/desktop/uzice7.jpg";
import uzice8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/desktop/uzice8.jpg";
import uzice9 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/desktop/uzice9.jpg";
import uzice10 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/desktop/uzice10.jpg";
import uzice11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/desktop/uzice11.jpg";
import uziceM11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/mobile/Muzice1.jpg";
import uzice22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/mobile/Muzice2.jpg";
import uzice33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/mobile/Muzice3.jpg";
import uzice44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/mobile/Muzice4.jpg";
import uzice55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/mobile/Muzice5.jpg";
import uzice66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/mobile/Muzice6.jpg";
import uzice77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/mobile/Muzice7.jpg";
import uzice88 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/mobile/Muzice8.jpg";
import uzice99 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/mobile/Muzice9.jpg";
import uzice100 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/mobile/Muzice10.jpg";
import uzice111 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Uzice/mobile/Muzice11.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Uzice = () => {
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
            ? 'Užice | Istorijski grad na reci Đetinji'
            : 'Užice | Historic City on the Đetinja River'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Užice je grad bogate istorije u zapadnoj Srbiji, poznat po tvrđavi Stari grad, Užičkoj republici, Narodnom muzeju, Terzića avliji i prirodnim lepotama okoline.'
              : 'Užice is a city in western Serbia with a rich history, known for its Old Fortress, Užice Republic, National Museum, Terzić’s Yard, and surrounding natural beauty.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Užice, Đetinja, Užički grad, Stari grad Užice, Užička republika, Narodni muzej Užica, Terzića avlija, Zlakusa, seoski turizam, komplet lepinja, istorija Užica, turističke destinacije Srbija, zapadna Srbija'
              : 'Uzice, Đetinja river, Old Fortress Uzice, Uzice Republic, National Museum Uzice, Terzic Yard, Zlakusa, rural tourism, Serbian cuisine, western Serbia, historical cities, Serbia travel'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/uzice`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/uzice"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/uzice"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/uzice"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${uziceM11} 450w, ${uzice1} `} alt="Užice 1" loading="lazy" />

        <h1 style={{ color: "white" }}>Užice</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Užice</strong> je grad koji se nalazi u zapadnoj Srbiji, u blizini reke
                  <em>Đetinje</em>, okružen prelepim brdovitim pejzažima. Grad ima bogatu istoriju i
                  kulturu, sa značajnim znamenitostima poput <strong>Starog grada</strong>, srednjovekovne
                  tvrđave koja svedoči o njegovom strateškom značaju kroz vekove. Užice je
                  takođe poznato po svojoj ulozi u <strong>Narodnooslobodilačkoj borbi</strong> tokom
                  Drugog svetskog rata, kada je bilo centar <em>Užičke republike</em>, kratkotrajne
                  slobodne teritorije. Danas se u gradu može posetiti <strong>Muzej užičkog kraja</strong>,
                  koji čuva istorijske i kulturne artefakte iz tog perioda. Priroda u
                  okolini Užica pruža brojne mogućnosti za rekreaciju i avanturu.
                  <em>Nacionalni park Tara</em>, reke, planine i jezera čine ovu oblast atraktivnom
                  za ljubitelje prirode i sportskih aktivnosti poput planinarenja,
                  splavarenja i biciklizma. Užice je poznato i po svojoj tradicionalnoj
                  kuhinji, gde se posebno ističu specijaliteti poput <strong>komplet lepinje</strong>.
                  Grad je povezan železnicom i drumskim saobraćajem, što ga čini lako
                  dostupnim, dok njegov šarm i atmosfera privlače sve veći broj turista.
                </p>
              </section>


              <img srcSet={`${uzice22} 450w, ${uzice2} `} alt="Užice 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Ostaci <strong>Užičkog grada</strong> nalaze se na stenovitom grebenu koji gotovo u
                  potpunosti pregrađuje korito reke <em>Đetinje</em> na mestu gde ona izlazi iz
                  klisure i ulazi u mirnu kotlinu. Utvrđenje je podignuto na visokom i
                  teško pristupačnom grebenu, opasanom rekom <em>Đetinjom</em> sa tri strane.
                  Strme litice, visoke i do 50 metara, prirodno štite grad sa zapadne, južne i
                  istočne strane, pružajući snažnu odbrambenu prednost. Prvi pouzdani
                  zapisi o užičkoj tvrđavi datiraju iz sredine 14. veka. U tom periodu,
                  tvrđava je bila posed vlastelinske porodice <strong>Vojinović</strong>, a između 1366. i
                  1373. godine pripadala je <strong>Nikoli Altomanoviću</strong>. Dubrovački istoričar
                  Mavro Orbini beleži Užice u kontekstu sukoba kneza Lazara i kralja
                  Tvrtka protiv Nikole Altomanovića. U tom sukobu, leta 1373. godine,
                  Altomanović je zarobljen i oslepljen u užičkoj tvrđavi, što je označilo
                  kraj njegove vlasti.
                </p>
              </section>

              <img srcSet={`${uzice33} 450w, ${uzice3} `} alt="Užice 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Krajem XVII i tokom XVIII veka, Užice je, usled austro-turskih ratova,
                  postalo značajna vojna baza. U vreme <strong>Prvog srpskog ustanka</strong>, grad je
                  stekao ključni strateški značaj. Srpski ustanici su 1805. godine
                  oslobodili užičku varoš, dok je tvrđava oslobođena dve godine kasnije,
                  1807. Užice je tada postalo jedan od važnih ustaničkih centara. Međutim,
                  posle gušenja ustanka 1813. godine, grad je ponovo pao pod tursku vlast,
                  sve do konačnog oslobođenja 1862. godine. Nakon iseljavanja Turaka, prvi
                  popis stanovništva pokazao je da Užice ima 3.163 stanovnika. Donošenjem
                  urbanističkog plana 1871. godine, započinje intenzivan razvoj grada.
                  Trgovina i zanatstvo doživljavaju procvat, a formiraju se i prvi esnafi,
                  čime Užice postaje sve značajnije ekonomsko središte.
                </p>
              </section>

              <img srcSet={`${uzice111} 450w, ${uzice11} `} alt="Užice 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Trećeg maja 1899. godine, kralj <strong>Aleksandar Obrenović</strong> postavio je kamen
                  temeljac za izgradnju hidrocentrale na <em>Đetinji</em>, koja je Užicu donela
                  električno osvetljenje 2. avgusta 1900. godine. Industrijski razvoj
                  nastavljen je otvaranjem Tkačke radionice 1901. godine. Ovaj ekonomski
                  napredak omogućio je osnivanje bankarskih ustanova poput <strong>Građanske
                    štedionice</strong> (1884), <strong>Trgovačke banke</strong> (1908) i <strong>Užičke kreditne
                      zadruge</strong> (1911). Telegrafska služba uvedena je 1860. godine, a telefonska 1904,
                  čime je Užice postajalo sve moderniji grad.
                </p>
              </section>

              <img srcSet={`${uzice44} 450w, ${uzice4} `} alt="Narodni muzej u Užicu" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Narodni muzej Užica</strong> predstavlja jedinstven spomenički kompleks, smešten
                  u dve zgrade koje su izgrađene neposredno pre Drugog svetskog rata za
                  potrebe Narodne banke. Tokom jeseni 1941. godine, ove zgrade imale su
                  istorijsku ulogu kao sedište Vrhovnog štaba NOPOJ i Centralnog komiteta
                  KPJ. U njihovim podzemnim prostorijama, poznatim kao <em>Trezor</em>, nalazilo se
                  civilno sklonište, kao i partizanska fabrika za proizvodnju oružja i
                  municije. Muzej je zvanično osnovan 1946. godine, s primarnim ciljem
                  prikupljanja i proučavanja materijala koji osvetljava kulturnu i
                  političku istoriju Užica i njegovog šireg područja. Danas muzej poseduje
                  bogate zbirke i depoe sa približno 70.000 muzejskih eksponata. Zgrade
                  Narodnog muzeja zaštićene su kao nepokretno kulturno dobro od izuzetnog
                  značaja, čime dodatno svedoče o svom istorijskom i kulturnom značaju.
                </p>
              </section>

              <img srcSet={`${uzice55} 450w, ${uzice5} `} alt="Etno park Terzića avlija" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Etno park Terzića avlija</strong>, kao seosko turističko domaćinstvo iz okoline
                  Užica, smešten je u selu <em>Zlakusa</em>, na 185 kilometara od Beograda.
                  Predstavlja jedinstveni spoj muzeja na otvorenom i zatvorenom prostoru.
                  Ovo domaćinstvo datira s početka 20. veka i oslikava tipično seosko
                  domaćinstvo užičkog kraja, sa starim kućama i pratećim objektima poput
                  salaša, šupe, mlekarice, bunara i kačare. Etno park je zvanično počeo s
                  radom 2005. godine i godišnje privuče oko 6.000 posetilaca, kako domaćih
                  tako i stranih. U okviru parka nalazi se i sedište <strong>Etno udruženja
                    Zavičaj</strong>, osnovanog s ciljem očuvanja kulture, tradicije, običaja i
                  starih zanata, kao i razvoja sela kroz unapređenje seoskog turizma i
                  zaštitu životne sredine. Terzića avlija je prepoznata kao pionir seoskog
                  turizma u Zlakusi i užičkom kraju, ali i sinonim za seoski turizam
                  Zlatiborskog regiona. Često je posećuju studijske grupe koje se bave
                  razvojem seoskog turizma u Srbiji i inostranstvu, prepoznajući je kao
                  primer dobre prakse.
                </p>
              </section>

              <img srcSet={`${uzice66} 450w, ${uzice6} `} alt="Crkva Svetog Apostola u Užicu" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Crkva Svetog Apostola i Evanđeliste Marka</strong>, poznata kao <em>Crkva sv. Marka</em>,
                  nalazi se u Užicu, na adresi <strong>Nikole Pašića 41</strong>, i predstavlja kulturno
                  dobro od velikog značaja. Prva crkva na ovom mestu, posvećena Svetom
                  Marku, izgrađena je 1721. godine, u periodu kada su Užicem vladali
                  Turci. Nalazila se u delu grada poznatom kao <em>Stara Varoš</em> ili <em>Carina</em>.
                  Tokom turske vladavine, crkva je spaljena, a na njenim temeljima
                  podignuta je nova bogomolja 1828. godine, za vreme kneza <strong>Miloša Obrenovića</strong>.
                  Crkva sv. Marka čuva bogatu zbirku ikona koje svedoče o
                  njenoj dugoj i značajnoj istoriji. Među njima se posebno izdvajaju
                  italokritska dela iz 16. veka, poput prefinjene predstave <em>Hrista Pantokratora</em> na zlatnoj pozadini.
                  Jednako vredna je i ikona <em>Bogorodice sa Hristom i malim Svetim Jovanom</em>, koja se pripisuje radionici iz
                  primorskih krajeva. Ova umetnička dela ističu značaj crkve u verskom i
                  kulturnom nasleđu Užica.
                </p>
              </section>

              <img srcSet={`${uzice77} 450w, ${uzice7} `} alt="Potpećka pećina" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Potpećka pećina</strong> se nalazi u selu <em>Potpeć</em>, 14 kilometara od Užica, na
                  severnim padinama <em>Drežničke gradine</em>, koja se uzdiže na 932 metra
                  nadmorske visine. Ulaz u ovu pećinu predstavlja jedno od
                  najimpresivnijih prirodnih remek-dela u Srbiji. Ogroman portal u obliku
                  potkovice, visok 50 metara (od dna korita povremenog toka do svoda), i
                  širok 12 metara pri dnu, odnosno 22 metra pri vrhu, nosi titulu najvišeg
                  pećinskog ulaza u zemlji. Ovaj ulaz izdubljen je u krečnjačkoj litici,
                  čiji vertikalni deo doseže visinu od 72 metra. Posetiocima je dostupno
                  555 metara uređene pećinske staze, koja uključuje silaznu putanju sa
                  više od 700 stepenika. Potpećka pećina pripada izvorskom tipu pećina.
                  Nastala je radom ponornica koje nestaju u <em>Drežničkoj dolini</em>, a nakon
                  podzemnog toka dugog 4 do 5 kilometara (u pravoj liniji), izbijaju na
                  površinu kroz pećinu ili vrelo ispred nje, stvarajući pećinsku reku
                  poznatu kao <strong>Petnica</strong>.
                </p>
              </section>

              <img srcSet={`${uzice88} 450w, ${uzice8} `} alt="Staparska banja" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Staparska banja</strong>, sa nekoliko termalnih izvora, smeštena je u <em>Staparskoj
                    klisuri reke Đetinje</em>, na području sela <em>Stapari</em>. Ova banja predstavlja
                  jedan od najstarijih termalnih lokaliteta zapadne Srbije, gde su
                  pronađeni ostaci kupališta koji potiču iz praistorijskog perioda.
                  Termalni izvori su korišćeni još u doba antike i Rimljana, koji su u
                  blizini imali manja naselja. Lekovite vode Staparske banje služile su
                  lokalnom stanovništvu i tokom srednjeg veka, što potvrđuju neki obližnji
                  toponimi, kao i u periodu između dva svetska rata. Staparska banja je
                  poznata po svojim lekovitim svojstvima, naročito u lečenju kožnih
                  bolesti i reumatskih oboljenja.
                </p>
              </section>

              <img srcSet={`${uzice99} 450w, ${uzice9} `} alt="Klisura reke Đetinje" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Klisura reke Đetinje</strong> nalazi se u zapadnoj Srbiji, zapadno od Užica, u
                  brdsko-planinskom području poznatom kao <em>Stari Vlah</em>. Prostire se od
                  <em>Bioštanske Banje</em> do Užica, ukupne dužine od oko 15 kilometara, sa
                  pravcem pružanja zapad-istok. Njene strme strane dosežu visinu do 400
                  metara iznad reke. Ova klisura predstavlja kompozitnu, poligenetsku
                  dolinu koja na pojedinim mestima poprima karakteristike kanjona. Na
                  severu se nastavlja na <em>Kremansku kotlinu</em>, gde se na nadmorskoj visini od
                  712 metara, spajanjem <em>Konjske reke</em>, <em>Bratišne reke</em>, <em>Užičkog potoka</em> i
                  <em>Tomića potoka</em>, formira reka <em>Đetinja</em>. Klisura se završava kod užičkog
                  <strong>Starog grada</strong>, gde se otvara u prostraniju kotlinu u kojoj je smešten
                  grad Užice.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en">
                <p> <strong>Užice</strong> is a city located in western Serbia, near the river <em>Đetinja</em>, surrounded by beautiful hilly landscapes. The city has a rich history and culture, with significant landmarks such as the <strong>Old Town</strong>, a medieval fortress that testifies to its strategic importance through the centuries. Užice is also known for its role in the <strong>National Liberation Struggle</strong> during World War II, when it was the center of the <em>Užice Republic</em>, a short-lived free territory. Today, visitors can explore the <strong>Museum of the Užice Region</strong>, which preserves historical and cultural artifacts from that period. The nature around Užice offers numerous opportunities for recreation and adventure. <em>Tara National Park</em>, rivers, mountains, and lakes make this area attractive to nature lovers and enthusiasts of outdoor activities such as hiking, rafting, and cycling. Užice is also famous for its traditional cuisine, especially specialties like the <strong>komplet lepinja</strong>. The city is connected by railway and road networks, making it easily accessible, while its charm and atmosphere attract an increasing number of tourists. </p>
              </section>

              <img srcSet={`${uzice22} 450w, ${uzice2} `} alt="Užice 2" loading="lazy" />

              <section lang="en">
                <p> The remains of the <strong>Užice Fortress</strong> are located on a rocky ridge that nearly completely blocks the riverbed of the <em>Đetinja</em> River at the point where it exits the gorge and enters a calm valley. The fortress was built on a high and hard-to-reach ridge, surrounded by the <em>Đetinja</em> River on three sides. Steep cliffs, up to 50 meters high, naturally protect the town from the west, south, and east, providing a strong defensive advantage. The first reliable records of the Užice fortress date back to the mid-14th century. During this period, the fortress was owned by the noble family <strong>Vojinović</strong>, and between 1366 and 1373 it belonged to <strong>Nikola Altomanović</strong>. Dubrovnik historian Mavro Orbini mentions Užice in the context of the conflict between Prince Lazar and King Tvrtko against Nikola Altomanović. In that conflict, in the summer of 1373, Altomanović was captured and blinded in the Užice fortress, marking the end of his rule. </p>
              </section>

              <img srcSet={`${uzice33} 450w, ${uzice3} `} alt="Užice 3" loading="lazy" />

              <section lang="en">
                <p> At the end of the 17th and during the 18th century, Užice became an important military base due to the Austro-Turkish wars. During the <strong>First Serbian Uprising</strong>, the city gained key strategic importance. Serbian rebels liberated the Užice town in 1805, while the fortress was freed two years later, in 1807. Užice then became one of the important centers of the uprising. However, after the uprising was suppressed in 1813, the city fell back under Turkish rule, until its final liberation in 1862. After the Turks left, the first population census showed that Užice had 3,163 inhabitants. With the adoption of an urban plan in 1871, intensive development of the city began. Trade and crafts flourished, and the first guilds were formed, making Užice an increasingly important economic center. </p>
              </section>

              <img srcSet={`${uzice111} 450w, ${uzice11} `} alt="Užice 4" loading="lazy" />

              <section lang="en">
                <p> On May 3, 1899, King <strong>Alexander Obrenović</strong> laid the foundation stone for the construction of a hydroelectric power plant on the <em>Đetinja</em> River, which brought electric lighting to Užice on August 2, 1900. Industrial development continued with the opening of the Textile Workshop in 1901. This economic progress enabled the founding of banking institutions such as the <strong>Civil Savings Bank</strong> (1884), the <strong>Commercial Bank</strong> (1908), and the <strong>Užice Credit Cooperative</strong> (1911). The telegraph service was introduced in 1860, and the telephone service in 1904, making Užice an increasingly modern city. </p>
              </section>

              <img srcSet={`${uzice44} 450w, ${uzice4} `} alt="National Museum in Užice" loading="lazy" />

              <section lang="en">
                <p> The <strong>National Museum of Užice</strong> represents a unique monument complex, housed in two buildings constructed shortly before World War II for the needs of the National Bank. In the autumn of 1941, these buildings played a historic role as the headquarters of the Supreme Staff of NOPOJ and the Central Committee of the Communist Party of Yugoslavia. In their underground premises, known as the <em>Treasury</em>, there was a civilian shelter as well as a partisan factory for the production of weapons and ammunition. The museum was officially established in 1946, with the primary goal of collecting and studying materials that illuminate the cultural and political history of Užice and its wider region. Today, the museum holds rich collections and deposits with approximately 70,000 museum exhibits. The buildings of the National Museum are protected as immovable cultural heritage of exceptional importance, further testifying to their historical and cultural significance. </p>
              </section>

              <img srcSet={`${uzice55} 450w, ${uzice5} `} alt="Ethno Park Terzića Avlija" loading="lazy" />

              <section lang="en">
                <p> <strong>Ethno Park Terzića Avlija</strong>, a rural tourist household near Užice, is located in the village of <em>Zlakusa</em>, 185 kilometers from Belgrade. It represents a unique blend of an open-air and indoor museum. This household dates back to the early 20th century and reflects a typical rural household of the Užice region, with old houses and accompanying structures such as farm buildings, a barn, a dairy, a well, and a cheese cellar. The Ethno Park officially opened in 2005 and annually attracts around 6,000 visitors, both domestic and foreign. The park also hosts the headquarters of the <strong>Ethno Association Zavičaj</strong>, founded with the aim of preserving culture, tradition, customs, and old crafts, as well as developing villages through the promotion of rural tourism and environmental protection. Terzića Avlija is recognized as a pioneer of rural tourism in Zlakusa and the Užice region, as well as a synonym for rural tourism in the Zlatibor area. It is often visited by study groups focused on rural tourism development in Serbia and abroad, recognizing it as a model of good practice. </p>
              </section>

              <img srcSet={`${uzice66} 450w, ${uzice6} `} alt="Church of the Holy Apostle in Užice" loading="lazy" />

              <section lang="en">
                <p> The <strong>Church of the Holy Apostle and Evangelist Mark</strong>, known as the <em>Church of St. Mark</em>, is located in Užice at <strong>41 Nikola Pašić Street</strong> and represents a cultural monument of great importance. The first church on this site, dedicated to Saint Mark, was built in 1721, during the period when Užice was under Ottoman rule. It was situated in the part of the city known as <em>Stara Varoš</em> or <em>Carina</em>. During Ottoman rule, the church was burned down, and on its foundations, a new place of worship was built in 1828, during the reign of Prince <strong>Miloš Obrenović</strong>. The Church of St. Mark preserves a rich collection of icons that testify to its long and significant history. Among them, notable are Italo-Cretan works from the 16th century, such as the refined depiction of <em>Christ Pantocrator</em> on a golden background. Equally valuable is the icon of the <em>Virgin Mary with Christ and young Saint John</em>, attributed to a workshop from coastal regions. These artworks highlight the church’s importance in the religious and cultural heritage of Užice. </p>
              </section>

              <img srcSet={`${uzice77} 450w, ${uzice7} `} alt="Potpeć Cave" loading="lazy" />

              <section lang="en">
                <p> <strong>Potpeć Cave</strong> is located in the village of <em>Potpeć</em>, 14 kilometers from Užice, on the northern slopes of <em>Drežnička Gradina</em>, which rises to 932 meters above sea level. The entrance to this cave is one of the most impressive natural masterpieces in Serbia. A huge horseshoe-shaped portal, 50 meters high (from the bottom of the dry streambed to the ceiling), and 12 meters wide at the bottom, and 22 meters wide at the top, holds the title of the highest cave entrance in the country. This entrance is carved into a limestone cliff, whose vertical section reaches a height of 72 meters. Visitors have access to 555 meters of a maintained cave path, which includes a descent with more than 700 steps. Potpeć Cave belongs to the spring-type caves. It was formed by the action of sinking streams that disappear in the <em>Drežnička Valley</em>, and after an underground flow of 4 to 5 kilometers (in a straight line), emerge on the surface through the cave or a spring in front of it, creating a cave river known as <strong>Petnica</strong>. </p>
              </section>

              <img srcSet={`${uzice88} 450w, ${uzice8} `} alt="Stapari Spa" loading="lazy" />

              <section lang="en">
                <p> <strong>Stapari Spa</strong>, with several thermal springs, is located in the <em>Stapari Gorge of the Đetinja River</em>, in the area of the village <em>Stapari</em>. This spa is one of the oldest thermal sites in western Serbia, where remains of baths dating back to prehistoric times have been found. Thermal springs were used even in antiquity and Roman times, when smaller settlements existed nearby. The healing waters of Stapari Spa served the local population during the Middle Ages as well, as evidenced by some nearby toponyms, and in the period between the two world wars. Stapari Spa is known for its healing properties, especially in treating skin diseases and rheumatic conditions. </p>
              </section>

              <img srcSet={`${uzice99} 450w, ${uzice9} `} alt="Đetinja River Gorge" loading="lazy" />

              <section lang="en">
                <p> The <strong>Đetinja River Gorge</strong> is located in western Serbia, west of Užice, in the hilly-mountainous area known as <em>Stari Vlah</em>. It stretches from <em>Bioštanska Spa</em> to Užice, with a total length of about 15 kilometers, oriented west-east. Its steep sides reach heights of up to 400 meters above the river. This gorge represents a composite, polygenetic valley that in some places takes on canyon characteristics. To the north, it continues into the <em>Kremanska Basin</em>, where at an altitude of 712 meters, by the confluence of the <em>Konjska River</em>, <em>Bratišna River</em>, <em>Užice Stream</em>, and <em>Tomić Stream</em>, the river <em>Đetinja</em> is formed. The gorge ends near Užice's <strong>Old Town</strong>, where it opens into a wider basin in which the city of Užice is situated. </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default Uzice;