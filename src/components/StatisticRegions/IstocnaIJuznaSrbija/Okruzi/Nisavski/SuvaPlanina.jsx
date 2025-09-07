/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import suvaPlanina1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/desktop/suvaPlanina1.jpg";
import suvaPlanina2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/desktop/suvaPlanina2.jpg";
import suvaPlanina3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/desktop/suvaPlanina3.jpg";
import suvaPlanina4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/desktop/suvaPlanina4.jpg";
import suvaPlanina5 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/desktop/suvaPlanina5.jpg";
import suvaPlanina6 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/desktop/suvaPlanina6.jpg";
import suvaPlanina11 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/mobile/suvaPlaninaM1.jpg";
import suvaPlanina22 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/mobile/suvaPlaninaM2.jpg";
import suvaPlanina33 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/mobile/suvaPlaninaM3.jpg";
import suvaPlanina44 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/mobile/suvaPlaninaM4.jpg";
import suvaPlanina55 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/mobile/suvaPlaninaM5.jpg";
import suvaPlanina66 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SuvaPlanina/mobile/suvaPlaninaM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SuvaPlanina = () => {
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

        <title>{switchLanguage === 'rs' ? "Suva Planina – Rezervat prirode i planinski masiv | Serbia Wonders" : "Suva Mountain – Nature Reserve and Mountain Massif | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Suva Planina je planinski masiv u jugoistočnoj Srbiji, poznat po svom krasnom reljefu, bogatoj flori i fauni, i statusu specijalnog rezervata prirode. Idealno mesto za ljubitelje prirode i planinarenja."
            :
            "Suva Planina is a mountain massif in southeastern Serbia, famous for its karst relief, rich flora and fauna, and protected status as a special nature reserve. A perfect destination for nature lovers and hikers."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Suva Planina, rezervat prirode, planina u Srbiji, planinarenje, jugoistočna Srbija, Niška Banja, priroda, endemske biljke, geonasleđe Srbije, turizam, planinski masiv"
            :
            "Suva Planina, nature reserve, mountain in Serbia, hiking, southeastern Serbia, Niška Banja, nature, endemic plants, Serbian geosite, tourism, mountain massif"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/suva-planina`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/suva-planina"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/suva-planina"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/suva-planina"
        />

      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(nisavskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${suvaPlanina11} 450w, ${suvaPlanina1} `} alt="Suva Planina 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h2>Suva Planina</h2>
              <section lang="sr">
                <p>
                  <strong>Suva planina</strong> je planina u jugoistočnoj Srbiji duga <strong>45 km</strong>, a široka <strong>15 km</strong>, koja u geološkom i geografskom smislu pripada <em>karpatsko-balkanskoj grupi planina</em> na samoj granici sa starijom <strong>Srpsko-makedonskom masom</strong>. Prostire se pravcem <strong>severozapad–jugoistok</strong> u visinskim zonama od <strong>250 m do 1.810 m</strong> i počinje istočno od <strong>Niške Banje</strong>, a završava se jugozapadno od <strong>Babušnice</strong> u <strong>Lužničkoj kotlini</strong> kroz koju protiče reka <strong>Lužnica</strong>.
                </p>
              </section>

              <img srcSet={`${suvaPlanina22} 450w, ${suvaPlanina2}`} alt="Suva Planina 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Sa severozapadne i severne strane Suva planina se graniči rekama <strong>Nišavom</strong> (oko koje se formiraju <strong>Belopalanačka</strong>, <strong>Ostričička</strong> i <strong>Niška kotlina</strong>), sa istočne strane <strong>Koritničkom rekom</strong>, a sa jugoistočne i južne strane <strong>Lužničkom rekom</strong>. Prema zapadu se spušta u <strong>Zaplanjsku kotlinu</strong>, dok prema tokovima Nišave i Lužničke reke i okolnim duboko spuštenim kotlinama (<strong>Niškoj</strong>, <strong>Zaplanjskoj</strong>, <strong>Lužničkoj</strong>, <strong>Koritničkoj</strong>, <strong>Belopalanačkoj</strong> i <strong>Ostričičkoj</strong>) spuštanje je uglavnom strmo, a ponekad i oštro. Zbog toga što su okolne geografske celine znatno niže, Suva planina je jasno izdvojena i vidljiva sa velikih udaljenosti.
                  <br /><br />
                  Obronci Suve planine pripadaju opštinama: <strong>Niška Banja</strong>, <strong>Gadžin Han</strong>, <strong>Bela Palanka</strong>, <strong>Babušnica</strong> i <strong>Vlasotince</strong>.
                </p>
              </section>

              <img srcSet={`${suvaPlanina33} 450w, ${suvaPlanina3}`} alt="Suva Planina 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Suva planina</strong> je masiv sa izraženim krasnim reljefom, bogatstvom sedimentnih slojeva različite starosti sa fosilnom florom, jedinstvenom fitocenozom i šumskim ekosistemom. Na planini je prisutno <strong>1.261 biljnih vrsta</strong>, među kojima su: 3 prečice, 4 rastavića, 18 papratnica, 6 golosemenica i <strong>1.232 skrivenosemenice</strong>. Takođe je evidentirano <strong>128 endemskih vrsta flore</strong>, <strong>58 vrsta lišajeva</strong> i <strong>139 vrsta ptica</strong>. Zbog ovih prirodnih vrednosti, proglašena je <strong>rezervatom prirode</strong> i objektom <strong>geonasleđa Srbije</strong>.
                </p>
              </section>

              <img srcSet={`${suvaPlanina66} 450w, ${suvaPlanina6}`} alt="Suva Planina 6" loading="lazy" />

              <section lang="sr">
                <p>
                  Od ukupno <strong>31.860 ha</strong> površine zaštićenog područja <em>Specijalnog rezervata prirode „Suva planina”</em>, <strong>18.176 ha</strong> je pod zaštitom različitih stepena: prvi stepen (<strong>4,5%</strong>), drugi stepen (<strong>8,5%</strong>) i treći stepen (<strong>87%</strong>).
                </p>
              </section>

              <img srcSet={`${suvaPlanina44} 450w, ${suvaPlanina4}`} alt="Suva Planina 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Suva planina se nalazi na <strong>jugoistoku Srbije</strong>, pored magistralnog pravca <em>Beograd—Niš—Sofija—Istanbul</em> (poznatog i kao <em>nišavsko-marička magistrala</em>), na udaljenosti od <strong>3 km od Niške Banje</strong>, <strong>17 km od Niša</strong> i <strong>256 km od Beograda</strong>.
                </p>
              </section>

              <img srcSet={`${suvaPlanina55} 450w, ${suvaPlanina5}`} alt="Suva Planina 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Suva planina se prostire pravcem <strong>severozapad—jugoistok</strong> u visinskim zonama od <strong>250 m do 1.810 m</strong>. Počinje <strong>istočno od Niške Banje</strong>, a završava se <strong>jugozapadno od Babušnice</strong> u <strong>Lužničkoj kotlini</strong>. Sa severozapada i severa graniči se sa <strong>Nišavom</strong>, sa istoka sa <strong>Koritnjakom</strong>, a sa juga i jugoistoka sa <strong>Lužničkom rekom</strong>. Prema <strong>Zaplanjskoj kotlini</strong> spušta se postepeno, dok su spuštanja prema <strong>Niškoj</strong>, <strong>Zaplanjskoj</strong>, <strong>Babušničkoj</strong>, <strong>Koritničkoj</strong>, <strong>Belopalanačkoj</strong> i <strong>Ostričičkoj kotlini</strong> strma ili oštra. Dominantna nadmorska visina čini planinu jasno izdvojenom i vidljivom izdaleka.
                </p>
              </section>


            </>
          )
          :
          (
            <>


              <h2>Suva Mountain</h2>

              <section lang="en">
                <p>
                  <strong>Suva Mountain</strong> is a mountain in southeastern Serbia, approximately <strong>45 km long</strong> and <strong>15 km wide</strong>. Geologically and geographically, it belongs to the <em>Carpathian–Balkan mountain group</em>, lying on the border with the older <strong>Serbo–Macedonian Massif</strong>. It extends northwest–southeast, with elevations ranging from <strong>250 m to 1 810 m</strong>. It begins east of <strong>Niška Banja</strong> and ends southwest of <strong>Babušnica</strong> in the <strong>Lužnica Basin</strong>, through which the <strong>Lužnica River</strong> flows.
                </p>
              </section>

              <img srcSet={`${suvaPlanina22} 450w, ${suvaPlanina2}`} alt="Suva Mountain 2" loading="lazy" />

              <section lang="en">
                <p>
                  To the northwest and north, Suva Mountain is bordered by the <strong>Nišava River</strong> (with the surrounding basins: <strong>Bela Palanka</strong>, <strong>Ostrica</strong>, and <strong>Niš Basin</strong>). To the east lies the <strong>Koritnica River</strong>, and to the southeast and south the <strong>Lužnica River</strong>. To the west, the mountain gradually descends into the <strong>Zaplanje Basin</strong>. On the other hand, slopes toward the Nišava and Lužnica rivers and the deeply cut basins (<strong>Niš</strong>, <strong>Zaplanje</strong>, <strong>Lužnica</strong>, <strong>Koritnica</strong>, <strong>Bela Palanka</strong>, and <strong>Ostrica</strong>) are generally steep and at times abrupt. Because the surrounding regions are much lower, Suva Mountain stands out prominently and is visible from long distances.
                  <br /><br />
                  The foothills of Suva Mountain lie within the municipalities of <strong>Niška Banja</strong>, <strong>Gadžin Han</strong>, <strong>Bela Palanka</strong>, <strong>Babušnica</strong>, and <strong>Vlasotince</strong>.
                </p>
              </section>

              <img srcSet={`${suvaPlanina33} 450w, ${suvaPlanina3}`} alt="Suva Mountain 3" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Suva Mountain</strong> is a massif featuring prominent karst relief, rich sediment layers of varying ages containing fossil flora, unique phytocenosis, and forest ecosystems. There are <strong>1 261 plant species</strong> documented on the mountain, including 3 pteridophytes, 4 spore-bearing plants, 18 ferns, 6 gymnosperms, and <strong>1 232 angiosperms</strong>. Additionally, the mountain hosts <strong>128 endemic plant species</strong>, <strong>58 lichen species</strong>, and <strong>139 bird species</strong>. Due to its natural value, Suva Mountain has been designated a <strong>nature reserve</strong> and a part of <strong>Serbia’s geo-heritage</strong>.
                </p>
              </section>

              <img srcSet={`${suvaPlanina66} 450w, ${suvaPlanina6}`} alt="Suva Mountain 6" loading="lazy" />

              <section lang="en">
                <p>
                  Of the total <strong>31 860 ha</strong> protected area within the <em>Special Nature Reserve “Suva Mountain”</em>, <strong>18 176 ha</strong> is under protection at various levels: first degree (<strong>4.5 %</strong>), second degree (<strong>8.5 %</strong>), and third degree (<strong>87 %</strong>).
                </p>
              </section>

              <img srcSet={`${suvaPlanina44} 450w, ${suvaPlanina4}`} alt="Suva Mountain 4" loading="lazy" />

              <section lang="en">
                <p>
                  Suva Mountain is located in <strong>southeastern Serbia</strong>, adjacent to the major road <em>Belgrade—Niš—Sofia—Istanbul</em> (also known as the <em>Nišava–Maritsa corridor</em>), at a distance of <strong>3 km from Niška Banja</strong>, <strong>17 km from Niš</strong>, and <strong>256 km from Belgrade</strong>.
                </p>
              </section>

              <img srcSet={`${suvaPlanina55} 450w, ${suvaPlanina5}`} alt="Suva Mountain 5" loading="lazy" />

              <section lang="en">
                <p>
                  Suva Mountain stretches northwest–southeast, with elevations from <strong>250 m to 1 810 m</strong>. It begins <strong>east of Niška Banja</strong> and ends <strong>southwest of Babušnica</strong> in the <strong>Lužnica Basin</strong>. To the northwest and north, it is bordered by the <strong>Nišava River</strong>, to the east by the <strong>Koritnica River</strong>, and to the south and southeast by the <strong>Lužnica River</strong>. It gradually slopes into the <strong>Zaplanje Basin</strong> to the west, while the descents toward the <strong>Niš</strong>, <strong>Zaplanje</strong>, <strong>Babušnica</strong>, <strong>Koritnica</strong>, <strong>Bela Palanka</strong>, and <strong>Ostrica basins</strong> are steep or abrupt. Its dominant elevation makes the mountain clearly distinguishable and visible from afar.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default SuvaPlanina;