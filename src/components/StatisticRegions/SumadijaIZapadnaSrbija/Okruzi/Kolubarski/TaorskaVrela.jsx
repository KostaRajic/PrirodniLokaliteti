/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import taorskaVrela1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/desktop/taorskaVrela1.jpg";
import taorskaVrela2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/desktop/taorskaVrela2.jpg";
import taorskaVrela3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/desktop/taorskaVrela3.jpg";
import taorskaVrela4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/desktop/taorskaVrela4.jpg";
import taorskaVrela5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/desktop/taorskaVrela5.jpg";
import taorskaVrela11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/mobile/MtaorskaVrela1.jpg";
import taorskaVrela22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/mobile/MtaorskaVrela2.jpg";
import taorskaVrela33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/mobile/MtaorskaVrela3.jpg";
import taorskaVrela44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/mobile/MtaorskaVrela4.jpg";
import taorskaVrela55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/KolubarskiOkrug/TaorskaVrela/mobile/MtaorskaVrela5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { kulubarskiOkrugPathRoutes } from "./KolubarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const TaorskaVrela = () => {
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

        <title>{switchLanguage === 'rs' ? "Taorska vrela – Prirodni biser Zapadne Srbije | Serbia Wonders" : "Taor Springs – A Natural Jewel of Western Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Taorska vrela kod Valjeva su jedinstveni kaskadni vodopadi i prirodni spomenik sa bogatom geologijom i netaknutom prirodom. Idealno mesto za ljubitelje prirode i planinarenja."
            :
            "Taorska Vrela near Valjevo are unique cascade waterfalls and a natural monument with rich geology and pristine nature. A perfect spot for nature lovers and hikers."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Taorska vrela, Vodopadi, Valjevo, Povlen, kaskade, priroda, speleologija, Zapadna Srbija, turizam"
            :
            "Taorska Vrela, waterfalls, Valjevo, Povlen, cascades, nature, speleology, Western Serbia, tourism"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/taorska-vrela`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/taorska-vrela"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/taorska-vrela"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/kolubarski-okrug/taorska-vrela"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(kulubarskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${taorskaVrela11} 450w, ${taorskaVrela1} `} alt="Taorska Vrela" />


        {switchLanguage === 'rs' ?
          (
            <>

              <h2 style={{ color: "white" }}>Taorska vrela</h2>

              <section lang="sr">
                <p>
                  <strong>Taorska vrela</strong> su jedno od najlepših i najtajanstvenijih prirodnih
                  bogatstava Zapadne Srbije i valjevskog kraja. Ova prelepa kaskadna vrela
                  smeštena su u podnožju planine <strong>Povlen</strong>, koja je prepoznata kao jedna od
                  najlepših u ovoj oblasti. Povlen je ujedno istorijski i geografski
                  povezan sa još dve planine u regionu – <strong>Maljenom</strong>, na kojem se nalazi
                  mirno planinsko odmaralište <strong>Divčibare</strong>, i <strong>Suvoborom</strong>. Sve tri planine su
                  bogate prirodnim lepotama i atrakcijama. Iako Taorska vrela nisu još
                  uvek postala široko prepoznatljivo odredište, ona privlače pažnju manjeg
                  broja turista, uglavnom onih koji dolaze iz domaćih krajeva. Ipak,
                  interesovanje za ovo prirodno blago iz godine u godinu raste, što je
                  vidljivo u sve većem broju blogova i putopisnih članaka, kao i u
                  turističkim ponudama koje uključuju ova mesta.
                </p>
              </section>

              <img srcSet={`${taorskaVrela22} 450w, ${taorskaVrela2} `} alt="Taorska Vrela" />

              <section lang="sr">
                <p>
                  <strong>Taorska vrela</strong> bez sumnje spadaju među najlepše prirodne kreacije u našoj
                  zemlji i širem regionu. Tokom vremena bivše Jugoslavije, slike Taorskih
                  vrela često su krasile naslovnice časopisa, a po svojoj lepoti
                  upoređivana su s <strong>Plitvičkim jezerima</strong> u Hrvatskoj. Ono što Taorska vrela
                  čini izuzetnim prirodnim spomenikom jesu njihove jedinstvene <em>geološke osobitosti</em>.
                  Sastoje se od vrelske pećine koja se nalazi ispod masiva krečnjaka,
                  iz koje izlazi glavni tok. Pored ove pećine, u okolini se
                  nalaze i brojni manji izvori. Ako se krene nizvodno od glavnog izvora,
                  dolazi se do najveće <strong>akumulacije bigra</strong> u ovom delu Srbije. Ovaj bigarski
                  prostor presecaju brojne <em>kaskade</em>, kroz koje se slivaju kristalno čisti
                  slapovi, stvarajući slikovite i zadivljujuće prizore.
                </p>
              </section>

              <img srcSet={`${taorskaVrela33} 450w, ${taorskaVrela3} `} alt="Taorska Vrela" />

              <section lang="sr">
                <p>
                  <strong>Taorski slapovi</strong> slivaju se u mali vodopad visine <strong>4,5 metara</strong>, koji se uliva u
                  reku <strong>Skrapež</strong>. Kroz kaskade i slapove prolaze ostaci starih <em>vodenica</em>, što
                  dodatno doprinosi šarmu ovog područja. Pored velike akumulacije bigra,
                  ovo područje je poznato i po bogatstvu <strong>sigom</strong>, kamenom koji je i dalje u
                  potražnji i koristi se za različite svrhe. U blizini Taorskih vrela
                  postoje <em>kopovi sige</em>. Nažalost, tokom godina ljudi su nesvesno
                  iskopavali sigu u ovom području, što je negativno uticalo na prirodnu
                  lepotu vodopada i njihovog okruženja, ostavljajući tragove <strong>eksploatacije</strong>
                  na ovom prirodnom biseru.
                </p>
              </section>

              <img srcSet={`${taorskaVrela44} 450w, ${taorskaVrela4} `} alt="Taorska Vrela" />

              <section lang="sr">
                <p>
                  Prema sećanjima, izvor pod Povlenom bio je toliko očaravajući da je
                  svakog posetioca ostavljao bez daha. <em>Voda je izlazila iz pećine</em>, pre
                  nego što je kasnije preusmerena. Što se tiče <strong>vodenica</strong>, koje su bile deo
                  narodnog graditeljstva, danas su sačuvane samo <strong>dve</strong>. Iako je izvorni
                  izgled Taorskih vrela promenjen ljudskim delovanjem, ovo prirodno dobro
                  i dalje očarava svojom lepotom i predstavlja destinaciju koju svakako
                  treba posetiti.
                </p>
              </section>

              <img srcSet={`${taorskaVrela55} 450w, ${taorskaVrela5} `} alt="Taorska Vrela" />

              <section lang="sr">
                <p>
                  Ako odlučite da posetite <strong>Taorska vrela</strong> i lično doživite njihovu lepotu,
                  kao i tajne starih vodenica, postoji nekoliko opcija kako da dođete do
                  njih. Putovanje <em>sopstvenim vozilom</em> je jednostavno, ali takođe možete
                  koristiti i <strong>autobuski</strong> ili <strong>vozni prevoz</strong>. Vrela se nalaze u selu <strong>Donji Taor</strong>,
                  koje pripada teritoriji grada <strong>Valjeva</strong>, a smeštena su blizu puta ka
                  selu <strong>Makovište</strong>. Sa prevozom možete prići blizu destinacije, a zatim je
                  potrebno da nastavite <em>pešačenjem</em>. Za dolazak autobusom, treba imati u
                  vidu da je put delimično <strong>asfaltiran</strong>, a delimično <strong>makadamski</strong>. Put je
                  jasno označen, a tokom puta postoje <em>parking prostori</em> gde možete
                  parkirati vozilo. Na raspolaganju je i <strong>autobuska linija</strong> koja povezuje
                  <strong>Valjevo</strong> i <strong>Donji Taor</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2 style={{ color: "white" }}>Taor Springs</h2>

              <section lang="en">
                <p>
                  <strong>Taorska Springs</strong> are among the most beautiful and mysterious natural
                  treasures of Western Serbia and the Valjevo region. These stunning cascading springs
                  are located at the foot of Mount <strong>Povlen</strong>, recognized as one of the most
                  scenic in the area. Povlen is both historically and geographically connected to two
                  other nearby mountains — <strong>Maljen</strong>, home to the peaceful mountain resort
                  <strong>Divčibare</strong>, and <strong>Suvobor</strong>. All three mountains are rich in natural beauty
                  and attractions. Although Taorska Springs have not yet become a widely known
                  destination, they attract a smaller number of tourists, mainly from within Serbia.
                  However, interest in this natural gem grows year by year, as seen in the increasing
                  number of travel blogs, articles, and tourist offers that feature this location.
                </p>
              </section>

              <img srcSet={`${taorskaVrela22} 450w, ${taorskaVrela2} `} alt="Taorska Springs" />

              <section lang="en">
                <p>
                  <strong>Taorska Springs</strong> are undoubtedly among the most beautiful natural formations in
                  our country and the wider region. During the time of former Yugoslavia, photos of
                  Taorska Springs frequently graced magazine covers, and they were often compared in
                  beauty to <strong>Plitvice Lakes</strong> in Croatia. What makes Taorska Springs an exceptional
                  natural monument are their unique <em>geological characteristics</em>. The site features a
                  spring cave beneath a limestone massif, from which the main stream emerges. In
                  addition to this cave, there are many smaller nearby sources. Downstream from the
                  main spring lies the largest <strong>tufa accumulation</strong> in this part of Serbia. This tufa
                  area is intersected by numerous <em>cascades</em>, where crystal-clear waterfalls flow,
                  creating picturesque and breathtaking scenes.
                </p>
              </section>

              <img srcSet={`${taorskaVrela33} 450w, ${taorskaVrela3} `} alt="Taorska Springs" />

              <section lang="en">
                <p>
                  The <strong>Taorska waterfalls</strong> flow into a small 4.5-meter-high waterfall that feeds into
                  the <strong>Skrapež River</strong>. Old <em>watermills</em> can still be seen among the cascades and
                  waterfalls, adding to the charm of the area. In addition to the vast tufa formations,
                  the region is also known for its abundance of <strong>travertine</strong>, a type of stone still in
                  demand and used for various purposes. There are <em>travertine quarries</em> near the springs.
                  Unfortunately, over the years, people have unknowingly extracted travertine from the
                  area, negatively affecting the natural beauty of the waterfalls and their surroundings,
                  leaving visible traces of <strong>exploitation</strong> on this natural jewel.
                </p>
              </section>

              <img srcSet={`${taorskaVrela44} 450w, ${taorskaVrela4} `} alt="Taorska Springs" />

              <section lang="en">
                <p>
                  According to memories, the spring beneath Povlen used to be so enchanting that it
                  left every visitor breathless. <em>Water used to flow directly from the cave</em> before it was
                  later redirected. As for the <strong>watermills</strong>, which are part of traditional folk
                  architecture, only <strong>two</strong> remain preserved today. Although the original appearance
                  of Taorska Springs has been altered by human activity, this natural site still captivates
                  with its beauty and remains a destination well worth visiting.
                </p>
              </section>

              <img srcSet={`${taorskaVrela55} 450w, ${taorskaVrela5} `} alt="Taorska Springs" />

              <section lang="en">
                <p>
                  If you decide to visit <strong>Taorska Springs</strong> and experience their beauty firsthand,
                  along with the secrets of the old watermills, there are several ways to get there.
                  Traveling by <em>private vehicle</em> is straightforward, but you can also use <strong>bus</strong> or
                  <strong>train</strong> transport. The springs are located in the village of <strong>Donji Taor</strong>, part of the
                  <strong>Valjevo</strong> municipality, and near the road to the village of <strong>Makovište</strong>. Public
                  transport can take you close to the destination, after which you’ll need to continue
                  <em>on foot</em>. If you’re arriving by bus, be aware that the road is partially <strong>paved</strong> and
                  partially <strong>gravel</strong>. The route is clearly marked, and there are <em>parking spots</em> available
                  along the way. A <strong>bus line</strong> also connects <strong>Valjevo</strong> with <strong>Donji Taor</strong>.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default TaorskaVrela;