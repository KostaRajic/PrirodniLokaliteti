/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import mitrovica1 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/desktop/kMitrovica1.jpg";
import mitrovica2 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/desktop/kMitrovica2.jpg";
import mitrovica3 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/desktop/kMitrovica3.jpg";
import mitrovica4 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/desktop/kMitrovica4.jpg";
import mitrovica5 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/desktop/kMitrovica5.jpg";
import mitrovica11 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/mobile/MkMitrovica1.jpg";
import mitrovica22 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/mobile/MkMitrovica2.jpg";
import mitrovica33 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/mobile/MkMitrovica3.jpg";
import mitrovica44 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/mobile/MkMitrovica4.jpg";
import mitrovica55 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/KMitrovica/mobile/MkMitrovica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { mitrovackiOkrugPathRoutes } from "./MitrovackiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const KosovskaMitrovica = () => {
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

        <title>{switchLanguage === 'rs' ? "Kosovska Mitrovica – Grad na reci Ibar sa dve strane | Serbia Wonders" : "Kosovska Mitrovica – A City on the Ibar River with Two Sides | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Kosovska Mitrovica je grad na severu Kosova i Metohije podeljen rekom Ibar. Poznata po simboličnom mostu, istoriji Nemanjića, muzeju, rudnicima Trepča i kulturnim znamenitostima."
            :
            "Kosovska Mitrovica is a city in northern Kosovo and Metohija, divided by the Ibar River. Known for the symbolic bridge, the Trepča mines, Queen Helen of Anjou’s legacy, and a museum rich in cultural heritage."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Kosovska Mitrovica, most na Ibru, reka Ibar, Trepča, sever Kosova, Srbi i Albanci, podeljeni grad, muzej Mitrovica, kraljica Jelena Anžujska, tvrđava Ćutet, reka Sitnica, Ibarska klisura"
            :
            "Kosovska Mitrovica, Ibar Bridge, Ibar River, divided city, Serbs and Albanians, Trepča mines, Kosovo museum, Jelena of Anjou, Ćutet fortress, Sitnica river, cultural heritage"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/kosovksa-mitrovica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/kosovksa-mitrovica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/kosovksa-mitrovica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/kosovksa-mitrovica"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(mitrovackiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${mitrovica11} 450w, ${mitrovica1} `} alt="Kosovska Mitrovica 1" loading="lazy" />

        <h1>Kosovska Mitrovica</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Kosovska Mitrovica</strong> je gradsko naselje i sedište istoimene opštine u
                  <strong>Srbiji</strong>, koje se nalazi u severnom delu <strong>Kosova i Metohije</strong> i
                  administrativni je centar <strong>Kosovskomitrovačkog upravnog okruga</strong>. Nakon
                  završetka rata na <strong>Kosovu i Metohiji</strong>, <strong>Kosovska Mitrovica</strong> je etnički
                  podeljena između <strong>Srba</strong>, koji naseljavaju severni deo grada, i <strong>Albanaca</strong>,
                  koji žive na jugu. Granicu između severnog i južnog dela <strong>Kosovske Mitrovice</strong> čini reka <strong>Ibar</strong>,
                  dok je <strong>most na Ibru</strong> postao glavni simbol
                  podele grada.
                </p>
              </section>

              <img srcSet={`${mitrovica22} 450w, ${mitrovica2} `} alt="Kosovska Mitrovica 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Kao rudarski grad, <strong>Trepča</strong> se pominje <em>1303. godine</em>. U Starom Trgu se do
                  bombardovanja <em>1999. godine</em> nalazio <strong>Muzej kristala</strong>. U blizini se nalaze
                  ostaci tvrđave <strong>Ćutet</strong> (<em>13. vek</em>). U Brnjaku je postojao grad-dvorac (druga
                  polovina <em>13. veka</em>) koji je pripadao ženi srpskog kralja <strong>Stefana Uroša I</strong>,
                  <strong>Jeleni Anžujskog</strong>, koja je u njemu umrla <em>1314. godine</em>. U vreme <strong>Nemanjića</strong>,
                  kraj <strong>Kosovske Mitrovice</strong> već je bio domaćin grada <strong>Zvečana</strong>, koji je imao
                  važnu ulogu u srednjovekovnoj istoriji Srbije, a čiji se ostaci kula i
                  danas uzdižu na obližnjem istoimenom brdu.
                </p>
              </section>

              <img srcSet={`${mitrovica55} 450w, ${mitrovica5} `} alt="Kosovska Mitrovica 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Kosovska Mitrovica</strong> se nalazi na jugoistočnom rubu <strong>Dinarskih planina</strong>, u
                  severnom delu kosovske oblasti, tamo gde <strong>Ibar</strong> pravi veliku oku i ulazi u
                  <strong>Ibarsku klisuru</strong>, ispred koje, s desne strane, prima svoju najveću
                  pritoku, <strong>Sitnicu</strong>. Smeštena je na severu <strong>Kosovske kotline</strong>, na <em>496 metara nadmorske visine</em>. Sa istoka, severa i zapada okružena je planinama
                  <strong>Mokrom Gorom</strong> i obroncima <strong>Golije</strong> i <strong>Kopaonika</strong>, sa juga granicama <strong>Čičavice</strong>,
                  a sa severozapada obroncima <strong>Rogozne</strong>.
                </p>
                <p>
                  Kroz grad teku reke <strong>Ibar</strong>, koji ga deli na južni i severni deo, <strong>Sitnica</strong> i
                  pritoka Ibra, <strong>Ljushta</strong>, čije je ušće u samom gradu.
                </p>
                <p>
                  Od grada na severu počinje <strong>Ibarska klisura</strong> kroz koju <strong>Ibar</strong> teče ka
                  <strong>Kraljevu</strong>, gde se uliva u <strong>Zapadnu Moravu</strong>.
                </p>
              </section>

              <img srcSet={`${mitrovica33} 450w, ${mitrovica3} `} alt="Muzej Kosovska Mitrovica" loading="lazy" />

              <section lang="sr">
                <p>
                  Gradski muzej <strong>Kosovska Mitrovica</strong> je muzejska institucija kulture koja se
                  nalazi u <strong>Kosovskoj Mitrovici</strong>. Otvoren je za javnost <em>1954. godine</em>.
                  Organizuje izložbe u svom galerijskom prostoru. Gradski muzej u
                  <strong>Kosovskoj Mitrovici</strong> započeo je u <em>martu prošle godine</em> veliku akciju
                  prikupljanja kulturnih, umetničkih i istorijskih predmeta sa <strong>Kosova i Metohije</strong>, od praistorije do kraja <em>20. veka</em>.
                </p>
              </section>

              <img srcSet={`${mitrovica44} 450w, ${mitrovica4} `} alt="Most na Ibru" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Most na Ibru</strong>, poznat i kao <em>Novi most</em> ili <em>Mitrovački most</em>, je čelični
                  most u <strong>Kosovskoj Mitrovici</strong> koji prelazi reku <strong>Ibar</strong> na severu <strong>Kosova i
                    Metohije</strong>. Most je postao simbol podele <strong>Kosovske Mitrovice</strong>, jer razdvaja
                  <strong>Albance</strong> na jugu i <strong>Srbe</strong> na severu grada.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Kosovska Mitrovica</strong> is an urban settlement and the administrative center of the municipality of the same name in
                  <strong>Serbia</strong>, located in the northern part of <strong>Kosovo and Metohija</strong> and
                  the administrative center of the <strong>Kosovska Mitrovica Administrative District</strong>. After
                  the end of the war in <strong>Kosovo and Metohija</strong>, <strong>Kosovska Mitrovica</strong> became ethnically
                  divided between <strong>Serbs</strong>, who inhabit the northern part of the city, and <strong>Albanians</strong>,
                  who live in the south. The border between the northern and southern parts of <strong>Kosovska Mitrovica</strong> is formed by the river <strong>Ibar</strong>,
                  while the <strong>bridge over the Ibar</strong> became the main symbol
                  of the city's division.
                </p>
              </section>

              <img srcSet={`${mitrovica22} 450w, ${mitrovica2} `} alt="Kosovska Mitrovica 2" loading="lazy" />

              <section lang="en">
                <p>
                  As a mining town, <strong>Trepča</strong> is mentioned in <em>1303</em>. In Stari Trg, until the bombing in <em>1999</em>,
                  there was the <strong>Crystal Museum</strong>. Nearby are the remains of the fortress <strong>Ćutet</strong> (<em>13th century</em>). In Brnjak, there was a castle-town (second
                  half of the <em>13th century</em>) which belonged to the wife of Serbian King <strong>Stefan Uroš I</strong>,
                  <strong>Jelena Anžujska</strong>, who died there in <em>1314</em>. During the time of the <strong>Nemanjić</strong> dynasty,
                  the area around <strong>Kosovska Mitrovica</strong> was already home to the town of <strong>Zvečan</strong>, which played
                  an important role in medieval Serbian history, and whose remains of towers
                  still rise on the nearby hill of the same name.
                </p>
              </section>

              <img srcSet={`${mitrovica55} 450w, ${mitrovica5} `} alt="Kosovska Mitrovica 3" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Kosovska Mitrovica</strong> is located on the southeastern edge of the <strong>Dinaric Alps</strong>, in
                  the northern part of the Kosovo region, where the <strong>Ibar</strong> river forms a large bend and enters
                  the <strong>Ibar Gorge</strong>, in front of which, on the right side, it receives its largest tributary, the <strong>Sitnica</strong>. It is situated in the north of the <strong>Kosovo Basin</strong>, at an altitude of <em>496 meters above sea level</em>. To the east, north, and west, it is surrounded by the mountains
                  <strong>Mokra Gora</strong> and the slopes of <strong>Golija</strong> and <strong>Kopaonik</strong>, to the south by the borders of <strong>Čičavica</strong>,
                  and to the northwest by the slopes of <strong>Rogozna</strong>.
                </p>
                <p>
                  The city is traversed by the rivers <strong>Ibar</strong>, which divides it into southern and northern parts, <strong>Sitnica</strong>, and
                  a tributary of the Ibar, <strong>Ljushta</strong>, whose mouth is in the city itself.
                </p>
                <p>
                  From the city to the north begins the <strong>Ibar Gorge</strong>, through which the <strong>Ibar</strong> flows towards
                  <strong>Kraljevo</strong>, where it flows into the <strong>West Morava</strong> river.
                </p>
              </section>

              <img srcSet={`${mitrovica33} 450w, ${mitrovica3} `} alt="Kosovska Mitrovica Museum" loading="lazy" />

              <section lang="en">
                <p>
                  The City Museum of <strong>Kosovska Mitrovica</strong> is a cultural institution located in
                  <strong>Kosovska Mitrovica</strong>. It opened to the public in <em>1954</em>.
                  It organizes exhibitions in its gallery space. The City Museum in
                  <strong>Kosovska Mitrovica</strong> started a large campaign last <em>March</em> to collect cultural, artistic, and historical objects from <strong>Kosovo and Metohija</strong>, from prehistory to the end of the <em>20th century</em>.
                </p>
              </section>

              <img srcSet={`${mitrovica44} 450w, ${mitrovica4} `} alt="Bridge over Ibar" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>Bridge over the Ibar</strong>, also known as the <em>New Bridge</em> or <em>Mitrovica Bridge</em>, is a steel
                  bridge in <strong>Kosovska Mitrovica</strong> that crosses the river <strong>Ibar</strong> in northern <strong>Kosovo and
                    Metohija</strong>. The bridge has become a symbol of the division of <strong>Kosovska Mitrovica</strong>, as it separates
                  <strong>Albanians</strong> in the south and <strong>Serbs</strong> in the northern part of the city.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default KosovskaMitrovica;