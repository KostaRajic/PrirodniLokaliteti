/* eslint-disable react/no-unknown-property */
import pirot1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/desktop/pirot1.jpg";
import pirot2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/desktop/pirot2.jpg";
import pirot4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/desktop/pirot4.jpg";
import pirot5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/desktop/pirot5.jpg";
import pirot6 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/desktop/pirot6.jpg";
import pirot11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/mobile/pirotM1.jpg";
import pirot22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/mobile/pirotM2.jpg";
import pirot44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/mobile/pirotM4.jpg";
import pirot55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/mobile/pirotM5.jpg";
import pirot66 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/Pirot/mobile/pirotM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Pirot = () => {
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

        <title>{switchLanguage === 'rs' ? "Pirot – Grad tradicije, kulture i prirodnih lepota | Serbia Wonders" : "Pirot – A City of Tradition, Culture, and Natural Beauty | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Pirot, grad na jugoistoku Srbije, poznat po bogatoj istoriji, tradicionalnom kačkavalju, ćilimu i brojnim turističkim vrednostima poput Muzeja Ponišavlja i Pirotskog keja. Saznajte više o njegovim prirodnim i kulturnim znamenitostima."
            :
            "Pirot is a city in southeastern Serbia known for its rich history, traditional cheese and rugs, and numerous tourist attractions such as the Museum of Ponishavlje and Pirot promenade. Discover its natural and cultural landmarks."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Pirot, Pirotski kačkavalj, Pirotski ćilim, Muzej Ponišavlja, Pirotski kej, planinarski dom, Zavojsko jezero, Vrelo, Zvonačka banja, istorija Pirota, kultura Pirota"
            :
            "Pirot, Pirot cheese, Pirot rug, Museum of Ponishavlje, Pirot promenade, hiking lodge, Zavoj lake, Vrelo, Zvonačka spa, Pirot history, Pirot culture"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/pirot`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/pirot"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/pirot"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pirotski-okrug/pirot"
        />

      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pirotskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${pirot11} 450w, ${pirot1} `} alt="Pirot 1" loading="lazy" />

        <h2>Pirot</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Pirot</strong> je grad na jugoistoku Srbije sa bogatom kulturnom tradicijom i burnom istorijom. Nalazi se na značajnoj međunarodnoj transverzali – <em>Koridoru 10</em>, koji povezuje Evropu sa Azijom, a u srednjem veku bio je poznat kao <em>Via militaris</em>. <strong>Pirot</strong> je administrativni centar najveće opštine u Republici Srbiji, koja pored njega obuhvata i opštine <strong>Dimitrovgrad</strong>, <strong>Babušnica</strong> i <strong>Bela Palanka</strong>, dok je po površini od <em>1232 km²</em> na trećem mestu u zemlji. Nekada je bio značajan centar prerađivačke industrije – mlečnih proizvoda, kože, vune, drveta i tekstila.
                  <br /><br />
                  Vredno je pomenuti da je Pirot imao više grla stoke nego tadašnja <em>Kraljevina</em>, kasnije <em>SFR Jugoslavija</em>. Danas je poznat po <strong>pirotskom ovčijem kačkavalju</strong>, <strong>pirotskom ćilimu</strong> i auto-gumi <strong>Tigar MH</strong>.
                </p>
              </section>

              <img srcSet={`${pirot22} 450w, ${pirot2}`} alt="Pirot 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Pirot</strong> se nalazi u pograničnom području Srbije prema <strong>Bugarskoj</strong> i poseduje brojne <strong>turističke vrednosti</strong> koje se razlikuju po obliku i karakteristikama. <em>Priroda</em> dominira nad kulturno-istorijskim spomenicima, ali je za uspešnu turističku promociju potrebno primeniti princip <em>komplementarnosti</em> kako bi se prikazali svi potencijali ovog kraja.
                  <br /><br />
                  Turistički potencijali Pirota i okoline uključuju: <strong>Planinarski dom</strong>, <strong>Zavojsko jezero</strong>, <strong>Vrelo</strong>, <strong>Zvonačku banju</strong>. U samom gradu izdvajaju se <strong>Muzej Ponišavlja</strong>, radovi na obnovi <strong>Momčilovog grada</strong>, manastiri <strong>Sveti Đorđe</strong> kod sela <em>Temska</em> i <strong>Sveti Jovan Blagoslov</strong> (Poganovski manastir), kao i <strong>sportsko-rekreativni centar</strong> između reke Nišave i <em>HE „Pirot“</em>.
                </p>
              </section>

              <img srcSet={`${pirot44} 450w, ${pirot4}`} alt="Pirot 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Klima u <strong>Pirotu</strong> je umerena, sa izraženim godišnjim dobima. <em>Proleća</em> su vlažna i prijatna, <em>leta</em> topla, <em>jeseni</em> blage i duge, dok su <em>zime</em> hladne. Vetrovi često dolaze iz različitih pravaca. Tokom zimskih meseci dominiraju <strong>istočni</strong> i <strong>severni vetrovi</strong> (severac, košava), dok se u proleće javlja topliji <em>jugozapadni vetar</em> – <strong>razvigorac</strong>, koji povoljno utiče na rast biljaka. U ostatku godine, vetrovi sa severozapada i zapada donose padavine.
                  <br /><br />
                  <strong>Pirot</strong>, zajedno sa <strong>Nišom</strong> i okolinom, spada u <em>najsuvlje regione Srbije</em>. Najviše padavina ima u <em>maju</em>, <em>junu</em> i <em>oktobru</em>, dok su <em>januar</em>, <em>februar</em> i <em>jul</em> najsušniji meseci.
                </p>
              </section>

              <img srcSet={`${pirot55} 450w, ${pirot5}`} alt="Muzej Ponišavlja" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Muzej Ponišavlja</strong> osnovan je u <em>oktobru 1947. godine</em> odlukom <strong>Gradskog narodnog odbora Pirota</strong> pod nazivom <em>Narodni muzej</em>. Zbirka je prvobitno sadržala predmete poklonjene od građana. Godine <strong>1969.</strong> muzej dobija sadašnji naziv – <strong>Muzej Ponišavlja</strong>.
                  <br /><br />
                  Kao <strong>regionalna muzejska ustanova</strong> kompleksnog tipa, obuhvata aktivnosti zaštite, istraživanja i prezentacije <em>kulturno-umetničkih i istorijskih dobara</em> sa teritorije opština: <strong>Pirot</strong>, <strong>Dimitrovgrad</strong>, <strong>Babušnica</strong> i <strong>Bela Palanka</strong>. Organizaciju muzeja čine odeljenja za: <strong>arheologiju</strong>, <strong>etnologiju</strong>, <strong>numizmatiku</strong>, <strong>istoriju</strong> i <strong>istoriju umetnosti</strong>. Ukupan muzejski fond sadrži oko <em>6.500 predmeta</em>.
                  <br /><br />
                  Među izložbenim jedinicama ističu se: <strong>Galerija fresaka u Starom gradu</strong>, sa reprodukcijama iz <strong>manastira Svetog Jovana Bogoslova</strong> (zadužbina <strong>Konstantina Dejanovića</strong> u Poganovu), kao i dva legata: <strong>legat učitelja Ćire Rančića</strong> (dečija književnost) i <strong>legat učitelja Duška Ćirića</strong> (etnološko-istorijska građa). Muzej ima i <strong>depandanse</strong> u <strong>Babušnici</strong>, <strong>Beloj Palanci</strong> i <strong>Dimitrovgradu</strong>.
                </p>
              </section>

              <img srcSet={`${pirot66} 450w, ${pirot6}`} alt="Pirotski kej" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Pirotski kej</strong> je omiljeno šetalište građana Pirota. Reka <strong>Nišava</strong> je početkom <em>20. veka</em> često izazivala poplave. Profesor <strong>Pirotske gimnazije</strong>, <strong>Velimir Vukićević</strong>, predložio je izgradnju keja kao zaštitu od poplava. Radovi su počeli <em>1923. godine</em> uzvodno od Velikog mosta. Građani su učestvovali u izgradnji – bogatiji su davali donacije, a drugi radnu snagu.
                  <br /><br />
                  Do finalnog izgleda keja došlo je <strong>1933. godine</strong> zahvaljujući tadašnjem predsedniku opštine <strong>Svetozaru Misirliću</strong>, koji je inicirao sadnju drveća – lično je zalivao sadnice. Zasađene su <strong>lipe</strong> koje i danas krase kej. Tok <strong>Nišave</strong> uobličen je 60-ih godina prošlog veka nasipima i drvoredom. Početkom <em>21. veka</em>, kej je dodatno uređen i popločan <strong>kaldrmom</strong> iz ulice <em>Nikole Pašića</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en"> <p> <strong>Pirot</strong> is a town in southeastern Serbia with a rich cultural tradition and a turbulent history. It is located on a major international corridor—<em>Corridor 10</em>, which connects Europe with Asia, and in the Middle Ages it was known as the <em>Via Militaris</em>. <strong>Pirot</strong> is the administrative center of the largest municipality in the Republic of Serbia, which includes the municipalities of <strong>Dimitrovgrad</strong>, <strong>Babušnica</strong>, and <strong>Bela Palanka</strong>. With an area of <em>1,232 km²</em>, it is the third largest in the country. In the past, it was a significant center of processing industries—dairy, leather, wool, wood, and textiles. <br /><br /> It’s worth mentioning that Pirot once had more livestock than the then <em>Kingdom</em> and later the <em>SFR Yugoslavia</em>. Today, it is known for its <strong>Pirot sheep cheese (kačkavalj)</strong>, the traditional <strong>Pirot carpet (ćilim)</strong>, and the <strong>Tigar MH</strong> tire factory. </p> </section>
              <img srcSet={`${pirot22} 450w, ${pirot2}`} alt="Pirot 2" loading="lazy" />

              <section lang="en"> <p> <strong>Pirot</strong> is located in the border region of Serbia near <strong>Bulgaria</strong> and offers numerous <strong>tourist attractions</strong> of various forms and characteristics. <em>Nature</em> dominates over cultural-historical monuments, but for successful tourism promotion, it is essential to apply the principle of <em>complementarity</em> to present the full potential of the region. <br /><br /> Tourist attractions in and around Pirot include the <strong>Mountain Lodge</strong>, <strong>Lake Zavoj</strong>, <strong>Vrelo spring</strong>, and the <strong>Zvonačka Spa</strong>. In the town itself, notable sites include the <strong>Museum of Ponišavlje</strong>, restoration works on <strong>Momčilo’s Fortress</strong>, the monasteries of <strong>St. George</strong> near the village of <em>Temska</em> and <strong>St. John the Theologian</strong> (Poganovo Monastery), as well as a <strong>sports and recreation center</strong> located between the Nišava River and the <em>Pirot Hydroelectric Plant</em>. </p> </section>
              <img srcSet={`${pirot44} 450w, ${pirot4}`} alt="Pirot 3" loading="lazy" />

              <section lang="en"> <p> The climate in <strong>Pirot</strong> is moderate, with distinct seasons. <em>Springs</em> are humid and pleasant, <em>summers</em> are warm, <em>autumns</em> are mild and long, while <em>winters</em> are cold. Winds often come from various directions. During winter, <strong>eastern</strong> and <strong>northern winds</strong> (like the north wind and "košava") prevail, while in spring, a warmer <em>southwest wind</em>—<strong>“razvigorac”</strong>—appears, positively affecting plant growth. During the rest of the year, northwest and west winds bring precipitation. <br /><br /> <strong>Pirot</strong>, together with <strong>Niš</strong> and the surrounding area, is among the <em>driest regions in Serbia</em>. The highest precipitation occurs in <em>May</em>, <em>June</em>, and <em>October</em>, while <em>January</em>, <em>February</em>, and <em>July</em> are the driest months. </p> </section>
              <img srcSet={`${pirot55} 450w, ${pirot5}`} alt="Museum of Ponišavlje" loading="lazy" />

              <section lang="en"> <p> The <strong>Museum of Ponišavlje</strong> was founded in <em>October 1947</em> by decision of the <strong>City People’s Committee of Pirot</strong> under the name <em>People’s Museum</em>. The initial collection consisted of items donated by citizens. In <strong>1969</strong>, the museum was given its current name—<strong>Museum of Ponišavlje</strong>. <br /><br /> As a <strong>regional museum institution</strong> of a complex type, it covers activities in protection, research, and presentation of <em>cultural-artistic and historical heritage</em> from the municipalities of <strong>Pirot</strong>, <strong>Dimitrovgrad</strong>, <strong>Babušnica</strong>, and <strong>Bela Palanka</strong>. The museum includes departments for: <strong>archaeology</strong>, <strong>ethnology</strong>, <strong>numismatics</strong>, <strong>history</strong>, and <strong>art history</strong>. The total museum collection contains around <em>6,500 items</em>. <br /><br /> Among the key exhibits are the <strong>Fresco Gallery in the Old Town</strong>, with reproductions from the <strong>Monastery of St. John the Theologian</strong> (endowment of <strong>Konstantin Dejanović</strong> in Poganovo), as well as two legacy collections: <strong>the legacy of teacher Ćira Rančić</strong> (children’s literature) and <strong>the legacy of teacher Duško Ćirić</strong> (ethnological and historical materials). The museum also has <strong>branch facilities</strong> in <strong>Babušnica</strong>, <strong>Bela Palanka</strong>, and <strong>Dimitrovgrad</strong>. </p> </section>
              <img srcSet={`${pirot66} 450w, ${pirot6}`} alt="Pirot riverside promenade" loading="lazy" />

              <section lang="en"> <p> The <strong>Pirot promenade</strong> along the <strong>Nišava River</strong> is a favorite walking area for the people of Pirot. In the early <em>20th century</em>, the river frequently caused floods. A professor from the <strong>Pirot Gymnasium</strong>, <strong>Velimir Vukićević</strong>, proposed building a quay to protect against flooding. Construction began <em>in 1923</em> upstream from the Great Bridge. Citizens participated in the building—wealthier ones provided donations, while others offered labor. <br /><br /> The final layout of the quay was completed in <strong>1933</strong>, thanks to the then-mayor <strong>Svetozar Misirlić</strong>, who initiated the planting of trees—he personally watered the seedlings. <strong>Linden trees</strong> were planted, and they still adorn the promenade today. The riverbanks of the <strong>Nišava</strong> were reinforced with embankments and lined with trees during the 1960s. At the beginning of the <em>21st century</em>, the promenade was further improved and paved with <strong>cobblestones</strong> from <em>Nikola Pašić Street</em>. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default Pirot;