import pustare1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/desktop/selevnskePustare1.jpg";
import pustare2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/desktop/selevnskePustare2.jpg";
import pustare3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/desktop/selevnskePustare4.jpg";
import pustare4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/desktop/selevnskePustare5.jpg";
import pustare5 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/desktop/selevnskePustare6.jpg";
import pustare11 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/mobile/MselevnskePustare1.jpg";
import pustare22 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/mobile/MselevnskePustare2.jpg";
import pustare33 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/mobile/MselevnskePustare4.jpg";
import pustare44 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/mobile/MselevnskePustare5.jpg";
import pustare55 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/mobile/MselevnskePustare6.jpg";


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { severnoBanatskiPathRoutes } from "./SevernoBanatskiPathRoutes";

export const SelevenjskePustare = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(severnoBanatskiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${pustare33} 400w, ${pustare3} `} alt="Selevenjske pustare 1" />

      <h2>
      Selevenjske pustare
      </h2>

      <p>
        Specijalni rezervat prirode "Selevenjske pustare" nalazi se na severu
        Vojvodine uz samu državnu granicu sa Mađarskom. Prostire se između mesta
        Bački Vinogradi i Horgoš, na teritoriji opština Kanjiža i Subotica.
        "Selevenjske pustare" stavljene su pod zaštitu kao posebna prirodna
        vrednost koju čini visoka raznolikost staništa ravničarskog tipa
        predela.
      </p>

      <img srcSet={`${pustare11} 400w, ${pustare1} `} alt="Selevenjske pustare 2" />

      <p>
        Ovi predeli ističu se svojim florističkim vrednostima. Za neke biljne
        vrste rezervat je jedino stanište u našoj zemlji ili je jedno od
        malobrojnih postojećih nalazišta: 22 vrste su zaštićene zakonom a 14 se
        smatraju ugroženim po međunarodnim merilima. 
      </p>

      <img srcSet={`${pustare22} 400w, ${pustare2} `} alt="Selevenjske pustare 3" />

      <p>
      Selevenjske pustare se
        sastoje iz 10 delova, „ostrvskih“ celina okruženih poljoprivrednim
        površinama, njivama i voćnjacima. Od životinjskih vrsta u ovom rezervatu
        prirode prisutne su vrste od međunarodnog značaja, među kojima su barska
        žaba, peščarski gušter, slepi miševi, kao i neke retke ptice gnezdarice.
      </p>

      <img srcSet={`${pustare55} 400w, ${pustare5} `} alt="Selevenjske pustare 4" />


      <p>
        Jednu od značajnih prirodnih vrednosti rezervata “Selevenjske pustare”
        prestavlja ptica modrovrana. U Vojvodini se modrovrana gnezdila na veoma
        malom broju lokacija i njihov broj se, pre preduzimanja mera aktivne
        zaštite, smanjio na svega 20 parova. Danas je situacija drugačija.
        Najveći deo prirodnog dobra predstavljaju otvorena travnata staništa
        peščarskog, stepskog ili slatinskog tipa. Selevenjska šuma, jedini je
        deo rezervata pokriven šumskim rastinjem, koji je nastao sadnjom radi
        obogaćivanja tadašnjeg lovišta grofa Karasa.
      </p>

      <img srcSet={`${pustare44} 400w, ${pustare4} `} alt="Selevenjske pustare 5" />
      <p style={{ marginTop: "-105px", position: "absolute" }}>
        Zasađene su vrste koje nisu deo prirodnog staništa, kao što su trenutno
        veoma rasprostranjen koprivić, i crni borovi, koji su ovde našli i novu
        primenu. Iako mala po površini, ova šuma pruža utočište sitnim
        životinjama, među kojima su istraživači pronašli brojne ugrožene vrste.
        Ovde žive retki insekti –leptiri i trčuljci, kao i u evropskim razmerama
        vredni primerci pojedinih vrsta gmizavaca i vodozemaca-barska žaba i
        peščarski gušter. Riđi šumski mrav gradi svoje mravinjake na rubu šume.
      </p>
    </div>
  );
};
