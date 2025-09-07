/* eslint-disable react/no-unknown-property */
import vrsac1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/desktop/vrsac2.jpg";
import vrsac2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/desktop/vrsac3.jpg";
import vrsac3 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/desktop/vrsac4.jpg";
import vrsac4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/desktop/vrsac5.jpg";
import vrsac5 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/desktop/vrsac6.jpg";
import vrsac6 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/desktop/vrsac7.jpg";
import vrsac7 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/desktop/vrsac8.jpg";
import vrsac8 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/desktop/vrsac9.jpg";
import vrsac9 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/desktop/vrsac10.jpg";
import vrsac11 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/mobile/Mvrsac2.jpg";
import vrsac22 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/mobile/Mvrsac3.jpg";
import vrsac33 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/mobile/Mvrsac4.jpg";
import vrsac44 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/mobile/Mvrsac5.jpg";
import vrsac55 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/mobile/Mvrsac6.jpg";
import vrsac66 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/mobile/Mvrsac7.jpg";
import vrsac77 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/mobile/Mvrsac8.jpg";
import vrsac88 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/mobile/Mvrsac9.jpg";
import vrsac99 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/Vrsac/mobile/Mvrsac10.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { juznoBanatskiPathRoutes } from "./JuznoBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Vrsac = () => {
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
            ? 'Vršac | Istorija, Priroda i Turizam u Banatu'
            : 'Vrsac | History, Nature and Tourism in Banat'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Vršac, prelepi grad u Banatu uz Vršačke planine, poznat po bogatoj istoriji, prirodnim lepotama i kulturnim znamenitostima kao što su Gradski park i muzej Konkordija.'
              : 'Vrsac, a beautiful town in Banat near the Vrsac Mountains, known for its rich history, natural beauty, and cultural landmarks like the City Park and Konkordija Museum.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Vršac, Vršačke planine, Banat, turizam Vršac, Gradski park Vršac, muzej Konkordija, istorija Vršca, priroda Vojvodine, znamenitosti Vršca'
              : 'Vrsac, Vrsac Mountains, Banat, Vrsac tourism, Vrsac City Park, Konkordija Museum, Vrsac history, Vojvodina nature, Vrsac attractions'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/vrsac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/vrsac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/vrsac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-banatski/vrsac"
        />
      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(juznoBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${vrsac11} 450w, ${vrsac1} `} alt="Vršac grad 1" />

        <h2>Vršac</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Vršac</strong> je jedan od najlepših gradova u Banatu, smešten u severoistočnom delu Srbije, odnosno jugoistočnom delu Vojvodine.
                </p>
                <p>
                  Grad se nalazi uz rub Panonske nizije, u podnožju i na padinama Vršačkih planina. Na njegovom teritoriju prostire se i prirodni rezervat Deliblatske peščare, poznat i kao <em>"Evropska Sahara"</em>.
                </p>
                <p>
                  Vršac je udaljen 84 kilometra od Beograda, 14 kilometara od granice sa Rumunijom, a 77 kilometara od Temišvara, administrativnog centra zapadne Rumunije. Od Novog Sada je udaljen 147 kilometara.
                </p>
                <p>
                  U neposrednoj blizini nalaze se opštine Bela Crkva, Kovin, Alibunar i Plandište, dok veća naselja u okolini uključuju Opovo, Kovačicu, Alibunar, Plandište, Bela Crkva, Kovin i Pančevo.
                </p>
              </section>

              <img srcSet={`${vrsac22} 450w, ${vrsac2} `} alt="Vršac grad 2" />

              <section lang="sr">
                <p>
                  Ime grada <strong>Vršca</strong> prvi put se spominje u pisanim izvorima 1427. godine, kada je zabeleženo kao <em>Podvršan</em>.
                </p>
                <p>
                  Prva naselja na ovom području datiraju još iz neolita, kada su postojali tragovi ljudske aktivnosti u dobu glačanog kamena, što potvrđuju arheološki nalazi.
                </p>
                <p>
                  Naselja su postajala stalnija sa dolaskom Slovena u pozni srednji vek, a pre njih, ovaj region su naseljavali Kimerci, Tračani, Kelti, Skiti, Dačani, Rimljani, Sarmati, Gepidi, Avari i drugi narodi.
                </p>
                <p>
                  <strong>Vršačka kula</strong>, koja je danas simbol grada, podignuta je u prvoj polovini 15. veka, za vreme Ugarske vlasti. Prema nekim izvorima, tvrđava je izgrađena na mestu stare rimske osmatračnice.
                </p>
                <p>
                  Đurađ Branković je naredio njenu gradnju nakon pada Smedereva, kao odbranu od Turaka.
                </p>
                <p>
                  Turci su iz Vršca proterani 1716. godine od strane vojvode Eugena Savejskog, što je označilo početak nove epohe u istoriji grada. Tada Vršac postaje deo Tamiškog Banata.
                </p>
                <p>
                  Od 1717. godine, u ove krajeve dolaze kolonisti iz Nemačke, Francuske, Italije i Španije, uglavnom vinogradari. Istovremeno, u Vršac se doseljavaju mnogi Srbi i Cincari, pretežno zanatlije i trgovci.
                </p>
                <p>
                  Godine 1804, grad dobija Tržišnu povelju od cara Franje II.
                </p>
                <p>
                  Na početku 20. veka, Vršac je postao grad sa oko 25.000 stanovnika, razvijenom malom industrijom, jakom trgovinom i obnovljenim vinogradarstvom.
                </p>
                <p>
                  Međutim, izbijanjem Prvog svetskog rata, status srpskog stanovništva se menja, a mnogi ugledni Srbi su poslani u progonstvo. Tada su prestale da izlaze novine na srpskom jeziku.
                </p>
              </section>

              <img srcSet={`${vrsac33} 450w, ${vrsac3} `} alt="Gradski park u Vršcu" />

              <section lang="sr">
                <p>
                  <strong>Gradski park u Vršcu</strong> je nezaobilazna destinacija za sve koji se nađu u ovom prelepom gradu ili njegovoj okolini. Udaljen samo nekoliko minuta hoda od centra, ovaj park je pravo mesto za opuštanje i uživanje u prirodi.
                </p>
                <p>
                  Otkrijte sa nama istoriju i lepotu ovog zelenog kutka Vršca. Na mestu današnjeg parka, u 18. veku, nalazio se majur plemićke porodice Šeribl.
                </p>
                <p>
                  Godine 1797, Vršac je otkupio ovaj posed, a već 1817. godine, majur je preimenovan u Gradski majur, da bi kasnije postao Gradski park. Danas je to prelepa zelena oaza koja očarava sve posetioce svojom prirodnom lepotom.
                </p>
                <p>
                  Gradski park u Vršcu ima korene krajem 18. veka, kada je otkupljeno zemljište i započeta izgradnja gradske bašte. Park je projektovan po uzoru na engleski pejzažni stil, sa širokim alejama i brojnim sklonjenim mestima za odmor građana.
                </p>
                <p>
                  Danas je pod zaštitom države kao prirodni spomenik vrtne arhitekture mešovitog stila. Površina parka je gotovo 6 hektara, a na njegovim stazama možete uživati u raznovrsnom drveću, kako listopadnom, tako i zimzelenom.
                </p>
                <p>
                  Zeleni prostori su obogaćeni ukrasnim grmljem, šibljem i šarenim cvećem koje unosi živahne boje i stvara mirnu atmosferu.
                </p>
                <p>
                  U parku se nalaze klupice za odmor, dečje igralište, fontana, a tu je i šarmantan kafić sa prostranom terasom gde možete uživati u osvežavajućim napicima, pre nego nastavite istraživanje grada.
                </p>
              </section>

              <img srcSet={`${vrsac55} 450w, ${vrsac5} `} alt="Gradski muzej Konkordija" />

              <section lang="sr">
                <p>
                  <strong>Gradski muzej Konkordija</strong> predstavlja značajnu kulturnu i istorijsku instituciju, koja čuva bogatstvo prošlosti i tradicije ovog regiona.
                </p>
                <p>
                  Prvi predmeti za Gradski muzej u Vršcu počeli su da se prikupljaju još 1882. godine. Muzej postaje opštinski 1894. godine, dok je za javnost zvanično otvoren 1898. godine.
                </p>
                <p>
                  Gradski muzej u Vršcu prvenstveno ima zavičajni karakter, osnovan je s ciljem da očuva i prikaže istoriju samog grada. S vremenom, muzej se razvija i širi, te danas obuhvata istoriju čitavog južnog Banata.
                </p>
                <p>
                  Godine 1908. muzej je dobio svoju zgradu, kada je došlo i do spajanja sa gradskom bibliotekom.
                </p>
                <p>
                  Prvi kustos, Feliks Mileker, igrao je ključnu ulogu u osnivanju i razvoju muzeja. Njegov doprinos je ogroman, jer je obogatio muzejsku zbirku kroz terenska iskopavanja i otkup predmeta od kolekcionara.
                </p>
              </section>

              <img srcSet={`${vrsac44} 450w, ${vrsac4} `} alt="Vršačke planine" />

              <section lang="sr">
                <p>
                  <strong>Vršačke planine</strong> uzdižu se u srcu Panonske ravnice, na jugoistočnom delu Banata. Ove planine protežu se u pravcu istok-zapad, dugačke 19 kilometara, a poznate su i pod imenom Vršački breg.
                </p>
                <p>
                  Ukupna površina planina iznosi 170 kvadratnih kilometara, od kojih 122 km² pripada Srbiji, dok je 48 km² u Rumuniji. Ovdje možete saznati više o ovom prirodnom području.
                </p>
                <p>
                  Geološki, Vršačke planine su sastavljene od stena starih oko 260 miliona godina (paleozoik), dok ih okružuju neogeni sedimenti stari 60 miliona godina, među kojima se nalaze i tragovi nekadašnjeg Panonskog mora, stari oko 25 miliona godina.
                </p>
                <p>
                  Najviši vrh ovih planina, i cele Vojvodine, je <strong>Gudurički vrh</strong>, koji se uzdiže na 641 metar nadmorske visine. Osim njega, poznati su i drugi vrhovi kao što su Lisičja glava (590 m), Đakov vrh (449 m) i Vršačka kula (399 m).
                </p>
                <p>
                  Severna padina Vršačkih planina je strma, dok se južna postepeno spušta u pobrđe, gde se nalaze vinogradi. Ove planine su nekada bile ostrvo u Panonskom moru, zbog čega spadaju u ostrvske planine.
                </p>
                <p>
                  Sa njihovih visina pruža se prelep pogled na Vršac, Vojvodinu i Rumuniju, omogućujući posetiocima da uživaju u panoramskom pogledu.
                </p>
                <p>
                  Zbog specifične klime, ovaj region se može pohvaliti bogatim ekosistemom, sa više od 100 vrsta ptica i više od 1000 vrsta retkog bilja.
                </p>
              </section>

              <img srcSet={`${vrsac66} 450w, ${vrsac6} `} alt="Vrščka kula" />

              <section lang="sr">
                <p>
                  Na krajnjim zapadnim obroncima <strong>Vrščkog gorja</strong>, na brežuljku koji se strmo uzdiže iznad Vršca i širokih prostranstava plodne banatske ravnice, nalaze se ostaci manjeg feudalnog utvrđenja iz prve polovine 15. veka.
                </p>
                <p>
                  Pretpostavlja se da ga je sagradio despot <strong>Đurađ Branković</strong> nakon pada Smedereva, kako bi zaštitio svoje posede na prostoru današnje Vojvodine.
                </p>
                <p>
                  Zbog svog položaja blizu puta koji je vodio od Temišvara ka Dunavu, utvrđenje je imalo veliki strateški značaj.
                </p>
                <p>
                  Od celokupne građevine, najbolje se očuvala dominantna branilac kula, po kojoj je cela tvrđava, ali i brdo na kojem je izgrađena, dobila ime - <strong>Vrščka kula</strong>.
                </p>
              </section>

              <img srcSet={`${vrsac77} 450w, ${vrsac7} `} alt="Manastir Mesić" />

              <section lang="sr">
                <p>
                  <strong>Manastir Mesić</strong> je ženski manastir koji se nalazi u podnožju Magarećeg brda, u vinogradarskom području istočno od Vršca. Ovaj manastir je jedan od ključnih duhovnih centara jugoistočnog Banata.
                </p>
                <p>
                  U nastavku možete saznati više o njegovoj istoriji, osobinama i načinu kako do njega možete doći.
                </p>
                <p>
                  Manastir Mesić prvi put se pominje u katastihu Pećke Patrijaršije iz 1660. i 1666. godine. Prema ovim dokumentima, manastir je bio sedište vršačkih episkopa nakon Velike seobe, kada je austrijski car <strong>Leopold I</strong> potvrdio postavljanje Spiridona Štibice za vršačkog vladiku.
                </p>
                <p>
                  Iako se manastir smatra osnovanim u 15. veku, prema lokalnoj legendi, 1225. godine ga je osnovao <strong>Arsenije Bogdanović Hilandarac</strong>, kojeg je Sveti Sava lično postavio za igumana.
                </p>
              </section>

              <img srcSet={`${vrsac88} 450w, ${vrsac8} `} alt="Gradsko jezero Vršac" />

              <section lang="sr">
                <p>
                  Na obodu Vršca smešteno je veštačko jezero koje predstavlja pravu oazu za meštane tokom vrelih letnjih dana. Sezona kupanja traje od početka juna do početka septembra.
                </p>
                <p>
                  Jezero ima površinu od oko 32.000 m², a voda se odlikuje visokim sadržajem joda, sulfata, magnezijuma i kalcijuma, te konstantnom temperaturom od 25 stepeni.
                </p>
                <p>
                  Tokom letnje sezone, Turistička organizacija Vršac organizuje razne sportske manifestacije, školu plivanja, dečje aktivnosti i muzičke programe, pružajući posetiocima mnogo zabave i uživanja.
                </p>
              </section>

              <img srcSet={`${vrsac99} 450w, ${vrsac9} `} alt="Dvor eparhije Banatske" />

              <section lang="sr">
                <p>
                  Glavna ulica u Vršcu, <strong>Dvorska</strong>, svoj naziv nosi po <strong>Episkopskoj palati</strong> (reč "dvor" na srpskom znači palata).
                </p>
                <p>
                  Ova palata je izgrađena 1672. godine, a park u njenom dvorištu oblikovan je u francuskom stilu, sa dve fontane i baroknom ogradom koja je okružuje.
                </p>
                <p>
                  Vladika Jovan Georgijević je od kraljice Marije Terezije dobio dozvolu za izgradnju ove palate kao rezidencijalnog sedišta banatskih episkopa.
                </p>
                <p>
                  Kapela unutar palate datira iz 18. veka, posvećena je Svetim arhanđelima Mihailu i Gavrilu.
                </p>
                <p>
                  Barokni ikonostas je oslikao slikar Nikola Nešković, deda Jovana Sterije Popovića.
                </p>
                <p>
                  Posebno zanimljiv i veoma redak detalj ikonostasa je rodoslov Isusa Hrista naslikan iznad bočnih vrata, prema Starom Zavetu.
                </p>
                <p>
                  Na vrhu ikonostasa, ispod Raspeća, prikazane su kosti koje simbolizuju Golgotu, dok su gore, iznad Raspeća, naslikovane scene Vaskrsenja, koje predstavljaju suštinu hrišćanske vere – pobedu nad smrću.
                </p>
              </section>


            </>

          )
          :
          (
            <><section lang="en">
              <p>
                <strong>Vršac</strong> is one of the most beautiful towns in Banat, located in the northeastern part of Serbia, in the southeastern part of Vojvodina.
              </p>
              <p>
                The town lies on the edge of the Pannonian Plain, at the foothills and slopes of the Vršac Mountains. Its territory also includes the Deliblato Sands Nature Reserve, known as the <em>"European Sahara"</em>.
              </p>
              <p>
                Vršac is 84 kilometers from Belgrade, 14 kilometers from the Romanian border, and 77 kilometers from Timișoara, the administrative center of western Romania. It is 147 kilometers away from Novi Sad.
              </p>
              <p>
                Nearby municipalities include Bela Crkva, Kovin, Alibunar, and Plandište, while larger surrounding settlements include Opovo, Kovačica, Alibunar, Plandište, Bela Crkva, Kovin, and Pančevo.
              </p>
            </section><img srcSet={`${vrsac22} 450w, ${vrsac2} `} alt="Vršac town 2" /><section lang="en">
                <p>
                  The name of the town <strong>Vršac</strong> was first mentioned in written sources in 1427, recorded as <em>Podvršan</em>.
                </p>
                <p>
                  The first settlements in this area date back to the Neolithic period, when traces of human activity from the Stone Age were found, confirmed by archaeological findings.
                </p>
                <p>
                  Settlements became more permanent with the arrival of the Slavs in the late Middle Ages. Before them, the region was inhabited by Cimmerians, Thracians, Celts, Scythians, Dacians, Romans, Sarmatians, Gepids, Avars, and other peoples.
                </p>
                <p>
                  The <strong>Vršac Tower</strong>, now a symbol of the town, was built in the first half of the 15th century during Hungarian rule. According to some sources, the fortress was built on the site of an old Roman watchtower.
                </p>
                <p>
                  Đurađ Branković ordered its construction after the fall of Smederevo as a defense against the Turks.
                </p>
                <p>
                  The Turks were expelled from Vršac in 1716 by Duke Eugene of Savoy, marking the beginning of a new era in the town's history. At that time, Vršac became part of the Tamiš Banat.
                </p>
                <p>
                  From 1717, colonists from Germany, France, Italy, and Spain, mostly vine-growers, settled here. At the same time, many Serbs and Aromanians (Cincars), mainly craftsmen and merchants, also moved to Vršac.
                </p>
                <p>
                  In 1804, the town received its Market Charter from Emperor Francis II.
                </p>
                <p>
                  At the beginning of the 20th century, Vršac had about 25,000 inhabitants, with developed small industry, strong trade, and renewed viticulture.
                </p>
                <p>
                  However, with the outbreak of World War I, the status of the Serbian population changed, and many prominent Serbs were exiled. Serbian-language newspapers ceased publication.
                </p>
              </section><img srcSet={`${vrsac33} 450w, ${vrsac3} `} alt="City park in Vršac" /><section lang="en">
                <p>
                  The <strong>City Park in Vršac</strong> is a must-visit destination for everyone who finds themselves in this beautiful town or its surroundings. Located just a few minutes' walk from the center, this park is the perfect place to relax and enjoy nature.
                </p>
                <p>
                  Discover with us the history and beauty of this green corner of Vršac. On the site of today's park, in the 18th century, there was a manor owned by the noble Šeribl family.
                </p>
                <p>
                  In 1797, Vršac purchased this estate, and by 1817, the manor was renamed City Manor, later becoming the City Park. Today, it is a beautiful green oasis that enchants all visitors with its natural beauty.
                </p>
                <p>
                  The City Park in Vršac dates back to the late 18th century, when the land was purchased and the construction of the city garden began. The park was designed in the English landscape style, with wide avenues and many secluded spots for citizens to rest.
                </p>
                <p>
                  Today, it is protected by the state as a natural monument of mixed garden architecture. The park covers almost 6 hectares, and its paths are lined with diverse deciduous and evergreen trees.
                </p>
                <p>
                  The green spaces are enriched with ornamental shrubs, bushes, and colorful flowers that bring lively colors and create a peaceful atmosphere.
                </p>
                <p>
                  The park features benches for rest, a children's playground, a fountain, and a charming café with a spacious terrace where you can enjoy refreshing drinks before continuing your exploration of the town.
                </p>
              </section><img srcSet={`${vrsac55} 450w, ${vrsac5} `} alt="Concordia City Museum" /><section lang="en">
                <p>
                  The <strong>Concordia City Museum</strong> represents an important cultural and historical institution that preserves the richness of the past and tradition of this region.
                </p>
                <p>
                  The first items for the Vršac City Museum began to be collected as early as 1882. The museum became municipal in 1894 and was officially opened to the public in 1898.
                </p>
                <p>
                  The museum primarily has a regional character, founded to preserve and display the town’s history. Over time, the museum developed and expanded to cover the history of the entire southern Banat.
                </p>
                <p>
                  In 1908, the museum acquired its own building, when it also merged with the city library.
                </p>
                <p>
                  The first curator, Felix Mileker, played a key role in the establishment and development of the museum. His contribution was significant, enriching the museum collection through field excavations and purchasing items from collectors.
                </p>
              </section><img srcSet={`${vrsac44} 450w, ${vrsac4} `} alt="Vršac Mountains" /><section lang="en">
                <p>
                  The <strong>Vršac Mountains</strong> rise in the heart of the Pannonian Plain, in the southeastern part of Banat. These mountains stretch east-west for 19 kilometers and are also known as the Vršac Hills.
                </p>
                <p>
                  The total area of the mountains is 170 square kilometers, of which 122 km² belong to Serbia, and 48 km² are in Romania. Here you can learn more about this natural area.
                </p>
                <p>
                  Geologically, the Vršac Mountains consist of rocks about 260 million years old (Paleozoic), surrounded by Neogene sediments about 60 million years old, including traces of the former Pannonian Sea from around 25 million years ago.
                </p>
                <p>
                  The highest peak of these mountains, and of all Vojvodina, is <strong>Gudurički vrh</strong>, which rises to 641 meters above sea level. Other known peaks include Lisičja glava (590 m), Đakov vrh (449 m), and Vršac Tower (399 m).
                </p>
                <p>
                  The northern slope of the Vršac Mountains is steep, while the southern slopes gradually descend into foothills where vineyards are located. These mountains were once an island in the Pannonian Sea, which is why they are classified as island mountains.
                </p>
                <p>
                  From their heights, there is a beautiful view of Vršac, Vojvodina, and Romania, allowing visitors to enjoy panoramic vistas.
                </p>
                <p>
                  Due to the specific climate, this region boasts a rich ecosystem with over 100 species of birds and more than 1000 species of rare plants.
                </p>
              </section><img srcSet={`${vrsac66} 450w, ${vrsac6} `} alt="Vršac Tower" /><section lang="en">
                <p>
                  On the westernmost slopes of the <strong>Vršac Mountains</strong>, on a hill that rises steeply above Vršac and the wide expanses of the fertile Banat plain, lie the remains of a smaller feudal fortress from the first half of the 15th century.
                </p>
                <p>
                  It is assumed that it was built by Despot <strong>Đurađ Branković</strong> after the fall of Smederevo, to protect his estates in the area of present-day Vojvodina.
                </p>
                <p>
                  Due to its position near the road that led from Timișoara to the Danube, the fortress had great strategic importance.
                </p>
                <p>
                  Of the entire structure, the dominant defensive tower has been best preserved, from which the entire fortress, as well as the hill on which it was built, got its name – <strong>Vršac Tower</strong>.
                </p>
              </section><img srcSet={`${vrsac77} 450w, ${vrsac7} `} alt="Mesić Monastery" /><section lang="en">
                <p>
                  The <strong>Mesić Monastery</strong> is a female monastery located at the foot of Magareće Hill, in the vineyard region east of Vršac. The church within the monastery was built in the late 15th or early 16th century, with elements from the Byzantine style to the Renaissance.
                </p>
                <p>
                  The monastery was abandoned after the Ottoman conquest of Banat but was renewed after the liberation of the Banat in the 18th century.
                </p>
                <p>
                  It is an important spiritual center and a place of pilgrimage, surrounded by vineyards and forests, contributing to the peaceful atmosphere of this beautiful region.
                </p>
              </section><img srcSet={`${vrsac88} 450w, ${vrsac8} `} alt="Austrian Fort in Vršac" /><section lang="en">
                <p>
                  The <strong>Austrian Fort</strong> in Vršac was constructed during the Habsburg period as part of the military frontier system to protect against Ottoman incursions.
                </p>
                <p>
                  It was built with solid fortifications, barracks, and storage facilities. Today, remnants of the fortification walls and buildings can be seen.
                </p>
                <p>
                  The fort represents an important historical site, illustrating the strategic military significance of Vršac throughout history.
                </p>
              </section><img srcSet={`${vrsac99} 450w, ${vrsac9} `} alt="Dvor eparhije Banatske" /><section lang="en">
                <p>
                  The main street in Vršac, <strong>Dvorska</strong>, is named after the <strong>Episcopal Palace</strong> (the word "dvor" in Serbian means palace).
                </p>
                <p>
                  This palace was built in 1672, and the park in its courtyard was designed in the French style, featuring two fountains and a baroque fence surrounding it.
                </p>
                <p>
                  Bishop Jovan Georgijević received permission from Empress Maria Theresa to build this palace as the residential seat of the Banat bishops.
                </p>
                <p>
                  The chapel inside the palace dates back to the 18th century and is dedicated to the Holy Archangels Michael and Gabriel.
                </p>
                <p>
                  The baroque iconostasis was painted by the artist Nikola Nešković, grandfather of Jovan Sterija Popović.
                </p>
                <p>
                  A particularly interesting and very rare detail of the iconostasis is the genealogy of Jesus Christ painted above the side doors, according to the Old Testament.
                </p>
                <p>
                  At the top of the iconostasis, below the Crucifixion, bones symbolizing Golgotha are depicted, while above the Crucifixion, scenes of the Resurrection are painted, representing the essence of the Christian faith – victory over death.
                </p>
              </section></>

          )}

      </div>
    </>
  );
};


export default Vrsac;