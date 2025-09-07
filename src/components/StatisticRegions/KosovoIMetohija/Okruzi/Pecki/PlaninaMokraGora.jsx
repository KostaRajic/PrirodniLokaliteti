/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import mokraGora1 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/desktop/mokraGora1.jpg'
import mokraGora2 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/desktop/mokraGora2.jpg'
import mokraGora3 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/desktop/mokraGora3.jpg'
import mokraGora4 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/desktop/mokraGora4.jpg'
import mokraGora11 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/mobile/MmokraGora1.jpg'
import mokraGora22 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/mobile/MmokraGora2.jpg'
import mokraGora33 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/mobile/MmokraGora3.jpg'
import mokraGora44 from '../../../../../assets/images/KosovoIMetohija/Pecki/MokraGora/mobile/MmokraGora4.jpg'

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { peckiOkrugPathRoutes } from './PeckiOkrugPathRoutes';
import { useContextAuth } from '../../../../../Context'
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react'

const PlaninaMokraGora = () => {
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

        <title>{switchLanguage === 'rs' ? "Mokra Gora – Prirodni biser jugozapadne Srbije | Serbia Wonders" : "Mokra Gora – Natural Gem of Southwestern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Mokra Gora je planina na jugozapadu Srbije, poznata po netaknutoj prirodi, bogatoj flori i fauni, sa najvišim vrhom Pogled od 2154 m."
            :
            "Mokra Gora is a mountain in southwestern Serbia, known for its pristine nature, rich flora and fauna, with its highest peak Pogled at 2154 m."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Mokra Gora, planina Srbija, Pogled vrh, priroda Srbije, Prokletije, jezero Gazivode, flora i fauna, jugozapadna Srbija"
            :
            "Mokra Gora, mountain Serbia, Pogled peak, nature Serbia, Prokletije, Gazivode lake, flora and fauna, southwestern Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/mokra-gora`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/mokra-gora"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/mokra-gora"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/mokra-gora"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(peckiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${mokraGora11} 450w, ${mokraGora1} `} alt="Planina Mokra Gora 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Planina Mokra Gora</h2>

              <section lang="sr">
                <p>
                  <strong>Mokra Gora</strong> se nalazi na jugozapadu <strong>Srbije</strong>, na samoj administrativnoj
                  granici sa pokrajinom <strong>Kosovo i Metohija</strong>, između reka <strong>Ibar</strong> i <strong>Beli Drim</strong>.
                  Najviši vrh planine je <strong>Pogled</strong> (2154 m). U blizini se nalazi i <strong>jezero Gazivode</strong>,
                  nastalo pregrađivanjem reke Ibar. Region je poznat po <em>netaknutoj prirodi</em>, iako je zbog
                  slabe kontrole došlo do <em>nezakonite seče šuma</em> i ogoljenja velikih površina.
                </p>
              </section>

              <img srcSet={`${mokraGora22} 450w, ${mokraGora2}`} alt="Planina Mokra Gora 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Mokra Gora je deo planinskog venca <strong>Prokletija</strong>. Njenu prepoznatljivu,
                  <em>krševitu prirodu</em> Jovan Cvijić je nazvao <strong>„Lepotica Balkana”</strong>. Oblikovana je
                  kroz krasne procese na <strong>karbonatnim stenama</strong>, gde je voda igrala ključnu ulogu u formiranju terena.
                  <strong>Tektonska pomeranja</strong> stvorila su <em>venčaste i nabranne planine</em>, a kasnije horstove i rovove.
                  U višim delovima dominira reljef sa <em>vrtačama i uvalama</em>. Pored toga, prisutne su razne vrste
                  <strong>sedimenata, magmatskih i metamorfnih stena</strong>. Česti rasedi i pukotine razdvajaju
                  <em>krečnjačke površine</em> koje ponekad prelaze i 1 m² netaknute mase.
                </p>
              </section>

              <img srcSet={`${mokraGora33} 450w, ${mokraGora3}`} alt="Planina Mokra Gora 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Na Mokroj Gori rastu razne vrste četinara: <strong>jela</strong>, <strong>bor</strong>, <strong>smreka</strong>, <strong>omorika</strong>, kao i endemični
                  <em>petoigličasti bor</em> i <em>bor krivuć</em>. <strong>Bukva</strong> i <strong>hrast</strong> su prisutni na većim površinama,
                  a na padinama se nalaze <strong>grab, jasen i leska</strong>, zahvaljujući <em>vlažnijem zemljištu</em>.
                  <strong>Kleka, divlji glog, šiblje i leska</strong> rastu na brdima, uz pašnjake i krčevine.
                  <br /><br />
                  <strong>Bukva</strong> je dominantna vrsta do 1500 m nadmorske visine, uz nju rastu <strong>javor</strong>, <strong>jasika</strong> i <strong>breza</strong>.
                  Na višim nadmorskim visinama dominiraju <strong>jela</strong>, <strong>smreka</strong> i <strong>bor</strong>, dok u nižim predelima
                  povremeno raste <em>dres</em>.
                  <br /><br />
                  Planina je bogata <em>šumskim i lekovitim biljkama</em>: <strong>planinski šafran</strong>, <strong>visibaba</strong> i <strong>jagorčevina</strong>,
                  a prisutne su i <strong>mahovine</strong> i razne vrste <strong>paprati</strong>.
                  <br /><br />
                  Posebno se izdvaja čuvena <strong>borovnica</strong>, čija se berba organizuje <strong>19. avgusta</strong>, na praznik <strong>Preobraženje</strong>.
                  <br /><br />
                  Uspešno rastu i brojne vrste <strong>pečuraka</strong>, među kojima su najpoznatije: <strong>vrganj</strong>, <strong>lisičarka</strong> i <strong>smrčak</strong>.
                </p>
              </section>

              <img srcSet={`${mokraGora44} 450w, ${mokraGora4}`} alt="Planina Mokra Gora 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Mokra Gora je stanište mnogim <strong>divljim životinjama</strong>: <strong>lisica</strong>, <strong>vuk</strong>, <strong>divlja svinja</strong>, <strong>medved</strong>,
                  <strong>srna</strong>, <strong>jazavac</strong>, <strong>zec</strong> i <strong>divlja mačka</strong>. Na visinama iznad 1500 m živi i
                  <strong>divlja kokoška</strong> i njen mužjak <strong>teter</strong>, koji je vidljiv samo u vreme parenja,
                  od <strong>20. aprila do 10. maja</strong>, kada emituje karakterističan <em>zov sličan pesmi</em>.
                  <br /><br />
                  U prošlosti su se ovde <em>gajile ovce</em> – mešavina <strong>pećinskog</strong> i <strong>kosovskog soja (rude)</strong>,
                  kao i <strong>planinska goveda buše</strong>, male privredne vrednosti. <strong>Brdski konji</strong> bili su manjih dimenzija,
                  ali veoma <em>izdržljivi</em>.
                  <br /><br />
                  Tokom <strong>Drugog svetskog rata</strong>, stočni fond je uništen tokom dve organizovane pljačke
                  od strane <strong>balista i okupatorskih snaga</strong>, kada je opljačkano oko <strong>8000 grla stoke</strong>,
                  a fond nikada nije obnovljen.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Mount Mokra Gora</h2>

              <section lang="en">
                <p>
                  <strong>Mokra Gora</strong> is located in the southwest of <strong>Serbia</strong>, right on the administrative
                  border with the province of <strong>Kosovo and Metohija</strong>, between the <strong>Ibar</strong> and <strong>White Drin</strong> rivers.
                  The highest peak of the mountain is <strong>Pogled</strong> (2154 m). Nearby is <strong>Lake Gazivode</strong>,
                  created by damming the Ibar River. The region is known for its <em>untouched nature</em>, although
                  due to weak control, <em>illegal logging</em> has led to deforestation of large areas.
                </p>
              </section>

              <img srcSet={`${mokraGora22} 450w, ${mokraGora2}`} alt="Mount Mokra Gora 2" loading="lazy" />

              <section lang="en">
                <p>
                  Mokra Gora is part of the <strong>Prokletije</strong> mountain range. Its distinctive
                  <em>karst terrain</em> was described by Jovan Cvijić as the <strong>"Beauty of the Balkans"</strong>. It was shaped
                  by karst processes on <strong>carbonate rocks</strong>, where water played a key role in terrain formation.
                  <strong>Tectonic movements</strong> created <em>folded and belt-like mountains</em>, later forming horsts and grabens.
                  In higher elevations, the landscape is dominated by <em>sinkholes and basins</em>. There are various types of
                  <strong>sedimentary, igneous, and metamorphic rocks</strong>. Frequent faults and cracks divide
                  <em>limestone surfaces</em> that sometimes exceed 1 m² in undisturbed size.
                </p>
              </section>

              <img srcSet={`${mokraGora33} 450w, ${mokraGora3}`} alt="Mount Mokra Gora 3" loading="lazy" />

              <section lang="en">
                <p>
                  Various coniferous species grow on Mokra Gora: <strong>fir</strong>, <strong>pine</strong>, <strong>spruce</strong>, <strong>Serbian spruce</strong>,
                  as well as endemic <em>five-needle pine</em> and <em>curly pine</em>. <strong>Beech</strong> and <strong>oak</strong> cover larger areas,
                  while the slopes host <strong>hornbeam, ash, and hazel</strong> thanks to <em>moist soils</em>.
                  <strong>Juniper, wild hawthorn, shrubbery, and hazel</strong> grow on hills along with pastures and cleared areas.
                  <br /><br />
                  <strong>Beech</strong> dominates up to 1500 m above sea level, alongside <strong>maple</strong>, <strong>aspen</strong>, and <strong>birch</strong>.
                  Higher elevations feature <strong>fir</strong>, <strong>spruce</strong>, and <strong>pine</strong>, while in lower regions,
                  <em>meadow grass (dres)</em> occasionally appears.
                  <br /><br />
                  The mountain is rich in <em>forest and medicinal plants</em> such as <strong>mountain crocus</strong>, <strong>snowdrop</strong>, and <strong>primrose</strong>,
                  as well as <strong>mosses</strong> and many types of <strong>ferns</strong>.
                  <br /><br />
                  A particular highlight is the famous <strong>blueberry</strong>, whose harvest takes place on <strong>August 19th</strong>,
                  during the holiday of <strong>Transfiguration</strong>.
                  <br /><br />
                  Many types of <strong>mushrooms</strong> also thrive here, including the well-known <strong>porcini</strong>, <strong>chanterelle</strong>, and <strong>morel</strong>.
                </p>
              </section>

              <img srcSet={`${mokraGora44} 450w, ${mokraGora4}`} alt="Mount Mokra Gora 4" loading="lazy" />

              <section lang="en">
                <p>
                  Mokra Gora is home to many species of <strong>wild animals</strong>: <strong>fox</strong>, <strong>wolf</strong>, <strong>wild boar</strong>, <strong>bear</strong>,
                  <strong>roe deer</strong>, <strong>badger</strong>, <strong>hare</strong>, and <strong>wildcat</strong>. Above 1500 m elevation lives the
                  <strong>wild hen</strong> and its male <strong>capercaillie</strong>, which is visible only during the mating season,
                  from <strong>April 20 to May 10</strong>, when it produces a distinctive <em>song-like call</em>.
                  <br /><br />
                  In the past, <em>sheep were raised</em> here – a mix of the <strong>Peć breed</strong> and the <strong>Kosovo rudë</strong>,
                  along with <strong>mountain Buša cattle</strong>, which had low economic value. <strong>Mountain horses</strong> were small in size,
                  but very <em>resilient</em>.
                  <br /><br />
                  During <strong>World War II</strong>, the livestock population was destroyed in two organized raids
                  by <strong>Ballist forces and occupying troops</strong>, during which around <strong>8000 heads of livestock</strong> were looted,
                  and the population was never replenished.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default PlaninaMokraGora;