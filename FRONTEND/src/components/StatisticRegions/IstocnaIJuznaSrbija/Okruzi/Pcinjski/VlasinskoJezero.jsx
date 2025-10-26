/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import vlasinsko1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/desktop/vlasinskoJezero1.jpg";
import vlasinsko2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/desktop/vlasinskoJezero2.jpg";
import vlasinsko3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/desktop/vlasinskoJezero3.jpg";
import vlasinsko4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/desktop/vlasinskoJezero4.jpg";
import vlasinsko5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/desktop/vlasinskoJezero5.jpg";
import vlasinsko6 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/desktop/vlasinskoJezero6.jpg";
import vlasinsko11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/mobile/vlasinskoJezeroM1.jpg";
import vlasinsko22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/mobile/vlasinskoJezeroM2.jpg";
import vlasinsko33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/mobile/vlasinskoJezeroM3.jpg";
import vlasinsko44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/mobile/vlasinskoJezeroM4.jpg";
import vlasinsko55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/mobile/vlasinskoJezeroM5.jpg";
import vlasinsko66 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/VlasinskoJezero/mobile/vlasinskoJezeroM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pcinjskiOkrugPathRoutes } from "./PcinjskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const VlasinskoJezero = () => {
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

        <title>{switchLanguage === 'rs' ? "Vlasinsko jezero – Dragulj visoravni južne Srbije | Serbia Wonders" : "Vlasina Lake – The Jewel of the Southern Serbia Plateau | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Vlasinsko jezero je drugo po veličini i najviše jezero u Srbiji, poznato po plutajućim ostrvima, bogatstvu prirode i planinskom okruženju. Idealno za odmor, ribolov i rekreaciju."
            :
            "Vlasina Lake is Serbia’s second largest and highest lake, known for its floating islands, pristine nature, and surrounding mountains. A perfect spot for relaxation, fishing, and outdoor adventures."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Vlasinsko jezero, Surdulica, Vlasina, ploveća ostrva, jezera Srbije, ribolov, planinski turizam, priroda Srbije, visoravan, Vardenik, Čemernik, Gramada, Plana, turizam u Srbiji"
            :
            "Vlasina Lake, Surdulica, floating islands, lakes in Serbia, fishing, nature, southern Serbia, highland lake, Vardenik, Čemernik, Gramada, Plana, tourism in Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vlasinsko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vlasinsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vlasinsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vlasinsko-jezero"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pcinjskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${vlasinsko11} 450w, ${vlasinsko1} `} alt="Vlasinsko Jezero 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Vlasinsko Jezero</h1>

              <section lang="sr">
                <p>
                  <strong>Vlasinsko jezero</strong>, drugo po veličini u Srbiji, prostire se na površini od
                  16,5 kvadratnih kilometara. Smešteno je u jugoistočnom delu zemlje,
                  unutar opštine <strong>Surdulica</strong>. Jezero se nalazi 30 kilometara zapadno od
                  doline <em>Južne Morave</em> i granice sa Bugarskom na jugu. Na nadmorskoj visini
                  od <em>1213 metara</em>, <strong>Vlasinsko jezero</strong> je najviše jezero u Srbiji.
                </p>
              </section>

              <img srcSet={`${vlasinsko22} 450w, ${vlasinsko2}`} alt="Vlasinsko Jezero 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Vlasinsko jezero</strong> je nastalo na mestu gde je nekada postojala tresava,
                  poznata kao <strong>Vlasinsko blato</strong>, sa širokim područjima ševare, trske i
                  povremenim vodenim površinama. Iz tih močvarnih predela izvire reka
                  <strong>Vlasina</strong>, na kojoj je kasnije formirano jezero. Istorijski podaci o
                  <strong>Vlasinskoj visoravni</strong> datiraju još iz osamnaestog veka, kada je bila
                  poznata kao <strong>Vlasinsko blato</strong> ili <strong>Vlasinska tresava</strong>, usled nakupljenog
                  treseta i blata koje je nastalo erozijom rečnih tokova. Tako je u
                  kanjonu dugom oko 20 kilometara stvorena močvara, koja je na određenim
                  mestima bila prekrivena živim peskom.
                </p>
              </section>

              <img srcSet={`${vlasinsko33} 450w, ${vlasinsko3}`} alt="Vlasinsko Jezero 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Izgradnja brane na jezeru trajala je od 1946. do 1949. godine. Jezero je
                  počelo da se puni 9. aprila 1949. godine, a 1954. je dostiglo svoj puni
                  kapacitet od 165 miliona kubnih metara vode.
                  <br /><br />
                  Nakon izgradnje, deo jezera bio je prekriven plovećim ostrvima, odnosno
                  delovima treseta koji su se otkinuli sa dna novoformiranog jezera. U
                  početku su ostrva bila vezivana za obalu, ali su od sredine sedamdesetih
                  godina prošlog veka počela da privlače pažnju zbog svoje jedinstvenosti.
                  I danas postoji nekoliko ovakvih plovećih ostrva.
                </p>
              </section>

              <img srcSet={`${vlasinsko66} 450w, ${vlasinsko6}`} alt="Vlasinsko Jezero 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Vlasinsko jezero</strong> je akumulaciono jezero sa površinom od 16,5 kvadratnih
                  kilometara, što ga svrstava na drugo mesto među najvećim jezerima
                  Srbije, odmah iza <strong>Đerdapskog jezera</strong>. Pri maksimalnom vodostaju, dužina
                  jezera iznosi 9 kilometara, dok širina dostiže 3,5 kilometara. Najveća
                  dubina jezera je 35 metara, a prosečna dubina je oko 25 metara. Ukupni
                  kapacitet jezera je 165 miliona kubnih metara vode.
                  <br /><br />
                  Jezero je smešteno na nadmorskoj visini od 1213 metara, a okružuju ga
                  planine <strong>Plana</strong>, <strong>Gramada</strong>, <strong>Vardenik</strong> i <strong>Čemernik</strong>. Boja vode se menja od
                  sivo-plave uz obalu do tamno-plave u sredini, sa zelenim priobalnim
                  površinama. Jezero svakog minuta prima 2 kubna metra vode, a njegove
                  glavne reke su <strong>Vlasina</strong>, <strong>Jerma</strong>, <strong>Božička reka</strong>, <strong>Lisinska reka</strong>, <strong>Ljubatska
                    reka</strong>, <strong>Strvna</strong> i <strong>Čemernica</strong>. U slivu <strong>Vlasinskog jezera</strong> nalazi se više od
                  100 reka, uključujući njihove pritoke.
                </p>
              </section>

              <img srcSet={`${vlasinsko55} 450w, ${vlasinsko5}`} alt="Vlasinsko Jezero 5" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Vlasinsko jezero</strong> ima dva stalna ostrva, <strong>Stratoriju</strong> i <strong>Dugi Del</strong>.
                  <strong>Stratorija</strong> je nekada bila ostrvo unutar <strong>Vlasinskog blata</strong>, dok je <strong>Dugi
                    Del</strong> bio poluostrvo pre izgradnje brane. Osim ovih, jezero je poznato i
                  po plutajućim ostrvima, koja se tokom vremena pomeraju. Ova ostrva su
                  nastala od podvodnih biljaka koje su rasle na tresetu, a zatim su se
                  otkinule sa dna jezera i isplivale. Na nekim od tih ostrva izrasle su
                  vrbe i breze, drveće tipično za ovu oblast.
                </p>
              </section>

              <img srcSet={`${vlasinsko44} 450w, ${vlasinsko4}`} alt="Vlasinsko Jezero 6" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Vlasinsko jezero</strong> je okruženo valovitom visoravni, koja podseća na šareni
                  ćilim, sa livadama, pašnjacima i šumama, a sve to krije bogat biljni i
                  životinjski svet. Planinski masivi koji se uzdižu iznad jezera
                  dominiraju pejzažom, dok na njihovim padinama leži oko šezdeset
                  vlasinskih naselja. Kroz ovo područje teku bistri potoci i rečice, a
                  klisure su prekrivene gustim šumama. Među planinama koje okružuju
                  jezero, posebnu pažnju privlače <strong>Čemernik</strong>, <strong>Plana</strong> i <strong>Vardenik</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Vlasinsko Lake</h1>

              <section lang="en">
                <p>
                  <strong>Vlasina Lake</strong>, the second largest in Serbia, covers an area of
                  16.5 square kilometers. It is located in the southeastern part of the country,
                  within the municipality of <strong>Surdulica</strong>. The lake lies 30 kilometers west of
                  the <em>South Morava</em> valley and the border with Bulgaria to the south. At an altitude
                  of <em>1,213 meters</em>, <strong>Vlasina Lake</strong> is the highest lake in Serbia.
                </p>
              </section>

              <img srcSet={`${vlasinsko22} 450w, ${vlasinsko2}`} alt="Vlasina Lake 2" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Vlasina Lake</strong> was formed at the site where there once was a marsh,
                  known as <strong>Vlasina Mud</strong>, with wide areas of wetlands, reeds, and
                  occasional water surfaces. The river <strong>Vlasina</strong> springs from these marshy areas,
                  on which the lake was later formed. Historical records of the
                  <strong>Vlasina Plateau</strong> date back to the eighteenth century, when it was
                  known as <strong>Vlasina Mud</strong> or <strong>Vlasina Marsh</strong>, due to accumulated
                  peat and mud caused by erosion of river flows. Thus, a swamp about 20 kilometers
                  long was formed in the canyon, which in certain places was covered with quicksand.
                </p>
              </section>

              <img srcSet={`${vlasinsko33} 450w, ${vlasinsko3}`} alt="Vlasina Lake 3" loading="lazy" />

              <section lang="en">
                <p>
                  The construction of the dam on the lake lasted from 1946 to 1949. The lake began
                  to fill on April 9, 1949, and by 1954 it reached its full capacity of 165 million cubic meters of water.
                  <br /><br />
                  After the construction, part of the lake was covered by floating islands, which are
                  pieces of peat that detached from the bottom of the newly formed lake. Initially,
                  the islands were anchored to the shore, but since the mid-1970s they have attracted
                  attention due to their uniqueness. Several such floating islands still exist today.
                </p>
              </section>

              <img srcSet={`${vlasinsko66} 450w, ${vlasinsko6}`} alt="Vlasina Lake 4" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Vlasina Lake</strong> is a reservoir lake with an area of 16.5 square kilometers,
                  ranking second among the largest lakes in Serbia, just behind <strong>Đerdap Lake</strong>.
                  At maximum water level, the lake's length is 9 kilometers, while its width reaches 3.5 kilometers.
                  The greatest depth of the lake is 35 meters, with an average depth of about 25 meters.
                  The total capacity of the lake is 165 million cubic meters of water.
                  <br /><br />
                  The lake is situated at an altitude of 1,213 meters and is surrounded by the mountains
                  <strong>Plana</strong>, <strong>Gramada</strong>, <strong>Vardenik</strong>, and <strong>Čemernik</strong>. The water color changes from
                  gray-blue near the shore to dark blue in the center, with green coastal areas.
                  The lake receives 2 cubic meters of water every minute, and its main rivers are
                  <strong>Vlasina</strong>, <strong>Jerma</strong>, <strong>Božička River</strong>, <strong>Lisinska River</strong>, <strong>Ljubatska
                    River</strong>, <strong>Strvna</strong>, and <strong>Čemernica</strong>. More than 100 rivers, including their tributaries,
                  are located in the Vlasina Lake basin.
                </p>
              </section>

              <img srcSet={`${vlasinsko55} 450w, ${vlasinsko5}`} alt="Vlasina Lake 5" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Vlasina Lake</strong> has two permanent islands, <strong>Stratorija</strong> and <strong>Dugi Del</strong>.
                  <strong>Stratorija</strong> was once an island within the <strong>Vlasina Mud</strong>, while <strong>Dugi
                    Del</strong> was a peninsula before the dam was built. Besides these, the lake is also known
                  for its floating islands, which move over time. These islands formed from underwater plants
                  that grew on peat, then detached from the lake bottom and floated to the surface. Some of these islands
                  have willows and birches growing on them, trees typical for this region.
                </p>
              </section>

              <img srcSet={`${vlasinsko44} 450w, ${vlasinsko4}`} alt="Vlasina Lake 6" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Vlasina Lake</strong> is surrounded by a rolling plateau, resembling a colorful
                  carpet, with meadows, pastures, and forests, all harboring a rich plant and
                  animal life. The mountain ranges rising above the lake dominate the landscape, while about sixty
                  Vlasina settlements lie on their slopes. Clear streams and rivers flow through this area,
                  and the gorges are covered with dense forests. Among the mountains surrounding
                  the lake, <strong>Čemernik</strong>, <strong>Plana</strong>, and <strong>Vardenik</strong> attract special attention.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default VlasinskoJezero;