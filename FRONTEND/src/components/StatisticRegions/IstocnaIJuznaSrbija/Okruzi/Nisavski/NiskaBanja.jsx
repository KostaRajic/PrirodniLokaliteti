/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import niskaBanja1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/desktop/niskaBanja1.jpg";
import niskaBanja2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/desktop/niskaBanja2.jpg";
import niskaBanja3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/desktop/niskaBanja3.jpg";
import niskaBanja4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/desktop/niskaBanja4.jpg";
import niskaBanja5 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/desktop/niskaBanja5.jpg";
import niskaBanja11 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/mobile/niskaBanjaM1.jpg";
import niskaBanja22 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/mobile/niskaBanjaM2.jpg";
import niskaBanja33 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/mobile/niskaBanjaM3.jpg";
import niskaBanja44 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/mobile/niskaBanjaM4.jpg";
import niskaBanja55 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/mobile/niskaBanjaM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const NiskaBanja = () => {
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

        <title>{switchLanguage === 'rs' ? "Niška Banja – Termalno lečilište kod Niša | Serbia Wonders" : "Niška Banja – Thermal Spa Near Niš | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Niška Banja je jedno od najpoznatijih i najrazvijenijih termalnih lečilišta u Srbiji, smeštena blizu Niša, sa bogatom prirodom, zdravom klimom i termomineralnim vodama."
            :
            "Niska Banja is one of the most famous and developed thermal spas in Serbia, located near Niš. Known for its natural beauty, healthy climate, and thermal mineral waters."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Niška Banja, termalno lečilište, banja kod Niša, termomineralne vode, Srbija banje, Niš, banje Srbije, zdravlje, turizam u Srbiji, banjsko lečenje"
            :
            "Niska Banja, thermal spa, spa near Niš, thermal mineral waters, Serbia spas, Niš, Serbian health tourism, spa treatment, nature, tourism in Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/niska-banja`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/niska-banja"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/niska-banja"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/niska-banja"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(nisavskiOkrugPathRoutes.home(switchLanguage))}
        />
        <header></header>
        <img alt="Niška Banja 1" srcSet={`${niskaBanja22} 450w, ${niskaBanja2} `} loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Niška Banja</h1>

              <section lang="sr">
                <p>
                  <strong>Niška Banja</strong> je naselje koje pripada gradskoj opštini <strong>Niška Banja</strong> u okviru grada <strong>Niša</strong>.
                  <br /><br />
                  Niška Banja spada u drugu grupu najrazvijenijih banja u Srbiji, zajedno sa <strong>Banjom Koviljačom</strong>, <strong>Bukovičkom Banjom</strong> i <strong>Mataruškom Banjom</strong>. Ove banje ostvaruju više od <strong>100.000 noćenja</strong> godišnje, imaju razvijenu lečilišnu funkciju, solidnu infrastrukturnu osnovu i povoljan geografski položaj, zahvaljujući blizini saobraćajnih pravaca, gradskih naselja i drugih faktora.
                </p>
              </section>

              <img srcSet={`${niskaBanja11} 450w, ${niskaBanja1}`} alt="Niška Banja 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Niška Banja se nalazi na <em>jugoistoku Srbije</em>, uz magistralni put <strong>Beograd–Niš–Sofija–Istanbul</strong> (poznat i kao <em>nišavsko-marička magistrala</em>), na udaljenosti od <strong>10 km</strong> od Niša i <strong>250 km</strong> od Beograda.
                  <br /><br />
                  Geografski, Niška Banja se prostire na geotektonskoj granici između kristalne <strong>rodopske mase</strong> i <strong>krečnjačkih planina istočne Srbije</strong>, na mestu gde se spajaju velike udoline <em>Balkanskog poluostrva</em>, na južnoj ivici široke i plitke <strong>Niške kotline</strong>. Smeštena je u podnožju i na padinama <strong>Koritnjaka</strong>, brda (808 m) i naselja istog imena, koji je deo kompozitne <strong>Nišavske doline</strong> i severozapadnog ogranka <strong>Suve planine</strong> (1.810 m), u severozapadnom podnožju <strong>Crnog kamena</strong> (867 m), jednog od vrhova ove planine.
                </p>
              </section>

              <img srcSet={`${niskaBanja33} 450w, ${niskaBanja3}`} alt="Niška Banja 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Površina na kojoj se nalazi Niška Banja iznosi <strong>6,43 km²</strong>. Ovaj prostor graniči sa naseljima <strong>Prva Kutina</strong> na zapadu, <strong>Brzi Brod</strong> na severozapadu, <strong>Malča</strong> i <strong>Gornja Vrežina</strong> na severu, <strong>Radikina Bara</strong> (sa napuštenim selom <em>Koritnjak</em>) na jugu, <strong>Rautovo</strong> (u uskom pojasu u potesu „Manastirište“) na jugoistoku i <strong>Jelašnica</strong> na istoku.
                  <br /><br />
                  Infrastruktura banje smeštena je na širokoj i blago nagnutoj <em>terasi</em> koja je nastala tokom geološke prošlosti, akumulacijom <em>bigra</em> i delovanjem fluvijalnih i denudacionih procesa. Ova terasa se nalazi u podnožju krečnjačkog brda <strong>Koritnjaka</strong>, koje se strmo uzdiže iznad Niške Banje.
                </p>
              </section>

              <img srcSet={`${niskaBanja44} 450w, ${niskaBanja4}`} alt="Niška Banja 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Na nadmorskoj visini od <strong>248 m</strong> nalazi se centralni deo <strong>Niške Banje</strong>, koji obuhvata zgrade opštine, prateće institucije (<em>banka, pošta, policija, osnovna škola</em> itd.), lečilište, turističke i ugostiteljske objekte, kao i banjske parkove. <strong>Parkovi</strong> se prostiru na nekoliko hektara i sadrže fontane, lepo uređene travnjake, cvetne aleje, kao i drvorede bagrema, jasena, lipe, duda, oraha i crnog bora, kroz koje prolaze potočići sa termomineralnom vodom.
                  <br /><br />
                  Niži deo Niške Banje smešten je u dolini <strong>Nišave</strong>, gde se većina zemljišta koristi za gajenje žitarica i povrća. Ovde se nalazi deo naselja uz <strong>Jelašnički put</strong>, kao i područje između magistralne pruge i puta <strong>Niš–Sofija</strong>, te leva obala Nišave. Naselje <strong>Nikola Tesla</strong>, poznatije kao „<em>Broj šest</em>“, smešteno zapadno od Niške Banje, delimično pripada katastarskoj opštini Niška Banja, dok drugi deo spada u katastarsku opštinu <strong>Prva Kutina</strong>.
                </p>
              </section>

              <img srcSet={`${niskaBanja55} 450w, ${niskaBanja5}`} alt="Niška Banja 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Niška Banja se nalazi na granici najstarije <strong>rodopske mase</strong> na <em>Balkanskom poluostrvu</em> i mlađih <em>nabranih planina</em>. Rodopska masa uključuje <strong>Seličevicu</strong>, dok mlađe nabrane planine predstavljaju <strong>Koritnjak</strong>. Izdizanjem rodopske mase, planina <strong>Seličevica</strong> je postala kopno još u <strong>paleozoiku</strong>. Novoformirano kopno bilo je okruženo morem, koje je u prošlosti prekrivalo prostor na kojem se danas nalazi Niška Banja.
                  <br /><br />
                  U okolini Niške Banje, na određenim delovima <strong>Suve planine</strong>, pronađeni su <strong>krečnjaci i laporci</strong> sa fosilima. Ovi fosili su pomogli da se utvrdi da ovi sedimenti potiču iz perioda <strong>jure</strong>, što ukazuje na transgresiju <em>jurskih mora</em> do oblasti u kojoj se sada nalazi Niška Banja.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Niš Spa</h1>

              <section lang="en">
                <p>
                  <strong>Niška Banja</strong> is a settlement that belongs to the municipal district of <strong>Niška Banja</strong> within the city of <strong>Niš</strong>.
                  <br /><br />
                  Niška Banja is classified in the second group of the most developed spas in Serbia, along with <strong>Banja Koviljača</strong>, <strong>Bukovička Banja</strong>, and <strong>Mataruška Banja</strong>. These spas achieve more than <strong>100,000 overnight stays</strong> annually, have a well-developed therapeutic function, solid infrastructure, and a favorable geographic position due to their proximity to transportation routes, urban areas, and other contributing factors.
                </p>
              </section>

              <img srcSet={`${niskaBanja11} 450w, ${niskaBanja1}`} alt="Niška Banja 2" loading="lazy" />

              <section lang="en">
                <p>
                  Niška Banja is located in the <em>southeastern part of Serbia</em>, along the main road <strong>Belgrade–Niš–Sofia–Istanbul</strong> (also known as the <em>Nišava–Maritsa highway</em>), 10 km from Niš and 250 km from Belgrade.
                  <br /><br />
                  Geographically, Niška Banja lies on a geotectonic boundary between the crystalline <strong>Rhodope Massif</strong> and the <strong>limestone mountains of eastern Serbia</strong>, where major valleys of the <em>Balkan Peninsula</em> converge, on the southern edge of the wide and shallow <strong>Nišava Basin</strong>. It is situated at the foot and on the slopes of <strong>Koritnjak</strong> hill (808 m) and the settlement of the same name, which is part of the composite <strong>Nišava Valley</strong> and the northwestern branch of <strong>Suva Planina</strong> (1,810 m), in the northwestern foothills of <strong>Crni Kamen</strong> (867 m), one of the peaks of this mountain.
                </p>
              </section>

              <img srcSet={`${niskaBanja33} 450w, ${niskaBanja3}`} alt="Niška Banja 3" loading="lazy" />

              <section lang="en">
                <p>
                  The area of Niška Banja covers <strong>6.43 km²</strong>. It borders the settlements of <strong>Prva Kutina</strong> to the west, <strong>Brzi Brod</strong> to the northwest, <strong>Malča</strong> and <strong>Gornja Vrežina</strong> to the north, <strong>Radikina Bara</strong> (with the abandoned village of <em>Koritnjak</em>) to the south, <strong>Rautovo</strong> (in a narrow strip in the “Manastirište” area) to the southeast, and <strong>Jelašnica</strong> to the east.
                  <br /><br />
                  The spa's infrastructure is situated on a wide and gently sloping <em>terrace</em> formed during the region's geological past by the accumulation of <em>tufa</em> and the action of fluvial and denudation processes. This terrace lies at the base of the limestone hill <strong>Koritnjak</strong>, which rises steeply above Niška Banja.
                </p>
              </section>

              <img srcSet={`${niskaBanja44} 450w, ${niskaBanja4}`} alt="Niška Banja 4" loading="lazy" />

              <section lang="en">
                <p>
                  At an elevation of <strong>248 m</strong> lies the central part of <strong>Niška Banja</strong>, which includes municipal buildings, support institutions (<em>bank, post office, police station, elementary school</em>, etc.), a health resort, tourist and hospitality facilities, and the spa’s parks. The <strong>parks</strong> span several hectares and feature fountains, well-maintained lawns, flower alleys, and tree-lined paths with acacia, ash, linden, mulberry, walnut, and black pine trees, through which streams of thermal-mineral water flow.
                  <br /><br />
                  The lower part of Niška Banja is situated in the <strong>Nišava Valley</strong>, where most of the land is used for growing cereals and vegetables. This area includes parts of the settlement along the <strong>Jelašnica Road</strong>, the space between the main railway and the <strong>Niš–Sofia</strong> road, as well as the left bank of the Nišava River. The settlement of <strong>Nikola Tesla</strong>, also known as “<em>Number Six</em>,” is located west of Niška Banja and partially belongs to the cadastral municipality of Niška Banja, while the other part falls under the municipality of <strong>Prva Kutina</strong>.
                </p>
              </section>

              <img srcSet={`${niskaBanja55} 450w, ${niskaBanja5}`} alt="Niška Banja 5" loading="lazy" />

              <section lang="en">
                <p>
                  Niška Banja lies on the boundary between the oldest <strong>Rhodope Massif</strong> in the <em>Balkan Peninsula</em> and younger <em>folded mountains</em>. The Rhodope Massif includes <strong>Seličevica</strong>, while the younger folded mountains are represented by <strong>Koritnjak</strong>. With the uplift of the Rhodope Massif, the <strong>Seličevica</strong> mountain became land as early as the <strong>Paleozoic</strong>. This newly formed land was surrounded by sea, which in the past covered the area where Niška Banja now lies.
                  <br /><br />
                  In the surroundings of Niška Banja, particularly in parts of <strong>Suva Planina</strong>, <strong>limestones and marls</strong> containing fossils have been discovered. These fossils have helped determine that the sediments date back to the <strong>Jurassic period</strong>, indicating the transgression of <em>Jurassic seas</em> into the area where Niška Banja is now located.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};

export default NiskaBanja;