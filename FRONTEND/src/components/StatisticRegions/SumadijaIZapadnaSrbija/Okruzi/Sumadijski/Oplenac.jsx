/* eslint-disable react/no-unknown-property */
import oplenac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/desktop/oplenac6.jpg";
import oplenac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/desktop/oplenac1.jpg";
import oplenac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/desktop/oplenac2.jpg";
import oplenac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/desktop/oplenac3.jpg";
import oplenac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/desktop/oplenac4.jpg";
import oplenac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/desktop/oplenac5.jpg";
import oplenac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/desktop/oplenac7.jpg";
import oplenac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/mobile/Moplenac6.jpg";
import oplenac22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/mobile/Moplenac1.jpg";
import oplenac33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/mobile/Moplenac2.jpg";
import oplenac44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/mobile/Moplenac3.jpg";
import oplenac55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/mobile/Moplenac4.jpg";
import oplenac66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/mobile/Moplenac5.jpg";
import oplenac77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/Oplenac/mobile/Moplenac7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useContextAuth } from "../../../../../Context";
import { sumadijskiOkrugPathRoutes } from "./SumadijskiOkrugPathRoutes";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Oplenac = () => {
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
            ? "Oplenac – Hram Svetog Đorđa i mauzolej Karađorđevića | Srbija Wonders"
            : "Oplenac – Church of St. George and the Karađorđević Mausoleum | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Hram Svetog Đorđa na Oplencu je veličanstveni mauzolej dinastije Karađorđević. Saznajte više o istoriji Topole, kraljevskoj kući i kulturnom značaju ovog kompleksa u srcu Šumadije."
              : "The Church of St. George at Oplenac is a majestic mausoleum of the Karađorđević dynasty. Explore the history of Topola, the royal residence, and the cultural legacy of this site in central Serbia."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Oplenac, Hram Svetog Đorđa, Topola, Karađorđević, Karađorđe, mauzolej, kralj Petar Prvi, kuća kralja Petra, istorija Srbije, spomenik Karađorđu"
              : "Oplenac, Church of St. George, Topola, Karadjordjevic, Karadjordje, mausoleum, King Peter I, Royal House, Serbian history, monument to Karadjordje"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/oplenac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/oplenac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/oplenac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/oplenac"
        />
      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(sumadijskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${oplenac11} 450w, ${oplenac1} `} alt="Oplenac 1" />

        <h1 style={{ color: "white" }}>Oplenac</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p> Hram <strong>Svetog Đorđa</strong> i mauzolej dinastije <strong>Karađorđević</strong> podignuti su na samom vrhu stene brda <strong>Oplenac</strong>. Kameni krš ovog uzvišenja bio je prepun krivih stabala jedne vrste hrasta, koja su zbog svog nepravilnog, razgranatog oblika, domaćini koristili za opaljenje – drvene delove na seoskim kolima. Tako je brdo i dobilo ime <em>Oplenac</em>. </p>
              </section>

              <img srcSet={`${oplenac22} 450w, ${oplenac2}`} alt="Oplenac 2" />

              <section lang="sr">
                <p> Izuzetan geografski položaj grada <strong>Topola</strong>, smeštenog na padinama i podnožju brda <strong>Oplenac</strong>, na strateškom raskršću puteva koji povezuju Beograd, Kragujevac, Rudnik i Šabac, sa dalekim pogledima na okolne bregove <em>Šumadije</em> i plodne predela <em>Pomoravlja</em>, omogućio je ovom malom gradu da postane političko-administrativni centar oslobođene Srbije u vreme <strong>Karađorđa</strong>. Stari naziv grada bio je <em>Kameniica</em>, po istoimenoj rečici koja protiče pored današnjeg naselja. Ime <strong>Topola</strong> prvi put se pojavljuje u zvaničnim popisima austrijskih kartografa iz početka <strong>18. veka</strong>. Prema predaji, na raskrsnici pomenutih puteva, gde su se okupljali i odmarali trgovci, izraslo je veliko drvo <em>topole</em> čiji je hlad bio savršen za odmor putnicima. Kako je to drvo postalo poznato, mesto je ubrzo dobilo ime po njemu, a zatim i celokupno naselje. </p>
              </section>

              <img srcSet={`${oplenac33} 450w, ${oplenac3}`} alt="Crkva Svetog Djordja na Oplencu" />

              <section lang="sr">
                <p> <strong>Topola</strong> je doživela svoj prvi uspon tokom <strong>Prvog srpskog ustanka</strong>. Vođa srpske revolucije, <strong>Karađorđe Petrović</strong>, rođen u obližnjem selu <em>Viševcu</em>, nastanio se pred ustanak u blizini grada, u zaseoku <em>Krćevec</em>. Kao Vrhovni vođa, Karađorđe je učinio Topolu glavnim centrom oslobođene Srbije. Između 1811. i 1813. godine, podignut je utvrđeni grad s tropratnim kulama i bedemima, sa šancima za odbranu i vojnu obuku. Unutar tvrđave nalazili su se porodični i gostinski konaci, kao i crkva posvećena <strong>Presvetoj Bogorodici</strong>, poznatija kao <em>Karađorđeva crkva</em>. Zvonik crkve bio je smešten u jugoistočnoj kuli, a zvona koja su se oglasila prvi put u slobodnoj Srbiji izlivena su u <em>Beogradskoj tvrđavi</em>. Nakon sloma ustanka i povratka turskih trupa, Karađorđev grad je srušen i zapaljen. Nakon dolaska kneza Miloša i ubistva Karađorđa, Topola je izgubila svoj prvobitni značaj. </p>
              </section>

              <img srcSet={`${oplenac77} 450w, ${oplenac7}`} alt="Oplenac 3" />

              <section lang="sr">
                <p> Ovaj kraj je doživeo novi procvat tokom vladavine Karađorđevog sina, kneza <strong>Aleksandra</strong>, koji је sa velikom pažnjom obnovio očevu baštinu, vinograde i voćnjake na jugoistočnim padinama Oplenca. Tamo je izgradio prostranu kuću i vinogradarski podrum. Knez Aleksandar je, obnavljajući očevu imanje, privukao bogate i uticajne ljude, što je Topolu brzo transformisalo u šarmantnu varošicu sa lepšim, čvršće građenim kućama i prodavnicama. Međutim, povratak <strong>Obrenovića</strong> na vlast 1858. godine doveo je do dužeg perioda stagnacije u ovom delu zemlje, koji je trajao sve do 1903. godine. Nakon tragične smrti kneza <strong>Mihaila</strong>, namestništvo je stavilo <em>Karađorđev grad</em> na licitaciju, a meštani Topole i okolnih sela usmerili su napore da prikupe sredstva i otkupe Karađorđevu crkvu za svoju crkvenu zajednicu. Nažalost, napušteni ostaci Karađorđevog grada su nakon potiskivanja antiobrenovićevskog ustanka iz 1877. godine potpuno uništeni. </p>
              </section>

              <img srcSet={`${oplenac44} 450w, ${oplenac4}`} alt="Oplenac 4" />

              <section lang="sr">
                <p> Dolaskom <strong>Kralja Petra I</strong> na vlast 1903. godine, Topola, kao rodni grad Karađorđevića, ulazi u novi period napretka. Već naredne godine, varošica se odvaja od sela i postaje samostalna opština i trgovačko-zanatsko naselje. S obzirom na to da je Kralj napustio svoju domovinu kao dete i proveo 45 godina u izgnanstvu, nije iznenađujuće što je osećao duboku nostalgičnost i vezanost za kraj iz kojeg potiče. Kralj Petar je ubrzo u potpunosti posvetio svoje napore ostvarenju dugogodišnje želje i ispunjenju amaneta svojih roditelja, da se u Topoli izgradi veliki hram, u kojem bi se svi članovi porodice <strong>Karađorđević</strong> sahranjivali. Uzimajući u obzir njegovu želju, uzvišeni brežuljak <strong>Oplenac</strong> je delovao kao savršeno mesto za ostvarenje ovog životnog sna. </p>
              </section>

              <img srcSet={`${oplenac55} 450w, ${oplenac5}`} alt="Spomenik Karađorđu na Oplencu" />

              <section lang="sr">
                <p> Spomenik <strong>Karađorđu</strong> u Oplencu postavljen je 1911. godine kao čast vođi <strong>Prvog srpskog ustanka</strong>, osnivaču dinastije <strong>Karađorđević</strong> i simbolu borbe za slobodu Srbije. Spomenik se nalazi u neposrednoj blizini crkve <strong>Svetog Đorđa</strong>, na Oplencu, u blizini Karađorđevog mauzoleja, u kojem je kasnije sahranjeno više članova dinastije Karađorđević. Spomenik je delo vladarskog umetničkog vladara i vajara <strong>Đorđa Jovanovića</strong>, a prikazuje Karađorđa u punoj borbenoj opremi, uz njegovu prepoznatljivu figuru na konju. Ovaj monument simbolizuje Karađorđa kao lidera srpske borbe za slobodu i kao velikog vođu srpskog naroda. Spomenik je deo kulturnog nasleđa koje čuva sećanje na značajnu ličnost iz srpske istorije i postao je jedan od simbola Topole i Oplenca. </p>
              </section>


              <img srcSet={`${oplenac66} 450w, ${oplenac6}`} alt="Kuća Kralja Petra Prvog" />
              <section lang="sr">
                <p> Kuća <strong>Kralja Petra I</strong> u Oplencu, poznata i kao "<em>Kraljevska kuća</em>", bila je letnjikovac koji je izgradio Kralj Petar I Karađorđević. Smeštena je na padinama brda <strong>Oplenac</strong>, u blizini crkve Svetog Đorđa i Karađorđevog mauzoleja. Kralj Petar I je ovo imanje koristio kao svoj privatni rezidencijalni prostor, gde je provodio vreme u mirnom okruženju, daleko od političkih obaveza. Kuća je, zajedno sa okolnim parkom, imala veliki značaj za kralja, koji je želeo da povrati kontakt sa svojom porodicom i narodnim korenima. U njenoj neposrednoj blizini nalazi se i vinski podrum, koji je takođe bio deo kraljevskog imanja. Zgrada ima jednostavnu ali elegantnu arhitekturu, sa naglaskom na funkcionalnost i udobnost. Nakon smrti Kralja Petra I, kuća je prešla u vlasništvo njegove porodice, a danas je deo turističke ponude Oplenca i popularno je mesto za posetioce koji žele da saznaju više o životu i nasleđu srpske kraljevske dinastije Karađorđević. </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  The Church of <strong>Saint George</strong> and the mausoleum of the <strong>Karađorđević</strong> dynasty are built on the very top of the rocky hill of <strong>Oplenac</strong>. The rocky terrain of this elevation was once full of crooked oak trees, whose irregular, branched shapes the locals used for burning – wooden parts for village carts. This is how the hill got its name, <em>Oplenac</em>.
                </p>
              </section>

              <img srcSet={`${oplenac22} 450w, ${oplenac2}`} alt="Oplenac 2" />

              <section lang="en">
                <p>
                  The exceptional geographic position of the town of <strong>Topola</strong>, located on the slopes and foothills of the <strong>Oplenac</strong> hill, at the strategic crossroads connecting Belgrade, Kragujevac, Rudnik, and Šabac, with distant views of the surrounding <em>Šumadija</em> hills and fertile <em>Pomoravlje</em> plains, allowed this small town to become the political and administrative center of liberated Serbia during the time of <strong>Karađorđe</strong>. The old name of the town was <em>Kamenica</em>, after the eponymous creek that flows near the present-day settlement. The name <strong>Topola</strong> first appeared in official Austrian cartographers’ records from the early <strong>18th century</strong>. According to legend, at the crossroads of these roads where merchants gathered and rested, a large <em>poplar</em> tree grew, providing perfect shade for travelers. As the tree became well-known, the place soon took its name, followed by the entire settlement.
                </p>
              </section>

              <img srcSet={`${oplenac33} 450w, ${oplenac3}`} alt="Church of Saint George at Oplenac" />

              <section lang="en">
                <p>
                  <strong>Topola</strong> experienced its first rise during the <strong>First Serbian Uprising</strong>. The leader of the Serbian revolution, <strong>Karađorđe Petrović</strong>, born in the nearby village of <em>Viševac</em>, settled near the town before the uprising, in the hamlet of <em>Krćevec</em>. As Supreme Leader, Karađorđe made Topola the main center of liberated Serbia. Between 1811 and 1813, a fortified town with three-story towers and ramparts was built, featuring trenches for defense and military training. Inside the fortress were family and guest quarters, as well as a church dedicated to the <strong>Holy Virgin</strong>, better known as the <em>Karađorđe’s Church</em>. The church bell tower was located in the southeast tower, and the bells that rang for the first time in free Serbia were cast in the <em>Belgrade Fortress</em>. After the uprising’s collapse and the return of Turkish troops, Karađorđe’s town was destroyed and burned. After the arrival of Prince Miloš and Karađorđe’s assassination, Topola lost its original importance.
                </p>
              </section>

              <img srcSet={`${oplenac77} 450w, ${oplenac7}`} alt="Oplenac 3" />

              <section lang="en">
                <p>
                  This region experienced a new bloom during the rule of Karađorđe’s son, Prince <strong>Alexander</strong>, who carefully restored his father’s heritage, vineyards, and orchards on the southeastern slopes of Oplenac. There he built a spacious house and a winemaking cellar. Prince Alexander, renewing his father’s estate, attracted wealthy and influential people, quickly transforming Topola into a charming town with nicer, sturdier houses and shops. However, the return of the <strong>Obrenović</strong> dynasty to power in 1858 led to a longer period of stagnation in this part of the country, lasting until 1903. After the tragic death of Prince <strong>Michael</strong>, the regency put the <em>Karađorđe’s town</em> up for auction, and the residents of Topola and neighboring villages directed their efforts to raise funds and redeem Karađorđe’s church for their religious community. Unfortunately, the abandoned remains of Karađorđe’s town were completely destroyed after the suppression of the anti-Obrenović uprising in 1877.
                </p>
              </section>

              <img srcSet={`${oplenac44} 450w, ${oplenac4}`} alt="Oplenac 4" />

              <section lang="en">
                <p>
                  With the arrival of <strong>King Peter I</strong> to power in 1903, Topola, as the birthplace of the Karađorđević dynasty, entered a new period of progress. Already the following year, the town separated from the village and became an independent municipality and a trade and craft settlement. Considering that the King left his homeland as a child and spent 45 years in exile, it is unsurprising that he felt a deep nostalgia and attachment to the region he came from. King Peter soon fully devoted his efforts to fulfilling the long-standing wish and the fulfillment of his parents’ legacy, to build a grand church in Topola where all members of the <strong>Karađorđević</strong> family would be buried. Taking into account his wish, the elevated hill of <strong>Oplenac</strong> seemed like the perfect place to realize this lifelong dream.
                </p>
              </section>

              <img srcSet={`${oplenac55} 450w, ${oplenac5}`} alt="Monument to Karađorđe at Oplenac" />

              <section lang="en">
                <p>
                  The monument to <strong>Karađorđe</strong> at Oplenac was erected in 1911 in honor of the leader of the <strong>First Serbian Uprising</strong>, founder of the <strong>Karađorđević</strong> dynasty and symbol of the struggle for Serbia’s freedom. The monument is located near the Church of <strong>Saint George</strong> at Oplenac, close to Karađorđe’s mausoleum, where several members of the Karađorđević family were later buried. The monument is the work of the royal artistic ruler and sculptor <strong>Đorđe Jovanović</strong>, depicting Karađorđe in full battle gear with his recognizable figure on horseback. This monument symbolizes Karađorđe as the leader of the Serbian fight for freedom and as a great leader of the Serbian people. It is part of the cultural heritage preserving the memory of an important figure in Serbian history and has become one of the symbols of Topola and Oplenac.
                </p>
              </section>

              <img srcSet={`${oplenac66} 450w, ${oplenac6}`} alt="King Peter I's House" />

              <section lang="en">
                <p>
                  The house of <strong>King Peter I</strong> at Oplenac, also known as the "<em>Royal House</em>", was a summer residence built by King Peter I Karađorđević. It is located on the slopes of the <strong>Oplenac</strong> hill, near the Church of Saint George and Karađorđe’s mausoleum. King Peter I used this estate as his private residential space, where he spent time in a peaceful environment, away from political duties. The house, along with the surrounding park, held great significance for the king, who wished to reconnect with his family and national roots. In its immediate vicinity is also a wine cellar, which was part of the royal estate. The building has simple yet elegant architecture, emphasizing functionality and comfort. After King Peter I’s death, the house passed into the ownership of his family, and today it is part of Oplenac’s tourist offer and a popular place for visitors who want to learn more about the life and legacy of the Serbian royal Karađorđević dynasty.
                </p>
              </section>


            </>
          )}

      </div >
    </>
  );
};


export default Oplenac;