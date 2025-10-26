/* eslint-disable react/no-unknown-property */
import jelovarnik1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/desktop/jelovarnik1.jpg";
import jelovarnik2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/desktop/jelovarnik2.jpg";
import jelovarnik3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/desktop/jelovarnik3.jpg";
import jelovarnik4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/desktop/jelovarnik4.jpg";
import jelovarnik5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/desktop/jelovarnik5.jpg";
import jelovarnik11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/mobile/Mjelovarnik1.jpg";
import jelovarnik22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/mobile/Mjelovarnik2.jpg";
import jelovarnik33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/mobile/Mjelovarnik3.jpg";
import jelovarnik44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/mobile/Mjelovarnik4.jpg";
import jelovarnik55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/mobile/Mjelovarnik5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const VodopadJelovarnik = () => {
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
            ? 'Vodopad Jelovarnik – Najviši vodopad Kopaonika i prirodni biser Srbije | Srbija Wonders'
            : 'Jelovarnik Waterfall – Tallest Waterfall of Kopaonik and a Natural Gem of Serbia | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Vodopad Jelovarnik, visok 71 metar, jedan je od najviših u Srbiji. Smešten u srcu Kopaonika, okružen gustom šumom i spektakularnim pejzažima.'
              : 'Jelovarnik Waterfall, standing at 71 meters, is one of Serbia’s tallest. Nestled in Kopaonik’s forested heart, it offers breathtaking scenery and serenity.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Vodopad Jelovarnik, Kopaonik, prirodni rezervat, planinarenje, priroda Srbije, Jelovarnik, Brzeće, najviši vodopad, Srbija, turizam'
              : 'Jelovarnik Waterfall, Kopaonik, nature Serbia, hiking, Serbia waterfalls, Brzeće, tallest waterfall Serbia, travel Serbia'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/vodopad-jelovarnik`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/vodopad-jelovarnik"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/vodopad-jelovarnik"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/vodopad-jelovarnik"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(rasinskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${jelovarnik11} 450w, ${jelovarnik1} `} alt="Vodopad Jelovarnik 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Vodopad Jelovarnik</h1>

              <section lang="sr">
                <p>
                  <strong>Jelovarnik</strong> je očaravajući <strong>vodopad</strong> smešten na planini <strong>Kopaonik</strong>.
                  Sa visinom od oko <strong>71 metar</strong>, jedan je od <strong>najviših vodopada u Srbiji</strong> i predstavlja
                  <strong> spektakularan prizor</strong> koji ostavlja bez daha. Nalazi se na <strong>istočnom delu Kopaonika</strong>,
                  u blizini turističkog mesta <strong>Brzeće</strong>, a do njega vodi staza kroz <strong>gustu šumu</strong>.
                  <br />
                  <br />
                  Okružen <strong>bogatom vegetacijom</strong>, Jelovarnik je dom mnogim <strong>biljnim vrstama</strong>,
                  uključujući <strong>borove</strong> i <strong>hrastove šume</strong>, što dodatno doprinosi njegovoj
                  <strong> prirodnoj čaroliji</strong>.
                </p>
              </section>

              <img srcSet={`${jelovarnik22} 450w, ${jelovarnik2}`} alt="Vodopad Jelovarnik 2" />

              <section lang="sr">
                <p>
                  Kako se približavate vodopadu, odmah osećate <strong>snagu vode</strong> koja se
                  <strong> obrušava niz stene</strong>. Voda formira <strong>impozantan vodeni zid</strong>,
                  dok <strong>magla i vodena prašina</strong> dodatno pojačavaju <strong>dramatičnost prizora</strong>.
                  <br />
                  <br />
                  Najlepši je tokom <strong>proleća i leta</strong>, kada se <strong>sneg topi</strong> i količina vode
                  se značajno povećava, čineći <strong>Jelovarnik</strong> još snažnijim i impresivnijim.
                </p>
              </section>

              <img srcSet={`${jelovarnik33} 450w, ${jelovarnik3}`} alt="Vodopad Jelovarnik 3" />

              <section lang="sr">
                <p>
                  Jelovarnik je omiljeno mesto za <strong>ljubitelje prirode</strong>, <strong>planinare</strong> i
                  <strong> fotografe</strong>. Avanturisti mogu da se <strong>popnu do vrha vodopada</strong> i uživaju
                  u <strong>zapanjujućem pogledu</strong> na okolne <strong>planine i doline</strong>.
                  <br />
                  <br />
                  Mnogi posetioci se zadržavaju na <strong>obližnjim stenama</strong>, gde se opuštaju i dive se
                  <strong> netaknutoj prirodi</strong> koja Jelovarnik čini pravim <strong>skrivenim draguljem</strong> Kopaonika.
                </p>
              </section>

              <img srcSet={`${jelovarnik44} 450w, ${jelovarnik4}`} alt="Vodopad Jelovarnik 4" />

              <section lang="sr">
                <p>
                  Okolina vodopada nudi brojne <strong>planinarske staze</strong> koje vode do drugih
                  <strong> atraktivnih lokacija</strong>. Idealan je za <strong>izlete</strong>,
                  <strong> piknike</strong> i čak <strong>kampovanje</strong>, zahvaljujući
                  <strong>netaknutoj prirodi</strong> koja ga okružuje.
                  <br />
                  <br />
                  Ova oblast pruža <strong>spokoj</strong> i <strong>mir</strong>, savršen za one koji žele
                  da se <strong>odmore od gradske buke</strong> i povežu sa prirodom.
                </p>
              </section>

              <img srcSet={`${jelovarnik55} 450w, ${jelovarnik5}`} alt="Vodopad Jelovarnik 5" />

              <section lang="sr">
                <p>
                  Poseta <strong>vodopadu Jelovarnik</strong> predstavlja <strong>nezaboravno iskustvo</strong>.
                  Ovaj <strong>prirodni fenomen</strong> ostavlja dubok utisak na svakog posetioca i nezaobilazna je
                  destinacija za sve koji borave na <strong>Kopaoniku</strong> ili okolini.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Jelovarnik Waterfall</h1>

              <section lang="en">
                <p>
                  <strong>Jelovarnik</strong> is a stunning <strong>waterfall</strong> located on <strong>Mount Kopaonik</strong>.
                  With a height of around <strong>71 meters</strong>, it is one of the <strong>tallest waterfalls in Serbia</strong>
                  and offers a <strong>spectacular sight</strong> that takes your breath away. It is situated on the
                  <strong> eastern side of Kopaonik</strong>, near the tourist village of <strong>Brzeće</strong>, and is accessible
                  by a trail that winds through a <strong>dense forest</strong>.
                  <br />
                  <br />
                  Surrounded by <strong>lush vegetation</strong>, Jelovarnik is home to many <strong>plant species</strong>,
                  including <strong>pine</strong> and <strong>oak forests</strong>, which further contribute to its
                  <strong> natural charm</strong>.
                </p>
              </section>

              <img srcSet={`${jelovarnik22} 450w, ${jelovarnik2}`} alt="Jelovarnik Waterfall 2" />

              <section lang="en">
                <p>
                  As you approach the waterfall, you immediately feel the <strong>power of the water</strong>
                  crashing <strong>down the rocks</strong>. The water forms a <strong>massive wall</strong>,
                  while the <strong>mist and spray</strong> amplify the <strong>drama of the scene</strong>.
                  <br />
                  <br />
                  It is most beautiful during <strong>spring and summer</strong>, when the <strong>snow melts</strong>
                  and the water volume increases significantly, making <strong>Jelovarnik</strong> even more
                  powerful and impressive.
                </p>
              </section>

              <img srcSet={`${jelovarnik33} 450w, ${jelovarnik3}`} alt="Jelovarnik Waterfall 3" />

              <section lang="en">
                <p>
                  Jelovarnik is a favorite destination for <strong>nature lovers</strong>, <strong>hikers</strong>,
                  and <strong>photographers</strong>. Adventurers can <strong>climb to the top of the waterfall</strong>
                  and enjoy <strong>breathtaking views</strong> of the surrounding <strong>mountains and valleys</strong>.
                  <br />
                  <br />
                  Many visitors spend time on the <strong>nearby rocks</strong>, relaxing and admiring the
                  <strong> untouched nature</strong> that makes Jelovarnik a true <strong>hidden gem</strong> of Kopaonik.
                </p>
              </section>

              <img srcSet={`${jelovarnik44} 450w, ${jelovarnik4}`} alt="Jelovarnik Waterfall 4" />

              <section lang="en">
                <p>
                  The area around the waterfall offers numerous <strong>hiking trails</strong> leading to other
                  <strong> scenic spots</strong>. It is ideal for <strong>day trips</strong>,
                  <strong> picnics</strong>, and even <strong>camping</strong>, thanks to the
                  <strong>unspoiled nature</strong> that surrounds it.
                  <br />
                  <br />
                  This area provides <strong>peace</strong> and <strong>tranquility</strong>, perfect for those
                  looking to <strong>escape city noise</strong> and connect with nature.
                </p>
              </section>

              <img srcSet={`${jelovarnik55} 450w, ${jelovarnik5}`} alt="Jelovarnik Waterfall 5" />

              <section lang="en">
                <p>
                  Visiting the <strong>Jelovarnik Waterfall</strong> is a truly <strong>unforgettable experience</strong>.
                  This <strong>natural wonder</strong> leaves a lasting impression on every visitor and is a must-see
                  destination for anyone staying on <strong>Kopaonik</strong> or nearby.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default VodopadJelovarnik;