/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import planinaRadan1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/desktop/planinaRadan1.jpg";
import planinaRadan2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/desktop/planinaRadan2.jpg";
import planinaRadan3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/desktop/planinaRadan3.jpg";
import planinaRadan4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/desktop/planinaRadan4.jpg";
import planinaRadan5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/desktop/planinaRadan5.jpg";
import planinaRadan11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/mobile/planinaRadanM1.jpg";
import planinaRadan22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/mobile/planinaRadanM2.jpg";
import planinaRadan33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/mobile/planinaRadanM3.jpg";
import planinaRadan44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/mobile/planinaRadanM4.jpg";
import planinaRadan55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/mobile/planinaRadanM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { toplickiOkurgPathRoutes } from "./ToplickiOkurgPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaRadan = () => {
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

        <title>{switchLanguage === 'rs' ? "Planina Radan – Prirodna i Geološka Lepota | Serbia Wonders" : "Mount Radan – Natural & Geological Beauty | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Planina Radan u južnoj Srbiji poznata je po složenoj geološkoj strukturi, prelepim vodopadima i bogatom prirodnom nasleđu. Nalazi se između Kuršumlije, Lebana i Prokuplja i idealna je destinacija za ljubitelje prirode i planinarenja."
            :
            "Radan Mountain, located in southern Serbia, is known for its complex geology, beautiful waterfalls, and rich natural heritage. Situated between Kuršumlija, Lebane, and Prokuplje, it is a perfect destination for nature lovers and hikers."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Planina Radan, Radan, vodopad Soko, Prolom Banja, planinarenje, južna Srbija, priroda, geologija, planine Srbije"
            :
            "Radan Mountain, Soko waterfall, Prolom Spa, hiking, southern Serbia, nature, geology, Serbian mountains"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/planina-radan`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/planina-radan"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/planina-radan"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/planina-radan"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(toplickiOkurgPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${planinaRadan11} 450w, ${planinaRadan1} `} alt="Planina Radan 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Planina Radan</h1>

              <section lang="sr">
                <p>
                  <strong>Radan planina</strong> se nalazi na mestu gde se <em>Vardarska zona</em> susreće sa
                  <em>Srpsko-makedonskom masom</em>, što je značajno za raznovrsnost njenog
                  reljefa, složenost geološkog sastava i tektonske odnose. Nastala je
                  rasedanjima, pripada velikim planinama <em>Srpsko-makedonske mase</em> i
                  sastavljena je od magmatskih stena, pre svega <strong>andezita</strong> i vulkanogenih
                  sedimenata. Nalazi se jugoistočno od <em>Kuršumlije</em>, zapadno od <em>Lebana</em> i
                  <em>Leskovca</em>, a južno od <em>Prokuplja</em>.
                </p>
              </section>

              <img srcSet={`${planinaRadan22} 450w, ${planinaRadan2} `} alt="Planina Radan 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Razlikujemo <strong>Radan planinu</strong> u užem i širem smislu. Radan planinu u užem
                  smislu čine <strong>Majdan planina</strong>, <strong>Ravna planina</strong> i <strong>Petrova gora</strong>. Pod <strong>Radan planinom</strong> u širem smislu podrazumevamo i <strong>Sokolovicu</strong>, <strong>Prolomsku planinu</strong> i
                  <strong>Arbanasku planinu</strong>. Severozapadno od <em>Prolom banje</em>, u pravcu <em>Kuršumlije</em>,
                  prostire se <strong>Sokolovica</strong> sa najvišim vrhom <strong>Radulovac</strong> (1050 m). <strong>Prolomsku
                    planinu</strong> (<em>Sokolov vis</em> 1370 m) sa severa graniči dolina <em>Prolomske reke</em>,
                  dok prevoj <strong>Gajtanska vrata</strong> deli Prolomsku planinu od Radana. Južno od
                  sela <em>Arbanaska</em>, istočno od <em>Prolom banje</em> i severno od <strong>Radan planine</strong>
                  nalazi se <strong>Arbanaska planina</strong> (<strong>Vijogor</strong> 1128 m).
                </p>
              </section>

              <img srcSet={`${planinaRadan33} 450w, ${planinaRadan3} `} alt="Planina Radan 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Prominencija <strong>Arbanaske planine</strong> (<strong>Vijogor</strong> 1128 m) u odnosu na matičnu
                  <strong>Radan planinu</strong> iznosi samo 78 metara. Prominencija <strong>Prolomske planine</strong>
                  (<em>Sokolov vis</em> 1370 m) u odnosu na Radan je 200 metara. <strong>Sokolovica</strong>
                  (<strong>Radulovac</strong> 1050 m) je prema Radanu (<strong>Arbanaskoj planini</strong> kao delu Radana)
                  prominentna samo 170 m. <strong>Ravnu planinu</strong> (1258 m) sa prominencijom od 28
                  metara svakako smatramo delom Radana. Isto važi i za <strong>Majdan planinu</strong>
                  (<em>Vratnica Jokočića</em> 1096 m), ovaj deo Radana ima prominenciju od samo 16
                  m. Sve ovo nam govori da je u pitanju planina sa složenom morfologijom.
                </p>
              </section>

              <img srcSet={`${planinaRadan44} 450w, ${planinaRadan4} `} alt="Planina Radan 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Prostor <strong>Radan planine</strong> se prostire u južnoj Srbiji, obuhvatajući opštine
                  <em>Lebane</em>, <em>Bujnik</em>, <em>Medveđa</em>, <em>Kuršumlija</em> i <em>Prokuplje</em>. Geografski pripada
                  širem području <em>južnog Pomoravlja</em>. Planina pokriva gornje delove slivova
                  reka <strong>Toplice</strong>, <strong>Puste reke</strong> i <strong>Jablanice</strong>, a njen pravac je
                  izdžen <strong>SZO-JI</strong>.
                </p>
              </section>

              <img srcSet={`${planinaRadan55} 450w, ${planinaRadan5} `} alt="Vodopad Soko Planina Radan" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Vodopad Soko</strong> je udaljen svega par kilometara od <em>Prolom Banje</em>. Od puta od
                  banje ka crkvi <em>Lazarici</em> i selu <em>Dobra Voda</em> udaljen je svega 650m, a do
                  vodopada vodi prelepa i dobro obeležena šumska staza uz reku. Reka se na
                  putu do vodopada prelazi nekoliko puta pa je preporuka krenuti u
                  nepromočivoj obući. Kako se do vodopada brzo i lako stiže, sve više
                  turista prilikom posete <em>Prolom Banje</em> i <em>Topličkog kraja</em> obiđu i ovu
                  skrivenu lepotu <strong>Radan planine</strong>.
                </p>
              </section>



            </>
          )
          :
          (
            <>

              <h1>Radan Mountain</h1>

              <section lang="en"> <p> <strong>Radan Mountain</strong> is located where the <em>Vardar zone</em> meets the <em>Serbian-Macedonian massif</em>, which is significant for the diversity of its relief, the complexity of its geological composition, and tectonic relations. It was formed by faulting, belongs to the major mountains of the <em>Serbian-Macedonian massif</em>, and is composed of igneous rocks, primarily <strong>andesite</strong> and volcanogenic sediments. It is situated southeast of <em>Kuršumlija</em>, west of <em>Lebane</em> and <em>Leskovac</em>, and south of <em>Prokuplje</em>. </p> </section>
              <img srcSet={`${planinaRadan22} 450w, ${planinaRadan2} `} alt="Radan Mountain 2" loading="lazy" />

              <section lang="en"> <p> We distinguish <strong>Radan Mountain</strong> in a narrow and broader sense. In the narrow sense, Radan Mountain consists of <strong>Majdan Mountain</strong>, <strong>Ravna Mountain</strong>, and <strong>Petrova Gora</strong>. In the broader sense, <strong>Radan Mountain</strong> also includes <strong>Sokolovica</strong>, <strong>Prolom Mountain</strong>, and <strong>Arbanaska Mountain</strong>. Northwest of <em>Prolom Spa</em>, in the direction of <em>Kuršumlija</em>, lies <strong>Sokolovica</strong> with its highest peak <strong>Radulovac</strong> (1050 m). <strong>Prolom Mountain</strong> (<em>Sokolov Vis</em> 1370 m) is bordered from the north by the valley of the <em>Prolom River</em>, while the <strong>Gajtanska vrata Pass</strong> separates Prolom Mountain from Radan. South of the village <em>Arbanaska</em>, east of <em>Prolom Spa</em> and north of <strong>Radan Mountain</strong> is <strong>Arbanaska Mountain</strong> (<strong>Vijogor</strong> 1128 m). </p> </section>
              <img srcSet={`${planinaRadan33} 450w, ${planinaRadan3} `} alt="Radan Mountain 3" loading="lazy" />

              <section lang="en"> <p> The prominence of <strong>Arbanaska Mountain</strong> (<strong>Vijogor</strong> 1128 m) relative to the parent <strong>Radan Mountain</strong> is only 78 meters. The prominence of <strong>Prolom Mountain</strong> (<em>Sokolov Vis</em> 1370 m) relative to Radan is 200 meters. <strong>Sokolovica</strong> (<strong>Radulovac</strong> 1050 m) is only 170 meters prominent relative to Radan (<strong>Arbanaska Mountain</strong> as part of Radan). <strong>Ravna Mountain</strong> (1258 m) with a prominence of 28 meters is certainly considered part of Radan. The same applies to <strong>Majdan Mountain</strong> (<em>Vratnica Jokočića</em> 1096 m), which has a prominence of only 16 meters. All of this indicates that Radan is a mountain with complex morphology. </p> </section>
              <img srcSet={`${planinaRadan44} 450w, ${planinaRadan4} `} alt="Radan Mountain 4" loading="lazy" />

              <section lang="en"> <p> The area of <strong>Radan Mountain</strong> extends in southern Serbia, encompassing the municipalities of <em>Lebane</em>, <em>Bujnik</em>, <em>Medveđa</em>, <em>Kuršumlija</em>, and <em>Prokuplje</em>. Geographically, it belongs to the wider area of <em>southern Pomoravlje</em>. The mountain covers the upper parts of the watersheds of the rivers <strong>Toplica</strong>, <strong>Pusta River</strong>, and <strong>Jablanica</strong>, with its orientation being roughly northwest-southeast. </p> </section>
              <img srcSet={`${planinaRadan55} 450w, ${planinaRadan5} `} alt="Soko Waterfall Radan Mountain" loading="lazy" />

              <section lang="en"> <p> <strong>Soko Waterfall</strong> is located just a few kilometers from <em>Prolom Spa</em>. It is only 650 meters from the road leading from the spa to the church of <em>Lazarica</em> and the village of <em>Dobra Voda</em>, with a beautiful and well-marked forest trail along the river leading to the waterfall. The river crosses the path several times, so it is recommended to wear waterproof footwear. Since the waterfall is easily and quickly accessible, more and more tourists visiting <em>Prolom Spa</em> and the <em>Toplica region</em> include this hidden beauty of <strong>Radan Mountain</strong> in their visit. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default PlaninaRadan;