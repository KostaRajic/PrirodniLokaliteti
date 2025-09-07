/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import podgradje1 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/desktop/tvrdjavaPodgradja1.jpg";
import podgradje2 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/desktop/tvrdjavaPodgradja2.jpg";
import podgradje3 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/desktop/tvrdjavaPodgradja3.jpg";
import podgradje4 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/desktop/tvrdjavaPodgradja4.jpg";
import podgradje11 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/mobile/MtvrdjavaPodgradja1.jpg";
import podgradje22 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/mobile/MtvrdjavaPodgradja2.jpg";
import podgradje33 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/mobile/MtvrdjavaPodgradja3.jpg";
import podgradje44 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/PodgradjaTvrdjava/mobile/MtvrdjavaPodgradja4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { gnjilanskiOkrugPathRoutes } from "./GnjilanskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const TvrdjavaPodgradje = () => {
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

        <title>{switchLanguage === 'rs' ? "Tvrđava Podgrađe – Antičko utvrđenje kod Gnjilana | Serbia Wonders" : "Podgrađe Fortress – Ancient Fortification near Gnjilane | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Tvrđava Podgrađe kod Gnjilana datira iz Justinijanskog perioda 6. veka. Sačinjena je od citadele i donjeg grada, sa impozantnim zidinama i kulama. Otkriveni arheološki nalazi i podzemni kanal svedoče o njenoj strateškoj i istorijskoj važnosti."
            :
            "Podgrađe Fortress, located near Gnjilane, dates back to the 6th century Justinian era. Featuring a citadel, towers, defensive walls, and an underground canal, it is a monument of great historical and archaeological importance in the Dardania region."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Tvrđava Podgrađe, Gnjilane, Karadak planine, Justinijanska era, citadela, donžonska kula, Dardanija, arheološka istraživanja, mlečni kamen, isceliteljski kamen, reka Morava, srpska tvrđava, antičko utvrđenje, kulturni spomenik"
            :
            "Podgradje Fortress, Gnjilane, Karadak mountains, Justinian era, Dardania, citadel, donjon tower, ancient fortification, archaeological site, healing stone, Milk Stone, Serbian heritage, cultural monument"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/tvrdjava-podgradje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/tvrdjava-podgradje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/tvrdjava-podgradje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/tvrdjava-podgradje"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(gnjilanskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${podgradje11} 450w, ${podgradje1} `} alt="Tvrđava Podgrađe" loading="lazy" />


        {switchLanguage === 'rs' ?
          (
            <>


              <h2>Tvrđava Podgrađe</h2>
              <section lang="sr">
                <p>
                  <strong>Tvrđava Podgrađe</strong> nalazi se na brdu koje se uzdiže oko <strong>50 metara iznad rečne doline</strong>. Sastoji se od <strong>Donjeg Grada</strong>, opasanog zidinama, i bolje očuvane <strong>citadele (Gornji Grad)</strong> na vrhu brda.
                  <br /><br />
                  Raspored Gornjeg Grada zasniva se na nepravilnom <em>petouglu</em> koji prati oblik vrha brda. Tri ugla – jugozapadni, severozapadni i severoistočni – ojačana su <strong>kula­ma</strong>. Na najvišoj tački tvrđave nalazi se <strong>donžonska kula</strong>, četvrtaste osnove (oko 8x8 m). Zapadni zid kule sačuvan je do visine od 10 metara sa jasno vidljivim ulazom. Na jugoistočnom zidu nalaze se <em>strelišta</em>, dok se na istočnom zidu vide tragovi još jednog strelišta.
                  <br /><br />
                  Ulaz u Gornji Grad verovatno se nalazio sa <strong>severozapadne strane</strong>, gde su vidljivi ostaci pristupne rampe. U toj zoni pronađeni su i tragovi drugih zgrada. <strong>Zidine</strong> tvrđave su na pojedinim mestima sačuvane do visine od <strong>4 metra</strong>.
                </p>
              </section>

              <img srcSet={`${podgradje22} 450w, ${podgradje2}`} alt="Tvrđava Podgrađe 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Tvrđava Podgrađe nalazi se <strong>10 km jugoistočno od Gnjilana</strong> i <strong>1 km od sela Podgrađe</strong>, u <strong>planinama Karadak</strong>, na nadmorskoj visini od <strong>567 metara</strong>. U njenom podnožju protiče <strong>reka Morava e Binçes</strong>.
                  <br /><br />
                  Unutrašnja površina tvrđave iznosi <strong>1,2 hektara</strong> i tipična je za <em>Justinijansku eru</em> (6. vek). Bila je deo mreže utvrđenja izgrađenih u oblasti <strong>Dardanije</strong> krajem kasne antike. To potvrđuju i istorijski izvori i <strong>novčići</strong> pronađeni tokom arheoloških istraživanja.
                  Najstariji pronađeni novčić potiče iz perioda <strong>246–249. godine</strong> i nosi lik <strong>Otacije Severe</strong>, žene cara <strong>Filipa</strong>.
                </p>
              </section>

              <img srcSet={`${podgradje33} 450w, ${podgradje3}`} alt="Tvrđava Podgrađe 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Tvrđava ima oblik <strong>nepravilnog petougla</strong>, a južna strana <strong>centralne kule</strong> služila je kao <em>zaštitni zid citadele</em>, što predstavlja jednu od njenih posebnosti.
                  <br /><br />
                  Postoje <strong>tri zaštitna zida</strong>, označena kao prvi, drugi i treći. Delovi tih zidova su vidljivi iznad zemlje, dok su ostali zatrpani.
                  <strong>Prvi zid</strong> je dug <strong>17 metara</strong> i visok <strong>4 metra</strong>. <strong>Drugi zid</strong> dugačak je <strong>27 metara</strong> i u gornjem delu pruža pogled na okolinu. Njegove zidine dostižu visinu do <strong>10 metara</strong> i imaju <em>simetrične kvadratne dimenzije</em> 8x8 metara.
                </p>
              </section>

              <img srcSet={`${podgradje44} 450w, ${podgradje4}`} alt="Tvrđava Podgrađe 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Deo tvrđave čine i manji <strong>tornjevi</strong> postavljeni na <strong>zapadnoj, severnoj i jugoistočnoj</strong> strani, koji povremeno dostižu visinu od <strong>4 metra</strong>.
                  <br /><br />
                  Zidovi su građeni od <em>tesanog i netesanog kamena</em>, vezanih malterom od <strong>krečnog lepka</strong>. Tokom radova 2007. godine otkriven je <strong>podzemni kanal</strong> koji povezuje unutrašnjost tvrđave sa rekom Moravom.
                  <br /><br />
                  U tvrđavi se nalazi i čuveni <strong>„Mlečni kamen”</strong>, poznat u narodu kao <em>isceliteljski kamen</em>. Tvrđava Podgrađe je <strong>spomenik velikog istorijskog, kulturnog i naučnog značaja</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>


              <h2>Podgrađe Fortress</h2>
              <section lang="en">
                <p>
                  <strong>Podgrađe Fortress</strong> is located on a hill that rises approximately <strong>50 meters above the river valley</strong>. It consists of the <strong>Lower Town</strong>, surrounded by walls, and the better-preserved <strong>citadel (Upper Town)</strong> at the top of the hill.
                  <br /><br />
                  The layout of the Upper Town follows an irregular <em>pentagon</em> shape, conforming to the contour of the hilltop. Three corners — southwest, northwest, and northeast — are reinforced with <strong>towers</strong>. At the highest point of the fortress is a <strong>donjon tower</strong> with a roughly square base (about 8x8 meters). The western wall of the tower is preserved up to a height of 10 meters and features a clearly visible entrance. The southeastern wall contains <em>arrow slits</em>, while traces of another arrow slit can be seen on the eastern wall.
                  <br /><br />
                  The entrance to the Upper Town was likely on the <strong>northwestern side</strong>, where remnants of an access ramp are visible. Traces of other structures have also been found in that area. The <strong>walls</strong> of the fortress are preserved in places up to <strong>4 meters</strong> high.
                </p>
              </section>

              <img srcSet={`${podgradje22} 450w, ${podgradje2}`} alt="Podgrađe Fortress 2" loading="lazy" />

              <section lang="en">
                <p>
                  Podgrađe Fortress is located <strong>10 km southeast of Gnjilane</strong> and <strong>1 km from the village of Podgrađe</strong>, in the <strong>Karadak Mountains</strong>, at an altitude of <strong>567 meters</strong>. At the base of the hill flows the <strong>Morava e Binçes River</strong>.
                  <br /><br />
                  The interior surface of the fortress covers <strong>1.2 hectares</strong> and is typical of the <em>Justinian era</em> (6th century). It was part of a network of fortifications built in the region of <strong>Dardania</strong> during the late antiquity period. This is confirmed by historical records and <strong>coins</strong> found during archaeological investigations.
                  The oldest coin discovered at the site dates from <strong>246–249 AD</strong> and bears the image of <strong>Otacilia Severa</strong>, wife of Emperor <strong>Philip</strong>.
                </p>
              </section>

              <img srcSet={`${podgradje33} 450w, ${podgradje3}`} alt="Podgrađe Fortress 3" loading="lazy" />

              <section lang="en">
                <p>
                  The fortress has the shape of an <strong>irregular pentagon</strong>, with the southern wall of the <strong>central tower</strong> serving as a <em>protective wall of the citadel</em>, which is one of its distinctive features.
                  <br /><br />
                  There are <strong>three defensive walls</strong>, referred to as the first, second, and third. Parts of these walls are visible above ground, while the rest remains buried.
                  The <strong>first wall</strong> is <strong>17 meters</strong> long and <strong>4 meters</strong> high. The <strong>second wall</strong> is <strong>27 meters</strong> long and provides an upper-level view of the surrounding area. Its walls reach up to <strong>10 meters</strong> in height and feature <em>symmetrical square dimensions</em> of 8x8 meters.
                </p>
              </section>

              <img srcSet={`${podgradje44} 450w, ${podgradje4}`} alt="Podgrađe Fortress 4" loading="lazy" />

              <section lang="en">
                <p>
                  The fortress also features smaller <strong>towers</strong> on the <strong>western, northern, and southeastern</strong> sides, which occasionally reach a height of <strong>4 meters</strong>.
                  <br /><br />
                  The walls are built of <em>cut and uncut stone</em>, bonded with <strong>lime mortar</strong>. During conservation work in 2007, a <strong>subterranean canal</strong> was discovered, connecting the interior of the fortress to the Morava River.
                  <br /><br />
                  The fortress is also home to the so-called <strong>"Milk Stone"</strong>, locally known as a <em>healing stone</em>. Podgrađe Fortress is a <strong>monument of great historical, cultural, and scientific importance</strong>.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default TvrdjavaPodgradje;