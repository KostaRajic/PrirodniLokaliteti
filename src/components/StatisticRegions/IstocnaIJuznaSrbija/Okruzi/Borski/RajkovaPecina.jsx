/* eslint-disable react/no-unknown-property */
import rajkovaPecina1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina1.jpg";
import rajkovaPecina2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina2.jpg";
import rajkovaPecina3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina3.jpg";
import rajkovaPecina4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina4.jpg";
import rajkovaPecina5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina5.jpg";
import rajkovaPecina6 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina6.jpg";
import rajkovaPecina7 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina7.jpg";
import rajkovaPecina11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM1.jpg";
import rajkovaPecina22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM2.jpg";
import rajkovaPecina33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM3.jpg";
import rajkovaPecina44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM4.jpg";
import rajkovaPecina55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM5.jpg";
import rajkovaPecina66 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM6.jpg";
import rajkovaPecina77 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const RajkovaPecina = () => {
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

        <title>{switchLanguage === 'rs' ? "Rajkova Pećina – Prirodni Spomenik i Turistička Atrakcija u Srbiji | Serbia Wonders" : "Rajkova Cave – A Natural Monument and Tourist Attraction in Serbia | Serbia Wonders"} </title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Rajkova pećina, smeštena kod Majdanpeka, jedna je od najznačajnijih pećina u Srbiji poznata po belim pećinskim ukrasima, bogatoj istoriji i speleološkim istraživanjima. Deo je Đerdap UNESCO geoparka."
            :
            "Rajkova Cave, located near Majdanpek, is one of the most significant caves in Serbia, known for its white cave formations, rich history, and speleological research. It is part of the Đerdap UNESCO Geopark."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Rajkova pećina, Majdanpek, speleologija, pećinski ukrasi, Jovan Cvijić, Đerdap UNESCO geopark, spomenik prirode, turistička pećina, Srbija priroda, speleoronilaštvo"
            :
            "Rajkova Cave, Majdanpek, speleology, cave formations, Jovan Cvijić, Đerdap UNESCO Geopark, natural monument, tourist cave, nature of Serbia, cave diving"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/rajkova-pecina`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/rajkova-pecina"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/rajkova-pecina"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/rajkova-pecina"
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
        <img srcSet={`${rajkovaPecina44} 450w, ${rajkovaPecina4} `} alt="Rajkova Pećina 1" />


        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Rajkova Pećina</h2>

              <section lang="sr">
                <p>
                  <strong>Rajkova pećina</strong> spada među najznačajnije turističke pećine u Srbiji.
                  Smeštena je na udaljenosti od 2,5 km od <strong>Majdanpeka</strong> i prepoznatljiva je
                  po izuzetno belim pećinskim ukrasima.
                </p>
              </section>

              <img srcSet={`${rajkovaPecina22} 450w, ${rajkovaPecina2} `} alt="Rajkova Pećina 2" />


              <section lang="sr">
                <p>
                  Rajkova pećina je dobila ime po <strong>Rajku Vojvodi</strong>, za koga se pretpostavlja
                  da je živeo u 19. veku. Prema predanju, danju je bio <em>mehandžija</em>, dok je
                  noću pljačkao turske karavane i skrivao blago u ovoj pećini.
                  <br />
                  <br />
                  Prvi ju je istražio geograf <strong>Jovan Cvijić</strong> 1894. godine, ali su dalja
                  istraživanja nastavljena tek tokom sedamdesetih godina 20. veka, pod
                  vođstvom dr <strong>Radenka Lazarevića</strong>. Za turiste je zvanično otvorena 1975.
                  godine.
                </p>
              </section>

              <img srcSet={`${rajkovaPecina33} 450w, ${rajkovaPecina3} `} alt="Rajkova Pećina 3" />

              <section lang="sr">
                <p>
                  <strong>Rajkova pećina</strong> je jedna od najvažnijih turističkih pećina u Srbiji.
                  Smeštena je u istočnom delu zemlje, u blizini <strong>Majdanpeka</strong>. Proglašena je
                  <strong>Spomenikom prirode</strong> od strane Skupštine opštine <strong>Majdanpek</strong>. Cela okolina
                  izvorišta <em>Malog Peka</em> bogata je raznovrsnom florom i faunom, te
                  predstavlja jedinstveno prirodno i speleološko bogatstvo. Zbog toga je
                  postala deo prvog geoparka u Srbiji — <strong>Đerdap UNESCO geopark</strong>.
                </p>
              </section>

              <img srcSet={`${rajkovaPecina11} 450w, ${rajkovaPecina1} `} alt="Rajkova Pećina 4" />

              <section lang="sr">
                <p>
                  <strong>Rajkova pećina</strong> je nastala radom ponornice <em>Rajkove reke</em>. Proces njenog
                  stvaranja bio je višefazan, što se vidi na terasama koje su očuvane na
                  zidovima kanala. Klimatske oscilacije su izazvale zasipanje pećine
                  rečnim nanosima debljine 1,5 metara. U narednoj fazi počelo je
                  usađivanje korita, podsecanje i rušenje bigrene kore i nakita na njoj.
                  Mlađi procesi uključuju depoziciju crvenice i travertina.
                  <br />
                  <br />
                  <strong>Rajkova pećina</strong> je rečna, protokna pećina; kroz nju protiče istoimena
                  reka, koja izvire sa <em>Kaptanskih livada</em> i nakon površinskog toka dugog
                  3.625 metara ponire ispod vertikalnog krečnjačkog odseka visine 50-100
                  metara, na kontaktu kremenih škriljaca i gornjajurskih krečnjaka.
                  Pojavljuje se na visini od 427,58 metara. Površinski teče 22,5 metara i
                  spaja se sa <em>Paskovom rekom</em>. Od ta dva potoka nastaje <em>Mali Pek</em>.
                  <br />
                  <br />
                  <strong>Rajkova pećina</strong> se sastojala od dve odvojene celina: <em>Ponorske</em> i <em>Izvorski</em>
                  pećine, a svaka celina ima po dva horizonta: rečni i suvi.
                </p>
              </section>

              <img srcSet={`${rajkovaPecina55} 450w, ${rajkovaPecina5} `} alt="Rajkova Pećina 5" />

              <section lang="sr">
                <p>
                  Rečni horizont je jednostavan pećinski kanal sa niskim kaskadama i
                  džinovskim loncima. Dno aktivnog kanala prekriveno je peskom i šljunkom,
                  a kanal se završava sifonom. U izvorskom delu takođe se izdvajaju suvi i
                  rečni horizont. U rečnom delu postoji uski rečni kanal sa stenovitom,
                  isprekidanom terasom višeg nivoa, na 6 m nadmorske visine. Uzvodno se
                  kanal završava sifonom.
                  <br />
                  <br />U suvom horizontu nalazi se nekoliko dvorana koje su ukrašene
                  izuzetno lepim nakitom, dok su na dnu formirane travertinske kade.
                  Pećina sadrži čitav sistem dvorana, kanala i hodnika, a odlikuje se i
                  pećinskim nakitom u obliku stalaktita, stalagmita i stubova od snežno
                  belog kristalnog kalcita.
                  <br />
                  <br />
                  Temperatura pećine je stalnih 8 stepeni Celzijusa, a vlažnost vazduha
                  100%, zbog čega se za posetu pećini preporučuje toplija garderoba, čak i
                  tokom letnjeg perioda.
                  <br />
                  <br />
                  Fosilna fauna pećine obuhvata: <em>Ursus spelaeus</em> (pećinski medved), <em>Sus scrofa</em> (divlja svinja), <em>Cervus elaphus</em> (jelen).
                </p>
              </section>

              <img srcSet={`${rajkovaPecina66} 450w, ${rajkovaPecina6} `} alt="Rajkova Pećina 5" />

              <section lang="sr">
                <p>
                  Rečni horizont pećine prvi je istraživao <strong>Jovan Cvijić</strong>, a njegov rad
                  nastaviće sedamdesetih godina 20. veka dr <strong>Radenko Lazarević</strong> u saradnji
                  sa grupom speleologa iz Valjeva. R. Lazarević, zajedno sa članovima
                  Speleološke grupe iz Valjeva i S. Dožića iz Instituta za šumarstvo,
                  istraživao je, u dva navrata, čitavu Rajkovu pećinu. U prvoj fazi
                  istražen je ponorski, a u drugoj fazi izvorski deo pećine.
                  <br />
                  <br />
                  Otkrićem tzv. <em>Suvi horizont</em> 1974. godine počelo je sprovođenje ideje o
                  uređivanju pećine za turističke posete, što je realizovano 12. 09. 1975.
                  godine. Tokom 2014. godine formirana je kružna staza koja povezuje oba
                  horizonta pećine, u ukupnoj dužini od 1.400 metara.
                </p>
              </section>

              <img srcSet={`${rajkovaPecina77} 450w, ${rajkovaPecina7} `} alt="Rajkova Pećina 5" />

              <section lang="sr">
                <p>
                  <strong>Rajkova pećina</strong> je bogata pećinskim nakitom različitih oblika, od snežno
                  belog kristalnog kalcita, koji je najkvalitetniji u Srbiji. Hodnici
                  Rajkove pećine dugi su preko dva kilometra i podeljeni su u rečni i suvi
                  horizont. Betonirana staza vodi kroz prostranu <em>Koncertnu</em> i <em>Ježevu dvoranu</em>, pored <em>Malih</em> i <em>Velikih orgulja</em>, <em>Obesenog hajduka Rajka</em> do
                  <em>Dvorane kada</em>. Tu su i <em>Žrtvenik</em>, <em>Duhovi</em>, <em>Dvorana vodopada</em>, <em>Sala stećaka</em>,
                  <em>Zimska bajka</em> i <em>Kristalna dvorana</em>.
                  <br />
                  <br />
                  Hodajući pećinskom stazom, posetilac doživljava jedinstven zvuk
                  žuborenja bistre <strong>Rajkove reke</strong> koja odjekuje pećinskim prostorima "<em>Ježeve dvorane</em>",
                  sa hiljadama kalcitnih cevčica na tavanici. Zatim sledi
                  prelazak preko rumenih bigrenih kada, pored "<em>Zimske bajke</em>" sa "<em>Belim medvedom</em>" i ulazak u "<em>Kristalnu šumu</em>" u kojoj se nalazi "<em>Trepereće jezerce</em>".
                  Neke od najpoznatijih figura su "<em>Egipatska boginja</em>", "<em>Puž</em>",
                  kao i "<em>Panj sa gljivama</em>". Spajanjem suvog i rečnog horizonta 2014.
                  godine, formirana je kružna turistička staza u dužini od čak 1410
                  metara.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>Rajkova Cave</h2>

              <section lang="en">
                <p>
                  <strong>Rajkova Cave</strong> is one of the most significant tourist caves in Serbia.
                  It is located 2.5 km from <strong>Majdanpek</strong> and is recognizable
                  for its exceptionally white cave decorations.
                </p>
              </section>

              <img srcSet={`${rajkovaPecina22} 450w, ${rajkovaPecina2} `} alt="Rajkova Cave 2" />

              <section lang="en">
                <p>
                  Rajkova Cave was named after <strong>Rajko Vojvoda</strong>, who is believed
                  to have lived in the 19th century. According to legend, by day he was a
                  <em>tinker</em>, while at night he robbed Turkish caravans and hid the loot in this cave.
                  <br />
                  <br />
                  It was first explored by the geographer <strong>Jovan Cvijić</strong> in 1894,
                  but further research continued only during the 1970s, led by Dr.
                  <strong>Radenko Lazarević</strong>. It was officially opened to tourists in 1975.
                </p>
              </section>

              <img srcSet={`${rajkovaPecina33} 450w, ${rajkovaPecina3} `} alt="Rajkova Cave 3" />

              <section lang="en">
                <p>
                  <strong>Rajkova Cave</strong> is one of the most important tourist caves in Serbia.
                  It is located in the eastern part of the country, near <strong>Majdanpek</strong>.
                  It has been declared a <strong>Natural Monument</strong> by the Municipality
                  Assembly of <strong>Majdanpek</strong>. The entire area around the spring of the
                  <em>Little Pek</em> river is rich in diverse flora and fauna, making it a unique
                  natural and speleological treasure. For this reason, it became part of Serbia's
                  first geopark — the <strong>Đerdap UNESCO Geopark</strong>.
                </p>
              </section>

              <img srcSet={`${rajkovaPecina11} 450w, ${rajkovaPecina1} `} alt="Rajkova Cave 4" />

              <section lang="en">
                <p>
                  <strong>Rajkova Cave</strong> was formed by the activity of the sinking
                  <em>Rajkova River</em>. Its formation process was multi-phased, visible on
                  terraces preserved on the canal walls. Climatic oscillations caused the cave
                  to be filled with river sediments up to 1.5 meters thick. In the next phase,
                  the riverbed began to embed itself, cutting and breaking the flowstone crust
                  and the formations on it. Later processes included deposition of red earth and travertine.
                  <br />
                  <br />
                  <strong>Rajkova Cave</strong> is a river-flow cave; through it flows the
                  river of the same name, which springs from the <em>Kaptanske Meadows</em> and,
                  after a surface flow of 3,625 meters, sinks beneath a vertical limestone
                  cliff 50-100 meters high, at the contact between quartz schists and
                  Upper Jurassic limestones. It appears at an altitude of 427.58 meters.
                  On the surface, it flows 22.5 meters and joins the <em>Paskova River</em>.
                  From these two streams, the <em>Little Pek</em> river is formed.
                  <br />
                  <br />
                  <strong>Rajkova Cave</strong> consisted of two separate parts: the
                  <em>Sinking</em> and <em>Spring</em> caves, each having two levels: the
                  river and the dry horizon.
                </p>
              </section>

              <img srcSet={`${rajkovaPecina55} 450w, ${rajkovaPecina5} `} alt="Rajkova Cave 5" />

              <section lang="en">
                <p>
                  The river horizon is a simple cave canal with low cascades and giant
                  potholes. The floor of the active canal is covered with sand and gravel,
                  ending in a siphon. In the spring part, both dry and river horizons are
                  also distinguished. In the river part, there is a narrow river channel
                  with a rocky, broken terrace at a higher level, 6 meters above sea level.
                  Upstream, the canal ends in a siphon.
                  <br />
                  <br />
                  In the dry horizon, there are several halls decorated with exceptionally
                  beautiful formations, while travertine pools are formed at the bottom.
                  The cave contains a whole system of halls, canals, and corridors,
                  distinguished by formations such as stalactites, stalagmites, and columns
                  made of snow-white crystalline calcite.
                  <br />
                  <br />
                  The cave temperature is constantly 8 degrees Celsius, and air humidity
                  is 100%, which is why warmer clothing is recommended when visiting the cave,
                  even during the summer.
                  <br />
                  <br />
                  The fossil fauna of the cave includes: <em>Ursus spelaeus</em> (cave bear),
                  <em>Sus scrofa</em> (wild boar), <em>Cervus elaphus</em> (red deer).
                </p>
              </section>

              <img srcSet={`${rajkovaPecina66} 450w, ${rajkovaPecina6} `} alt="Rajkova Cave 6" />

              <section lang="en">
                <p>
                  The river horizon of the cave was first explored by <strong>Jovan Cvijić</strong>,
                  and his work was continued in the 1970s by Dr. <strong>Radenko Lazarević</strong>
                  in cooperation with a group of speleologists from Valjevo. Lazarević, together
                  with members of the Speleological Group from Valjevo and S. Dožić from the
                  Forestry Institute, explored the entire Rajkova Cave on two occasions.
                  In the first phase, the sinking part was explored, and in the second phase,
                  the spring part.
                  <br />
                  <br />
                  The discovery of the so-called <em>Dry horizon</em> in 1974 started the idea
                  of preparing the cave for tourist visits, which was realized on September 12, 1975.
                  In 2014, a circular path connecting both horizons of the cave was created,
                  with a total length of 1,400 meters.
                </p>
              </section>

              <img srcSet={`${rajkovaPecina77} 450w, ${rajkovaPecina7} `} alt="Rajkova Cave 7" />

              <section lang="en">
                <p>
                  <strong>Rajkova Cave</strong> is rich in cave formations of various shapes,
                  made of snow-white crystalline calcite, which is the highest quality in Serbia.
                  The corridors of Rajkova Cave are over two kilometers long and divided
                  into river and dry horizons. A paved path leads through the spacious
                  <em>Concert</em> and <em>Hedgehog Halls</em>, past the <em>Small</em> and
                  <em>Large Organs</em>, <em>Hanged Hajduk Rajko</em> to the <em>Pool Hall</em>.
                  There are also the <em>Altar</em>, <em>Ghosts</em>, <em>Waterfall Hall</em>,
                  <em>Tombstone Hall</em>, <em>Winter Tale</em>, and <em>Crystal Hall</em>.
                  <br />
                  <br />
                  Walking along the cave path, visitors experience the unique sound of the
                  clear <strong>Rajkova River</strong> flowing and echoing in the cave spaces of
                  the "<em>Hedgehog Hall</em>", with thousands of calcite tubes on the ceiling.
                  Then follows crossing red flowstone pools, past the "<em>Winter Tale</em>" with
                  the "<em>White Bear</em>" and entering the "<em>Crystal Forest</em>" which
                  contains the "<em>Trembling Pond</em>".
                  Some of the best-known formations are the "<em>Egyptian Goddess</em>", "<em>Snail</em>",
                  and "<em>Beehive with Mushrooms</em>". The joining of the dry and river horizons
                  in 2014 created a circular tourist trail with a length of 1,410 meters.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default RajkovaPecina;