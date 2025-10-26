/* eslint-disable react/no-unknown-property */
import zavojskoJezero1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/desktop/zavojskoJezero1.jpg";
import zavojskoJezero2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/desktop/zavojskoJezero2.jpg";
import zavojskoJezero3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/desktop/zavojskoJezero3.jpg";
import zavojskoJezero4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/desktop/zavojskoJezero4.jpg";
import zavojskoJezero5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/desktop/zavojskoJezero5.jpg";
import zavojskoJezero11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/mobile/zavojskoJezeroM1.jpg";
import zavojskoJezero22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/mobile/zavojskoJezeroM2.jpg";
import zavojskoJezero33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/mobile/zavojskoJezeroM3.jpg";
import zavojskoJezero44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/mobile/zavojskoJezeroM4.jpg";
import zavojskoJezero55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/mobile/zavojskoJezeroM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ZavojskoJezero = () => {
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

        <title>{switchLanguage === 'rs' ? "Zavojsko jezero – Prirodni dragulj jugoistočne Srbije | Serbia Wonders" : "Zavoj Lake – A Natural Gem of Southeastern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Zavojsko jezero je veštačko jezero nastalo 1963. godine nakon velikog klizišta na Staroj planini. Omiljeno izletište sa značajem za hidroelektranu i prirodu regiona."
            :
            "Zavojsko Lake is an artificial lake formed in 1963 after a major landslide on Stara Planina. A popular excursion site with importance for the local hydroelectric plant and nature."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Zavojsko jezero, Stara planina, Pirot, hidroelektrana Pirot, veštačko jezero, klizište, priroda jugoistočne Srbije, Visočica, turistička mesta"
            :
            "Zavojsko Lake, Stara Planina, Pirot, Pirot Hydroelectric Power Plant, artificial lake, landslide, southeastern Serbia nature, Visočica River, tourist attractions"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/zavojsko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/zavojsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/zavojsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/zavojsko-jezero"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pirotskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${zavojskoJezero11} 450w, ${zavojskoJezero1} `} alt="Zavaojsko jezero 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Zavaojsko jezero</h1>

              <section lang="sr">
                <p>
                  <strong>Zavojsko jezero</strong> je veštačko jezero koje se nalazi u jugoistočnom delu Srbije, 17 km severoistočno od <em>Pirota</em>, na srednjem toku reke <em>Visočice</em>. Nastalo je <strong>1963. godine</strong> kada je veliko klizište stvorilo prirodnu branu, koja je kasnije povećana izgradnjom veštačke brane. Danas je ovo jezero omiljeno izletište <em>Piroćanaca</em> i <em>Nišlija</em>.
                </p>
              </section>

              <img srcSet={`${zavojskoJezero22} 450w, ${zavojskoJezero2}`} alt="Zavojsko jezero 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Zavojsko jezero</strong> se nalazi na <em>Staroj planini</em>, u delu zvanom <em>Visok</em>, na srednjem toku reke <em>Visočice</em>. Veštačka brana se nalazi oko 1 km nizvodno od nekadašnjeg sela <em>Zavoj</em>, koje je potopljeno stvaranjem jezera. Jezero se puni vodama reka <em>Visočica</em>, <em>Gostuška reka</em> i <em>Belska reka</em>, dok je jedini izlaz voda reke <em>Visočice</em>. Voda se koristi za <strong>Hidroelektranu Pirot</strong>, a u okolini se nalaze sela <em>Pakleštica</em>, <em>Bela</em> i <em>Gostuša</em>.
                </p>
              </section>

              <img srcSet={`${zavojskoJezero33} 450w, ${zavojskoJezero3}`} alt="Zavojsko jezero 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Zavojsko jezero</strong> je urvinsko jezero nastalo <em>koluvijalnim procesom</em>. Prirodna brana formirana je posle obilnih padavina zime <strong>1963. godine</strong>, kada je došlo do velikih klizišta usled otapanja snega i iskrčenih šuma. Meštani u početku nisu pridavali značaj pojavi jer se slično dešavalo i ranije.
                </p>
              </section>

              <img srcSet={`${zavojskoJezero44} 450w, ${zavojskoJezero4}`} alt="Zavojsko jezero 4" loading="lazy" />

              <section lang="sr">
                <p>
                  U noći između <strong>23. i 24. februara 1963.</strong> došlo je do velikog klizanja tla, a <strong>25. februara</strong> dogodilo se najveće pomeranje. Masa zemlje duga <strong>1,3 km</strong> i široka do <strong>220 m</strong> stvorila je prirodnu branu visoku preko <strong>50 m</strong>. Postojala je opasnost od njenog pucanja, što bi ugrozilo naselja nizvodno, pa čak i grad <em>Niš</em>. Brzom intervencijom vojske brana je stabilizovana, a potom dograđena.
                </p>
              </section>

              <img srcSet={`${zavojskoJezero55} 450w, ${zavojskoJezero5}`} alt="Zavojsko jezero 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Temperatura vode u jezeru prilikom nastanka iznosila je između <strong>4 i 5 °C</strong>, a leti površinski sloj dostiže i do <strong>20 °C</strong>. Godine <strong>1965.</strong> jezero je isušeno zbog nestabilnosti prirodne brane, nakon čega je projektovana nova brana visine <strong>75 m</strong>, za akumulaciju oko <strong>160 miliona m³</strong> vode. Površina jezera je <strong>5,53 km²</strong>, a dužina <strong>16,35 km</strong>. Voda iz <em>Toplodolske reke</em> dodatno je povećavala protok. Planirana proizvodnja električne energije iznosi <strong>149 GWh godišnje</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Zavoj Lake</h1>

              <section lang="en"> <p> <strong>Zavojsko Lake</strong> is an artificial lake located in the southeastern part of Serbia, 17 km northeast of <em>Pirot</em>, on the middle course of the <em>Visočica River</em>. It was formed in <strong>1963</strong> when a large landslide created a natural dam, which was later reinforced with the construction of an artificial dam. Today, the lake is a popular excursion spot for people from <em>Pirot</em> and <em>Niš</em>. </p> </section>
              <img srcSet={`${zavojskoJezero22} 450w, ${zavojskoJezero2}`} alt="Zavojsko Lake 2" loading="lazy" />

              <section lang="en"> <p> <strong>Zavojsko Lake</strong> is located on <em>Stara Planina</em> (the Balkan Mountains), in an area called <em>Visok</em>, along the middle course of the <em>Visočica River</em>. The artificial dam is about 1 km downstream from the former village of <em>Zavoj</em>, which was submerged when the lake was formed. The lake is fed by the <em>Visočica</em>, <em>Gostuša River</em>, and <em>Bela River</em>, while the <em>Visočica River</em> is its only outflow. The water is used for the <strong>Pirot Hydroelectric Power Plant</strong>, and nearby villages include <em>Pakleštica</em>, <em>Bela</em>, and <em>Gostuša</em>. </p> </section>
              <img srcSet={`${zavojskoJezero33} 450w, ${zavojskoJezero3}`} alt="Zavojsko Lake 3" loading="lazy" />

              <section lang="en"> <p> <strong>Zavojsko Lake</strong> is a landslide lake created by a <em>colluvial process</em>. The natural dam was formed after heavy rainfall in the winter of <strong>1963</strong>, when melting snow and deforested slopes triggered major landslides. Initially, locals did not give much importance to the event, as similar things had happened before. </p> </section>
              <img srcSet={`${zavojskoJezero44} 450w, ${zavojskoJezero4}`} alt="Zavojsko Lake 4" loading="lazy" />

              <section lang="en"> <p> During the night between <strong>February 23 and 24, 1963</strong>, a major landslide occurred, with the largest displacement happening on <strong>February 25</strong>. A mass of earth 1.3 km long and up to 220 m wide created a natural dam over <strong>50 m</strong> high. There was a risk of the dam breaking, which could have endangered downstream settlements and even the city of <em>Niš</em>. The army quickly intervened to stabilize the dam, which was later reinforced. </p> </section>
              <img srcSet={`${zavojskoJezero55} 450w, ${zavojskoJezero5}`} alt="Zavojsko Lake 5" loading="lazy" />

              <section lang="en"> <p> The water temperature in the lake at the time of formation ranged between <strong>4 and 5 °C</strong>, while in summer the surface layer can reach up to <strong>20 °C</strong>. In <strong>1965</strong>, the lake was drained due to the instability of the natural dam, after which a new dam was designed with a height of <strong>75 m</strong>, capable of holding about <strong>160 million m³</strong> of water. The lake covers an area of <strong>5.53 km²</strong> and stretches <strong>16.35 km</strong> in length. Water from the <em>Toplodolska River</em> further increased the flow. The planned electricity production is <strong>149 GWh per year</strong>. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default ZavojskoJezero;