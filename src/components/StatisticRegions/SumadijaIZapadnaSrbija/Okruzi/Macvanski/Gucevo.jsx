/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import gucevo1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/desktop/gucevo1.jpg";
import gucevo2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/desktop/gucevo2.jpg";
import gucevo3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/desktop/gucevo3.jpg";
import gucevo4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/desktop/gucevo4.jpg";
import gucevo5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/desktop/gucevo5.jpg";
import gucevo6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/desktop/gucevo6.jpg";
import gucevo11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/mobile/Mgucevo1.jpg";
import gucevo22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/mobile/Mgucevo2.jpg";
import gucevo33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/mobile/Mgucevo3.jpg";
import gucevo44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/mobile/Mgucevo4.jpg";
import gucevo55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/mobile/Mgucevo5.jpg";
import gucevo66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/mobile/Mgucevo6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { macvanskiOkrugPathRoutes } from "./MacvanskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Gucevo = () => {
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
            ? "Planina Gučevo – Istorija, Priroda i Banja Koviljača | Serbia Wonders"
            : "Mount Gučevo – History, Nature, and Banja Koviljača | Serbia Wonders"}
        </title>
        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Planina Gučevo iznad Banje Koviljače poznata je po šumama, istorijskim spomenicima i lečilištu. Istražite prirodne lepote, bitke iz Prvog svetskog rata i kulturno nasleđe ovog kraja."
              : "Mount Gučevo above Banja Koviljača is known for its forests, historical monuments, and spa center. Discover natural beauty, WWI battle sites, and the rich cultural heritage of the region."
          }
        />
        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Planina Gučevo, Banja Koviljača, Crni vrh, Spomen-kosturnica, Darja Korobkina, Bitka na Drini, šume, priroda, Prvi svetski rat, lečilište, istorija, turizam"
              : "Mount Gučevo, Banja Koviljača, Crni Vrh, Memorial Ossuary, Darja Korobkina, Battle of Drina, forests, nature, WWI, spa, history, tourism"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/gucevo`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/gucevo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/gucevo"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/gucevo"
        />

      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(macvanskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${gucevo11} 450w, ${gucevo1} `} alt="Gučevo 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Planina Gučevo</h2>

              <section lang="sr">
                <p>
                  <strong>Planina Gučevo</strong> se nalazi u blizini <strong>Loznice</strong>, iznad <strong>Banje Koviljače</strong>. Deo je
                  <strong>zapadnog dela podrinjsko-valjevskih planina</strong> i uzdiže se iz doline reke <strong>Drine</strong>, prostirući se ka jugoistoku
                  u pravcu <em>Dinarskog sistema</em>. Od <strong>Beograda</strong> i <strong>Novog Sada</strong> udaljena je <strong>142 km</strong>, dok je od <strong>Valjeva</strong>
                  i <strong>Užica</strong> na razdaljini od <strong>70 km</strong>. Na severnoj strani prostire se <strong>15 km</strong>, a Drina je sa zapadne i
                  severozapadne strane <em>polukružno okružuje</em>. Najviši vrh Gučeva je <strong>Crni vrh</strong> (779 m n.v.). Planina je formirana
                  kroz <em>rasedanje terena</em>, <em>prodor magmatskih stena</em>, kao i prisustvo <strong>termomineralnih voda</strong> koje koristi
                  <strong>Banja Koviljača</strong>.
                </p>
              </section>


              <img srcSet={`${gucevo22} 450w, ${gucevo2}`} alt="Gučevo 2" />

              <section lang="sr">
                <p>
                  Gučevo je <strong>šumovita planina</strong> prekrivena gustim šumama <em>graba, hrasta, bukve, javora i crnog bora</em>. Na ovom području
                  žive različite vrste <em>divljači</em> poput <strong>zeca, lisice, vuka i srne</strong>, kao i veliki broj <em>ptica</em>. Obronci planine
                  su ponekad prekinuti livadama. Jugoistočni deo planine, poznat kao <strong>Kulište</strong>, sastoji se od <em>palezojskih škriljaca</em>,
                  na kojima su nastali <strong>krečnjaci sa slojevima antimona</strong>. Severozapadni deo čine <strong>peščari i konglomerati</strong>, a
                  na njima leže <em>krečnjaci</em>, sve do vrha planine. Mnogi <strong>potoci</strong> sa Gučeva slivaju se ka <strong>Jadru</strong> i <strong>Drini</strong>.
                  Gučevo je postalo poznato u <strong>istoriji</strong> nakon <em>Prvog svetskog rata</em>, kada su se ovde odigrali <strong>prvi rovovski okršaji u svetu</strong>.
                </p>
              </section>


              <img srcSet={`${gucevo33} 450w, ${gucevo3}`} alt="Spomen-kosturnica na Gučevu" />

              <section lang="sr">

                <p>
                  Jedno od značajnih mesta na Gučevu je <strong>Spomen-kosturnica</strong>, u kojoj su sahranjeni posmrtni ostaci <strong>srpskih i austrougarskih vojnika</strong>,
                  poginulih <strong>8. septembra 1914. godine</strong>, tokom <em>Bitke na Drini</em> koja je trajala <strong>55 dana</strong>. Tokom rata,
                  <strong>austrougarska vojska</strong> započela je izgradnju <em>Spomen piramide sa kosturnicom</em>, ali je nije dovršila. Godine
                  <strong>1929</strong>, <em>Udruženje rezervnih oficira i ratnika</em> prikupilo je <strong>3200 posmrtnih ostataka</strong> i smestilo ih u
                  zajedničku kosturnicu. Spomenik je <strong>piramidalnog oblika</strong>, visok <strong>16,85 metara</strong>, sa osnovom u obliku
                  <em>krsta</em>. Na zapadu je <strong>lovorov venac od belog mermera</strong> sa <em>krstom</em> u sredini, dok na vrhu stoji <strong>dvoglavi orao</strong>
                  od <em>belog mermera</em>.
                </p>
              </section>


              <img srcSet={`${gucevo44} 450w, ${gucevo4}`} alt="spomenik ruskoj bolničarki Darji Aleksandrovnoj Korobkinoj" />

              <section lang="sr">
                <p>
                  Na Gučevu se nalazi <strong>spomenik ruskoj bolničarki Darji Aleksandrovnoj Korobkinoj</strong>, koja je poginula pomažući
                  <strong>srpskim vojnicima</strong> tokom <em>Prvog svetskog rata</em>. Gradonačelnik Loznice izjavio je: „<em>Ono što danas činimo
                    na stotu godišnjicu završetka rata predstavlja spomenik časti i zahvalnosti Darji Aleksandrovnoj. Na Gučevu svako drvo
                    simbolizuje slobodu, svaka bukva izrasla je iz krvi i patnji mnogih duša koje je ona svakodnevno lečila</em>“.
                </p>

              </section>


              <img srcSet={`${gucevo66} 450w, ${gucevo6}`} alt="Banja Koviljača 2" />

              <section lang="sr">
                <p>
                  <strong>Banja Koviljača</strong> se nalazi u <em>jednom od najvećih i najlepših parkova Srbije</em>, na desnoj obali <strong>Drine</strong>,
                  u podnožju <strong>planine Gučevo (779 m)</strong>. Udaljena je <strong>6 km od Loznice</strong>, <strong>80 km od Valjeva</strong> i <strong>144 km od Beograda</strong>.
                  O poreklu Banje postoji više <em>legendi</em>, ali su <strong>mineralne vode</strong> bile poznate još u <em>rimskom periodu</em>. Naselje <strong>Genesis</strong>
                  i ostaci srednjovekovnih utvrđenja potvrđuju njenu dugovečnost. Godine <strong>1898</strong>, kralj <strong>Aleksandar I Obrenović</strong>
                  izdao je ukaz kojim se banja stavlja na raspolaganje narodu. Kasnije, kralj <strong>Petar I Karađorđević</strong> podstakao je
                  njen razvoj u savremeno <em>lečilište evropskog tipa</em>.
                </p>
              </section>


              <img srcSet={`${gucevo55} 450w, ${gucevo5}`} alt="Banja Koviljača 2" />

              <section lang="sr">
                <p>
                  Danas, nakon skoro <strong>150 godina</strong> postojanja, <strong>Banja Koviljača</strong> je jedan od <em>najznačajnijih balneoloških centara Srbije</em>.
                  Park površine <strong>40 hektara</strong> okružuju <em>šume graba, cera i bukve</em>, a vazduh je izuzetno <strong>čist i osvežavajući</strong>.
                  Centralni deo parka krasi <strong>rondo sa fontanom</strong>, od kojeg se staze šire u osam pravaca. Brojne <em>vile, hoteli i Kursalon</em>
                  odišu <strong>otmenošću i istorijom</strong>. Park sadrži preko <strong>80 vrsta drveća i žbunja</strong>, kao i <strong>51 vrstu cveća</strong>.
                  Banja Koviljača je postala i <em>mondensko odredište</em> u 20-im i 30-im godinama prošlog veka. <strong>Staze za šetanje</strong>,
                  kao i <em>trim staze na Gučevu</em>, pružaju poseban ugođaj za rekreativce. Poseta ovoj banji ostavlja <strong>dubok utisak</strong>
                  i širi <em>horizonte misli</em>.
                </p>

              </section>

            </>
          )
          :
          (
            <>

              <h2>Mount Gučevo</h2>

              <section lang="en">
                <p>
                  <strong>Mount Gučevo</strong> is located near <strong>Loznica</strong>, above <strong>Banja Koviljača</strong>. It is part of the
                  <strong>western section of the Podrinje-Valjevo mountains</strong> and rises from the valley of the <strong>Drina River</strong>,
                  stretching southeast toward the <em>Dinaric system</em>. It is <strong>142 km</strong> from <strong>Belgrade</strong> and <strong>Novi Sad</strong>, and
                  <strong>70 km</strong> from <strong>Valjevo</strong> and <strong>Užice</strong>. On the northern side, it stretches for <strong>15 km</strong>, and the Drina River
                  <em>surrounds it in a semicircle</em> from the west and northwest. The highest peak of Gučevo is <strong>Crni vrh</strong>
                  (Black Peak), which rises to an altitude of 779 meters. The mountain was formed through <em>faulting</em>,
                  <em>intrusion of magmatic rocks</em>, and the presence of <strong>thermal-mineral waters</strong> used by <strong>Banja Koviljača</strong>.
                </p>

              </section>


              <img srcSet={`${gucevo22} 450w, ${gucevo2}`} alt="Gučevo 2" />

              <section lang="en">

                <p>
                  Gučevo is a <strong>forested mountain</strong> covered with dense woods of <em>hornbeam, oak, beech, maple, and black pine</em>.
                  Various types of <em>wildlife</em> such as <strong>hares, foxes, wolves, and deer</strong> inhabit the area, as well as a wide variety
                  of <em>birds</em>. The slopes of the mountain are occasionally interrupted by meadows. The southeastern part, known as <strong>Kulište</strong>,
                  consists of <em>Paleozoic schists</em>, on which <strong>limestone with antimony layers</strong> was formed. The northwestern part
                  is made of <strong>sandstone and conglomerates</strong>, with <em>limestone</em> layers reaching the summit. Many <strong>streams</strong> from Gučevo
                  flow toward the <strong>Jadar</strong> and <strong>Drina</strong> Rivers. Gučevo gained <strong>historical significance</strong> after the
                  <em>First World War</em>, when it became the site of the <strong>first trench battles in the world</strong>.
                </p>
              </section>


              <img srcSet={`${gucevo33} 450w, ${gucevo3}`} alt="Memorial Ossuary on Gučevo" />

              <section lang="en">
                <p>
                  One of the most notable places on Gučevo is the <strong>Memorial Ossuary</strong>, which contains the remains of
                  <strong>Serbian and Austro-Hungarian soldiers</strong> who died on <strong>September 8, 1914</strong>, during the
                  <em>Battle of the Drina</em> that lasted <strong>55 days</strong>. During the war, the <strong>Austro-Hungarian army</strong>
                  began construction of a <em>pyramid-shaped memorial ossuary</em>, but it was never completed. In <strong>1929</strong>,
                  the <em>Association of Reserve Officers and Veterans</em> collected <strong>3,200 sets of remains</strong> and placed them
                  in a communal ossuary. The monument is <strong>pyramidal in shape</strong>, <strong>16.85 meters high</strong>, with a base shaped
                  like a <em>cross</em>. On its western side is a <strong>laurel wreath made of white marble</strong> with a <em>cross</em> in the center,
                  and atop the pyramid stands a <strong>double-headed eagle</strong> carved from <em>white marble</em>.
                </p>


              </section>

              <img srcSet={`${gucevo44} 450w, ${gucevo4}`} alt="Monument to Russian nurse Darya Aleksandrovna Korobkina" />

              <section lang="en">
                <p>
                  On Gučevo, there is a <strong>monument to Russian nurse Darya Aleksandrovna Korobkina</strong>, who died while helping
                  <strong>Serbian soldiers</strong> during the <em>First World War</em>. The mayor of Loznica stated: "<em>What we are doing today
                    on the 100th anniversary of the end of the war is a monument to the honor and gratitude owed to Darya Aleksandrovna.
                    On Gučevo, every tree symbolizes freedom; every beech grew from the blood and suffering of many souls she treated,
                    bandaged, and helped—up to 150 times a day</em>."
                </p>
              </section>


              <img srcSet={`${gucevo66} 450w, ${gucevo6}`} alt="Banja Koviljača 2" />

              <section lang="en">

                <p>
                  <strong>Banja Koviljača</strong> is located in <em>one of the largest and most beautiful parks in Serbia</em>, on the right bank
                  of the <strong>lower Drina River</strong>, at the foot of <strong>Mount Gučevo (779 m)</strong>. It is <strong>6 km from Loznica</strong>,
                  <strong>80 km from Valjevo</strong>, and <strong>144 km from Belgrade</strong>. Several <em>legends</em> exist about the spa's origins, but
                  its <strong>mineral waters</strong> were known even in <em>ancient Roman times</em>. Archaeological evidence points to the presence
                  of Romans in the settlement of <strong>Genesis</strong>, and remnants of medieval fortifications confirm the use of
                  sulfur-rich waters between Gučevo and the Drina. The spa's organized development began on <strong>August 1, 1898</strong>,
                  when <strong>King Alexander I Obrenović</strong> issued a decree putting the spa at the disposal of the people of the Podrinje District.
                  Its further development as a <em>natural healing center</em> is associated with <strong>King Peter I Karađorđević</strong>, who also
                  personally used its services.
                </p>
              </section>


              <img srcSet={`${gucevo55} 450w, ${gucevo5}`} alt="Banja Koviljača 2" />

              <section lang="en">
                <p>
                  Today, after nearly <strong>150 years</strong> of existence, <strong>Banja Koviljača</strong> is one of the <em>most important and most visited
                    balneological centers in Serbia</em>. Its vast <strong>40-hectare</strong> green area is surrounded by <em>hornbeam, Turkey oak, and beech forests</em>,
                  making the air <strong>fresh and clean</strong>. At the heart of the park lies a <strong>roundabout with a fountain</strong>,
                  from which broad paths extend in eight directions. Numerous <em>villas, hotels, and the Kursalon building</em> exude
                  <strong>elegance and historic charm</strong>. The park contains over <strong>80 tree and shrub species</strong> and <strong>51 types of flowers</strong>.
                  During the 1920s and 1930s, the spa also became a <em>fashionable destination</em>. <strong>Walking trails</strong> and
                  <em>forest fitness trails on Mount Gučevo</em> provide a special experience for all nature lovers. A visit to Banja Koviljača,
                  with its natural beauty, leaves a <strong>lasting impression</strong> and <em>broadens the mind</em>.
                </p>

              </section>

            </>
          )}

      </div>
    </>
  );
};


export default Gucevo;