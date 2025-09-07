/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import cegar1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/desktop/cegar1.jpg";
import cegar2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/desktop/cegar2.jpg";
import cegar3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/desktop/cegar3.jpg";
import cegar4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/desktop/cegar4.jpg";
import cegar11 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/mobile/cegarM1.jpg";
import cegar22 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/mobile/cegarM2.jpg";
import cegar33 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/mobile/cegarM3.jpg";
import cegar44 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/mobile/cegarM4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Cegar = () => {
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

        <title>{switchLanguage === 'rs' ? "Spomenik Čegar kod Niša – Bitka i Stevan Sinđelić | Serbia Wonders" : "Čegar Monument near Niš – The Battle and Stevan Sinđelić | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Spomenik na Čegaru, mestu čuvene bitke iz Prvog srpskog ustanka, posvećen je heroju Stevanu Sinđeliću. U njegovu čast podignuta je kula 1927. godine kod Niša."
            :
            "The Čegar Monument, near Niš, commemorates the famous 1809 battle during the First Serbian Uprising and honors national hero Stevan Sinđelić, who heroically sacrificed himself and his men."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Čegar, Bitka na Čegaru, Stevan Sinđelić, spomenik, Prvi srpski ustanak, Ćele kula, Niš, istorijska mesta, kulturno dobro, srpska istorija, nacionalni heroji"
            :
            "Čegar, Battle of Čegar, Stevan Sinđelić, monument, First Serbian Uprising, Ćele Kula, Niš history, Serbian heritage, national hero, cultural monument"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/cegar`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/cegar"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/cegar"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/cegar"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(nisavskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${cegar11} 450w, ${cegar1} `} alt="Čergar 1" loading="lazy" />

        <h2>Čegar</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr"> <p> Spomenik na brdu <strong>Čegar</strong>, u blizini <em>Niša</em>, podignut je na mestu gde se odigrala čuvena bitka iz <em>Prvog srpskog ustanka</em>, u znak sećanja na poginule vojnike i njihovog komandanta <strong>Stevana Sinđelića</strong>. Spomenik na Čegaru predstavlja nepokretno kulturno dobro kao značajno istorijsko mesto od izuzetnog značaja. <br /> <br /> Današnji spomenik, u obliku kule – simbola srpskog vojnog logora, podignut je povodom pedesetogodišnjice oslobođenja <em>Niša</em> od Osmanlijskog carstva, 1. juna 1927. godine. Prvobitni spomenik je ostao u niši novog, iznad kojeg je 1928. godine postavljeno bronzano poprsje <strong>Stevana Sinđelića</strong>, rad vajara <strong>Slavka Miletića</strong>. </p>
              </section>

              <img srcSet={`${cegar22} 450w, ${cegar2}`} alt="Čegar 2" loading="lazy" />

              <section lang="sr">
                <p> Nedaleko od sela <strong>Kameniца</strong>, severoistočno od <em>Niša</em>, nalazi se uzvišenje <strong>Čegar</strong>, poznato istorijsko mesto zbog bitke koja se odigrala tokom <em>Prvog srpskog ustanka</em>. Na platou ovog uzvišenja, gde je bio šanareski logor resavskog vojvode <strong>Stevana Sinđelića</strong>, 31. maja 1809. godine, odigrala se čuvena <strong>Čegarska bitka</strong>. Komandant srpskih ustaničkih snaga na Čegaru, <strong>Stevan Sinđelić</strong>, tada je izveo herojsku akciju. Pucanjem u barutanu, kada je većina srpskih branilaca bila poginula, pokušao je da zaustavi prodor Turaka koji su stalno napredovali. Nakon bitke, srpski branitelji su pretrpeli gubitke od <strong>4.000 vojnika</strong>, dok su brojčano nadmoćniji turski odredi imali gubitke od čak <strong>16.000 vojnika</strong>. Zbog toga je turski paša, u znak odmazde, iste godine naredio izgradnju <em>Ćele kule</em> od glava poginulih Srba na Čegaru, na ulazu u <em>Niš</em>. </p>
              </section>

              <img srcSet={`${cegar33} 450w, ${cegar3}`} alt="Bitka na Čegaru" loading="lazy" />

              <section lang="sr">
                <p> Spomenik je izgrađen prema projektu ruskog arhitekte, emigranta <strong>Julijana Lj. Djupona</strong>. Arhitektura spomenika karakteristična je za period između dva svetska rata, kada su često spajani elementi romantizma sa dekorativnim osobinama nacionalne srednjovekovne arhitekture. Kula kvadratne osnove postavljena je na postament sa blagim kosim ivicama. Završni kubus na osmostranom tamburu predstavlja logičan završetak kompozicije. Dekoracija je bogata, ali nije preterana. Fasada kule, sa otvorima i kružnim rozorama, izvedena je u alternaciji opeke i maltera, dok je donji deo, sa pristupnim stepeništem, napravljen od kamena sa <em>Niške tvrđave</em>, tačnije sa <em>Vinik kapije</em>, koju je vojska 1927. godine srušila prilikom uvođenja železničke pruge. <br /> <br /> Bista <strong>Stevana Sinđelića</strong> postavljena je naknadno, umesto bareljefa sa njegovim likom, iznad kojeg je bila figura orla. Bista je delo niškog vajara hrvatskog porekla, <strong>Slavka Miletića</strong>. </p>
              </section>

              <img srcSet={`${cegar44} 450w, ${cegar4}`} alt="Bitka na Čegaru - spomenik" loading="lazy" />

              <section lang="sr">
                <p> Osim što je služio za veličanje podviga nacionalnog heroja, spomenik je imao i snažan nacionalno-dinastički karakter, jer je povezivao herojske podvige vojvode <strong>Stevana Sinđelića</strong> sa činovima osvajanja <em>Niša</em> pod vladavinom kneza <strong>Milana Obrenovića</strong>. </p>
              </section>
            </>
          )
          :
          (
            <>

              <section lang="en">

                <p> The monument on <strong>Čegar</strong> hill, near <em>Niš</em>, was erected at the site of the famous battle from the <em>First Serbian Uprising</em>, in memory of the fallen soldiers and their commander <strong>Stevan Sinđelić</strong>. The Čegar monument represents an immovable cultural heritage site of exceptional historical importance. <br /><br /> The current monument, shaped like a tower – a symbol of the Serbian military camp, was built to commemorate the 50th anniversary of the liberation of <em>Niš</em> from the Ottoman Empire, on June 1, 1927. The original monument remained in the niche of the new one, above which in 1928 a bronze bust of <strong>Stevan Sinđelić</strong>, created by the sculptor <strong>Slavko Miletić</strong>, was placed. </p>
              </section>

              <img srcSet={`${cegar22} 450w, ${cegar2}`} alt="Čegar 2" loading="lazy" />

              <section lang="en">
                <p> Not far from the village of <strong>Kamenica</strong>, northeast of <em>Niš</em>, lies the elevation <strong>Čegar</strong>, a historic site known for the battle fought during the <em>First Serbian Uprising</em>. On the plateau of this elevation, where the Resava voivode <strong>Stevan Sinđelić</strong> had his trench camp, the famous <strong>Battle of Čegar</strong> took place on May 31, 1809. The commander of the Serbian insurgent forces at Čegar, <strong>Stevan Sinđelić</strong>, performed a heroic act. By firing into the powder magazine when most Serbian defenders had been killed, he tried to stop the advance of the Turks who were continuously pushing forward. After the battle, Serbian defenders suffered losses of <strong>4,000 soldiers</strong>, while the numerically superior Turkish forces lost as many as <strong>16,000 soldiers</strong>. Because of this, the Turkish pasha, as an act of reprisal, ordered the construction of the <em>Skull Tower (Ćele Kula)</em> from the heads of the fallen Serbs at Čegar, at the entrance to <em>Niš</em>. </p>
              </section>

              <img srcSet={`${cegar33} 450w, ${cegar3}`} alt="Battle of Čegar" loading="lazy" />

              <section lang="en">
                <p> The monument was designed by the Russian architect and emigrant <strong>Julian Lj. Djupon</strong>. Its architecture is characteristic of the period between the two world wars, when elements of romanticism were often combined with decorative features of national medieval architecture. The square-based tower is placed on a pedestal with gently sloping edges. The final cube on the octagonal drum represents a logical conclusion of the composition. The decoration is rich but not excessive. The tower’s facade, with openings and circular rose windows, is made alternating brick and plaster, while the lower part, with the access staircase, is made of stone from the <em>Niš Fortress</em>, specifically from the <em>Vinik Gate</em>, which the army demolished in 1927 during the railway introduction. <br /><br /> The bust of <strong>Stevan Sinđelić</strong> was installed later, replacing the relief with his likeness, above which was a figure of an eagle. The bust is the work of the Niš sculptor of Croatian origin, <strong>Slavko Miletić</strong>. </p>

              </section>

              <img srcSet={`${cegar44} 450w, ${cegar4}`} alt="Battle of Čegar - monument" loading="lazy" />

              <section lang="en">
                <p> Besides celebrating the deeds of the national hero, the monument also had a strong national-dynastic character, as it linked the heroic exploits of voivode <strong>Stevan Sinđelić</strong> with the acts of conquering <em>Niš</em> under the rule of Prince <strong>Milan Obrenović</strong>. </p>

              </section>

            </>
          )}


      </div>
    </>
  );
};


export default Cegar;