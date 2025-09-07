/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import grza1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/desktop/grza1.jpg";
import grza2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/desktop/grza2.jpg";
import grza3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/desktop/grza3.jpg";
import grza4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/desktop/grza4.jpg";
import grza5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/desktop/grza5.jpg";
import grza11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/mobile/Mgrza1.jpg";
import grza22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/mobile/Mgrza2.jpg";
import grza33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/mobile/Mgrza3.jpg";
import grza44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/mobile/Mgrza4.jpg";
import grza55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/Grza/mobile/Mgrza5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Grza = () => {
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
            ? "Reka Grza – Izletište, jezera i prirodne lepote istočne Srbije | Serbia Wonders"
            : "Grza River – Picnic Area, Lakes and Natural Beauty of Eastern Serbia | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Reka Grza je izletište u blizini Paraćina, poznata po izvorima, jezerima, klisurama i rekreativnim stazama. Idealna destinacija za šetnje, piknike, planinarenje i ribolov u netaknutoj prirodi Južnog Kučaja."
              : "Grza River is a picnic area near Paraćin, known for its springs, lakes, gorges, and hiking trails. An ideal destination for walks, picnics, hiking, and fishing in the unspoiled nature of the Southern Kučaj region."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Reka Grza, Grza izletište, Južni Kučaj, Grza jezera, planinarenje, ribolov, priroda Srbije, klisure, vrela Grze"
              : "Grza River, Grza picnic area, Southern Kučaj, Grza lakes, hiking, fishing, nature of Serbia, gorges, Grza springs"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/grza`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/grza"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/grza"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/grza"
        />


      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pomoravskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${grza11} 450w, ${grza1} `} alt="Grza 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h2 style={{ color: "white" }}>Reka Grza</h2>

              <section lang="sr">
                <p>
                  <strong>Grza</strong> je reka u istočnom delu Srbije, duga <em>23 km</em>. Nastaje spajanjem reka
                  <strong>Ivanštice</strong> (<em>Gornje Grze</em>) i <strong>Velike Čestobrodice</strong>, između turističkog
                  naselja <em>Grza</em> i sela <em>Izvor</em>. Ova reka je leva pritoka <strong>Crnice</strong>, koja teče
                  kroz <em>Paraćin</em> i na zapadu grada se uliva u <strong>Veliku Moravu</strong>. <strong>Gornja Grza</strong> i
                  njene pritoke formirale su kratke klisure, u kojima raste specifična,
                  <em>reliktna vegetacija</em>. Dolina <strong>Ivanštice</strong> je duga <em>11 km</em>, a dubina klisure
                  prelazi <strong>300 m</strong>. Meandarska klisura je duga oko <em>2 km</em>, a njena dubina
                  iznosi više od <strong>250 m</strong>.
                </p>
              </section>

              <img srcSet={`${grza22} 450w, ${grza2}`} alt="Grza 2" />

              <section lang="sr">
                <p>
                  <strong>Magistralni put</strong> koji povezuje <em>Paraćin</em> i <em>Zaječar</em> prolazi duž reke <strong>Grze</strong> i
                  <strong>Čestobrodice</strong>, spajajući doline <strong>Velike Morave</strong> i <strong>Timoka</strong>. Uz reku i u
                  blizini izvora postavljeni su broji putokazi, nadstrešnice i klupe za
                  turiste i planinare. Na kraju staze nalaze se vrela koja predstavljaju
                  izvor reke <strong>Grze</strong>. <em>Vrelo</em> je izuzetno lepo, a reka formira dva jezera,
                  <strong>Donje</strong> i <strong>Gornje jezero</strong>, plavo-zelene boje sa kristalno čistom vodom. U
                  blizini izvora smešteno je <em>"Turističko naselje Grza"</em>, koje sadrži hotel,
                  restoran, planinarski dom i brojne vikendice. <strong>Grza</strong> je i popularna
                  destinacija za ribolov, jer je bogata potočnom i kalifornijskom
                  pastrmkom. Od izletišta <strong>Grza</strong> kreću dve pešačke staze koje vode do
                  vidikovaca.
                </p>
              </section>

              <img srcSet={`${grza33} 450w, ${grza3}`} alt="Grza 3" />

              <section lang="sr">
                <p>
                  <em>Vrelo Grze</em>, smešteno u podnožju <strong>Južnog Kučaja</strong>, jedno je od najpoznatijih
                  izletišta, udaljeno <em>20 km</em> od <em>Paraćina</em>. Ispod vrela, reka <strong>Grza</strong> stvara dva
                  očaravajuća jezera, bistre i blistave vodene površine.
                </p>
              </section>

              <img srcSet={`${grza44} 450w, ${grza4}`} alt="Grza 4" />

              <section lang="sr">
                <p>
                  Staze koje prolaze kroz šumu, uz reku i jezera, ostavljaju nezaboravan
                  utisak. Okolina izvora je lepo uređena, sa drvenim mostovima, klupama i
                  prostorima za piknik, a tu je i pećina koja dodatno upotpunjuje prirodnu
                  lepotu ovog područja.
                </p>
              </section>

              <img srcSet={`${grza55} 450w, ${grza5}`} alt="Grza 5" />

              <section lang="sr">
                <p>
                  Voda je i tokom leta hladna, pa se tek poneki hrabri kupač odlučuje na
                  osveženje u njenoj bistroj vodi, iako takav poduhvat nije za svakog.
                  Ribarima je dobro poznato da je <strong>Grza</strong> izuzetno bogata potočnom i
                  kalifornijskom pastrmkom, a u izletištu se nalazi restoran koji savršeno
                  priprema pastrmke.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2 style={{ color: "white" }}>Grza River</h2>

              <section lang="en">
                <p>
                  <strong>Grza</strong> is a river in the eastern part of Serbia, 23 km long. It is formed by the confluence of the rivers
                  <strong>Ivanštica</strong> (<em>Upper Grza</em>) and <strong>Velika Čestobrodica</strong>, between the tourist
                  settlement <em>Grza</em> and the village <em>Izvor</em>. This river is a left tributary of the <strong>Crnica</strong> river, which flows
                  through <em>Paraćin</em> and empties into the <strong>Great Morava</strong> on the western side of the town. <strong>Upper Grza</strong> and
                  its tributaries have formed short gorges, where a specific,
                  <em>relict vegetation</em> grows. The <strong>Ivanštica</strong> valley is 11 km long, and the gorge depth
                  exceeds <strong>300 m</strong>. The meandering gorge is about 2 km long, and its depth
                  is more than <strong>250 m</strong>.
                </p>
              </section>

              <img srcSet={`${grza22} 450w, ${grza2}`} alt="Grza 2" />

              <section lang="en">
                <p>
                  The <strong>main road</strong> connecting <em>Paraćin</em> and <em>Zaječar</em> runs along the rivers <strong>Grza</strong> and
                  <strong>Čestobrodica</strong>, linking the valleys of the <strong>Great Morava</strong> and <strong>Timok</strong>. Along the river and near the spring, numerous signposts, shelters, and benches have been installed for
                  tourists and hikers. At the end of the trail are the springs that form the source of the <strong>Grza</strong> river. The <em>spring</em> is exceptionally beautiful, and the river forms two lakes,
                  <strong>Lower</strong> and <strong>Upper Lake</strong>, turquoise-green in color with crystal-clear water. Near the source is the <em>"Tourist settlement Grza"</em>, which includes a hotel,
                  restaurant, mountain lodge, and numerous weekend houses. <strong>Grza</strong> is also a popular
                  fishing destination, rich in brown trout and rainbow trout. From the <strong>Grza</strong> recreational area, two hiking trails lead to
                  viewpoints.
                </p>
              </section>

              <img srcSet={`${grza33} 450w, ${grza3}`} alt="Grza 3" />

              <section lang="en">
                <p>
                  The <em>Grza spring</em>, located at the foot of <strong>Southern Kučaj</strong> mountains, is one of the most famous
                  excursion spots, about 20 km from <em>Paraćin</em>. Below the spring, the <strong>Grza</strong> river forms two
                  enchanting lakes, with clear and sparkling water surfaces.
                </p>
              </section>

              <img srcSet={`${grza44} 450w, ${grza4}`} alt="Grza 4" />

              <section lang="en">
                <p>
                  The trails passing through the forest, along the river and lakes, leave an unforgettable
                  impression. The area around the spring is nicely arranged, with wooden bridges, benches, and
                  picnic spots, and there is also a cave that further complements the natural
                  beauty of this area.
                </p>
              </section>

              <img srcSet={`${grza55} 450w, ${grza5}`} alt="Grza 5" />

              <section lang="en">
                <p>
                  The water remains cold even during summer, so only a few brave swimmers dare to refresh themselves in its clear water, although such an endeavor is not for everyone. Fishermen know well that <strong>Grza</strong> is exceptionally rich in brown trout and rainbow trout, and there is a restaurant at the excursion site that prepares trout perfectly.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default Grza;