/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import vrnjackaBanja1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/desktop/vrnjackaBanja1.jpg";
import vrnjackaBanja2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/desktop/vrnjackaBanja2.jpg";
import vrnjackaBanja3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/desktop/vrnjackaBanja3.jpg";
import vrnjackaBanja4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/desktop/vrnjackaBanja4.jpg";
import vrnjackaBanja5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/desktop/vrnjackaBanja5.jpg";
import vrnjackaBanja6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/desktop/vrnjackaBanja6.jpg";
import vrnjackaBanja7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/desktop/vrnjackaBanja7.jpg";
import vrnjackaBanja8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/desktop/vrnjackaBanja8.jpg";
import vrnjackaBanja11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/mobile/MvrnjackaBanja1.jpg";
import vrnjackaBanja22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/mobile/MvrnjackaBanja2.jpg";
import vrnjackaBanja33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/mobile/MvrnjackaBanja3.jpg";
import vrnjackaBanja44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/mobile/MvrnjackaBanja4.jpg";
import vrnjackaBanja55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/mobile/MvrnjackaBanja5.jpg";
import vrnjackaBanja66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/mobile/MvrnjackaBanja6.jpg";
import vrnjackaBanja77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/mobile/MvrnjackaBanja7.jpg";
import vrnjackaBanja88 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/VrnjackaBanja/mobile/MvrnjackaBanja8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const VrnjackaBanja = () => {
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
            ? "Vrnjačka Banja – Kraljica banjskog turizma i lekovitih izvora | Srbija Wonders"
            : "Vrnjačka Banja – Queen of Spa Tourism and Healing Springs | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Vrnjačka Banja je najpoznatija banja u Srbiji, čuvena po lekovitim izvorima, bogatoj istoriji i modernim wellness sadržajima. Upoznajte njenu priču od Rimljana do Akva parka Raj."
              : "Vrnjačka Banja is Serbia’s most famous spa, known for its healing springs, rich history, and modern wellness attractions. Discover its story from Roman times to the Raj Aqua Park."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Vrnjačka Banja, banjski turizam, lekoviti izvori, Topla voda, Akva park Raj, istorija Vrnjačke Banje, kursalon, spa Srbija, wellness centar, banja Srbija"
              : "Vrnjačka Banja, spa tourism, healing springs, Topla voda, Raj aqua park, Vrnjačka Banja history, kursalon, Serbia spa, wellness center, Serbian spa town"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/vrnjacka-banja`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/vrnjacka-banja"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/vrnjacka-banja"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/vrnjacka-banja"
        />
      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(raskiOkrugPathRoutes(switchLanguage))} />
        <header></header>
        <img srcSet={`${vrnjackaBanja11} 450w, ${vrnjackaBanja1} `} alt="Vrnjačka Banja 1" />

        <h2 style={{ color: "white" }}>Vrnjačka Banja</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Vrnjačka Banja</strong>, poznata kao <em>"kraljica banjskog turizma"</em>, oduvek je bila
                  prepoznata po svojim <strong>lekovitim izvorima</strong>. Područje je bilo naseljeno još
                  u praistoriji, a arheološki nalazi, poput oruđa iz mlađeg kamenog doba,
                  ukazuju na to da su prvi ljudi verovatno koristili ove izvore.
                  <strong>Lekovitost vode</strong> u Vrnjačkoj Banji prvi su prepoznali <strong>Rimljani</strong>, koji su
                  na tom mestu izgradili lečilište <em>Aquae Orcinae</em> i izvor <em>Fons Romanus</em>.
                  Veruje se da su i keltsko pleme <strong>Skordisci</strong>, koji su prethodili
                  Rimljanima, koristili vodu iz izvora za piće, kupanje i lečenje.
                  Rimljani su, prema tome, bacali <em>zlatnike u bunare</em>, a otkriveni su i
                  ostaci bazena za kupanje, što govori o značaju banjske vode u tom
                  vremenu. Takođe, postoji verovanje da su <strong>južni Sloveni</strong> bili svesni
                  lekovitih svojstava ovih voda kada su se naselili na Balkanu, ali podaci
                  o tom periodu su oskudni. Prema nekim legendama, <em>Turski begovi i spahije</em>
                  dolazili su u banju radi odmora, dok je lokalno stanovništvo bilo
                  primorano da ih služi. Ove legende navode da su tadašnji stanovnici čak
                  <em>zatrpavali izvore iz protesta</em>.
                </p>
              </section>

              <img srcSet={`${vrnjackaBanja22} 450w, ${vrnjackaBanja2}`} alt="Vrnjačka Banja 2" />

              <section lang="sr">
                <p>
                  U tridesetim godinama 19. veka, nakon oslobođenja Srbije od turske
                  vlasti, <strong>knez Miloš Obrenović</strong> angažovao je geologa <strong>Herdera</strong> da istraži
                  mineralne vode. Godine 1835, saksonski baron izvršio je prvu analizu
                  tople mineralne vode iz Vrnjačke Banje i ocenio je kao vrlo kvalitetnu,
                  upoređujući je sa <em>Karlovim Varima</em> u Češkoj. Iako je voda imala
                  potencijal, pravi razvoj banje usledio je tek tridesetak godina kasnije.
                  Banjski kompleks izgradili su istaknuti ljudi iz Kruševca, Kraljeva i
                  Trstenika, koji su se udružili i 1868. godine osnovali <strong>Osnovatelno
                    fundatorsko društvo kiselo vruće vode u Vrnjcima</strong>. Kupili su zemljište sa
                  izvorima lekovite vode, koja je do tada bila u rukama lokalnih gazda, i
                  započeli izgradnju prvih objekata. Sam naziv <em>"Vrnjačka Banja"</em> potiče od
                  naselja u kojem je bila smeštena. Godinu dana nakon što je društvo
                  uložilo sredstva u razvoj, banjsko jezgro postalo je izuzetno popularno,
                  što je stvorilo problem u pogledu smeštaja. Kuće lokalnog stanovništva
                  nisu bile dovoljne da prime sve posetioce koji su želeli da uživaju u
                  lečenju i opuštanju na ovom mestu.
                </p>
              </section>

              <img srcSet={`${vrnjackaBanja33} 450w, ${vrnjackaBanja3}`} alt="Vrnjačka Banja 3" />

              <section lang="sr">
                <p>
                  Uz reku su se pojavljivale <em>krajnjače</em>, jednostavne kolibe koje su služile
                  za iznajmljivanje. Prvi ugostiteljski objekat u Vrnjačkoj Banji bila je
                  gostionica koju je 1885. godine otvorio <strong>Kosta Petrović Rakica</strong>. Prema
                  rečima Jelene Borović, kustosa muzeja, ključna godina za razvoj Vrnjačke
                  Banje bila je <strong>1888.</strong> Tada je general <strong>Jovan Belimarković</strong>, ugledna ličnost
                  tog vremena (bivši ministar vojni, za unutrašnje poslove, građevinu i
                  namesnik tokom vladavine maloletnog kralja Aleksandra Obrenovića),
                  odlučio da sagradi letnjikovac u ovom mestu. Već naredne godine, kralj
                  je posetio Belimarkovićevu vilu, a od tada pa sve do Balkanskih ratova,
                  Vrnjačka Banja je postala omiljena destinacija srpske aristokratije.
                  Tamo su se okupljali ljudi iz političkog, finansijskog, vojnog i
                  kulturnog života, a letnjikovac je bio mesto na kojem su se donosile
                  važne istorijske odluke. Balkanski ratovi i Prvi svetski rat nisu uspeli
                  da unište lepotu Vrnjačke Banje. Nakon završetka ratnih godina, banja
                  ponovo doživljava procvat. Između dva rata, srpska elita ponovo bira
                  Vrnjačku Banju kao centar okupljanja, gde su najbogatiji građani Srbije
                  gradili vile i letnjikovce. Neke od tih zgrada su i danas sačuvane.
                </p>
              </section>

              <img srcSet={`${vrnjackaBanja44} 450w, ${vrnjackaBanja4}`} alt="Vrnjačka Banja 4" />

              <section lang="sr">
                <p>
                  Vrnjačka Banja se nalazi u centralnom delu Srbije, u oblasti <strong>Raška</strong>, na
                  200 km od Beograda, 25 km od Kraljeva i 7 km od Trstenika. Smeštena je u
                  dolini reke <strong>Zapadne Morave</strong>, a sa svih strana je okružena planinama.
                  Planina <strong>Goč</strong> štiti je sa juga, istoka i zapada, dok je sa severa
                  zaštićena <strong>Gledićkim planinama</strong>. Banja se nalazi na <strong>220 metara nadmorske
                    visine</strong>, a kroz nju prolaze reke <strong>Lipovačka</strong> i <strong>Vrnjačka</strong>. Nedaleko od
                  Vrnjačke Banje, na 25 km uzvodno, smeštene su <em>Podunavačke bare</em>,
                  popularna destinacija za ljubitelje rečnih predela i sportski ribolov.
                  Klima u ovom području je <strong>umereno oblačna</strong>, sa najvećim padavinama u junu
                  i oktobru, dok je septembar mesec sa najmanje kiše. Vetrovi su retki
                  zahvaljujući planinama koje okružuju banju, pa čak <strong>170 dana u godini
                    nema vetra</strong>. Banja je prepoznatljiva po <strong>bujnoj vegetaciji</strong>, jer se nalazi
                  u šumsko-planinskom području <strong>Kopaonika</strong>. Dominiraju bogate šume, pretežno
                  <strong>lipe</strong>, ali tu su i borove i jelove šume, kao i mnogo zimzelenih biljaka.
                  Vrnjačka Banja je odlično povezana sa ostatkom Srbije putem drumskog i
                  železničkog saobraćaja, a na tom području se ukrštaju važni magistralni
                  putevi koji vode do Beograda, Sofije i Atine.
                </p>
              </section>

              <img srcSet={`${vrnjackaBanja55} 450w, ${vrnjackaBanja5}`} alt="Vrnjačka Banja 5" />

              <section lang="sr">
                <p>
                  Izvori lekovite vode u Vrnjačkoj Banji poznati su još iz <strong>antičkih
                    vremena</strong>. Međutim, prvi banjski lekar u novijoj istoriji bio je <strong>Josif Pančić</strong>.
                  Na njegov savet, <strong>Pavle Mutavdžić</strong> je koristio vodu iz Vrnjaca,
                  što je pokrenulo razvoj i gradnju prvih banjskih objekata. Na području
                  Vrnjačke Banje nalazi se sedam izvora mineralne vode: <strong>Topla voda</strong>,
                  <strong>Snežnik</strong>, <strong>Slatina</strong>, <strong>Jezero</strong>, <strong>Beli izvor</strong>, <strong>Borjak</strong> i <strong>Vrnjačko vrelo</strong>.
                  Među njima se nalaze i topli i hladni izvori, a za lečenje se koriste <strong>Topla
                    voda</strong>, <strong>Snežnik</strong>, <strong>Slatina</strong> i <strong>Jezero</strong>. Dve vrste vode se čak flaširaju i
                  prodaju kao mineralne vode. <strong>Topla voda</strong> je jedinstvena na svetu jer je
                  njena temperatura ista kao temperatura ljudskog tela, <strong>36,5°C</strong>. Ovaj izvor
                  pripada kategoriji <em>alkalnih ugljeno-kiselih toplih voda</em>. Topla voda je
                  prvi izvor koji je u potpunosti prilagođen banjskom turizmu. Već 1883.
                  godine izgrađen je <strong>Kursalon</strong>, objekat za prijem gostiju, a zidano
                  kupatilo je sagrađeno 1892. godine.
                </p>
              </section>

              <img srcSet={`${vrnjackaBanja66} 450w, ${vrnjackaBanja6}`} alt="Vrnjačka Banja 6" />

              <section lang="sr">
                <p>
                  Na dan Opštine Vrnjačka Banja, <strong>14. jula</strong>, otvorena su vrata najvećeg akva
                  parka u Srbiji i regionu – <strong>Akva park Raj</strong>. Ovaj impozantni kompleks,
                  koji može da primi između 4.000 i 6.000 posetilaca, prostire se na 3,5
                  hektara, a ukupna investicija iznosi 12 miliona evra. Akva park nudi
                  brojne sadržaje, uključujući porodične tobogane, adrenalinski tobogan
                  <em>„kamikaza“</em> koji se penje do 30 metara u vis, hidromasažne bazene sa
                  devet različitih režima, kao i najdužu lenju reku u Srbiji, dužu od 460
                  metara. Tu su i bazeni sa veštačkim talasima, koji donose morsku
                  atmosferu usred kontinenta. Kompleks obuhvata i ugostiteljske objekte,
                  prodavnice, igraonice, bazene za decu i sport, čime je Akva park Raj
                  postao destinacija za sve generacije.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p> <strong>Vrnjačka Banja</strong>, known as the <em>"queen of spa tourism"</em>, has always been recognized for its <strong>healing springs</strong>. The area was inhabited since prehistoric times, and archaeological finds, such as tools from the late Stone Age, suggest that early humans likely used these springs. The <strong>healing properties of the water</strong> in Vrnjačka Banja were first recognized by the <strong>Romans</strong>, who built a spa called <em>Aquae Orcinae</em> and the spring <em>Fons Romanus</em> at this site. It is believed that the Celtic tribe <strong>Skordisci</strong>, who preceded the Romans, used the water from the springs for drinking, bathing, and healing. According to that, the Romans threw <em>coins into the wells</em>, and remains of bathing pools have been discovered, indicating the importance of the spa water in that time. There is also a belief that the <strong>South Slavs</strong> were aware of the healing properties of these waters when they settled in the Balkans, though data about that period is scarce. According to some legends, <em>Turkish beys and spahis</em> came to the spa for rest, while the local population was forced to serve them. These legends say that the residents at the time even <em>filled in the springs in protest</em>. </p>
              </section>

              <img srcSet={`${vrnjackaBanja22} 450w, ${vrnjackaBanja2}`} alt="Vrnjačka Banja 2" />

              <section lang="en"> <p> In the 1830s, after Serbia was liberated from Turkish rule, <strong>Prince Miloš Obrenović</strong> hired geologist <strong>Herder</strong> to investigate the mineral waters. In 1835, the Saxon baron performed the first analysis of the warm mineral water from Vrnjačka Banja and rated it as very high quality, comparing it to <em>Karlovy Vary</em> in the Czech Republic. Although the water had potential, the real development of the spa came about only about thirty years later. The spa complex was built by prominent people from Kruševac, Kraljevo, and Trstenik, who united and in 1868 founded the <strong>Founders' Society for the Acidic Hot Water in Vrnci</strong>. They bought land with the healing water springs, which had been in the hands of local landlords until then, and started building the first facilities. The name <em>"Vrnjačka Banja"</em> comes from the settlement where it was located. One year after the society invested funds in development, the spa center became extremely popular, which created accommodation problems. The houses of the local population were not sufficient to accommodate all the visitors who wanted to enjoy treatment and relaxation at this place. </p> </section>
              <img srcSet={`${vrnjackaBanja33} 450w, ${vrnjackaBanja3}`} alt="Vrnjačka Banja 3" />

              <section lang="en"> <p> Along the river appeared <em>krajnjače</em>, simple huts used for rent. The first hospitality facility in Vrnjačka Banja was an inn opened in 1885 by <strong>Kosta Petrović Rakica</strong>. According to Jelena Borović, museum curator, the key year for the development of Vrnjačka Banja was <strong>1888.</strong> That year, General <strong>Jovan Belimarković</strong>, a prominent figure of that time (former Minister of War, Interior, Construction, and regent during the reign of minor King Alexander Obrenović), decided to build a summer residence in this place. The following year, the king visited Belimarković's villa, and from then until the Balkan Wars, Vrnjačka Banja became a favorite destination of the Serbian aristocracy. It was a gathering place for people from political, financial, military, and cultural life, and the summer residence was where important historical decisions were made. The Balkan Wars and World War I did not destroy the beauty of Vrnjačka Banja. After the war years ended, the spa experienced a revival. Between the wars, the Serbian elite again chose Vrnjačka Banja as a gathering center, where the wealthiest citizens of Serbia built villas and summer residences. Some of those buildings are still preserved today. </p> </section>
              <img srcSet={`${vrnjackaBanja44} 450w, ${vrnjackaBanja4}`} alt="Vrnjačka Banja 4" />

              <section lang="en"> <p> Vrnjačka Banja is located in the central part of Serbia, in the <strong>Raška</strong> region, 200 km from Belgrade, 25 km from Kraljevo, and 7 km from Trstenik. It lies in the valley of the <strong>Western Morava River</strong> and is surrounded by mountains on all sides. The <strong>Goč</strong> mountain protects it from the south, east, and west, while it is protected from the north by the <strong>Gledić Mountains</strong>. The spa is at an altitude of <strong>220 meters above sea level</strong>, and the <strong>Lipovačka</strong> and <strong>Vrnjačka</strong> rivers flow through it. Not far from Vrnjačka Banja, 25 km upstream, are the <em>Podunavačke Bare</em>, a popular destination for river landscapes and sport fishing enthusiasts. The climate in this area is <strong>moderately cloudy</strong>, with the highest rainfall in June and October, while September is the driest month. Winds are rare thanks to the mountains surrounding the spa, with <strong>170 windless days per year</strong>. The spa is known for its <strong>lush vegetation</strong>, located in the forest-mountain area of <strong>Kopaonik</strong>. Rich forests dominate, mostly <strong>linden</strong>, but there are also pine and fir trees, as well as many evergreen plants. Vrnjačka Banja is well connected to the rest of Serbia by road and rail transport, intersected by important highways leading to Belgrade, Sofia, and Athens. </p> </section>
              <img srcSet={`${vrnjackaBanja55} 450w, ${vrnjackaBanja5}`} alt="Vrnjačka Banja 5" />

              <section lang="en"> <p> The healing water springs in Vrnjačka Banja have been known since <strong>antiquity</strong>. However, the first modern spa doctor was <strong>Josif Pančić</strong>. On his advice, <strong>Pavle Mutavdžić</strong> used water from Vrnjačka Banja, which sparked the development and construction of the first spa facilities. There are seven mineral water springs in Vrnjačka Banja: <strong>Topla voda</strong>, <strong>Snežnik</strong>, <strong>Slatina</strong>, <strong>Jezero</strong>, <strong>Beli izvor</strong>, <strong>Borjak</strong>, and <strong>Vrnjačko vrelo</strong>. Among them are both warm and cold springs, and for treatment, <strong>Topla voda</strong>, <strong>Snežnik</strong>, <strong>Slatina</strong>, and <strong>Jezero</strong> are used. Two types of water are even bottled and sold as mineral water. <strong>Topla voda</strong> is unique in the world because its temperature is the same as the human body temperature, <strong>36.5°C</strong>. This spring belongs to the category of <em>alkaline carbonated warm waters</em>. Topla voda was the first spring fully adapted to spa tourism. In 1883, the <strong>Kursalon</strong>, a guest reception facility, was built, and a brick bathhouse was constructed in 1892. </p> </section>
              <img srcSet={`${vrnjackaBanja66} 450w, ${vrnjackaBanja6}`} alt="Vrnjačka Banja 6" />

              <section lang="en"> <p> On the Municipality Day of Vrnjačka Banja, <strong>July 14</strong>, the largest water park in Serbia and the region – <strong>Akva Park Raj</strong> – opened its doors. This impressive complex, capable of accommodating between 4,000 and 6,000 visitors, covers 3.5 hectares, with a total investment of 12 million euros. The water park offers numerous attractions, including family slides, the adrenaline slide <em>"kamikaze"</em> which rises up to 30 meters high, hydromassage pools with nine different settings, and the longest lazy river in Serbia, over 460 meters long. There are also wave pools that bring the sea atmosphere to the continent's interior. The complex includes catering facilities, shops, playrooms, pools for children, and sports pools, making Akva Park Raj a destination for all generations. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default VrnjackaBanja;