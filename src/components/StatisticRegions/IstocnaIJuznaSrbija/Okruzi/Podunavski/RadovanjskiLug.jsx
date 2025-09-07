/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import radovanjskiLug1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/desktop/radovanskiLug1.jpg";
import radovanjskiLug2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/desktop/radovanskiLug2.jpg";
import radovanjskiLug3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/desktop/radovanskiLug3.jpg";
import radovanjskiLug4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/desktop/radovanskiLug4.jpg";
import radovanjskiLug11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/mobile/radovanskiLugM1.jpg";
import radovanjskiLug22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/mobile/radovanskiLugM2.jpg";
import radovanjskiLug33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/mobile/radovanskiLugM3.jpg";
import radovanjskiLug44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/RadovanjskiLug/mobile/radovanskiLugM4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { podunavskiOkrugPathRoutes } from "./PodunavskiOkrugPathRouts";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const RadovanjskiLug = () => {
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

        <title>{switchLanguage === 'rs' ? "Radovanjski Lug – Istorijski Spomenik i Crkva Zahvalnica | Serbia Wonders" : "Radovanjski Lug – Historical Monument and Memorial Church | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Radovanjski Lug je spomen-kompleks kod Velike Plane sa mestom ubistva vožda Karađorđa, crkvom Svetog arhangela Gavrila i značajem u istoriji Prvog srpskog ustanka."
            :
            "Radovanjski Lug is a memorial complex near Velika Plana featuring the site of leader Karađorđe's assassination, the Church of the Archangel Gabriel, and an important place in the First Serbian Uprising history."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Radovanjski Lug, Karađorđe, Prvi srpski ustanak, crkva Zahvalnica, Sveti arhangel Gavrilo, Velika Plana, srpska istorija, kulturno dobro"
            :
            "Radovanjski Lug, Karađorđe, First Serbian Uprising, Church of Gratitude, Archangel Gabriel, Velika Plana, Serbian history, cultural heritage"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/radovanjski-lug`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/radovanjski-lug"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/radovanjski-lug"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/radovanjski-lug"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(podunavskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${radovanjskiLug11} 450w, ${radovanjskiLug1} `} alt="Radovanjski Lug 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Radovanjski Lug</h2>

              <section lang="sr">
                <p>
                  <strong>Radovanjski Lug</strong> je spomen-kompleks koji se nalazi u stoletnoj šumi kod sela <em>Radovanje</em>, na 8,5 km od <em>Velike Plane</em>. Obuhvata površinu od <strong>46 ha</strong> i ima status <strong>kulturnog dobra od izuzetnog značaja</strong>.
                  <br /><br />
                  Kompleks uključuje mesto ubistva i prvobitni grob vožda <strong>Đorđa Petrovića – Karađorđa</strong>, crkvu posvećenu <em>Svetom arhangelu Gavrilu</em> (poznatu kao <strong>Crkva Zahvalnica</strong>), parohijski dom, letnju pozornicu i ulaznu kapiju.
                </p>
              </section>

              <img srcSet={`${radovanjskiLug22} 450w, ${radovanjskiLug2}`} alt="Radovanjski Lug 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Vožd Karađorđe</strong> je pokrenuo <strong>Prvi srpski ustanak (1804–1813)</strong>, a njegova tragična sudbina dodatno ga izdvaja u srpskoj istoriji.
                  <br /><br />
                  Godine <strong>1817.</strong> tajno se vratio u Srbiju iz Rusije, zajedno sa pisarom <em>Naumom Krnarom</em>. Na savet kuma <strong>Vujice Vulićevića</strong> sklonio se u kolibu u <em>Radovanjskom lugu</em>, gde su ga 13. jula (26. jula po novom kalendaru), na praznik <em>Arhangela Gavrila</em>, ubili zaverenici po nalogu <strong>kneza Miloša Obrenovića</strong>.
                </p>
              </section>

              <img srcSet={`${radovanjskiLug33} 450w, ${radovanjskiLug3}`} alt="Radovanjski Lug 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Karađorđe je sahranjen sto koraka od kolibe, bez glave, koja je odrana i poslata u <strong>Carigrad</strong> kako bi knez Miloš zadobio poverenje <em>Porte</em>.
                  <br /><br />
                  Njegovo telo je više puta premeštano, a konačno je preneto u crkvu <strong>Svetog Đorđa na Oplencu</strong>. Prvobitni grob je obeležen drvenim krstom 1845. godine, a danas tu stoje mermerna ploča, veliki drveni krst i gvozdena ograda.
                </p>
              </section>

              <img srcSet={`${radovanjskiLug44} 450w, ${radovanjskiLug4}`} alt="Radovanjski Lug 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Na mestu ubistva Karađorđa, <strong>1920. godine</strong> postavljen je kamen temeljac za <strong>crkvu Svetog arhangela Gavrila</strong>, poznatu kao <strong>crkva Zahvalnica</strong>, u znak zahvalnosti naroda za njegovo delo.
                  <br /><br />
                  Crkva je građena po projektu <strong>arhitekte Vasilija Androsova</strong>, kao umanjena verzija <em>oplenačke crkve</em>. Jednobrodna je građevina dimenzija <strong>13,58 x 10,53 m</strong>, sa osmostranom kupolom, zidana u <em>srpsko-vizantijskom stilu</em>.
                  <br /><br />
                  Unutrašnjost je podeljena na pripratu, naos i oltar, koji se verovatno nalazi na mestu Karađorđevog stradanja. Ikonostas sadrži sedam ikona u srednjovekovnom stilu, a u naosu se nalazi portret Karađorđa u prirodnoj veličini, delo slikara <strong>Paje Jovanovića</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Radovanjski Forest</h2>

              <section lang="en"> <p> <strong>Radovanjski Lug</strong> is a memorial complex located in a centuries-old forest near the village of <em>Radovanje</em>, about 8.5 km from <em>Velika Plana</em>. It covers an area of <strong>46 hectares</strong> and holds the status of a <strong>cultural monument of exceptional importance</strong>. <br /><br /> The complex includes the site of the assassination and original grave of the national leader <strong>Đorđe Petrović – Karađorđe</strong>, a church dedicated to <em>Saint Archangel Gabriel</em> (known as the <strong>Thanksgiving Church</strong>), a parish home, a summer stage, and an entrance gate. </p> </section>
              <img srcSet={`${radovanjskiLug22} 450w, ${radovanjskiLug2}`} alt="Radovanjski Lug 2" loading="lazy" />

              <section lang="en"> <p> <strong>Leader Karađorđe</strong> initiated the <strong>First Serbian Uprising (1804–1813)</strong>, and his tragic fate further distinguishes him in Serbian history. <br /><br /> In <strong>1817</strong>, he secretly returned to Serbia from Russia, accompanied by his secretary <em>Naum Krnar</em>. On the advice of his godfather, <strong>Vujica Vulićević</strong>, he took refuge in a hut in <em>Radovanjski Lug</em>, where, on July 13 (July 26 in the new calendar), the feast day of <em>Archangel Gabriel</em>, he was assassinated by conspirators on the orders of <strong>Prince Miloš Obrenović</strong>. </p> </section>
              <img srcSet={`${radovanjskiLug33} 450w, ${radovanjskiLug3}`} alt="Radovanjski Lug 3" loading="lazy" />

              <section lang="en"> <p> Karađorđe was buried one hundred steps from the hut, without his head, which was skinned and sent to <strong>Constantinople</strong> so that Prince Miloš could gain the trust of the <em>Ottoman Porte</em>. <br /><br /> His body was relocated several times, and finally transferred to the <strong>Church of Saint George at Oplenac</strong>. The original grave was marked with a wooden cross in 1845, and today a marble slab, a large wooden cross, and an iron fence mark the site. </p> </section>
              <img srcSet={`${radovanjskiLug44} 450w, ${radovanjskiLug4}`} alt="Radovanjski Lug 4" loading="lazy" />

              <section lang="en"> <p> At the site of Karađorđe’s assassination, the cornerstone for the <strong>Church of Saint Archangel Gabriel</strong>, also known as the <strong>Thanksgiving Church</strong>, was laid in <strong>1920</strong>, as a token of the people’s gratitude for his legacy. <br /><br /> The church was built according to the design of <strong>architect Vasilije Androsov</strong>, as a smaller version of the <em>Oplenac Church</em>. It is a single-nave structure measuring <strong>13.58 x 10.53 meters</strong>, with an octagonal dome, built in the <em>Serbo-Byzantine style</em>. <br /><br /> The interior is divided into a narthex, nave, and altar, which is believed to be located at the exact site of Karađorđe’s martyrdom. The iconostasis contains seven icons in the medieval style, and in the nave there is a life-sized portrait of Karađorđe, painted by <strong>Paja Jovanović</strong>. </p> </section>


            </>
          )}

      </div>
    </>
  );
};


export default RadovanjskiLug;