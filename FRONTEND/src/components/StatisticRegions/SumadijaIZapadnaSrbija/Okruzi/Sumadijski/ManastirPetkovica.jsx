/* eslint-disable react/no-unknown-property */
import manastirPetkovica1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/desktop/manastirPetkovica1.jpg";
import manastirPetkovica2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/desktop/manastirPetkovica2.jpg";
import manastirPetkovica3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/desktop/manastirPetkovica3.jpg";
import manastirPetkovica4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/desktop/manastirPetkovica4.jpg";
import manastirPetkovica5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/desktop/manastirPetkovica5.jpg";
import manastirPetkovica11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/mobile/MmanastirPetkovica1.jpg";
import manastirPetkovica22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/mobile/MmanastirPetkovica2.jpg";
import manastirPetkovica33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/mobile/MmanastirPetkovica3.jpg";
import manastirPetkovica44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/mobile/MmanastirPetkovica4.jpg";
import manastirPetkovica55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/SumadijskiOkrug/ManastirPetkovica/mobile/MmanastirPetkovica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useContextAuth } from "../../../../../Context";
import { sumadijskiOkrugPathRoutes } from "./SumadijskiOkrugPathRoutes";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirPetkovica = () => {
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
            ? "Manastir Petkovica – Skriveno srednjovekovno blago kod Stragara | Srbija Wonders"
            : "Petkovica Monastery – Hidden Medieval Gem near Stragari | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Petkovica, podignut najverovatnije krajem XIII veka, predstavlja značajno kulturno-istorijsko nasleđe Srbije. Saznajte više o njegovoj obnovi, freskama i povezanosti sa Srebrenicom."
              : "Petkovica Monastery, likely built in the late 13th century, is an important historical and cultural site in Serbia. Discover its architecture, frescoes, and ties to the medieval town of Srebrenica."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Petkovica, Stragari, Srebrenica, XIII vek, srednjovekovni manastiri, freske, Stefan Lazarević, kralj Dragutin, srpska pravoslavna crkva"
              : "Petkovica Monastery, Stragari, Srebrenica, 13th century, medieval monasteries, frescoes, Stefan Lazarević, King Dragutin, Serbian Orthodox Church"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-petkovica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-petkovica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-petkovica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/sumadijski-okrug/manastir-petkovica"
        />
      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(sumadijskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${manastirPetkovica11} 450w, ${manastirPetkovica1} `} alt="Manastir Petkovica 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Manastir Petkovica</h1>

              <section lang='sr'>
                <p> Iznad <strong>Srebreničke reke</strong>, u blizini <strong>Stragara</strong>, nalazi se obnovljeni manastir <strong>Petkovica</strong>. Sagrađen je početkom <em>XXI veka</em> na temeljima delimično sačuvane crkve, nekropole i ostataka ograđenog zida. Tačan datum osnivanja manastira nije poznat, ali se pretpostavlja da je nastao u periodu između kraja <strong>XIII</strong> i početka <strong>XV veka</strong>, kada su u okolini podizane mnoge građevine. Najverovatnije je podignut krajem <strong>XIII veka</strong>, u vreme vladavine kralja <strong>Dragutina</strong>, dok je temeljna obnova izvedena u prvoj deceniji <strong>XV veka</strong>, za vreme despota <strong>Stefana Lazarevića</strong>. </p>
              </section>

              <img srcSet={`${manastirPetkovica22} 450w, ${manastirPetkovica2}`} alt="Manastir Petkovica 2" />

              <section lang='sr'>
                <p> Za datiranje <strong>Petkovice</strong> posebno su značajne originalne freske sačuvane u niši iznad ulaznog portala. Paleografska obeležja u natpisu, umetnička koncepcija i intenzivan koloritet povezuju ovo slikarstvo sa umetnošću poslednje decenije <strong>XIII veka</strong>. Mlađi sloj fresaka, izrađen u duhu slikarstva prve decenije <strong>XV veka</strong>, pokazuje sličnost sa radovima u obližnjim crkvama. Ovo potvrđuje i jedini pouzdani pisani podatak o datiranju manastira Petkovice – natpis na nadgrobnoj ploči otkrivenoj tokom arheoloških istraživanja. Na ploči se delimično očuvao zapis da je jedan monah preminuo <strong>1379. godine</strong>. Iz tog podatka se zaključuje da je Petkovica u vreme kneza <strong>Lazara</strong> bila muški manastir i da je preminuli kaluđer pripadao drugoj ili trećoj generaciji monaha koji su osnovali manastir. Još jedan natpis, sa monaškog groblja, beleži smrt brata manastira <strong>1443. godine</strong>, što potvrđuje da je Petkovica funkcionisala sve do pada Srbije pod tursku vlast. </p>
              </section>

              <img srcSet={`${manastirPetkovica33} 450w, ${manastirPetkovica3}`} alt="Manastir Petkovica 3" />

              <section lang='sr'>
                <p> Među brojnim manastirima koje turski popisi iz <strong>XVI veka</strong> beleže na ovom području, veruje se da je bila i <strong>Petkovica</strong>, koja je, najverovatnije, bila posvećena <em>Arhangelima</em>. Nalazila se, kako se pretpostavlja, blizu sela <strong>Pridvorica</strong>, kako su Turci nazivali srednjovekovnu <strong>Srebrenicu</strong>. Zbog male udaljenosti od ovog značajnog grada, manastir nije mogao dugo da opstane i zapusteo je zajedno sa Srebrenicom. Crkva je građena u dve faze. Naos, zidani ikonostas i stariji sloj živopisa potiču s kraja <strong>XIII veka</strong>, dok su narteks, južni paraklis i freske na zapadnom zidu crkve i istočnom delu priprate nastali krajem <strong>XIV</strong> ili početkom <strong>XV veka</strong>. Građevina je skromnih dimenzija, pravougaone osnove, sa svodom u obliku poluobličja i polukružnom apsidom na istoku. Đakonikon i protesis su dograđeni uz zidove oltara. Na zapadnom delu nalazi se ulazni portal lučnog oblika sa oslikanom lunetom. </p>
              </section>


              <img srcSet={`${manastirPetkovica44} 450w, ${manastirPetkovica4}`} alt="Manastir Petkovica 4" />

              <section lang='sr'>
                <p> Pripratna prostorija je dograđena krajem <strong>XIV veka</strong> sa zapadne strane crkve. Osmišljena je kao dvostruka kula sa zvonikom na vrhu. Osnova je pravougaona, sa drvenom međuspratnom konstrukcijom i četvoro-slivnim krovom. Uz južni zid crkve prislonjen je mali paraklis, čiji su ostaci sačuvani samo do visine od metar i po. Od starijeg fresko-slikarstva, sačuvano je samo veliko poprsje <strong>Hrista Pantokratora</strong> u luneti iznad ulaza iz priprate u naos. Liki je oblikovan u duhu slikarstva kraja <strong>XIII veka</strong> i odlikuje se snažnom modelacijom, oštrim crtežom i naglašenim pastelno svetlim koloritima. Čista boja se prostire po slikanoj površini, stvarajući lazurne svetlosne odbljese. </p>
              </section>

              <img srcSet={`${manastirPetkovica55} 450w, ${manastirPetkovica5}`} alt="Manastir Petkovica 5" />

              <section lang='sr'>
                <p> Mlađem slikarstvu pripadaju ostaci monumentalne kompozicije <strong>Bogorodičinog Uspenja</strong> u naosu, <strong>Deizis</strong>, kao i najjasnije scene iz Hristovog života u priprati. Snažan crtež, oštra modelacija i kontrastni kolorit osnovne su karakteristike ovog značajnog slikarstva. Nesumnjivo, srednjovekovni život manastira <strong>Petkovica</strong> bio je usko povezan sa važnim političkim i privrednim centrom Despotovine – obližnjim gradom <strong>Srebrenicom</strong>, u kojem je održan i poslednji državnog sabor u slobodnoj Srbiji, kada je za naslednika despota Stefana Lazarevića određen <strong>Đurađ Branković</strong>. </p>

              </section>

            </>
          )
          :
          (
            <>

              <h1>Petkovica Monastery</h1>

              <section lang='sr'>
                <p> Above the <strong>Srebrenica River</strong>, near <strong>Stragari</strong>, lies the restored <strong>Petkovica Monastery</strong>. It was built at the beginning of the <em>21st century</em> on the foundations of a partially preserved church, necropolis, and remains of a surrounding wall. The exact date of the monastery's founding is unknown, but it is assumed to have been established between the late <strong>13th</strong> and early <strong>15th centuries</strong>, a period during which many buildings were erected in the area. Most likely, it was built at the end of the <strong>13th century</strong>, during the reign of King <strong>Dragutin</strong>, while the major renovation was carried out in the first decade of the <strong>15th century</strong>, during the rule of Despot <strong>Stefan Lazarević</strong>. </p>

              </section>

              <img srcSet={`${manastirPetkovica22} 450w, ${manastirPetkovica2}`} alt="Petkovica Monastery 2" />

              <section lang='sr'>
                <p> The dating of <strong>Petkovica</strong> is especially important due to the original frescoes preserved in the niche above the entrance portal. Paleographic features in the inscription, artistic conception, and intense coloring link this painting to the art of the last decade of the <strong>13th century</strong>. A younger layer of frescoes, created in the style of early <strong>15th century</strong> painting, shows similarity to works in nearby churches. This is confirmed by the only reliable written data on dating the Petkovica Monastery – an inscription on a tombstone discovered during archaeological research. The inscription partially preserves a record that a monk died in <strong>1379</strong>. From this information, it is concluded that Petkovica was a male monastery during the time of Prince <strong>Lazar</strong>, and that the deceased monk belonged to the second or third generation of monks who founded the monastery. Another inscription from the monastic cemetery notes the death of a monastery brother in <strong>1443</strong>, confirming that Petkovica functioned until the fall of Serbia under Ottoman rule. </p>
              </section>

              <img srcSet={`${manastirPetkovica33} 450w, ${manastirPetkovica3}`} alt="Petkovica Monastery 3" />

              <section lang='sr'>
                <p> Among the numerous monasteries recorded by Ottoman tax registers in the <strong>16th century</strong> in this area, it is believed that <strong>Petkovica</strong> was also present, most likely dedicated to the <em>Archangels</em>. It was assumed to be located near the village of <strong>Pridvorica</strong>, as the Ottomans called medieval <strong>Srebrenica</strong>. Due to the short distance from this significant town, the monastery could not last long and fell into disrepair along with Srebrenica. The church was built in two phases. The naos, masonry iconostasis, and the older layer of frescoes date from the late <strong>13th century</strong>, while the narthex, southern chapel, and frescoes on the western wall of the church and the eastern part of the vestibule were created at the end of the <strong>14th</strong> or beginning of the <strong>15th century</strong>. The building is modest in size, rectangular in plan, with a vault shaped like a semicircular barrel and a semicircular apse on the east side. The diaconicon and prothesis were added along the walls of the altar. On the west side is an arched entrance portal with a painted lunette. </p>

              </section>

              <img srcSet={`${manastirPetkovica44} 450w, ${manastirPetkovica4}`} alt="Petkovica Monastery 4" />

              <section lang='sr'>
                <p> The vestibule was added at the end of the <strong>14th century</strong> on the west side of the church. It was designed as a double tower with a bell tower on top. The base is rectangular, with a wooden inter-floor construction and a four-sloped roof. Along the southern wall of the church is a small chapel, the remains of which are preserved only up to about one and a half meters in height. From the older fresco painting, only the large bust of <strong>Christ Pantocrator</strong> remains in the lunette above the entrance from the vestibule into the naos. The figure is shaped in the spirit of late <strong>13th century</strong> painting and is characterized by strong modeling, sharp drawing, and emphasized pastel light colors. Pure color spreads across the painted surface, creating translucent light reflections. </p>

              </section>

              <img srcSet={`${manastirPetkovica55} 450w, ${manastirPetkovica5}`} alt="Petkovica Monastery 5" />

              <section lang='sr'>
                <p> The younger painting layer includes remnants of the monumental composition of the <strong>Dormition of the Virgin</strong> in the naos, <strong>Deesis</strong>, as well as the clearest scenes from Christ's life in the vestibule. Strong drawing, sharp modeling, and contrasting coloring are the main characteristics of this significant painting. Undoubtedly, the medieval life of the <strong>Petkovica</strong> Monastery was closely connected with the important political and economic center of the Despotate – the nearby town of <strong>Srebrenica</strong>, where the last state assembly in free Serbia was held, during which <strong>Đurađ Branković</strong> was chosen as the successor of Despot Stefan Lazarević. </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default ManastirPetkovica;