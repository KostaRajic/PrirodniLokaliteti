/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import stariRas1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/desktop/tvrdjavaStariRas5.jpg";
import stariRas2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/desktop/tvrdjavaStariRas1.jpg";
import stariRas3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/desktop/tvrdjavaStariRas2.jpg";
import stariRas4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/desktop/tvrdjavaStariRas3.jpg";
import stariRas5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/desktop/tvrdjavaStariRas4.jpg";
import stariRas6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/desktop/tvrdjavaStariRas6.jpg";
import stariRas11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/mobile/MtvrdjavaStariRas5.jpg";
import stariRas22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/mobile/MtvrdjavaStariRas1.jpg";
import stariRas33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/mobile/MtvrdjavaStariRas2.jpg";
import stariRas44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/mobile/MtvrdjavaStariRas3.jpg";
import stariRas55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/mobile/MtvrdjavaStariRas4.jpg";
import stariRas66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaStariRas/mobile/MtvrdjavaStariRas6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const TvrdjavaStariRas = () => {
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
            ? "Tvrđava Stari Ras – Kolevka srpske državnosti i dinastije Nemanjić | Srbija Wonders"
            : "Stari Ras Fortress – Cradle of Serbian Statehood and the Nemanjić Dynasty | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Stari Ras je jedna od najstarijih srpskih tvrđava i simbol početka vladavine dinastije Nemanjić. Istorijsko, kulturno i arheološko blago u blizini Novog Pazara koje svedoči o srednjovekovnoj Srbiji."
              : "Stari Ras is one of the oldest Serbian fortresses and a symbol of the rise of the Nemanjić dynasty. A historical, cultural, and archaeological treasure near Novi Pazar that reflects medieval Serbia."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Stari Ras, tvrđava Stari Ras, dinastija Nemanjić, Raška, Stefan Nemanja, Nova Pazar, srednjovekovna Srbija, srpska istorija, arheološki lokalitet"
              : "Stari Ras, Stari Ras fortress, Nemanjić dynasty, Raška, Stefan Nemanja, Novi Pazar, medieval Serbia, Serbian history, archaeological site"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-stari-ras`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-stari-ras"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-stari-ras"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-stari-ras"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(raskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${stariRas11} 450w, ${stariRas1} `} alt="Tvrđava Stari Ras 1" />


        {switchLanguage === 'rs' ?
          (
            <>

              <h2 style={{ color: "white" }}>Tvrđava Stari Ras</h2>


              <section lang="sr">
                <p>
                  U <strong>Starom Rasu</strong> je stvarana prva prestonica <strong>dinastije Nemanjić</strong>.
                  Dinastija Nemanjića vladala je <strong>Srbijom od 1168. do 1371. godine</strong>. U osam generacija Nemanjića, od kojih je više od šezdeset poznato po imenima,
                  <strong>kao svetitelje slavimo devetnaest</strong>, a broj svetaca može biti i veći kada uzmemo u obzir i <em>ženske potomke</em>. Osnivač dinastije bio je
                  <strong>veliki župan Stefan Nemanja</strong>, sin <strong>Zavide</strong>. Bio je povezan sa <strong>Vukanovićima</strong> po muškoj i sa
                  <strong>Vojslavljevićima</strong> po ženskoj liniji. Dinastija se nastavila kroz <em>žensku liniju</em> u <strong>dinastiju Lazarevića</strong>, a potom i
                  <strong>Brankovića</strong>. Vladari su bili: Nemanja, Prvovenčani, Radoslav, Vladislav, Uroš I, Dragutin, Milutin, Uroš III Dečanski,
                  Dušan Silni i Uroš Nejak.
                </p>
              </section>

              <img srcSet={`${stariRas22} 450w, ${stariRas2}`} alt="Tvrđava Stari Ras 2" />

              <section lang="sr">
                <p>
                  <strong>Stari Ras</strong>, kao prestonica prvih Nemanjića, bio je <em>epicentar tadašnje Srbije</em>. Istraživači imaju različita mišljenja o tačnoj
                  lokaciji prestonice i značenju pojma <strong>Raška</strong>. Iako važan, <strong>Stari Ras nije bio prva prestonica Srbije</strong> kao organizovane države.
                  Postojala je i <strong>propaganda dinastije Nemanjić</strong> koja je želela da prikaže Nemanju kao <em>osnivača državnosti</em>,
                  često zanemarujući <strong>ranije dinastije</strong> kao što su <strong>Dukljani</strong> i župani Raške.
                </p>
              </section>

              <img srcSet={`${stariRas33} 450w, ${stariRas3}`} alt="Tvrđava Stari Ras 3" />

              <section lang="sr">
                <p>
                  Istraživači prepoznaju <strong>dve osnovne lokacije</strong> za Stari Ras. <strong>Marko Popović</strong> smatra da je utvrđenje na
                  <strong>Gradini</strong>, iznad ušća Sebečeve reke u Rašku, jedno od vladarskih sedišta, ali ne i sama prestonica. <strong>Jovanka Kalić</strong>, s druge strane,
                  tvrdi da se Stari Ras nalazio u okolini <strong>Petrove crkve</strong>, blizu današnjeg <strong>Novog Pazara</strong>, kao i da se
                  <em>utvrđenje u Postenju</em> može uzeti kao još jedna moguća lokacija.
                </p>
              </section>

              <img srcSet={`${stariRas44} 450w, ${stariRas4}`} alt="Tvrđava Stari Ras 4" />

              <section lang="sr">
                <p>
                  Autori se oslanjaju na <strong>arheološke, istorijske i lingvističke metode</strong>. Pojam <strong>Ras</strong> (ili <em>Arsa</em>) se
                  u 12. veku koristio kao <strong>ekvivalent za Srbiju</strong>, a granice <em>Raške župe</em> bile su važne za definisanje tog prostora.
                  Prvi pomen toponima Arsa potiče iz 6. veka, kod <strong>Prokopija iz Cezareje</strong>, dok su značajni izvori i delo <strong>Konstantina VII Porfirogenita</strong>,
                  naročito njegovo delo <em>De administrando imperio</em>, gde se Ras pominje u vezi sa <strong>granicom između Srbije i Bugarske</strong>.
                </p>
              </section>

              <img srcSet={`${stariRas55} 450w, ${stariRas5}`} alt="Tvrđava Stari Ras 5" />

              <section lang="sr">
                <p>
                  Porfirogenit beleži događaj iz <strong>880. godine</strong>, gde sinovi kneza <strong>Mutimira</strong> odvode poraženog bugarskog vladara
                  <strong>Borisa Mihaila</strong> do <strong>granice kod Rasa</strong>. Tada dolazi do razmene poklona i sklapanja prijateljstva. Ipak,
                  ostaje <em>nejasno da li se pojam "Ras" odnosi na grad, oblast ili reku</em>. Jezička analiza pokazuje da je <strong>naziv "Ras"</strong> proizašao iz
                  <em>metateze likvida</em> predslovenskog oblika <strong>Arsa</strong>, što je poznata lingvistička pojava.
                </p>
              </section>

              <img srcSet={`${stariRas66} 450w, ${stariRas6}`} alt="Tvrđava Stari Ras 6" />

              <section lang="sr">
                <p>
                  Iz izvora Konstantina Porfirogenita jasno se vidi da <strong>Ras nije sinonim za Srbiju</strong> u 9. i 10. veku. <em>Ras se pominje kao granična oblast</em>,
                  dok se <strong>Srbijom upravlja knez Mutimir</strong>. Pojam <strong>Raška kao ime za Srbiju</strong> počinje da se koristi tek nakon što je grad Ras
                  postao prestonica. <strong>Jovanka Kalić</strong> je u svom radu pokazala da se <strong>do 12. veka</strong> naziv Raška ne koristi za srpske zemlje,
                  već se uvek govori o <strong>„Srbima”</strong> i <strong>„Srbiji”</strong>. Najraniji pomen Raške u značenju Srbije potiče iz <strong>1186. godine</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2 style={{ color: "white" }}>Fortress Stari Ras</h2>

              <section lang="en">
                <p> In <strong>Stari Ras</strong>, the first capital of the <strong>Nemanjić dynasty</strong> was established. The Nemanjić dynasty ruled <strong>Serbia from 1168 to 1371</strong>. Across eight generations of the Nemanjić family, more than sixty are known by name, and <strong>nineteen are celebrated as saints</strong>, with the number possibly even higher if <em>female descendants</em> are included. The founder of the dynasty was <strong>Grand Prince Stefan Nemanja</strong>, son of <strong>Zavida</strong>. He was related to the <strong>Vukanović family</strong> on his father’s side and to the <strong>Vojslavljević family</strong> on his mother’s side. The dynasty continued through the <em>female line</em> into the <strong>Lazarević dynasty</strong>, and later the <strong>Branković dynasty</strong>. The rulers were: Nemanja, Prvovenčani, Radoslav, Vladislav, Uroš I, Dragutin, Milutin, Uroš III Dečanski, Dušan the Mighty, and Uroš the Weak. </p>
              </section>

              <img srcSet={`${stariRas22} 450w, ${stariRas2}`} alt="Fortress Stari Ras 2" />

              <section lang="en"> <p> <strong>Stari Ras</strong>, as the capital of the first Nemanjić rulers, was the <em>epicenter of Serbia at the time</em>. Researchers have differing opinions about the exact location of the capital and the meaning of the term <strong>Raška</strong>. Although important, <strong>Stari Ras was not the first capital of Serbia</strong> as an organized state. There was also <strong>Nemanjić dynasty propaganda</strong> that sought to portray Nemanja as the <em>founder of statehood</em>, often neglecting <strong>earlier dynasties</strong> such as the <strong>Dukljans</strong> and the župans of Raška. </p> </section>
              <img srcSet={`${stariRas33} 450w, ${stariRas3}`} alt="Fortress Stari Ras 3" />

              <section lang="en"> <p> Researchers recognize <strong>two main locations</strong> for Stari Ras. <strong>Marko Popović</strong> believes that the fortress on <strong>Gradina</strong>, above the mouth of the Sebečeva River into Raška, was one of the royal seats, but not the capital itself. <strong>Jovanka Kalić</strong>, on the other hand, argues that Stari Ras was located near <strong>Petrova Church</strong>, close to modern-day <strong>Novi Pazar</strong>, and that the <em>fortress in Postenje</em> can be considered another possible location. </p> </section>
              <img srcSet={`${stariRas44} 450w, ${stariRas4}`} alt="Fortress Stari Ras 4" />

              <section lang="en"> <p> The authors rely on <strong>archaeological, historical, and linguistic methods</strong>. The term <strong>Ras</strong> (or <em>Arsa</em>) in the 12th century was used as an <strong>equivalent for Serbia</strong>, and the boundaries of the <em>Raška župa</em> were important in defining this area. The first mention of the toponym Arsa dates back to the 6th century by <strong>Procopius of Caesarea</strong>, while important sources include the work of <strong>Constantine VII Porphyrogenitus</strong>, especially his book <em>De administrando imperio</em>, where Ras is mentioned in relation to the <strong>border between Serbia and Bulgaria</strong>. </p> </section>
              <img srcSet={`${stariRas55} 450w, ${stariRas5}`} alt="Fortress Stari Ras 5" />

              <section lang="en"> <p> Porphyrogenitus records an event from <strong>880 AD</strong>, where the sons of Prince <strong>Mutimir</strong> escort the defeated Bulgarian ruler <strong>Boris Michael</strong> to the <strong>border at Ras</strong>. Gifts were exchanged and friendship was established. However, it remains <em>unclear whether the term "Ras" refers to a town, a region, or a river</em>. Linguistic analysis shows that the name "Ras" originated from the <em>liquid metathesis</em> of the pre-Slavic form <strong>Arsa</strong>, which is a well-known linguistic phenomenon. </p> </section>
              <img srcSet={`${stariRas66} 450w, ${stariRas6}`} alt="Fortress Stari Ras 6" />

              <section lang="en"> <p> From the sources of Constantine Porphyrogenitus, it is clear that <strong>Ras was not synonymous with Serbia</strong> in the 9th and 10th centuries. <em>Ras is mentioned as a border area</em>, while <strong>Serbia was ruled by Prince Mutimir</strong>. The term <strong>Raška as the name for Serbia</strong> began to be used only after the city of Ras became the capital. <strong>Jovanka Kalić</strong> showed in her work that until the <strong>12th century</strong>, the name Raška was not used for Serbian lands, and that the terms <strong>"Serbs"</strong> and <strong>"Serbia"</strong> were always used instead. The earliest mention of Raška meaning Serbia dates back to <strong>1186</strong>. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default TvrdjavaStariRas;