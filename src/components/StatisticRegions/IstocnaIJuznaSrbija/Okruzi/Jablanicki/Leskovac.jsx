/* eslint-disable react/no-unknown-property */
import leskovac1 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/desktop/leskovac1.jpg";
import leskovac2 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/desktop/leskovac2.jpg";
import leskovac3 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/desktop/leskovac3.jpg";
import leskovac4 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/desktop/leskovac4.jpg";
import leskovac5 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/desktop/leskovac5.jpg";
import leskovac6 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/desktop/leskovac6.jpg";
import leskovac7 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/desktop/leskovac7.jpg";
import leskovac11 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/mobile/leskovacM1.jpg";
import leskovac22 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/mobile/leskovacM2.jpg";
import leskovac33 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/mobile/leskovacM3.jpg";
import leskovac44 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/mobile/leskovacM4.jpg";
import leskovac55 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/mobile/leskovacM5.jpg";
import leskovac66 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/mobile/leskovacM6.jpg";
import leskovac77 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/mobile/leskovacM7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Leskovac = () => {
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

        <title>{switchLanguage === 'rs' ? "Leskovac – Grad Roštilja i Kulturnog Nasleđa Juga Srbije | Serbia Wonders" : "Leskovac – The City of Barbecue and Cultural Heritage of Southern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Leskovac, grad u srcu Leskovačke kotline, poznat po roštilju, istoriji i bogatoj kulturi. Dom Narodnog muzeja, Roštiljijade, filmskog festivala i spomen-parka Revolucije."
            :
            "Leskovac is a city in the Leskovac Basin, known for its barbecue, historical roots, and cultural events. It hosts the National Museum, Roštiljijada, LIFFE, and the Memorial Park of Revolution."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Leskovac, Južna Srbija, Leskovačka kotlina, Roštiljijada, LIFFE, Narodni muzej Leskovac, Park Devet Jugovića, Spomen-park Revolucije, Veternica, Južna Morava, Grdelica, Hisar"
            :
            "Leskovac, Southern Serbia, Leskovac Basin, Roštiljijada, LIFFE, National Museum Leskovac, Park of Nine Jugović, Memorial Park of Revolution, Veternica, South Morava, Grdelica, Hisar hill"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/leskovac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/leskovac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/leskovac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/leskovac"
        />

      </Helmet>




      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(jablanickiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${leskovac11} 450w, ${leskovac1} `} alt="Leskovac 1" loading="lazy" />

        <h2>Leskovac</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Leskovac</strong> je grad i sedište istoimene teritorijalne jedinice u <strong>Srbiji</strong>.
                  Administrativni je centar <strong>Jablaničkog upravnog okruga</strong> i jedan od
                  najvećih gradova u <strong>južnoj i istočnoj Srbiji</strong>. Nalazi se u <strong>Leskovačkoj kotlini</strong>, poznatoj po <em>srpskom petoročju</em>. Kroz samo naselje protice reka
                  <strong>Veternica</strong>, a nedaleko od grada prolazi <strong>Južna Morava</strong>, koja prima sve
                  veće pritoke grada. Leskovac se nalazi na nadmorskoj visini od <strong>228 metara</strong>,
                  a kotlina je okružena planinama: <strong>Radan</strong>, <strong>Goljak</strong>, <strong>Pasjača</strong> (zapad),
                  <strong>Kukavica</strong>, <strong>Čemernik</strong> (jug), te <strong>Babička gora</strong>, <strong>Seličevice</strong> i <strong>Suva planina</strong> (istok).
                </p>
              </section>

              <img srcSet={`${leskovac22} 450w, ${leskovac2}`} alt="Leskovac 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Grad <strong>Leskovac</strong> ima <strong>144 naselja</strong>, među kojima su <strong>Leskovac</strong>, <strong>Vučje</strong> i
                  <strong>Grdelica</strong> naselja gradskog tipa. Kao <em>privredni, politički, društveni,
                    kulturno-obrazovni i administrativni</em> centar Jablaničkog okruga, poznat je po
                  razvijenoj <strong>tekstilnoj</strong>, <strong>hemijskoj</strong>, <strong>drvoprerađivačkoj</strong> i <strong>prehrambenoj industriji</strong>.
                  Grad je poznat i kao <strong>grad roštilja</strong> i kulinarskih specijaliteta. Domaćin je
                  institucijama kao što su <strong>Narodni muzej</strong> i <strong>Narodna biblioteka „Radoje Domanović“</strong>.
                  Najpoznatija manifestacija je <strong>Leskovačka roštiljijada</strong>, a tu su i
                  <strong>Leskovački karneval</strong> i <strong>Leskovački internacionalni filmski festival (LIFFE)</strong>.
                </p>
              </section>

              <img srcSet={`${leskovac33} 450w, ${leskovac3}`} alt="Leskovac 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Najraniji naziv ovog područja bio je <strong>Glubočica</strong> (starosrpski <em>Glьbočica</em>), od
                  praslovenskog <em>glọbokъ</em> – što znači „<strong>dubok</strong>”. Kasnije je ime promenjeno u
                  <strong>Dubočica</strong>. Područje su još u <strong>5. veku p.n.e.</strong> naseljavali <strong>Dardani</strong>.
                  Prema predanju, teritorija je dobila ime po močvarnom terenu između
                  Leskovca i sela <strong>Strojkovac</strong>, poznatom po dubokom blatu ili glibu.
                  Tokom vladavine <strong>Stefana Nemanje</strong> ime <strong>Glubočica</strong> odnosilo se na sliv reke
                  <strong>Jablanice</strong>. Arheolog <strong>Feliks Kanic</strong> beleži postojanje grada <strong>Dibočica</strong> kod ušća
                  reke <strong>Lapaštice</strong> u reku <strong>Medveđu</strong>.
                </p>
              </section>

              <img srcSet={`${leskovac44} 450w, ${leskovac4}`} alt="Leskovac 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Leskovac se nalazi u podnožju brda <strong>Hisar</strong> (<strong>341 m</strong>), u srcu prostrane i
                  plodne <strong>Leskovačke kotline</strong>. Ova kotlina se prostire duž srednjeg toka
                  <strong>Južne Morave</strong>, između <strong>Niške</strong> i <strong>Vranjske kotline</strong>. Dugačka je <strong>50 km</strong>,
                  široka <strong>45 km</strong>, a presijecaju je reke <strong>Južna Morava</strong>, <strong>Jablanica</strong>, <strong>Veternica</strong> i
                  <strong>Pusta reka</strong>.
                  <br /><br />
                  Leskovac leži na nadmorskoj visini od <strong>228 m</strong>, a kotlina obuhvata površinu od
                  <strong>2.250 km²</strong> sa oko <strong>300 naselja</strong>. Nekada je bila deo <em>Panonskog mora</em>.
                  Okružuju je planine: <strong>Goljak</strong>, <strong>Čemernik</strong> (<strong>1.638 m</strong>), <strong>Kukavica</strong>, <strong>Babička gora</strong>
                  (<strong>1.098 m</strong>), <strong>Seličevice</strong>, <strong>Suva planina</strong>, <strong>Radan</strong> i <strong>Pasjača</strong>. Na severu se
                  graniči sa <strong>Niškom kotlinom</strong>, dok se južno, preko <strong>Grdeličke klisure</strong>,
                  spaja sa <strong>Vranjsko-bujanovačkom kotlinom</strong>.
                </p>
              </section>

              <img srcSet={`${leskovac55} 450w, ${leskovac5}`} alt="Narodni muzej u Leskovcu" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Narodni muzej u Leskovcu</strong> je <em>neprofitna ustanova</em> u službi društva. Bavi se
                  prikupljanjem, čuvanjem, dokumentovanjem, proučavanjem i prikazivanjem
                  <em>istorijsko-umetničkih dela</em> sa teritorije koju pokriva. Predmeti su raspoređeni
                  u tematske zbirke, dok stalna postavka i povremene izložbe omogućavaju
                  dublje razumevanje njihovog istorijskog konteksta.
                  <br /><br />
                  Kao čuvar i tumač <strong>kulturne baštine</strong>, muzej je važan akter društvenih dešavanja
                  na jugu Srbije, sa zadatkom da unapređuje muzejski rad, širi opštu kulturu
                  i ostvaruje obrazovno-vaspitne ciljeve.
                </p>
              </section>

              <img srcSet={`${leskovac66} 450w, ${leskovac6}`} alt="Park Devet Jugovića u Leskovcu" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Park Devet Jugovića</strong> je jedan od centralnih gradskih parkova <strong>Leskovca</strong>,
                  smešten u samom <strong>centru grada</strong>. Poznat je po velikoj <em>zelenoj površini</em> i
                  prijatnom ambijentu za <strong>odmor</strong> i <strong>rekreaciju</strong>. Ime je dobio po <strong>devet junaka</strong>
                  iz <em>srpske epske tradicije</em>, poznatih kao <strong>Jugovići</strong>, koji simbolizuju <em>junaštvo</em>
                  i <em>borbu za slobodu</em>.
                  <br /><br />
                  Park je domaćin <strong>kulturnih i društvenih manifestacija</strong>. Pruža prostor za
                  <strong>šetnju</strong>, <strong>sport</strong> i <strong>opuštanje</strong>. U njemu se nalazi i <strong>spomenik Devet Jugovića</strong>,
                  podignut u znak sećanja na njihova <em>herojska dela</em>.
                </p>
              </section>

              <img srcSet={`${leskovac77} 450w, ${leskovac7}`} alt="Spomen-park „Revolucije“" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Spomen-park „Revolucije“</strong> je <em>memorijalni park</em> na istočnoj padini brda
                  <strong>Hisar</strong> u <strong>Leskovcu</strong>. Izgrađen je <strong>1971. godine</strong>, a autor kompleksa je
                  poznati arhitekta <strong>Bogdan Bogdanović</strong>. Park je posvećen <strong>borcima NOB-a</strong> i
                  <strong>žrtvama fašizma</strong> sa ovog područja koji su stradali tokom <strong>Drugog svetskog rata</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Leskovac</strong> is a city and the seat of the eponymous territorial unit in <strong>Serbia</strong>.
                  It serves as the administrative center of the <strong>Jablanica District</strong> and is one of the largest cities in <strong>southern and eastern Serbia</strong>.
                  Located in the <strong>Leskovac Basin</strong>, known for the <em>Serbian “five-region”</em>, the city is traversed by the <strong>Veternica River</strong>,
                  while nearby flows the <strong>South Morava River</strong>, which receives all major tributaries of the city.
                  Leskovac sits at an altitude of <strong>228 meters</strong>, surrounded by mountains: <strong>Radan</strong>, <strong>Goljak</strong>, and <strong>Pasjača</strong> (west); <strong>Kukavica</strong> and <strong>Čemernik</strong> (south); and <strong>Babička Gora</strong>, <strong>Seličevice</strong>, and <strong>Suva Planina</strong> (east).
                </p>
              </section>

              <img srcSet={`${leskovac22} 450w, ${leskovac2}`} alt="Leskovac 2" loading="lazy" />

              <section lang="en">
                <p>
                  The city of <strong>Leskovac</strong> comprises <strong>144 settlements</strong>, including the urban settlements of <strong>Leskovac</strong>, <strong>Vučje</strong>, and <strong>Grdelica</strong>.
                  As an <em>economic, political, social, cultural-educational, and administrative</em> center of the Jablanica District, it is known for its developed <strong>textile</strong>, <strong>chemical</strong>, <strong>wood-processing</strong>, and <strong>food industries</strong>.
                  Leskovac is also famed as the <strong>city of grilled meat</strong> and culinary specialties. It hosts numerous cultural institutions, including the <strong>National Museum</strong> and the <strong>Radoje Domanović Public Library</strong>.
                  Its most renowned event is the <strong>Leskovac Grill Festival</strong> (“Roštiljijada”), alongside the annual <strong>Leskovac Carnival</strong> and the <strong>Leskovac International Film Festival (LIFFE)</strong>.
                </p>
              </section>

              <img srcSet={`${leskovac33} 450w, ${leskovac3}`} alt="Leskovac 3" loading="lazy" />

              <section lang="en">
                <p>
                  The earliest name for the region now occupied by Leskovac was <strong>Glubočica</strong> (Old Serbian <em>Glьbočica</em>), derived from the Proto-Slavic <em>glọbokъ</em>, meaning “<strong>deep</strong>.”
                  Later the name evolved to <strong>Dubočica</strong>. As early as the <strong>5th century BC</strong>, the area was inhabited by the <strong>Dardani</strong>.
                  According to legend, the name arose from the marshy terrain between Leskovac and the village of <strong>Strojkovac</strong>, known for deep mud.
                  During the reign of <strong>Stefan Nemanja</strong>, “Glubočica” referred to the Jablanica River basin.
                  Archaeologist <strong>Feliks Kanic</strong> mentions a town called <strong>Dibočica</strong> at the confluence of the <strong>Lapaštica</strong> and <strong>Medveđa</strong> (Jablanica) rivers.
                </p>
              </section>

              <img srcSet={`${leskovac44} 450w, ${leskovac4}`} alt="Leskovac 4" loading="lazy" />

              <section lang="en">
                <p>
                  Leskovac lies at the foot of <strong>Hisar Hill</strong> (<strong>341 m</strong>), in the heart of the fertile <strong>Leskovac Basin</strong>.
                  This basin extends along the middle course of the <strong>South Morava</strong>, between the <strong>Niš Basin</strong> (north) and the <strong>Vranje Basin</strong> (south).
                  It measures approximately <strong>50 km long</strong> and <strong>45 km wide</strong>, intersected by the <strong>South Morava</strong>, <strong>Jablanica</strong>, <strong>Veternica</strong>, and <strong>Pusta River</strong>.
                  <br /><br />
                  The basin covers around <strong>2,250 km²</strong> and includes about <strong>300 settlements</strong>. It was once part of the <em>Pannonian Sea</em>.
                  Surrounding mountains include <strong>Goljak</strong>, <strong>Čemernik</strong> (<strong>1,638 m</strong>), <strong>Kukavica</strong>, <strong>Babička Gora</strong> (<strong>1,098 m</strong>), <strong>Seličevice</strong>, <strong>Suva Planina</strong>, <strong>Radan</strong>, and <strong>Pasjača</strong>. To the north lies the <strong>Niš Basin</strong>, while to the south, via the <strong>Grdelica Gorge</strong>, it connects to the <strong>Vranje-Bujanovac Basin</strong>.
                </p>
              </section>

              <img srcSet={`${leskovac55} 450w, ${leskovac5}`} alt="National Museum in Leskovac" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>National Museum of Leskovac</strong> is a <em>non-profit institution</em> serving the community by collecting, preserving, documenting, studying, and displaying <em>historical and artistic artifacts</em> from the region.
                  Items are organized into thematic collections, and permanent as well as temporary exhibits provide deeper insight into their historical context.
                  <br /><br />
                  As a custodian and interpreter of <strong>cultural heritage</strong>, the museum is a vital participant in social life in southern Serbia, working to enhance museum activity, promote cultural values, and fulfill educational goals.
                </p>
              </section>

              <img srcSet={`${leskovac66} 450w, ${leskovac6}`} alt="Park Devet Jugovića in Leskovac" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Park Devet Jugovića</strong> is one of the main city parks in <strong>Leskovac</strong>, located in the <strong>city center</strong>.
                  Known for its expansive <em>green spaces</em> and pleasant ambiance for <strong>relaxation</strong> and <strong>recreation</strong>, the park is named after nine heroes from <em>Serbian epic tradition</em>, known as the <strong>Jugovići</strong>, symbolizing <em>heroism</em> and the <em>struggle for freedom</em>.
                  <br /><br />
                  The park hosts numerous <strong>cultural and social events</strong>, and its paths and meadows provide areas for <strong>walking</strong>, <strong>sports</strong>, and <strong>relaxation</strong>. It also features the <strong>Monument to the Nine Jugovići</strong>, erected to honor their <em>heroic deeds</em>.
                </p>
              </section>

              <img srcSet={`${leskovac77} 450w, ${leskovac7}`} alt="Revolution Memorial Park" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>Revolution Memorial Park</strong> is a <em>memorial park</em> situated on the eastern slope of <strong>Hisar Hill</strong> in <strong>Leskovac</strong>.
                  Built in <strong>1971</strong> and designed by renowned architect <strong>Bogdan Bogdanović</strong>, it is dedicated to the <strong>Partisan fighters</strong> and <strong>victims of fascism</strong> from the region who perished during the <strong>Second World War</strong>.
                </p>
              </section>


            </>
          )}

      </div>

    </>
  );
};


export default Leskovac;