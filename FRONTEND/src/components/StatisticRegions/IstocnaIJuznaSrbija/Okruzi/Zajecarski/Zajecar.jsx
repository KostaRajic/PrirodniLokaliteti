/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import zajecar1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/desktop/zajecar1.jpg";
import zajecar2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/desktop/zajecar2.jpg";
import zajecar3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/desktop/zajecar3.jpg";
import zajecar4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/desktop/zajecar4.jpg";
import zajecar5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/desktop/zajecar5.jpg";
import zajecar6 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/desktop/zajecar6.jpg";
import zajecar8 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/desktop/zajecar44.jpg";
import zajecar7 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/desktop/zajecar7.jpg";
import zajecar11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/mobile/zajecarM1.jpg";
import zajecar22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/mobile/zajecarM2.jpg";
import zajecar33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/mobile/zajecarM3.jpg";
import zajecar44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/mobile/zajecarM4.jpg";
import zajecar55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/mobile/zajecarM5.jpg";
import zajecar66 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/mobile/zajecarM6.jpg";
import zajecar88 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/mobile/zajecarM44.jpg";
import zajecar77 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Zajecar/mobile/zajecarM7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useState } from "react";
import { zajecarskiOkrugPathRoutes } from "./ZajecarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";

const Zajecar = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== switchLanguage) {
      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>

      <Helmet >

        <title>{switchLanguage === 'rs' ? "Zaječar – Istorija i Priroda Istočne Srbije | Serbia Wonders" : "Zaječar – Historic Town and Natural Beauty of Eastern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Zaječar je značajan grad u istočnoj Srbiji poznat po muzičkom festivalu Gitarijada, spomen parku Kraljevica i planini Vrška čuka. Saznajte više o legendama, kulturnom nasleđu i turističkim atrakcijama."
            :
            "Zaječar is an important town in eastern Serbia, famous for the Gitarijada music festival, Kraljevica memorial park, and Vrška čuka mountain. Learn about its legends, cultural heritage, and tourist attractions."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Zaječar, Gitarijada, Kraljevica, Vrška čuka, Grliško jezero, istočna Srbija, kulturno nasleđe, istorija Zaječara, turističke atrakcije Srbije"
            :
            "Zaječar, Gitarijada music festival, Kraljevica, Vrška čuka, Grliško lake, Eastern Serbia, cultural heritage, Zaječar history, tourist attractions Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/zajecar`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/zajecar"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/zajecar"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/zajecar"
        />
      </Helmet >



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zajecarskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${zajecar11} 450w, ${zajecar1} `} alt="Zaječar 1" loading="lazy" />

        <h1>Zaječar</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p> <strong>Zaјečar</strong> je grad i sedište grada Zaječara i Zaječarskog upravnog okruga u istočnoj Srbiji. Grad je domaćin više osnovnih i srednjih škola, kao i više škole za menadžment i prvog privatnog fakulteta u Srbiji, <em>Fakulteta za menadžment Megatrend univerziteta</em>. Zaječarska gimnazija, osnovana 1836. godine, jedna je od najstarijih škola tog tipa u Srbiji i bila je najstarija nakon Kragujevačke gimnazije u to vreme. Zaječar je poznat po muzičkom festivalu <strong>Zaječarska gitarijada</strong>, koji traje više od 50 godina, kao i po festivalu <em>"Zalet"</em> posvećenom savremenoj umetnosti. </p>
              </section>

              <img srcSet={`${zajecar22} 450w, ${zajecar2}`} alt="Zaječar 2" loading="lazy" />

              <section lang="sr">
                <p> Legende o nastanku imena Zaječara i danas su deo usmene tradicije u istočnoj Srbiji. One su prisutne u svakodnevnom životu ljudi ovog kraja i predstavljaju oblik običajne i društvene prakse, kao i komunikacije. <br /><br /> Postoji nekoliko legendi o poreklu imena Zaječara: <br /><br /> Grad Zaječar prvi put se pominje u popisu stanovništva iz 1446. godine, kada je bio deo Vidinskog sandžaka i brojao osam porodica. Prema jednoj legendi, na području Zaječara je nekada bilo mnogo zecova, pa je grad dobio ime po njima. Što se tiče porekla imena grada, pretpostavlja se da je nastalo od reči <em>„zajec“</em> (što znači zec u timočkom dijalektu), a budući da je pripadao Vidinskom sandžaku, na bugarskom jeziku <em>„zajčar“</em> označavalo je čuvara zecova. Kombinovanjem ova dva naziva, grad je dobio ime <strong>Zaječar</strong>. </p>
              </section>

              <img srcSet={`${zajecar33} 450w, ${zajecar3}`} alt="Zaječar 3" loading="lazy" />

              <section lang="sr">
                <p> Drugo predanje tvrdi da je ime grada poteklo od <em>Saida Ashar paše</em>, turskog komandanta iz Vidinskog sandžaka kojem je Zaječar pripadao tokom osmanske vladavine. Prema ovoj priči, Said Ashar paša je na ušću Crnog i Belog Timoka sagradio svoje imanje i podigao naselje, naseljavajući ga ljudima iz Bugarske i Vlasima. Tokom Prvog srpskog ustanka, on je postavio svoju vojsku u dolini Timoka, u kriznim godinama za srpsku despotovinu. Veruje se da je ime Zaječar nastalo vremenom od imena <strong>Said Ashar</strong>. </p>
              </section>

              <img srcSet={`${zajecar77} 450w, ${zajecar7}`} alt="Zaječar 4" loading="lazy" />

              <section lang="sr">
                <p> Grad je prvobitno bio smešten na desnoj obali Crnog Timoka, prostirući se do brda na kojem se danas nalazi park-šuma <em>Kraljevica</em>. Kasnije se život preselio i na levu obalu reke, šireći se ka zapadu. Doseljavanjem sve većeg broja srpskih porodica, Zaječar je postao srpski grad. Značaj predaja o nastanku imena Zaječara leži u tome što zajednica pokušava da objasni poreklo svog naselja i imena, čime doprinosi oblikovanju svog identiteta. Drevne priče i legende vekovima se u istočnoj Srbiji prenose sa generacije na generaciju, postajući svojevrsni <strong>„zaštitni znak“</strong> ovog kraja Srbije. Stara usmena predaja sačuvana u ovom delu Srbije predstavlja dragoceni deo <em>nematerijalnog kulturnog nasleđa</em>. </p>
              </section>

              {isMobile ? (
                <div className="displayFlexClassic">
                  <img
                    srcSet={`${zajecar44} 450w, ${zajecar4} `}
                    alt="Kraljevica 1 mob"
                    style={{ padding: "20px", width: "47%", height: "250px" }}
                  />

                  <img
                    srcSet={`${zajecar88} 450w, ${zajecar8} `}
                    alt="Kraljevica 2 mob"
                    style={{ padding: "20px", width: "47%", height: "250px" }}
                  />
                </div>
              ) : (
                <div className="displayFlexClassic">
                  <img
                    srcSet={`${zajecar44} 450w, ${zajecar4} `}
                    alt="Kraljevica 1"
                    style={{ padding: "50px", width: "47%" }}
                  />

                  <img
                    srcSet={`${zajecar88} 450w, ${zajecar8} `}
                    alt="Kraljevica 2"
                    style={{ padding: "50px", width: "47%" }}
                  />
                </div>
              )}

              <section lang="sr">
                <p> <strong>Kraljevica</strong> je brdo, spomen park-šuma i izletište južno od centra grada Zaječara, koje se prostire na oko 400 hektara. Ovo područje ima veliki istorijski značaj za grad i odlikuje se posebnim, slikovitim izgledom prirode, bogatom zimzelenom i četinarskom florom. Održavanje, uređenje i upravljanje Kraljevicom je u nadležnosti <em>JKP Timok-održavanje Zaječar</em>, ustanove osnovane 2018. godine. Ova institucija obuhvata kompleks sportskih terena i objekata različite namene na ukupnoj površini od 55.000 m²: sportsku halu, bazen, fudbalski stadion, otvorene terene sa tvrdim podlogama i park-šumu „Kraljevica“. <br /><br /> Na Kraljevici se nalaze i druge atrakcije kao što su vašar, hipodrom, trim i ski staza, planinarski dom, Kazamet, i konjički klub. Od istorijskih spomenika, tu su spomenik junaku iz Timoke bune <strong>Ljubi Didiću</strong>, vešala koja su podignuta u čast ljudi stradalih tokom Drugog svetskog rata, rimske (turske) stepenice, tvrđave iz perioda Prvog srpskog ustanka (istočna i zapadna) i krst posvećen žrtvama posle Drugog svetskog rata. </p>
              </section>

              <img srcSet={`${zajecar55} 450w, ${zajecar5}`} alt="Zaječar 5" loading="lazy" />


              <section lang="sr">
                <p> <strong>Vrška čuka</strong> je najseverniji deo Stare planine, smešten 12 km istočno od Zaječara. Prostire se u pravcu severozapad–jugoistok, a visina se postepeno povećava od 382 do 672 m prema jugoistoku. Preko najvišeg vrha prelazi srpsko-bugarska granica. <br /><br /> Severno od Vrške čuke nalazi se granični prelaz Vrška Čuka na putu Zaječar–Kula. Na padinama ove planine, koje su obrasle vegetacijom, nalaze se izvorišta Bujukovog i Prlitskog potoka, Topovljevca i Dobrovog dola. <br /><br /> Geološka građa Vrške čuke sastoji se od sprudnih krečnjaka i peščara srednje i gornje jure. Na više mesta u ovom području nalaze se bogata nalazišta fosila, a na većim dubinama mogu se pronaći naslage kamenog uglja. </p>
              </section>

              <img srcSet={`${zajecar66} 450w, ${zajecar6}`} alt="Zaječar 6" loading="lazy" />

              <section lang="sr">
                <p> <strong>Grliško jezero</strong> je veštačko akumulaciono jezero u istočnoj Srbiji, na teritoriji Grada Zaječara. Smešteno je u dolini između naselja Grlišta i Leskovca. Nastalo je 1989. godine pregradišćem Grliške reke, 4,5 km uzvodno od njenog ušća u Beli Timok. Jezero ima višestruku namenu: koristi se za snabdevanje Zaječara pijaćom vodom, zbog čega nisu izgrađeni objekti za turizam i upotreba čamaca je zabranjena. Takođe, koristi se za navodnjavanje i zadržavanje nanosa. U eksploataciji je od 1990. godine, a voda je bistra i providna. </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p> <strong>Zaječar</strong> is a city and the administrative center of the city of Zaječar and the Zaječar administrative district in eastern Serbia. The city hosts several primary and secondary schools, as well as a higher management school and the first private university faculty in Serbia, the <em>Faculty of Management at Megatrend University</em>. The Zaječar Gymnasium, founded in 1836, is one of the oldest schools of its kind in Serbia and was the second oldest after the Kragujevac Gymnasium at that time. Zaječar is known for the music festival <strong>Zaječar Guitar Festival</strong>, which has been held for over 50 years, as well as the <em>"Zalet"</em> festival dedicated to contemporary art. </p>
              </section>

              <img srcSet={`${zajecar22} 450w, ${zajecar2}`} alt="Zaječar 2" loading="lazy" />

              <section lang="en">
                <p> Legends about the origin of the name Zaječar are still part of the oral tradition in eastern Serbia today. They are present in the everyday life of the people in this region and represent a form of customary and social practice, as well as communication. <br /><br /> There are several legends regarding the origin of the name Zaječar: <br /><br /> The city of Zaječar is first mentioned in the 1446 census, when it was part of the Vidin Sanjak and counted eight families. According to one legend, there were once many hares in the area of Zaječar, and the city was named after them. Regarding the origin of the city’s name, it is assumed that it came from the word <em>„zajec”</em> (meaning hare in the Timok dialect), and since it belonged to the Vidin Sanjak, in Bulgarian the word <em>„zajčar”</em> meant a keeper of hares. By combining these two names, the city was named <strong>Zaječar</strong>. </p>
              </section>

              <img srcSet={`${zajecar33} 450w, ${zajecar3}`} alt="Zaječar 3" loading="lazy" />

              <section lang="en">
                <p> Another tradition claims that the city’s name originated from <em>Said Ashar Pasha</em>, a Turkish commander from the Vidin Sanjak to which Zaječar belonged during Ottoman rule. According to this story, Said Ashar Pasha built his estate and founded a settlement at the confluence of the Crni and Beli Timok rivers, populating it with people from Bulgaria and the Vlachs. During the First Serbian Uprising, he stationed his army in the Timok valley during the critical years for the Serbian Despotate. It is believed that the name Zaječar developed over time from the name <strong>Said Ashar</strong>. </p>
              </section>

              <img srcSet={`${zajecar77} 450w, ${zajecar7}`} alt="Zaječar 4" loading="lazy" />

              <section lang="en">
                <p> The city was originally located on the right bank of the Crni Timok River, extending to the hill where today the park-forest <em>Kraljevica</em> is situated. Later, life moved to the left bank of the river, expanding westward. With the immigration of an increasing number of Serbian families, Zaječar became a Serbian city. The significance of the legends about the origin of Zaječar’s name lies in the community’s attempt to explain the origin of its settlement and name, thus contributing to the shaping of its identity. Ancient stories and legends have been passed down from generation to generation in eastern Serbia for centuries, becoming a sort of <strong>"trademark"</strong> of this region of Serbia. The old oral tradition preserved in this part of Serbia represents a valuable part of the <em>intangible cultural heritage</em>. </p>
              </section>

              {isMobile ? (
                <div className="displayFlexClassic">
                  <img
                    srcSet={`${zajecar44} 450w, ${zajecar4} `}
                    alt="Kraljevica 1 mob"
                    style={{ padding: "20px", width: "47%", height: "250px" }}
                  />

                  <img
                    srcSet={`${zajecar88} 450w, ${zajecar8} `}
                    alt="Kraljevica 2 mob"
                    style={{ padding: "20px", width: "47%", height: "250px" }}
                  />
                </div>
              ) : (
                <div className="displayFlexClassic">
                  <img
                    srcSet={`${zajecar44} 450w, ${zajecar4} `}
                    alt="Kraljevica 1"
                    style={{ padding: "50px", width: "47%" }}
                  />

                  <img
                    srcSet={`${zajecar88} 450w, ${zajecar8} `}
                    alt="Kraljevica 2"
                    style={{ padding: "50px", width: "47%" }}
                  />
                </div>
              )}

              <section lang="en"> <p> <strong>Kraljevica</strong> is a hill, memorial park-forest, and recreational area located south of the center of the city of Zaječar, covering about 400 hectares. This area has great historical significance for the city and is characterized by a distinctive, picturesque natural appearance, rich in evergreen and coniferous flora. The maintenance, arrangement, and management of Kraljevica are under the responsibility of <em>JKP Timok-održavanje Zaječar</em>, an institution founded in 2018. This institution includes a complex of sports fields and facilities of various purposes, covering a total area of 55,000 m²: a sports hall, swimming pool, football stadium, outdoor courts with hard surfaces, and the “Kraljevica” park-forest. <br /><br /> Other attractions at Kraljevica include a fairground, hippodrome, trim and ski trails, a mountain lodge, Kazamet, and an equestrian club. Among the historical monuments are the monument to the hero of the Timok Rebellion <strong>Ljuba Didić</strong>, gallows erected in honor of those who died during World War II, Roman (Turkish) stairs, fortresses from the period of the First Serbian Uprising (eastern and western), and a cross dedicated to victims after World War II. </p> </section>
              <img srcSet={`${zajecar55} 450w, ${zajecar5}`} alt="Zaječar 5" loading="lazy" />

              <section lang="en"> <p> <strong>Vrška čuka</strong> is the northernmost part of the Stara Planina (Balkan Mountains), located 12 km east of Zaječar. It stretches in a northwest-southeast direction, with elevation gradually increasing from 382 to 672 meters toward the southeast. The Serbian-Bulgarian border passes over its highest peak. <br /><br /> North of Vrška čuka lies the Vrška Čuka border crossing on the Zaječar–Kula road. On the slopes of this mountain, covered with vegetation, are the springs of the Bujukov and Prlitski streams, Topovljevac, and Dobri Dol. <br /><br /> The geological composition of Vrška čuka consists of reef limestones and sandstones from the Middle and Upper Jurassic periods. Rich fossil deposits can be found in several places in this area, and coal deposits can be found at greater depths. </p> </section>
              <img srcSet={`${zajecar66} 450w, ${zajecar6}`} alt="Zaječar 6" loading="lazy" />

              <section lang="en"> <p> <strong>Grliško Lake</strong> is an artificial reservoir lake in eastern Serbia, within the territory of the City of Zaječar. It is located in the valley between the settlements of Grlište and Leskovac. It was formed in 1989 by damming the Grliška River, 4.5 km upstream from its confluence with the Beli Timok River. The lake serves multiple purposes: it is used to supply Zaječar with drinking water, which is why no tourist facilities were built and the use of boats is prohibited. It is also used for irrigation and sediment retention. It has been in operation since 1990, and the water is clear and transparent. </p> </section>


            </>
          )}

      </div>

    </>
  );
};


export default Zajecar;