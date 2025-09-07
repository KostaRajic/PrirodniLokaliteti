/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import prskalo1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadPrskalo/desktop/vodopadPrskalo4.jpg";
import prskalo2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadPrskalo/desktop/vodopadPrskalo1.jpg";
import prskalo3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadPrskalo/desktop/vodopadPrskalo2.jpg";
import prskalo11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadPrskalo/mobile/MvodopadPrskalo4.jpg";
import prskalo22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadPrskalo/mobile/MvodopadPrskalo1.jpg";
import prskalo33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/VodopadPrskalo/mobile/MvodopadPrskalo2.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const VodopadPrskalo = () => {
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
            ? "Vodopad Prskalo – Prirodna lepota Južnog Kučaja | Srbija Wonders"
            : "Prskalo Waterfall – Natural Beauty of South Kučaj Mountains | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Vodopad Prskalo visok 15 metara nalazi se u srcu planine Južni Kučaj, blizu Resavice. Jedinstvena bigrena formacija i netaknuta priroda čine ga nezaobilaznom destinacijom za ljubitelje prirode i avanturiste."
              : "Prskalo Waterfall, 15 meters tall, is located in the heart of the South Kučaj mountains near Resavica. Its unique travertine formations and untouched nature make it a must-visit spot for nature lovers and adventurers."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Vodopad Prskalo, Južni Kučaj, Resavica, bigrene naslage, priroda Srbije, planinski vodopadi, kanjon Nekudovo"
              : "Prskalo Waterfall, South Kučaj, Resavica, travertine formations, nature Serbia, mountain waterfalls, Nekudovo canyon"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-prskalo`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-prskalo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-prskalo"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/vodopad-prskalo"
        />
      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(pomoravskiOkrugPathRoutes.home(switchLanguage))}

        />
        <header></header>
        <img srcSet={`${prskalo11} 450w, ${prskalo1} `} alt="Vodopad Prskalo 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2 style={{ color: "white" }}>Vodopad Prskalo</h2>

              <section lang="sr">
                <p>
                  <strong>Vodopad Prskalo</strong> smešten je na padinama planinskog masiva <strong>Južni Kučaj</strong>, u
                  centralnom delu Srbije. Nalazi se u dolini reke <em>Nekudovo</em>, na oko <strong>15 kilometara</strong>
                  udaljenosti od naselja <strong>Resavica</strong> u opštini <strong>Despotovac</strong>. Vodopad je lako dostupan jer je
                  u neposrednoj blizini puta koji povezuje <strong>Resavicu</strong> i <strong>Čestobrodicu</strong>.
                </p>
              </section>

              <img srcSet={`${prskalo22} 450w, ${prskalo2} `} alt="Vodopad Prskalo 2" />

              <section lang="sr">
                <p>
                  Vodopad <strong>Prskalo</strong> ima visinu od <strong>15 metara</strong> i nalazi se na nadmorskoj visini
                  od <strong>769 metara</strong>. Iako tokom godine nema mnogo vode, nikada ne presušuje.
                  Izgledom podseća na visoku kamenu skulpturu, čineći ga jedinstvenom
                  prirodnom pojavom na planini <strong>Kučaj</strong>. Formacija stenovitih slojeva,
                  nastalih od <em>bigrenih naslaga</em>, stvorena je kroz vekove delovanjem vode
                  koja teče uskim kanalom duž samog vrha, stvarajući pad sa najisturenije
                  ivice.
                </p>
              </section>

              <img srcSet={`${prskalo33} 450w, ${prskalo3} `} alt="Vodopad Prskalo 3" />

              <section lang="sr">
                <p>
                  Iako nije daleko od glavnog puta, pristup vodopadu nije nimalo lak, jer
                  je okružen gustim rastinjem. Međutim, svaki uložen napor će se
                  isplatiti, jer ćete teško želeti da napustite ovo mesto, a sigurno ćete
                  poželeti da se ponovo vratite. Mir i tišina u okruženju netaknute
                  prirode pružiće vam pravi odmor za dušu. Vodopad <strong>Prskalo</strong> je nastao od
                  <em>bigrenih naslaga</em> koje je voda taložila kroz vekove. Sa leve strane
                  vodopada, postoji uska staza koja vodi do izvora reke <em>Nekudovo</em>, koji se
                  nalazi samo <strong>50 metara</strong> od vodopada. Izvor reke nalazi se na samoj "<em>glavi</em>"
                  <strong>Prskala</strong>. Reka, nakon što "kaplje" sa vodopada, nastavlja da teče prema
                  <strong>Resavici</strong>. Na pola puta, između <strong>Prskala</strong> i <strong>Resavice</strong>, nalazi se područje
                  zvano <strong>Uviralo</strong>, gde je postavljena tabla sa istim imenom. Na dnu kanjona,
                  ispod ogromne stene, reka <em>Nekudovo</em> nestaje, tj. ponire.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2 style={{ color: "white" }}>Waterfall Prskalo</h2>

              <section lang="en">
                <p>
                  <strong>Prskalo Waterfall</strong> is located on the slopes of the mountain massif <strong>Južni Kučaj</strong>, in
                  central Serbia. It lies in the valley of the river <em>Nekudovo</em>, about <strong>15 kilometers</strong>
                  away from the settlement of <strong>Resavica</strong> in the municipality of <strong>Despotovac</strong>. The waterfall is easily accessible as it is
                  situated near the road connecting <strong>Resavica</strong> and <strong>Čestobrodica</strong>.
                </p>
              </section>

              <img srcSet={`${prskalo22} 450w, ${prskalo2} `} alt="Prskalo Waterfall 2" />

              <section lang="en">
                <p>
                  <strong>Prskalo Waterfall</strong> has a height of <strong>15 meters</strong> and is situated at an altitude of
                  <strong>769 meters</strong>. Although it does not carry much water throughout the year, it never dries up.
                  Its appearance resembles a tall stone sculpture, making it a unique
                  natural phenomenon on the <strong>Kučaj</strong> mountain. The formation of rocky layers,
                  created from <em>tufa deposits</em>, was shaped over centuries by water
                  flowing through a narrow channel along the top, creating a drop from the most protruding edge.
                </p>
              </section>

              <img srcSet={`${prskalo33} 450w, ${prskalo3} `} alt="Prskalo Waterfall 3" />

              <section lang="en">
                <p>
                  Although it is not far from the main road, access to the waterfall is not easy, as
                  it is surrounded by dense vegetation. However, every effort invested will be
                  worthwhile, as you will hardly want to leave this place, and will surely
                  want to return again. The peace and quiet in the environment of untouched
                  nature will provide you with a true rest for the soul. <strong>Prskalo Waterfall</strong> formed from
                  <em>tufa deposits</em> accumulated by water over centuries. On the left side
                  of the waterfall, there is a narrow path leading to the source of the river <em>Nekudovo</em>, which is
                  located just <strong>50 meters</strong> from the waterfall. The river source is at the very "head"
                  of <strong>Prskalo</strong>. After "dripping" from the waterfall, the river continues to flow towards
                  <strong>Resavica</strong>. Halfway between <strong>Prskalo</strong> and <strong>Resavica</strong> lies an area called
                  <strong>Uviralo</strong>, where a sign with the same name is placed. At the bottom of the canyon,
                  under a huge rock, the river <em>Nekudovo</em> disappears, i.e., sinks.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default VodopadPrskalo;