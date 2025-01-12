import kraljevac1 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/kraljevac2.jpg";
import kraljevac2 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/kraljevac3.jpg";
import kraljevac3 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/kraljevac4.jpg";
import kraljevac4 from "../../../../../assets/images/Vojvodina/JuznoBanatskiOkrug/SRPKraljevac/kraljevac5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const SRPKraljevac = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={kraljevac1} alt="Bela Crkva 1" />

      <h2 style={{ right: "80px" }}>SPECIJALNI REZERVAT PRIRODE "KRALJEVAC"</h2>

      <p style={{ paddingTop: "80px", marginTop: "-10px" }}>
        Specijalni rezervoar prirode „Kraljevac” smešten je u srcu vojvođanske
        ravnice, na rubu Deliblatske peščare, u slikovitom selu Deliblato, koje
        deluje kao oaza mira i tišine. Jezero „Kraljevac” nastalo je usled
        delovanja vetra, formirajući lesnu terasu u koju su urezane prostrane
        doline izvora Spasovina, Obzovik, Mramoračka reka i Kraljevac, nastale
        usled rečne erozije. Godine 1983, podizanjem nasipa i prelazne brane,
        ova rečica je pretvorena u jezero. Podizanjem nivoa vode došlo je do
        poplave okolnih ritnih šuma i obradivih površina, a odvajanje treseta sa
        dna jezera dovelo je do formiranja plutajućih i stalnih ostrva. Najveće
        plutajuće ostrvo ima površinu od oko 2 hektara.
      </p>

      <img src={kraljevac2} alt="Bela Crkva 2" />

      <p style={{ marginTop: "-10px" }}>
        Odlukom Vlade Republike Srbije, 2009. godine, Specijalni rezervoar
        prirode „Kraljevac” stavljen je pod zaštitu države kao prirodno dobro od
        izuzetnog značaja prve kategorije, sa ukupnom površinom od oko 264
        hektara. Jezero Kraljevac, sa svojim plutajućim ostrvima, okruženo
        tršćacima, šumama, livadama i pašnjacima, bogato je i raznovrsno u
        pogledu flore i faune. Ovaj specijalni rezervoar prirode je područje
        izuzetne prirodne lepote, jer plutajuća ostrva, koja se pomeraju pod
        uticajem jakog vetra, stalno menjaju izgled okruženja i pejzaža.
      </p>

      <img src={kraljevac3} alt="Bela Crkva 3" />

      <p style={{ marginTop: "-10px" }}>
        Među biljnim vrstama koje nastanjuju ovo područje nalazi se barska
        paprat, koja potiče iz ledenog doba, kao i močvarna iva. Plutajuća i
        stalna ostrva, sa vodenim oknima i podzemnim izvorima koji ne zmrzavaju
        ni tokom najhladnijih zima, predstavljaju važno stanište za oko 25 vrsta
        riba, među kojima se izdvajaju mrgud, linjak, barski karaš i čikov, kao
        i ugrožena vrsta umbra. U čistoj i mirnoj vodi jezera često se mogu
        uočiti i vidre. Rezervat je takođe značajno gnezdište retkih vrsta ptica
        močvarica, sa oko 70 vrsta, među kojima se posebno izdvaja mračna i žuta
        čaplja, gak, čapljić, eja močvarica, kao i globalno ugrožena patka
        njorka. Jezero Kraljevac je idealno mesto za gnežđenje velikih kolonija
        pčelariča, a u njemu se može pronaći i oko 20 vrsta dnevnih leptira.
      </p>

      <img src={kraljevac4} alt="Bela Crkva 4" />
      <p style={{ marginTop: "-10px" }}>
        Obližnji pašnjaci predstavljaju jedno od poslednjih utočišta ugroženih
        vrsta steppskih glodara, poput tekuniče i slepog kučeta, u Srbiji.
        Rezervat nudi posetiocima izvanredne mogućnosti za sportski ribolov,
        pešačenje, posmatranje ptica i fotografisanje prirode. Takođe, rezervat
        je jedinstven naučni poligon i učionica na otvorenom za đake, studente i
        istraživače.
      </p>
    </div>
  );
};
