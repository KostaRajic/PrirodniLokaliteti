import srebrnoJezero1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/desktop/srebrnoJezero1.jpg";
import srebrnoJezero2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/desktop/srebrnoJezero2.jpg";
import srebrnoJezero3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/desktop/srebrnoJezero3.jpg";
import srebrnoJezero4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/desktop/srebrnoJezero4.jpg";
import srebrnoJezero5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/desktop/srebrnoJezero5.jpg";
import srebrnoJezero11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/mobile/srebrnoJezeroM1.jpg";
import srebrnoJezero22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/mobile/srebrnoJezeroM2.jpg";
import srebrnoJezero33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/mobile/srebrnoJezeroM3.jpg";
import srebrnoJezero44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/mobile/srebrnoJezeroM4.jpg";
import srebrnoJezero55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/SrebrnoJezero/mobile/srebrnoJezeroM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { branicevskiOkrugPathRoutes } from "./BranicevskiOkrugPathRoutes";

export const SrebrnoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(branicevskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${srebrnoJezero11} 400w, ${srebrnoJezero1} `} alt="Srebrno Jezero 1" />

      <h2>Srebrno Jezero</h2>

      <p style={{ paddingTop: "50px" }}>
        Srebrno jezero je veštačko jezero na desnoj obali Dunava, koje je nekada
        bilo rečni rukavac, ali je danas zatvoreno dvema branama. Nalazi se u
        Braničevskom okrugu, u istočnoj Srbiji, oko dva kilometra od Velikog
        Gradišta. Jezero ima prosečnu širinu od 300 metara i dužinu od oko 14
        kilometara.
      </p>

      <img srcSet={`${srebrnoJezero22} 400w, ${srebrnoJezero2} `} alt="Srebrno Jezero 2" />

      <p>
        Samo jezero nalazi se u širokoj, maloj dolini Dunava, ali je okruženo
        brdima: na severu je brdo Gorica (282 m), na jugu brdo Lipovača (362 m),
        dok zapadni deo doline zatvara Veliko brdo sa svojim najvišim vrhom
        Anatemom (324 m). Južno od jezera nalazi se ušće reke Pek u Dunav,
        poznato po svom obrnutom toku tokom visokog vodostaja. U blizini su i
        istorijska nalazišta srednjovekovnih tvrđava u Golupcu i Ramu, kao i
        izvor Hajdučka voda.
      </p>

      <img srcSet={`${srebrnoJezero33} 400w, ${srebrnoJezero3} `} alt="Srebrno Jezero 3" />

      <p>
        Na oba mesta gde je jezero povezano s Dunavom izgrađene su brane, a
        1971. godine premešten je i put Veliko Gradište–Zatonje, koji sada
        prelazi preko kopna. Ostala naselja u blizini jezera su Biskuplje i
        Kisiljevo.
      </p>

      <img srcSet={`${srebrnoJezero44} 400w, ${srebrnoJezero4} `} alt="Srebrno Jezero 4" />

      <p>
        Srebrno jezero ima nepravilni lučni oblik i prostire se na površini od 4
        km². Nalazi se na nadmorskoj visini od 70 metara, a njegova prosečna
        dubina iznosi 8 metara. Voda u jezeru je izuzetno čista zahvaljujući
        prirodnoj filtraciji kroz brojne peščane dine i odsustvu zagađenja.
        Jezero je bogato ribom, među kojima su amur, šaran, som, štuka, smuđ i
        druge slatkovodne vrste.
      </p>

      <img srcSet={`${srebrnoJezero55} 400w, ${srebrnoJezero5} `} alt="Srebrno Jezero 5" />
      <p>
        Jezero je već decenijama popularna destinacija za odmor i ribolov, a u
        poslednje vreme sve više privlači turiste iz svih delova centralne
        Srbije, uprkos ograničenim smeštajnim kapacitetima. Na obali se nalazi
        hotel „Srebrno jezero“, nekoliko restorana i T-pansiona, vikend-naselje,
        kao i najveći auto-kamp park u Srbiji.<br/><br/> Zbog sve veće popularnosti,
        Srebrno jezero je u poslednje vreme dobilo nadimak „srpsko more“, budući
        da Srbija nema izlaz na more.<br/><br/> Od 2006. godine ovde se održava
        tradicionalni Šahovski festival „Srebrno jezero“, u organizaciji
        lokalnog šahovskog kluba VGSK. Na festivalu 2017. godine učestvovalo je
        256 takmičara iz 19 zemalja.<br/><br/> Takođe, od 2016. godine poznati košarkaš
        Miloš Teodosić organizuje letnji dečji košarkaški kamp Teo4, koji
        privlači mlade sportiste iz celog regiona.
      </p>
    </div>
  );
};
