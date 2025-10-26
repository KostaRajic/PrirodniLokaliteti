/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import valjevo1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/desktop/valjevo1.jpg";
import valjevo2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/desktop/valjevo2.jpg";
import valjevo3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/desktop/valjevo3.jpg";
import valjevo4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/desktop/valjevo4.jpg";
import valjevo5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/desktop/valjevo5.jpg";
import valjevo6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/desktop/valjevo6.jpg";
import valjevo7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/desktop/valjevo7.jpg";
import valjevo8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/desktop/valjevo8.jpg";
import valjevo11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/mobile/Mvaljevo1.jpg";
import valjevo22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/mobile/Mvaljevo2.jpg";
import valjevo33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/mobile/Mvaljevo3.jpg";
import valjevo44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/mobile/Mvaljevo4.jpg";
import valjevo55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/mobile/Mvaljevo5.jpg";
import valjevo66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/mobile/Mvaljevo6.jpg";
import valjevo77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/mobile/Mvaljevo7.jpg";
import valjevo88 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/Valjevo/mobile/Mvaljevo8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Valjevo = () => {
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
            ? "Valjevo – Kulturni i Istorijski Centar Zapadne Srbije | Serbia Wonders"
            : "Valjevo – Cultural and Historical Center of Western Serbia | Serbia Wonders"}
        </title>
        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Valjevo je grad bogate istorije, kulture i prirodnih lepota u Zapadnoj Srbiji. Otkrijte znamenitosti poput Tešnjara, Brankovine i muzeja, i upoznajte zavičaj generala Živojina Mišića."
              : "Valjevo is a city rich in history, culture, and natural beauty in Western Serbia. Discover landmarks like Tešnjar, Brankovina, and the local museums, and learn about the hometown of General Živojin Mišić."
          }
        />
        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Valjevo, Zapadna Srbija, Kolubara, Tešnjar, Brankovina, Živojin Mišić, kulturne manifestacije, turizam Valjevo, Narodni muzej Valjevo"
              : "Valjevo, Western Serbia, Kolubara, Tešnjar, Brankovina, Živojin Mišić, cultural events, Valjevo tourism, National Museum of Valjevo"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/valjevo`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/valjevo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/valjevo"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/valjevo"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(kulubarskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${valjevo11} 450w, ${valjevo1} `} alt="Valjevo 1" />

        <h1>Valjevo</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <>
                <section lang="sr">
                  <p>
                    <strong>Opština Valjevo</strong> smeštena je u <em>Zapadnoj Srbiji</em> i predstavlja administrativni centar Kolubarskog okruga, koji obuhvata još pet manjih opština: <strong>Mionicu, Osečinu, Ub, Lajkovac i Ljig</strong>, sa ukupno blizu <em>200.000 stanovnika</em>. Prema popisu iz 2002. godine, Valjevo broji <strong>96.761 stanovnika</strong>, od čega je 61.270 gradskog i prigradskog, dok 35.491 pripada seoskom stanovništvu. Opština se prostire na površini od <em>905 kvadratnih kilometara</em>, na prosečnoj nadmorskoj visini od <strong>185 metara</strong>. Grad leži na obalama reke <em>Kolubare</em>, pritoke Save, i odlikuje se blagom <strong>umerenokontinentalnom klimom</strong>, što doprinosi prijatnom životnom okruženju.
                  </p>
                </section>

                <img srcSet={`${valjevo22} 450w, ${valjevo2}`} alt="Valjevo 2" />

                <section lang="sr">
                  <p>
                    <strong>Valjevo</strong> se nalazi na povoljnom geografskom položaju, udaljeno oko <em>100 km od Beograda</em>, glavnog grada Srbije. Smešteno je blizu jedne od ključnih saobraćajnica – <strong>Ibarske magistrale</strong>, koja povezuje sever i jug zemlje. Grad je čvorište magistralnih puteva koji vode ka <em>Jadranskom moru, Bosni i Hercegovini, plodnoj Mačvi i žitnoj Vojvodini</em>, povezujući Valjevo sa značajnim centrima Zapadne Srbije poput <strong>Šapca, Užica, Loznice i Bajine Bašte</strong>. Pored drumskih veza, kroz Valjevo prolazi i železnička pruga <em>Beograd-Bar</em>, koja spaja srpsku prestonicu sa Crnom Gorom i Jadranskim morem, dodatno povećavajući njegov <strong>strateški značaj</strong>.
                  </p>
                </section>

                <img srcSet={`${valjevo33} 450w, ${valjevo3}`} alt="Narodni Muzej Valjevo" />

                <section lang="sr">
                  <p>
                    Valjevo se može pohvaliti <strong>bogatim kulturnim životom</strong>, sa brojnim institucijama koje čuvaju i promovišu kulturno nasleđe. Najvažnije ustanove kulture uključuju <em>Narodni muzej</em>, koji obuhvata Muzej Prvog i Drugog srpskog ustanka, kao i postavke u Brankovini, Zavod za zaštitu spomenika kulture, Istorijski arhiv, te Gradsku biblioteku koja ima odeljenja za nauku, zavičajnu literaturu i decu. Dom kulture u Valjevu nudi dobro opremljenu scenu sa salom od 630 mesta, a omladinski centar sadrži <strong>"Galeriju 34"</strong> koja organizuje izložbe i tribine. Grad se ponosi i sa dve elitne galerije: Modernom galerijom koja sadrži stalnu postavku <em>Ljube Popovića</em> (1953-1963) i zbirku umetničkih dela sa tematikom fantastike, te Internacionalnim umetničkim studiom <strong>"Radovan Mića Trnavac"</strong> koji organizuje izložbe stranih slikara. Kulturni centar grada čine i KUD <em>"Abrašević"</em>, koji ima hor, folklorni ansambl, muzički i dramski sastav, dok se predstave priređuju i u privatnom pozorištu <strong>"Mala scena"</strong> i Dramskom studiju valjevske gimnazije. Najpoznatije kulturne manifestacije u Valjevu su <em>Tešnjarške večeri</em> i <strong>Ju džez fest</strong>, uz letnje književne razgovore u dvorištu biblioteke i Desankine majske razgovore, koji se prate dodelom godišnje pesničke nagrade Zadužbine Desanke Maksimović u Brankovini.
                  </p>
                </section>

                <img srcSet={`${valjevo44} 450w, ${valjevo4}`} alt="Valjevo 3" />

                <section lang="sr">
                  <p>
                    <strong>Valjevo</strong> je grad koji je duboko vezan za istoriju Srbije, a jedan od njegovih najpoznatijih i najvažnijih stanovnika je <em>general Živojin Mišić</em>, veliki vojni strateg i heroj iz Prvog svetskog rata. Rođen je u julu 1855. godine u Zaklopači, malom selu nedaleko od Valjeva. Mišić je postao jedan od najistaknutijih srpskih vojnih lidera, poznat po svom doprinosu u odbrani Srbije i velikim pobedama tokom rata. Njegova najpoznatija pobeda bila je na <strong>Ceru 1914. godine</strong>, kada je srpska vojska pod njegovim komandama ostvarila jednu od najvećih srpskih vojnih pobeda u Prvom svetskom ratu, što je imalo ključni značaj za moral vojnika i dalji tok rata. Tokom rata, Mišić je predvodio srpske trupe i na drugim važnim frontovima, uključujući Kolubaru, gde je ponovo pokazao svoje izuzetne vojničke veštine. Zbog svojih izuzetnih zasluga, Mišić je postao počasni građanin Valjeva, a u njegovu čast postavljeni su spomenici i organizovane su brojne manifestacije. Spomenik Živojinu Mišiću nalazi se u centru Valjeva, a njegov lik i značaj za istoriju grada i Srbije uopšte ostaju <em>neizbrisivi</em>.
                  </p>
                </section>

                <img srcSet={`${valjevo55} 450w, ${valjevo5}`} alt="čaršija Tešnjar Valjevo" />

                <section lang="sr">
                  <p>
                    U samom centru grada, na desnoj obali reke <strong>Kolubare</strong>, nalazi se stara čaršija <em>Tešnjar</em>, koja potiče iz 17. veka, ali je današnji izgled dobila krajem 19. veka. Najstarija sačuvana građevina u Valjevu je <strong>Muselimov konak</strong> iz kraja 18. veka, u kojem su bili zatočeni knezovi Aleksa Nenadović i Ilija Birčanin pre pogubljenja u februaru 1804. godine. Ovaj događaj, poznat kao <em>"seča knezova"</em>, ubrzao je početak ustanka protiv višedecenijske turske okupacije, pa danas Muselimov konak služi kao <strong>Muzej Prvog i Drugog srpskog ustanka</strong>. Sa brežuljka iznad grada uzdiže se kula Nenadovića, izgrađena 1813. godine, koja je prvobitno služila kao barutana, a obnovio ju je knez Miloš Obrenović 1836. godine.
                  </p>
                </section>

                <img srcSet={`${valjevo88} 450w, ${valjevo8}`} alt="Valjevo Brankovina" />

                <section lang="sr">
                  <p>
                    U blizini Valjeva, nalazi se <strong>Brankovina</strong>, rodno mesto čuvene srpske porodice Nenadović, iz koje su potekli lideri Prvog srpskog ustanka, ministri prve srpske vlade, duhovne ličnosti i putopisci – knez Aleksa, prota Mateja, vojvode Jakov, Sima i Jevrem, književnik Čika Ljuba, kao i kraljica Persida, majka kralja Petra Oslobodioca. U Brankovini je detinjstvo provela i osnovnu školu završila najpoznatija srpska pesnikinja <em>Desanka Maksimović</em>, koja je rođena u obližnjoj Rabrovici. Desanka je tokom celog života bila duboko emotivno vezana za Brankovinu, redovno se vraćala i poslednje godine provela upravo tamo, gde je po sopstvenoj želji i sahranjena, pod starim hrastovima crkvene porte. Znamenitosti Brankovine okupljene su u kulturno-istorijskom kompleksu, koji uključuje crkvu Svetog Arhanđela – zadužbinu prote Mateje, školu prote Mateje, Desankinu školu, staru sudnicu, vajat porodice Nenadović, grbove Nenadovića i Desanke Maksimović, kao i stare kuće "sobrašice" u prelepoj crkvenoj porti Brankovine.
                  </p>
                </section>

                <img srcSet={`${valjevo66} 450w, ${valjevo6}`} alt="Dečiji park Pećina Valjevo" />

                <section lang="sr">
                  <p>
                    <strong>Dečiji park Pećina</strong> je jedno od omiljenih mesta za decu i roditelje u Valjevu. Nalazi se u prirodnoj oazi, koja je poznata po svojoj lepoti i zelenilu. Park je deo većeg turističkog kompleksa, sa sadržajem prilagođenim deci svih uzrasta. U njemu se nalaze igrališta, ljuljaške, klackalice i druge zabavne aktivnosti, a sve to u ambijentu prelepog parka sa puno drveća, staza i uređenih površina. Osim što je popularno mesto za decu, dečiji park Pećina nudi i prostor za šetnje i opuštanje za sve posetioce. Zeleni prostori i prijatan ambijent čine ga idealnim mestom za porodične izlete i rekreaciju u prirodi. U parku se povremeno organizuju kulturne manifestacije, predstave i edukativni programi za decu, što dodatno doprinosi njegovoj popularnosti i značaju u zajednici.
                  </p>
                </section>

                <img srcSet={`${valjevo77} 450w, ${valjevo7}`} alt="Ušće Gradca u Kolubaru" />

                <section lang="sr">
                  <p>
                    Ušće Gradca u Kolubaru je značajno iz nekoliko razloga, pre svega zbog svoje prirodne lepote i ekološke vrednosti. Gradac je mala reka koja protiče kroz planinske predela, a u svojoj dolini stvara slikovite pejzaže i bogatstvo flore i faune. Sam prostor ušća, sa svojih zelenih površina i reka koje se spajaju, često je korišćen za šetnje, rekreaciju i turističke aktivnosti. Ušće Gradca u Kolubaru predstavlja važan ekološki deo Valjevske opštine, a područje oko ovog mesta često je popularno među ljubiteljima prirode i ljubiteljima fotografije, koji žele da zabeleže spokojnu harmoniju koju ove dve reke stvaraju u svojoj spoji.
                  </p>
                </section>
              </>

            </>
          )
          :
          (
            <>

              <section lang="en"> <p> <strong>The Municipality of Valjevo</strong> is located in <em>Western Serbia</em> and serves as the administrative center of the Kolubara District, which includes five smaller municipalities: <strong>Mionica, Osečina, Ub, Lajkovac, and Ljig</strong>, with a total population close to <em>200,000 inhabitants</em>. According to the 2002 census, Valjevo has <strong>96,761 inhabitants</strong>, of which 61,270 belong to urban and suburban areas, while 35,491 belong to rural areas. The municipality covers an area of <em>905 square kilometers</em>, at an average altitude of <strong>185 meters</strong>. The city lies on the banks of the <em>Kolubara River</em>, a tributary of the Sava River, and is characterized by a mild <strong>temperate continental climate</strong>, which contributes to a pleasant living environment. </p> </section>
              <img srcSet={`${valjevo22} 450w, ${valjevo2}`} alt="Valjevo 2" />

              <section lang="en"> <p> <strong>Valjevo</strong> is situated in a favorable geographical location, about <em>100 km from Belgrade</em>, the capital of Serbia. It lies near one of the key traffic routes – the <strong>Ibar Highway</strong>, which connects the north and south of the country. The city is a hub of main roads leading to the <em>Adriatic Sea, Bosnia and Herzegovina, fertile Mačva, and the grain-producing Vojvodina</em>, connecting Valjevo with important centers of Western Serbia such as <strong>Šabac, Užice, Loznica, and Bajina Bašta</strong>. Besides road connections, the Belgrade–Bar railway passes through Valjevo, linking the Serbian capital with Montenegro and the Adriatic Sea, further increasing its <strong>strategic importance</strong>. </p> </section>
              <img srcSet={`${valjevo33} 450w, ${valjevo3}`} alt="National Museum Valjevo" />

              <section lang="en"> <p> Valjevo boasts a <strong>rich cultural life</strong>, with numerous institutions that preserve and promote cultural heritage. The most important cultural institutions include the <em>National Museum</em>, which encompasses the Museum of the First and Second Serbian Uprisings as well as exhibitions in Brankovina, the Institute for the Protection of Cultural Monuments, the Historical Archive, and the City Library, which has departments for science, regional literature, and children. The Cultural Center in Valjevo offers a well-equipped stage with a hall seating 630, while the youth center hosts <strong>"Gallery 34"</strong>, organizing exhibitions and discussions. The city is also proud of two elite galleries: the Modern Gallery, which holds a permanent exhibition of <em>Ljuba Popović</em> (1953-1963) and a collection of art with fantasy themes, and the International Art Studio <strong>"Radovan Mića Trnavac"</strong>, which organizes exhibitions of foreign painters. The city's cultural center also includes the folklore and cultural society <em>"Abrašević"</em>, which has a choir, folklore ensemble, music, and drama groups. Performances are also held in the private theater <strong>"Mala scena"</strong> and the Drama Studio of the Valjevo high school. The most famous cultural events in Valjevo are the <em>Tešnjar Evenings</em> and the <strong>Ju Jazz Fest</strong>, alongside summer literary talks in the library courtyard and the Desanka May Conversations, accompanied by the annual poetry award ceremony of the Desanka Maksimović Endowment in Brankovina. </p> </section>
              <img srcSet={`${valjevo44} 450w, ${valjevo4}`} alt="Valjevo 3" />

              <section lang="en"> <p> <strong>Valjevo</strong> is a city deeply connected to Serbian history, and one of its most famous and important residents is <em>General Živojin Mišić</em>, a great military strategist and hero from World War I. He was born in July 1855 in Zaklopača, a small village near Valjevo. Mišić became one of the most prominent Serbian military leaders, known for his contributions to the defense of Serbia and major victories during the war. His most famous victory was at <strong>Cer in 1914</strong>, when the Serbian army under his command achieved one of the greatest Serbian military victories in World War I, which had a crucial impact on the morale of the soldiers and the further course of the war. During the war, Mišić also led Serbian troops on other important fronts, including Kolubara, where he again demonstrated his exceptional military skills. Because of his outstanding merits, Mišić became an honorary citizen of Valjevo, and monuments and numerous events have been organized in his honor. The monument to Živojin Mišić is located in the center of Valjevo, and his image and significance for the history of the city and Serbia remain <em>indelible</em>. </p> </section>
              <img srcSet={`${valjevo55} 450w, ${valjevo5}`} alt="Tešnjar Bazaar Valjevo" />

              <section lang="en"> <p> In the very center of the city, on the right bank of the <strong>Kolubara River</strong>, lies the old bazaar <em>Tešnjar</em>, which dates back to the 17th century but acquired its present appearance at the end of the 19th century. The oldest preserved building in Valjevo is the <strong>Muselim's Konak</strong> from the late 18th century, where princes Aleksa Nenadović and Ilija Birčanin were imprisoned before their execution in February 1804. This event, known as the <em>"seizure of the princes"</em>, accelerated the start of the uprising against the decades-long Turkish occupation. Today, Muselim's Konak serves as the <strong>Museum of the First and Second Serbian Uprisings</strong>. From the hill above the city rises the Nenadović Tower, built in 1813, which originally served as a gunpowder magazine and was restored by Prince Miloš Obrenović in 1836. </p> </section>
              <img srcSet={`${valjevo88} 450w, ${valjevo8}`} alt="Valjevo Brankovina" />

              <section lang="en"> <p> Near Valjevo is <strong>Brankovina</strong>, the birthplace of the famous Serbian Nenadović family, from which leaders of the First Serbian Uprising, ministers of the first Serbian government, spiritual figures, and travelers emerged – prince Aleksa, archpriest Mateja, dukes Jakov, Sima, and Jevrem, writer Čika Ljuba, as well as Queen Persida, mother of King Peter the Liberator. In Brankovina, the most famous Serbian poetess <em>Desanka Maksimović</em> spent her childhood and completed elementary school; she was born in nearby Rabrovica. Desanka remained deeply emotionally connected to Brankovina throughout her life, regularly returned, and spent her last years there by her own wish, where she is buried under old oak trees in the churchyard. The landmarks of Brankovina are gathered in a cultural-historical complex, which includes the Church of the Holy Archangel – the endowment of archpriest Mateja, the school of archpriest Mateja, Desanka’s school, the old courthouse, the Nenadović family cabin, the coats of arms of the Nenadović family and Desanka Maksimović, as well as old houses ("sobrašice") in the beautiful churchyard of Brankovina. </p> </section>
              <img srcSet={`${valjevo66} 450w, ${valjevo6}`} alt="Children's Park Pećina Valjevo" />

              <section lang="en"> <p> <strong>Children's Park Pećina</strong> is one of the favorite places for children and parents in Valjevo. It is located in a natural oasis, known for its beauty and greenery. The park is part of a larger tourist complex, with facilities adapted for children of all ages. It features playgrounds, swings, seesaws, and other fun activities, all set in a beautiful park with many trees, paths, and well-maintained areas. Besides being a popular place for children, Children's Park Pećina offers space for walks and relaxation for all visitors. The green spaces and pleasant environment make it an ideal spot for family outings and recreation in nature. Occasionally, cultural events, performances, and educational programs for children are organized in the park, which further contributes to its popularity and significance within the community. </p> </section>
              <img srcSet={`${valjevo77} 450w, ${valjevo7}`} alt="Confluence of Gradac into Kolubara" />

              <section lang="en"> <p> The confluence of the Gradac River into the Kolubara River is significant for several reasons, primarily due to its natural beauty and ecological value. Gradac is a small river flowing through mountainous terrain, creating picturesque landscapes and rich flora and fauna in its valley. The confluence area, with its green surfaces and merging rivers, is often used for walking, recreation, and tourist activities. The confluence of Gradac into Kolubara represents an important ecological part of the Valjevo municipality, and the area around this spot is popular among nature lovers and photographers who want to capture the peaceful harmony created by the meeting of these two rivers. </p> </section>

            </>
          )}


      </div>
    </>
  );
};


export default Valjevo;