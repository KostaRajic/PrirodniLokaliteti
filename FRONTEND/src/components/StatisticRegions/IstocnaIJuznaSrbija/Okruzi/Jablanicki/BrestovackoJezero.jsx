/* eslint-disable react/no-unknown-property */
import brestovackoJezero1 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/desktop/brestovackoJezero1.jpg";
import brestovackoJezero2 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/desktop/brestovackoJezero2.jpg";
import brestovackoJezero3 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/desktop/brestovackoJezero3.jpg";
import brestovackoJezero4 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/desktop/brestovackoJezero4.jpg";
import brestovackoJezero11 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/mobile/brestovackoJezeroM1.jpg";
import brestovackoJezero22 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/mobile/brestovackoJezeroM2.jpg";
import brestovackoJezero33 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/mobile/brestovackoJezeroM3.jpg";
import brestovackoJezero44 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/mobile/brestovackoJezeroM4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const BrestovackoJezero = () => {
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

        <title>{switchLanguage === 'rs' ? "Brestovačko jezero – Veštačka akumulacija ispod Radana | Serbia Wonders" : "Brestovačko Lake – An Artificial Reservoir Below Radan | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Brestovačko jezero, poznato i kao Bojničko, Bubličko ili Magaško, nalazi se u selu Brestovac, 10 km zapadno od Bojnika. Jezero se koristi za snabdevanje vodom, ali i kao omiljeno mesto za kupanje i ribolov."
            :
            "Brestovačko Lake, also known as Bojnička, Bublička or Magaška Lake, is located in the village of Brestovac, 10 km west of Bojnik. It serves for water supply and is a popular destination for swimming and fishing."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Brestovačko jezero, Bojničko jezero, Bubličko jezero, Magaško jezero, Pusta reka, planina Radan, ribolov, kupanje, kampovanje, veštačka akumulacija, jezera u Srbiji, Bojnik, Lebane, Brestovac"
            :
            "Brestovačko Lake, Bojnička Lake, Bublička Lake, Magaška Lake, Pusta River, Radan Mountain, fishing, swimming, camping, artificial reservoir, lakes in Serbia, Bojnik, Lebane, Brestovac"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/brestovacko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/brestovacko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/brestovacko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/brestovacko-jezero"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(jablanickiOkrugPathRoutes.home(switchLanguage))}

        />
        <header></header>
        <img srcSet={`${brestovackoJezero11} 450w, ${brestovackoJezero1} `} alt="Brestovačko jezero 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Brestovačko jezero</h1>

              <section lang="sr">
                <p>
                  <strong>Brestovačko</strong>, <strong>Bojničko</strong>, <strong>Bubličko</strong> i <strong>Magaško jezero</strong> predstavljaju različite nazive za <em>veštačku akumulaciju</em> koja se nalazi u selu <strong>Brestovac</strong>, otprilike 10 kilometara zapadno od <strong>Bojnika</strong>. Jezero je smešteno u podnožju planine <strong>Radan</strong> na visini od <strong>400 metara</strong> nadmorske visine. Napravljeno je krajem 1970-ih godina pregrađivanjem <strong>Puste reke</strong> u njenom gornjem toku. Koristi se za snabdevanje vodom naselja <strong>Lebane</strong> i <strong>Bojnik</strong>.
                </p>
              </section>

              <img srcSet={`${brestovackoJezero22} 450w, ${brestovackoJezero2}`} alt="Brestovačko jezero 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Brestovačko jezero</strong> prostire se na dužini od <strong>2,8 kilometara</strong> i širini od <strong>500 metara</strong>. Najveća dubina jezera je <strong>28 metara</strong>, dok prosečna dubina iznosi <strong>12 metara</strong>. Površina jezera je oko <strong>75 hektara</strong>. Obalu jezera čine brojna <em>poluostrva</em>, jedan <em>rt</em> (istureni deo kopna) i dva <em>zaliva</em>. Voda u jezeru dolazi iz <strong>Puste reke</strong>, koja izvire na planini <strong>Radan</strong>.
                </p>
              </section>

              <img srcSet={`${brestovackoJezero33} 450w, ${brestovackoJezero3}`} alt="Brestovačko jezero 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Brestovačko jezero</strong> je bogato različitim vrstama riba, među kojima se nalaze <strong>som</strong>, <strong>šaran</strong>, <strong>klen</strong>, <strong>amur</strong>, <strong>štuka</strong>, <strong>babuška</strong>, <strong>bodorka</strong>, <strong>belica</strong> i <strong>deverika</strong>. Ova akumulacija privlači brojne ribolovce tokom cele godine. Tokom letnjih meseci, jezero postaje popularno odredište za <em>kupače</em>, jer su dani topli, što ga čini savršenim mestom za uživanje u kupanju. Na obali je uređen <strong>parking</strong>, kao i <strong>sportski tereni</strong>. Takođe, na plaži je dozvoljeno <em>kampovanje</em>.
                </p>
              </section>

              <img srcSet={`${brestovackoJezero44} 450w, ${brestovackoJezero4}`} alt="Brestovačko jezero 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Brestovačko jezero</strong> je pristupačno iz dva pravca. Ako dolazite iz <strong>Niša</strong>, put vas vodi preko <strong>Doljevca</strong> i <strong>Žitorađe</strong>, a do jezera se dolazi skretanjem sa autoputa kod naselja <strong>Brestovac</strong>, pre nego što se stigne do <strong>Leskovca</strong>. S druge strane, ako dolazite iz pravca <strong>Prokuplja</strong>, potrebno je preći prevor <strong>Beli kamen</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Brestovac Lake</h1>

              <section lang="en">
                <p>
                  <strong>Brestovac</strong>, <strong>Bojnik</strong>, <strong>Bubličko</strong>, and <strong>Magaško Lake</strong> are different names for the <em>artificial reservoir</em> located in the village of <strong>Brestovac</strong>, approximately 10 kilometers west of <strong>Bojnik</strong>. The lake is situated at the foothills of the <strong>Radan</strong> mountain at an altitude of <strong>400 meters</strong> above sea level. It was created in the late 1970s by damming the <strong>Pusta River</strong> in its upper course. It is used to supply water to the settlements of <strong>Lebane</strong> and <strong>Bojnik</strong>.
                </p>
              </section>


              <img srcSet={`${brestovackoJezero22} 450w, ${brestovackoJezero2}`} alt="Brestovac Lake 2" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Brestovac Lake</strong> stretches over a length of <strong>2.8 kilometers</strong> and a width of <strong>500 meters</strong>. The maximum depth of the lake is <strong>28 meters</strong>, while the average depth is <strong>12 meters</strong>. The surface area of the lake is about <strong>75 hectares</strong>. The shoreline consists of numerous <em>peninsulas</em>, one <em>cape</em> (a protruding part of the land), and two <em>bays</em>. Water in the lake comes from the <strong>Pusta River</strong>, which springs from the <strong>Radan</strong> mountain.
                </p>
              </section>

              <img srcSet={`${brestovackoJezero33} 450w, ${brestovackoJezero3}`} alt="Brestovac Lake 3" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Brestovac Lake</strong> is rich in various fish species, including <strong>catfish</strong>, <strong>carp</strong>, <strong>chub</strong>, <strong>grass carp</strong>, <strong>pike</strong>, <strong>bream</strong>, <strong>bleak</strong>, <strong>whitefish</strong>, and <strong>roach</strong>. This reservoir attracts many anglers throughout the year. During the summer months, the lake becomes a popular destination for <em>swimmers</em> because the days are warm, making it a perfect place to enjoy swimming. There is a designated <strong>parking lot</strong> and <strong>sports fields</strong> on the shore. Also, camping is allowed on the beach.
                </p>
              </section>

              <img srcSet={`${brestovackoJezero44} 450w, ${brestovackoJezero4}`} alt="Brestovac Lake 4" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Brestovac Lake</strong> is accessible from two directions. If you come from <strong>Niš</strong>, the road leads you through <strong>Doljevac</strong> and <strong>Žitorađa</strong>, and you reach the lake by turning off the highway near the settlement of <strong>Brestovac</strong>, before arriving at <strong>Leskovac</strong>. On the other hand, if you come from the direction of <strong>Prokuplje</strong>, you need to cross the <strong>Beli Kamen</strong> mountain pass.
                </p>
              </section>

            </>
          )
        }

      </div >


    </>
  );
};


export default BrestovackoJezero;