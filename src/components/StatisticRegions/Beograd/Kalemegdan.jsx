/* eslint-disable react/no-unknown-property */
import kalemegdan1 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan2.jpg";
import kalemegdan2 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan1.jpg";
import kalemegdan3 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan3.jpg";
import kalemegdan4 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan4.jpg";
import kalemegdan5 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan5.jpg";
import kalemegdan6 from "../../../assets/images/Beograd/Kalemegdan/desktop/kalemegdan6.jpg";
import kalemegdan11 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM2.jpg";
import kalemegdan22 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM1.jpg";
import kalemegdan33 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM3.jpg";
import kalemegdan44 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM4.jpg";
import kalemegdan55 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM5.jpg";
import kalemegdan66 from "../../../assets/images/Beograd/Kalemegdan/mobile/kalemegdanM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";
import { useContextAuth } from "../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Kalemegdan = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();


  useEffect(() => {
    if (lang !== switchLanguage) {

      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


  return (

    <>

      <Helmet>
        <title>{switchLanguage === 'rs' ? "Beogradska Tvrđava – Kalemegdan | Serbia Wonders" : "Belgrade Fortress – Kalemegdan | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Beogradska tvrđava i Kalemegdan – srce istorijskog Beograda. Otkrijte vekovne zidine, kapije, spomenik Pobedniku i Kalemegdanski park."
            :

            "Belgrade Fortress and Kalemegdan – the heart of historic Belgrade. Discover centuries-old walls, gates, the Victor Monument, and Kalemegdan Park."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Beogradska tvrđava, Kalemegdan, Pobednik, Beograd, istorija, spomenik kulture, kapije, Gornji grad, Donji grad, tvrđava, park, turistička atrakcija"
            :
            "Belgrade Fortress, Kalemegdan, Victor Monument, Belgrade, history, cultural monument, gates, Upper Town, Lower Town, fortress, park, tourist attraction"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/beograd/kalemegdan`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/beograd/kalemegdan"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/beograd/kalemegdan"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/beograd/kalemegdan"
        />

      </Helmet >

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(beogradPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${kalemegdan44} 450w, ${kalemegdan4} `} alt="Kalemegdan 1" loading="lazy" />



        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Beogradska Tvrdjava - Kalemegdan</h2>

              <section lang='sr'>
                <p>
                  <strong>Beogradska tvrđava</strong>, smeštena na grebenu iznad ušća Save u Dunav,
                  predstavlja istorijski kompleks od strateškog značaja koji je nastajao
                  od <strong>I do XVIII veka</strong> kao vojni odbrambeni objekat. Danas je to <em>spomenik kulture</em> i muzejski kompleks koji osvetljava istoriju Beograda.
                  Ovaj kompleks čine sama tvrđava, podeljena na <strong>Gornji</strong> i <strong>Donji grad</strong>,
                  kao i park <strong>Kalemegdan</strong>. Još krajem I veka nove ere tu je podignuto rimsko
                  utvrđenje – kastelum IV Flavijeve legije. Iako uništeno od Gota i Huna,
                  obnovljeno je u <strong>VI veku</strong>, pre nego što su ga razorili Avari i Sloveni.
                </p>
              </section>

              <img srcSet={`${kalemegdan22} 450w, ${kalemegdan2}`} alt="Kalemegdan 2" loading="lazy" />

              <section lang='sr'>
                <p>
                  Na brdu iznad ušća Save u Dunav nastao je <em>antički Singidunum</em>, a kasnije i
                  slovenski Beograd. Tokom vekova, grad se razvijao unutar zidina tvrđave.
                  Bedemi su obnavljani i dograđivani – od rimskih i srpskih, do turskih i
                  austrijskih. <strong>Vizantijski car Manojlo Komnin</strong> podigao je kastel u 12. veku,
                  a <strong>despot Stefan Lazarević</strong> je u 14. veku dodatno ojačao tvrđavu i formirao
                  <em>Despotov dvor</em> i <em>ratno pristanište</em>. Nakon turskog osvajanja 1521. godine,
                  tvrđava je ostala nepromenjena sve do kraja 17. veka.
                </p>
              </section>

              <img srcSet={`${kalemegdan11} 450w, ${kalemegdan1}`} alt="Kalemegdan 3" loading="lazy" />

              <section lang='sr'>
                <p>
                  U 18. veku, tokom <em>austrijsko-turskih ratova</em>, Beogradska tvrđava je tri puta
                  rekonstruisana i postala jedno od <strong>najjačih vojnih uporišta u Evropi</strong>.
                  Projektovao ju je <strong>general Nikola Doks Demorez</strong>. Međutim, 1738. godine,
                  zbog poraza kod Niša, Demorez je streljan upravo ispred tvrđave koju je
                  izgradio. Povratak Turaka 1740. godine značio je rušenje austrijskih
                  fortifikacija. Do kraja veka, tvrđava je dobila današnji oblik, iako su
                  mnogi objekti u Gornjem i Donjem gradu bili uništeni.
                </p>
              </section>

              <img srcSet={`${kalemegdan33} 450w, ${kalemegdan3}`} alt="Kalemegdan 4" loading="lazy" />

              <section lang='sr'>
                <p>
                  Beogradska tvrđava poseduje niz značajnih kapija koje su služile kao
                  strateški ulazi:
                  <strong>Stambol kapija</strong> – glavna kapija prema Istanbulu;
                  <strong>Sahat kapija</strong> – sa tornjem i satom;
                  <strong>Zindan kapija</strong> – istočni ulaz blizu Zoološkog vrta;
                  <strong>Despotova kapija</strong> – vodi u Gornji grad;
                  <strong>Vidin kapija</strong> – ulaz u Donji grad prema Savi;
                  <strong>Mračna kapija</strong> – iz Karađorđeve ulice.
                  Sve kapije su deo <em>fortifikacionog sistema</em> koji osvetljava odbrambene
                  strategije kroz vekove.
                </p>
              </section>

              <img srcSet={`${kalemegdan55} 450w, ${kalemegdan5}`} alt="Kalemegdan 5" loading="lazy" />

              <section lang='sr'>
                <p>
                  <strong>"Pobednik"</strong> je trijumfalni spomenik podignut <strong>1928. godine</strong> na platou Gornjeg grada.
                  Autor je <em>Ivan Meštrović</em>, a spomenik je postavljen povodom <strong>10 godina od proboja Solunskog fronta</strong>.
                  Nalazi se na mestu s kojeg se pruža spektakularan pogled na ušće Save u Dunav.
                  Postao je jedan od najprepoznatljivijih simbola Beograda i omiljeno mesto
                  za <em>odmor, fotografisanje i šetnje</em>.
                </p>
              </section>

              <img srcSet={`${kalemegdan66} 450w, ${kalemegdan6}`} alt="Kalemegdan 6" loading="lazy" />

              <section lang='sr'>
                <p>
                  Život na ovom prostoru traje neprekidno više od <strong>dva milenijuma</strong>.
                  Beogradska tvrđava i Kalemegdanski park predstavljaju <strong>srž prestonog grada</strong>,
                  u kojoj su vidljivi tragovi srednjovekovne i barokne arhitekture.
                  <em>Kalemegdanski park</em> je uređen na mestu nekadašnjeg gradskog polja i
                  obuhvata <strong>Veliki i Mali park</strong>. Danas je to popularno mesto za <em>odmor,
                    rekreaciju, umetničke i kulturne događaje</em>. Zajedno čine <strong>spomenik kulture
                      od izuzetnog značaja</strong> i simbol istorijskog i urbanog razvoja Beograda.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>Belgrade Fortress – Kalemegdan</h2>

              <section lang='en'> <p> The <strong>Belgrade Fortress</strong>, situated on a ridge above the confluence of the Sava and Danube rivers, is a historical complex of strategic importance that developed from the <strong>1st to the 18th century</strong> as a military defensive structure. Today, it stands as a <em>cultural monument</em> and museum complex that sheds light on the history of Belgrade. The complex consists of the fortress itself—divided into the <strong>Upper Town</strong> and <strong>Lower Town</strong>—and the <strong>Kalemegdan Park</strong>. At the end of the 1st century AD, the Romans built a fortification here—*castellum* of the IV Flavian Legion. Although destroyed by the Goths and Huns, it was rebuilt in the <strong>6th century</strong>, before being demolished again by the Avars and Slavs. </p> </section>
              <img srcSet={`${kalemegdan22} 450w, ${kalemegdan2}`} alt="Kalemegdan 2" loading="lazy" />

              <section lang='en'> <p> On the hill above the confluence of the Sava and Danube rivers arose the ancient city of <em>Singidunum</em>, later known as Slavic Belgrade. Over the centuries, the city developed within the fortress walls. The fortifications were rebuilt and expanded—from Roman and Serbian to Ottoman and Austrian periods. In the 12th century, <strong>Byzantine Emperor Manuel Komnenos</strong> built a castle, while in the 14th century, <strong>Despot Stefan Lazarević</strong> further strengthened the fortress, establishing the <em>Despot’s Palace</em> and a <em>military port</em>. After the Ottoman conquest in 1521, the fortress remained largely unchanged until the end of the 17th century. </p> </section>
              <img srcSet={`${kalemegdan11} 450w, ${kalemegdan1}`} alt="Kalemegdan 3" loading="lazy" />

              <section lang='en'> <p> In the 18th century, during the <em>Austro-Turkish wars</em>, the Belgrade Fortress was reconstructed three times, becoming one of the <strong>strongest military strongholds in Europe</strong>. It was designed by <strong>General Nicolas Doxat de Moréz</strong>. However, after the Austrian defeat near Niš in 1738, Doxat was executed right in front of the fortress he had helped build. The return of the Ottomans in 1740 led to the destruction of Austrian fortifications. By the end of the century, the fortress had acquired its present-day form, although many structures in the Upper and Lower Town were destroyed. </p> </section>
              <img srcSet={`${kalemegdan33} 450w, ${kalemegdan3}`} alt="Kalemegdan 4" loading="lazy" />

              <section lang='en'> <p> The Belgrade Fortress includes several important gates that once served as strategic entry points: <strong>Stambol Gate</strong> – the main gate leading toward Istanbul; <strong>Clock Gate</strong> – featuring a tower with a clock; <strong>Zindan Gate</strong> – the eastern entrance near the Zoo; <strong>Despot’s Gate</strong> – leads into the Upper Town; <strong>Vidin Gate</strong> – entrance to the Lower Town from the Sava River; <strong>Dark Gate</strong> – from Karađorđeva Street. All these gates are part of the <em>fortification system</em> that illustrates centuries of defensive strategy. </p> </section>
              <img srcSet={`${kalemegdan55} 450w, ${kalemegdan5}`} alt="Kalemegdan 5" loading="lazy" />

              <section lang='en'> <p> The <strong>"Victor"</strong> is a triumphal monument erected in <strong>1928</strong> on the plateau of the Upper Town. Created by <em>Ivan Meštrović</em>, it was placed to mark the <strong>10th anniversary of the breakthrough of the Salonika Front</strong>. It stands at a point offering a spectacular view of the confluence of the Sava and Danube rivers. Today, it is one of the most recognizable symbols of Belgrade and a favorite spot for <em>relaxation, photography, and walks</em>. </p> </section>
              <img srcSet={`${kalemegdan66} 450w, ${kalemegdan6}`} alt="Kalemegdan 6" loading="lazy" />

              <section lang='en'> <p> Life in this area has been continuous for more than <strong>two millennia</strong>. The Belgrade Fortress and Kalemegdan Park represent the <strong>core of the capital city</strong>, where traces of medieval and baroque architecture are still visible. The <em>Kalemegdan Park</em> was developed on what was once a city field and includes both the <strong>Large and Small Parks</strong>. Today, it is a popular place for <em>leisure, recreation, artistic and cultural events</em>. Together, they form a <strong>monument of exceptional cultural importance</strong> and a symbol of Belgrade’s historical and urban development. </p> </section>

            </>
          )}

      </div>

    </>
  );
};

export default Kalemegdan;