/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import ripaljka1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/desktop/vodopadRipaljka1.jpg";
import ripaljka2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/desktop/vodopadRipaljka2.jpg";
import ripaljka3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/desktop/vodopadRipaljka3.jpg";
import ripaljka4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/desktop/vodopadRipaljka4.jpg";
import ripaljka5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/desktop/vodopadRipaljka5.jpg";
import ripaljka11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/mobile/vodopadRipaljkaM1.jpg";
import ripaljka22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/mobile/vodopadRipaljkaM2.jpg";
import ripaljka33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/mobile/vodopadRipaljkaM3.jpg";
import ripaljka44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/mobile/vodopadRipaljkaM4.jpg";
import ripaljka55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/VodopadRipaljka/mobile/vodopadRipaljkaM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zajecarskiOkrugPathRoutes } from "./ZajecarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const VodopadRipaljka = () => {
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

        <title>{switchLanguage === 'rs' ? "Vodopad Ripaljka – Najviši Vodopad u Srbiji kod Sokobanje | Serbia Wonders" : "Ripaljka Waterfall – The Highest Waterfall in Serbia near Sokobanja | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Vodopad Ripaljka na reci Gradašnici, smešten na planini Ozren blizu Sokobanje, prvi je spomenik prirode u Jugoslaviji i jedan od najlepših vodopada u Srbiji. Saznajte više o njegovoj visini, legendama i zaštiti."
            :
            "Ripaljka Waterfall on the Gradašnica river, located on Ozren mountain near Sokobanja, is the first natural monument in Yugoslavia and one of the most beautiful waterfalls in Serbia. Learn about its height, legends, and protection."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Vodopad Ripaljka, vodopadi Srbije, planina Ozren, Sokobanja, Gradašnica reka, prirodni spomenik, zaštita prirode, Jovan Cvijić, turističke atrakcije Srbije"
            :
            "Ripaljka waterfall, waterfalls in Serbia, Ozren mountain, Sokobanja, Gradašnica river, natural monument, nature protection, Jovan Cvijić, Serbia tourist attractions"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/vodopad-ripaljka`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/vodopad-ripaljka"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/vodopad-ripaljka"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/vodopad-ripaljka"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zajecarskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${ripaljka11} 450w, ${ripaljka1} `} alt="Vodopad Ripaljka 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Vodopad Ripaljka</h1>

              <section lang="sr">
                <p>
                  <strong>Ripaljka</strong> je vodopad na reci <em>Gradašnici</em>, smešten na planini <em>Ozren</em>, oko 5 km od Sokobanje. Proglašen je <strong>prvim spomenikom prirode u Jugoslaviji</strong>, zaštićenim zakonom još 1948. godine. Prema zapisima <em>Jovana Cvijića</em>, u to vreme Ripaljka je važila za <strong>najviši vodopad u Srbiji</strong>.
                </p>

                <img srcSet={`${ripaljka22} 450w, ${ripaljka2}`} alt="Vodopad Ripaljka 2" loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  Ripaljka je <strong>akumulativni vodopad</strong> smešten na nadmorskoj visini od 420 metara, a sam vodopad je visok <em>17,5 metara</em>. Tokom letnjih i jesenjih meseci reka Gradašnica presušuje, zbog čega vodopad povremeno nestaje. Ime <em>„Ripaljka”</em> potiče od reči <strong>„ripnuti”</strong>, koja se u ovom delu Srbije koristi kao sinonim za <em>„skočiti”</em>.
                  <br /><br />
                  Ovaj vodopad je jedan od <strong>najlepših u Srbiji</strong> i nalazi se samo nekoliko desetina metara od ulaza u kompleks <em>Specijalne bolnice na Ozrenu</em>, udaljen svega 5 km od Sokobanje. Nastao je na reci Gradašnici, koja se ispod Sokobanje uliva u reku Moravicu.
                </p>

                <img srcSet={`${ripaljka33} 450w, ${ripaljka3}`} alt="Vodopad Ripaljka 3" loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  Ripaljka se sastoji od <strong>11 odseka</strong> čija ukupna visina iznosi oko 40 metara. Najveći od njih, poznat kao <em>Velika Ripaljka</em>, visok je 11 metara. Ispod njega se nalazi manji vodopad visok 5 metara, dok su ostali manji slapi, čija visina varira od 0,5 do 2 metra. Okruženi su bujnom vegetacijom, zbog čega su često nevidljivi. Posetioci koji prvi put dolaze mogu ga pomešati sa manjim slapom koji se nalazi na gornjem delu jezera-pondova u krugu bolnice.
                </p>

                <img srcSet={`${ripaljka44} 450w, ${ripaljka4}`} alt="Vodopad Ripaljka 4" loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  Ripaljka je jedna od <strong>nezaobilaznih atrakcija</strong> ovog kraja i <em>omiljena destinacija</em> među posetiocima Sokobanje. Ako želite da zabeležite lepu sliku sa ovog mesta, najbolje je da ga posetite početkom proleća. Tokom otapanja snega i kišnih perioda, velika količina vode koja pada sa visine od 11 metara stvara zaista <strong>impozantan prizor</strong>.
                  <br /><br />
                  Iako je ovo zaštićeno prirodno dobro, suočava se sa pretnjama usled problema sa vodosnabdevanjem. Iako spada među najlepše vodopade Srbije, često mu se oduzima <em>biološki minimum</em> zbog potreba za vodosnabdevanjem Sokobanje i Ozrenska kraja, što može dovesti do njegovog presušivanja tokom leta. Ovo je posebno iznenađujuće kada se uzme u obzir da je Ripaljka jedno od <strong>prvih zaštićenih prirodnih dobara u Srbiji</strong>.
                </p>

                <img srcSet={`${ripaljka55} 450w, ${ripaljka5}`} alt="Vodopad Ripaljka 5" loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  Prvo područje koje je stavljeno pod zaštitu na teritoriji današnje Srbije bila je <strong>Obedska bara</strong>, koja je zaštićena još 1874. godine. Prva zaštićena prirodna dobra u Srbiji obuhvatala su šumske rezerve <em>Oštrozub, Mustafa i Feješana</em> u okolini Majdanpeka, kao i vodopad <strong>„Velika i mala Ripaljka”</strong> u okolini Sokobanje, koji je postao zaštićen 1949. godine. Prema rečima <em>Jovana Cvijića (1865—1927)</em>, ovo je bio <strong>najviši vodopad u Srbiji</strong> u to vreme.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Waterfall Ripaljka</h1>

              <section lang="en"> <p> <strong>Ripaljka</strong> is a waterfall on the <em>Gradašnica</em> River, located on the <em>Ozren</em> mountain, about 5 km from Sokobanja. It was declared the <strong>first natural monument in Yugoslavia</strong>, protected by law as early as 1948. According to the records of <em>Jovan Cvijić</em>, at that time Ripaljka was considered the <strong>highest waterfall in Serbia</strong>. </p>
                <img srcSet={`${ripaljka22} 450w, ${ripaljka2}`} alt="Ripaljka Waterfall 2" loading="lazy" />

              </section> <section lang="en"> <p> Ripaljka is an <strong>accumulative waterfall</strong> situated at an altitude of 420 meters, with the waterfall itself being <em>17.5 meters</em> high. During the summer and autumn months, the Gradašnica River dries up, causing the waterfall to occasionally disappear. The name <em>"Ripaljka"</em> comes from the word <strong>"ripnuti"</strong>, which in this part of Serbia is used as a synonym for <em>"to jump"</em>. <br /><br /> This waterfall is one of the <strong>most beautiful in Serbia</strong> and is located just a few dozen meters from the entrance to the <em>Special Hospital complex on Ozren</em>, only 5 km from Sokobanja. It formed on the Gradašnica River, which flows into the Moravica River below Sokobanja. </p>
                <img srcSet={`${ripaljka33} 450w, ${ripaljka3}`} alt="Ripaljka Waterfall 3" loading="lazy" />

              </section> <section lang="en"> <p> Ripaljka consists of <strong>11 sections</strong> with a total height of about 40 meters. The largest, known as <em>Velika Ripaljka</em> (Great Ripaljka), is 11 meters high. Below it is a smaller waterfall, 5 meters high, while the remaining smaller cascades range in height from 0.5 to 2 meters. They are surrounded by lush vegetation, often making them invisible. First-time visitors may confuse it with a smaller waterfall located on the upper part of the lake-ponds within the hospital grounds. </p>
                <img srcSet={`${ripaljka44} 450w, ${ripaljka4}`} alt="Ripaljka Waterfall 4" loading="lazy" />

              </section> <section lang="en"> <p> Ripaljka is one of the <strong>must-see attractions</strong> of this region and a <em>favorite destination</em> among visitors to Sokobanja. If you want to capture a beautiful photo from this place, the best time to visit is early spring. During snow melts and rainy periods, the large volume of water falling from the 11-meter height creates a truly <strong>impressive sight</strong>. <br /><br /> Although it is a protected natural asset, it faces threats due to water supply issues. Despite being one of the most beautiful waterfalls in Serbia, it often loses its <em>biological minimum</em> because of water supply needs for Sokobanja and the Ozren area, which can lead to it drying out during summer. This is particularly surprising given that Ripaljka was one of the <strong>first protected natural sites in Serbia</strong>. </p>
                <img srcSet={`${ripaljka55} 450w, ${ripaljka5}`} alt="Ripaljka Waterfall 5" loading="lazy" />

              </section> <section lang="en"> <p> The first area to be placed under protection in the territory of present-day Serbia was the <strong>Obedska Bara</strong> (Obed Marsh), which was protected as early as 1874. The first protected natural assets in Serbia included the forest reserves of <em>Oštrozub, Mustafa, and Feješana</em> near Majdanpek, as well as the waterfalls <strong>"Velika i Mala Ripaljka"</strong> (Great and Small Ripaljka) near Sokobanja, which became protected in 1949. According to <em>Jovan Cvijić (1865–1927)</em>, this was the <strong>highest waterfall in Serbia</strong> at the time. </p> </section>

            </>
          )}

      </div>
    </>
  );
};



export default VodopadRipaljka;