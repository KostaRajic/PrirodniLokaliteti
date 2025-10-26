/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import cemernik1 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/desktop/cemernik1.jpg'
import cemernik2 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/desktop/cemernik2.jpg'
import cemernik3 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/desktop/cemernik3.jpg'
import cemernik4 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/desktop/cemernik4.jpg'
import cemernik5 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/desktop/cemernik5.jpg'
import cemernik11 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/mobile/cemernikM1.jpg'
import cemernik22 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/mobile/cemernikM2.jpg'
import cemernik33 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/mobile/cemernikM3.jpg'
import cemernik44 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/mobile/cemernikM4.jpg'
import cemernik55 from '../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Cemernik/mobile/cemernikM5.jpg'


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pcinjskiOkrugPathRoutes } from './PcinjskiOkrugPathRoutes'
import { useContextAuth } from '../../../../../Context'
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react'

const PlaninaCemernik = () => {
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

        <title>{switchLanguage === 'rs' ? "Planina Čemernik – Divlja lepota južne Srbije | Serbia Wonders" : "Čemernik Mountain – The Wild Beauty of Southern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Planina Čemernik, sa vrhom Vrlo Osoje (1638 m), nalazi se u blizini Vlasinskog jezera i omiljena je destinacija planinara. Poznata po prirodnim lepotama, biljkama poput čemerike i istorijskim toponimima."
            :
            "Čemernik Mountain, with its peak Vrlo Osoje (1638 m), lies near Vlasina Lake and is a popular hiking destination. Known for scenic landscapes, native flora like Veratrum, and traces of historical herding culture."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Planina Čemernik, Vrlo Osoje, Vlasinsko jezero, planinarenje, priroda Srbije, Surdulica, Crna Trava, čemerika, Ašani, Karačani, molibden, vidikovci, južna Srbija, Preslap"
            :
            "Čemernik Mountain, Vrlo Osoje, Vlasina Lake, hiking in Serbia, nature, Surdulica, Crna Trava, Veratrum plant, Ashani shepherds, molybdenum mining, lookouts, southern Serbia, Preslap"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-cemernik`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-cemernik"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-cemernik"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/planina-cemernik"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pcinjskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${cemernik11} 450w, ${cemernik1} `} alt="Planina Čemernik 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Planina Čemernik</h1>

              <section lang="sr">
                <p>
                  Čemernik rado i često posećuju planinari i preduzimljivi turisti koji
                  borave kraj <strong>Vlasinskog jezera</strong>, jer je lako doći do samog vrha (<em>Vrlo Osoje 1638 m</em>). Put je širok, a do vrha se stiže za 2 do 2,5 sata. Sa obronaka se pruža prelep pogled na jezero i okolne planine, kao što su <strong>Strešer</strong>, <strong>Gramada</strong>, <strong>Vardenik</strong> i <strong>Ostrozub</strong>. Na zapadu se spušta do <strong>Sićevačke klisure</strong>, na severu se graniči sa <strong>Ostrozubom</strong>. <strong>Vlasina</strong> ga sa severozapada odvaja od Gramade, dok je na jugu reka <strong>Vrla</strong>, preko koje se nalazi <strong>Vardenik</strong>. Planina se nalazi na teritoriji opštine <strong>Surdulica</strong>.
                </p>
              </section>

              <img srcSet={`${cemernik22} 450w, ${cemernik2}`} alt="Planina Čemernik 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Čemernik pripada planinama srednje visine i predstavlja tipičnu
                  impozantnu planinu sa zaobljenim vrhovima. Sastavljen je od starih
                  kristalastih škriljaca iz paleozoika, koji su mestimično probijeni
                  mlađim dacitima. Planina je dobila ime po otrovnoj biljci <strong>čemerici</strong>
                  (<em>Veratrum</em>), koju, pored ostalog planinskog bilja, ima u izobilju. Sastav
                  planine čine kristalasti škriljci prve grupe. Površina je uglavnom
                  ogoljena, dok su padine delimično prekrivene šumom. U istočnom podnožju
                  nalaze se najveća naselja <strong>Vlasina Rid</strong> i <strong>Crna Trava</strong>, dok su na zapadnom
                  delu naselja <strong>Mlačište</strong>, <strong>Mačkatića</strong>, <strong>Mañak</strong> i <strong>Ljutež</strong>.
                </p>
              </section>

              <img srcSet={`${cemernik33} 450w, ${cemernik3}`} alt="Planina Čemernik 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Na Čemerniku su do 1941. godine svoja stada napasali i <strong>Ašani</strong> ili
                  <strong>Karačani</strong>, poreklom iz severne Grčke. Narod ih je još zvao i <em>Crnovuncima</em>,
                  jer su njihove ovce imale crno runo i bile izuzetno izdržljive na
                  vremenske uslove. O njihovom boravku na ovoj planini svedoče i toponimi:
                  <strong>Ašanske kolibe</strong> i <strong>Ašanske livade</strong>.
                </p>
              </section>

              <img srcSet={`${cemernik44} 450w, ${cemernik4}`} alt="Planina Čemernik 4" loading="lazy" />

              <section lang="sr">
                <p>
                  U <strong>Mačkatici</strong> je novembra 1940. godine jedna nemačka firma započela
                  eksploataciju rude <strong>molibdena</strong>. Rudarstvo je obustavljeno 1950. godine.
                  <br /><br />
                  Najviši vrh planine je <strong>Vrlo Osoje</strong>, prema podacima OpenTopoMap, koji ima
                  visinu od <strong>1638 m</strong>. Kota koja je na topografskoj karti VGI označena kao
                  <strong>Veliki Čemernik</strong> (1638 m) nije na najvišoj tački planine; nekoliko je
                  metara niža od Vrlog Osoja i nalazi se gotovo 300 metara jugozapadno.
                  Oba vrha se nalaze na ravnom, zaobljenom i pošumljenom bregu.
                </p>
              </section>

              <img srcSet={`${cemernik55} 450w, ${cemernik5}`} alt="Planina Čemernik 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Do vrha se može stići sa hotela na <strong>Vlasinskom Ridu</strong>. Dužina staze do vrha
                  je oko 7 km, a visinska razlika iznosi 420 m. Staza vodi preko vrha
                  <strong>Preslap</strong> (<em>1538 m</em>), koji je lep vidikovac, za razliku od vrha Čemernika,
                  koji je prekriven četinarskom šumom.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Čemernik Mountain</h1>

              <section lang="en">
                <p>
                  Čemernik is often visited by hikers and adventurous tourists staying near <strong>Lake Vlasina</strong>, as it is easy to reach the summit (<em>Vrlo Osoje 1638 m</em>). The path is wide, and it takes about 2 to 2.5 hours to reach the top. From the slopes, there is a beautiful view of the lake and surrounding mountains, such as <strong>Strešer</strong>, <strong>Gramada</strong>, <strong>Vardenik</strong>, and <strong>Ostrozub</strong>. To the west, it descends to the <strong>Sićevo Gorge</strong>, to the north it borders <strong>Ostrozub</strong>. <strong>Vlasina</strong> separates it from Gramada to the northwest, while to the south, the <strong>Vrla</strong> river flows, beyond which lies <strong>Vardenik</strong>. The mountain is located within the municipality of <strong>Surdulica</strong>.
                </p>
              </section>

              <img srcSet={`${cemernik22} 450w, ${cemernik2}`} alt="Čemernik Mountain 2" loading="lazy" />


              <section lang="en">
                <p>
                  Čemernik belongs to medium-altitude mountains and represents a typical imposing mountain with rounded peaks. It is composed of old crystalline schists from the Paleozoic era, locally intruded by younger dacites. The mountain is named after the poisonous plant <strong>veratrum</strong> (<em>Veratrum</em>), which, alongside other mountain flora, is abundant here. The composition of the mountain consists of crystalline schists of the first group. The surface is mostly bare, while the slopes are partially covered with forest. The largest settlements are located at the eastern foothills: <strong>Vlasina Rid</strong> and <strong>Crna Trava</strong>, while on the western side are the settlements of <strong>Mlačište</strong>, <strong>Mačkatića</strong>, <strong>Mañak</strong>, and <strong>Ljutež</strong>.
                </p>
              </section>

              <img srcSet={`${cemernik33} 450w, ${cemernik3}`} alt="Čemernik Mountain 3" loading="lazy" />

              <section lang="en">
                <p>
                  Until 1941, shepherds known as <strong>Ašani</strong> or <strong>Karačani</strong>, originating from northern Greece, grazed their flocks on Čemernik. The locals also called them <em>Crnovunci</em> because their sheep had black wool and were extremely resilient to weather conditions. Their presence on this mountain is also evidenced by toponyms: <strong>Ašanske huts</strong> and <strong>Ašanske meadows</strong>.
                </p>
              </section>

              <img srcSet={`${cemernik44} 450w, ${cemernik4}`} alt="Čemernik Mountain 4" loading="lazy" />

              <section lang="en">
                <p>
                  In <strong>Mačkatića</strong>, in November 1940, a German company started molybdenum ore mining. Mining activities ceased in 1950.
                  <br /><br />
                  The highest peak of the mountain is <strong>Vrlo Osoje</strong>, according to OpenTopoMap data, which stands at <strong>1638 m</strong>. The contour marked on the VGI topographic map as <strong>Veliki Čemernik</strong> (1638 m) is not the highest point of the mountain; it is several meters lower than Vrlo Osoje and is located almost 300 meters southwest. Both peaks are situated on a flat, rounded, and forested ridge.
                </p>
              </section>

              <img srcSet={`${cemernik55} 450w, ${cemernik5}`} alt="Čemernik Mountain 5" loading="lazy" />

              <section lang="en">
                <p>
                  The summit can be reached from the hotel at <strong>Vlasinski Rid</strong>. The trail length to the summit is about 7 km, with an elevation gain of 420 m. The trail passes over the peak of <strong>Preslap</strong> (<em>1538 m</em>), which offers a nice viewpoint, unlike the Čemernik summit, which is covered by coniferous forest.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default PlaninaCemernik;