import tularskaBanja1 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/tularskaBanja1.jpg";
import tularskaBanja2 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/tularskaBanja2.jpg";
import tularskaBanja3 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/tularskaBanja3.jpg";
import tularskaBanja4 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/tularskaBanja4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";

export const TularskaBanja = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(jablanickiOkrugPathRoutes.home)} style={{fill: "white"}}/>
      <header></header>
      <img src={tularskaBanja1} alt="Tularska Banja 1" />

      <h2>Tularska Banja</h2>

      <p style={{ paddingTop: "50px" }}>
        Tularska Banja se nalazi u opštini Medveđa, na jugu Srbije, u malom
        proširenju doline Tularske reke, pritoke reke Jablanice, na nadmorskoj
        visini od 570 metara. Lako je dostupna jer se nalazi pored puta
        Beograd—Priština. Od Leskovca je udaljena 63 km, od Medveđe 18 km, a od
        Sijarinske Banje 15 km.
        <br />
        <br />
        Na području banje trenutno postoje dva izvora, koja su se pojavila 2012.
        godine tokom geoloških ispitivanja. Jedan izvor je tople vode
        temperature oko 40 stepeni, poznat kao "mali Gejzer", dok drugi izvor
        daje hladnu kiselu vodu u intervalu od 23 minuta.
        <br />
        <br />
        Tularska Banja je poznata po kvalitetu svoje vode; čak je 1932. godine
        proglašena za najbolju vodu u Jugoslaviji.
      </p>

      <img src={tularskaBanja2} alt="Tularska Banja 2" />

      <p>
        ​U Tularskoj banji nalazi se nekoliko izvora mineralnih voda. Ovi izvori
        su rezultat geoloških karakteristika područja, posebno raseda koji
        omogućavaju pojavu vode iz razbijenog izvorišta. Geološka istraživanja
        Lećkog andezitskog kompleksa ukazuju da se izvori pojavljuju u istočnom
        delu velike vulkansko-tektonske strukture, koja uključuje i veliku
        paleovulkansku kalderu.
        <br />
        <br />
        Pet izvora kisele vode je kaptirano u česmu sa nastrešnicom. Međutim,
        zbog ulaska obične vode u sabirni rezervoar, dolazi do mešanja, što može
        smanjiti mineralizaciju i temperaturu lekovite vode. Ukupna izdašnost
        ovih izvora iznosi oko 9.000 litara za 24 časa, a temperatura vode je
        konstantna i iznosi 15 stepeni Celzijusa. Zimi voda ne zmrzava, niti se
        sneg oko izvora zadržava.​
        <br />
        <br />
        Najjači izvor iz grupe termomineralnih voda je primitivno kaptiran slani
        izvor, uz koji se nalazi još jedan izvor mineralne vode bele boje
        (krečljiva boja)
      </p>

      <img src={tularskaBanja3} alt="Tularska Banja 3" />

      <p>
        ​Analize vode Tularske banje, koje je sproveo Marko T. Leko, pokazale su
        da je reč o muriatičnom kiseljaku sa povećanim sadržajem natrijuma,
        kalcijuma, hlora i slobodne ugljene kiseline. Kasnija ispitivanja su
        otkrila blagu prirodnu radioaktivnost, koja potiče od radona i radijuma.
        <br />
        <br />
        Stručnjaci V. Vujanović i M. Teofilović navode da se ova mineralna voda
        odlikuje značajnim sadržajem hidrokarbonata, sulfata, hlora, kalcijuma,
        natrijuma i bromne kiseline, što je svrstava među najznačajnije vode
        vulkanskog porekla u Srbiji. Takođe, prisutne su i značajne količine
        magnezijuma i silicijum-dioksida, kao i povećan sadržaj gvožđa,
        litijuma, cezijuma i stroncijuma, što dodatno doprinosi njenim
        terapijskim svojstvima.
      </p>

      <img src={tularskaBanja4} alt="Tularska Banja 4" />

      <p>
        ​Lekovite vode Tularske banje nisu dovoljno iskorišćene. Savremeni
        medicinski i turističko-ugostiteljski objekti ovde ne postoje, pa
        lokalno stanovništvo vodu koristi za samoinicijativno lečenje oboljenja
        organa za varenje, poremećaja metabolizma, anemičnih stanja i nervnih
        oboljenja.
        <br />
        <br />
        Najposećenija je kuća porodice Vukadinović, gde su se 2012. godine
        pojavila dva izvora:​
        <br />
        <br />
        Topli izvor: Temperatura vode iznosi oko 40°C.​
        <br />
        <br />
        Hladni izvor: Karakteriše ga gejzirski fenomen, s periodičnim izbijanjem
        vode na svakih 23 minuta, pri temperaturi od 23°C.​
        <br />
        <br />
        Oba izvora su naknadno kaptirana; topli izvor se sliva u manji bazen,
        dok je hladni izvor priključen na cevovod.
      </p>
    </div>
  );
};
