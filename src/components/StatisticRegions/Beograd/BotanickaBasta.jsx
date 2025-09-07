/* eslint-disable react/no-unknown-property */
import botanickaBasta1 from "../../../assets/images/Beograd/BotanickaBasta/desktop/botanickaBasta2.jpg";
import botanickaBasta2 from "../../../assets/images/Beograd/BotanickaBasta/desktop/botanickaBasta1.jpg";
import botanickaBasta3 from "../../../assets/images/Beograd/BotanickaBasta/desktop/botanickaBasta3.jpg";
import botanickaBasta4 from "../../../assets/images/Beograd/BotanickaBasta/desktop/botanickaBasta4.jpg";
import botanickaBasta5 from "../../../assets/images/Beograd/BotanickaBasta/desktop/botanickaBasta5.jpg";
import botanickaBasta6 from "../../../assets/images/Beograd/BotanickaBasta/desktop/botanickaBasta6.jpg";
import botanickaBasta11 from "../../../assets/images/Beograd/BotanickaBasta/mobile/botanickaBastaM2.jpg";
import botanickaBasta22 from "../../../assets/images/Beograd/BotanickaBasta/mobile/botanickaBastaM1.jpg";
import botanickaBasta33 from "../../../assets/images/Beograd/BotanickaBasta/mobile/botanickaBastaM3.jpg";
import botanickaBasta44 from "../../../assets/images/Beograd/BotanickaBasta/mobile/botanickaBastaM4.jpg";
import botanickaBasta55 from "../../../assets/images/Beograd/BotanickaBasta/mobile/botanickaBastaM5.jpg";
import botanickaBasta66 from "../../../assets/images/Beograd/BotanickaBasta/mobile/botanickaBastaM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";
import { useContextAuth } from "../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const BotanickaBata = () => {
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

        <title>{switchLanguage === 'rs' ? "Botanička Bašta Jevremovac | Serbia Wonders" : "Jevremovac Botanical Garden | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Botanička bašta Jevremovac u Beogradu – oaza prirode osnovana 1874. godine, sa tropskim i pustinjskim biljkama, japanskim vrtom i kulturnim nasleđem."
            :
            "Jevremovac Botanical Garden in Belgrade – a nature oasis founded in 1874, featuring tropical and desert plants, a Japanese garden, and cultural heritage."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Botanička bašta Jevremovac, Beograd, Josif Pančić, staklena bašta, japanski vrt, egzotične biljke, sukulenti, biljni svet, botanika, prirodna baština"
            :
            "Jevremovac Botanical Garden, Belgrade, Josif Pančić, glasshouse, Japanese garden, exotic plants, succulents, plant world, botany, natural heritage"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/beograd/botanicka-basta`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/beograd/botanicka-basta"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/beograd/botanicka-basta"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/beograd/botanicka-basta"
        />

      </Helmet >



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(beogradPathRoutes.home(switchLanguage))} style={{fill: 'white'}} />
        <header></header>
        <img srcSet={`${botanickaBasta22} 450w, ${botanickaBasta2} `} alt="Botancika basta 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h2>Botanička Bašta - Jevremovac</h2>

              <section lang='sr'>
                <p>
                  Botanička bašta Jevremovac osnovana je <strong>1874. godine</strong> na inicijativu
                  <em>Josifa Pančića</em>, poznatog srpskog lekara i botaničara. Prvobitno je bašta
                  bila smeštena na Dorćolu, blizu reke Dunav, ali je zbog nepovoljnih
                  uslova premeštena na novu lokaciju. Nova lokacija bila je darovana
                  Velikoj školi od strane <strong>kralja Milana Obrenovića</strong>, gde je Pančić predavao
                  botaniku. Imanje na kojem je bašta postavljena nekada je bilo voćnjak
                  kraljevog dede Jevrema, pa je zbog toga Botanička bašta dobila naziv
                  <em>Jevremovac</em>.
                </p>
              </section>

              <img srcSet={`${botanickaBasta11} 450w, ${botanickaBasta1} `} alt="Botanička bašta 2" loading="lazy" />


              <section lang='sr'>
                <p>
                  Staklena bašta, smeštena u severoistočnom delu Botaničke bašte,
                  izgrađena je <strong>1892. godine</strong> kao poklon Kralja Milana, uz podršku
                  Ministarstva prosvetnih i crkvenih dela. Gradila ju je drezdenska firma
                  Mozentin, koja je poznata po svojim izuzetnim projektima staklenih bašta
                  širom Evrope. Staklenik je dizajniran u <em>viktorijanskom stilu</em>, sa
                  centralnom kupolom i dva krila. Prostire se na oko 550 m² i u njemu se
                  čuva oko <strong>1000 različitih biljnih vrsta</strong>, koje su grupisane prema
                  geografskim i ekološkim karakteristikama. U južnom krilu i pod
                  centralnom kupolom smestile su se tropske biljke koje podsećaju na bujne
                  tropske kišne šume, dok se u severnom krilu, u kojem dominiraju
                  sukulentne vrste, može uživati u pogledu na svet pustinja, kamenja,
                  peska i sunca. Staklena bašta postala je deo kulturne baštine Beograda,
                  a nakon više od jednog veka zapuštanja, temeljno je obnovljena <strong>2014. godine</strong>.
                </p>
              </section>

              <img srcSet={`${botanickaBasta33} 450w, ${botanickaBasta3} `} alt="Botanička bašta 3" loading="lazy" />


              <section lang='sr'>
                <p>
                  Japanski vrtovi odražavaju estetski princip <em>jednostavnosti</em>, gde linije i
                  boje nisu upadljive, već subtilne. Nisu zamišljeni da budu simetrični
                  niti grandiozni; njihov cilj je da prikažu lepotu prirode u njenoj
                  autentičnosti i ravnoteži. Tri ključna elementa japanskih vrtova su
                  <strong>kamen, voda i biljke</strong>. Kamen je duboko poštovan u japanskoj kulturi,
                  često smatran svetim, jer se veruje da u njemu prebivaju duhovni
                  entiteti. Postavljanje kamenčića, naročito onih koji liče na stepenice
                  iznad vode, simbolizuje planine. Grupisanje kamenja u tri stuba često
                  odražava simboliku trijade — neba, zemlje i čoveka, usmeravajući
                  prirodnu energiju. Voda, s druge strane, predstavlja okeane i neprekidnu
                  promenu koja je neodvojiva od prirode. U japanskim vrtovima, vodeni
                  tokovi i bazeni ne samo da upotpunjuju pejzaž, već dodaju i zvučnu
                  dimenziju, podsećajući na neprestane promene u svetu oko nas. Biljke u
                  japanskim vrtovima nisu birane slučajno; svaka biljka nosi duboko
                  ukorenjenu simboliku. Bor, na primer, simbolizuje <strong>dugovečnost i ljubav</strong>,
                  jer sa godinama postaje lepši i impozantniji. Trešnjino drvo predstavlja
                  <em>večnu mladost i proleće</em>, dok javori, čiji listovi padaju u jesen,
                  podsećaju na neizbežnu prolaznost života, ciklus rođenja i smrti.
                </p>
              </section>


              <img srcSet={`${botanickaBasta44} 450w, ${botanickaBasta4} `} alt="Botanička bašta staklenik 1" loading="lazy" />

              <section lang='sr'>
                <p>
                  Unutrašnjost staklene Botaničke bašte Jevremovac prava je oaza u kojoj
                  se susreću raznolike vrste biljaka iz tropskih, subtropskih i
                  mediteranskih regiona. Staklenik, izgrađen u viktorijanskom stilu,
                  prostire se na oko 550 m² i deli se na nekoliko sekcija, svaka sa
                  specifičnom florom i jedinstvenim ekosistemom. Pod kupolom staklenika,
                  tropske biljke zauzimaju centralni prostor, stvarajući bujnu i raskošnu
                  atmosferu koja podseća na tropske kišne šume. Tu možete videti divovske
                  palme, fikusove vrste, ali i orhideje koje cvetaju u živopisnim bojama,
                  donoseći dašak egzotike. Biljke poput Helikonije sa svojim neobičnim,
                  šarenim cvetovima dodaju spektakularne boje prostoru, dok se uz drveće
                  prostiru i biljke penjačice koje se uspinju uz staklene zidove.
                </p>

              </section>

              <img
                srcSet={`${botanickaBasta55} 450w, ${botanickaBasta5} `}
                alt="Botanička bašta staklenik 2"
                loading="lazy"

              />

              <section lang='sr'>
                <p>
                  Botanička bašta se prostire na površini od <strong>5 hektara</strong>, u okviru kojih se
                  nalazi i staklena bašta od 500 metara kvadratnih, kao i Institut za
                  botaniku sa bibliotekom. Na otvorenom delu se neguje nešto manje od
                  <strong>1.000 vrsta drveća, žbunja i biljaka</strong>, poreklom iz evropskih i egzotičnih
                  krajeva. U staklenoj bašti se takođe nalazi preko 1.000 vrsta biljnih
                  primeraka različite veličine i značaja. U okviru Instituta za botaniku
                  nalazi se herbarijum sa bogatom zbirkom biljaka, koja broji oko 120.000
                  herbarijumskih listova i preko 300.000 eksikata (sasušenog biološkog
                  materijala). Takođe, u njemu se čuva i vredna bibliotka, sa preko 7.000
                  knjiga i oko 300 naučnih i stručnih časopisa.
                </p>
              </section>

              <img
                srcSet={`${botanickaBasta66} 450w, ${botanickaBasta6} `}
                alt="Botanička bašta Beograd"
                loading="lazy"
              />

              <section lang='sr'>
                <p>
                  U severnom delu staklenika, sušnu klimu podsećaju sukulenti i kaktusi.
                  Ovde biljke kao što su <strong>agave i saguaros</strong> dominiraju, dok njihovi mesnati
                  listovi skladište vodu, omogućavajući im da prežive u sušnim uslovima.
                  Zanimljivo je da su ove biljke savršeno prilagođene ekstremnim uslovima,
                  a njihov izgled često podseća na tajne svetova pustinja. Stakleni
                  prostor takođe sadrži vodene biljke, koje rastu u vlažnim područjima
                  staklenika. Tu su prelepi lotosi i lopoči, koji svojim veličanstvenim
                  cvetovima plutaju na površini malih bazena, dodajući prostoru miran i
                  <em>zen ugođaj</em>. Zanimljivo je i to da je staklenik rekonstruisan <strong>2014.
                    godine</strong>, nakon što je decenijama bio zapušten. Ova rekonstrukcija
                  omogućila je vraćanje originalnog izgleda staklenika, ali i adaptaciju
                  na savremene standarde za čuvanje biljaka. Staklena bašta je sada ne
                  samo prirodni raj, već i kulturno dobro koje pruža posetiocima uvid u
                  raznovrsnost biljnih vrsta sa svih kontinenata, te je prava dragocenost
                  Beograda.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>Botanical Garden - Jevremovac</h2>

              <section lang='en'>
                <p> The Jevremovac Botanical Garden was founded in <strong>1874</strong> at the initiative of <em>Josif Pančić</em>, a renowned Serbian doctor and botanist. Originally, the garden was located in Dorćol, near the Danube River, but due to unfavorable conditions it was moved to a new location. The new site was donated to the Great School by <strong>King Milan Obrenović</strong>, where Pančić taught botany. The estate where the garden was established used to be an orchard of the king’s grandfather Jevrem, hence the garden was named <em>Jevremovac</em>. </p>
              </section>

              <img srcSet={`${botanickaBasta11} 450w, ${botanickaBasta1}`} alt="Botanical Garden 2" loading="lazy" />

              <section lang='en'>
                <p> The Glasshouse, located in the northeastern part of the Botanical Garden, was built in <strong>1892</strong> as a gift from King Milan, with the support of the Ministry of Education and Religious Affairs. It was constructed by the Dresden company Mozentin, known for its outstanding glasshouse projects across Europe. The greenhouse is designed in the <em>Victorian style</em>, featuring a central dome and two wings. It covers about 550 m² and houses around <strong>1000 different plant species</strong>, grouped according to geographical and ecological characteristics. In the southern wing and under the central dome are tropical plants resembling lush tropical rainforests, while the northern wing, dominated by succulent species, offers a glimpse into the world of deserts, stones, sand, and sun. The Glasshouse has become part of Belgrade’s cultural heritage, and after more than a century of neglect, it was thoroughly renovated in <strong>2014</strong>. </p>
              </section>

              <img srcSet={`${botanickaBasta33} 450w, ${botanickaBasta3}`} alt="Botanical Garden 3" loading="lazy" />

              <section lang='en'>
                <p> Japanese gardens reflect the aesthetic principle of <em>simplicity</em>, where lines and colors are subtle rather than striking. They are not designed to be symmetrical or grandiose; their goal is to showcase the beauty of nature in its authenticity and balance. The three key elements of Japanese gardens are <strong>stone, water, and plants</strong>. Stone is deeply respected in Japanese culture, often regarded as sacred, as it is believed to house spiritual entities. Placing stones, especially those resembling stepping stones over water, symbolizes mountains. Grouping stones in threes often reflects the symbolism of the triad — heaven, earth, and man — directing natural energy. Water, on the other hand, represents oceans and the continuous change that is inseparable from nature. In Japanese gardens, water streams and pools not only complete the landscape but also add an auditory dimension, reminding us of the constant changes in the world around us. Plants in Japanese gardens are not chosen randomly; each plant carries deep rooted symbolism. Pine, for example, symbolizes <strong>longevity and love</strong>, because it becomes more beautiful and majestic with age. The cherry tree represents <em>eternal youth and spring</em>, while maples, whose leaves fall in autumn, remind us of the inevitable transience of life, the cycle of birth and death. </p>
              </section>

              <img srcSet={`${botanickaBasta44} 450w, ${botanickaBasta4}`} alt="Botanical Garden Glasshouse 1" loading="lazy" />

              <section lang='en'>
                <p> The interior of the Jevremovac Glass Botanical Garden is a true oasis where diverse plant species from tropical, subtropical, and Mediterranean regions meet. The greenhouse, built in Victorian style, covers about 550 m² and is divided into several sections, each with a specific flora and unique ecosystem. Under the dome of the greenhouse, tropical plants occupy the central space, creating a lush and lavish atmosphere reminiscent of tropical rainforests. Here you can see giant palms, fig species, and orchids that bloom in vivid colors, bringing a touch of exoticism. Plants like Heliconia, with their unusual, colorful flowers, add spectacular color to the space, while climbing plants spread around the trees and climb the glass walls. </p>
              </section>

              <img
                srcSet={`${botanickaBasta55} 450w, ${botanickaBasta5}`}
                alt="Botanical Garden Glasshouse 2"
                loading="lazy"
              />

              <section lang='en'>
                <p> The Botanical Garden covers an area of <strong>5 hectares</strong>, within which there is also a 500 square meter glasshouse, as well as the Institute of Botany with a library. In the outdoor area, just under <strong>1,000 species of trees, shrubs, and plants</strong> are cultivated, originating from European and exotic regions. The glasshouse also contains over 1,000 species of plant specimens of various sizes and significance. The Institute of Botany houses a herbarium with a rich collection of plants, comprising about 120,000 herbarium sheets and over 300,000 specimens (dried biological material). Additionally, it holds a valuable library, with over 7,000 books and around 300 scientific and professional journals. </p>
              </section>

              <img
                srcSet={`${botanickaBasta66} 450w, ${botanickaBasta6}`}
                alt="Botanical Garden Belgrade"
                loading="lazy"
              />

              <section lang='en'>
                <p> In the northern part of the greenhouse, the dry climate is represented by succulents and cacti. Here plants such as <strong>agaves and saguaros</strong> dominate, while their fleshy leaves store water, allowing them to survive in dry conditions. Interestingly, these plants are perfectly adapted to extreme conditions, and their appearance often resembles the secrets of desert worlds. The glass space also contains aquatic plants, which grow in humid areas of the greenhouse. There are beautiful lotuses and water lilies, which with their magnificent flowers float on the surface of small pools, adding a calm and <em>zen atmosphere</em> to the space. It is also interesting that the greenhouse was reconstructed in <strong>2014</strong>, after being neglected for decades. This reconstruction allowed the return of the original look of the greenhouse, as well as adaptation to modern standards for plant conservation. The Glasshouse is now not only a natural paradise but also a cultural asset that offers visitors insight into the diversity of plant species from all continents, making it a true treasure of Belgrade. </p>
              </section>


            </>
          )}

      </div>

    </>
  );
};


export default BotanickaBata;