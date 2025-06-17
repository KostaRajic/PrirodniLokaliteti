import sokoGrad1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/desktop/SokoGrad1.jpg";
import sokoGrad2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/desktop/SokoGrad2.jpg";
import sokoGrad3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/desktop/SokoGrad3.jpg";
import sokoGrad4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/desktop/SokoGrad4.jpg";
import sokoGrad5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/desktop/SokoGrad5.jpg";
import sokoGrad11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/mobile/SokoGradM1.jpg";
import sokoGrad22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/mobile/SokoGradM2.jpg";
import sokoGrad33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/mobile/SokoGradM3.jpg";
import sokoGrad44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/mobile/SokoGradM4.jpg";
import sokoGrad55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/mobile/SokoGradM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zajecarskiOkrugPathRoutes } from "./ZajecarskiOkrugPathRoutes";

export const SokoGrad = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zajecarskiOkrugPathRoutes.home)} style={{fill: 'white'}}/>
      <header></header>
      <img srcSet={`${sokoGrad44} 400w, ${sokoGrad4} `} alt="Srpski Srednjovekovni Grad 'Soko Grad' 1" />

      <h2>Srpski Srednjovekovni Grad "Soko Grad"</h2>

      <p style={{ paddingTop: "50px" }}>
        Sokograd, srednjovekovna tvrđava smeštena na svega 2 km od Sokobanje,
        nosi sa sobom vekove istorije i tajni. Iako tačan datum njegovog
        nastanka nije poznat, pretpostavlja se da je izgrađen u vreme cara
        Justinijana kako bi služio kao odbrambeni bedem protiv Avara i Slovena.
        <br />
        <br />
        Ime Sokograd, poznat i kao Sokolac, vezuje se za njegove nekadašnje
        gospodare, za koje se veruje da su se bavili dresurom sokolova. Prema
        legendi, čak se i porez plaćao u dresiranim sokolovima, što je bilo
        poznato kao "sokolarina". Danas, iznad ovog drevnog grada, sokolovi i
        dalje ponosno kruže, podsećajući na bogatu prošlost ove tvrđave.
      </p>

      <img srcSet={`${sokoGrad22} 400w, ${sokoGrad2} `} alt="Srpski Srednjovekovni Grad 'Soko Grad' 2" />

      <p>
        Sokograd je podignut na izuzetno nepristupačnom terenu, što je
        predstavljalo izazov za njegove graditelje. Kako bi olakšali dopremanje
        građevinskog materijala, pregradili su reku Moravicu i stvorili veštačko
        jezero, koje im je omogućilo lakši transport kamena neophodnog za
        izgradnju tvrđave.
        <br />
        <br />
        Međutim, nakon izvesnog vremena, brana na Moravici je popustila,
        izazvavši snažan vodeni talas koji je uništio naselje nizvodno od nje.
        Mesto gde se nekada nalazilo to naselje danas nosi ime "Trebič", dok se
        brdo preko kojeg se voda izlila naziva "Prevalac".
      </p>

      <img srcSet={`${sokoGrad33} 400w, ${sokoGrad3} `} alt="Srpski Srednjovekovni Grad 'Soko Grad' 3" />

      <p>
        Sokograd je bio prostrana i razuđena tvrđava, sastavljena od dva dela –
        gornjeg i donjeg grada. Donji grad je vremenom gotovo u potpunosti
        srušen, dok su u gornjem delu očuvane značajne građevine.
        <br />
        <br />
        Ulazak u gornji grad vodio je kroz kulu "Motrilju", a unutar njegovih
        zidina i danas stoji kula sa puškarnicama. Pored nje, nalaze se još dve
        kule povezane bedemom, koje su imale i otvore za topove. U središtu
        grada, na teško pristupačnom uzvišenju, nalazila se glavna kula u kojoj
        je živeo gospodar tvrđave. Od te kule zidine su se spuštale ka reci
        Moravici, gde se prostirao donji grad. Na tom pristupačnijem terenu
        živelo je stanovništvo, a tu su bili smešteni i robovi.
      </p>

      <img srcSet={`${sokoGrad11} 400w, ${sokoGrad1} `} alt="Srpski Srednjovekovni Grad 'Soko Grad' 4" />

      <p>
        Najbolje očuvani deo gornjeg grada je stara cisterna za vodu, a tokom
        istraživanja pronađeni su i ostaci keramičkih cevi koje su služile za
        prikupljanje i dovod kišnice.
        <br />
        <br />
        Istorijski podaci ukazuju na to da je Sokograd nekada bio važan vojni
        punkt i mesto za odmor konvoja koji su iz Evrope kretali ka Aziji. Prvi
        pisani pomen o ovoj tvrđavi datira iz 11. veka, a 1172. godine osvojio
        ju je Stefan Nemanja, nakon čega je postala deo srednjovekovne srpske
        države. Sokograd se kasnije pominje i u biografijama despota Stefana
        Lazarevića i Konstantina Filozofa, što potvrđuje njegov značaj kroz
        istoriju.
      </p>

      <img srcSet={`${sokoGrad55} 400w, ${sokoGrad5} `} alt="Srpski Srednjovekovni Grad 'Soko Grad' 5" />

      <p>
        Početkom 15. veka, Sokograd je pao pod tursku vlast. Sultan Musa, sin
        Bajazita, poznat kao Musa Kesedžija, 1413. godine ugušio je pobunu
        Hamuz-bega, koji je tada upravljao gradom. Hamuz-beg je zarobljen i
        pogubljen, dok je lokalno stanovništvo raseljeno.
        <br />
        <br />
        Krajem 17. veka, 1689. godine, Sokograd su zajedno osvojili Srbi i
        Austrijanci, ali su ga sredinom 18. veka Austrijanci nakratko zadržali
        pod svojom kontrolom. Tokom Prvog srpskog ustanka, 1808. godine, hajduk
        Veljko Petrović uspeo je da zauzme grad, ali samo na kratko. Nakon toga,
        Sokograd je prepušten zubu vremena, ostavljajući iza sebe samo ruševine
        kao svedočanstvo o svojoj nekadašnjoj moći i značaju.
      </p>
    </div>
  );
};
