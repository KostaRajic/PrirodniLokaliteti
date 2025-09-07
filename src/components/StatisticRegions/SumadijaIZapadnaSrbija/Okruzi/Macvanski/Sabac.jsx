/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import sabac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/desktop/sabac1.jpg";
import sabac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/desktop/sabac2.jpg";
import sabac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/desktop/sabac3.jpg";
import sabac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/desktop/sabac4.jpg";
import sabac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/desktop/sabac5.jpg";
import sabac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/desktop/sabac6.jpg";
import sabac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/desktop/sabac7.jpg";
import sabac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/mobile/Msabac1.jpg";
import sabac22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/mobile/Msabac2.jpg";
import sabac33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/mobile/Msabac3.jpg";
import sabac44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/mobile/Msabac4.jpg";
import sabac55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/mobile/Msabac5.jpg";
import sabac66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/mobile/Msabac6.jpg";
import sabac77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Sabac/mobile/Msabac7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { macvanskiOkrugPathRoutes } from "./MacvanskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Sabac = () => {
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
            ? "Šabac – Grad istorije, kulture i reke Save | Serbia Wonders"
            : "Šabac – City of History, Culture and the Sava River | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Šabac, grad na Savi, bogat je istorijom, kulturom i arhitekturom. Posetite šabačku tvrđavu, Narodni muzej, gradski park i Saborni hram, i otkrijte jedinstven duh severozapadne Srbije."
              : "Šabac, a city on the Sava River, is rich in history, culture and architecture. Visit the Šabac Fortress, National Museum, City Park, and Cathedral Church, and discover the unique spirit of northwest Serbia."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Šabac, Sava, Šabačka tvrđava, Narodni muzej Šabac, Gospodar Jevremova ulica, Saborni hram, istorija Šapca, kultura, Mačva, Pocerina, Posavina, Srbija"
              : "Šabac, Sava River, Šabac Fortress, National Museum Šabac, Gospodar Jevremova Street, Cathedral Church, Šabac history, culture, Mačva, Pocerina, Posavina, Serbia"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/sabac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/sabac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/sabac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/sabac"
        />
      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(macvanskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${sabac11} 450w, ${sabac1} `} alt="Šabac 1" />

        <h2 style={{ color: 'white' }}>Šabac</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Šabac</strong> je jedan od <strong>značajnijih i prepoznatljivijih gradova</strong> u <em>Srbiji</em>,
                  smešten u <em>severozapadnom delu zemlje</em>, na tromeđi <strong>Mačve</strong>, <strong>Pocerine</strong> i
                  <strong>Posavine</strong>, na desnoj obali reke <strong>Save</strong>. Grad pokriva površinu od <strong>795 km²</strong> i
                  sastoji se od <strong>49 katastarskih opština</strong> i <strong>52 naselja</strong>, sa ukupnim brojem
                  stanovnika od <strong>122.893</strong>. Graniči se sa opštinama <strong>Bogatić</strong>, <strong>Loznica</strong>, <strong>Vladimirci</strong>
                  i <strong>Koceljeva</strong>. U njegovom zaleđu nalaze se tri <em>mikroregije</em>: <strong>Mačva</strong> na
                  zapadu, <strong>Pocerina</strong> na jugu i <strong>Posavina</strong> na istoku. Šabac se nalazi na <strong>80 metara</strong>
                  nadmorske visine i ima <em>ravničarski, nizijski i dolinski karakter</em>. <strong>Saobraćajno</strong> je
                  odlično povezan sa okolinom.
                </p>
              </section>

              <img srcSet={`${sabac22} 450w, ${sabac2}`} alt="Šabac 2" />

              <section lang="sr">
                <p>
                  <strong>Centar Šapca</strong> je <em>atraktivno i dinamično područje</em> koje nudi brojne
                  <strong>turističke sadržaje</strong> i <strong>znamenitosti</strong>. Grad je bogat <em>istorijskim, kulturnim</em>
                  i <em>arhitektonskim nasleđem</em>, a njegov centralni deo je <strong>središte kulturnih i društvenih dešavanja</strong>.
                  U centru se nalaze i važne institucije kao što su <strong>Muzej Šabac</strong> i <strong>Narodna biblioteka</strong>.
                  Za ljubitelje kulture, organizuju se <em>koncerti, izložbe i pozorišne predstave</em>, a
                  <strong>Šabačko pozorište</strong> je jedno od važnijih kulturnih mesta. Grad je poznat i po
                  manifestacijama poput <strong>Šabačkog festivala</strong> i <strong>proslave Mišarske bitke</strong>.
                </p>
              </section>

              <img srcSet={`${sabac33} 450w, ${sabac3}`} alt="Gradski park Šabac" />

              <section lang="sr">
                <p>
                  <strong>Gradski park u Šapcu</strong>, osnovan u <strong>19. veku</strong>, nalazi se na mestu bivše
                  <em>Jevremove bašte</em>. U njemu su postavljene biste značajnih ličnosti poput
                  <strong>Kneza Ive od Semberije</strong>, <strong>Koste Abraševića</strong> i <strong>Janka Veselinovića</strong>.
                  Park ima i <em>dve fontane</em>, <em>sportske terene</em>, i povezan je sa <strong>Knez Mihailovom ulicom</strong>,
                  poznatom po stihovima pesme <em>„Ulica jorgovana“</em> koju je napisao <strong>Ivan Glišić</strong>.
                </p>
              </section>

              <img srcSet={`${sabac44} 450w, ${sabac4}`} alt="Narodni Muzej Šabac" />

              <section lang="sr">
                <p>
                  <strong>Narodni muzej u Šapcu</strong> osnovan je <strong>1934. godine</strong> i od <strong>1954. godine</strong> se
                  nalazi u zgradi bivše <strong>Polugimnazije</strong>. Muzej sadrži <em>izložbeni prostor od 800 m²</em>,
                  zbirke iz <strong>praistorije, antike, numizmatike</strong> i <strong>likovne umetnosti</strong>, sa delima
                  umetnika kao što su <strong>Stevan Čalić</strong>, <strong>Mara Lukić-Jelešić</strong>, <strong>Milić od Mačve</strong>.
                  <strong>Istorijsko odeljenje</strong> čuva ordenje: <strong>Francuski ratni krst</strong>, <strong>Češkoslovački ratni krst</strong>,
                  <strong>Karađorđeva zvezda sa mačevima</strong>. <strong>Etno-zbirka</strong> prikazuje enterijer <em>seoske kuće sa ognjištem</em>.
                </p>
              </section>

              <img srcSet={`${sabac55} 450w, ${sabac5}`} alt="Šabačka tvrđava" />

              <section lang="sr">
                <p>
                  <strong>Šabačka tvrđava</strong> se nalazi na desnoj obali <strong>Save</strong> i potiče iz <strong>1470. godine</strong>,
                  a današnja forma potiče iz <strong>17. veka</strong>. Bila je <em>odbrambeni objekat</em> na granici sa
                  <strong>Evropom</strong>, i više puta je prelazila <em>iz ruke u ruku</em>. Ima osnovu <strong>četvorougla</strong>
                  sa <em>četiri kružne kule</em>. Pripada redu <strong>„tvrdih gradova”</strong> kakvih je Srbija imala
                  preko <strong>200 u srednjem veku</strong>, posebno u vreme <strong>Nemanjića</strong>.
                </p>
              </section>

              <img srcSet={`${sabac66} 450w, ${sabac6}`} alt="Gospodar Jevremova ulica Šabac" />

              <section lang="sr">
                <p>
                  <strong>Gospodar Jevremova ulica</strong> ima status <strong>kulturno-istorijskog dobra</strong>. Nazvana
                  je po <strong>Jevremu Obrenoviću</strong> <em>1890. godine</em> i od samog početka je bila deo
                  <strong>centra Šapca</strong>. Imala je <em>orijentalni karakter</em>, koji se u <strong>19. veku</strong> menjao
                  pod uticajem <em>srednjoevropske arhitekture</em>. Početkom <strong>20. veka</strong> dolazi do
                  <em>modernizacije i gubitka autentičnosti</em>. Danas je ulica obnovljena i <strong>zaštićena</strong> kao
                  kulturna celina.
                </p>
              </section>

              <img srcSet={`${sabac77} 450w, ${sabac7}`} alt="Saborni hram Šabac" style={{ marginBottom: "-10px" }} />

              <section lang="sr">
                <p>
                  <strong>Saborni hram Svetih Prvovrhovnih Apostola Petra i Pavla</strong>, poznat kao
                  <em>„šabačka crkva“</em>, je <strong>najstarija očuvana crkva</strong> u <em>Šapcu</em> i <strong>katedralni hram šabačkih episkopa</strong>.
                  Gradnja se odvijala nakon <strong>ustanka od 1804. do 1815.</strong>, kada je <em>Srbija ulazila u novo doba</em>.
                  Hram simbolizuje <em>duhovni oporavak</em> srpskog naroda i njegove <strong>prve korake ka slobodi</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Šabac</strong> is one of the <strong>most important and recognizable cities</strong> in <em>Serbia</em>,
                  located in the <em>northwestern part of the country</em>, at the crossroads of <strong>Mačva</strong>, <strong>Pocerina</strong>, and
                  <strong>Posavina</strong>, on the right bank of the <strong>Sava River</strong>. The city covers an area of <strong>795 km²</strong> and
                  consists of <strong>49 cadastral municipalities</strong> and <strong>52 settlements</strong>, with a total population of <strong>122,893</strong>.
                  It borders the municipalities of <strong>Bogatić</strong>, <strong>Loznica</strong>, <strong>Vladimirci</strong>, and <strong>Koceljeva</strong>.
                  Behind the city lie three <em>microregions</em>: <strong>Mačva</strong> to the west, <strong>Pocerina</strong> to the south, and <strong>Posavina</strong> to the east.
                  Šabac is situated at an elevation of <strong>80 meters</strong> above sea level and features a <em>lowland, plain, and valley character</em>.
                  It is <strong>well-connected</strong> in terms of transportation.
                </p>
              </section>

              <img srcSet={`${sabac22} 450w, ${sabac2}`} alt="Šabac 2" />

              <section lang="en">
                <p>
                  <strong>The center of Šabac</strong> is an <em>attractive and dynamic area</em> offering numerous
                  <strong>tourist attractions</strong> and <strong>landmarks</strong>. The city is rich in <em>historical, cultural</em>,
                  and <em>architectural heritage</em>, and its central part serves as the <strong>hub of cultural and social events</strong>.
                  Important institutions such as the <strong>Šabac Museum</strong> and the <strong>National Library</strong> are located in the city center.
                  For culture enthusiasts, there are <em>concerts, exhibitions, and theater performances</em>, and
                  the <strong>Šabac Theater</strong> is one of the city's key cultural venues. The city is also known for
                  events such as the <strong>Šabac Festival</strong> and the <strong>Mišar Battle Commemoration</strong>.
                </p>
              </section>

              <img srcSet={`${sabac33} 450w, ${sabac3}`} alt="Šabac City Park" />

              <section lang="en">
                <p>
                  <strong>The Šabac City Park</strong>, founded in the <strong>19th century</strong>, is located on the site of the former
                  <em>Jevrem's Garden</em>. It features busts of notable figures such as
                  <strong>Knez Ivo of Semberija</strong>, <strong>Kosta Abrašević</strong>, and <strong>Janko Veselinović</strong>.
                  The park includes <em>two fountains</em>, <em>sports courts</em>, and connects to <strong>Knez Mihailova Street</strong>,
                  known for the lyrics of the song <em>“Lilac Street”</em> written by <strong>Ivan Glišić</strong>.
                </p>
              </section>

              <img srcSet={`${sabac44} 450w, ${sabac4}`} alt="National Museum Šabac" />

              <section lang="en">
                <p>
                  The <strong>National Museum in Šabac</strong> was founded in <strong>1934</strong> and since <strong>1954</strong> has been
                  located in the building of the former <strong>Junior High School</strong>. The museum contains <em>800 m² of exhibition space</em>,
                  collections from <strong>prehistory, antiquity, numismatics</strong>, and <strong>fine arts</strong>, featuring works
                  by artists such as <strong>Stevan Čalić</strong>, <strong>Mara Lukić-Jelešić</strong>, and <strong>Milić of Mačva</strong>.
                  The <strong>historical department</strong> houses decorations including the <strong>French War Cross</strong>, <strong>Czechoslovak War Cross</strong>,
                  and the <strong>Order of Karađorđe’s Star with Swords</strong>. The <strong>ethnographic collection</strong> showcases the interior of a <em>traditional rural house with a hearth</em>.
                </p>
              </section>

              <img srcSet={`${sabac55} 450w, ${sabac5}`} alt="Šabac Fortress" />

              <section lang="en">
                <p>
                  The <strong>Šabac Fortress</strong>, located on the right bank of the <strong>Sava River</strong>, dates back to <strong>1470</strong>,
                  while its current form originates from the <strong>17th century</strong>. It served as a <em>defensive structure</em> on the border with
                  <strong>Europe</strong> and changed hands <em>numerous times</em>. Its layout is a <strong>quadrilateral</strong>
                  with <em>four round towers</em>. It belongs to the group of <strong>“fortified towns”</strong> of which Serbia had
                  more than <strong>200 during the Middle Ages</strong>, especially during the rule of the <strong>Nemanjić dynasty</strong>.
                </p>
              </section>

              <img srcSet={`${sabac66} 450w, ${sabac6}`} alt="Gospodar Jevremova Street, Šabac" />

              <section lang="en">
                <p>
                  <strong>Gospodar Jevremova Street</strong> holds the status of a <strong>cultural and historical landmark</strong>.
                  It was named after <strong>Jevrem Obrenović</strong> in <em>1890</em> and has been part of
                  <strong>Šabac's city center</strong> since its early days. It originally had an <em>oriental character</em>,
                  which changed under <em>Central European architectural influences</em> in the <strong>19th century</strong>.
                  In the early <strong>20th century</strong>, it underwent <em>modernization and lost its authenticity</em>.
                  Today, the street is restored and <strong>protected</strong> as a cultural site.
                </p>
              </section>

              <img srcSet={`${sabac77} 450w, ${sabac7}`} alt="Cathedral Church of Šabac" style={{ marginBottom: "-10px" }} />

              <section lang="en">
                <p>
                  The <strong>Cathedral Church of the Holy Foremost Apostles Peter and Paul</strong>, commonly known as
                  <em>“the Šabac church”</em>, is the <strong>oldest preserved church</strong> in <em>Šabac</em> and the <strong>cathedral of the bishops of Šabac</strong>.
                  Its construction took place after the <strong>uprisings from 1804 to 1815</strong>, during a time when <em>Serbia was entering a new era</em>.
                  The church symbolizes the <em>spiritual renewal</em> of the Serbian people and their <strong>first steps toward freedom</strong>.
                </p>
              </section>


            </>
          )}


      </div>
    </>
  );
};


export default Sabac;