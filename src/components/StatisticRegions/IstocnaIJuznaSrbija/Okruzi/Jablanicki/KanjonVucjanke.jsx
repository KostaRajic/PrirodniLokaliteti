import vucjanke1 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/kanjonVucjanke1.jpg";
import vucjanke2 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/kanjonVucjanke2.jpg";
import vucjanke3 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/kanjonVucjanke3.jpg";
import vucjanke4 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/kanjonVucjanke4.jpg";
import vucjanke5 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/kanjonVucjanke5.jpg";
import vucjanke6 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/KanjonVucjanke/kanjonVucjanke6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";

export const KanjonVucjanke = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(jablanickiOkrugPathRoutes.home)} />
      <header></header>
      <img src={vucjanke1} alt="Kanjon Vučjanke 1" />

      <h2>Kanjon Vučjanke</h2>

      <p style={{ paddingTop: "50px" }}>
        Kanjon Vučjanke deo je doline reke Vučjanke, desne pritoke Veternice.
        Vučjanka nastaje spajanjem Goleme i Male reke kod Jasičkog ravništa, na
        erozivnom proširenju gde se nalazi hotel "Vlaina" (686 m).
      </p>

      <img src={vucjanke2} alt="Kanjon Vučjanke 2" />

      <p>
        Kanjon je uscepen u severne padine planine Kukavica i nalazi se 18 km
        jugozapadno od Leskovca. Kanjonski oblik rečna dolina dobija ispod sela
        Zbežista i poteza Skolica. Kanjon je dug 2 km, uscepen između vrhova
        Kitka (988 m) i Samaric (619 m).
      </p>

      <img src={vucjanke3} alt="Kanjon Vučjanke 3" />

      <p>
        Ulaz u kanjon nalazi se na oko 500 metara n.v., a izlaz na oko 340
        metara n.v. Na jednoj isturenoj litici leve obale kanjona, na 150 m
        iznad reke, nalazi se Zelen Grad. Na izlazu iz kanjona nalazi se
        hidroelektrana Vučje, izgrađena 1903. godine.
      </p>

      <img src={vucjanke4} alt="Kanjon Vučjanke 4" />

      <p>
        Korito u kanjonu puno je „virova”, vodopada i slapova. „Virovi” privlače
        posebnu pažnju ljudi i zapravo predstavljaju kamene lonce ili kazane.
        Oni su fluvijalni erozivni oblici koji nastaju na mestima gde dolazi do
        snažne erozije, vrtložastog kretanja vodene mase i rečnog materijala
        koji ona nosi. Vremenom se na tim mestima formiraju bućnasta udubljenja
        u stenovitom rečnom koritu.
      </p>

      <img src={vucjanke5} alt="Kanjon Vučjanke 5" />

      <p>
        Lonci u kanjonu poznati su pod nazivom Đokini virovi. Oni su udubljeni u
        kristalne škriljce, a poređani su stepenasto, jedni ispod drugih, od
        najvećeg do najmanjeg. Predstavljaju turističku atrakciju ne samo Vučja,
        već i cele Leskovačke opštine.
      </p>

      <img src={vucjanke6} alt="Kanjon Vučjanke 6" />

      <p>
        Od vodopada izdvaja se:<br/><br/> Vodopad bezimenog potoka visine preko 30 metara,
        kaskadnog tipa i periodičnog karaktera. Nalazi se 100 metara iznad
        hidroelektrane Vučje, sa desne strane korita Vučjanke.<br/><br/> Vodopad pored
        hidroelektrane, sa leve strane korita Vučjanke, kaskadnog tipa, visok
        preko 40 metara i uvek ima vode.<br/><br/> Ostali vodopadi su manjih visina i
        nalaze se na samoj reci Vučjanci.
      </p>
    </div>
  );
};
