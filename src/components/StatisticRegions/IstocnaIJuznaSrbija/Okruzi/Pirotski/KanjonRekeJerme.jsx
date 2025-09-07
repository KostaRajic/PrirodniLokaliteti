/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import jerma1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/desktop/kanjonRekeJerme1.jpg";
import jerma2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/desktop/kanjonRekeJerme2.jpg";
import jerma3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/desktop/kanjonRekeJerme3.jpg";
import jerma4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/desktop/kanjonRekeJerme4.jpg";
import jerma5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/desktop/kanjonRekeJerme5.jpg";
import jerma11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/mobile/kanjonRekeJermeM1.jpg";
import jerma22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/mobile/kanjonRekeJermeM2.jpg";
import jerma33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/mobile/kanjonRekeJermeM3.jpg";
import jerma44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/mobile/kanjonRekeJermeM4.jpg";
import jerma55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/mobile/kanjonRekeJermeM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const KanjonRekeJerme = () => {
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


        <title>{switchLanguage === 'rs' ? "Kanjon reke Jerme – Prirodni fenomen jugoistočne Srbije | Serbia Wonders" : "Jerma River Canyon – A Natural Phenomenon of Southeastern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Kanjon reke Jerme je jedan od najužih i najlepših kanjona u Srbiji, smešten između Vlaške planine i planine Greben. Otkrijte njegovu istoriju, prirodu i aktivnosti."
            :
            "The Jerma River Canyon is one of the narrowest and most beautiful canyons in Serbia, located between the Vlach and Greben mountains. Discover its history, nature, and activities."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Kanjon reke Jerme, Jerma, priroda Srbije, kanjoni Srbije, planinarenje, ribolov, Poganovski manastir, Zvonačka banja"
            :
            "Jerma River Canyon, Jerma River, Serbia nature, Serbian canyons, hiking, fishing, Poganovo Monastery, Zvonačka Spa"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/kanjon-reke-jerme`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/kanjon-reke-jerme"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/kanjon-reke-jerme"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/kanjon-reke-jerme"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(pirotskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${jerma11} 450w, ${jerma1} `} alt="Kanjon reke Jerme 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Kanjon reke Jerme</h2>

              <section lang="sr">
                <p>
                  <strong>Kanjon reke Jerme</strong> je impresivan prirodni fenomen koji se nalazi u jugoistočnom delu Srbije, a nastao je kroz milionima godina intenzivnih erozionih procesa. Ovaj kanjon je deo doline reke <strong>Jerme</strong>, koja se prostire na dužini od <em>72 kilometra</em>. Smešten je između stena <strong>Vlaške planine</strong> sa leve i <strong>planine Greben</strong> sa desne strane reke, stvarajući prelepu prirodnu kulisu. Smatra se jednim od <em>najužih kanjona u Evropi</em>, a meštani deo kanjona koji je najuži nazivaju <em>"Cediljka"</em> zbog njegovog karakterističnog oblika.
                </p>
              </section>

              <img srcSet={`${jerma22} 450w, ${jerma2}`} alt="Kanjon reke Jerme 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Kanjon reke Jerme</strong> nalazi se u regionu između gradova <strong>Pirot</strong>, <strong>Dimitrovgrad</strong> i <strong>Babušnica</strong>. Reka <strong>Jerma</strong>, koja prolazi kroz ovu oblast, oblikovala je ovaj impresivni kanjon tokom svog dugotrajnog toka. Ovaj prirodni fenomen star je oko <em>65 miliona godina</em>, koliko je stara i sama reka. Na nekim mestima, visina zidina kanjona doseže i do <em>300 metara</em>. Stene imaju spektar boja – od crvene do oker – stvarajući očaravajuće prizore u različitim delovima dana. Kanjon se proteže na <strong>15 kilometara</strong> i često se opisuje kao jedan od <em>najlepših kanjona u Srbiji i na Balkanu</em>. U blizini se nalazi i poznata <strong>Zvonačka Banja</strong>.
                </p>
              </section>

              <img srcSet={`${jerma33} 450w, ${jerma3}`} alt="Kanjon reke Jerme 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Kanjon reke Jerme</strong> dom je raznovrsnom biljnom i životinjskom svetu. U ovom području mogu se uočiti retke vrste ptica grabljivica koje lete iznad kanjona. <strong>Suri orao</strong> je nesumnjivo gospodar neba ovog kraja, a ujedno i jedina takva ptica koja nastanjuje ovu oblast u Srbiji. Šume oko kanjona pružaju utočište životinjama poput <em>jelena</em>, <em>divljih svinja</em> i <em>lisica</em>. Ljubitelji prirode i ptica mogu uživati u posmatranju i fotografisanju ovog bogatog ekosistema.
                </p>
              </section>

              <img srcSet={`${jerma44} 450w, ${jerma4}`} alt="Kanjon reke Jerme 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Do <strong>1927. godine</strong>, <strong>kanjon reke Jerme</strong> bio je potpuno izolovan i nepristupačan, sve dok nije probijena trasa uskog koloseka železnice kroz ovu divlju klisuru. Ovaj ključni trenutak bio je deo plana za obezbeđivanje pristupa rudniku kamenog uglja <em>“Rakita”</em>. Tokom šezdesetih godina rudnik je zatvoren, a sedamdesetih je izgrađen asfaltni put koji je zamenio železničku prugu.
                  <br /><br />
                  Izgradnja puta otvorila je vrata prirodnoj lepoti <strong>kanjona reke Jerme</strong>, ali i omogućila lakši pristup <strong>Poganovskom manastiru</strong>, koji se nalazi uz samu reku. Zbog nepristupačnosti kanjona pre 1927. godine, manastir je ostao netaknut od mnogih osvajača kroz istoriju.
                </p>
              </section>

              <img srcSet={`${jerma55} 450w, ${jerma5}`} alt="Kanjon reke Jerme 5" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Kanjon reke Jerme</strong> nudi bogat spektar aktivnosti za posetioce koji žele da istraže ovu prelepu regiju. <em>Pešačenje</em>, <em>planinarenje</em> i <em>vožnja biciklom</em> najpopularniji su izbori među ljubiteljima prirode i avanture. Tokom letnjih meseci, reka Jerma je idealna za <strong>ribolov</strong> i <strong>kupanje</strong>.
                  <br /><br />
                  Za one zainteresovane za istoriju ovog kraja, brojne pešačke staze vode kroz značajna istorijska i kulturna mesta. Takođe, organizovane ture omogućavaju dublje upoznavanje sa ovom fascinantnom oblašću i njenim <em>kulturnim nasleđem</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Canyon of the Jerma River</h2>

              <section lang="en"> <p> <strong>The Jerma River Canyon</strong> is an impressive natural phenomenon located in the southeastern part of Serbia, formed over millions of years through intense erosion processes. This canyon is part of the <strong>Jerma River</strong> valley, which stretches over a length of <em>72 kilometers</em>. It lies between the rocks of <strong>Vlaška Mountain</strong> on the left and <strong>Greben Mountain</strong> on the right side of the river, creating a stunning natural backdrop. It is considered one of the <em>narrowest canyons in Europe</em>, and locals call the narrowest section of the canyon <em>"Cediljka"</em> due to its distinctive shape. </p> </section>
              <img srcSet={`${jerma22} 450w, ${jerma2}`} alt="Jerma River Canyon 2" loading="lazy" />

              <section lang="en"> <p> <strong>The Jerma River Canyon</strong> is located in the region between the towns of <strong>Pirot</strong>, <strong>Dimitrovgrad</strong>, and <strong>Babušnica</strong>. The <strong>Jerma River</strong>, which flows through this area, shaped this remarkable canyon over its long course. This natural wonder is around <em>65 million years</em> old, which is also the age of the river itself. In some places, the canyon walls reach heights of up to <em>300 meters</em>. The rocks exhibit a range of colors—from red to ocher—creating breathtaking scenes at different times of day. The canyon stretches over <strong>15 kilometers</strong> and is often described as one of the <em>most beautiful canyons in Serbia and the Balkans</em>. Nearby, you can also find the famous <strong>Zvonačka Spa</strong>. </p> </section>
              <img srcSet={`${jerma33} 450w, ${jerma3}`} alt="Jerma River Canyon 3" loading="lazy" />

              <section lang="en"> <p> <strong>The Jerma River Canyon</strong> is home to a diverse array of plant and animal life. In this area, rare species of birds of prey can be seen soaring above the canyon. The <strong>golden eagle</strong> is undoubtedly the ruler of the skies here and is the only such bird inhabiting this region in Serbia. The forests around the canyon provide refuge for animals such as <em>deer</em>, <em>wild boars</em>, and <em>foxes</em>. Nature and bird lovers can enjoy observing and photographing this rich ecosystem. </p> </section>
              <img srcSet={`${jerma44} 450w, ${jerma4}`} alt="Jerma River Canyon 4" loading="lazy" />

              <section lang="en"> <p> Until <strong>1927</strong>, the <strong>Jerma River Canyon</strong> was completely isolated and inaccessible, until a narrow-gauge railway line was built through this wild gorge. This pivotal moment was part of a plan to ensure access to the <em>“Rakita”</em> coal mine. The mine was closed during the 1960s, and in the 1970s, an asphalt road was constructed to replace the railway. <br /><br /> The road’s construction opened the door to the natural beauty of the <strong>Jerma River Canyon</strong>, while also enabling easier access to the <strong>Poganovo Monastery</strong>, located along the river. Due to the inaccessibility of the canyon before 1927, the monastery remained untouched by many conquerors throughout history. </p> </section>
              <img srcSet={`${jerma55} 450w, ${jerma5}`} alt="Jerma River Canyon 5" loading="lazy" />

              <section lang="en"> <p> <strong>The Jerma River Canyon</strong> offers a wide range of activities for visitors who wish to explore this beautiful region. <em>Hiking</em>, <em>mountaineering</em>, and <em>cycling</em> are the most popular choices among nature and adventure enthusiasts. During the summer months, the Jerma River is ideal for <strong>fishing</strong> and <strong>swimming</strong>. <br /><br /> For those interested in the area’s history, numerous walking trails lead through significant historical and cultural landmarks. In addition, organized tours allow for a deeper understanding of this fascinating region and its <em>cultural heritage</em>. </p> </section>


            </>
          )}

      </div>
    </>
  );
};

export default KanjonRekeJerme;