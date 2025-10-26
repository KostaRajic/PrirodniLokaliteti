/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import planinaRudnik1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/desktop/rudnik1.jpg";
import planinaRudnik2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/desktop/rudnik2.jpg";
import planinaRudnik3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/desktop/rudnik3.jpg";
import planinaRudnik4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/desktop/rudnik4.jpg";
import planinaRudnik5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/desktop/rudnik5.jpg";
import planinaRudnik11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/mobile/Mrudnik1.jpg";
import planinaRudnik22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/mobile/Mrudnik2.jpg";
import planinaRudnik33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/mobile/Mrudnik3.jpg";
import planinaRudnik44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/mobile/Mrudnik4.jpg";
import planinaRudnik55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/PlaninaRudnik/mobile/Mrudnik5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const PlaninaRudnik = () => {
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
            ? "Planina Rudnik – Prirodni rezervat i vazdušna banja u srcu Šumadije | Serbia Wonders"
            : "Rudnik Mountain – Natural Reserve and Air Spa in the Heart of Šumadija | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Planina Rudnik je šumovita planina u Šumadiji sa vrhovima preko 1000m, poznata kao vazdušna banja i prirodni rezervat Veliki Šturac. Idealna za planinarenje, zimske šetnje i zdravstveni turizam."
              : "Rudnik Mountain is a forested mountain in Šumadija with peaks over 1000m, known as an air spa and the Veliki Šturac nature reserve. Ideal for hiking, winter walks, and health tourism."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Planina Rudnik, Vazdušna banja Rudnik, Veliki Šturac, Šumadija, prirodni rezervat, planinarenje, zimski turizam, Jerinin grad"
              : "Rudnik Mountain, Rudnik air spa, Veliki Šturac, Šumadija, nature reserve, hiking, winter tourism, Jerina’s town"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/planina-rudnik`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/planina-rudnik"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/planina-rudnik"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/planina-rudnik"
        />

      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(moravickiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${planinaRudnik11} 450w, ${planinaRudnik1} `} alt="Planina Rudnik 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Planina Rudnik</h1>

              <section lang="sr">
                <p>
                  <strong>Rudnik</strong>, planina koja dominira <em>Šumadijom</em>, nalazi se oko 100 km južno od
                  <em>Beograda</em>, odnosno 15 km od <em>Gornjeg Milanovca</em>. Varošica Rudnik je
                  smeštena između 500 i 700 m nadmorske visine. Na Rudniku se nalazi osam
                  vrhova viših od 1.000 m nadmorske visine (zanimljivo, dva od njih se
                  zovu "<strong>Javor</strong>"), a najviši je <strong>Cvijićev vrh</strong> (1.132 m), ranije poznat kao
                  <em>Veliki Šturac</em>. Najveće naselje na planini je varošica Rudnik. Veliki deo
                  planine je prekriven šumom, uglavnom bukovom, ali tu su i hrast, javor i
                  mleč.
                </p>
              </section>


              <img srcSet={`${planinaRudnik22} 450w, ${planinaRudnik2}`} alt="Planina Rudnik 2" />

              <section lang="sr">
                <p>
                  Zahvaljujući izuzetnoj šumovitosti, prirodnim stazama zdravlja i blizini
                  velikih gradova, Rudnik je idealan za razvoj letnjeg i zimskog
                  zdravstvenog, školskog, sportskog i lovnog turizma. Zbog izvanrednih
                  klimatskih uslova (<em>visoka osunčanost tokom godine</em>, vazdušna strujanja,
                  <strong>visoka jonizacija vazduha</strong> i nezagađena prirodna sredina), Rudnik je još
                  1922. godine proglašen vazdušnom banjom. Varošica i planina su povezane
                  asfaltiranim putem i brojnim stazama zdravlja, a na raspolaganju su i
                  tereni za male sportove. Posetioci mogu planinariti do <strong>Cvijićevog vrha</strong> i
                  strmog vulkanskog uzvišenja <em>Ostrvice</em>, na kojem se nalaze ostaci
                  <strong>Jerininog grada</strong>.
                </p>
              </section>


              <img srcSet={`${planinaRudnik44} 450w, ${planinaRudnik4}`} alt="Planina Rudnik 3" />

              <section lang="sr">
                <p>
                  Planina Rudnik zimi je pravo utočište za ljubitelje prirode i zimskih
                  pejzaža. Njene snežne staze, prekrivene tišinom, idealne su za šetnje,
                  uživanje na svežem vazduhu i istraživanje prirode. Guste šume i
                  brežuljci stvaraju prelepe prizore, dok je vazduh bogat kiseonikom i
                  poznat po lekovitom dejstvu. Zimske šetnje na Rudniku pružaju priliku da
                  se istraže njegovi brojni vidikovci, odakle se pruža pogled na okolne
                  planine i doline. Posebno je magično prošetati do <em>Velikog Šturca</em>,
                  najvišeg vrha Rudnika, dok je sve prekriveno snegom.
                </p>
              </section>


              <img srcSet={`${planinaRudnik33} 450w, ${planinaRudnik3}`} alt="Planina Rudnik 4" />

              <section lang="sr">
                <p>
                  Planina je poznata i po čistim izvorima vode, a zimi njihova tiha
                  žuborenja imaju poseban šarm. Nakon šetnje, posetioci mogu da uživaju u
                  toplim napicima i domaćim specijalitetima u lokalnim etno restoranima i
                  smeštajima. Rudnik zimi nije samo destinacija za odmor, već i mesto koje
                  pruža spokoj i priliku za opuštanje daleko od svakodnevnog stresa.
                </p>
              </section>


              <img srcSet={`${planinaRudnik55} 450w, ${planinaRudnik5}`} alt="Planina Rudnik 5" />

              <section lang="sr">
                <p>
                  Između vrha <strong>Javor</strong> i <strong>Cvijićevog vrha</strong>, sa njegove jugoistočne strane,
                  nalazi se prirodni rezervat <em>„Veliki Šturac“</em>. Ovo prirodno dobro prvi put
                  je stavljeno pod zaštitu 1956. godine kao strogi prirodni rezervat, na
                  površini od 8 hektara. Spada u prirodna dobra I kategorije – prirodno
                  dobro od izuzetnog značaja.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1 style={{ color: 'white' }}>Mount Rudnik</h1>

              <section lang="en">
                <p>
                  <strong>Rudnik</strong>, a mountain dominating the <em>Šumadija</em> region, is located about 100 km south of
                  <em>Belgrade</em>, and 15 km from <em>Gornji Milanovac</em>. The small town of Rudnik is
                  situated between 500 and 700 meters above sea level. Rudnik has eight peaks
                  higher than 1,000 meters above sea level (interestingly, two of them are
                  named "<strong>Javor</strong>"), and the highest is <strong>Cvijić Peak</strong> (1,132 m), formerly known as
                  <em>Veliki Šturac</em>. The largest settlement on the mountain is the town of Rudnik. A large part
                  of the mountain is covered with forest, mainly beech, but there are also oak, maple, and dogwood.
                </p>
              </section>


              <img srcSet={`${planinaRudnik22} 450w, ${planinaRudnik2}`} alt="Mount Rudnik 2" />

              <section lang="en">
                <p>
                  Thanks to its exceptional forest coverage, natural health trails, and proximity
                  to large cities, Rudnik is ideal for developing summer and winter
                  health, educational, sports, and hunting tourism. Due to excellent
                  climatic conditions (<em>high annual sunshine</em>, air currents,
                  <strong>high air ionization</strong>, and an unpolluted natural environment), Rudnik was declared
                  an air spa as early as 1922. The town and mountain are connected
                  by a paved road and numerous health trails, and facilities for small sports are available. Visitors can hike to <strong>Cvijić Peak</strong> and
                  the steep volcanic elevation of <em>Ostrvica</em>, where the remains of
                  <strong>Jerina's Fortress</strong> are located.
                </p>
              </section>


              <img srcSet={`${planinaRudnik44} 450w, ${planinaRudnik4}`} alt="Mount Rudnik 3" />

              <section lang="en">
                <p>
                  Mount Rudnik in winter is a true refuge for nature and winter landscape lovers.
                  Its snowy trails, covered in silence, are ideal for walks,
                  enjoying fresh air, and exploring nature. Dense forests and
                  hills create beautiful scenery, while the air is rich in oxygen and
                  known for its healing effects. Winter walks on Rudnik offer the chance to
                  explore its numerous viewpoints, from which you can see the surrounding
                  mountains and valleys. It is especially magical to walk to <em>Veliki Šturac</em>,
                  Rudnik’s highest peak, while everything is covered in snow.
                </p>
              </section>


              <img srcSet={`${planinaRudnik33} 450w, ${planinaRudnik3}`} alt="Mount Rudnik 4" />

              <section lang="en">
                <p>
                  The mountain is also known for its clean water springs, and in winter their quiet
                  murmurs have a special charm. After a walk, visitors can enjoy
                  warm drinks and homemade specialties in local ethno restaurants and
                  accommodations. Rudnik in winter is not only a destination for rest but also a place that
                  provides peace and an opportunity to relax away from everyday stress.
                </p>
              </section>


              <img srcSet={`${planinaRudnik55} 450w, ${planinaRudnik5}`} alt="Mount Rudnik 5" />

              <section lang="en">
                <p>
                  Between <strong>Javor</strong> Peak and <strong>Cvijić Peak</strong>, on its southeastern side,
                  lies the natural reserve <em>“Veliki Šturac”</em>. This natural asset was first
                  placed under protection in 1956 as a strict nature reserve, covering
                  an area of 8 hectares. It belongs to the category I natural assets – a natural
                  good of exceptional importance.
                </p>
              </section>

            </>
          )}

      </div >
    </>
  );
};


export default PlaninaRudnik;