import besenovackoJezero1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/besenovackoJezero2.jpg";
import besenovackoJezero2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/besenovackoJezero3.jpg";
import besenovackoJezero3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/besenovackoJezero4.jpg";
import besenovackoJezero4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/besenovackoJezero5.jpg";
import besenovackoJezero5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/BesenovackoJezero/besenovackoJezero6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const BesenovackoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={besenovackoJezero1} alt="Bešenovačko jezero 1" />

      <h2 style={{ color: "white" }}>Bešenovačko jezero</h2>

      <p>
        Bešenovačko jezero, poznato i kao jezero Beli kamen, pravo je prirodno
        blago Fruške gore. Nekada je bilo kop laporca u vlasništvu beočinske
        fabrike cementa, a danas, zahvaljujući kontrastu između plavetnila vode
        i bele boje kamena, podseća na mediteranske predele. Nakon što je kop
        iscrpljen i područje napusteno, jezero je počelo da se puni vodom tokom
        osamdesetih godina prošlog veka. Za više od dve decenije, nivo vode je
        porastao do dubine od oko 50 metara i nastavlja da raste. Meštani
        pričaju da je tokom kopanja presečena glavna vodena žila, zbog čega su
        okolni izvori presušili. Voda je kristalno čista i tirkizne boje, a
        mnogi veruju da ima lekovita svojstva zbog specifičnog mineralnog
        sastava. Na obali je često moguće videti posetioce koji se mažu blatom,
        za koje se takođe smatra da ima terapijska dejstva.
      </p>

      <img src={besenovackoJezero2} alt="Bešenovačko jezero 2" />

      <p>
        Bešenovačko jezero se izdvaja od drugih akumulacionih jezera, jer je
        nastalo na način sličan Ledinačkom jezeru. Nekada su ga pecaroši pamtili
        po bogatstvu ribe, ali danas je većina ribe ulovljena, pa su preostali
        primerci poput tostolobika, crvenperke i babuške. U plićaku se i dalje
        mogu videti jata sitnih riba.
      </p>

      <img src={besenovackoJezero3} alt="Bešenovačko jezero 3" />
      <p>
        Iako se nalazi duboko u srcu nacionalnog parka i okruženo netaknutom
        prirodom, Bešenovačko jezero svakodnevno privlači veliki broj
        posetilaca. Vikendom je parking često pun, a na plaži je teško pronaći
        slobodno mesto za šator ili suncobran. S obzirom na to da nema prirodnog
        hlada, suncobran je neophodan ako planirate da provedete ceo dan na
        jezeru. Ako želite da zauzmete najbolje mesto, preporučujemo da stignete
        rano ujutro.
      </p>

      <img src={besenovackoJezero5} alt="Bešenovačko jezero 4" />
      <p>
        Jedan deo plaže jezera je uredan i opremljen sa nekoliko kafića gde
        možete da se opustite, uživate u osveženju i pronađete slobodnu
        ležaljku. S druge strane, obala jezera ostala je divlja, namenjena
        avanturistima, ali to joj ne umanjuje atraktivnost. Ako se odlučite za
        ovu stranu, preporučujemo da ponesete prostirku, jer je na tom delu
        jezera prisutno mnogo sitnog kamenja, što može otežati udoban boravak.
      </p>

      <img src={besenovackoJezero4} alt="Bešenovačko jezero 5" />

      <p>
        Bešenovačko jezero smešteno je blizu sela Bešenovački Prnjavor, u
        Vojvodini, na teritoriji opštine Sremska Mitrovica. Od Novog Sada je
        udaljeno samo 30 kilometara. Ako dolazite iz Beograda, potrebno je da
        skrenete sa puta prema Rumi kada ugledate oznaku za Bešenovo ili selo
        Jazak. Nastavite pravo, a sa desne strane ćete primetiti crkvu. Na
        sledećoj raskrsnici, skrenite levo za Frušku Goru, dok desno vodi
        makadamski put do jezera Bešenovo. Parking je neposredno pre samog
        jezera.
      </p>
    </div>
  );
};
