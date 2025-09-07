/* eslint-disable react/no-unknown-property */
import sub6 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/desktop/sub6.jpg";
import sub2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/desktop/sub2.jpg";
import sub3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/desktop/sub3.jpg";
import sub4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/desktop/sub4.jpg";
import sub5 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/desktop/sub5.jpg";
import sub7 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/desktop/sub7.jpg";
import sub8 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/desktop/sub8.jpg";
import sub66 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/mobile/Msub6.jpg";
import sub22 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/mobile/Msub2.jpg";
import sub33 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/mobile/Msub3.jpg";
import sub44 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/mobile/Msub4.jpg";
import sub55 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/mobile/Msub5.jpg";
import sub77 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/mobile/Msub7.jpg";
import sub88 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/mobile/Msub8.jpg";

import spomenPetarKaradjordjevic from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/Spomenici/spomenPetarKaradjordjevic.jpg";
import spomenSvetomTrojstvu from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/Spomenici/spomenSvetoTrojstvo.jpg";
import spomenIvanuSaricu from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/Subotica/Spomenici/spomenIvanSaric.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { servernoBackiPathRoutes } from "./SevernoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Subotica = () => {
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
            ? 'Subotica | Kultura, arhitektura i priroda severne Srbije | Serbia Wonders'
            : 'Subotica | Culture, Architecture & Nature of Northern Serbia | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Subotica, grad bogate istorije i arhitekture, poznata po sinagogi, secesijskim zgradama, parkovima i blizini Palićkog jezera. Kultura, turizam i opuštanje na severu Srbije.'
              : 'Subotica, a city rich in history and architecture, known for its synagogue, Art Nouveau buildings, parks, and proximity to Palic Lake. Culture, tourism and relaxation in northern Serbia.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Subotica, turizam Subotica, Subotička sinagoga, Palić, arhitektura secesije, kultura Vojvodine, sever Srbije, znamenitosti Subotice, parkovi Subotica, trg slobode'
              : 'Subotica, Subotica tourism, Subotica synagogue, Palic Lake, Art Nouveau architecture, Vojvodina culture, northern Serbia, Subotica landmarks, Subotica parks, Freedom Square'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/subotica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/subotica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/subotica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-backi/subotica"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(servernoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${sub55} 450w, ${sub5} `} alt="Subotica 1" />

        <h2>Subotica</h2>

        {switchLanguage === 'rs' ?
          (
            <>


              <section lang="sr">
                <p>
                  <strong>Grad Subotica</strong>, smešten u <em>severnom delu Republike Srbije</em>, u blizini granice sa Mađarskom, ima prosečnu nadmorsku visinu od 114 metara.
                </p>
                <p>
                  Nalazi se 40 metara iznad nivoa reke Tise u Kanjiži i 32 metra iznad nivoa Dunava u Bajji.
                  Kroz grad prolazi međunarodni put E-75, a do graničnog prelaza Kelebija udaljenost je 10 kilometara, dok je do Horgoša 30 kilometara.
                </p>
                <p>
                  Na severu se pruža plodna peščara, poznata po vinogradima i voćnjacima, dok je južno zemljište bogato oranicama.
                </p>
              </section>

              <img srcSet={`${sub22} 450w, ${sub2} `} alt="Subotica 2" />

              <section lang="sr">
                <p>
                  <strong>Subotica</strong> je grad bogate istorije i kulturne baštine, a njegovi živopisni parkovi, šetališta i kafići čine ga jednim od najlepših mesta za opuštanje u Srbiji.
                </p>
                <p>
                  Grad je poznat po svojoj secesijskoj arhitekturi, a šetnje kroz njegov istorijski centar pružaju uvid u prelepe zgrade, trgove i ulice koje odišu starim šarmom.
                </p>
                <p>
                  Jedno od najlepših mesta za šetanje u Subotici je <em>Gradski park</em>, smešten u samom centru grada. Ovaj park, sa uređenim stazama, jezerom i zelenilom, nudi mirnu atmosferu i prostor za uživanje u prirodi.
                </p>
                <p>
                  U parku se nalazi i spomenik Šećerani, a tokom proleća i leta često se mogu videti posetioci koji uživaju u opuštanju ili šetnji uz jezero.
                </p>
                <p>
                  Nedaleko od parka, na <em>Trgu slobode</em>, smešten je centralni deo grada sa prelepim kafićima, restoranima i radnjama.
                </p>
                <p>
                  Ovaj trg je omiljeno okupljalište kako lokalnog stanovništva, tako i turista. Kafići na Trgu slobode često nude sedenje na otvorenom, što omogućava uživanje u okruženju sa pogledom na impozantne zgrade u stilu secesije, poput Subotičke sinagoge ili Gradske kuće.
                </p>
              </section>

              <img srcSet={`${sub33} 450w, ${sub3} `} alt="Subotica 3" />

              <section lang="sr">
                <p>
                  Danas grad sa okolnim opštinama ima oko <strong>150.000 stanovnika</strong>: Mađara, Hrvata, Bunjevaca, Srba i drugih naroda.
                </p>
                <p>
                  Oko grada je podignuto 18 većih naselja: Bajmok, Bački Vinogradi, Bačko Dušanovo, Bikovo, Višnjevac, Gornji Tavankut, Donji Tavankut, Đurđin, Kelebija, Ljutovo, Mala Bosna, Mišićevo, Novi Žednik, Palić, Stari Žednik, Hajdukovo, Čantavir i Šupljak.
                </p>
                <p>
                  Grad je povezan sa starim letovalištem i jezerom <strong>Palić</strong>.
                </p>
              </section>

              <img srcSet={`${sub44} 450w, ${sub4} `} alt="Subotica 4" />

              <section lang="sr">
                <p>
                  Pored toga, <strong>Subotica</strong> je i ekonomski centar, poznata po poljoprivredi, trgovini i industriji.
                </p>
                <p>
                  Takođe, grad se ponosi bogatom tradicijom u obrazovanju i nauci.
                </p>
                <p>
                  U njegovoj blizini nalaze se prirodne lepote, poput <strong>Palićkog jezera</strong>, koje dodatno doprinosi turizmu i kvalitetu života.
                </p>
              </section>

              <div
                className="displayFlex"
              >
                <div>
                  <img src={spomenPetarKaradjordjevic} alt="Petar1 Karadjordjevic" />
                  <p>Kralj Petar Prvi Karađorđević</p>
                </div>
                <div>
                  <img src={spomenSvetomTrojstvu} alt="Sveto Trojstvo" />
                  <p>Sveto Trojstvo</p>
                </div>
                <div>
                  <img src={spomenIvanuSaricu} alt="Ivan Saric" />
                  <p>Ivan Šarić</p>
                </div>
              </div>

              <img srcSet={`${sub77} 450w, ${sub7} `} alt="Suboticka sinagoga" style={{ marginTop: "30px" }} />

              <section lang="sr">
                <p>
                  <strong>Subotička sinagoga</strong> je jedan od najlepših i najvažnijih arhitektonskih spomenika u Subotici, kao i jedan od najboljih primera secesijske arhitekture u Srbiji.
                </p>
                <p>
                  Izgrađena je između 1902. i 1906. godine prema projektu arhitekte Ferenca Rajhla, a poznata je po svojoj jedinstvenoj spoljašnjoj i unutrašnjoj dekoraciji.
                </p>
                <p>
                  Sinagoga je karakteristična po kombinaciji različitih stilova, među kojima dominira maurski, art-nouveau i secesijski stil.
                </p>
                <p>
                  Jedan od najistaknutijih elemenata ove sinagoge je kupola, koja je ukrašena prelepim mozaicima i plavetnilom, stvarajući jedinstvenu atmosferu.
                </p>
                <p>
                  Unutrašnjost je bogato ukrašena i sačuvana u gotovo originalnom stanju, uključujući vitraže, zidne freske i drvene elemente.
                </p>
                <p>
                  Sinagoga je, osim svoje religijske funkcije, igrala važnu kulturnu ulogu u životu jevrejske zajednice Subotice.
                </p>
                <p>
                  Danas je <strong>Subotička sinagoga</strong> zaštićeni spomenik kulture i jedno od najposećenijih mesta u Subotici, koja privlači ljubitelje arhitekture i istorije.
                </p>
                <p>
                  U njoj se često organizuju koncerti, izložbe i kulturne manifestacije, čime se i dalje čuva bogato kulturno nasleđe ovog kraja.
                </p>
              </section>

              <img srcSet={`${sub66} 450w, ${sub6} `} alt="Subotica 5" />

              <section lang="sr">
                <p>
                  <strong>Gradska kuća u Subotici</strong> je najveća, a po mnogima i najlepša građevina Subotice.
                </p>
                <p>
                  Podignuta je za dve godine, od 1908. do 1910, ali su vrhunski majstori onog vremena još pune dve godine ukrašavali njene enterijere.
                </p>
                <p>
                  Podignuta je po projektu Marcela Komora (1868-1944.) i Dežea Jakaba (1864-1932.), budimpeštanskih arhitekata, u tada vrlo modernom stilu – mađarskoj varijanti secesije.
                </p>
                <p>
                  Ukrašena je s bezbroj šara stilizovanog cveta. Gradska kuća je skladan spoj umetnosti i zanata.
                </p>
                <p>
                  Visoka je 76m, terasa vidikovca je na 45,5m, duga 105,08m, široka 55,56m, a prostire se na 5.838 kvadratnih metara.
                </p>
              </section>


            </>
          )
          :
          (

            <>
              <section lang="en">
                <p>
                  <strong>The city of Subotica</strong>, located in the <em>northern part of the Republic of Serbia</em>, near the border with Hungary, has an average altitude of 114 meters.
                </p>
                <p>
                  It is situated 40 meters above the level of the Tisa River in Kanjiža and 32 meters above the Danube River in Baja. The international road E-75 passes through the city, and the distance to the Kelebija border crossing is 10 kilometers, while to Horgoš it is 30 kilometers.
                </p>
                <p>
                  To the north stretches fertile sandy terrain, known for its vineyards and orchards, while the land to the south is rich in arable fields.
                </p>
              </section>

              <img srcSet={`${sub22} 450w, ${sub2} `} alt="Subotica 2" />

              <section lang="en">
                <p>
                  <strong>Subotica</strong> is a city rich in history and cultural heritage, and its vibrant parks, promenades, and cafés make it one of the most beautiful places to relax in Serbia.
                </p>
                <p>
                  The city is known for its Art Nouveau architecture, and walks through its historic center offer a glimpse of beautiful buildings, squares, and streets exuding old-world charm.
                </p>
                <p>
                  One of the most beautiful places to walk in Subotica is the <em>City Park</em>, located in the very center of the city. This park, with its arranged paths, lake, and greenery, offers a peaceful atmosphere and a space to enjoy nature.
                </p>
                <p>
                  The park also features the Šećerana monument, and during spring and summer, visitors often enjoy relaxing or walking along the lake.
                </p>
                <p>
                  Not far from the park, at <em>Freedom Square</em>, is the city’s central area with beautiful cafés, restaurants, and shops.
                </p>
                <p>
                  This square is a favorite gathering spot for both locals and tourists. The cafés at Freedom Square often offer outdoor seating, allowing enjoyment of the surroundings with views of impressive Art Nouveau buildings such as the Subotica Synagogue or the City Hall.
                </p>
              </section>

              <img srcSet={`${sub33} 450w, ${sub3} `} alt="Subotica 3" />

              <section lang="en">
                <p>
                  Today, the city along with surrounding municipalities has around <strong>150,000 inhabitants</strong>: Hungarians, Croats, Bunjevci, Serbs, and other ethnic groups.
                </p>
                <p>
                  Around the city, 18 larger settlements have been established: Bajmok, Bački Vinogradi, Bačko Dušanovo, Bikovo, Višnjevac, Gornji Tavankut, Donji Tavankut, Đurđin, Kelebija, Ljutovo, Mala Bosna, Mišićevo, Novi Žednik, Palić, Stari Žednik, Hajdukovo, Čantavir, and Šupljak.
                </p>
                <p>
                  The city is connected with the old resort and lake <strong>Palić</strong>.
                </p>
              </section>

              <img srcSet={`${sub44} 450w, ${sub4} `} alt="Subotica 4" />

              <section lang="en">
                <p>
                  Besides that, <strong>Subotica</strong> is an economic center, known for agriculture, trade, and industry.
                </p>
                <p>
                  The city also prides itself on a rich tradition in education and science.
                </p>
                <p>
                  Nearby are natural beauties, such as <strong>Palić Lake</strong>, which further contribute to tourism and quality of life.
                </p>
              </section>

              <div className="displayFlex">
                <div>
                  <img src={spomenPetarKaradjordjevic} alt="Petar I Karadjordjevic" />
                  <p>King Peter I Karađorđević</p>
                </div>
                <div>
                  <img src={spomenSvetomTrojstvu} alt="Holy Trinity" />
                  <p>Holy Trinity</p>
                </div>
                <div>
                  <img src={spomenIvanuSaricu} alt="Ivan Šarić" />
                  <p>Ivan Šarić</p>
                </div>
              </div>

              <img srcSet={`${sub77} 450w, ${sub7} `} alt="Subotica Synagogue" style={{ marginTop: "30px" }} />

              <section lang="en">
                <p>
                  <strong>The Subotica Synagogue</strong> is one of the most beautiful and important architectural monuments in Subotica, as well as one of the best examples of Art Nouveau architecture in Serbia.
                </p>
                <p>
                  It was built between 1902 and 1906 according to the design of architect Ferenc Reichl, and is known for its unique exterior and interior decoration.
                </p>
                <p>
                  The synagogue is characterized by a combination of different styles, dominated by Moorish, Art Nouveau, and Secessionist styles.
                </p>
                <p>
                  One of the most prominent elements of this synagogue is the dome, decorated with beautiful mosaics and shades of blue, creating a unique atmosphere.
                </p>
                <p>
                  The interior is richly decorated and preserved in almost original condition, including stained glass, wall frescoes, and wooden elements.
                </p>
                <p>
                  Besides its religious function, the synagogue played an important cultural role in the life of the Jewish community of Subotica.
                </p>
                <p>
                  Today, the <strong>Subotica Synagogue</strong> is a protected cultural monument and one of the most visited places in Subotica, attracting lovers of architecture and history.
                </p>
                <p>
                  Concerts, exhibitions, and cultural events are often held there, thus preserving the rich cultural heritage of this region.
                </p>
              </section>

              <img srcSet={`${sub66} 450w, ${sub6} `} alt="Subotica 5" />

              <section lang="en">
                <p>
                  <strong>The City Hall of Subotica</strong> is the largest and, according to many, the most beautiful building in Subotica.
                </p>
                <p>
                  It was built in two years, from 1908 to 1910, but top craftsmen of the time spent two more years decorating its interiors.
                </p>
                <p>
                  It was designed by Marcel Komor (1868–1944) and Dezső Jakab (1864–1932), architects from Budapest, in the then very modern style – the Hungarian variant of Secession.
                </p>
                <p>
                  It is decorated with countless patterns of stylized flowers. The City Hall is a harmonious blend of art and craft.
                </p>
                <p>
                  It is 76 meters high, the observation terrace is at 45.5 meters, the building is 105.08 meters long, 55.56 meters wide, and covers an area of 5,838 square meters.
                </p>
              </section>
            </>
          )}


      </div>
    </>
  );
};


export default Subotica;