/* eslint-disable react/no-unknown-property */
import zlatar1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar1.jpg";
import zlatar2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar2.jpg";
import zlatar3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar3.jpg";
import zlatar4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar4.jpg";
import zlatar5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar5.jpg";
import zlatar6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/desktop/zlatar6.jpg";
import zlatar11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar1.jpg";
import zlatar22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar2.jpg";
import zlatar33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar3.jpg";
import zlatar44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar4.jpg";
import zlatar55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar5.jpg";
import zlatar66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatar/mobile/Mzlatar6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaZlatar = () => {
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
            ? "Planina Zlatar | Sunce, priroda, vazdušna banja i aktivan odmor"
            : "Zlatar Mountain | Sun, nature, air spa and active holiday in Serbia"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Planina Zlatar je vazdušna banja u jugozapadnoj Srbiji, idealna za odmor, rekreaciju i lečenje. Uživajte u suncu, šumama, beloglavom supu, planinarenju i zimskoj zabavi."
              : "Zlatar Mountain is a highland air spa in southwestern Serbia, ideal for rest, recreation, and health tourism. Enjoy sunshine, forests, griffon vultures, hiking, and winter fun."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Planina Zlatar, Zlatar Srbija, Nova Varoš, Zlatar ski staze, beloglavi sup, vazdušna banja, Zlatar smeštaj, Uvac, Sjenica sir, rekreacija Srbija, zip line Zlatar, kajak, planinarenje"
              : "Zlatar Mountain, Zlatar Serbia, Nova Varos, Zlatar skiing, griffon vulture Serbia, air spa Serbia, Zlatar accommodation, Uvac Canyon, Sjenica cheese, outdoor Serbia, zipline, kayaking"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatar`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatar"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatar"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatar"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${zlatar33} 450w, ${zlatar3} `} alt="Planina Zlatar 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Planina Zlatar</h1>

              <section lang="sr">
                <p>
                  <strong>Planina Zlatar</strong> nalazi se u <strong>jugozapadnom delu Srbije</strong>, na ivici
                  <strong>Pešterske visoravni</strong>, između reka <strong>Lim</strong>, <strong>Mileševka</strong>, <strong>Bistrica</strong> i <strong>Uvac</strong>.
                  Smeštena je na svega <strong>4 kilometra od Nove Varoši</strong> i <strong>35 kilometara od Priboja</strong>.
                  Najviši vrh, <strong>Golo brdo</strong>, dostiže nadmorsku visinu od <strong>1.627 metara</strong>.
                </p>
              </section>

              <img srcSet={`${zlatar22} 450w, ${zlatar2}`} alt="Planina Zlatar 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Zlatar već godinama privlači brojne turiste, a jedan od glavnih razloga je
                  činjenica da ima čak <strong>285 sunčanih dana godišnje</strong>. Ovo ukazuje na
                  prisustvo <strong>mediteranske</strong>, odnosno <em>sredozemne klime</em>, u kombinaciji s
                  planinskom. Takva klima stvara idealne uslove za <strong>planinsku vegetaciju</strong> – guste
                  šume i prostrane pašnjake.
                </p>
              </section>

              <img srcSet={`${zlatar11} 450w, ${zlatar1}`} alt="Planina Zlatar 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Na Zlataru su zastupljene šume <strong>lišćara</strong> i <strong>četinara</strong>, uključujući
                  <strong>smrču</strong>, <strong>hrast</strong>, <strong>brezu</strong>, <strong>javor</strong>, <strong>bukvu</strong> i <strong>grab</strong>. Planina je bogata
                  <strong>lekovitim biljem</strong> kao što su <em>hajdučka trava</em> (sporiš), <em>kantarion</em> i <em>kamilica</em>.
                  Zahvaljujući raznovrsnoj flori i <strong>čistom vazduhu</strong>, Zlatar je stekao status
                  <strong>„vazdušne banje“</strong>.
                </p>
              </section>

              <img srcSet={`${zlatar44} 450w, ${zlatar4}`} alt="Planina Zlatar 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Životinjski svet planine Zlatar nije bogato razvijen, ali se mogu pronaći
                  vrste <strong>sitne</strong> i <strong>krupne divljači</strong>. Posebnu pažnju privlači <strong>reliktna vrsta</strong>
                  – <em>beloglavi sup</em>, koji zauzima značajno mesto u fauni ovog područja. Osim
                  prirodnih bogatstava, Zlatar je poznat i po <strong>rudnicima mrkog uglja</strong> i
                  <strong>lignita</strong>.
                </p>
              </section>

              <img srcSet={`${zlatar55} 450w, ${zlatar5}`} alt="Planina Zlatar 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Zlatar je poznat po proizvodnji <strong>sjeničkog</strong> i <strong>zlatarskog sira</strong>, dok
                  <strong>stočarstvo</strong> beleži sve veći razvoj. Na planini se nalazi i <strong>Zavod za
                    prevenciju, lečenje i rehabilitaciju kardiovaskularnih bolesti</strong>,
                  smešten u okruženju <strong>borovih</strong> i <strong>brezovih šuma</strong>. Ova planina nudi raznovrsne
                  aktivnosti, uključujući <strong>planinarenje</strong>, <strong>lov</strong>, <strong>splavarenje</strong>,
                  <strong>foto-turizam</strong>, kao i <strong>sportsko-rekreativne sadržaje</strong> poput:
                  <em>vožnje džipovima</em>, <em>krstarenja</em>, <em>vožnje kvadova</em>, <em>kajaka</em>,
                  <em>bicikala</em>, <em>zip lajna</em> i mnogih drugih. <strong>Izletnički turizam</strong> je takođe
                  dobro razvijen.
                </p>
              </section>

              <img srcSet={`${zlatar66} 450w, ${zlatar6}`} alt="Planina Zlatar 6" loading="lazy" />

              <section lang="sr">
                <p>
                  Na Zlataru su uređene <strong>dve ski staze</strong>. Prva staza, dužine <strong>800 metara</strong>,
                  opremljena je <strong>ski liftom</strong> od <strong>420 metara</strong>, a posetioci mogu iznajmiti <em>ski opremu</em>.
                  Druga staza, poznata kao <strong>Briježđa</strong>, nalazi se u <strong>Novoj Varoši</strong>. <strong>Žičara</strong> polazi
                  iz samog centra grada i vodi do <strong>televizijskog predajnika</strong> iznad naselja
                  <strong>Cvijetnjak</strong>, poznatog kao <em>„repetitor“</em>. Staza je duga <strong>980 metara</strong> i
                  klasifikovana je <strong>delimično kao plava</strong>, a <strong>delimično kao crvena</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Zlatar Mountain</h1>

              <section lang="en"> <p> <strong>Zlatar Mountain</strong> is located in the <strong>southwestern part of Serbia</strong>, on the edge of the <strong>Pešter Plateau</strong>, between the rivers <strong>Lim</strong>, <strong>Mileševka</strong>, <strong>Bistrica</strong>, and <strong>Uvac</strong>. It is situated just <strong>4 kilometers from Nova Varoš</strong> and <strong>35 kilometers from Priboj</strong>. The highest peak, <strong>Golo brdo</strong>, reaches an elevation of <strong>1,627 meters</strong>. </p> </section>
              <img srcSet={`${zlatar22} 450w, ${zlatar2}`} alt="Zlatar Mountain 2" loading="lazy" />

              <section lang="en"> <p> Zlatar has been attracting tourists for years, and one of the main reasons is the fact that it has as many as <strong>285 sunny days per year</strong>. This indicates the presence of a <strong>Mediterranean</strong> (or <em>sub-Mediterranean</em>) climate, combined with a mountainous one. Such a climate creates ideal conditions for <strong>mountain vegetation</strong> – dense forests and wide pastures. </p> </section>
              <img srcSet={`${zlatar11} 450w, ${zlatar1}`} alt="Zlatar Mountain 3" loading="lazy" />

              <section lang="en"> <p> Zlatar is covered with forests of both <strong>deciduous</strong> and <strong>coniferous trees</strong>, including <strong>spruce</strong>, <strong>oak</strong>, <strong>birch</strong>, <strong>maple</strong>, <strong>beech</strong>, and <strong>hornbeam</strong>. The mountain is rich in <strong>medicinal herbs</strong> such as <em>yarrow</em>, <em>St. John’s wort</em>, and <em>chamomile</em>. Thanks to its diverse flora and <strong>clean air</strong>, Zlatar has earned the reputation of an <strong>“air spa”</strong>. </p> </section>
              <img srcSet={`${zlatar44} 450w, ${zlatar4}`} alt="Zlatar Mountain 4" loading="lazy" />

              <section lang="en"> <p> The wildlife of Zlatar Mountain is not highly developed, but various species of both <strong>small</strong> and <strong>large game</strong> can be found. A special attraction is a <strong>relict species</strong> – the <em>griffon vulture</em>, which holds an important place in the local fauna. In addition to its natural resources, Zlatar is also known for its <strong>brown coal</strong> and <strong>lignite mines</strong>. </p> </section>
              <img srcSet={`${zlatar55} 450w, ${zlatar5}`} alt="Zlatar Mountain 5" loading="lazy" />

              <section lang="en"> <p> Zlatar is famous for the production of <strong>Sjenica cheese</strong> and <strong>Zlatar cheese</strong>, while <strong>livestock farming</strong> is seeing increasing development. The mountain also hosts an <strong>institute for prevention, treatment, and rehabilitation of cardiovascular diseases</strong>, located among <strong>pine</strong> and <strong>birch forests</strong>. The mountain offers a variety of activities, including <strong>hiking</strong>, <strong>hunting</strong>, <strong>rafting</strong>, <strong>photo tourism</strong>, as well as <strong>sports and recreational activities</strong> such as <em>jeep rides</em>, <em>boat cruises</em>, <em>ATV rides</em>, <em>kayaking</em>, <em>biking</em>, <em>zip-lining</em>, and more. <strong>Excursion tourism</strong> is also well developed. </p> </section>
              <img srcSet={`${zlatar66} 450w, ${zlatar6}`} alt="Zlatar Mountain 6" loading="lazy" />

              <section lang="en"> <p> Zlatar has <strong>two ski slopes</strong>. The first one is <strong>800 meters long</strong> and equipped with a <strong>420-meter ski lift</strong>, with <em>ski equipment</em> available for rent. The second slope, known as <strong>Briježđa</strong>, is located in <strong>Nova Varoš</strong>. A <strong>cable car</strong> departs from the town center and leads to the <strong>TV transmitter</strong> above the <strong>Cvijetnjak</strong> neighborhood, known as the <em>“Repeater”</em>. The slope is <strong>980 meters long</strong> and is classified as <strong>partly blue</strong> and <strong>partly red</strong>. </p> </section>
            </>
          )}

      </div>
    </>
  );
};


export default PlaninaZlatar;