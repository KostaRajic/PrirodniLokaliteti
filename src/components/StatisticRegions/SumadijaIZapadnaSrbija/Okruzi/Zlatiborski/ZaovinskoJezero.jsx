/* eslint-disable react/no-unknown-property */
import zaovinskoJezero1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero1.jpg";
import zaovinskoJezero2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero2.jpg";
import zaovinskoJezero3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero3.jpg";
import zaovinskoJezero4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero4.jpg";
import zaovinskoJezero5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero5.jpg";
import zaovinskoJezero6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/desktop/zaovinskoJezero6.jpg";
import zaovinskoJezero11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero1.jpg";
import zaovinskoJezero22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero2.jpg";
import zaovinskoJezero33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero3.jpg";
import zaovinskoJezero44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero4.jpg";
import zaovinskoJezero55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero5.jpg";
import zaovinskoJezero66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ZaovinskoJezero/mobile/MzaovinskoJezero6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ZaovinskoJezero = () => {
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
        <title>
          {switchLanguage === 'rs'
            ? 'Zaovinsko jezero | Prirodni dragulj Tare i energetski rezervoar'
            : 'Zaovine Lake | Natural Gem of Tara and Energy Reservoir'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Zaovinsko jezero na Tari je veštačko jezero poznato po netaknutoj prirodi, biodiverzitetu, tehničkoj ulozi u hidroelektrani Bajina Bašta i bogatoj kulturno-istorijskoj ponudi.'
              : 'Zaovine Lake on Tara mountain is an artificial lake renowned for its pristine nature, biodiversity, role in the Bajina Bašta hydroelectric plant, and rich cultural-historical attractions.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Zaovinsko jezero, jezero Tara, Bajina Bašta, hidroelektrana, priroda Srbija, biodiverzitet, Pančićeva omorika, ribolov, planina Tara, turizam Srbija'
              : 'Zaovine Lake, Tara lake, Bajina Bašta hydroelectric, Serbia nature, biodiversity, Pancic spruce, fishing, Tara mountain, Serbia tourism'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/zaovinsko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/zaovinsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/zaovinsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/zaovinsko-jezero"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${zaovinskoJezero11} 450w, ${zaovinskoJezero1} `} alt="Zaovinsko jezero 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Zaovinsko jezero</h2>

              <section lang="sr">
                <p>
                  <strong>Zaovinsko jezero</strong>, smešteno na planini <em>Tari</em> u blizini slikovitog sela <strong>Zaovine</strong>, predstavlja pravo <em>remek-delo prirode</em> i omiljenu destinaciju zaljubljenika u <strong>netaknuti ambijent</strong>. Ovo veštačko jezero nastalo je između 1975. i 1983. godine izgradnjom brana kod vrha <strong>Kik</strong> (958 m nadmorske visine), čime je preusmeren tok <em>Belog Rzava</em> i stvoren zapanjujući vodeni pejzaž. Kada je na najvišem nivou, površina jezera se nalazi na nadmorskoj visini od <strong>881,5 metara</strong>, dok njegova maksimalna dubina doseže čak <em>110 metara</em>.
                </p>
              </section>

              <img srcSet={`${zaovinskoJezero22} 450w, ${zaovinskoJezero2} `} alt="Zaovinsko jezero 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Jezero Zaovine nije samo poznato po svojoj <strong>prirodnoj lepoti</strong>, već i po impresivnoj tehničkoj ulozi. Ono funkcioniše kao akumulacija reverzibilne hidroelektrane <em>„Bajina Bašta“</em> u Perućcu, sa kojom je povezano vertikalnim cevovodom. Kada je nivo reke <strong>Drine</strong> nizak, jezero služi kao <em>energetski rezervoar</em>, omogućavajući rad turbina hidroelektrane. S druge strane, tokom perioda obilnih padavina i poplavnih talasa, voda se pumpa nazad u <strong>Zaovinsko jezero</strong>. Ova oscilacija nivoa vode dodatno naglašava njegovu jedinstvenost i tehničku značajnost.
                </p>
              </section>

              <img srcSet={`${zaovinskoJezero33} 450w, ${zaovinskoJezero3} `} alt="Zaovinsko jezro 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Zaovinsko jezero</strong> ima brojne funkcije koje ga čine jedinstvenim. Pored toga što služi kao rezervoar za hidroelektranu i pomaže u regulisanju vodostaja, voda iz jezera se koristi i za ljudsku ishranu nakon odgovarajuće obrade u postrojenjima za preradu. Takođe, jezero nudi savršene uslove za uzgoj <em>pastrmki</em>, čime doprinosi očuvanju <strong>biodiverziteta</strong> ovog kraja. Tokom letnjih meseci, neuređene plaže oko jezera postaju popularna destinacija za ljubitelje kupanja.
                </p>
              </section>

              <img srcSet={`${zaovinskoJezero44} 450w, ${zaovinskoJezero4} `} alt="Jezero Zaovine 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Pored svoje impresivne vodene lepote, <strong>Zaovinsko jezero</strong> je i pravo prirodno blago u pogledu flore. Oko <em>50%</em> flore planine Tare i <strong>15%</strong> flore celokupne Srbije raste upravo u ovom području, što ga čini rajem za botaničare i ljubitelje biljaka. Na ovom prostoru zabeleženo je prisustvo približno <strong>600 biljnih vrsta</strong>, od kojih je 55 uvršteno na preliminarnu <em>Crvenu listu flore Srbije</em>. Takođe, Zaovinsko jezero je dom za <strong>25 vrsta biljaka od međunarodnog značaja</strong>, dok je <em>15 biljnih vrsta</em> zaštićeno kao prirodne retkosti.
                </p>
              </section>

              <img srcSet={`${zaovinskoJezero55} 450w, ${zaovinskoJezero5} `} alt="Jezero Zaovine 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Osim prirodnih lepota, <strong>Zaovinsko jezero</strong> pruža i bogato kulturno-istorijsko iskustvo. U blizini brane, posetioci mogu obići lokaciju gde je <em>Josif Pančić</em> otkrio <strong>Pančićevu omoriku</strong>, kao i istražiti srednjovekovno utvrđenje <em>Grad</em>. Jezero je postalo simbol divlje prirode, a neuređene plaže nude savršen mir i opuštanje. Okolne vikendice zrače autentičnošću, stvarajući jedinstvenu atmosferu. Ljubazni domaćini iz <strong>Zaovine</strong> srdačno dočekuju turiste, pružajući im toplu dobrodošlicu. Ovaj raj takođe privlači ljubitelje ribolova, dok blizina mesta otkrića Pančićeve omorike dodaje poseban značaj ovom području.
                </p>
              </section>

              <img srcSet={`${zaovinskoJezero66} 450w, ${zaovinskoJezero6} `} alt="Jezero Zaovine 6" loading="lazy" />

              <section lang="sr">
                <p>
                  Za ljubitelje avantura i aktivnog odmora, uređene staze za šetnje i vožnju biciklom nude jedinstven način za istraživanje prirodnih lepota ovog kraja. Neuređene plaže u blizini brane <strong>Lazići</strong>, jezera <em>Spajići</em> i <strong>Lipovica</strong> dodatno obogaćuju turističku ponudu, nudeći različite opcije za opuštanje i bekstvo od svakodnevnog života. <strong>Zaovinsko jezero</strong> je postalo nezaobilazna destinacija za sve koji žele da uživaju u savršenoj kombinaciji <em>prirode</em>, kulturnog nasleđa i bogate turističke ponude.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>Zaovine Lake</h2>

              <section lang="en"> <p> <strong>Zaovine Lake</strong>, located on the <em>Tara</em> mountain near the picturesque village of <strong>Zaovine</strong>, is a true <em>natural masterpiece</em> and a favorite destination for lovers of <strong>untouched nature</strong>. This artificial lake was created between 1975 and 1983 by building dams near the peak of <strong>Kik</strong> (958 meters above sea level), redirecting the flow of the <em>Beli Rzav</em> river and creating a stunning water landscape. When at its highest level, the lake’s surface is situated at an altitude of <strong>881.5 meters</strong>, with a maximum depth reaching up to <em>110 meters</em>. </p> </section>
              <img srcSet={`${zaovinskoJezero22} 450w, ${zaovinskoJezero2}`} alt="Zaovine Lake 2" loading="lazy" />

              <section lang="en"> <p> Zaovine Lake is not only known for its <strong>natural beauty</strong>, but also for its impressive technical role. It functions as a reservoir for the reversible hydroelectric power plant <em>“Bajina Bašta”</em> in Perućac, connected to it by a vertical pipeline. When the water level of the <strong>Drina</strong> River is low, the lake serves as an <em>energy reservoir</em>, enabling turbine operation. On the other hand, during periods of heavy rainfall and flood waves, water is pumped back into <strong>Zaovine Lake</strong>. This oscillation of water levels further emphasizes its uniqueness and technical significance. </p> </section>
              <img srcSet={`${zaovinskoJezero33} 450w, ${zaovinskoJezero3} `} alt="Zaovine Lake 3" loading="lazy" />

              <section lang="en"> <p> <strong>Zaovine Lake</strong> has many functions that make it unique. Besides serving as a reservoir for the hydroelectric plant and helping regulate water levels, the water from the lake is used for human consumption after proper treatment at processing plants. Additionally, the lake provides ideal conditions for trout farming, contributing to the preservation of the <strong>biodiversity</strong> of the area. During the summer months, the undeveloped beaches around the lake become a popular spot for swimmers. </p> </section>
              <img srcSet={`${zaovinskoJezero44} 450w, ${zaovinskoJezero4} `} alt="Zaovine Lake 4" loading="lazy" />

              <section lang="en"> <p> Besides its impressive water beauty, <strong>Zaovine Lake</strong> is a true natural treasure in terms of flora. Around <em>50%</em> of the flora of Tara mountain and <strong>15%</strong> of the entire flora of Serbia grow in this area, making it a paradise for botanists and plant lovers. Approximately <strong>600 plant species</strong> have been recorded here, of which 55 are listed on the preliminary <em>Red List of Flora of Serbia</em>. Also, Zaovine Lake is home to <strong>25 plant species of international importance</strong>, while <em>15 plant species</em> are protected as natural rarities. </p> </section>
              <img srcSet={`${zaovinskoJezero55} 450w, ${zaovinskoJezero5} `} alt="Zaovine Lake 5" loading="lazy" />

              <section lang="en"> <p> Beyond natural beauty, <strong>Zaovine Lake</strong> offers a rich cultural and historical experience. Near the dam, visitors can visit the site where <em>Josif Pančić</em> discovered the <strong>Pančić’s spruce</strong>, as well as explore the medieval fortress <em>Grad</em>. The lake has become a symbol of wild nature, and the undeveloped beaches offer perfect peace and relaxation. The surrounding cottages radiate authenticity, creating a unique atmosphere. Friendly hosts from <strong>Zaovine</strong> warmly welcome tourists, providing a heartfelt hospitality. This paradise also attracts fishing enthusiasts, while the proximity to the site of Pančić’s spruce discovery adds special significance to the area. </p> </section>
              <img srcSet={`${zaovinskoJezero66} 450w, ${zaovinskoJezero6}`} alt="Zaovine Lake 6" loading="lazy" />

              <section lang="en"> <p> For adventure lovers and active tourists, well-maintained walking and cycling trails offer a unique way to explore the natural beauties of the region. The undeveloped beaches near the <strong>Lazići</strong> dam, the lakes <em>Spajići</em> and <strong>Lipovica</strong> further enrich the tourist offer, providing various options for relaxation and escape from everyday life. <strong>Zaovine Lake</strong> has become an indispensable destination for all those who want to enjoy the perfect combination of <em>nature</em>, cultural heritage, and rich tourism opportunities. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default ZaovinskoJezero;