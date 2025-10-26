/* eslint-disable react/no-unknown-property */
import lazarevaPecina1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/desktop/lazarevaPecina1.jpg";
import lazarevaPecina2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/desktop/lazarevaPecina2.jpg";
import lazarevaPecina3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/desktop/lazarevaPecina3.jpg";
import lazarevaPecina4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/desktop/lazarevaPecina4.jpg";
import lazarevaPecina5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/desktop/lazarevaPecina5.jpg";
import lazarevaPecina11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/mobile/lazarevaPecinaM1.jpg";
import lazarevaPecina22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/mobile/lazarevaPecinaM2.jpg";
import lazarevaPecina33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/mobile/lazarevaPecinaM3.jpg";
import lazarevaPecina44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/mobile/lazarevaPecinaM4.jpg";
import lazarevaPecina55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/mobile/lazarevaPecinaM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const LazarevaPecina = () => {
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

        <title>{switchLanguage === 'rs' ? "Lazareva Pećina – Najduža pećina Srbije | Serbia Wonders" : "Lazareva Cave – The Longest Cave in Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Lazareva pećina (Zlotska pećina), najduža pećina u Srbiji. Istraži podzemne kanale, arheološke nalaze iz praistorije, retke vrste i speleološke dvorane u srcu istočne Srbije."
            :
            "Lazareva Cave (Zlot Cave), the longest cave in Serbia. Explore underground passages, prehistoric archaeological finds, rare species, and speleological halls in the heart of eastern Serbia."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Lazareva pećina, Zlotska pećina, najduža pećina Srbije, speleologija, Zlotske pećine, Lazarev kanjon, Kučaj, pećinski ukrasi, arheologija, prirodne retkosti, turizam u Srbiji, pećinski medved, slepi miševi, speleofauna"
            :
            "Lazareva Cave, Zlot Cave, longest cave in Serbia, speleology, Zlot Caves, Lazar's Canyon, Kučaj Mountains, cave formations, archaeology, natural rarities, tourism in Serbia, cave bear, bats, cave fauna"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazareva-pecina`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazareva-pecina"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazareva-pecina"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/lazareva-pecina"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(borskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${lazarevaPecina11} 450w, ${lazarevaPecina1} `} alt="Lazareva Pećina 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Lazareva Pećina</h1>

              <section lang="sr">
                <p>
                  <strong>Lazareva pećina</strong> (poznata i kao <em>Zlotska pećina</em>) predstavlja najdužu
                  pećinu u Srbiji. Smeštena je u istočnom podnožju <strong>Kučaja</strong>, na <strong>3 kilometra</strong>
                  od Zlota, <strong>14 kilometara</strong> od Brestovačke banje i <strong>21 kilometar</strong> od Bora.
                  Ulaz u pećinu nalazi se na nadmorskoj visini od <strong>291 metar</strong>, sa leve
                  strane <strong>Lazareve reke</strong>. Pećina je izvorna, a u neposrednoj blizini ulaza,
                  u koritu Lazareve reke, voda izbija na površinu u obliku jakog kraškog
                  vrela. U okolini se nalazi veliki broj drugih speleoloških objekata,
                  koji zajedno sa Lazarevom pećinom čine <strong>Zlotske pećine</strong>. Od svih ovih
                  pećina, Lazareva je najpoznatija i turistički najranije uređena –
                  turističko uređenje pećine započelo je <strong>1953. godine</strong>, a turistička staza
                  duga je <strong>800 metara</strong>.
                </p>
              </section>

              <img srcSet={`${lazarevaPecina22} 450w, ${lazarevaPecina2}`} alt="Lazareva Pećina 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Prvi opis <strong>Lazareve pećine</strong> dao je <em>Felix Kanic</em>, dok je prva istraživanja
                  pećine izvršio <em>Felix Hofman</em> <strong>1882. godine</strong>. Sedam godina nakon Hofmana,
                  speleološka istraživanja objavio je i <em>Jovan Cvijić</em>. Pećinu je stvorila
                  podzemna reka koja i danas prolazi kroz nju. Ukupna dužina istraženih
                  kanala Lazareve pećine iznosi <strong>16.041 metar</strong>. Speleolozi koji su vršili
                  istraživanja pretpostavljaju da je podzemni prostor mnogo veći, a
                  procenjuje se da zapremina pećinskih prostora premašuje <strong>52.000 m³</strong>.
                  Istraženi pećinski sistem sastoji se od dva horizonta pećinskih kanala:
                  stariji suvi - fosilni i mlađi rečni - aktivni.
                </p>
              </section>

              <img srcSet={`${lazarevaPecina33} 450w, ${lazarevaPecina3}`} alt="Lazareva Pećina 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Četiri najveće i najlepše dvorane u <strong>Lazarevoj pećini</strong> su: <strong>Prestižna
                    dvorana</strong>, <strong>Koncertna dvorana</strong>, <strong>Dvorana slepih miševa</strong> i <strong>Dvorana blokova</strong>.
                  <br /><br />
                  Lazareva pećina je proglašena prirodnom retkošću i zaštićena kao
                  spomenik prirode još <strong>1949. godine</strong>. Zavod za zaštitu prirode Srbije je
                  <strong>2005. godine</strong> proglasio Lazarevu pećinu objektom geonasleđa Srbije.
                  Pećina se nalazi unutar spomenika prirode <strong>Lazarev kanjon</strong>.
                </p>
              </section>

              <img srcSet={`${lazarevaPecina44} 450w, ${lazarevaPecina4}`} alt="Lazareva Pećina 4" loading="lazy" />

              <section lang="sr">
                <p>
                  U <strong>Lazarevoj pećini</strong> nalazi se i veoma značajan arheološki lokalitet, gde
                  su otkrivena tri praistorijska kulturna horizonta: iz <strong>bakarnog</strong>,
                  <strong>bronzanog</strong> i <strong>gvozdenog doba</strong>. Naselje iz početka bakarnog doba, najstarije
                  u pećini, pripada kulturama <em>Krivodol–Salkuca–Bubanj</em> i
                  <em>Koždermen–Gumelnica–Karanovo VI</em>. Iz ovog perioda pronađeni su ostaci
                  keramičkih predmeta i koštanih alatki, kao i predmeti od bakra (igle,
                  kopče, šila, dlijeta). Tokom bronzanog doba, Lazareva pećina je služila
                  kao lovačka stanica, pre oko <strong>4.500 godina</strong>, a u gvozdenom dobu postaje
                  centar metalurgije u periodu od 4. do 5. veka p.n.e. Predmeti pronađeni
                  u pećini smatraju se zvanično najstarijim bakarnim nalazima u Srbiji.
                </p>
              </section>

              <img srcSet={`${lazarevaPecina55} 450w, ${lazarevaPecina5}`} alt="Lazareva Pećina 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Fosilna i danas izumrla fauna <strong>Lazareve pećine</strong> predstavljena je ostacima
                  pećinskog medveda, pećinskog lava i pećinske hijene. Savremena fauna
                  obuhvata troglobiontske i trogofilne organizme. Među troglobiontima,
                  značajne i karakteristične su endemske vrste zglavkara: <em>Speleocyclops
                    plutonis</em>, <em>Serbosoma lazarevensis</em>, <em>Pseudosinella problematica</em>, <em>Onychiurus
                      trojan</em>, <em>Arrhopalites zloti</em>. Ovu pećinu naseljava i podvrsta trefina,
                  <em>Duvalius stankovitchi georgievitchi</em>. Trogofilska fauna pretežno je
                  zastupljena slepim miševima, kojih je zabeleženo preko 20 vrsta, kao i
                  psefalinom <em>Bryaxis sculptifrons</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Lazareva Cave</h1>

              <section lang="en">
                <p>
                  <strong>Lazareva Cave</strong> (also known as <em>Zlot Cave</em>) is the longest
                  cave in Serbia. It is located in the eastern foothills of <strong>Kučaj</strong>, about <strong>3 kilometers</strong>
                  from Zlot, <strong>14 kilometers</strong> from Brestovačka Spa, and <strong>21 kilometers</strong> from Bor.
                  The cave entrance is at an altitude of <strong>291 meters</strong>, on the left
                  side of the <strong>Lazareva River</strong>. The cave is natural, and near the entrance,
                  in the riverbed of the Lazareva River, water emerges on the surface in the form of a strong karst spring.
                  In the surrounding area, there are many other speleological objects,
                  which together with Lazareva Cave form the <strong>Zlot Caves</strong>. Among all these
                  caves, Lazareva is the most famous and the first to be developed for tourism –
                  tourist development of the cave began in <strong>1953</strong>, and the tourist trail
                  is <strong>800 meters</strong> long.
                </p>
              </section>

              <img srcSet={`${lazarevaPecina22} 450w, ${lazarevaPecina2}`} alt="Lazareva Cave 2" loading="lazy" />

              <section lang="en">
                <p>
                  The first description of <strong>Lazareva Cave</strong> was given by <em>Felix Kanic</em>, while the first explorations
                  were carried out by <em>Felix Hofman</em> in <strong>1882</strong>. Seven years after Hofman,
                  speleological research was published by <em>Jovan Cvijić</em>. The cave was formed
                  by an underground river which still flows through it today. The total length of explored
                  passages in Lazareva Cave is <strong>16,041 meters</strong>. Speleologists who conducted
                  the research assume the underground space is much larger,
                  estimating that the volume of cave spaces exceeds <strong>52,000 m³</strong>.
                  The explored cave system consists of two levels of cave passages:
                  the older dry - fossil, and the younger river - active.
                </p>
              </section>

              <img srcSet={`${lazarevaPecina33} 450w, ${lazarevaPecina3}`} alt="Lazareva Cave 3" loading="lazy" />

              <section lang="en">
                <p>
                  The four largest and most beautiful halls in <strong>Lazareva Cave</strong> are: the <strong>Prestigious Hall</strong>,
                  <strong>Concert Hall</strong>, <strong>Bat Hall</strong>, and <strong>Block Hall</strong>.
                  <br /><br />
                  Lazareva Cave was declared a natural rarity and protected as
                  a natural monument back in <strong>1949</strong>. The Institute for Nature Protection of Serbia
                  declared Lazareva Cave a geological heritage site of Serbia in <strong>2005</strong>.
                  The cave is located within the natural monument <strong>Lazarev Canyon</strong>.
                </p>
              </section>

              <img srcSet={`${lazarevaPecina44} 450w, ${lazarevaPecina4}`} alt="Lazareva Cave 4" loading="lazy" />

              <section lang="en">
                <p>
                  In <strong>Lazareva Cave</strong>, there is also a very important archaeological site where
                  three prehistoric cultural horizons were discovered: from the <strong>Copper Age</strong>,
                  <strong>Bronze Age</strong>, and <strong>Iron Age</strong>. The settlement from the beginning of the Copper Age, the oldest
                  in the cave, belongs to the cultures of <em>Krivodol–Salkuca–Bubanj</em> and
                  <em>Koždermen–Gumelnica–Karanovo VI</em>. From this period, remains of
                  ceramic items and bone tools, as well as copper objects (needles,
                  clasps, awls, chisels) were found. During the Bronze Age, Lazareva Cave served
                  as a hunting station about <strong>4,500 years ago</strong>, and in the Iron Age it became
                  a center of metallurgy in the period from the 4th to 5th century BC. Items found
                  in the cave are officially considered the oldest copper finds in Serbia.
                </p>
              </section>

              <img srcSet={`${lazarevaPecina55} 450w, ${lazarevaPecina5}`} alt="Lazareva Cave 5" loading="lazy" />

              <section lang="en">
                <p>
                  The fossil and now extinct fauna of <strong>Lazareva Cave</strong> is represented by remains
                  of cave bears, cave lions, and cave hyenas. The modern fauna
                  includes troglobiontic and trogophilic organisms. Among the troglobionts,
                  significant and characteristic are endemic species of arthropods: <em>Speleocyclops
                    plutonis</em>, <em>Serbosoma lazarevensis</em>, <em>Pseudosinella problematica</em>, <em>Onychiurus
                      trojan</em>, <em>Arrhopalites zloti</em>. This cave is also inhabited by a subspecies of beetles,
                  <em>Duvalius stankovitchi georgievitchi</em>. The trogophilic fauna is mainly
                  represented by bats, with over 20 species recorded, as well as by the psephalin <em>Bryaxis sculptifrons</em>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default LazarevaPecina;