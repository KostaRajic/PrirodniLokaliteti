/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import mackov1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/desktop/mackovKamen1.jpg";
import mackov2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/desktop/mackovKamen2.jpg";
import mackov3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/desktop/mackovKamen3.jpg";
import mackov4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/desktop/mackovKamen4.jpg";
import mackov5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/desktop/mackovKamen5.jpg";
import mackov11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/mobile/MmackovKamen1.jpg";
import mackov22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/mobile/MmackovKamen2.jpg";
import mackov33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/mobile/MmackovKamen3.jpg";
import mackov44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/mobile/MmackovKamen4.jpg";
import mackov55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/mobile/MmackovKamen5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { macvanskiOkrugPathRoutes } from "./MacvanskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const MackovKamen = () => {
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
            ? "Mačkov Kamen – Bitka iz Prvog svetskog rata i planina Jagodnja | Serbia Wonders"
            : "Mačkov Kamen – WWI Battlefield and Mount Jagodnja | Serbia Wonders"}
        </title>
        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Mačkov kamen na planini Jagodnji predstavlja mesto jedne od najkrvavijih bitaka Prvog svetskog rata. Istražite istoriju, prirodu i spomen-kosturnicu posvećenu srpskim junacima."
              : "Mačkov Kamen on Mount Jagodnja is the site of one of the bloodiest battles of World War I. Explore its history, nature, and the memorial ossuary dedicated to Serbian heroes."
          }
        />
        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Mačkov kamen, planina Jagodnja, Prvi svetski rat, spomen-kosturnica, Dušan Purić, Nadežda Petrović, bitka, Krupanj, skijanje, Podrinje, istorija, turizam"
              : "Mačkov Kamen, Mount Jagodnja, World War I, memorial ossuary, Dušan Purić, Nadežda Petrović, battle, Krupanj, skiing, Podrinje, history, tourism"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/mackov-kamen`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/mackov-kamen"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/mackov-kamen"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/mackov-kamen"
        />


      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(macvanskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${mackov11} 450w, ${mackov1} `} alt="Mačkov Kamen 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Mačkov Kamen</h1>

              <section lang="sr">

                <p>
                  Na vrhu planine <strong>Jagodnje</strong>, nazvane po bogatstvu <em>šumskih jagoda</em> koje tamo rastu,
                  nalazi se čuveni <strong>Mačkov kamen</strong>, istorijsko mesto velike bitke iz <strong>Prvog svetskog rata</strong>,
                  vođene <strong>1914. godine</strong>. Na najvišoj tački planine, na nadmorskoj visini od <strong>924 metra</strong>,
                  podignuta je <strong>spomen-kosturnica</strong> u čast junacima koji su dali svoje živote u tom sukobu.
                  Njena izgradnja započela je <strong>1928. godine</strong>, a osvećenje je obavljeno četiri godine kasnije,
                  pod rukovodstvom tadašnjeg <strong>srpskog patrijarha Varnave</strong>. Obimni <em>konzervatorski radovi</em>
                  na spomen-kosturnici i spomen-česmi izvedeni su tokom <strong>2013. i 2014. godine</strong>, kako bi se sačuvalo ovo značajno mesto.
                </p>

              </section>

              <img srcSet={`${mackov22} 450w, ${mackov2}`} alt="Mačkov Kamen 2" />

              <section lang="sr">
                <p>
                  <strong>Bitka na Mačkovom kamenu</strong> vođena je od <strong>19. do 22. septembra 1914. godine</strong>,
                  smeštena između <strong>Cerske bitke</strong> (16–20. avgust 1914) i <strong>Kolubarske bitke</strong> (16. novembar–12. decembar 1914).
                  Prema mišljenju mnogih istoričara, predstavlja jednu od <em>najkrvavijih i najtežih bitaka</em> u toku celog <strong>Prvog svetskog rata</strong>.
                  Iako je formalno završena <em>pirovom pobedom austrougarske vojske</em>, bitka je iznedrila jednog od <strong>najistaknutijih srpskih heroja</strong>
                  tog vremena, ostavivši <em>dubok trag u sećanju</em> na <strong>Veliki rat</strong>.
                </p>
              </section>


              <img srcSet={`${mackov33} 450w, ${mackov3}`} alt="Mačkov Kamen 3" />

              <section lang="sr">

                <p>
                  Možda ime <strong>potpukovnika Dušana Purića</strong> (1873–1914), <em>heroja sa Mačkovog kamena</em>, nije poznato mnogima,
                  ali verujemo da ćete ga nakon čitanja ovog teksta zapamtiti, jer <em>takav heroj to zaslužuje</em>.
                  Na početku neprijateljskih dejstava, potpukovnik Purić bio je raspoređen na <strong>šarganskim položajima</strong>.
                  Kao komandant <strong>Četvrtog puka „Stevan Nemanja“</strong>, koji je pripadao <strong>Užičkoj vojsci</strong>,
                  uspešno je sprečavao prodor <strong>neprijateljskih snaga</strong> iz Višegrada prema Mokroj Gori i Kremni,
                  pokazujući <em>izuzetnu hrabrost i odlučnost</em>. U borbama na Mačkovom kamenu život je izgubilo <strong>115 srpskih oficira</strong>,
                  a <strong>176 je ranjeno</strong>, među kojima i <strong>princ Đorđe Karađorđević</strong>.
                  Bitka je takođe bila značajna i zbog prisustva <strong>Nadežde Petrović</strong>, poznate <em>srpske slikarke i bolničarke</em>.
                  Ona je nakon <em>četvorodnevnog marša</em> sa položaja u Sremu stigla na Mačkov kamen, gde je tokom svih borbi bila prisutna
                  u bolnici, neposredno uz ratište, <strong>pružajući pomoć ranjenicima</strong>.
                </p>

              </section>


              <img srcSet={`${mackov44} 450w, ${mackov4}`} alt="Mačkov Kamen 4" />

              <section lang="sr">
                <p>
                  Planina <strong>Jagodnja</strong>, gde se nalazi Mačkov Kamen, je i <strong>popularno odredište</strong>
                  za sve koji žele da uživaju u <em>skijanju u mirnom okruženju</em>, daleko od gužve velikih skijališta.
                  Skijalište nudi staze koje su uglavnom pogodne za <strong>početnike i rekreativce</strong>, a idealno je za
                  <strong>porodice</strong> koje žele da provedu kvalitetno vreme na snegu.
                  Oprema za skijanje može se <strong>iznajmiti na licu mesta</strong>, a <strong>ski lift</strong> omogućava lakši pristup stazama.
                  Iako nije previše veliko, skijalište je poznato po <em>prirodnom okruženju</em> i <em>prijatnoj atmosferi</em>.
                </p>

              </section>


              <img srcSet={`${mackov55} 450w, ${mackov5}`} alt="Planina Jagodnja" />

              <section lang="sr">

                <p>
                  <strong>Planina Jagodnja</strong> prostire se između <strong>Borašnje</strong> na severu,
                  <strong>Sokolskih planina</strong> i rečice <strong>Uzovnice</strong> na istoku, <strong>Drine</strong> na zapadu i jugoistoku,
                  te <strong>Krupnja</strong> na severoistoku. To je <em>niža planina u Podrinju</em>, sa najvišim tačkama <strong>Mačkov kamen (923 m)</strong>
                  i <strong>Košutnja stopa (939 m)</strong>. Ima <em>asimetričan profil</em>, sa <strong>strmim padinama</strong> koje se spuštaju
                  prema jugu, prema Drini, dok je severna strana <em>blago nagnuta</em>. Južna strana planine je <strong>značajno šumovitija</strong>
                  od severne. Sa njenog najvišeg dela pruža se <strong>širok i lep pogled</strong> na <strong>Drinu i Bosnu</strong>.
                  Najlakši pristup Jagodnji je iz <strong>Krupnja</strong>, odakle vodi <strong>asfaltni put do Mačkovog kamena</strong>.
                  Planina je sastavljena od <strong>škrilja</strong>, dok se u njenoj unutrašnjosti nalaze i <strong>krečnjaci, peščari i eruptivne stene</strong>.
                  Sa njenog širokog temena, <strong>tereni se spuštaju</strong> prema <strong>Drini i Jadru</strong>.
                  <strong>Mačkov kamen</strong> je bio poprište teške bitke tokom <strong>Prvog svetskog rata</strong> <em>1914. godine</em>,
                  između <strong>srpske i austrougarske vojske</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Mačkov Kamen</h1>

              <section lang="en">
                <p>
                  At the top of <strong>Mount Jagodnja</strong>, named after the abundance of <em>wild strawberries</em> that grow there,
                  lies the famous <strong>Mačkov Kamen</strong>, a historic site of a major battle from <strong>World War I</strong>,
                  fought in <strong>1914</strong>. At the highest point of the mountain, at an elevation of <strong>924 meters</strong>,
                  a <strong>memorial ossuary</strong> was erected in honor of the heroes who gave their lives in that conflict.
                  Its construction began in <strong>1928</strong>, and the consecration took place four years later,
                  under the leadership of the then <strong>Serbian Patriarch Varnava</strong>.
                  Extensive <em>conservation works</em> on the memorial ossuary and fountain were carried out in <strong>2013 and 2014</strong>
                  to preserve this important site.
                </p>
              </section>

              <img srcSet={`${mackov22} 450w, ${mackov2}`} alt="Mačkov Kamen 2" />

              <section lang="en">
                <p>
                  The <strong>Battle of Mačkov Kamen</strong> was fought from <strong>September 19 to 22, 1914</strong>,
                  situated between the <strong>Battle of Cer</strong> (August 16–20, 1914) and the <strong>Battle of Kolubara</strong> (November 16–December 12, 1914).
                  According to many historians, it was one of the <em>bloodiest and most difficult battles</em> of <strong>World War I</strong>.
                  Although it formally ended in a <em>pyrrhic victory for the Austro-Hungarian army</em>,
                  the battle brought forth one of the <strong>most prominent Serbian heroes</strong> of the time,
                  leaving a <em>deep mark in the memory</em> of the <strong>Great War</strong>.
                </p>
              </section>

              <img srcSet={`${mackov33} 450w, ${mackov3}`} alt="Mačkov Kamen 3" />

              <section lang="en">
                <p>
                  The name of <strong>Lieutenant Colonel Dušan Purić</strong> (1873–1914), <em>the hero of Mačkov Kamen</em>,
                  may not be known to many, but we believe that after reading this text, you will remember him,
                  as <em>such a hero deserves recognition</em>.
                  At the beginning of enemy operations, Lt. Col. Purić was stationed on the <strong>Šargan positions</strong>.
                  As the commander of the <strong>4th Regiment "Stefan Nemanja"</strong>, which belonged to the <strong>Užice Army</strong>,
                  he successfully prevented the advance of <strong>enemy forces</strong> from Višegrad toward Mokra Gora and Kremna,
                  showing <em>extraordinary courage and determination</em>.
                  During the battles at Mačkov Kamen, <strong>115 Serbian officers</strong> lost their lives, and <strong>176 were wounded</strong>,
                  including <strong>Prince Đorđe Karađorđević</strong>.
                  The battle was also significant due to the presence of <strong>Nadežda Petrović</strong>,
                  a well-known <em>Serbian painter and nurse</em>.
                  After a <em>four-day march</em> from the Srem front, she arrived at Mačkov Kamen,
                  where she remained at the field hospital near the front line, <strong>providing aid to the wounded</strong>.
                </p>
              </section>


              <img srcSet={`${mackov44} 450w, ${mackov4}`} alt="Mačkov Kamen 4" />

              <section lang="en">
                <p>
                  <strong>Mount Jagodnja</strong>, where Mačkov Kamen is located, is also a <strong>popular destination</strong>
                  for those who wish to enjoy <em>skiing in a peaceful environment</em>, far from the crowds of large ski resorts.
                  The ski area offers slopes that are mostly suitable for <strong>beginners and recreational skiers</strong>,
                  making it ideal for <strong>families</strong> wanting to spend quality time in the snow.
                  Ski equipment can be <strong>rented on-site</strong>, and a <strong>ski lift</strong> provides easy access to the slopes.
                  Although not very large, the resort is known for its <em>natural surroundings</em> and <em>pleasant atmosphere</em>.
                </p>
              </section>


              <img srcSet={`${mackov55} 450w, ${mackov5}`} alt="Mount Jagodnja" />

              <section lang="en">
                <p>
                  <strong>Mount Jagodnja</strong> stretches between <strong>Borašnja</strong> to the north,
                  the <strong>Sokolske Mountains</strong> and the <strong>Uzovnica River</strong> to the east,
                  the <strong>Drina River</strong> to the west and southeast, and <strong>Krupanj</strong> to the northeast.
                  It is a <em>low mountain in the Podrinje region</em>, with the highest peaks being <strong>Mačkov Kamen (923 m)</strong>
                  and <strong>Košutnja Stopa (939 m)</strong>. It has an <em>asymmetrical profile</em>, with <strong>steep southern slopes</strong>
                  descending toward the Drina, while the northern side is <em>gently inclined</em>.
                  The southern part is <strong>much more forested</strong> than the northern part.
                  From its highest point, there is a <strong>broad and beautiful view</strong> of the <strong>Drina and Bosnia</strong>.
                  The easiest access to Jagodnja is from <strong>Krupanj</strong>, from where an <strong>asphalt road leads to Mačkov Kamen</strong>.
                  The mountain is composed of <strong>shale</strong>, while its interior also contains <strong>limestone, sandstone, and igneous rocks</strong>.
                  From its wide ridge, the terrain slopes down toward the <strong>Drina and Jadar</strong>.
                  <strong>Mačkov Kamen</strong> was the site of a fierce battle during <strong>World War I</strong> in <em>1914</em>,
                  between the <strong>Serbian and Austro-Hungarian armies</strong>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default MackovKamen;