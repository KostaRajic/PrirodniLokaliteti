/* eslint-disable react/no-unknown-property */
import sid1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/desktop/sid2.jpg";
import sid2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/desktop/sid3.jpg";
import sid3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/desktop/sid4.jpg";
import sid4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/desktop/sid5.jpg";
import sid5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/desktop/sid6.jpg";
import sid6 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/desktop/sid7.jpg";
import sid7 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/desktop/sid8.jpg";
import sid8 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/desktop/sid9.jpg";
import sid11 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/mobile/Msid2.jpg";
import sid22 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/mobile/Msid3.jpg";
import sid33 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/mobile/Msid4.jpg";
import sid44 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/mobile/Msid5.jpg";
import sid55 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/mobile/Msid6.jpg";
import sid66 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/mobile/Msid7.jpg";
import sid77 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/mobile/Msid8.jpg";
import sid88 from "../../../../../assets/images/Vojvodina/SremskiOkrug/Sid/mobile/Msid9.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Sid = () => {
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
          {switchLanguage === "rs"
            ? "Opština Šid | Istorija, Priroda i Kultura Srema | Serbia Wonders"
            : "Municipality of Šid | History, Nature & Culture of Srem | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? "Opština Šid, najzapadnija opština Srema, poznata po bogatoj istoriji, prirodnim lepotama, kulturnom nasleđu i galeriji Save Šumanovića."
              : "Municipality of Šid, the westernmost municipality of Srem, known for its rich history, natural beauty, cultural heritage, and the Sava Šumanović gallery."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? "Šid, opština Šid, Srem, Dunav, Fruška gora, Sava, istorija, kultura, galerija Sava Šumanović, priroda, vinogradarstvo"
              : "Šid, municipality of Šid, Srem, Danube, Fruška Gora, Sava, history, culture, Sava Šumanović gallery, nature, viticulture"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sid`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sid"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sid"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sid"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(sremskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${sid5} 450w, ${sid5} `} alt="Šid 1" />

        <h1>Šid</h1>

        {switchLanguage === 'rs' ?
          (
            <>
              <section lang='sr'>
                <p>
                  Smeštena sa jedne strane uz <strong>Dunav</strong> i <strong>Frušku Goru</strong>, a sa druge uz <strong>Savu</strong> i <strong>Bosut</strong>, prostire se najzapadnija opština Srema – <strong>Opština Šid</strong>. Njene prednosti uključuju povoljan geografski položaj, široke šumske komplekse hrastova, lipa i bagrema, plodnu zemlju, kao i lepo uređena i prosperitetna sela.
                </p>
                <p>
                  Dobar saobraćajni sistem čini ovu opštinu atraktivnom za život i nove investicije. Administrativni centar, naseljeno mesto <strong>Šid</strong>, sa 18 okolnih naselja, pozicionira ovu opštinu kao jednu od ključnih <em>geostrateških tačaka Republike Srbije</em>.
                </p>
                <p>
                  Razvijena vizija daljeg napretka, stabilna planska osnova, vredni i gostoljubivi ljudi, kao i visoko kvalifikovani radnici i obrazovani kadrovi doprinose povoljnoj perspektivi ovog regiona.
                </p>
              </section>


              <img srcSet={`${sid22} 450w, ${sid2} `} alt="Šid 2" />

              <section lang='sr'>
                <p>
                  Nadmorska visina je <strong>104 m</strong>. To je sedište najzapadnije opštine Srema, smešteno između reke <strong>Dunav</strong> i obronaka <strong>Fruške gore</strong> na severu, te reke <strong>Save</strong> na jugu.
                </p>
                <p>
                  Područje na kojem je izgrađen <strong>Šid</strong> je poznato po <em>voćarstvu</em> i <em>vinogradarstvu</em>, sa velikim vinarskim podrumom.
                </p>
                <p>
                  U okviru poljoprivrede razvijena je i prehrambena industrija, posebno prerada žita, savremena industrijska klanica (koja je zatvorena, kao i većina velikih preduzeća nakon demokratskih promena 2000-ih), te fabrika za proizvodnju jestivog ulja.
                </p>
                <p>
                  Takođe, tu je bila prisutna tekstilna industrija i trikotaža (koje su takođe zatvorene posle demokratskih promena 2000-ih).
                </p>
                <p>
                  U gradu se nalazi spomen-kuća i galerija poznatog slikara <strong>Save Šumanovića</strong>.
                </p>

              </section>

              <img srcSet={`${sid77} 450w, ${sid7} `} alt="Šid 3" />


              <section lang='sr'>
                <p>
                  Ako postoji mesto gde se <strong>snovi i stvarnost</strong>, <strong>talenat i upornost</strong>,
                  <strong>marljivost i sreća</strong> spajaju, onda je to sigurno <strong>sremska ravnica</strong> i njena
                  najzapadnija opština <strong>Šid</strong>.
                </p>
                <p>
                  Ovo je prostor gde se prepliću <em>istorija</em>, <em>kultura</em>, <em>gastronomija</em>, <em>tradicija</em> i
                  <em>prirodne lepote</em>.
                </p>
                <p>
                  Opština <strong>Šid</strong> obuhvata <strong>687 kvadratnih kilometara</strong> i sastoji se od devetnaest
                  naseljenih mesta.
                </p>
                <p>
                  Smeštena je u jugozapadnom delu Srema, gde se <strong>sremska ravnica</strong>, koja je presečena rečnim tokovima,
                  uzdiže prema zapadnim padinama <strong>Fruške gore</strong>.
                </p>
                <p>
                  Upravo ovaj kontrast u pejzažima čini <strong>Šid</strong> posebnom i veoma atraktivnom.
                </p>
              </section>

              <img srcSet={`${sid5} 450w, ${sid5} `} alt="Šid 4" />

              <section lang='sr'>
                <p>
                  Teritorija opštine <strong>Šid</strong> bila je naseljavana još u <strong>praistoriji</strong>.
                </p>
                <p>
                  Prva naselja su nastajala na mestima koja su bila blizu <strong>vode</strong>, ali i drugih životnih potreba poput <strong>drveća</strong>, <strong>divljači</strong> i <strong>trske</strong>.
                </p>
                <p>
                  Jedno od poznatih naselja obalskog tipa bila je <strong>Gradina</strong> na levoj obali reke <strong>Bosut</strong>.
                </p>
                <p>
                  <strong>Gradina</strong> je značajan arheološki lokalitet, sa bogatim kulturnim materijalom koji datira od <em>neolita</em> do <em>rimske epohe</em>.
                </p>
                <p>
                  <strong>Rimljani</strong> su, takođe, ostavili značajan trag na ovom području.
                </p>
                <p>
                  Kroz teritoriju opštine prolazili su važni rimski putevi, koji su izgrađeni iz <em>vojno-strateških razloga</em>.
                </p>
                <p>
                  Arheološki nalazi, poput <strong>zlatne kačige</strong>, <strong>srebrnog novca</strong>, <strong>sarkofaga</strong> i delova <strong>konjske opreme</strong>,
                  svedoče o postojanju rimskih naselja duž važnih puteva.
                </p>
              </section>

              <img srcSet={`${sid66} 450w, ${sid6} `} alt="Šid 5" />

              <section lang='sr'>
                <p>
                  Nakon <strong>Rimljana</strong>, ove prostore su naselili <strong>Huni</strong>, <strong>Germani</strong> i <strong>Avari</strong>, koji su vladali Sremom više od dva veka.
                </p>
                <p>
                  Zajedno sa <strong>Avarima</strong> dolaze i <strong>Sloveni</strong>, koji su se najduže zadržali na ovom području.
                </p>
                <p>
                  Iz srednjeg veka potiče stari grad <strong>Berkasovo (Despotovac)</strong>, koji je pripadao <strong>Despotu Vuku Brankoviću</strong>, poznatom kao <em>Zmaj Ognjeni Vuk</em>, kao i tvrđava u naselju <strong>Morović</strong>, koja je pripadala despote <strong>Stefanu Štiljanoviću</strong>.
                </p>
                <p>
                  Početkom <strong>18. veka</strong>, osniva se <em>vojna granica</em> duž reka <strong>Save</strong>, <strong>Dunava</strong>, <strong>Tise</strong> i <strong>Morave</strong>, sa vojnim centrom u <strong>Petrovaradinu</strong>, koja je bila zamišljena kao zaštita od turskih upada.
                </p>
              </section>

              <img srcSet={`${sid11} 450w, ${sid1} `} alt="Šid 6" />

              <section lang='sr'>
                <p>
                  <strong>Galerija slika „Sava Šumanović“</strong> nalazi se u <strong>Šidu</strong>, u ulici <strong>Svetog Save br. 7</strong>, nekadašnjoj <em>Maršala Tita br. 11</em>, i u njoj je smešten najveći broj dela ovog velikog slikara.
                </p>
                <p>
                  <strong>Sava Šumanović</strong> (Vinkovci, 22. januar 1896 – Hrvatska Mitrovica, 30. avgust 1942) bio je jedan od najznačajnijih srpskih slikara 20. veka i ubrojan je među <strong>100 najpoznatijih Srba</strong>.
                </p>
                <p>
                  Galerija je osnovana <strong>1952. godine</strong> zahvaljujući poklonu slikareve majke, <strong>Perside Šumanović</strong>, koja je darovala <strong>417 slika</strong>, kao i kuću u kojoj su dela danas izložena.
                </p>
                <p>
                  Kuća, zajedno sa galerijom koja je nastala kasnije, predstavlja <em>nepokretno kulturno dobro</em> i <em>spomenik kulture od velikog značaja</em>.
                </p>
              </section>

              <img srcSet={`${sid88} 450w, ${sid8} `} alt="Šid 7" />

              <section lang='sr'>
                <p>
                  <strong>Srpska pravoslavna crkva Svetog Nikole u Šidu</strong> je značajna verska i kulturna građevina.
                </p>
                <p>
                  Smeštena u samom centru grada, ova crkva predstavlja <em>duhovnu središnjicu</em> za pravoslavne vernike u ovom regionu.
                </p>
                <p>
                  Građena je u periodu od <strong>19. veka</strong>, a njen izgled karakterišu elementi tradicionalne <strong>srpske crkvene arhitekture</strong>.
                </p>
                <p>
                  Unutrašnjost crkve je bogato ukrašena ikonama i freskama, a sam hram ima značajnu istorijsku vrednost, jer je kroz vekove bio središte verskog života, ali i značajan kulturni objekat u Šidu.
                </p>
                <p>
                  Crkva Svetog Nikole u Šidu ima duboke korene u lokalnoj zajednici, a kroz istoriju je bila mesto okupljanja vernika i održavanja važnih crkvenih obreda i slavlja.
                </p>
                <p>
                  Osim verske funkcije, crkva je i simbol tradicije i nasleđa srpskog naroda u ovom kraju.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  Located on one side by the <strong>Danube</strong> and <strong>Fruška Gora</strong>, and on the other by the <strong>Sava</strong> and <strong>Bosut</strong> rivers, spreads the westernmost municipality of Srem – the <strong>Municipality of Šid</strong>. Its advantages include a favorable geographic position, vast forest complexes of oaks, lindens, and acacias, fertile soil, as well as well-maintained and prosperous villages.
                </p>
                <p>
                  A good traffic system makes this municipality attractive for living and new investments. The administrative center, the settlement of <strong>Šid</strong>, along with 18 surrounding settlements, positions this municipality as one of the key <em>geostrategic points of the Republic of Serbia</em>.
                </p>
                <p>
                  A developed vision for further progress, a stable planning foundation, hardworking and hospitable people, as well as highly qualified workers and educated personnel contribute to the favorable outlook of this region.
                </p>
              </section>

              <img srcSet={`${sid22} 450w, ${sid2} `} alt="Šid 2" />

              <section lang="en">
                <p>
                  The altitude is <strong>104 m</strong>. It is the seat of the westernmost municipality of Srem, located between the <strong>Danube</strong> River and the slopes of <strong>Fruška Gora</strong> to the north, and the <strong>Sava</strong> River to the south.
                </p>
                <p>
                  The area where <strong>Šid</strong> was built is known for <em>fruit growing</em> and <em>viticulture</em>, with a large wine cellar.
                </p>
                <p>
                  Agriculture also supports the food industry, especially grain processing, a modern industrial slaughterhouse (which was closed, like most large companies after the democratic changes in the 2000s), and a factory producing edible oil.
                </p>
                <p>
                  There was also a textile industry and knitwear production (also closed after the democratic changes in the 2000s).
                </p>
                <p>
                  The town houses a memorial home and gallery of the renowned painter <strong>Sava Šumanović</strong>.
                </p>
              </section>

              <img srcSet={`${sid77} 450w, ${sid7} `} alt="Šid 3" />

              <section lang="en">
                <p>
                  If there is a place where <strong>dreams and reality</strong>, <strong>talent and perseverance</strong>, <strong>hard work and luck</strong> come together, then it is certainly the <strong>Srem plain</strong> and its westernmost municipality, <strong>Šid</strong>.
                </p>
                <p>
                  This is a space where <em>history</em>, <em>culture</em>, <em>gastronomy</em>, <em>tradition</em>, and <em>natural beauties</em> intertwine.
                </p>
                <p>
                  The municipality of <strong>Šid</strong> covers <strong>687 square kilometers</strong> and consists of nineteen settlements.
                </p>
                <p>
                  It is located in the southwestern part of Srem, where the <strong>Srem plain</strong>, intersected by river flows, rises towards the western slopes of <strong>Fruška Gora</strong>.
                </p>
                <p>
                  This contrast in landscapes makes <strong>Šid</strong> special and very attractive.
                </p>
              </section>

              <img srcSet={`${sid5} 450w, ${sid5} `} alt="Šid 4" />

              <section lang="en">
                <p>
                  The territory of the municipality of <strong>Šid</strong> was inhabited as early as the <strong>prehistoric era</strong>.
                </p>
                <p>
                  The first settlements emerged in places close to <strong>water</strong>, but also other life necessities such as <strong>trees</strong>, <strong>wild game</strong>, and <strong>reed</strong>.
                </p>
                <p>
                  One of the known coastal-type settlements was <strong>Gradina</strong> on the left bank of the <strong>Bosut</strong> River.
                </p>
                <p>
                  <strong>Gradina</strong> is an important archaeological site, with rich cultural material dating from the <em>Neolithic</em> to the <em>Roman era</em>.
                </p>
                <p>
                  The <strong>Romans</strong> also left a significant mark on this area.
                </p>
                <p>
                  Important Roman roads, built for <em>military-strategic reasons</em>, passed through the municipality's territory.
                </p>
                <p>
                  Archaeological finds, such as a <strong>golden helmet</strong>, <strong>silver coins</strong>, a <strong>sarcophagus</strong>, and parts of <strong>horse equipment</strong>, testify to the existence of Roman settlements along these important roads.
                </p>
              </section>

              <img srcSet={`${sid66} 450w, ${sid6} `} alt="Šid 5" />

              <section lang="en">
                <p>
                  After the <strong>Romans</strong>, the area was inhabited by the <strong>Huns</strong>, <strong>Germans</strong>, and <strong>Avars</strong>, who ruled Srem for more than two centuries.
                </p>
                <p>
                  Together with the <strong>Avars</strong> came the <strong>Slavs</strong>, who stayed the longest in this area.
                </p>
                <p>
                  From the Middle Ages originates the old town of <strong>Berkasovo (Despotovac)</strong>, which belonged to <strong>Despot Vuk Branković</strong>, known as <em>Zmaj Ognjeni Vuk</em>, as well as the fortress in the settlement of <strong>Morović</strong>, which belonged to Despot <strong>Stefan Štiljanović</strong>.
                </p>
                <p>
                  At the beginning of the <strong>18th century</strong>, a <em>military frontier</em> was established along the rivers <strong>Sava</strong>, <strong>Danube</strong>, <strong>Tisa</strong>, and <strong>Morava</strong>, with a military center in <strong>Petrovaradin</strong>, designed as protection against Turkish raids.
                </p>
              </section>

              <img srcSet={`${sid11} 450w, ${sid1} `} alt="Šid 6" />

              <section lang="en">
                <p>
                  The <strong>"Sava Šumanović" Art Gallery</strong> is located in <strong>Šid</strong>, at <strong>Svetog Save Street No. 7</strong>, formerly <em>Marshal Tito Street No. 11</em>, and houses the largest number of works by this great painter.
                </p>
                <p>
                  <strong>Sava Šumanović</strong> (Vinkovci, January 22, 1896 – Hrvatska Mitrovica, August 30, 1942) was one of the most important Serbian painters of the 20th century and is counted among the <strong>100 most famous Serbs</strong>.
                </p>
                <p>
                  The gallery was founded in <strong>1952</strong> thanks to the gift from the painter’s mother, <strong>Persida Šumanović</strong>, who donated <strong>417 paintings</strong> as well as the house where the works are exhibited today.
                </p>
                <p>
                  The house, together with the gallery that was later established, represents an <em>immovable cultural good</em> and a <em>cultural monument of great importance</em>.
                </p>
              </section>

              <img srcSet={`${sid88} 450w, ${sid8} `} alt="Šid 7" />

              <section lang="en">
                <p>
                  The <strong>Serbian Orthodox Church of St. Nicholas in Šid</strong> is an important religious and cultural building.
                </p>
                <p>
                  Located in the very center of the town, this church represents the <em>spiritual center</em> for Orthodox believers in this region.
                </p>
                <p>
                  It was built during the <strong>19th century</strong>, and its appearance is characterized by elements of traditional <strong>Serbian church architecture</strong>.
                </p>
                <p>
                  The interior of the church is richly decorated with icons and frescoes, and the temple has significant historical value, as it has been a center of religious life for centuries as well as an important cultural object in Šid.
                </p>
                <p>
                  The Church of St. Nicholas in Šid has deep roots in the local community, and throughout history, it was a place for gathering believers and holding important religious ceremonies and celebrations.
                </p>
                <p>
                  Besides its religious function, the church is also a symbol of the tradition and heritage of the Serbian people in this region.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default Sid;