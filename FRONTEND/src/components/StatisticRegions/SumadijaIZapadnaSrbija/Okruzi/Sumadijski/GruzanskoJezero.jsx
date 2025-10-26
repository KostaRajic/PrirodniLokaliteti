/* eslint-disable react/no-unknown-property */
import gruzanskoJezero1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/desktop/gruzanskoJezero1.jpg";
import gruzanskoJezero2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/desktop/gruzanskoJezero2.jpg";
import gruzanskoJezero3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/desktop/gruzanskoJezero3.jpg";
import gruzanskoJezero4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/desktop/gruzanskoJezero4.jpg";
import gruzanskoJezero5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/desktop/gruzanskoJezero5.jpg";
import gruzanskoJezero11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/mobile/MgruzanskoJezero1.jpg";
import gruzanskoJezero22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/mobile/MgruzanskoJezero2.jpg";
import gruzanskoJezero33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/mobile/MgruzanskoJezero3.jpg";
import gruzanskoJezero44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/mobile/MgruzanskoJezero4.jpg";
import gruzanskoJezero55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/GruzanskoJezero/mobile/MgruzanskoJezero5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useContextAuth } from "../../../../../Context";
import { sumadijskiOkrugPathRoutes } from "./SumadijskiOkrugPathRoutes";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const GruzanskoJezero = () => {
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
            ? "Gružansko jezero – Dragulj Šumadije za sport, ribolov i prirodu | Srbija Wonders"
            : "Gružansko Lake – Šumadija’s Gem for Sports, Fishing, and Nature | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Gružansko jezero, veštačka akumulacija u opštini Knić, poznato je po čistoj vodi, bogatom ribljem fondu i idealnim uslovima za veslanje, kajak, jedrenje i sportski ribolov. Nalazi se u srcu Šumadije."
              : "Gružansko Lake, an artificial reservoir in the Knić municipality, is known for its clean waters, rich fish population, and ideal conditions for rowing, kayaking, sailing, and sport fishing in central Serbia."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Gružansko jezero, Šumadija, ribolov, veslanje, kajak, jedrenje, priroda Srbije, sportski ribolov, jezera u Srbiji, Knić, rekreacija u prirodi"
              : "Gružansko Lake, Šumadija, fishing, rowing, kayaking, sailing, Serbian nature, sport fishing, lakes in Serbia, Knić, outdoor recreation"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/gruzansko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/gruzansko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/gruzansko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/gruzansko-jezero"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(sumadijskiOkrugPathRoutes.home(switchLanguage))}
        />
        <header></header>
        <img srcSet={`${gruzanskoJezero11} 450w, ${gruzanskoJezero1} `} alt="Gružansko jezero 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Gružansko jezero</h1>

              <section lang="sr">
                <p>
                  Godine <strong>1979.</strong> prepravljena je jedna od najdužih i vodom najbogatijih reka Šumadije, <em>Gružа</em>, prema kojoj je dobilo ime <strong>Gružansko jezero</strong>. Nakon dve godine izgradnje betonsko-lučne brane u mestu <strong>Pajsijević</strong>, u opštini <strong>Knić</strong>, formirana je višenamenska akumulacija. Punjenje jezera završeno je <strong>1983. godine</strong>.
                </p>
              </section>

              <img srcSet={`${gruzanskoJezero22} 450w, ${gruzanskoJezero2} `} alt="Gružansko jezero 2" />

              <section lang="sr">
                <p>
                  <strong>Gružansko jezero</strong> je domaćin velikom broju prelepih ptica, sa <strong>87</strong> identifikovanih vrsta, od kojih se čak <strong>25</strong> gnezdi na ovom području. Ova raznovrsnost čini jezero atraktivnim i za <em>posmatrače ptica</em>. Tokom letnjih meseci, <strong>Gružansko jezero</strong> postaje centar okupljanja veslačkih i kajakaških timova iz cele Srbije. Sa dužinom od oko <strong>10 km</strong> i strateškim položajem između dva brda, jezero pruža idealne uslove za razvoj vodenih sportova. Hemijska svojstva vode, njena gustina i vodene struje omogućavaju veslačima odlične uslove za trening. Kada to dozvoljavaju vremenski uslovi, sve više jedriličara dolazi na jezero da uživa u ovoj aktivnosti.
                </p>
              </section>

              <img srcSet={`${gruzanskoJezero33} 450w, ${gruzanskoJezero3} `} alt="Gružansko jezero 3" />

              <section lang="sr">
                <p>
                  Na <strong>Gružanskom jezeru</strong> često se organizuju takmičenja u ribolovu. Jezero je bogato raznim vrstama riba, poput <strong>šarana, štuke, soma, babuške, bandara, jezerske pastrmke, deverike</strong> i drugih. Najčešće se love <strong>deverike, babuške, crvenperke</strong> i <strong>belice</strong>, a popularna mesta za pecanje su oko glavnog mosta na magistralnom putu <strong>Čačak-Kragujevac</strong> i u zalivima kod mesta <strong>Žunje</strong>. Lokalni pecaroši ističu da otežavajući faktor predstavlja divlja gradnja, koja otežava pristup obali na određenim mestima oko jezera. Neki delovi jezera su posebno rezervisani za takmičenja, jer su njihove obale pogodne za sportski ribolov. Za pecanje na ovom jezeru potrebna je ribolovačka dozvola, budući da pripada ribarskoj zoni <em>„Srbija-jugozapad“</em>.
                </p>
              </section>

              <img srcSet={`${gruzanskoJezero44} 450w, ${gruzanskoJezero4} `} alt="Gružansko jezero 4" />

              <section lang="sr">
                <p>
                  Jezero se prostire na <strong>900 hektara</strong>, sa obimom od oko <strong>40 kilometara</strong>, a njegova širina varira od <strong>2800</strong> do <strong>3000 metara</strong>, dok dužina iznosi oko <strong>10 kilometara</strong>. Obala je niska, dobro razuđena i prekrivena livadama, šumarcima i niskim listopadnim žbunjem. Formiranje akumulacije zahtevalo je izgradnju nove infrastrukture, uključujući most na magistralnom putu <strong>M-23 (Kragujevac – Čačak)</strong> kako bi se omogućio nesmetan saobraćaj.
                </p>
              </section>

              <img srcSet={`${gruzanskoJezero55} 450w, ${gruzanskoJezero5} `} alt="Gružansko jezero 5" />

              <section lang="sr">
                <p>
                  <strong>2019. godine</strong>, <strong>Gružansko jezero</strong> bilo je domaćin <em>6. Evropskog prvenstva u pecanju iz kajaka</em>. Ovo prestižno takmičenje prvi put je organizovano u Srbiji, upravo zbog izvanrednih uslova koje jezero nudi. Na takmičenju je učestvovalo <strong>50 takmičara iz 15 evropskih zemalja</strong>, koji su se borili za titulu najboljeg.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Gruža Lake</h1>

              <section lang="en">
                <p style={{ paddingTop: "50px" }}>
                  In <strong>1979</strong>, one of the longest and most water-rich rivers of Šumadija, <em>Gruža</em>, after which <strong>Gruža Lake</strong> was named, was modified. After two years of constructing a concrete-arch dam in the village of <strong>Pajsijević</strong>, in the municipality of <strong>Knić</strong>, a multi-purpose reservoir was formed. The lake filling was completed in <strong>1983</strong>.
                </p>
              </section>

              <img srcSet={`${gruzanskoJezero22} 450w, ${gruzanskoJezero2} `} alt="Gruža Lake 2" />

              <section lang="en">
                <p>
                  <strong>Gruža Lake</strong> is home to a large number of beautiful birds, with <strong>87</strong> identified species, of which as many as <strong>25</strong> nest in this area. This diversity makes the lake attractive for <em>bird watchers</em> as well. During the summer months, <strong>Gruža Lake</strong> becomes a gathering center for rowing and kayaking teams from all over Serbia. With a length of about <strong>10 km</strong> and a strategic position between two hills, the lake provides ideal conditions for the development of water sports. The chemical properties of the water, its density, and water currents provide excellent training conditions for rowers. When weather conditions permit, more and more sailors come to the lake to enjoy this activity.
                </p>
              </section>

              <img srcSet={`${gruzanskoJezero33} 450w, ${gruzanskoJezero3} `} alt="Gruža Lake 3" />

              <section lang="en">
                <p>
                  At <strong>Gruža Lake</strong>, fishing competitions are often organized. The lake is rich in various fish species such as <strong>carp, pike, catfish, bream, perch, lake trout, roach</strong>, and others. The most commonly caught fish are <strong>roach, bream, rudd</strong>, and <strong>bleak</strong>, with popular fishing spots around the main bridge on the <strong>Čačak-Kragujevac</strong> highway and in the bays near <strong>Žunje</strong>. Local fishermen point out that a complicating factor is illegal construction, which makes access to the shore difficult in certain parts around the lake. Some parts of the lake are specially reserved for competitions because their banks are suitable for sport fishing. A fishing license is required to fish on this lake, as it belongs to the fishing zone <em>“Serbia-Southwest”</em>.
                </p>
              </section>

              <img srcSet={`${gruzanskoJezero44} 450w, ${gruzanskoJezero4} `} alt="Gruža Lake 4" />

              <section lang="en">
                <p>
                  The lake covers <strong>900 hectares</strong>, with a circumference of about <strong>40 kilometers</strong>, its width varying from <strong>2800</strong> to <strong>3000 meters</strong>, and a length of about <strong>10 kilometers</strong>. The shore is low, well indented, and covered with meadows, groves, and low deciduous bushes. The formation of the reservoir required the construction of new infrastructure, including a bridge on the <strong>M-23 (Kragujevac – Čačak)</strong> highway to ensure uninterrupted traffic.
                </p>
              </section>

              <img srcSet={`${gruzanskoJezero55} 450w, ${gruzanskoJezero5} `} alt="Gruža Lake 5" />

              <section lang="en">
                <p>
                  In <strong>2019</strong>, <strong>Gruža Lake</strong> hosted the <em>6th European Kayak Fishing Championship</em>. This prestigious competition was organized in Serbia for the first time, precisely because of the excellent conditions the lake offers. The competition featured <strong>50 participants from 15 European countries</strong>, all competing for the title of the best.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default GruzanskoJezero;