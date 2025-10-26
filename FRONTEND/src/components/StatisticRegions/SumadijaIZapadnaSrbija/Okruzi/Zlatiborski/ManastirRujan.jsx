/* eslint-disable react/no-unknown-property */
import rujan1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/desktop/manastirRujan1.jpg";
import rujan2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/desktop/manastirRujan2.jpg";
import rujan3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/desktop/manastirRujan3.jpg";
import rujan4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/desktop/manastirRujan4.jpg";
import rujan6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/desktop/manastirRujan6.jpg";
import rujan11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/mobile/MmanastirRujan1.jpg";
import rujan22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/mobile/MmanastirRujan2.jpg";
import rujan33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/mobile/MmanastirRujan3.jpg";
import rujan44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/mobile/MmanastirRujan4.jpg";
import rujan66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/mobile/MmanastirRujan6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirRujan = () => {
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
            ? "Manastir Rujan | Prva srpska štamparija i Rujansko četvorojevanđelje"
            : "Rujan Monastery | First Serbian Printing Press & Rujno Gospel"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Rujan kod Užica poznat je po prvoj štampariji u srednjovekovnoj Srbiji i Rujanskom četvorojevanđelju iz 1537. godine. Obnovljen manastir Svetog Georgija na obali jezera Vrutci."
              : "Rujan Monastery near Užice is famous for hosting the first printing press in medieval Serbia and the Rujno Gospel from 1537. Rebuilt monastery of Saint George on Lake Vrutci."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Rujan, Rujno četvorojevanđelje, prva štamparija u Srbiji, monah Teodosije, Užice, Vrutci, jezero Vrutci, srpska srednjovekovna kultura, štampa na drvetu"
              : "Rujan Monastery, Rujno Gospel, first Serbian printing press, monk Teodosije, Užice, Vrutci Lake, medieval Serbian culture, wooden print blocks"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-rujan`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-rujan"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-rujan"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-rujan"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${rujan11} 450w, ${rujan1} `} alt="Manastir Rujan 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Manastir Rujan</h1>

              <section lang="sr">
                <p>
                  <strong>Manastir Rujan</strong> je obnovljeni manastir iz <strong>15. veka</strong> koji danas
                  pripada <strong>Eparhiji žičkoj Srpske pravoslavne crkve</strong>. Nalazi se u selu
                  <strong>Vrutci</strong>, kod <strong>Užica</strong>, na desnoj obali istoimenog jezera. Manastirski
                  hram posvećen je <em>Svetom Velikomučeniku Georgiju</em>. Ime Rujan potiče od biljke
                  <em>ruj</em> koja raste u dolini reke <strong>Đetinje</strong>. Po njoj su ime dobili i oblast i sam
                  manastir – <strong>Rujno</strong>.
                </p>
              </section>

              <img srcSet={`${rujan22} 450w, ${rujan2} `} alt="Manastir Rujan 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Manastir ima poseban značaj za <strong>srpsku kulturu i istoriju</strong>, jer je upravo
                  u njemu nastala <strong>prva štamparija u srednjovekovnoj Srbiji</strong>. U toj
                  štampariji je <strong>1537. godine</strong> završeno štampanje <em>Četvorojevanđelja</em>,
                  poznatog kao <strong>Rujansko četvorojevanđelje</strong>. Ovaj posao je izveo, kako sam
                  za sebe kaže, „<em>grešni i ubog umom, bogat grehom, Hristu rab monah
                    Teodosije</em>“. Zbog nedostatka alata, materijala i novca za izlivanje
                  metalnih slova, siromašni monasi iz Rujna su <em>slova rezali od drveta</em>.
                </p>
              </section>

              <img srcSet={`${rujan33} 450w, ${rujan3} `} alt="Manastir Rujno 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Verovalo se da su monasi iz Rujna izrezivali celu stranicu izjedna na
                  drvenoj ploči, ali savremena istraživanja sugerišu da su ipak <strong>rezali i
                    slagali slovo po slovo</strong>. Na taj način, drvenu stranicu su otiskivali na
                  hartiji, koja je verovatno bila <em>mletačkog porekla</em>. Pojedini istraživači
                  ističu da su neka od tih slova imala <em>oble, nejednake i grube oblike</em>,
                  dok su druga bila „<em>uža, ujednačenija i elegantnija</em>“. Drugi istraživači
                  identifikuju čak <strong>četiri različita tipa slova</strong>, što ukazuje na mogućnost
                  da su uz monaha Teodosija radila još <strong>tri monaha</strong>, od kojih je svaki imao
                  svoj <em>prepoznatljiv stil rezbarenja drveta</em>.
                </p>
              </section>

              <img srcSet={`${rujan44} 450w, ${rujan4} `} alt="Manastir Rujno 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Rujansko četvorojevanđelje</strong> štampano je u <strong>dve boje</strong> – <em>crvenoj i crnoj</em>.
                  Prvo su se bojenjem i otiskivanjem radila crna slova, a zatim su se
                  posebno bojala i otiskivala crvena. U ovoj knjizi, ukoričenoj u <em>drvene
                    korice obložene kožom</em>, crvena boja nije krasila samo pojedina slova, već
                  je ceo kraj oko crkve i manastira bio <em>obojen crvenilom</em>. Ime <strong>Rujno</strong>
                  potiče od biljke <em>ruj</em>, ili <em>rujevina</em>, koja je rasla širom ovog kraja i svojim
                  crvenim nijansama obojila i <em>pejzaž i oblake</em>. Rujevina se koristila za
                  pravljenje crvene boje, kojom su verovatno bojena i slova monaha
                  Teodosija. <strong>Jedini potpuno sačuvan primerak</strong> Rujanskog četvorojevanđelja
                  čuva se u <strong>Nacionalnoj biblioteci u Pragu</strong>, kao deo <em>Šafarikove zbirke</em>, i
                  sadrži ukupno <strong>300 listova</strong>. <strong>Drugi primerak</strong>, delimično oštećen i sa
                  <strong>296 listova</strong>, nalazi se u <strong>Ruskoj nacionalnoj biblioteci</strong> u <em>Sankt
                    Peterburgu</em>.
                </p>
              </section>

              <img srcSet={`${rujan66} 450w, ${rujan6} `} alt="Manastir Rujno 5" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Nacionalna biblioteka Srbije</strong> je posedovala jedan primerak Rujanskog
                  četvorojevanđelja, ali je on <em>uništen u bombardovanju Beograda 1941. godine</em>.
                  Samo jedan <em>odlomak od 92 lista</em> čuva se u <strong>muzeju Srpske akademije nauka i
                    umetnosti</strong>. Pretpostavlja se da su <strong>Turci srušili manastir Rujno oko 1567. godine</strong>.
                  Ubrzo nakon toga, otkrili su štampariju, spalili je, a manastir uništili.
                  Preživeli monasi su pobegli u <strong>manastir Raču</strong>. Prema jednom zapisu iz
                  <strong>1857. godine</strong>, od manastirske crkve je ostao samo <em>kamen časne trpeze</em>,
                  dok su stubovi odneseni i ugrađeni u <em>zgradu medrese</em> (muslimanske srednje
                  škole) u Užicu. Nakon izgradnje <strong>brane „Vrutci”</strong> na Đetinji <strong>1980. godine</strong>,
                  manastir je <em>potopljen</em> formiranjem veštačkog jezera Vrutci. Manastir je
                  obnovljen u periodu od <strong>2004. do 2006. godine</strong>, kada je osveštan i naseljen
                  monasima.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Rujan Monastery</h1>

              <section lang="en">
                <p>
                  <strong>Rujan Monastery</strong> is a restored monastery from the <strong>15th century</strong> that
                  today belongs to the <strong>Žiča Diocese of the Serbian Orthodox Church</strong>. It is located in the village
                  of <strong>Vrutci</strong>, near <strong>Užice</strong>, on the right bank of the lake bearing the same name.
                  The monastery church is dedicated to <em>Saint George the Great Martyr</em>.
                  The name "Rujan" comes from the <em>ruj</em> plant (dyer's sumac), which grows in the valley of the <strong>Đetinja River</strong>.
                  The area and the monastery itself were named <strong>Rujno</strong> after this plant.
                </p>
              </section>

              <img srcSet={`${rujan22} 450w, ${rujan2} `} alt="Rujan Monastery 2" loading="lazy" />

              <section lang="en">
                <p>
                  The monastery holds special significance for <strong>Serbian culture and history</strong>,
                  as it was the site of the <strong>first printing house in medieval Serbia</strong>.
                  In this printing house, in <strong>1537</strong>, the printing of the <em>Four Gospels</em>,
                  known as the <strong>Rujno Four Gospels</strong>, was completed. The work was carried out by
                  a monk who described himself as “<em>sinful and poor in mind, rich in sin, a servant of Christ, monk Theodosije</em>.”
                  Due to a lack of tools, materials, and funds to cast metal letters,
                  the impoverished monks of Rujno <em>carved the letters out of wood</em>.
                </p>
              </section>

              <img srcSet={`${rujan33} 450w, ${rujan3} `} alt="Rujno Monastery 3" loading="lazy" />

              <section lang="en">
                <p>
                  It was once believed that the monks of Rujno carved entire pages on a single wooden block,
                  but modern research suggests they actually <strong>carved and assembled the text letter by letter</strong>.
                  In this way, the wooden block was used to print on paper, which was likely of <em>Venetian origin</em>.
                  Some researchers note that some of the letters had <em>round, uneven, and rough shapes</em>,
                  while others were “<em>narrower, more uniform, and elegant</em>.”
                  Other scholars identify <strong>four distinct types of letters</strong>, suggesting that, in addition to monk Theodosije,
                  <strong>three other monks</strong> may have worked with him, each with a <em>distinct woodcarving style</em>.
                </p>
              </section>

              <img srcSet={`${rujan44} 450w, ${rujan4} `} alt="Rujno Monastery 4" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>Rujno Four Gospels</strong> was printed in <strong>two colors</strong> — <em>red and black</em>.
                  First, the black letters were printed, followed by the red ones. The book was bound in
                  <em>wooden covers lined with leather</em>, and red ink did not only highlight certain letters
                  but also symbolically <em>colored the entire region</em> around the church and monastery.
                  The name <strong>Rujno</strong> comes from the plant <em>ruj</em> or <em>rujevina</em> (dyer’s sumac),
                  which grew abundantly in the region and gave the <em>landscape and clouds their red hues</em>.
                  The plant was used to produce red dye, which was likely used for the red letters
                  carved by monk Theodosije. The <strong>only fully preserved copy</strong> of the Rujno Four Gospels
                  is kept in the <strong>National Library in Prague</strong> as part of the <em>Šafárik Collection</em>,
                  and it contains a total of <strong>300 pages</strong>. A <strong>second copy</strong>, partially damaged and
                  containing <strong>296 pages</strong>, is housed in the <strong>Russian National Library</strong> in <em>Saint Petersburg</em>.
                </p>
              </section>

              <img srcSet={`${rujan66} 450w, ${rujan6} `} alt="Rujno Monastery 5" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>National Library of Serbia</strong> once owned a copy of the Rujno Four Gospels,
                  but it was <em>destroyed during the bombing of Belgrade in 1941</em>.
                  Only one <em>fragment of 92 pages</em> is preserved in the <strong>Museum of the Serbian Academy of Sciences and Arts</strong>.
                  It is believed that the <strong>Turks destroyed Rujno Monastery around 1567</strong>.
                  Shortly after, they discovered the printing house, burned it down, and demolished the monastery.
                  The surviving monks fled to <strong>Rača Monastery</strong>. According to a record from
                  <strong>1857</strong>, only the <em>stone altar table</em> remained from the monastery church,
                  while the columns were taken and built into the <em>medresa building</em> (Muslim secondary school) in Užice.
                  After the construction of the <strong>“Vrutci” dam</strong> on the Đetinja River in <strong>1980</strong>,
                  the monastery was <em>submerged</em> by the formation of the artificial Vrutci Lake.
                  The monastery was restored between <strong>2004 and 2006</strong>, when it was consecrated and repopulated by monks.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default ManastirRujan;