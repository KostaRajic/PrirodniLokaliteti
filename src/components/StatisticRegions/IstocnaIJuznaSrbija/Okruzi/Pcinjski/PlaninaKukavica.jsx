import kukavica1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/planinaKukavica1.jpg";
import kukavica2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/planinaKukavica2.jpg";
import kukavica3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/planinaKukavica3.jpg";
import kukavica4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/planinaKukavica4.jpg";
import kukavica5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/PlaninaKukavica/planinaKukavica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pcinjskiOkrugPathRoutes } from "./PcinjskiOkrugPathRoutes";

export const PlaninaKukavica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pcinjskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={kukavica1} alt="Planina Kukavica 1" />

      <h2>Planina Kukavica</h2>

      <p style={{ paddingTop: "50px" }}>
        Planina Kukavica je jedna od planina naše zemlje čije prirodne lepote i
        blagodeti još uvek nisu potpuno istražene. Ona skriva mnoge tajne i
        lepote, što joj daje dodatnu čar i notu misterije. Kukavica je oaza mira
        i opuštanja. Planina koja tek treba da doživi pravi procvat.
      </p>

      <img src={kukavica2} alt="Planina Kukavica 2" />

      <p>
        Prostrla se na teritoriji Vladičinog Hana, Leskovca i Vranja, između
        Vranjske i Leskovačke kotline, Grdeličke klisure i doline reke
        Veternice. Najviši vrh, Vlajna (1.441 m), nalazi se na teritoriji
        opštine Vladičin Han. Tu je smeštena najvažnija meteorološka stanica za
        jug Srbije. Na južnom delu planine uzdižu se dva vrha, Oblik (1.310 m) i
        Grot (1.327 m), paleo-volkanske kupe koje se zbog svojih pravilnih,
        kupastih oblika ponekad smatraju zasebnim planinama.
      </p>

      <img src={kukavica3} alt="Planina Kukavica 3" />

      <p>
        Kukavica je prekrivena gustim šumama, pretežno bukovim i hrastovim, dok
        je četinarska šuma zastupljena u manjoj meri. Najpoznatija je zlatna
        bukva, koja je deo istoimenog prirodnog rezervata i smatra se jednim od
        najkvalitetnijih drveta ove vrste u Srbiji. Bogatstvo flore ove planine
        upotpunjuju i druge biljne vrste, poput divlje maline, kupine, pečurki,
        lekovitog i začinskog bilja.
      </p>

      <img src={kukavica4} alt="Planina Kukavica 4" />

      <p>
        Ništa manje bogat nije ni životinjski svet. Kukavica je stanište brojnih
        životinjskih vrsta, među kojima se posebno izdvaja divlja svinja,
        lisica, srna i vuk od krupne divljači, dok su od sitne divljači prisutni
        fazan, divlji golub, zec, veverica i jazavac. Kao skladan ekosistem
        brojnih flora i faune, sa vodotokovima među kojima se izdvaja više od 50
        izvora pitke vode, Kukavica predstavlja jedan od najvažnijih turističkih
        potencijala opštine Han.
      </p>

      <img src={kukavica5} alt="Planina Kukavica 5" />

      <p>
        Na obroncima Kukavice, iznad kanjona Vučjanske reke, na 550 metara
        nadmorske visine, nalazi se arheološki lokalitet i kulturno dobro –
        utvrđenje Skobajić grad.
        <br />
        <br />
        Na ovoj planini postoje i dva smeštajna objekta: Lovački dom „Kukavica“,
        u vlasništvu JP „Srbijašume“, Šumsko gazdinstvo Vranje, i Planinarski
        dom „Preka voda“, pod ingerencijom PSk „Kukavica“ Leskovac.
      </p>
    </div>
  );
};
