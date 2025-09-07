/* eslint-disable react/no-unknown-property */
import vodopadTupavica1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/desktop/vodopadTupavica1.jpg";
import vodopadTupavica2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/desktop/vodopadTupavica2.jpg";
import vodopadTupavica3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/desktop/vodopadTupavica3.jpg";
import vodopadTupavica4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/desktop/vodopadTupavica4.jpg";
import vodopadTupavica11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/mobile/vodopadTupavicaM1.jpg";
import vodopadTupavica22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/mobile/vodopadTupavicaM2.jpg";
import vodopadTupavica33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/mobile/vodopadTupavicaM3.jpg";
import vodopadTupavica44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/mobile/vodopadTupavicaM4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const VodopadTupavica = () => {
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


        <title>{switchLanguage === 'rs' ? "Vodopad Tupavica – Prirodna lepota Stare planine | Serbia Wonders" : "Tupavica Waterfall – Natural Beauty of Stara Planina | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Vodopad Tupavica na Staroj planini, visok oko 25 metara, poznat po svojoj lepoti i pristupačnosti. Idealno mesto za posetu tokom proleća i jeseni, sa posebnim zimskim prizorima zaleđenog vodopada."
            :
            "Tupavica Waterfall on Stara Planina is about 25 meters tall and known for its stunning beauty and easy accessibility. Best visited in spring and autumn, with spectacular frozen waterfalls in winter."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Vodopad Tupavica, Stara planina, Dojkinci, turizam Stara planina, prirodne atrakcije Srbije, slapovi Stare planine, zimski vodopadi"
            :
            "Tupavica Waterfall, Stara Planina, Dojkinci, tourism Stara Planina, natural attractions Serbia, waterfalls Stara Planina, winter waterfalls"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-tupavica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-tupavica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-tupavica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/vodopad-tupavica"
        />

      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pirotskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${vodopadTupavica11} 450w, ${vodopadTupavica1} `} alt="Vodopad Tupavica 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Vodopad Tupavica</h2>

              <section lang="sr"> <p> <strong>Vodopad Tupavica</strong> nalazi se na 5 km i 400 metara od sela <em>Dojkinci</em> na <em>Staroj Planini</em>, na visini od <strong>1050 metara</strong> nadmorske visine. Tokom najtoplijeg perioda godine, ukoliko je godina sušna, slap vode je manji nego inače i tada voda samo kaplje preko stena. Čista i hladna voda pada sa visine od oko <strong>15 metara</strong> preko stena crvene boje. </p> </section>
              <img srcSet={`${vodopadTupavica22} 450w, ${vodopadTupavica2} `} alt="Vodopad Tupavica 2" loading="lazy" />

              <section lang="sr"> <p> <strong>Vodopad Tupavica</strong> nalazi se u blizini sela <em>Dojkinci</em> na Dojkinčkoj reci, na nadmorskoj visini od <strong>1050 metara</strong>. Smešten je u centru <em>Stare planine</em>, zbog čega se smatra najpristupačnijim u odnosu na ostale vodopade. Od mesta <em>Dojkinci</em>, uzvodno uz Dojkinčsku reku, do vodopada <strong>Tupavica</strong> potrebno je sat i po vremena. </p> </section>
              <img srcSet={`${vodopadTupavica33} 450w, ${vodopadTupavica3} `} alt="Vodopad Tupavica 3" loading="lazy" />

              <section lang="sr"> <p> <strong>Vodopad Tupavica</strong> ima veliki turistički značaj, kako zbog svog položaja u srcu <em>Stare planine</em>, tako i zbog svoje visine od <strong>25 metara</strong> i očaravajuće lepote. Najpovoljniji period za posetu vodopadu je proleće ili jesen, pod uslovom da nije bila sušna godina. Ako je godina sušna, tokom najtoplijeg perioda voda samo kaplje preko stena. </p> </section>
              <img srcSet={`${vodopadTupavica44} 450w, ${vodopadTupavica4} `} alt="Vodopad Tupavica 4" loading="lazy" />

              <section lang="sr"> <p> U optimalnim uslovima, tokom proleća i leta, vodopad se prikazuje u svojoj punoj lepoti, jer slapovi vode padaju niz liticu od peščara. Vodopadi <em>Stare planine</em> poznati su po tome što, osim u periodu proleća i leta, predstavljaju turističku atrakciju i tokom zimskih dana, kada potpuno zaledjeni postaju pravo remek-delo prirode. </p> </section>

            </>
          )
          :
          (
            <>

              <h2>Tupavica Waterfall</h2>

              <section lang="en"> <p> <strong>Tupavica Waterfall</strong> is located 5 kilometers and 400 meters from the village of <em>Dojkinci</em> on <em>Stara Planina</em>, at an altitude of <strong>1050 meters</strong> above sea level. During the hottest period of the year, if the year is dry, the water flow is smaller than usual, and the water only drips over the rocks. Clean and cold water falls from a height of about <strong>15 meters</strong> over red-colored rocks. </p> </section>
              <img srcSet={`${vodopadTupavica22} 450w, ${vodopadTupavica2}`} alt="Tupavica Waterfall 2" loading="lazy" />

              <section lang="en"> <p> <strong>Tupavica Waterfall</strong> is situated near the village of <em>Dojkinci</em> on the Dojkinci River, at an altitude of <strong>1050 meters</strong>. It is located in the center of <em>Stara Planina</em>, which makes it considered the most accessible compared to other waterfalls. From the village of <em>Dojkinci</em>, it takes about an hour and a half to reach <strong>Tupavica Waterfall</strong> going upstream along the Dojkinci River. </p> </section>
              <img srcSet={`${vodopadTupavica33} 450w, ${vodopadTupavica3}`} alt="Tupavica Waterfall 3" loading="lazy" />

              <section lang="en"> <p> <strong>Tupavica Waterfall</strong> holds great tourist significance, both because of its location in the heart of <em>Stara Planina</em> and its height of <strong>25 meters</strong> and enchanting beauty. The best time to visit the waterfall is in spring or autumn, provided it has not been a dry year. If the year is dry, during the hottest period, the water only drips over the rocks. </p> </section>
              <img srcSet={`${vodopadTupavica44} 450w, ${vodopadTupavica4}`} alt="Tupavica Waterfall 4" loading="lazy" />

              <section lang="en"> <p> Under optimal conditions, during spring and summer, the waterfall reveals its full beauty as the water cascades down the sandstone cliff. The waterfalls of <em>Stara Planina</em> are known not only as a tourist attraction in spring and summer but also during winter days when they freeze completely, becoming a true natural masterpiece. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default VodopadTupavica;