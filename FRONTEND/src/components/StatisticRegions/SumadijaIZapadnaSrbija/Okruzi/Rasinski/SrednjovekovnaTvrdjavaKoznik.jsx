/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import koznik1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Koznik/desktop/koznik1.jpg";
import koznik2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Koznik/desktop/koznik2.jpg";
import koznik3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Koznik/desktop/koznik3.jpg";
import koznik4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Koznik/desktop/koznik4.jpg";
import koznik5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Koznik/desktop/koznik5.jpg";
import koznik11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Koznik/mobile/Mkoznik1.jpg";
import koznik22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Koznik/mobile/Mkoznik2.jpg";
import koznik33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Koznik/mobile/Mkoznik3.jpg";
import koznik44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Koznik/mobile/Mkoznik4.jpg";
import koznik55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Koznik/mobile/Mkoznik5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const TvrdjavaKoznik = () => {
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
            ? 'Srednjovekovni grad Koznik – Tvrđava kneza Lazara iznad doline Rasine | Srbija Wonders'
            : 'Medieval Fortress Koznik – Lazar’s Stronghold Over Rasina Valley | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Koznik je jedno od najbolje očuvanih srednjovekovnih utvrđenja u Srbiji, smešteno iznad doline Rasine, sa osam kula, bogatom istorijom i legendama o Jerini.'
              : 'Koznik is one of the best-preserved medieval fortresses in Serbia, towering above the Rasina Valley, with eight towers, rich history, and legends about Jerina.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Koznik, srednjovekovni grad, utvrđenje, Jerinin grad, tvrđava, knez Lazar, Radič Postupović, Rasina, Brus, istorija Srbije, srednji vek'
              : 'Koznik, medieval fortress, stronghold, Jerina’s town, Lazar fortress, Rasina, Brus, Radič Postupović, Serbia history, medieval Serbia'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/tvrdjava-koznik`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/tvrdjava-koznik"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/tvrdjava-koznik"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/tvrdjava-koznik"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(rasinskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${koznik11} 450w, ${koznik1} `} alt="Srpski srednjovekovni grad Koznik 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Srednjovekovni grad Koznik</h1>

              <section lang="sr">
                <p>
                  <strong>Srednjovekovni grad Koznik</strong> jedno je od <strong>najbolje očuvanih utvrđenja u Srbiji</strong>.
                  Zahvaljujući svom <strong>strateškom položaju</strong> na visini većoj od <strong>900 metara</strong>,
                  i nakon <strong>sedam vekova</strong>, dominira <strong>dolinu Rasine</strong>, <strong>selima Brusa</strong>,
                  <strong> Kopaoničkog pobrđa</strong> i <strong>Aleksandrovačke Župe</strong>.
                  <br />
                  <br />
                  Tvrđava Koznik spada među <strong>najpoznatija srednjovekovna utvrđenja regiona</strong>, a njena
                  popularnost raste iz godine u godinu. Tome doprinose <strong>kulturno-umetničke manifestacije</strong>
                  posvećene <strong>vitezovima</strong> i <strong>plemstvu</strong>, brojne <strong>pešačke ture</strong>,
                  kao i blizina <strong>turističkog centra Kopaonika</strong>.
                </p>
              </section>

              <img srcSet={`${koznik22} 450w, ${koznik2}`} alt="Srpski srednjovekovni grad Koznik 2" />

              <section lang="sr">
                <p>
                  <strong>Koznik</strong> je izgrađen na <strong>uzvišenju</strong> koje sa tri strane okružuju
                  <strong> strme stene</strong>, što ga čini izuzetno nepristupačnim. Utvrđenje je nepravilnog oblika,
                  usklađeno sa prirodnim terenom, i sastoji se od <strong>osam četvorougaonih kula</strong>, raspoređenih
                  na približno jednakim udaljenostima.
                  <br />
                  <br />
                  Građevinski stil u <strong>Moravskom maniru</strong> ukazuje da je Koznik verovatno sagrađen tokom
                  <strong> vladavine kneza Lazara Hrebeljanovića (1371–1389)</strong>. Prvi put se pominje
                  <strong> 8. avgusta 1381. godine</strong> u <strong>Lazarevoj povelji</strong>, kojom se manastiru
                  Lavra Svetog Atanasija na Svetoj Gori dodeljuju prava na Koznik.
                  <br />
                  <br />
                  Kasnije, <strong>Stefan Lazarević</strong> izdaje dve povelje <strong>velikašu Radiču Postupoviću</strong>,
                  dodeljujući mu sela u okolini Koznika. Nakon <strong>osmanske invazije</strong>, Koznik pada pod
                  <strong> tursku vlast</strong>, a 1444. godine, <strong>Segedinskim mirom</strong> biva vraćen
                  <strong> despotu Đurđu Brankoviću</strong>.
                  <br />
                  <br />
                  Samo deset godina kasnije, <strong>Turci ponovo zauzimaju Koznik</strong> i dodatno ga utvrđuju.
                  Tokom <strong>austrougarske ofanzive 1689.</strong>, <strong>srpski ustanici</strong> osvajaju tvrđavu,
                  ali nakon <strong>propasti ofanzive</strong> i <strong>Velike seobe Srba</strong>, Koznik biva napušten.
                </p>
              </section>

              <img srcSet={`${koznik33} 450w, ${koznik3}`} alt="Srpski srednjovekovni grad Koznik 3" />

              <section lang="sr">
                <p>
                  <strong>Radič Postupović</strong>, savremenik <strong>despota Đurađa Brankovića</strong> i njegove
                  supruge <strong>Jerine</strong>, nesumnjivo je učestvovao u <strong>utvrđivanju i proširenju Koznika</strong>.
                  <br />
                  <br />
                  U skladu sa velikim tvrđavama tog vremena, poput <strong>Smedereva</strong>, jasno je da su
                  <strong> osmanske pretnje</strong> uticale na <strong>ojačavanje postojećih utvrđenja</strong>.
                  <br />
                  <br />
                  <strong>Narodne pesme</strong> beleže teške <strong>poreze</strong> i <strong>radne obaveze</strong> naroda,
                  za koje je odgovornom smatrana <strong>Jerina</strong>, zbog čega je Koznik poznat i kao
                  <strong> Jerinin grad</strong>.
                  <br />
                  <br />
                  Prema <strong>legendama</strong>, trud uložen u gradnju bio je ogroman. Čak su i <strong>životinje</strong>,
                  naročito <strong>koze</strong>, bile korišćene za prenos materijala. Otuda i naziv <strong>Koznik</strong>.
                  <br />
                  <br />
                  Još jedna priča govori o <strong>bahatosti Jerine</strong>, koja je na mestu zvanom <strong>Skačak</strong>
                  naredila da se <strong>Rasina</strong> poplavi od <strong>Pleša do Mitrovog Polja</strong>, kako bi se
                  <strong>kupala</strong> i <strong>vozila lađom</strong>. Sve je to urađeno kako bi se zadovoljili njeni hirovi.
                </p>
              </section>

              <img srcSet={`${koznik44} 450w, ${koznik4}`} alt="Jerinin Grad" />

              <section lang="sr">
                <p>
                  <strong>Stari grad Koznik</strong> izgrađen je na uzvišenju okruženom <strong>strmim stenama</strong>,
                  osim sa <strong>zapadne strane</strong>, koja je jedini pristup tvrđavi.
                  <br />
                  <br />
                  Kontura tvrđave prati <strong>prirodni reljef</strong>. Dužina utvrđenja je manja od <strong>60 metara</strong>,
                  a širina ne prelazi <strong>45 metara</strong>. <strong>Bedemi</strong> su ojačani <strong>kvadratnim kulama</strong>
                  koje su ravnomerno raspoređene.
                  <br />
                  <br />
                  Na najvišoj tački, u sredini severnog bedema, nalazi se <strong>Donžon kula</strong>, najverovatnije sa
                  <strong> stambenom funkcijom</strong>, zajedno sa još nekoliko kula u sklopu tvrđave. Ukupno je osam kula,
                  dok su <strong>temelji srušenih kula</strong> i dalje vidljivi.
                  <br />
                  <br />
                  Zahvaljujući <strong>očuvanim ostacima</strong> i <strong>arheološkim iskopavanjima</strong> koje je
                  sproveo <strong>Zavod za zaštitu spomenika kulture iz Kraljeva</strong>, danas imamo jasan uvid
                  u <strong>osnovnu strukturu Koznika</strong>.
                </p>
              </section>

              <img srcSet={`${koznik55} 450w, ${koznik5}`} alt="Koznik" />

              <section lang="sr">
                <p>
                  <strong>Manifestacija "Koznik – grad vitezova"</strong> pokrenuta je zahvaljujući entuzijazmu
                  <strong> građana Aleksandrovca i Brusa</strong>, koji godinama rade na obnovi ovog
                  <strong>istorijskog dragulja</strong>.
                  <br />
                  <br />
                  Cilj događaja je <strong>promocija srpske i evropske srednjovekovne kulture</strong>.
                  Pored <strong>viteških igara</strong>, organizuje se i <strong>slikarska kolonija</strong>, koja okuplja
                  <strong> slikare, amatere</strong> i ljubitelje umetnosti i istorije.
                  <br />
                  <br />
                  Program uključuje <strong>nastupe narodne muzike</strong>, kao i izvođenja <strong>lokalnog hora</strong>
                  i <strong>ansambala narodnih igara</strong>.
                  Posetioci mogu uživati u <strong>lokalnoj hrani i piću</strong>, otkriti <strong>stare zanate</strong>,
                  a sve to prati <strong>srednjovekovna i tradicionalna srpska muzika</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Medieval Town Koznik</h1>

              <section lang="en"> <p> <strong>The medieval town Koznik</strong> is one of the <strong>best-preserved fortresses in Serbia</strong>. Thanks to its <strong>strategic location</strong> at an altitude of over <strong>900 meters</strong>, it still dominates the <strong>Rasina valley</strong>, the <strong>villages of Brus</strong>, the <strong>Kopaonik foothills</strong>, and the <strong>Aleksandrovac Župa</strong> after <strong>seven centuries</strong>. <br /> <br /> The fortress Koznik is among the <strong>most famous medieval fortifications in the region</strong>, and its popularity grows year by year. This is due to <strong>cultural and artistic events</strong> dedicated to <strong>knights</strong> and <strong>nobility</strong>, numerous <strong>hiking tours</strong>, as well as its proximity to the <strong>Kopaonik tourist center</strong>. </p> </section>
              <img srcSet={`${koznik22} 450w, ${koznik2}`} alt="Serbian medieval town Koznik 2" />

              <section lang="en"> <p> <strong>Koznik</strong> is built on a <strong>hilltop</strong> surrounded on three sides by <strong>steep cliffs</strong>, which makes it extremely inaccessible. The fortress has an irregular shape, adapted to the natural terrain, and consists of <strong>eight quadrangular towers</strong>, spaced approximately at equal distances. <br /> <br /> The architectural style in the <strong>Morava style</strong> suggests Koznik was likely built during <strong>the reign of Prince Lazar Hrebeljanović (1371–1389)</strong>. It is first mentioned on <strong>August 8, 1381</strong> in <strong>Prince Lazar’s charter</strong>, which granted the rights to Koznik to the monastery Lavra of Saint Athanasius on Mount Athos. <br /> <br /> Later, <strong>Stefan Lazarević</strong> issued two charters to the nobleman <strong>Radič Postupović</strong>, granting him villages around Koznik. After the <strong>Ottoman invasion</strong>, Koznik fell under <strong>Turkish rule</strong>, and in 1444, by the <strong>Peace of Szeged</strong>, it was returned to <strong>Despot Đurađ Branković</strong>. <br /> <br /> Just ten years later, <strong>the Turks reoccupied Koznik</strong> and further fortified it. During the <strong>Austro-Hungarian offensive of 1689</strong>, <strong>Serbian insurgents</strong> captured the fortress, but after the <strong>offensive failed</strong> and the <strong>Great Serbian Migration</strong>, Koznik was abandoned. </p> </section>
              <img srcSet={`${koznik33} 450w, ${koznik3}`} alt="Serbian medieval town Koznik 3" />

              <section lang="en"> <p> <strong>Radič Postupović</strong>, a contemporary of <strong>Despot Đurađ Branković</strong> and his wife <strong>Jerina</strong>, was undoubtedly involved in <strong>fortifying and expanding Koznik</strong>. <br /> <br /> In line with large fortresses of the time, such as <strong>Smederevo</strong>, it is clear that <strong>Ottoman threats</strong> influenced the <strong>strengthening of existing fortifications</strong>. <br /> <br /> <strong>Folk songs</strong> describe the heavy <strong>taxes</strong> and <strong>labor obligations</strong> endured by the people, for which <strong>Jerina</strong> was held responsible, which is why Koznik is also known as <strong> Jerina’s town</strong>. <br /> <br /> According to <strong>legends</strong>, a huge effort was invested in the construction. Even <strong>animals</strong>, especially <strong>goats</strong>, were used to transport materials. Hence the name <strong>Koznik</strong>. <br /> <br /> Another story tells of <strong>Jerina’s arrogance</strong>, who reportedly ordered the <strong>Rasina river</strong> to be flooded from <strong>Pleš</strong> to <strong>Mitrovo Polje</strong> so she could <strong>bath</strong> and <strong>boat on it</strong>. All this was done to satisfy her whims. </p> </section>
              <img srcSet={`${koznik44} 450w, ${koznik4}`} alt="Jerina's Town" />

              <section lang="en"> <p> The <strong>old town Koznik</strong> is built on a hill surrounded by <strong>steep cliffs</strong>, except from the <strong>western side</strong>, which is the only access to the fortress. <br /> <br /> The fortress outline follows the <strong>natural terrain</strong>. Its length is less than <strong>60 meters</strong>, and its width does not exceed <strong>45 meters</strong>. The <strong>walls</strong> are reinforced with <strong>square towers</strong> evenly spaced around. <br /> <br /> At the highest point, in the middle of the northern wall, is the <strong>dungeon tower (donjon)</strong>, most likely with a <strong>residential function</strong>, along with several other towers within the fortress. There are a total of eight towers, while the <strong>foundations of destroyed towers</strong> remain visible. <br /> <br /> Thanks to <strong>preserved remains</strong> and <strong>archaeological excavations</strong> carried out by the <strong>Institute for the Protection of Cultural Monuments from Kraljevo</strong>, we now have a clear insight into the <strong>basic structure of Koznik</strong>. </p> </section>
              <img srcSet={`${koznik55} 450w, ${koznik5}`} alt="Koznik" />

              <section lang="en"> <p> The event <strong>"Koznik – Town of Knights"</strong> was initiated thanks to the enthusiasm of <strong>the citizens of Aleksandrovac and Brus</strong>, who have been working for years on restoring this <strong>historical gem</strong>. <br /> <br /> The goal of the event is the <strong>promotion of Serbian and European medieval culture</strong>. Besides <strong>knight games</strong>, a <strong>painting colony</strong> is organized, gathering <strong>painters, amateurs</strong>, and lovers of art and history. <br /> <br /> The program includes <strong>folk music performances</strong>, as well as performances by the <strong>local choir</strong> and <strong>folk dance ensembles</strong>. Visitors can enjoy <strong>local food and drink</strong>, discover <strong>old crafts</strong>, all accompanied by <strong>medieval and traditional Serbian music</strong>. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default TvrdjavaKoznik;