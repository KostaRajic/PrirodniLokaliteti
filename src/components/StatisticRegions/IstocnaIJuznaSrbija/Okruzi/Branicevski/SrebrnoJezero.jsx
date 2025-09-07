/* eslint-disable react/no-unknown-property */
import srebrnoJezero1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/desktop/srebrnoJezero1.jpg";
import srebrnoJezero2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/desktop/srebrnoJezero2.jpg";
import srebrnoJezero3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/desktop/srebrnoJezero3.jpg";
import srebrnoJezero4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/desktop/srebrnoJezero4.jpg";
import srebrnoJezero5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/desktop/srebrnoJezero5.jpg";
import srebrnoJezero11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/mobile/srebrnoJezeroM1.jpg";
import srebrnoJezero22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/mobile/srebrnoJezeroM2.jpg";
import srebrnoJezero33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/mobile/srebrnoJezeroM3.jpg";
import srebrnoJezero44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/mobile/srebrnoJezeroM4.jpg";
import srebrnoJezero55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/mobile/srebrnoJezeroM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { branicevskiOkrugPathRoutes } from "./BranicevskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SrebrnoJezero = () => {
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

        <title>{switchLanguage === 'rs' ? "Srebrno jezero – Srpsko more na obali Dunava | Serbia Wonders" : "Silver Lake – The Serbian Sea on the Danube’s Shore | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Srebrno jezero je veštačko jezero u istočnoj Srbiji, poznato po kristalno čistoj vodi, ribolovu, turizmu i manifestacijama poput šahovskog festivala i košarkaškog kampa Teo4. Popularna destinacija za odmor."
            :
            "Silver Lake is an artificial lake in eastern Serbia, famous for its clear water, fishing, tourism, and events like the chess festival and Teo4 basketball camp. A favorite holiday destination."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Srebrno jezero, Veliko Gradište, Braničevski okrug, srpsko more, ribolov, turizam, kampovanje, Teodosić, Teo4, Šahovski festival, jezera Srbije, Dunav, letovanje"
            :
            "Silver Lake Serbia, Veliko Gradište, Braničevo District, fishing, tourism, Teo4 basketball camp, Miloš Teodosić, chess festival, camping, Serbian lakes, vacation, Serbian sea"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/srebrno-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/srebrno-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/srebrno-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/srebrno-jezero"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(branicevskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${srebrnoJezero11} 450w, ${srebrnoJezero1} `} alt="Srebrno Jezero 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Srebrno Jezero</h2>

              <section lang="sr">
                <p>
                  <strong>Srebrno jezero</strong> je veštačko jezero na desnoj obali <strong>Dunava</strong>, koje je
                  nekada bilo rečni rukavac, ali je danas zatvoreno dvema branama. Nalazi se u
                  <strong>Braničevskom okrugu</strong>, u istočnoj Srbiji, oko <strong>2 km</strong> od <strong>Velikog Gradišta</strong>.
                  Jezero ima prosečnu širinu od <strong>300 metara</strong> i dužinu od oko <strong>14 kilometara</strong>.
                </p>
              </section>

              <img srcSet={`${srebrnoJezero22} 450w, ${srebrnoJezero2} `} alt="Srebrno Jezero 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Jezero se nalazi u širokoj dolini Dunava, ali je okruženo brdima: na severu
                  <strong>brdo Gorica (282 m)</strong>, na jugu <strong>brdo Lipovača (362 m)</strong>, dok zapad zatvara
                  <strong>Veliko brdo</strong> sa najvišim vrhom <strong>Anatema (324 m)</strong>. Južno od jezera je ušće
                  reke <strong>Pek</strong> u Dunav, poznato po obrnutom toku tokom visokog vodostaja.
                  U blizini su i srednjovekovne tvrđave u <strong>Golupcu</strong> i <strong>Ramu</strong>, kao i izvor
                  <strong>Hajdučka voda</strong>.
                </p>
              </section>

              <img srcSet={`${srebrnoJezero33} 450w, ${srebrnoJezero3} `} alt="Srebrno Jezero 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Na mestima gde je jezero povezano s Dunavom izgrađene su brane, a
                  <strong>1971. godine</strong> premešten je put <strong>Veliko Gradište–Zatonje</strong>, koji sada prelazi
                  preko kopna. U blizini se nalaze naselja <strong>Biskuplje</strong> i <strong>Kisiljevo</strong>.
                </p>
              </section>

              <img srcSet={`${srebrnoJezero44} 450w, ${srebrnoJezero4} `} alt="Srebrno Jezero 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Srebrno jezero ima nepravilni lučni oblik i površinu od <strong>4 km²</strong>. Nalazi se
                  na nadmorskoj visini od <strong>70 metara</strong>, sa prosečnom dubinom od <strong>8 metara</strong>.
                  Voda u jezeru je izuzetno čista zahvaljujući prirodnoj filtraciji kroz
                  peščane dine i odsustvu zagađenja. Jezero je bogato ribom: <strong>amur</strong>,
                  <strong>šaran</strong>, <strong>som</strong>, <strong>štuka</strong>, <strong>smuđ</strong> i druge slatkovodne vrste.
                </p>
              </section>

              <img srcSet={`${srebrnoJezero55} 450w, ${srebrnoJezero5} `} alt="Srebrno Jezero 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Jezero je popularna destinacija za <strong>odmor</strong> i <strong>ribolov</strong>, a u poslednje vreme
                  privlači turiste iz cele centralne Srbije, uprkos ograničenim smeštajnim
                  kapacitetima. Na obali se nalaze hotel <strong>„Srebrno jezero“</strong>, više restorana,
                  T-pansiona, vikend-naselje i najveći <strong>auto-kamp park</strong> u Srbiji.
                  <br /><br />
                  Zbog rastuće popularnosti, često se naziva i <strong>„srpsko more“</strong>, jer Srbija
                  nema izlaz na more.
                  <br /><br />
                  Od <strong>2006. godine</strong> ovde se održava tradicionalni <strong>Šahovski festival „Srebrno jezero“</strong>
                  u organizaciji šahovskog kluba <strong>VGSK</strong>. Na festivalu <strong>2017. godine</strong> učestvovalo je
                  <strong>256 takmičara iz 19 zemalja</strong>.
                  <br /><br />
                  Od <strong>2016. godine</strong> poznati košarkaš <strong>Miloš Teodosić</strong> organizuje letnji dečji
                  košarkaški kamp <strong>Teo4</strong>, koji okuplja mlade sportiste iz celog regiona.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Silver Lake</h2>

              <section lang="en">
                <p>
                  <strong>Silver Lake</strong> is an artificial lake on the right bank of the <strong>Danube River</strong>. It was once a river branch but is now closed off by two dams. It is located in the <strong>Braničevo District</strong>, in eastern Serbia, about <strong>2 km</strong> from <strong>Veliko Gradište</strong>. The lake has an average width of <strong>300 meters</strong> and a length of about <strong>14 kilometers</strong>.
                </p>
              </section>

              <img srcSet={`${srebrnoJezero22} 450w, ${srebrnoJezero2} `} alt="Silver Lake 2" loading="lazy" />

              <section lang="en">
                <p>
                  The lake lies in a wide Danube valley but is surrounded by hills: to the north is <strong>Gorica Hill (282 m)</strong>, to the south <strong>Lipovača Hill (362 m)</strong>, while the west is enclosed by <strong>Veliko Hill</strong> with its highest peak <strong>Anatema (324 m)</strong>. South of the lake is the mouth of the <strong>Pek River</strong> into the Danube, known for its reverse flow during high water levels. Nearby are the medieval fortresses of <strong>Golubac</strong> and <strong>Ram</strong>, as well as the spring <strong>Hajdučka Voda</strong>.
                </p>
              </section>

              <img srcSet={`${srebrnoJezero33} 450w, ${srebrnoJezero3} `} alt="Silver Lake 3" loading="lazy" />

              <section lang="en">
                <p>
                  Dams were built where the lake connects to the Danube, and in <strong>1971</strong> the <strong>Veliko Gradište–Zatonje</strong> road was relocated to cross over land. Nearby settlements include <strong>Biskuplje</strong> and <strong>Kisiljevo</strong>.
                </p>
              </section>

              <img srcSet={`${srebrnoJezero44} 450w, ${srebrnoJezero4} `} alt="Silver Lake 4" loading="lazy" />

              <section lang="en">
                <p>
                  Silver Lake has an irregular arc shape and covers an area of <strong>4 km²</strong>. It is located at an altitude of <strong>70 meters</strong>, with an average depth of <strong>8 meters</strong>. The water is exceptionally clean thanks to natural filtration through numerous sand dunes and the absence of pollution. The lake is rich in fish such as <strong>grass carp</strong>, <strong>carp</strong>, <strong>catfish</strong>, <strong>pike</strong>, <strong>zander</strong>, and other freshwater species.
                </p>
              </section>

              <img srcSet={`${srebrnoJezero55} 450w, ${srebrnoJezero5} `} alt="Silver Lake 5" loading="lazy" />

              <section lang="en">
                <p>
                  The lake has long been a popular destination for <strong>vacationing</strong> and <strong>fishing</strong>, and recently it has been attracting tourists from all over central Serbia, despite limited accommodation capacities. Along the shore, you can find the <strong>“Silver Lake” hotel</strong>, several restaurants, T-type guesthouses, a weekend settlement, and the largest <strong>campground</strong> in Serbia.
                  <br /><br />
                  Due to its growing popularity, it is often nicknamed <strong>“the Serbian Sea”</strong>, as Serbia has no access to the sea.
                  <br /><br />
                  Since <strong>2006</strong>, the traditional <strong>“Silver Lake” Chess Festival</strong> has been held here, organized by the <strong>VGSK chess club</strong>. In <strong>2017</strong>, the festival hosted <strong>256 players from 19 countries</strong>.
                  <br /><br />
                  Since <strong>2016</strong>, famous basketball player <strong>Miloš Teodosić</strong> has been organizing the summer youth basketball camp <strong>Teo4</strong>, attracting young athletes from the entire region.
                </p>
              </section>

            </>
          )}

      </div>

    </>
  );
};


export default SrebrnoJezero;